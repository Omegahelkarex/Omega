import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import myImage from "../public/myphoto.png";
import TypingText from "@/components/TypingText";
function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full min-h-screen flex md:flex-row flex-col-reverse gap-10 items-center justify-between px-8 py-10">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold">
            Hello, my name is{" "}
            <span className="text-skin-color">Piyush Chatterjee</span>
          </h3>
          <h3 className="text-[30px] mt-5 font-bold">
            I am a <TypingText />
          </h3>
          <p className="text-xl mt-5 text-light-text-2 dark:text-dark-text-2">
           Greetings! I&apos;m Piyush Chatterjee, a dedicated and curious individual with a passion for web development and a keen interest in exploring the world of technology. Over the past year, I&apos;ve immersed myself in the dynamic field of web development, honing my skills and embracing the ever-evolving landscape of programming languages and frameworks.Currently, my focus extends beyond development as I am studying DevOps. Exploring the synergies between development and operations.
          </p>
          <Button to={"/contact"} text="Contact Me" classes="mt-10 bg-skin-color" />
        </div>
        <div className="md:w-1/2 h-full flex items-center justify-center">
          <Image src={myImage} alt="my photo" width={400} />
        </div>
      </div>
    </div>
  );
}

export default Home;
