import Link from "next/link";
import React from "react";
import Logo from "public/logo-yellow.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 md:flex-row justify-between items-center py-4 mb-4">
      <div className="flex items-center gap-[1ch]">
        <div className="w-8 h-8 bg-yellow-400 rounded-full">
          <Logo className="w-8 h-8" />
        </div>
        <span className="text-sm font-semibold tracking-widest hidden md:block">
          Yujie Peng
        </span>
      </div>
      <div className="flex gap-12 text-md">
        <Link href="/#about">About</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
