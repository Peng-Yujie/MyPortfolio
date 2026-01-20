"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experienceData } from "@/lib/data";
import { useActiveSection } from "@/context/active-section-context";

interface TimelineItemProps {
  experience: typeof experienceData[0];
  index: number;
  isLast: boolean;
}

function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const Icon = experience.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="relative flex gap-4 md:gap-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border-2 shadow-md"
          style={{ borderColor: experience.accentColor }}
          whileHover={{ scale: 0.97 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: experience.accentColor }}
          >
            <Icon className="w-3 h-3 text-white" />
          </div>
        </motion.div>

        {!isLast && (
          <div className="w-0.5 flex-1 min-h-[50px] bg-gradient-to-b from-slate-200 dark:from-slate-600 to-transparent" />
        )}
      </div>

      <div className="flex-1 pb-8">
        <motion.div
          ref={cardRef}
          className="liquid-card p-4 md:p-5"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            "--mouse-x": `${mousePos.x}px`,
            "--mouse-y": `${mousePos.y}px`,
            "--opacity": isHovered ? 1 : 0,
          } as React.CSSProperties}
        >
          <div className="glow-border" />
          <div className="glow-inner" />
          <div
            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2"
            style={{
              backgroundColor: `${experience.accentColor}15`,
              color: experience.accentColor,
            }}
          >
            {experience.date}
          </div>

          <h3 className="text-base md:text-lg font-bold mb-0.5">
            {experience.title}
          </h3>
          <p className="text-sm font-medium mb-2" style={{ color: experience.accentColor }}>
            {experience.role}
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            {experience.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-40%" });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);

  return (
    <section id="experience" ref={sectionRef} className="py-16 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-subtitle">My Journey</p>
        <h2 className="section-title mb-8">
          Work <span className="text-gradient">Experience</span>
        </h2>
      </motion.div>

      <div className="relative max-w-2xl">
        {experienceData.map((experience, index) => (
          <TimelineItem
            key={experience.title}
            experience={experience}
            index={index}
            isLast={index === experienceData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
