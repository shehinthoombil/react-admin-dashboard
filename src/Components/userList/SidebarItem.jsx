import * as React from "react";

export function SidebarItem({ icon, text, isActive }) {
  const baseClasses = "flex flex-col justify-center py-2.5 pr-2 pl-4 w-full max-w-[207px]";
  const activeClasses = isActive
    ? "font-bold text-amber-500 bg-orange-50 border-solid border-r-[3px] border-r-amber-500"
    : "bg-white";

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <div className="flex gap-2.5 items-center w-full">
        <img
          loading="lazy"
          src={icon}
          alt={`${text} Icon`}
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="flex-1 shrink self-stretch my-auto basis-0">
          {text}
        </div>
      </div>
    </div>
  );
}