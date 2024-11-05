import React from "react";
import { NavLink } from "react-router-dom";

export const NavItem = ({ href, isActive, children }) => {
  return (
    <li className="flex-grow cursor-pointer">
      <NavLink
        to={href}
        href={href}
        className={`px-4 py-5 text-sm block hover:text-slate-300 ${
          isActive ? "text-slate-400" : "text-grey-800"
        }`}>
        {children}
      </NavLink>
    </li>
  );
};
