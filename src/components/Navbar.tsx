import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative top-10 flex items-center justify-between h-15 w-[90%] ml-[5%] text-white rounded-2xl">
      <h2 className="text-3xl m-3 font-bold"><a href="/">My<span className="text-purple-600">Folio</span></a></h2>
      <nav className="sm:mr-[5%] md:mr[5%] lg:mr-[10%] xl:mr-[10%] 2xl:mr-[10%]">
        <ul className="flex gap-20 text-lg font-semibold">
          <NavLink to={"/"} className={({isActive})=>`{pb-1 transition-colors ${isActive ? "text-purple-600 underline underline-offset-8":"text-white"}`}>Home</NavLink>
          <NavLink to={"/about"} className={({isActive})=>`{pb-1 transition-colors ${isActive ? "text-purple-600 underline underline-offset-8":"text-white"}`}>About</NavLink>
          <NavLink to={"/project"} className={({isActive})=>`{pb-1 transition-colors ${isActive ? "text-purple-600 underline underline-offset-8":"text-white"}`}>Project</NavLink>
          <NavLink to={"/contact"} className={({isActive})=>`{pb-1 transition-colors ${isActive ? "text-purple-600 underline underline-offset-8":"text-white"}`}>Contact</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
