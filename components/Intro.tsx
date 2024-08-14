import React from "react";
import Image from "next/image";
import SocialButton from "./SocialButton";
import { socialMediaData } from "../lib/data";
import ThemeSwitch from "./ThemeSwitch";
import { useSectionInView } from "../lib/motionSettings";
import gradientBg from "public/gradient-bg.jpg";
import me from "public/me-mac.png";

const Intro = () => {
  const { ref } = useSectionInView("About");
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-4 pt-2 scroll-mt-28"
      ref={ref}
    >
      <div className="relative md:h-[32rem] rounded-3xl bg-gray-50 dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500">
        <Image
          src={gradientBg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl dark:hidden"
          priority
        />
        <div className="relative h-full p-6 md:px-16 md:py-12 flex flex-col gap-8">
          <h1 className="text-4xl lg:text-6xl font-bold flex flex-col md:flex-row md:items-center">
            Hello, I am&nbsp;
            <span className="text-gradient leading-tight">Yujie</span>
          </h1>
          <div className="flex-1 flex flex-col justify-center">
            <p>
              A CS new grad and a results-oriented Full Stack Developer with
              expertise in{" "}
              <strong>
                Web Development, Software Engineering, and UI/UX Design
              </strong>
              . Experienced in designing robust systems, optimizing performance,
              and collaborating with cross-functional teams to deliver
              innovative solutions. Passionate about developing scalable
              applications, enhancing user experiences, and eager to take on new
              challenges in the tech industry.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-self-end">
            <button
              className="bg-black text-white font-medium py-3 px-10 rounded-full w-44 lg:w-auto dark:bg-gray-500 hover:scale-105"
              onClick={scrollToContact}
              aria-label="Contact me"
            >
              Contact me
            </button>
            <div className="flex items-center gap-4">
              {socialMediaData.map(({ name, icon: Icon, url }) => (
                <SocialButton key={name} bgColor={name} href={url}>
                  <Icon className="w-5 h-5" />
                </SocialButton>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-48 md:h-[32rem] rounded-3xl p-6 md:py-12 bg-gray-50 flex flex-row md:flex-col justify-items-end md:justify-between dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500">
        <div className="relative h-[8rem] flex-1 md:w-auto">
          <Image src={me} alt="Me" layout="fill" objectFit="contain" priority />
          <p className="text-2xl md:text-center dark:hidden">💭</p>
          <p className="text-2xl md:text-center hidden dark:block">💡</p>
        </div>
        <div className="flex-1 flex items-center text-center">
          <p>
            <i>Team Player. Problem Solver. Frontend Innovator.</i>
          </p>
        </div>
        <div
          className="flex items-center pl-4"
          aria-label="Click to switch theme"
        >
          <ThemeSwitch />
        </div>
      </div>
    </section>
  );
};

export default Intro;
