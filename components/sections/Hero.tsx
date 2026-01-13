"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useActiveSection } from "@/context/active-section-context";
import { useInView } from "framer-motion";
import { socialMediaData } from "@/lib/data";
import LiquidCard from "@/components/ui/LiquidCard";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-50%" });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen pt-28 pb-16 flex items-center scroll-mt-28"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6">
          {/* Main Hero Card */}
          <LiquidCard className="p-8 md:p-10 lg:p-12 min-h-[420px] flex flex-col justify-between">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="section-subtitle">Welcome to my portfolio</p>
            </motion.div>

            {/* Main Heading */}
            <div className="flex-1 flex flex-col justify-center py-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hello, I&apos;m{" "}
                <span className="text-gradient">Yujie</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-text-secondary max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                A CS graduate and{" "}
                <span className="text-text-primary font-medium">
                  Full Stack Developer
                </span>{" "}
                with expertise in{" "}
                <span className="text-gradient font-medium">
                  Web Development, Software Engineering, and UI/UX Design
                </span>
                . Passionate about building scalable applications and crafting exceptional user experiences.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <button
                onClick={scrollToContact}
                className="glass-button-primary px-6 py-3 text-base font-medium"
              >
                Get in Touch
              </button>

              <div className="flex items-center gap-2">
                {socialMediaData.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith("http") ? "_blank" : undefined}
                      rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="glass-button p-3"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-text-secondary" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </LiquidCard>

          {/* Side Cards */}
          <div className="flex flex-col gap-6">
            {/* Photo Card */}
            <LiquidCard className="flex-1 p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[280px]">
              {/* Profile Image */}
              <motion.div
                className="relative z-10 w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Image
                  src="/me-mac.png"
                  alt="Yujie Peng"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Tagline */}
              <motion.p
                className="text-center text-text-secondary mt-5 text-sm italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                &quot;Team Player. Problem Solver. Frontend Innovator.&quot;
              </motion.p>
            </LiquidCard>

            {/* Status Card */}
            <LiquidCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-text-secondary text-sm">
                  Available for opportunities
                </span>
              </div>
              <p className="text-text-muted text-xs mt-2 ml-5">
                Based in Vancouver, Canada 🇨🇦
              </p>
            </LiquidCard>
          </div>
        </div>
      </div>
    </section>
  );
}
