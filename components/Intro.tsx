import React from "react";
import SocialButton from "./SocialButton";
import Dribbble from "public/dribbble.svg";
import Instagram from "public/instagram.svg";
import Linkedin from "public/linkedin.svg";
import Twitter from "public/twitter.svg";

const Intro = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
      <div className="h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
        <h1 className="text-4xl font-semibold">Hello, I am Yujie</h1>
        <p className="flex-1">Hello world</p>
        <div className="flex flex-col lg:flex-row item-center gap-4 justify-self-end">
          <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
            Contact me
          </button>
          <div className="flex items-center gap-4">
            <SocialButton bgColor="dribbble">
              <Dribbble className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="instagram">
              <Instagram className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="twitter">
              <Twitter className="w-5 h-5" />
            </SocialButton>
            <SocialButton bgColor="linkedin">
              <Linkedin className="w-5 h-5" />
            </SocialButton>
          </div>
        </div>
      </div>
      <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile.jpg')] bg-cover bg-center" />
    </section>
  );
};

export default Intro;