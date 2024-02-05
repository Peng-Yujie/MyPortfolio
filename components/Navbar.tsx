import Link from "next/link";
import React from "react";
import Logo from "public/logo-yellow.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-8 h-8 bg-yellow-400 rounded-full">
          <Logo className="w-8 h-8" />
        </div>
        <span className="text-sm font-semibold tracking-widest">Portfolio</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="/" className="text-black font-medium">
          Home
        </Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
