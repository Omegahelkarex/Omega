import ProjectCarousel from "@/components/ProjectCarousel";
import React from "react";

function page() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen px-8 py-10 w-full flex flex-col justify-center">
        <div>
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="mt-2 w-12 h-1 bg-skin-color rounded-full"></div>
          <div className="mt-1 w-6 h-1 bg-skin-color rounded-full"></div>
        </div>

        <ProjectCarousel />
      </div>
    </div>
  );
}

export default page;
