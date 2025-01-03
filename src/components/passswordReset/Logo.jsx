import * as React from "react";

export function Logo() {
  return (
    <div className="flex flex-col justify-center items-start py-6 pr-2 pl-9 w-full border-b border-solid bg-stone-100 border-b-stone-300 min-h-[76px] max-md:pl-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/92ed223aefa21eb9fca2c5e82eb334777718e622937fbf0efee2b9d71696bf82?placeholderIfAbsent=true&apiKey=28fe3b653a5f40f89b50637bb38c8709"
        alt="Company Logo"
        className="object-contain max-w-full aspect-[6.25] w-[188px]"
      />
    </div>
  );
}