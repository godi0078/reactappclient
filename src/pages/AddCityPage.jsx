import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity } from "../redux/features/city/citySlice";
import { LoggedLayout } from "../components/LoggedLayout";
import { IconChevronLeft } from "@tabler/icons-react";

import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export const AddCityPage = () => {
  const [name, setName] = useState("");
  const [foundation, setFoundation] = useState("");
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.list);

  useEffect(() => {
    if (status) toast(status);
  }, [status]);

  const handleSubmit = () => {
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("foundation", foundation);

      dispatch(addCity({ name, foundation }));

      setName("");
      setFoundation("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoggedLayout>
      <form
        className="space-y-4 flex flex-col justify-between align-middle h-full"
        onSubmit={(e) => e.preventDefault()}>
        <h3 className="mb-6 text-center text-xl font-extrabold text-gray-900">
          Добавление города
        </h3>

        <div className="flex-grow">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700">
              Название города
            </label>

            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700">
              Дата основания города
            </label>

            <input
              type="text"
              onChange={(e) => setFoundation(e.target.value)}
              value={foundation}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <NavLink
            to={"/"}
            className="group flex items-center relative w-auto float-left py-2 px-4 border border-transparent text-sm font-medium rounded-md text-slate-800 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <IconChevronLeft className="mr-1" stroke={2} size={18} />
            Назад
          </NavLink>

          <button
            type="submit"
            onClick={handleSubmit}
            className="group relative w-60 float-right py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Добавить город
          </button>
        </div>
      </form>
    </LoggedLayout>
  );
};
