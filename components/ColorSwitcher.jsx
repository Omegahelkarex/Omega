"use client";
import { Palette } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function ColorSwitcher({classes}) {
  const colors = ["#ec1839", "#fa5b0f", "#37b182", "#1854b4", "#f021b2"];
  const colorSwitch =useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (colorSwitch.current && !colorSwitch.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [colorSwitch]);
  const handleColorChange = (color) => {
    document.documentElement.style.setProperty("--skin-color", color);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  return (
    <div ref={colorSwitch}>
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="flex items-center justify-center"
        type="button"
        onClick={() => setOpen(!open)}
      >
        <Palette />
      </button>
      {open && (
        <div
          id="dropdownHover"
          className={`${classes} z-10 absolute bg-light-background divide-y dark:divide-dark-border divide-light-border rounded-lg shadow w-max dark:bg-dark-background`}
        >
          <ul
            className="py-2 px-4 flex gap-2 flex-col"
            aria-labelledby="dropdownHoverButton"
          >
            
            <li>
              <button onClick={()=>handleColorChange("#ec1839")} className="w-5 h-5 rounded-full bg-[#ec1839] hover:border-2 hover:opacity-40"></button>
            </li>
            <li>
              <button onClick={()=>handleColorChange("#fa5b0f")} className="w-5 h-5 rounded-full bg-[#fa5b0f] hover:border-2 hover:opacity-40"></button>
            </li>
            <li>
              <button onClick={()=>handleColorChange("#37b182")} className="w-5 h-5 rounded-full bg-[#37b182] hover:border-2 hover:opacity-40"></button>
            </li>
            <li>
              <button onClick={()=>handleColorChange("#1854b4")} className="w-5 h-5 rounded-full bg-[#1854b4] hover:border-2 hover:opacity-40"></button>
            </li>
            <li>
              <button onClick={()=>handleColorChange("#f021b2")} className="w-5 h-5 rounded-full bg-[#f021b2] hover:border-2 hover:opacity-40"></button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );

}

export default ColorSwitcher;
