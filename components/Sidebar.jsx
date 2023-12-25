import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import ColorSwitcher from "./ColorSwitcher";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import NavItems from "./NavItems";

function Sidebar() {
  return (
    <div className="lg:flex flex-col pt-8 px-8 pb-4 hidden w-60 fixed dark:bg-dark-gray bg-light-white h-screen border-r-2 border-light-border border-solid dark:border-dark-border">
      <div className="flex flex-col h-[90%] items-center justify-between ">
        <div>
          <p className="text-2xl mt-10 tracking-[0.3em] text-skin-color font-rocky">
            Omega
          </p>
        </div>
        <NavItems classes="text-2xl flex gap-5 flex-col items-baseline" />
        <div className="flex gap-5">
          <div className=" dark:bg-dark-gray rounded-full p-2 border-2 border-solid dark:border-dark-border border-light-border bg-light-white">
            <DarkModeToggle />
          </div>
          <div className=" relative dark:bg-dark-gray rounded-full p-2 border-2 border-solid dark:border-dark-border border-light-border bg-light-white">
            <ColorSwitcher classes="bottom-12 right-0" />
          </div>
        </div>
      </div>
      <div className="flex gap-5 w-full px-4 py-2 mt-auto justify-between ">
        <Link target="_blank" href={"https://github.com/omegahelkarex"}>
          <Github />
        </Link>
        <Link target="_blank" href={"https://www.instagram.com/omega.helkarex_"}>
          <Instagram />
        </Link>
        <Link target="_blank" href={"https://x.com/omega_helkarex"}>
          <Twitter />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
