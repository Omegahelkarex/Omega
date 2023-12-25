import Button from "@/components/Button";
import React from "react";
import contact from "../../public/contact.png";
import Image from "next/image";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { MailCheck } from "lucide-react";
import Link from "next/link";
function page() {
  return (
    <div>
      <div className="w-full py-10 px-8 flex flex-col justify-center">
        <div>
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <div className="mt-2 w-12 h-1 bg-skin-color rounded-full"></div>
          <div className="mt-1 w-6 h-1 bg-skin-color rounded-full"></div>
        </div>
        <div className="w-full text-center mt-10">
          <h2 className="text-2xl font-bold">Do you have any question ?</h2>
          <p className="font-semibold mt-4">I AM ALWAYS READY TO ANSWER</p>
        </div>
        <div className="bg-light-white dark:bg-dark-gray border-2 border-solid border-light-border dark:border-dark-border rounded-2xl p-4 mt-10 sm:flex justify-between items-center">
          <div className="mx-auto flex bg-skin-color p-10 items-center gap-5 rounded-2xl flex-col">
            <Image src={contact} alt="contact" width={200} height={200} />
            <div>
              <h2 className="text-2xl">Contact Me</h2>
              <p className="mt-4">Feel free to contact me</p>
              <ul className="flex flex-col gap-5 mt-10">
                <li className="flex gap-2">
                  <Phone />
                  <span className="font-bold">8101089650</span>
                </li>
                <Link href="mailto:chatterjeepiyush211112003@gmail.com">
                  <li className="flex gap-2">
                    <MailCheck />
                    <span className="font-bold">
                      omegahelkarex@gmail.com
                    </span>
                  </li>
                </Link>
                <li className="flex gap-2">
                  <MapPin />
                  <span className="font-bold">Kharagpur, West Bengal</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:w-1/2 mt-10 sm:mt-0">
            <div className="flex flex-col gap-5">
              <input
                placeholder="Name"
                type="text"
                className=" dark:bg-dark-background bg-light-background outline-none w-full rounded-lg p-4"
              />
              <input
                placeholder="Email"
                type="email"
                className="dark:bg-dark-background bg-light-background outline-none w-full rounded-lg p-4"
              />
              <textarea
                name="message"
                placeholder="Message"
                id="message"
                cols="30"
                rows="5"
                className="resize-none dark:bg-dark-background bg-light-background outline-none w-full rounded-lg p-4"
              ></textarea>
            </div>
            <Button text="Send Message" classes="mt-5 bg-skin-color" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
