import React from "react";
import { SidebarItem } from "./SidebarItem";

function Sidebar({ items }) {
  return (
    <div className="flex flex-col bg-white border-r">
      {items.map((item, index) => (
        <SidebarItem key={index} {...item} />
      ))}
    </div>
  );
}

export default Sidebar;
