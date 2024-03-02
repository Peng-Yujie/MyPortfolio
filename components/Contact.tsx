import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { motionProps } from "../lib/motionSettings";
import SocialButton from "./SocialButton";
import { socialMediaData } from "../lib/data";
import { useForm, ValidationError } from "@formspree/react";
import { serialize } from "v8";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnqevrbb");
  const [feedback, setFeedback] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    message: "",
  });

  const handleFeedback = () => {
    setFeedback(true);
    setTimeout(() => {
      setFeedback(false);
    }, 3000);
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormValues({
        email: "",
        message: "",
      });
      handleFeedback();
    }
  }, [state.succeeded]);

  return (
    <section className="contact scroll-mt-20" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
        <motion.div
          {...motionProps}
          className="rounded-3xl flex flex-col justify-begin bg-gray-50 dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500"
        >
          <div className="h-4/6 max-h-64 rounded-t-3xl bg-[url('/me.png')] bg-contain bg-center bg-no-repeat hidden md:block" />
          <div className="mx-10 my-6 md:mb-12">
            <h1 className="text-3xl font-semibold mb-4">
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
          className="rounded-3xl overflow-hidden bg-gradient px-10 py-6 md:py-12 dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500"
        >
          <h1 className="text-3xl font-semibold mb-6">
            Send me a <span className="text-gradient">Message</span>
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email" // Add placeholder here
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
                className="py-3 px-4 rounded-lg outline outline-gray-100 outline-2 focus:outline-teal-200 focus:ring focus:ring-2 focus:ring-lime-200"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                value={formValues.message}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                className="py-3 px-4 rounded-lg text-gray-700 outline outline-gray-100 outline-2 focus:outline-teal-200 focus:ring focus:ring-2 focus:ring-lime-200"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
              <button
                className="bg-black text-white font-medium py-3 px-6 rounded-full w-40 lg:w-auto self-start dark:bg-gray-500 hover:scale-105"
                type="submit"
                disabled={state.submitting}
              >
                Send
              </button>
              {feedback && (
                <p>You message has been sent! Thanks for reaching out!</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
