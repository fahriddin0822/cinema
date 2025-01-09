import React from "react";
import { NavLink } from "react-router-dom";
import { Globe } from "lucide-react";
import logo from "@/assets/images/logo.png";
import n1 from "@/assets/images/n1.svg";
import n2 from "@/assets/images/n2.svg";
import n3 from "@/assets/images/n3.svg";
import n4 from "@/assets/images/n4.svg";

const NavBar = () => {
  return (
    <nav className="bg-black px-12 py-4">
      <div className="max-w-7xl max-h-[100px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <img src={logo} className="h-[40px]" alt="Logo" />
          </NavLink>
        </div>

        <div className="flex items-center gap-16 justify-center">
          <NavLink
            to="/"
            className="section flex flex-col items-center"
            activeClassName="text-red-600"
          >
            <img src={n1} className="flex justify-center" alt="Afisha" />
            <p className="text-white text-center">Афиша</p>
          </NavLink>
          <NavLink
            to="/movies"
            className="section flex flex-col items-center"
            activeClassName="text-red-600"
          >
            <img src={n2} className="flex justify-center" alt="Sessions" />
            <p className="text-white text-center">Сеансы</p>
          </NavLink>
          <NavLink
            to="/details"
            className="section flex flex-col items-center"
            activeClassName="text-red-600"
          >
            <img src={n3} className="flex justify-center" alt="Tickets" />
            <p className="text-white text-center">Билеты</p>
          </NavLink>
          <NavLink
            to="/"
            className="section flex flex-col items-center"
            activeClassName="text-red-600"
          >
            <img src={n4} className="flex justify-center" alt="Search" />
            <p className="text-white text-center">Поиск</p>
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Ру</span>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
            Войти
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
