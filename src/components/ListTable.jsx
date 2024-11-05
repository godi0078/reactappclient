import React, { useEffect } from "react";
import { ListItem } from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllLists } from "../redux/features/list/listSlice";

export const ListTable = () => {
  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(getAllLists());
  }, [dispatch]);

  if (!lists.length) {
    return <div className="text-sm text-center">Нет существующих списков</div>;
  }

  return (
    <table className="w-full text-left table-auto">
      <thead>
        <tr>
          <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
            <div className="py-2 pr-2 border-b border-slate-400">Цвет</div>
          </th>
          <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
            <div className="py-2 pr-2 border-b border-slate-400">
              Название списка
            </div>
          </th>
          <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
            <div className="py-2 pl-2 border-b border-slate-400">
              Сокращенное название
            </div>
          </th>
          <th className="sticky z-10 top-0 text-sm leading-6 font-semibold bg-white text-slate-700 p-0">
            <div className="py-2 pl-2 border-b border-slate-400">.</div>
          </th>
        </tr>
      </thead>
      <tbody className="align-baseline">
        {lists?.map((list) => (
          <ListItem list={list} />
        ))}
      </tbody>
    </table>
  );
};
