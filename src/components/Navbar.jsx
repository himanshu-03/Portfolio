import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const navlinks = [
  {
    title: "Home",
    link: "/#Home",
  },
  {
    title: "About",
    link: "/",
    newtab: true,
  },
  {
    title: "Skills",
    link: "/",
    newtab: true,
  },
  {
    title: "Projects",
    link: "/",
    newtab: true,
  },
  {
    title: "Achievements",
    link: "/",
    newtab: true,
  },
  {
    title: "Blogs",
    link: "/",
    newtab: true,
  },
  {
    title: "Contacts",
    link: "/",
    newtab: true,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <div className="bg-[#10002b] font-sans">
      <div className="mx-auto  p-4  lg:p-8">
        <div className="flex items-center justify-between h-16 pl-4 ">
          {/* Logo */}
          <div
            className="flex items-center gap-3 rounded-full border-2 border-white border-opacity-25 "
              style = {{
                background: "linear-gradient(218deg, rgba(36, 0, 70, 1) 45.90%, rgba(16, 0, 43, 1) 90.98%)"
              }}>
            <img src= {logo} alt="" className="h-[48px] p-1" />
            <a href="/" className="text-white">
              
              <h2 className="text-white font-{400} text-base pr-2.5">
                Himanshu Agarwal
              </h2>
            </a>
          </div>
          {/* Navlinks */}
          <div className="hidden md:flex">
            <div className="text-base 2xl:text-lg ml-10 flex items-baseline space-x-2">
              {navlinks.map((link, index) => (
                <a
                  key={index}
                  className="text-[#E4E7EC] transition-all duration-500 hover:bg-[#3c096c] hover:text-[#fbfaff] px-2 py-1 rounded-md text-md font-medium"
                  href={link.link}
                  target ={link.newtab ? "_blank" : ""} rel="noreferrer" >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          {/* hamburger */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:ring-white focus:outline-none focus:ring-2 focus:rig-offset-2 focus:ring-offset-white focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {open === true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav */}
      {open ? (
        <div className="flex flex-col  md:hidden">
          <div className="px-2 pt-1 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link, index) => (
              <a
                key={index}
                className="text-center cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href={link.link}>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;