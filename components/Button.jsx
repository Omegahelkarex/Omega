import Link from "next/link";
import React from "react";

function Button({ text, classes ,to }) {
  return (
    <Link href={to ? to:""}>
      <div
        className={`${classes} px-8 py-3 w-max rounded-full font-bold text-lg text-light-text dark:text-dark-text`}
      >
        {text}
      </div>
    </Link>
  );
}

export default Button;
