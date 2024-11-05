import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

import { IconPower } from "@tabler/icons-react";

export const NavFooter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");

    toast("Вы вышли из аккаунта");

    navigate("/login");
  };

  return (
    <li
      onClick={logoutHandler}
      className="cursor-pointer text-center sticky top-[100vh]">
      <button
        onClick={logoutHandler}
        className="px-4 py-5 flex justify-around text-sm block text-rose-400 hover:text-rose-300 font-bold">
        <IconPower size={20} stroke={2} className="mr-2" />
        Выйти
      </button>
    </li>
  );
};
