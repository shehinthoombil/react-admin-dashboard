import * as React from "react";

export function Button({ children, variant = "primary", onClick }) {
  const baseStyles = "flex flex-col justify-center items-center w-full text-sm leading-6 text-center min-h-[48px] rounded-[100px]";
  const variants = {
    primary: "font-bold text-white bg-amber-500",
    secondary: "font-medium tracking-normal text-stone-900"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      tabIndex={0}
    >
      <div className="flex-1 px-14 max-w-full mt-3 w-[343px] max-md:px-5">
        {children}
      </div>
    </button>
  );
}