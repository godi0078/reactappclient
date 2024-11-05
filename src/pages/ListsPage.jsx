import React from "react";
import { LoggedLayout } from "../components/LoggedLayout";
import { Link } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";
import { ListTable } from "../components/ListTable";


export const ListsPage = () => {
  return (
    <LoggedLayout>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-extrabold text-gray-900">Списки</h3>

        <Link
          to={"/list/add"}
          className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <IconPlus className="mr-1" stroke={2} size={18} />
          Добавить список
        </Link>
      </div>

      <div className="py-5">
        <div className="md:col-12 flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:max-h-96 lg:supports-scrollbars:pr-2">
          <ListTable />
        </div>
      </div>
    </LoggedLayout>
  );
};
