"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { projectData } from "@/lib/data";
import { useActiveSection } from "@/context/active-section-context";

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
      whileHover={{ 
        scale: [1, 0.98, 1.01, 1],
        transition: { duration: 0.4, times: [0, 0.2, 0.6, 1] }
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 dark:opacity-20`} />

      <div className="absolute right-0 bottom-0 w-1/2 max-w-[180px] opacity-15 group-hover:opacity-25 transition-opacity duration-300 transform translate-x-4 translate-y-4">
        <Image
          src={project.image}
          alt={project.name}
          width={180}
          height={120}
          className="rounded-xl"
        />
      </div>

      <div className="relative z-10 p-5 md:p-7 min-h-[220px] flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg md:text-xl font-bold">
            {project.name}
          </h3>
          
          <div className="flex gap-1.5 flex-shrink-0">
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-2"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-2"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Demo"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
              </motion.a>
            )}
            {project.links.docs && (
              <motion.a
                href={project.links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-2"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Docs"
              >
                <HiDocumentText className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-text-secondary text-sm flex-1 max-w-md">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.badges.slice(0, 5).map((badge) => (
            <span
              key={badge}
              className="px-2.5 py-1 rounded-full bg-white/60 dark:bg-slate-700/50 border border-white/80 dark:border-slate-600/50 text-xs text-text-secondary"
            >
              {badge}
            </span>
          ))}
          {project.badges.length > 5 && (
            <span className="px-2.5 py-1 rounded-full bg-white/60 dark:bg-slate-700/50 border border-white/80 dark:border-slate-600/50 text-xs text-text-muted">
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
    <section id="projects" ref={sectionRef} className="py-16 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-subtitle">Featured Work</p>
        <h2 className="section-title mb-8">
          My <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
