import React from "react";
import { Sidebar } from "../components/Sidebar";

export const LoggedLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          <div className="max-w-screen-lg mx-auto shadow-md rounded-xs bg-white">
            <div className="grid grid-cols-1 min-h-96 h-max md:grid-cols-12 border divide-x divide-gray-200">
              <Sidebar />

              <div className="p-4 md:col-span-9 relative">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
