"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiArrowDown, FiCode, FiBarChart2, FiTrendingUp } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const professions = [
  { 
    title: "Full-Stack MERN & Next.js Developer", 
    icon: <FiCode className="w-6 h-6" />,
    color: "from-[#0097e6] to-[#7ed6df]"
  },
  { 
    title: "Data Scientist", 
    icon: <FiBarChart2 className="w-6 h-6" />,
    color: "from-[#0097e6] to-[#7ed6df]"
  },
  { 
    title: "Digital Marketer", 
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: "from-[#0097e6] to-[#7ed6df]"
  }
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
      }, 500);
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
        delay: 0.3
      })
      .from(".hero-subtitle", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
      }, "-=0.5")
      .from(".hero-image", {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "back.out(1.7)"
      }, "-=0.5")
      .from(".hero-cta", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out"
      }, "-=0.3");
    }

    // Floating animation for elements
    gsap.to(".floating", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-[#0097e6] dark:text-blue-400 rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for new projects
            </motion.div>

            <h1 
              ref={titleRef}
              className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Sultanur Rahman{" "}
              <span className="bg-gradient-to-r from-[#0097e6] to-[#7ed6df] bg-clip-text text-transparent floating">
                Shuvo
              </span>
            </h1>
            
            <div className="h-16 lg:h-20 mb-8 relative">
              <AnimatePresence mode="wait">
                {isVisible && (
                  <motion.div
                    key={currentProfession}
                    className="hero-subtitle flex items-center gap-3 absolute"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${professions[currentProfession].color} text-white`}>
                      {professions[currentProfession].icon}
                    </div>
                    <span className={`text-2xl lg:text-3xl font-semibold bg-gradient-to-r ${professions[currentProfession].color} bg-clip-text text-transparent`}>
                      {professions[currentProfession].title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafting digital experiences with modern technologies and data-driven solutions. 
              Transforming ideas into scalable, high-performance applications.
            </motion.p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/downloads/cv.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg hover:scale-105 floating"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </motion.a>
              
              <motion.a
                href="#about"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 dark:border-[#0097e6] dark:hover:border-[#0097e6] text-gray-600 dark:text-[#0097e6] font-semibold rounded-xl hover:bg-[#0097e6] dark:hover:bg-[#0097e6] hover:text-gray-900 dark:hover:text-gray-900 transition-all duration-300 floating"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiArrowDown className="w-5 h-5" />
                Explore More
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-8 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">3</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Domains</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
            <motion.div
            className="hero-image relative w-80 h-80 lg:w-96 lg:h-96 mx-auto floating"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-full blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] dark:from-[#0097e6]/60 dark:to-[#7ed6df]/60 rounded-full opacity-20 animate-pulse"></div>
            
            {/* Main image */}
            <div className="relative w-full h-full">
              <Image
              src="/images/profile.jpg"
              alt="Sultanur Rahman Shuvo"
              fill
              className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
              priority
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full border-2 border-[#0097e6]/30 animate-ping"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#0097e6] rounded-full blur-xl opacity-30 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#7ed6df] rounded-full blur-xl opacity-30 animate-bounce" style={{ animationDelay: '1s' }}></div>
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