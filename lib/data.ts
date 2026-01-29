import React from "react";
import { FaTiktok, FaLinkedin, FaRegFileAlt, FaGithub } from "react-icons/fa";
import { SiTripdotcom } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import Project03 from "@/public/project-3.png";
import Project04 from "@/public/project-4.png";
import Project05 from "@/public/project-5.png";
import Project06 from "@/public/project-6.png";

export const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;

export const projectData = [
  {
    name: "Copilot Grading Tool",
    description:
      "An AI-powered solution designed to enhance the grading process with Canvas Learning Management System.",
    badges: [
      "GenAI",
      "TypeScript",
      "Ollama",
      "Docker",
      "Llama3",
      "Plasmo",
      "Chrome Extension",
    ],
    bgColor: "#ffe3a4",
    imgSrc: Project05,
    links: {
      docs: "https://copilot-grading-tool.readthedocs.io/en/dev/",
    },
  },
  {
    name: "The Wild Oasis",
    description:
      "A comprehensive hotel management system featuring a customer-facing website and an admin management system.",
    badges: ["Next.js", "Vercel", "Supabase", "Google OAuth", "Tailwind CSS"],
    bgColor: "#c5ded5",
    imgSrc: Project06,
    links: {
      github: "https://github.com/Peng-Yujie/the-wild-oasis-website",
      demo: "https://the-wild-oasis-website-clone.vercel.app/",
    },
  },
  {
    name: "PurrFect Neighbors",
    description:
      "An online platform that helps pets find warm homes and users find their ideal pets.",
    badges: [
      "React",
      "Node.js",
      "MySQL",
      "Redis",
      "AWS S3",
      "GraphQL",
      "Ant Design",
    ],
    bgColor: "#ffd0c3",
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
      "Tailwind CSS",
    ],
    imgSrc: Project03,
    bgColor: "#f3e8ff",
    links: {
      github: "https://github.com/RileyC9/EasyGrammar",
      demo: "https://easygrammarapp.netlify.app/",
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

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "design";

export const skillCategoryColors: Record<
  SkillCategory,
  { light: string; dark: string }
> = {
  frontend: {
    light: "rgba(251, 191, 36, 0.25)",
    dark: "rgba(251, 191, 36, 0.2)",
  }, // amber
  backend: { light: "rgba(34, 197, 94, 0.25)", dark: "rgba(34, 197, 94, 0.2)" }, // green
  database: {
    light: "rgba(59, 130, 246, 0.25)",
    dark: "rgba(59, 130, 246, 0.2)",
  }, // blue
  devops: {
    light: "rgba(168, 85, 247, 0.25)",
    dark: "rgba(168, 85, 247, 0.2)",
  }, // purple
  design: {
    light: "rgba(244, 114, 182, 0.25)",
    dark: "rgba(244, 114, 182, 0.2)",
  }, // pink
};

export const skillsData: { name: string; category: SkillCategory }[] = [
  { name: "HTML5/CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Python", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "RESTful API", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Figma", category: "design" },
];

export const socialMediaData = [
  { name: "resume", icon: FaRegFileAlt, url: "/resume.pdf", label: "Resume" },
  {
    name: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/yujie-peng-8276b1279/",
    label: "LinkedIn",
  },
  {
    name: "github",
    icon: FaGithub,
    url: "https://github.com/Peng-Yujie",
    label: "GitHub",
  },
];
