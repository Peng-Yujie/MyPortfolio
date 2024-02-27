import React from "react";
import { FaTiktok } from "react-icons/fa";
import { SiTripdotcom } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import Dribbble from "public/dribbble.svg";
import Instagram from "public/instagram.svg";
import Linkedin from "public/linkedin.svg";
import Twitter from "public/twitter.svg";

export const projectData = [
  {
    name: "Tireder",
    description:
      "A web application for tracking and measuring daily stress, incorporating real-time communication with an AI Chatbot.",
    badges: ["Python", "MongoDB", "OpenAI API"],
    imgURL: "/project-1.png",
    bgColor: "#E4E4E4",
  },
  {
    name: "Eastern Explore",
    description: "Database for a company that organizes group hiking events.",
    badges: ["Database", "MySQL"],
    imgURL: "/project-2.png",
    bgColor: "#E4E4E4",
  },
];

export const experienceData = [
  {
    title: "Langara College",
    date: "2023 - Present",
    description:
      "Currently studying Computer Science and working on various projects to improve my skills.",
    icon: React.createElement(LuGraduationCap),
    iconStyle: {
      background: "#f15a23",
      color: "#fff",
    },
  },
  {
    title: "E-Commerce Operations Manager - ByteDance",
    date: "2021 - 2022",
    description:
      "Platform Marketing and Operation, including planning and execution of marketing campaigns, and supporting the development of the platform.",
    icon: React.createElement(FaTiktok),
    iconStyle: {
      background: "#000",
      color: "#fff",
    },
  },
  {
    title: "Marketing Manager - Trip.com",
    date: "2017 - 2021",
    description:
      "Led the planning and execution of integrated marketing campaigns and seasonal events. Project Management and Collaboration",
    icon: React.createElement(SiTripdotcom),
    iconStyle: {
      background: "#1E4BF2",
      color: "#fff",
    },
  },
  {
    title: "Wuhan University of Technology",
    date: "2011 - 2017",
    description:
      "Graduated with a Master's degree in Journalism and Communication, and a Bachelor's degree in Law.",
    icon: React.createElement(LuGraduationCap),
    iconStyle: {
      background: "#0600ff",
      color: "#fff",
    },
  },
];

export const skillsData = [
  "HTML5/CSS3",
  "JavaScript",
  "Python",
  "C++",
  "React",
  "Tailwind",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Figma",
];

export const socialMediaData = [
  { name: "dribbble", icon: Dribbble },
  { name: "instagram", icon: Instagram },
  { name: "twitter", icon: Twitter },
  { name: "linkedin", icon: Linkedin },
];