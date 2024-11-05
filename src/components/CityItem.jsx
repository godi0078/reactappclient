import React from "react";
import { IconTrash } from "@tabler/icons-react";
import { useDispatch } from "react-redux";

import { deleteCity } from "../redux/features/city/citySlice";
import { toast } from "react-toastify";

export const CityItem = ({ city }) => {
  const dispatch = useDispatch();

  const deleteHandler = (cityId) => {
    try {
      console.log(cityId);

      dispatch(deleteCity(cityId));
      toast("Город был удален");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="border-b border-slate-100">
      <td className="py-2 pr-2 text-sm font-medium leading-6">{city.name}</td>
      <td className="py-2 pl-2 text-sm leading-6 ">{city.foundation}</td>
      <td className="py-2 pl-2 text-sm h-full justify-end flex">
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteHandler(city._id);
          }}
          className="bg-red-600 rounded text-white p-2 h-max flex items-center hover:bg-red-500 hover:text-slate-100">
          <IconTrash stroke="2" size="14" />
        </button>
      </td>
    </tr>
  );
};
