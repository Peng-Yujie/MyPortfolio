"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSection } from "@/context/active-section-context";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (name: string) => {
    setActiveSection(name as typeof activeSection);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-xl bg-white/70 border-b border-white/50 shadow-sm"
          : "py-5 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group"
          onClick={() => handleLinkClick("Home")}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
            Y
          </div>
          <span className="hidden md:block text-lg font-semibold text-text-primary">
            Yujie Peng
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/80 shadow-sm">
          {links.slice(1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
              onClick={() => handleLinkClick(link.name)}
            >
              <span
                className={`relative z-10 ${
                  activeSection === link.name
                    ? "text-sky-600"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.name}
              </span>
              {activeSection === link.name && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/80 shadow-sm"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-white/80"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <motion.span
              className="block w-5 h-0.5 bg-text-primary rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-text-primary rounded-full"
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-text-primary rounded-full"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 md:hidden bg-white/90 backdrop-blur-xl border-b border-white/50 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {links.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeSection === link.name
                      ? "bg-sky-50 text-sky-600"
                      : "text-text-secondary hover:bg-gray-50 hover:text-text-primary"
                  }`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
