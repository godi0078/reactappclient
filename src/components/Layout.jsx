import React from "react";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-200 flex flex-col justify-center sm:px-6 lg:px-8">
        {children}
      </div>
    </React.Fragment>
  );
};
