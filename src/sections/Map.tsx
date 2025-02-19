"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MapClientComponent = dynamic(
  () => import("./MapClient").then(mod => ({ default: mod.MapClient })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading map...</div>
      </div>
    ),
  }
);

export const Map = () => {
  return (
    <Suspense fallback={<div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
      <div className="text-gray-600">Loading map...</div>
    </div>}>
      <MapClientComponent />
    </Suspense>
  );
};