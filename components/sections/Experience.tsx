"use client";

import { useRef, useEffect } from "react";
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

  return (
    <motion.div
      className="relative flex gap-5 md:gap-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Timeline Line & Icon */}
      <div className="flex flex-col items-center">
        {/* Icon */}
        <div
          className="relative z-10 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white border-2 shadow-sm"
          style={{ borderColor: experience.accentColor }}
        >
          <div
            className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: experience.accentColor }}
          >
            <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
          </div>
        </div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 min-h-[60px] bg-gradient-to-b from-gray-200 to-transparent" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-10">
        <div className="liquid-card p-5 md:p-6">
          {/* Date Badge */}
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
            style={{
              backgroundColor: `${experience.accentColor}15`,
              color: experience.accentColor,
            }}
          >
            {experience.date}
          </div>

          {/* Title & Role */}
          <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">
            {experience.title}
          </h3>
          <p
            className="text-sm font-medium mb-3"
            style={{ color: experience.accentColor }}
          >
            {experience.role}
          </p>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
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
    <section id="experience" ref={sectionRef} className="py-20 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-subtitle">My Journey</p>
        <h2 className="section-title mb-10">
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
