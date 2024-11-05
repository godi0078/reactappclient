import { useState } from "react";
import { IconDeviceFloppy } from "@tabler/icons-react";
import Select from "react-tailwindcss-select";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addCityToList } from "../redux/features/list/listSlice";

export const AddCityModal = ({ cities, setPopUp }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();

  const handleSubmit = () => {
    try {
      const listId = params.id;
      const cityId = selectedCity.value;

      dispatch(addCityToList({ listId, cityId }));
      setSelectedCity("");
      setPopUp(false);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setSelectedCity(value);
  };

  return (
    <div className="w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center">
      <div className="bg-white p-5 w-1/4 rounded-md shadow-md">
        <h1 className="font-bold text-center text-lg my-5">
          Добавление города
        </h1>

        <div className="text-left">
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-gray-700">
            Выберите город для добавления в список:
          </label>

          {cities.length !== 0 && (
            <Select
              value={selectedCity}
              onChange={handleChange}
              options={cities}
            />
          )}
        </div>

        <div className="flex justify-between mt-8">
          <button
            className="bg-gray-200 text-slate-600 text-sm rounded-md py-2 px-4 hover:bg-gray-300 hover:text-slate-700"
            onClick={() => setPopUp(false)}>
            Закрыть
          </button>
          <button
            className="bg-blue-600 text-slate-100 flex justify-around text-sm rounded-md py-2 px-4 hover:bg-blue-700"
            onClick={handleSubmit}>
            <IconDeviceFloppy size={20} stroke={2} className="mr-1" />
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
