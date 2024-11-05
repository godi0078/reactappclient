import React, { useEffect } from "react";
import { CityItem } from "./CityItem";
import { getAllCities } from "../redux/features/city/citySlice";
import { useDispatch, useSelector } from "react-redux";

export const CityTable = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.city);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  if (!cities.length) {
    return <div className="text-sm text-center">Нет городов в списке</div>;
  }

  return (
    <table className="w-full text-left table-auto">
      <thead>
        <tr>
          <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
            <div className="py-2 pr-2 border-b border-slate-400">
              Название города
            </div>
          </th>
          <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
            <div className="py-2 pl-2 border-b border-slate-400">
              Дата основания
            </div>
          </th>
          <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
            <div className="py-2 pl-2 border-b border-slate-400">
              .
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="align-baseline">
        {cities?.map((city) => (
          <CityItem city={city} />
        ))}
      </tbody>
    </table>
  );
};
