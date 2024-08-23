import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTripdotcom } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import Project01 from "public/project-1.png";
import Project02 from "public/project-2.png";
import Project03 from "public/project-3.png";
import Project04 from "public/project-4.png";
import Project05 from "public/project-5.png";

export const links = [
  { name: "Home", href: "#about" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const projectData = [
  {
    name: "Copilot Grading Tool",
    description:
      "An AI-powered solution designed to enhance the grading process with Canvas Learning Management System.",
    badges: [
      "Chrome Extension",
      "TypeScript",
      "Plasmo",
      "Ollama",
      "Docker",
      "Llama3",
    ],
    bgColor: "#ffd0c3",
    imgSrc: Project05,
    links: {
      docs: "https://copilot-grading-tool.readthedocs.io/en/latest/",
    },
  },
  {
    name: "PurrFect Neighbors",
    description:
      "An online platform that helps pets find warm homes and users find their ideal pets.",
    badges: ["React", "Node.js", "MySQL", "Redis", "AWS S3", "GraphQL"],
    imgSrc: Project04,
    links: {
      github: "https://github.com/Peng-Yujie/purrfect-neighbors/",
    },
  },
  {
    name: "EasyGrammar",
    description:
      "An AI-powered web application that helps users improve their English grammar and vocabulary.",
    badges: [
      "React",
      "Node.js",
      "Free Dictionary API",
      "OpenAI API",
      "Tailwind",
    ],
    imgSrc: Project03,
    bgColor: "#f3e8ff",
    links: {
      github: "https://github.com/RileyC9/EasyGrammar",
      demo: "https://easygrammarapp.netlify.app/",
    },
  },
  {
    name: "Eastern Explore",
    description:
      "Database for a company that organizes group hiking events, including queries for efficient data management.",
    badges: ["Database", "MySQL", "PHP", "HTML", "CSS"],
    imgSrc: Project02,
    bgColor: "#6ed2b7",
    links: {
      github: "https://github.com/Peng-Yujie/Eastern-Explore-Database",
    },
  },
  {
    name: "Tireder",
    description:
      "A web application for tracking and measuring daily stress, incorporating real-time communication with an AI Chatbot.",
    badges: [
      "Python",
      "Flask",
      "Socket.IO",
      "MongoDB",
      "OpenAI API",
      "JavaScript",
    ],
    imgSrc: Project01,
    bgColor: "#ffe3a4",
    links: {
      github: "https://github.com/Peng-Yujie/Tireder",
    },
  },
];

export const experienceData = [
  {
    title: "Langara College",
    date: "2023 - 2024",
    description:
      "Recently graduated from Langara College with a Diploma in Computer Science. Currently working on various projects to improve my skills.",
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
  "TypeScript",
  "Python",
  "C++",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "RESTful API",
  "Redis",
  "Docker",
  "AWS",
  "MySQL",
  "MongoDB",
  "Tailwind",
  "Figma",
];

export const socialMediaData = [
  { name: "resume", icon: FaRegFileAlt, url: "/MyPortfolio/resume.pdf" },
  {
    name: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/yujie-peng-8276b1279/",
  },
  { name: "github", icon: FaGithub, url: "https://github.com/Peng-Yujie" },
];
