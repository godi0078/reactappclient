import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../redux/features/list/listSlice";
import { LoggedLayout } from "../components/LoggedLayout";
import { IconChevronLeft } from "@tabler/icons-react";

import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export const AddListPage = () => {
  const [name, setName] = useState("");
  const [acronym, setAcronym] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.city);

  useEffect(() => {
    if (status) toast(status);
  }, [status]);

  const handleSubmit = () => {
    try {
      dispatch(addList({ name, acronym, color }));

      setName("");
      setAcronym("");
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
          Добавление списка
        </h3>

        <div className="flex-grow">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700">
              Название списка
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
              Сокращенное название
            </label>

            <input
              type="text"
              onChange={(e) => setAcronym(e.target.value)}
              value={acronym}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700">
              Цвет
            </label>

            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
              className="w-12 px-1 py-1 h-12 text-lg border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <NavLink
            to={"/lists"}
            className="group flex items-center relative w-auto float-left py-2 px-4 border border-transparent text-sm font-medium rounded-md text-slate-800 bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <IconChevronLeft className="mr-1" stroke={2} size={18} />
            Назад
          </NavLink>

          <button
            type="submit"
            onClick={handleSubmit}
            className="group relative w-60 float-right py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Добавить список
          </button>
        </div>
      </form>
    </LoggedLayout>
  );
};
