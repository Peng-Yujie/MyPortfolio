import React from "react";
import Arrow from "../public/arrow.svg";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import { useTheme } from "../context/theme-context";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  badges?: string[] | undefined;
  imgURL?: string | undefined;
  bgColor?: string | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = "Project name",
  description = "Project description",
  badges = ["React", "Tailwind", "Framer Motion"],
  imgURL = "/project-1.png",
  bgColor = "#E4E4E4",
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="h-[30rem] rounded-3xl overflow-hidden"
      style={
        theme === "dark"
          ? {
              background: "#4B5563",
              outline: "2px solid #6B7280",
            }
          : {
              background: `linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), ${bgColor}`,
            }
      }
      {...motionProps}
    >
      <div
        className="h-full w-full px-10 py-6 durantion-[500ms] transition-all ease-in-out hover:scale-105 bg-cover bg-no-repeat bg-center flex flex-col justify-between"
        style={{ backgroundImage: `url(${imgURL})` }}
      >
        <div className="flex justify-between">
          <div className="w-5/6">
            <h2 className="font-medium text-lg dark:text-white">{name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              {description}
            </p>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <Arrow className="w-6 h-6" />
          </div>
        </div>
        <div className="flex justify-items-start space-x-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="h-8 px-3 bg-white rounded-full flex items-center justify-center dark:text-zinc-500 dark:bg-zinc-300"
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
