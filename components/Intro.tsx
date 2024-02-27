import React from "react";
import SocialButton from "./SocialButton";
import { socialMediaData } from "../lib/data";
import ThemeSwitch from "./ThemeSwitch";

const Intro = () => {
  const scrollToContact = () => {
    document.querySelector(".contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mb-4">
      <div className="h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
        <h1 className="text-4xl font-semibold">
          Hello, I am <span className="text-gradient">Yujie</span>
        </h1>
        <p className="flex-1">Hello world</p>
        <div className="flex flex-col lg:flex-row item-center gap-4 justify-self-end">
          <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
            Contact me
          </button>
          <div className="flex items-center gap-4">
            {socialMediaData.map(({ name, icon: Icon }) => (
              <SocialButton key={name} bgColor={name}>
                <Icon className="w-5 h-5" />
              </SocialButton>
            ))}
          </div>
        </div>
      </div>
      <div className="md:h-[30rem] rounded-3xl p-8 bg-gray-50 flex flex-row md:flex-col justify-items-end md:justify-between">
        <div className="w-[15rem] h-[8rem] md:w-auto md:h-4/6 bg-[url('/me-mac.png')] bg-contain bg-center bg-no-repeat" />
        <div className="flex-1 flex items-center">
          <p>Yujie Peng</p>
        </div>
        <div className="flex items-center">
          <ThemeSwitch />
        </div>
      </div>
    </section>
  );
};

export default Intro;
