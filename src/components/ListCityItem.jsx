import React, { useCallback, useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { deleteCityFromList } from "../redux/features/list/listSlice";
import { toast } from "react-toastify";

import axios from "../utils/axios";

export const ListCityItem = ({ listId, cityId }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const fetchCity = useCallback(async () => {
    const { data } = await axios.get(`/city/${cityId}`);
    setCity(data.city);
  }, [cityId]);

  useEffect(() => {
    fetchCity();
  }, [fetchCity]);

  const deleteHandler = (cityId) => {
    try {
      dispatch(deleteCityFromList({ listId, cityId }));
      toast("Город был удален из списка");

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
          className="text-red-600 rounded p-2 h-max flex items-center hover:text-red-700">
          <IconX stroke="2" size="18" />
        </button>
      </td>
    </tr>
  );
};
