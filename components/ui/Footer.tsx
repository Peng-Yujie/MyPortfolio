"use client";

import { motion } from "framer-motion";
import { socialMediaData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-white/50 dark:border-slate-700/30 mt-12">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex justify-center gap-2.5 mb-5">
          {socialMediaData.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-button p-2.5"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            );
          })}
        </div>

        <p className="text-text-muted text-sm mb-1">
          © {currentYear} Yujie Peng. All rights reserved.
        </p>
        
        <p className="text-text-muted text-xs">
          Built with <span className="text-gradient font-medium">Next.js, React, Framer Motion & Tailwind</span>
        </p>
      </motion.div>
    </footer>
  );
}
