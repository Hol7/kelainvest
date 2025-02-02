import React, { Suspense, lazy } from "react";

const LazyImage = lazy(() => import("next/image"));
import maintenanceImage from "@/../../public/images/kalunderconstruction.png";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyImage
          src={maintenanceImage}
          alt="Maintenance"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </Suspense>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Le site est en cours de maintenance
        </h1>
      </div>
      </div>

  );
}