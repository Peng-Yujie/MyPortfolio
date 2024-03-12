import React from "react";
import SocialButton from "./SocialButton";
import { socialMediaData } from "../lib/data";
import ThemeSwitch from "./ThemeSwitch";
import { useSectionInView } from "../lib/motionSettings";

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
      <div className="md:h-[32rem] rounded-3xl p-6 md:px-16 md:py-12 flex flex-col gap-8 bg-[url('/MyPortfolio/gradient-bg.jpg')] bg-cover dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500">
        <h1 className="text-4xl lg:text-6xl font-bold flex flex-col md:flex-row">
          Hello, I am&nbsp;<span className="text-gradient">Yujie</span>
        </h1>
        <div className="flex-1 flex flex-col justify-center">
          <p>
            Currently a CS student at Langara College, equipped with a diverse
            set of skills in{" "}
            <strong>web development and software engineering</strong>
            . I am looking for opportunities to work on exciting projects.
            <br />
            Passionate about programming and technology, with extensive
            expertise in e-commerce operations and a deep understanding of
            business requirements.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-self-end">
          <button
            className="bg-black text-white font-medium py-3 px-10 rounded-full w-44 lg:w-auto dark:bg-gray-500 hover:scale-105"
            onClick={scrollToContact}
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
      <div className="h-48 md:h-[32rem] rounded-3xl p-6 md:py-12 bg-gray-50 flex flex-row md:flex-col justify-items-end md:justify-between dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500">
        <div className="h-[8rem] flex-1 md:w-auto bg-[url('/MyPortfolio/me-mac.png')] bg-contain bg-center bg-no-repeat">
          <p className="text-2xl md:text-center dark:hidden">💭</p>
          <p className="text-2xl md:text-center hidden dark:block">💡</p>
        </div>
        <div className="flex-1 flex items-center text-center">
          <p>
            <i>Business-minded. Team Player. Data-analytic Thinking.</i>
          </p>
        </div>
        <div className="flex items-center pl-4">
          <ThemeSwitch />
        </div>
      </div>
    </section>
  );
};

export default Intro;
