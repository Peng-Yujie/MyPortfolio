import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import { useTheme } from "../context/theme-context";
import projectPic from "../public/project-1.png";

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
  bgColor = "#E4E4E4",
  links: { github, demo, docs } = {},
  colSpan = "",
}) => {
  const { theme } = useTheme();

  const style =
    theme === "dark"
      ? {
          background: "#4B5563",
          outline: "2px solid #6B7280",
        }
      : {
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), ${bgColor}`,
        };

  return (
    <motion.div
      className={`md:h-[20rem] rounded-3xl overflow-hidden ${colSpan} group`}
      style={style}
      {...motionProps}
    >
      <div
        className="h-full w-full p-6 md:px-16 md:py-12 flex flex-col justify-between relative"
        aria-label={`View ${name} project details`}
      >
        <Image
          src={imgSrc}
          alt={name}
          className="absolute w-1/2 max-w-md rounded-xl right-0 bottom-0 top-1/2 transform -rotate-12 opacity-50 z-0 ease-in-out duration-[500ms] group-hover:scale-[1.1] group-hover:-rotate-0"
        />
        <div className="flex flex-row gap-4 items-center md:mb-6 z-10">
          <h2 className="font-medium text-2xl md:text-3xl">{name}</h2>
          {github && (
            <div
              onClick={() => window.open(github, "_blank")}
              className="h-10 w-10 bg-white rounded-full flex justify-center items-center cursor-pointer transition-colors duration-200 ease-in-out text-black hover:text-white hover:bg-github dark:hover:bg-github"
            >
              <FaGithub className="h-5 w-5" />
            </div>
          )}
          {demo && (
            <div
              onClick={() => window.open(demo, "_blank")}
              className="h-10 text-xs px-2 bg-white rounded-full flex justify-center items-center cursor-pointer transition-colors duration-200 ease-in-out text-gray-700
              hover:text-white
              hover:bg-gray-500 
              dark:hover:text-white
              dark:hover:bg-gray-500"
            >
              <BsLink className="inline" />
              Demo
            </div>
          )}
          {docs && (
            <div
              onClick={() => window.open(docs, "_blank")}
              className="h-10 text-xs px-2 bg-white rounded-full flex justify-center items-center cursor-pointer transition-colors duration-200 ease-in-out text-gray-700
              hover:text-white
              hover:bg-gray-500 
              dark:hover:text-white
              dark:hover:bg-gray-500"
            >
              <BsLink className="inline" />
              Docs
            </div>
          )}
        </div>
        <p className="w-5/6 max-w-lg flex-1 my-4 text-gray-500 dark:text-gray-300 z-10">
          {description}
        </p>
        <div className="flex flex-wrap justify-items-start gap-x-4 gap-y-2 z-10">
          {badges.map((badge) => (
            <div
              key={badge}
              className="h-6 px-3 bg-white rounded-full text-sm flex items-center justify-center text-gray-400 dark:bg-gray-500 dark:text-white"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPreview;
