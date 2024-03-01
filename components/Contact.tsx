import React from "react";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import SocialButton from "./SocialButton";
import { socialMediaData } from "../lib/data";

const Contact = () => {
  return (
    <section className="contact scroll-mt-20" id="contact">
      {/* <section className="contact mb-12 scroll-mt-12"> */}
      {/* <motion.div {...motionProps} className="w-full mb-4 overflow-hidden">
        <h1 className="h1-section">Contact me</h1>
      </motion.div> */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
        <motion.div
          {...motionProps}
          className="rounded-3xl flex flex-col justify-between bg-gray-50 dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500"
        >
          <div className="h-4/6 rounded-t-3xl bg-[url('/me.png')] bg-contain bg-center bg-no-repeat hidden md:block" />
          <div className="mx-10 my-6">
            <h1 className="text-3xl font-semibold mb-6">
              Meet me <span className="text-gradient">Here</span>
            </h1>
            <div className="flex flex-col lg:flex-row item-center gap-4 justify-self-end">
              <div className="flex items-center gap-4">
                {socialMediaData.map(({ name, icon: Icon, url }) => (
                  <SocialButton key={name} bgColor={name} href={url}>
                    <Icon className="w-5 h-5" />
                  </SocialButton>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          {...motionProps}
          className="rounded-3xl overflow-hidden bg-gradient px-10 py-6 dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500"
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
                className="py-3 px-4 rounded-lg  outline outline-gray-100 outline-2 focus:outline-teal-200 focus:ring focus:ring-2 focus:ring-lime-200"
              />
            </div>
            <button className="bg-black text-white font-medium py-3 px-6 rounded-full w-40 lg:w-auto self-start dark:bg-gray-500 hover:scale-105">
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
