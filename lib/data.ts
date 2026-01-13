import { FaTiktok, FaLinkedin, FaRegFileAlt, FaGithub } from "react-icons/fa";
import { SiTripdotcom } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";

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
    gradient: "from-sky-100/50 to-cyan-100/50",
    accentColor: "#0ea5e9",
    image: "/project-5.png",
    links: {
      docs: "https://copilot-grading-tool.readthedocs.io/en/dev/",
    },
  },
  {
    name: "The Wild Oasis",
    description:
      "A comprehensive hotel management system featuring a customer-facing website and an admin management system.",
    badges: ["Next.js", "Vercel", "Supabase", "Google OAuth", "Tailwind CSS"],
    gradient: "from-emerald-100/50 to-teal-100/50",
    accentColor: "#10b981",
    image: "/project-6.png",
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
    gradient: "from-teal-100/50 to-green-100/50",
    accentColor: "#14b8a6",
    image: "/project-4.png",
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
    gradient: "from-cyan-100/50 to-sky-100/50",
    accentColor: "#22d3ee",
    image: "/project-3.png",
    links: {
      github: "https://github.com/RileyC9/EasyGrammar",
      demo: "https://easygrammarapp.netlify.app/",
    },
  },
];

export const experienceData = [
  {
    title: "Langara College",
    role: "Computer Science Diploma",
    date: "2023 - 2024",
    description:
      "Recently graduated from Langara College with a Diploma in Computer Science. Currently working on various projects to improve my skills.",
    icon: LuGraduationCap,
    accentColor: "#0ea5e9",
  },
  {
    title: "ByteDance",
    role: "E-Commerce Operations Manager",
    date: "2021 - 2022",
    description:
      "Platform Marketing and Operation, including planning and execution of marketing campaigns, and supporting the development of the platform.",
    icon: FaTiktok,
    accentColor: "#14b8a6",
  },
  {
    title: "Trip.com",
    role: "Marketing Manager",
    date: "2017 - 2021",
    description:
      "Led the planning and execution of integrated marketing campaigns and seasonal events. Project Management and Collaboration.",
    icon: SiTripdotcom,
    accentColor: "#0ea5e9",
  },
  {
    title: "Wuhan University of Technology",
    role: "Master's & Bachelor's Degrees",
    date: "2011 - 2017",
    description:
      "Graduated with a Master's degree in Journalism and Communication, and a Bachelor's degree in Law.",
    icon: LuGraduationCap,
    accentColor: "#10b981",
  },
];

export const skillsData = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "Python", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "RESTful API", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Figma", category: "design" },
  { name: "HTML5/CSS3", category: "frontend" },
];

export const socialMediaData = [
  { name: "resume", icon: FaRegFileAlt, url: "/resume.pdf", label: "Resume" },
  {
    name: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/yujie-peng-8276b1279/",
    label: "LinkedIn",
  },
  { name: "github", icon: FaGithub, url: "https://github.com/Peng-Yujie", label: "GitHub" },
];
