"use client"
import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import ColorSwitcher from "./ColorSwitcher";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName=usePathname()
  return (
    <div className="dark:bg-dark-gray bg-light-white  w-full lg:hidden z-10 py-5 px-5 fixed top-0 left-0">
      <ul className="w-full flex justify-between items-center">
        <li className={`${pathName==='/' ? "text-skin-color":""}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={`${pathName==='/about' ? "text-skin-color":""}`}>
          <Link href={"/about"}>About</Link>
        </li>
        <li className={`${pathName==='/portfolio' ? "text-skin-color":""}`}>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li className={`${pathName==='/contact' ? "text-skin-color":""}`}>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
            <DarkModeToggle/>
        </li>
        <li className="relative">
            <ColorSwitcher classes="top-10 right-0" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
