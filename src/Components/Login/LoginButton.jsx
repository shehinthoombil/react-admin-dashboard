import * as React from "react";

export function LoginButton({ children, variant = "primary" }) {
  return (
    <button
      className={`flex flex-col justify-center items-center  w-full   rounded-[100px] ${
        variant === "primary"
          ? "font-bold text-white bg-amber-500"
          : "font-medium text-stone-900"
      }`}
    >
      <span className="flex-1 py-4  px-28 max-w-full  max-md:px-5">
        {children}
      </span>
    </button>
  );
}