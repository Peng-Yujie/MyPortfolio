import Link from "next/link";
import React, { useState } from "react";
import Logo from "public/logo-yellow.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Projects",
      href: "/#projects",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];

  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-8 h-8 bg-yellow-400 rounded-full">
          <Logo className="w-8 h-8" />
        </div>
        <span className="text-sm font-semibold tracking-widest">Portfolio</span>
      </div>
      <div className="flex gap-12 text-md">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
