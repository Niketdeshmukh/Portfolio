"use client";
import Link from "next/link";
import React, { useState,useRef,useEffect } from "react";
import NavLink from "./NavLink";
import "../../app/Header.css"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay";
import { SocialIcon } from 'react-social-icons';
import gsap from "gsap";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const socialLinks = [
  {
    url: "https://github.com",
    fgColor: "#64FFDA",
    style: { width: '2.5rem',marginRight:'-3rem' }
  },
  {
    url: "https://twitter.com",
    fgColor: "#64FFDA",
    style: { width: '2.5rem',marginRight:'-3rem' }
  },
  {
    url: "https://linkedin.com",
    fgColor: "#64FFDA",
    style: { width: '2.5rem' }
  }
];

const Navbar = () => {

  

  const [navbarOpen,setNavbarOpen] = useState(false);
  return (
    <nav className="flex items-center justify-center text-white">
          <div className="navbar flex items-center justify-between">
          <ul className="menu flex">
            {navLinks.map((link,index)=>{
              // left navbar items
              return(
              <li key={index} className=" list-none">
                <NavLink href={link.path} title={link.title}/>
              </li>)
            })}</ul>
            <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <SocialIcon url={link.url} bgColor="transparent" fgColor="#64FFDA" style={link.style} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
         </nav>
  );
};

export default Navbar;