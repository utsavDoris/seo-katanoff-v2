/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://dev-katanoff-v2.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
     generateIndexSitemap: false, 
    outDir: './src/app',
};
