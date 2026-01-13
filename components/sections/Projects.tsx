"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { projectData } from "@/lib/data";
import { useActiveSection } from "@/context/active-section-context";
import { useEffect } from "react";

interface ProjectCardProps {
  project: typeof projectData[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className={`liquid-card group relative overflow-hidden ${
        index === 0 ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Subtle gradient accent */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
      />

      {/* Project Image */}
      <div className="absolute right-0 bottom-0 w-1/2 max-w-[200px] opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform translate-x-6 translate-y-6">
        <Image
          src={project.image}
          alt={project.name}
          width={200}
          height={140}
          className="rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 min-h-[240px] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl md:text-2xl font-bold text-text-primary">
            {project.name}
          </h3>
          
          {/* Links */}
          <div className="flex gap-2 flex-shrink-0">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white transition-all duration-200"
                aria-label="View GitHub repository"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-text-secondary hover:text-sky-500 hover:bg-white transition-all duration-200"
                aria-label="View live demo"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            )}
            {project.links.docs && (
              <a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-text-secondary hover:text-teal-500 hover:bg-white transition-all duration-200"
                aria-label="View documentation"
              >
                <HiDocumentText className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm flex-1 max-w-md">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.badges.slice(0, 5).map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 rounded-full bg-white/60 border border-white/80 text-xs text-text-secondary"
            >
              {badge}
            </span>
          ))}
          {project.badges.length > 5 && (
            <span className="px-3 py-1 rounded-full bg-white/60 border border-white/80 text-xs text-text-muted">
              +{project.badges.length - 5}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-40%" });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-subtitle">Featured Work</p>
        <h2 className="section-title mb-10">
          My <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectData.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
