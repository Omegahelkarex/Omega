"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
function NavItems({ classes }) {
const currentPath = usePathname();
  return (
    <ul className={classes}>
      <li className={`${currentPath==='/' ? "text-skin-color":""} font-bold`}>
        <Link href={"/"}>Home</Link>
      </li>
      <li className={`${currentPath==='/about' ? "text-skin-color":""} font-bold`}>
        <Link href={"/about"}>About</Link>
      </li>
      <li className={`${currentPath==='/portfolio' ? "text-skin-color":""} font-bold`}>
        <Link href={"/portfolio"}>Portfolio</Link>
      </li>
      <li className={`${currentPath==='/contact' ? "text-skin-color":""} font-bold`}>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
}

export default NavItems;
