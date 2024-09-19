import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "d:/BootCamp//BST/FP-BST-Advanced-23/nedha-web/src/layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-50">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        {/* Logo Section */}
        <div className="flex flex-row items-center cursor-pointer">
          <span>
            <BiRestaurant size={32} />
          </span>
          <h1 className="text-xl font-semibold ml-2">Nedha</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="hidangan"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Hidangan
          </Link>
          <Link
            to="keterangan"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Keterangan
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Menu
          </Link>
          <Link
            to="ulasan"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Ulasan
          </Link>

          <Button title="Login" />
        </nav>

        {/* Toogle untuk Mobile */}
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="hidangan"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Hidangan
        </Link>
        <Link
          to="keterangan"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Keterangan
        </Link>
        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Menu
        </Link>
        <Link
          to="ulasan"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Ulasan
        </Link>

        <Button title="Login" />
      </div>
    </div>
  );
};

export default Navbar;
