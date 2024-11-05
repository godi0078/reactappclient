import React from "react";
import { Nav } from "./Nav";
import { NavItem } from "./NavItem";
import { NavFooter } from "./NavFooter";

export const Sidebar = () => {
  return (
    <div className="md:col-span-3 bg-slate-900">
      <Nav>
        <NavItem href="/" isActive>
          Пул городов
        </NavItem>
        <NavItem href="/lists" isActive>
          Списки городов
        </NavItem>

        <NavFooter />
      </Nav>
    </div>
  );
};
