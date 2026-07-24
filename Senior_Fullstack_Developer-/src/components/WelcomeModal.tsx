import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function WelcomeModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the modal was already shown in this session
    const isShown = sessionStorage.getItem("welcomeModalShown");
    if (!isShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("welcomeModalShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          {/* Outer Backdrop Close Area */}
          <div className="absolute inset-0" onClick={handleClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-lg bg-[#111113] border border-white/10 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden z-10"
          >
            {/* Ambient inner glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

            {/* Exit/Close Button (Top-Right) */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 p-0 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition duration-200 cursor-pointer z-20"
              aria-label="Close welcome modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="pt-12 md:pt-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-8 mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                Available for Select Leadership &amp; Advisory Roles
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                Smart Nwaiche
              </h2>

              {/* Purple Subheading */}
              <p className="text-lg md:text-xl font-semibold text-[#8B5CF6] mb-6 tracking-wide">
                Senior Full-Stack Developer
              </p>

              {/* Precise Description */}
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-md mx-auto mb-10 opacity-90">
                Building digital products that combine performance, clarity, and exceptional user experience. Working with global teams from Lagos, Nigeria.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/smart-nwaiche-6405182a5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-2xl transition duration-200 text-sm shadow-lg hover:shadow-[#8B5CF6]/20"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/smartestpc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3.5 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-zinc-300 hover:text-white rounded-2xl font-semibold transition duration-200 text-sm"
              >
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

