"use client";

import { StepForward } from "lucide-react";
import { Dot } from "lucide-react";
import { StepBack } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function ProjectCarousel() {
  const slides = [
    {
      url: "/project1.png",
      title: "Learning Project",
    },
    {
      url: "/project2.png",
      title: "Tution Website",
    },
    {
      url: "/project3.png",
      title: "Snake Game",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="max-w-[700px] w-full m-auto px-4 relative group">
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="w-full rounded-xl relative">
          <Image
            alt="project-image"
            src={slides[currentIndex].url}
            width={700}
            height={500}
            className="rounded-2xl w-full border-2 border-solid border-skin-color"
          />
          <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <StepBack onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <StepForward onClick={nextSlide} size={30} />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center mt-5">
          {slides[currentIndex].title}
        </h1>
      </div>
      {/* Left Arrow */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <Dot />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
