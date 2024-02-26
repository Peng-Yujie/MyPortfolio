import React from "react";
import { motion } from "framer-motion";
import { motionProps } from "./motionSettings";
import SocialButton from "./SocialButton";
import Dribbble from "public/dribbble.svg";
import Instagram from "public/instagram.svg";
import Linkedin from "public/linkedin.svg";
import Twitter from "public/twitter.svg";

const Contact = () => {
  return (
    <>
      <motion.div {...motionProps} className="w-full my-4 overflow-hidden">
        <h1 className="h1-section">Contact me</h1>
      </motion.div>
      <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 mb-4">
        <motion.div
          {...motionProps}
          className="rounded-3xl p-10 flex flex-col justify-between bg-[url('/gradient-bg.jpg')] bg-cover"
        >
          <div className="h-1/2 rounded-2xl bg-[url('/profile.jpg')] bg-cover bg-center" />
          <div>
            <h1 className="text-3xl font-semibold mb-6">
              Find me <span className="text-gradient">Here</span>
            </h1>
            <div className="flex flex-col lg:flex-row item-center gap-4 justify-self-end">
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
        </motion.div>
        <motion.div
          {...motionProps}
          className="rounded-3xl overflow-hidden bg-gray-50 px-10 py-6"
        >
          <h1 className="text-3xl font-semibold mb-6">
            Send me a <span className="text-gradient">Message</span>
          </h1>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="email"
                placeholder="Your Email" // Add placeholder here
                className="py-3 px-4 rounded-lg outline outline-gray-100 outline-2 focus:outline-teal-200 focus:ring focus:ring-2 focus:ring-lime-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message" // Add placeholder here
                className="py-3 px-4 rounded-lg outline outline-gray-100 outline-2 focus:outline-teal-200 focus:ring focus:ring-2 focus:ring-lime-200"
              />
            </div>
            <button className="bg-black text-white font-medium py-3 px-6 rounded-full w-40 lg:w-auto self-start">
              Send
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
