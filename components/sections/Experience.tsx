"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/motionSettings";
import LiquidCard from "@/components/ui/LiquidCard";

const Experience = () => {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Experience");

  return (
    <section className="mb-4 scroll-mt-28" id="experience" ref={ref}>
      <LiquidCard>
        <div className="p-6 md:px-16 md:py-12">
          <h1 className="font-light text-text-muted mb-8">Experience</h1>
          <VerticalTimeline>
            {experienceData.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={experience.icon}
                iconStyle={experience.iconStyle}
                contentStyle={{
                  background:
                    theme === "light"
                      ? "rgba(255, 255, 255, 0.15)"
                      : "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  boxShadow:
                    theme === "light"
                      ? "inset 0 1px 1px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.08)"
                      : "inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",
                  border:
                    theme === "light"
                      ? "1px solid rgba(255, 255, 255, 0.5)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid rgba(255, 255, 255, 0.5)"
                      : "0.4rem solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.title}
                </h3>
                <p>{experience.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </LiquidCard>
    </section>
  );
};

export default Experience;
