"use client";

import { motion } from "framer-motion";
import { socialMediaData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/50 mt-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-6">
          {socialMediaData.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-text-secondary hover:text-sky-500 hover:bg-white transition-all duration-200"
                aria-label={social.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-text-muted text-sm mb-1">
          © {currentYear} Yujie Peng. All rights reserved.
        </p>
        
        {/* Tech Stack */}
        <p className="text-text-muted text-xs">
          Built with{" "}
          <span className="text-gradient font-medium">
            Next.js 15, React 19, Framer Motion & Tailwind CSS
          </span>
        </p>
      </motion.div>
    </footer>
  );
}
