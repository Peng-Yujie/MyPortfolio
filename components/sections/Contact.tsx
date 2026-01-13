"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";
import { useActiveSection } from "@/context/active-section-context";
import { socialMediaData } from "@/lib/data";
import LiquidCard from "@/components/ui/LiquidCard";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-40%" });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  const [state, handleSubmit] = useForm("mnqevrbb");
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact");
    }
  }, [isInView, setActiveSection, timeOfLastClick]);

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ email: "", message: "" });
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" ref={sectionRef} className="py-20 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-subtitle">Get In Touch</p>
        <h2 className="section-title mb-10">
          Let&apos;s <span className="text-gradient">Connect</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6">
        {/* Left Card - Info */}
        <LiquidCard className="p-6 md:p-8 flex flex-col">
          {/* Profile section */}
          <div className="flex-1 flex flex-col items-center justify-center text-center mb-6">
            <motion.div
              className="relative w-28 h-28 mb-5"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-teal-400 p-0.5">
                <div className="w-full h-full rounded-full bg-white p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/me.png"
                      alt="Yujie Peng"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <h3 className="text-xl font-bold mb-1">Yujie Peng</h3>
            <p className="text-text-secondary text-sm mb-5">
              Full Stack Developer
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialMediaData.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full bg-white/70 border border-white/80 flex items-center justify-center text-text-secondary hover:text-sky-500 hover:bg-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Location */}
          <div className="pt-5 border-t border-white/50">
            <p className="text-text-muted text-sm text-center">
              📍 Vancouver, Canada
            </p>
            <p className="text-text-muted text-xs text-center mt-1">
              Open to remote opportunities worldwide
            </p>
          </div>
        </LiquidCard>

        {/* Right Card - Contact Form */}
        <LiquidCard className="p-6 md:p-8">
          <h3 className="text-xl font-bold mb-1">
            Send me a <span className="text-gradient">Message</span>
          </h3>
          <p className="text-text-secondary text-sm mb-6">
            I&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="glass-input"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or just say hi..."
                rows={4}
                required
                className="glass-input resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="glass-button-primary w-full py-3 text-base font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {state.submitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  />
                ) : showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FaCheck className="w-4 h-4" />
                    <span>Sent!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Send Message</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm text-center"
              >
                ✨ Thanks for reaching out! I&apos;ll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>
        </LiquidCard>
      </div>
    </section>
  );
}
