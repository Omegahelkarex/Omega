import Button from "@/components/Button";
import { Calendar } from "lucide-react";
import React from "react";

function aboutme() {
  return (
    <div className="h-full">
      <div className="px-8 py-10 w-full flex flex-col justify-center">
        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <div className="mt-2 w-12 h-1 bg-skin-color rounded-full"></div>
          <div className="mt-1 w-6 h-1 bg-skin-color rounded-full"></div>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-2xl">
            I am Piyush Chatterjee a{" "}
            <span className="text-skin-color">Web Developer & a Writer</span>
          </h3>
          <p className="leading-7 mt-5 dark:text-dark-text-2 text-light-text-2">
            Greetings! I&apos;m Piyush Chatterjee, a dedicated and curious
            individual with a passion for web development and a keen interest in
            exploring the world of technology. Over the past year, I&apos;ve
            immersed myself in the dynamic field of web development, honing my
            skills and embracing the ever-evolving landscape of programming
            languages and frameworks.Currently, my focus extends beyond
            development as I am studying DevOps. Exploring the synergies between
            development and operations.
          </p>
        </div>
        <div className="w-full flex xl:flex-row flex-col gap-10 mt-10">
          <div className="xl:w-3/5 w-full">
            <div className="flex sm:flex-row flex-col gap-5">
              <div className="sm:w-1/2 w-full">
                <ul>
                  <li className="py-2 border-b-2 border-bg-black-50">
                    <span className="font-semibold mr-2">Birthday:</span>{" "}
                    <span className="text-light-text-2 dark:text-dark-text-2">
                      21 NOV 2003
                    </span>
                  </li>
                  <li className="py-2 border-b-2 border-bg-black-50">
                    <span className="font-semibold mr-2">Email:</span>
                    <span className="text-light-text-2 dark:text-dark-text-2">
                      omegahelkarex@gmail.com
                    </span>
                  </li>
                  <li className="py-2 border-b-2 border-bg-black-50">
                    <span className="font-semibold mr-2">Website:</span>
                    <span className="text-light-text-2 dark:text-dark-text-2">
                      https://piyushportfolio.vercel.app/
                    </span>
                  </li>
                  <li className="py-2 border-b-2 border-bg-black-50">
                    <span className="font-semibold mr-2">Age:</span>
                    <span className="text-light-text-2 dark:text-dark-text-2">
                      20
                    </span>
                  </li>
                </ul>
              </div>
              <div className="sm:w-1/2 w-full">
                <ul>
                  <li className="py-2 border-b-2 border-bg-black-50">
                    <span className="font-semibold mr-2">Profession:</span>
                    <span className="text-light-text-2 dark:text-dark-text-2">
                      Student/Freelancer
                    </span>
                  </li>
                  <li className="py-2 border-b-2 border-bg-black-50">
                    <span className="font-semibold mr-2">Degree:</span>
                    <span className="text-light-text-2 dark:text-dark-text-2">
                      B.TECH CSE(2026)
                    </span>
                  </li>
                  <li className="py-2 border-b-2 border-bg-black-50">
                    <span className="font-semibold mr-2">City:</span>
                    <span className="text-light-text-2 dark:text-dark-text-2">
                      Kolkata
                    </span>
                  </li>
                  <li className="py-2 border-b-2 border-bg-black-50">
                    <span className="font-semibold mr-2">Phone:</span>
                    <span className="text-light-text-2 dark:text-dark-text-2">
                      +91 8101089650
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-5 flex gap-5 flex-wrap">
              <Button text="Download CV" classes="bg-skin-color" />
              <Button to={"contact"} text="Contact Me" classes="bg-skin-color" />
            </div>
          </div>
          <div className="xl:w-2/5 w-full">
            <ul className="flex flex-col justify-between h-full max-xl:min-h-56">
              <li>
                <div className="flex justify-between">
                  <p className="font-semibold">CSS</p>
                  <span>76%</span>
                </div>
                <div className="w-full mt-2 dark:bg-dark-border bg-light-border rounded-full h-2">
                  <div className="w-[76%] h-full rounded-full bg-skin-color"></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <p className="font-semibold">JS</p>
                  <span>80%</span>
                </div>
                <div className="w-full mt-2 dark:bg-dark-border bg-light-border rounded-full h-2">
                  <div className="w-[76%] h-full rounded-full bg-skin-color"></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <p className="font-semibold">C</p>
                  <span>75%</span>
                </div>
                <div className="w-full mt-2 dark:bg-dark-border bg-light-border rounded-full h-2">
                  <div className="w-[75%] h-full rounded-full bg-skin-color"></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <p className="font-semibold">Python</p>
                  <span>80%</span>
                </div>
                <div className="w-full mt-2 dark:bg-dark-border bg-light-border rounded-full h-2">
                  <div className="w-[80%] h-full rounded-full bg-skin-color"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col mt-10 gap-10">
          <div className="sm:w-1/2 w-full">
            <h3 className="font-bold text-2xl">Education</h3>
            <div className="mt-5 dark:bg-dark-gray bg-light-white border border-solid dark:border-dark-border border-light-border p-5 rounded-xl">
              <div className="flex flex-col gap-5">
                <p className="flex gap-2 items-center dark:text-dark-text-2 text-light-text-2">
                  <Calendar /> <span>2019 - 2020</span>
                </p>
                <p className="font-bold text-lg">Cleared Class 10 Boards</p>
                <p className="font-medium text-lg dark:text-dark-text-2 text-light-text-2">
                  Cleared class 10 boards from VMHS, I was lucky enough to
                  complete the exams just before pandemic.I have cleared my
                  boards with 90% overall marks.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <p className="flex gap-2 items-center dark:text-dark-text-2 text-light-text-2">
                  <Calendar /> <span>2021 - 2022</span>
                </p>
                <p className="font-bold text-lg">Cleared Class 12 Boards</p>
                <p className="font-medium text-lg dark:text-dark-text-2 text-light-text-2">
                 Completed my class 12 from GIS with 85% marks during the time of Pandemic and partial lockdown.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <p className="flex gap-2 items-center dark:text-dark-text-2 text-light-text-2">
                  <Calendar /> <span>2022 - 2026</span>
                </p>
                <p className="font-bold text-lg">Pursuing B.TECH Data Science</p>
                <p className="font-medium text-lg dark:text-dark-text-2 text-light-text-2">
                 Unfortunately took admission in Brainware University. There is no coding culture and most of the students are only interested in scoring good marks. Anyway me and my friends are trying to build a coding culture and a tech club.
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 w-full">
            <h3 className="font-bold text-2xl">Experience</h3>
            <div className="mt-5 dark:bg-dark-gray bg-light-white border border-solid dark:border-dark-border border-light-border p-5 rounded-xl">
              <div className="flex flex-col gap-5">
                <p className="flex gap-2 items-center dark:text-dark-text-2 text-light-text-2">
                  <Calendar /> <span>2017 - 2018</span>
                </p>
                <p className="font-bold text-lg">Started with GW BASIC</p>
                <p className="font-medium text-lg dark:text-dark-text-2 text-light-text-2">
                  I have started my coding journey in class 7 with basic. During this time only i have decided to pursue computer science. After class 8 there was a pause in my journey since i have changed my school and the new school didn&apos;t provided any coding facility.
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <p className="flex gap-2 items-center dark:text-dark-text-2 text-light-text-2">
                  <Calendar /> <span>2020 - 2022</span>
                </p>
                <p className="font-bold text-lg">Restarted my coding journey</p>
                <p className="font-medium text-lg dark:text-dark-text-2 text-light-text-2">
                  I have restarted my coding journey in class 11 by learning the easiest coding language of all Python. After finishing school i learned C and college first sem i started with learning web development on my own from youtube
                </p>
              </div>
              <div className="flex flex-col gap-5 mt-10">
                <p className="flex gap-2 items-center dark:text-dark-text-2 text-light-text-2">
                  <Calendar /> <span>2023 - Present</span>
                </p>
                <p className="font-bold text-lg">Backend and Ml</p>
                <p className="font-medium text-lg dark:text-dark-text-2 text-light-text-2">
                 Currently I am studying about the concepts of backend and machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutme;
