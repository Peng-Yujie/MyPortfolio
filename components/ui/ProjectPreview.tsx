"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import LiquidCard from "@/components/ui/LiquidCard";
import GlassButton from "@/components/ui/GlassButton";
import projectPic from "@/public/project-1.png";

interface Props {
  name?: string;
  description?: string;
  badges?: string[];
  imgSrc?: StaticImageData;
  bgColor?: string;
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  colSpan?: string;
}

const ProjectPreview: React.FC<Props> = ({
  name = "Project name",
  description = "Project description",
  badges = ["React", "Tailwind", "Framer Motion"],
  imgSrc = projectPic,
  links: { github, demo, docs } = {},
  colSpan = "",
}) => {
  return (
    <div className={`${colSpan} group`}>
      <LiquidCard className="md:h-80 overflow-hidden">
        <div
          className="h-full w-full p-6 md:px-16 md:py-12 flex flex-col justify-between relative"
          aria-label={`View ${name} project details`}
        >
          <Image
            src={imgSrc}
            alt={name}
            className="absolute w-1/2 max-w-md rounded-xl right-0 bottom-0 top-1/2 transform -rotate-12 opacity-50 z-0 ease-in-out duration-500 group-hover:scale-[1.1] group-hover:rotate-0"
          />
          <div className="flex flex-row gap-3 items-center md:mb-6 z-10">
            <h2 className="font-medium text-2xl md:text-3xl">{name}</h2>
            {github && (
              <GlassButton
                as="a"
                variant="liquid-icon"
                size="sm"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} on GitHub`}
                className="hover:bg-github! hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </GlassButton>
            )}
            {demo && (
              <GlassButton
                as="a"
                variant="cta"
                size="sm"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} demo`}
              >
                <BsLink className="inline mr-1" />
                Demo
              </GlassButton>
            )}
            {docs && (
              <GlassButton
                as="a"
                variant="cta"
                size="sm"
                href={docs}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} documentation`}
              >
                <BsLink className="inline mr-1" />
                Docs
              </GlassButton>
            )}
          </div>
          <p className="w-5/6 max-w-lg flex-1 my-4 text-text-secondary z-10">
            {description}
          </p>
          <div className="flex flex-wrap justify-items-start gap-x-3 gap-y-2 z-10">
            {badges.map((badge) => (
              <div
                key={badge}
                className="skill-pill h-6 px-3 text-sm flex items-center justify-center text-text-secondary"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </LiquidCard>
    </div>
  );
};

export default ProjectPreview;
