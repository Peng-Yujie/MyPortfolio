"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HiHome,
  HiFolder,
  HiCode,
  HiBriefcase,
  HiMail,
  HiSun,
  HiMoon,
} from "react-icons/hi";
import { links } from "@/lib/data";
import { useActiveSection } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  About: HiHome,
  Projects: HiFolder,
  Skills: HiCode,
  Experience: HiBriefcase,
  Contact: HiMail,
};

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  // Navbar shrinks slightly when scrolling
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navY = useTransform(scrollY, [0, 100], [0, 4]);

  const handleLinkClick = (name: string) => {
    setActiveSection(name as typeof activeSection);
    setTimeOfLastClick(Date.now());
  };

  const navLinks = links.slice(1);

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 z-50 flex items-center gap-3 origin-center"
      initial={{ x: "-50%", y: 100, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      style={{ scale: navScale, y: navY }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Main Nav Dock */}
      <div className="nav-dock flex items-center gap-1 h-12 px-2 rounded-full">
        {navLinks.map((link) => {
          const Icon = navIcons[link.name];
          const isActive = activeSection === link.name;

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className="relative"
            >
              <div
                className={`
                  nav-item relative flex items-center gap-2 px-3 py-2.5 md:px-4 rounded-full
                  ${
                    isActive
                      ? "text-sky-600 dark:text-sky-400"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    className="dock-indicator absolute inset-0"
                    layoutId="dock-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                      mass: 1,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {Icon && <Icon className="w-5 h-5" />}
                </span>

                <span className="relative z-10 hidden md:block text-sm font-medium">
                  {link.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="nav-dock flex items-center justify-center w-12 h-12 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all duration-200"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <HiMoon className="w-5 h-5" />
        ) : (
          <HiSun className="w-5 h-5" />
        )}
      </button>
    </motion.nav>
  );
}
