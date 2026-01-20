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
    <section id="contact" ref={sectionRef} className="py-16 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="section-subtitle">Get In Touch</p>
        <h2 className="section-title mb-8">
          Let&apos;s <span className="text-gradient">Connect</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-5">
        <LiquidCard className="p-5 md:p-6 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center text-center mb-5">
            <div className="relative w-24 h-24 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-teal-400 p-0.5">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 p-0.5">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image src="/me.png" alt="Yujie Peng" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-0.5">Yujie Peng</h3>
            <p className="text-text-secondary text-sm mb-4">Full Stack Developer</p>

            <div className="flex gap-2">
              {socialMediaData.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-button p-2.5"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-white/50 dark:border-slate-600/30">
            <p className="text-text-muted text-sm text-center">📍 Vancouver, Canada</p>
            <p className="text-text-muted text-xs text-center mt-1">Open to remote opportunities worldwide</p>
          </div>
        </LiquidCard>

        <LiquidCard className="p-5 md:p-6">
          <h3 className="text-lg font-bold mb-1">
            Send me a <span className="text-gradient">Message</span>
          </h3>
          <p className="text-text-secondary text-sm mb-5">
            I&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
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

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={4}
                required
                className="glass-input resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="glass-button-primary rounded-full w-full py-2.5 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <AnimatePresence mode="wait">
                {state.submitting ? (
                  <motion.div key="loading" className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : showSuccess ? (
                  <motion.span key="success" className="flex items-center gap-2">
                    <FaCheck className="w-3 h-3" /> Sent!
                  </motion.span>
                ) : (
                  <motion.span key="send" className="flex items-center gap-2">
                    <FaPaperPlane className="w-3 h-3" /> Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>

          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-sm text-center"
              >
                ✨ Thanks for reaching out!
              </motion.div>
            )}
          </AnimatePresence>
        </LiquidCard>
      </div>
    </section>
  );
}
