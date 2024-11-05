import React from "react";

export const Nav = ({ children }) => {
  return (
    <nav className="h-full">
      <ul className="divide-y divide-slate-800  h-full min-h-[65vh]">{children}</ul>
    </nav>
  );
};
