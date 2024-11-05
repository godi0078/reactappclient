import React, { useEffect, useState, useCallback } from "react";
import { LoggedLayout } from "../components/LoggedLayout";
import { Link, useParams } from "react-router-dom";
import { AddCityModal } from "../components/AddCityModal";
import { ListCityItem } from "../components/ListCityItem";
import { IconChevronLeft, IconPlus } from "@tabler/icons-react";

import axios from "../utils/axios";

export const ListPage = () => {
  const [list, setList] = useState(null);
  const params = useParams();
  const [popUp, setPopUp] = useState(false);
  const [cities, setCities] = useState(null);

  const fetchList = useCallback(async () => {
    const { data } = await axios.get(`/list/${params.id}`);
    setList(data.list);
  }, [params.id]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const fetchAllCities = async () => {
    try {
      const { data } = await axios.get(`/city/list/${params.id}`);
      const prettyData = [];
      const k = Object.keys(data.newObj);

      k.forEach((key) => {
        prettyData.push({
          value: data.newObj[key]._id,
          label: data.newObj[key].name,
        });
      });

      setCities(prettyData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCities();
  }, []);

  if (!list) {
    return (
      <LoggedLayout>
        <div className="py-5">
          <h4>К сожалению, этот список недоступен</h4>
        </div>
      </LoggedLayout>
    );
  }

  return (
    <LoggedLayout>
      <div className="flex justify-between items-center">
        <Link
          to={"/lists"}
          className="group flex items-center relative w-auto float-left py-2 border border-transparent text-sm font-medium rounded-md text-slate-500 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <IconChevronLeft className="mr-1" stroke={2} size={18} />
          Назад
        </Link>

        <div className="flex justify-around items-center">
          <div
            className="w-4 h-4 mr-4 rounded-sm shadow-md border border-gray-400"
            style={{
              backgroundColor: list.color,
            }}></div>

          <h3 className="text-xl font-extrabold text-gray-900">{list.name}</h3>
        </div>
        <span className="text-gray-400 ml-2 font-bold text-sm">
          {list.acronym}
        </span>
      </div>

      <div className="py-5">
        <div className="md:col-12 flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:max-h-96 lg:supports-scrollbars:pr-2">
          {list?.cities.length !== 0 && (
            <table className="w-full text-left table-auto">
              <thead>
                <tr>
                  <th className="sticky top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
                    <div className="py-2 pr-2 border-b border-slate-400">
                      Название города
                    </div>
                  </th>
                  <th className="sticky top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
                    <div className="py-2 pl-2 border-b border-slate-400">
                      Дата основания
                    </div>
                  </th>
                  <th className="sticky top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
                    <div className="py-2 pl-2 border-b border-slate-400">.</div>
                  </th>
                </tr>
              </thead>
              <tbody className="align-baseline">
                {list?.cities.map((cityId) => (
                  <ListCityItem listId={params.id} cityId={cityId} />
                ))}
              </tbody>
            </table>
          )}
          {list?.cities.length === 0 && (
            <h2 className="text-center text-gray-500">
              В этот список ещё не добавлено ни одного города
            </h2>
          )}
        </div>
      </div>

      <div className="text-center bottom-2 absolute right-2">
        <button
          onClick={() => setPopUp(true)}
          className="px-4 flex justify-around py-2 bg-blue-600 text-sm float-end block text-white hover:bg-blue-700 rounded-md">
          <IconPlus size={20} stroke={2} className="mr-1" />
          Добавить город
        </button>
        {popUp && <AddCityModal setPopUp={setPopUp} cities={cities} />}
      </div>
    </LoggedLayout>
  );
};
