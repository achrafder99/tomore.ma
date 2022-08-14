import React from "react";
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="mb-6">
      <nav className="bg-[green] justify-center  p-8  text-white uppercase  md:flex">
        <ul className=" hidden gap-10 sm:flex">
          <li className="mx-4">
            <Link to="/market">Boutique</Link>
          </li>
          <li  className="mx-4">
            <a href="">Tomore</a>
          </li>
          <li  className="mx-4">
            <a href="">Majhoul</a>
          </li >
          <li  className="mx-4">
            <a href="">Creations</a>
          </li>
          <li  className="mx-4">
            <a href="">Catalogue</a>
          </li>
          <li  className="mx-4">
            <a href="">Mon Panier</a>
          </li>
          <li  className="mx-4">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
