import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Logo from "public/logo-yellow.svg";
import { links } from "../lib/data";
import { useActiveSection } from "../context/active-section-context";
import { useSectionInView } from "../lib/motionSettings";

const Navbar = () => {
  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  return (
    <nav
      className="flex flex-col gap-4 md:flex-row justify-between items-center pt-6 pb-2 md:pb-4 -mx-2 bg-orange-50 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm sticky top-0 z-[999]"
      id="home"
      ref={ref}
    >
      <a
        href={links[0].href}
        className="flex items-center gap-[1ch] md:pl-2"
        onClick={() => {
          setActiveSection("About");
          setTimeOfLastClick(Date.now());
        }}
      >
        <div className="w-8 h-8 bg-yellow-400 rounded-full">
          <Logo className="w-8 h-8" />
        </div>
        <div className="relative">
          <span className="text-sm font-semibold tracking-widest hidden md:block">
            Yujie Peng
          </span>
          {activeSection === "Home" && (
            <motion.div
              initial={{ scaleX: 0, width: 0 }}
              animate={{ scaleX: 1, width: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 h-1 bg-yellow-400"
            />
          )}
        </div>
      </a>
      <div className="flex gap-8 text-md md:pr-2">
        {links.slice(1).map((link) => (
          <div key={link.name} className="relative">
            <Link
              href={link.href}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}
            </Link>
            {activeSection === link.name && (
              <motion.div
                initial={{ scaleX: 0, width: 0 }}
                animate={{ scaleX: 1, width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 h-1 bg-yellow-400"
              />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
