"use client";
import dynamic from "next/dynamic";

export const NotFoundPage = dynamic(() => import("./ui/NotFoundPage.jsx"), {
  ssr: false,
});
