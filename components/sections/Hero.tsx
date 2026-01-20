"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useActiveSection } from "@/context/active-section-context";
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
      className="min-h-screen pt-24 pb-16 flex items-center scroll-mt-28"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">
          {/* Main Hero Card */}
          <LiquidCard className="p-7 md:p-10 min-h-[380px] flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="section-subtitle">Welcome to my portfolio</p>
            </motion.div>

            <div className="flex-1 flex flex-col justify-center py-5">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hello, I&apos;m <span className="text-gradient">Yujie</span>
              </motion.h1>

              <motion.p
                className="text-base text-text-secondary max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                A CS graduate and{" "}
                <span className="font-medium">Full Stack Developer</span> with
                expertise in{" "}
                <span className="text-gradient font-medium">
                  Web Development, Software Engineering, and UI/UX Design
                </span>
                .
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <button
                onClick={scrollToContact}
                className="glass-button-primary rounded-full px-6 py-3 text-sm font-medium"
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
                      target={
                        social.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="glass-button p-2.5"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </LiquidCard>

          {/* Side Card - Photo Only */}
          <LiquidCard
            className="p-6 flex flex-col items-center justify-center min-h-[300px] lg:min-h-[380px]"
            delay={0.1}
          >
            <motion.div
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white dark:border-slate-600 shadow-lg"
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

            <motion.p
              className="text-center text-text-secondary mt-5 text-sm italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              &quot;Team Player. Problem Solver. Frontend Innovator.&quot;
            </motion.p>
          </LiquidCard>
        </div>
      </div>
    </section>
  );
}
