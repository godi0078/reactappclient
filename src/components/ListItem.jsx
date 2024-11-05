import React from "react";
import { IconTrash } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteList } from "../redux/features/list/listSlice";
import { toast } from "react-toastify";

export const ListItem = ({ list }) => {
  const dispatch = useDispatch();

  const deleteHandler = (listId) => {
    try {
      console.log(listId);

      dispatch(deleteList(listId));
      toast("Список был удален");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="border-b border-slate-100">
      <td className="py-2 pl-2 text-sm leading-6">
        <div
          className="w-4 h-4 rounded-sm shadow-md border border-gray-400"
          style={{
            backgroundColor: list.color,
          }}></div>
      </td>
      <td className="py-2 pr-2 text-sm font-medium leading-6">
        <Link to={"/list/" + list._id} className="text-blue-700">
          {list.name}
        </Link>
      </td>
      <td className="py-2 pl-2 text-sm leading-6 text-gray-600">
        {list.acronym}
      </td>
      <td className="py-2 pl-2 text-sm h-full justify-end flex">
        <button
          onClick={(e) => {
            e.preventDefault();
            deleteHandler(list._id);
          }}
          className="bg-red-600 rounded text-white p-2 h-max flex items-center hover:bg-red-500 hover:text-slate-100">
          <IconTrash stroke="2" size="14" />
        </button>
      </td>
    </tr>
  );
};
