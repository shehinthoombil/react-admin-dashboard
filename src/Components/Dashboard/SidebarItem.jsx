import * as React from "react";

export function SidebarItem({ icon, label, isActive }) {
  return (
    <div className={`flex flex-col justify-center py-2.5 pr-2 pl-4 w-full ${isActive ? 'font-bold text-amber-500 bg-orange-50 border-solid border-r-[3px] border-r-amber-500' : 'bg-white'} max-w-[207px] ${isActive ? '' : 'mt-2'}`}>
      <div className="flex gap-2.5 items-center w-full">
        <img
          loading="lazy"
          src={icon}
          alt={`${label} icon`}
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="flex-1 shrink self-stretch my-auto basis-0">
          {label}
        </div>
      </div>
    </div>
  );
}