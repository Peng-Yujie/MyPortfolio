"use client";

import React, { useState, useEffect } from "react";
import SocialButton from "@/components/ui/SocialButton";
import GlassButton from "@/components/ui/GlassButton";
import LiquidCard from "@/components/ui/LiquidCard";
import { socialMediaData } from "@/lib/data";
import { useForm, ValidationError } from "@formspree/react";
import { useSectionInView } from "@/lib/motionSettings";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
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
    <section className="scroll-mt-28" id="contact" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
        <LiquidCard
          className="flex flex-col items-center justify-center p-6 md:p-8"
          delay={0}
        >
          <div className="relative z-10 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-[url('/me.png')] bg-contain bg-center bg-no-repeat hidden md:block" />
          <div className="relative z-10 text-center mt-4">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-3">
              Meet me <span className="text-gradient">Here</span>
            </h1>
            <div className="flex items-center justify-center gap-3">
              {socialMediaData.map(({ name, icon: Icon, url }) => (
                <SocialButton key={name} bgColor={name} href={url}>
                  <Icon className="w-5 h-5" />
                </SocialButton>
              ))}
            </div>
          </div>
        </LiquidCard>
        <LiquidCard className="p-6 md:p-12" delay={0.1}>
          <h1 className="text-3xl font-semibold mb-6">
            Send me a <span className="text-gradient">Message</span>
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-text-secondary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
                className="glass-input"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-text-secondary">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                value={formValues.message}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
                className="glass-input resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
              <GlassButton
                variant="cta"
                type="submit"
                aria-label="Send Message"
                disabled={state.submitting}
              >
                Send
              </GlassButton>
              {feedback && (
                <p className="text-text-secondary">
                  Your message has been sent! Thanks for reaching out!
                </p>
              )}
            </div>
          </form>
        </LiquidCard>
      </div>
    </section>
  );
};

export default Contact;
