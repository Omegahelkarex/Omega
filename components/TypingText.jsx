"use client"
import Typed from "typed.js";
import { useEffect, useRef } from "react";
function TypingText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Web Developer"," Writer"," Student"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span className="text-skin-color" ref={el}></span>
  );
}

export default TypingText;
