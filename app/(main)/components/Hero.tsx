"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { SiCoder, SiPython, SiMeta } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const professions = [
  {
    title: "Full-Stack MERN & Next.js Developer",
    icon: <SiCoder className="w-6 h-6" />,
    color: "from-[#0097e6] to-[#7ed6df]",
  },
  {
    title: "Data Scientist",
    icon: <SiPython className="w-6 h-6" />,
    color: "from-[#0097e6] to-[#7ed6df]",
  },
  {
    title: "Digital Marketer",
    icon: <SiMeta className="w-6 h-6" />,
    color: "from-[#0097e6] to-[#7ed6df]",
  },
];

export default function Hero() {
  const [currentProfession, setCurrentProfession] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentProfession((prev) => (prev + 1) % professions.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    // GSAP animations for hero section
    const tl = gsap.timeline();

    if (titleRef.current) {
      tl.from(titleRef.current, {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: 0.3,
      })
        .from(
          ".hero-subtitle",
          {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".hero-image",
          {
            duration: 1,
            scale: 0.8,
            opacity: 0,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }

    // Floating animation for elements
    gsap.to(".floating", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 lg:pt-20 pb-16 lg:py-0"
    >
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-8">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 backdrop-blur-xl bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-400/40 text-green-700 dark:text-green-400 rounded-full text-xs font-medium mt-6 mb-10 shadow-lg shadow-green-500/15 w-fit"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span>Available for new projects</span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight opacity-100"
              suppressHydrationWarning
            >
              Sultanur Rahman{" "}
              <span className="bg-gradient-to-r from-[#0097e6] to-[#7ed6df] bg-clip-text text-transparent floating">
                Shuvo
              </span>
            </h1>

            <div
              className="h-16 mb-10 relative opacity-100"
              suppressHydrationWarning
            >
              <AnimatePresence mode="wait">
                {isVisible && (
                  <motion.div
                    key={currentProfession}
                    className="hero-subtitle flex items-center gap-3 absolute text-xl lg:text-2xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${professions[currentProfession].color} text-white`}
                    >
                      {professions[currentProfession].icon}
                    </div>
                    <span
                      className={`text-2xl lg:text-3xl font-semibold bg-gradient-to-r ${professions[currentProfession].color} bg-clip-text text-transparent`}
                    >
                      {professions[currentProfession].title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.p
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Creative technologist specializing in full-stack development, data
              science & analytics, and digital marketing. I build scalable solutions that
              drive innovation and growth.
            </motion.p>

            <div
              className="hero-cta flex flex-col sm:flex-row gap-5 items-start opacity-100"
              suppressHydrationWarning
            >
              <motion.a
                href="/downloads/shuvo_CV.pdf"
                download
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl shadow-[#0097e6]/40 hover:shadow-[#0097e6]/60 relative overflow-hidden floating text-base lg:text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow:
                    "0 4px 14px 0 rgba(0, 151, 230, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <FiDownload className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
              </motion.a>

              <motion.a
                href="#about"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border-2 border-[#0097e6] backdrop-blur-sm bg-white/50 dark:bg-gray-900/50  dark:hover:text-gray-800 text-[#0097e6] dark:text-[#0097e6] font-semibold rounded-xl hover:bg-[#0097e6] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl shadow-[#0097e6]/20 relative overflow-hidden floating text-base lg:text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></span>
                <FiArrowDown className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">Explore More</span>
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 mt-14 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex-1 text-center lg:text-left px-4 py-3 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-[#0097e6]/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0097e6] to-[#7ed6df] bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-2">
                  Years Experience
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left px-4 py-3 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-[#0097e6]/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0097e6] to-[#7ed6df] bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-2">
                  Projects
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left px-4 py-3 backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 rounded-2xl border border-[#0097e6]/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#0097e6] to-[#7ed6df] bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-2">
                  Domains
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            className="hero-image relative w-80 h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0 floating mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Professional glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-3xl blur-3xl opacity-25 animate-pulse"></div>

            {/* Animated rotating rings - Premium effect */}
            <div
              className="absolute -inset-6 rounded-3xl border-1.5 border-[#7ed6df]/40 shadow-lg shadow-[#7ed6df]/20"
              style={{
                animation: "spin 20s linear infinite",
              }}
            ></div>
            <div
              className="absolute -inset-8 rounded-3xl border border-[#0097e6]/20"
              style={{
                animation: "spin 30s linear infinite reverse",
              }}
            ></div>
            <div className="absolute -inset-3 rounded-3xl border-2 border-[#0097e6]/60 animate-pulse"></div>

            {/* Main image with professional border */}
            <div className="relative w-full h-full">
              {/* Outer gradient frame - Premium professional look */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0097e6] via-[#00c4ff] to-[#7ed6df] p-0.5 shadow-2xl shadow-[#0097e6]/40">
                {/* Inner border frame */}
                <div className="absolute inset-0.5 rounded-3xl bg-white dark:bg-gray-950 p-4">
                  {/* Image with rounded corners */}
                  <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                    <Image
                      src="/images/profile.jpg"
                      alt="Sultanur Rahman Shuvo"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Animated accent elements */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#0097e6]/30 to-[#7ed6df]/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-[#7ed6df]/20 to-[#0097e6]/20 rounded-full blur-lg"></div>

              {/* Corner accent decorations - Professional style */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#0097e6]/60 rounded-tl-xl"></div>
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-[#7ed6df]/60 rounded-tr-xl"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-[#7ed6df]/60 rounded-bl-xl"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#0097e6]/60 rounded-br-xl"></div>
            </div>

            {/* Decorative floating orbs - Subtle and professional */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#0097e6]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-8 w-40 h-40 bg-gradient-to-tr from-[#7ed6df]/10 to-transparent rounded-full blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#0097e6] rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#0097e6] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
