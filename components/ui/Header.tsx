"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 py-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2">
          <motion.div
            className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md overflow-hidden"
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Image
              src="/logo-yellow.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </motion.div>
          <span className="hidden md:block text-lg font-semibold">
            Yujie Peng
          </span>
        </a>

        {/* Avatar with Status - Always visible */}
        <motion.div
          className="relative"
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-md">
            <Image
              src="/me-mac.png"
              alt="Yujie Peng"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          {/* Green status dot - Slack style */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-800 shadow-sm" />
        </motion.div>
      </div>
    </motion.header>
  );
}
