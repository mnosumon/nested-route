import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-slate-400 py-3 items-center px-10">
      <div className="">hello</div>
      <ul className="flex gap-5  items-center">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/refarence">refarence</NavLink>
        <NavLink to="/dashbord">Myaccount</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
