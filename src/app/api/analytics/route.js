// import { google } from "googleapis";
// import { NextResponse } from "next/server";

// export const runtime = "nodejs"; // Required for googleapis on Vercel
// export const dynamic = "force-dynamic"; // Prevent caching
// export const revalidate = 0;

// // Google Auth Helper
// function getAuth() {
//     const raw = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
//     if (!raw) throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS_JSON env");

//     const credentials = JSON.parse(raw);

//     return new google.auth.GoogleAuth({
//         credentials,
//         scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
//     });
// }

// // GET Handler
// export async function GET(req) {
//     try {
//         // --- 1) Check Admin Secret Key (Optional but recommended) ---
//         const adminKey = req.headers.get("x-admin-key");
//         if (!adminKey || adminKey !== process.env.ADMIN_SECRET_KEY) {
//             return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//         }

//         const propertyId = process.env.GA_PROPERTY_ID;
//         if (!propertyId) throw new Error("Missing GA_PROPERTY_ID env");

//         // --- 2) Authenticate Google Analytics API ---
//         const auth = getAuth();
//         const analyticsdata = google.analyticsdata({ version: "v1", auth });

//         // --- 3) Fetch Summary Metrics (last 7 days) ---
//         const summary = await analyticsdata.properties.runReport({
//             property: `properties/${propertyId}`,
//             requestBody: {
//                 dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
//                 metrics: [
//                     { name: "activeUsers" },
//                     { name: "sessions" },
//                     { name: "screenPageViews" }, // If this errors, replace with { name: "views" }
//                 ],
//             },
//         });

//         // --- 4) Fetch Top Pages ---
//         const topPages = await analyticsdata.properties.runReport({
//             property: `properties/${propertyId}`,
//             requestBody: {
//                 dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
//                 dimensions: [{ name: "pagePath" }],
//                 metrics: [{ name: "screenPageViews" }],
//                 orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
//                 limit: 10,
//             },
//         });

//         // --- 5) Fetch Top Traffic Sources ---
//         const sources = await analyticsdata.properties.runReport({
//             property: `properties/${propertyId}`,
//             requestBody: {
//                 dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
//                 dimensions: [{ name: "sessionDefaultChannelGroup" }],
//                 metrics: [{ name: "sessions" }],
//                 orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
//                 limit: 10,
//             },
//         });

//         // --- 6) Send Response ---
//         return NextResponse.json({
//             summary: summary.data,
//             topPages: topPages.data,
//             sources: sources.data,
//         });

//     } catch (err) {
//         console.error("GA API error:", err.message || err);
//         return NextResponse.json({ error: "Failed to fetch analytics" }, { status: 500 });
//     }
// }
import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Google Auth Helper
function getAuth() {
    const raw = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    if (!raw) throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS_JSON env");

    const credentials = JSON.parse(raw);

    return new google.auth.GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });
}

export async function GET(req) {
    try {
        // --- 1) Verify Admin Secret Key ---
        const adminKey = req.headers.get("x-admin-key");
        if (!adminKey || adminKey !== process.env.ADMIN_SECRET_KEY) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const propertyId = process.env.GA_PROPERTY_ID;
        if (!propertyId) throw new Error("Missing GA_PROPERTY_ID env");

        // --- 2) Authenticate ---
        const auth = getAuth();
        const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

        // --- 3) Fetch Summary Metrics ---
        const summary = await analyticsdata.properties.runReport({
            property: `properties/${propertyId}`,
            requestBody: {
                dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
                metrics: [
                    { name: "activeUsers" },
                    { name: "sessions" },
                    { name: "screenPageViews" },
                ],
            },
        });

        // --- 4) Fetch Top Pages ---
        const topPages = await analyticsdata.properties.runReport({
            property: `properties/${propertyId}`,
            requestBody: {
                dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
                dimensions: [{ name: "pagePath" }],
                metrics: [{ name: "screenPageViews" }],
                orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
                limit: 10,
            },
        });

        // --- 5) Fetch Top Traffic Sources ---
        const sources = await analyticsdata.properties.runReport({
            property: `properties/${propertyId}`,
            requestBody: {
                dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
                dimensions: [{ name: "sessionDefaultChannelGroup" }],
                metrics: [{ name: "sessions" }],
                orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
                limit: 10,
            },
        });

        return NextResponse.json({
            summary: summary.data.rows || [],
            topPages: topPages.data.rows || [],
            sources: sources.data.rows || [],
        });

    } catch (err) {
        console.error("GA API error:", err);
        return NextResponse.json(
            { error: "Failed to fetch analytics", details: err.message },
            { status: 500 }
        );
    }
}
