import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function SidebarItem({ icon, label, navigate_to }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine if the current route matches the `navigate_to` route
  const isActive = location.pathname === navigate_to;

  return (
    <div onClick={() => navigate(navigate_to)}
      className={`flex  flex-col justify-center cursor-pointer py-4 px-28 pl-4 w-full ${
        isActive
          ? "font-bold text-amber-500 bg-orange-50 border-solid border-r-[3px] border-r-amber-500"
          : "bg-white"
      } max-w-[250px]`}
    >
      <div className="flex pl-2 gap-2.5 items-center w-full">
        <div className="font-semibold">{icon}</div>
        <div
          
          className="flex-1 shrink self-stretch my-auto basis-0 cursor-pointer"
        >
          {label}
        </div>
      </div>
    </div>
  );
}
