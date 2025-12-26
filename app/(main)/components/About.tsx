"use client";

import { motion } from "framer-motion";
import { FiCode, FiBook, FiAward, FiCoffee } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Passionate developer crafting digital experiences with modern
          technologies and innovative solutions.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className="backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100/50 dark:border-gray-700/50 hover:border-[#0097e6]/30 dark:hover:border-[#7ed6df]/30 relative overflow-hidden group"
              style={{ boxShadow: "0 8px 32px rgba(0, 151, 230, 0.08)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0097e6]/5 to-[#7ed6df]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 font-medium"
              >
                I'm{" "}
                <strong className="text-[#00a8ff] dark:text-[#00a8ff]">
                  Sultanur Rahman Shuvo
                </strong>
                , a dedicated and skilled <strong>Full-Stack Web Developer</strong>{" "}
                with solid expertise in <strong>data science & analytics, and digital marketing</strong>. I build responsive applications, create data-driven dashboards, and develop machine-learning features that transform complex data into practical, usable insights. Currently
                pursuing my{" "}
                <strong>
                  Bachelor of Science in Computer Science and Engineering
                </strong>{" "}
                at <strong>United International University (UIU)</strong>, I
                specialize in building scalable, high-performance web
                applications and intuitive e-commerce solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100/50 dark:border-gray-700/50 hover:border-[#0097e6]/30 dark:hover:border-[#7ed6df]/30 relative overflow-hidden group"
              style={{ boxShadow: "0 8px 32px rgba(0, 151, 230, 0.08)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0097e6]/5 to-[#7ed6df]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed relative z-10 font-medium">
                My toolkit includes{" "}
                <strong>React, Node.js, MongoDB, and Express</strong> for
                full-stack development, along with{" "}
                <strong>Next.js and TypeScript</strong> for SEO-optimized
                applications. I also work with data science and analytics tools to build dashboards, automate insights, and integrate machine-learning features into applications. As the founder of <strong>StyleSilo</strong>, I
                designed and managed a{" "}
                <strong>WooCommerce-based e-commerce platform</strong>,
                integrating frontend design with backend functionality to
                deliver seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center lg:text-left"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#0097e6]/40 hover:shadow-[#0097e6]/60 relative overflow-hidden"
                style={{
                  boxShadow:
                    "0 4px 14px 0 rgba(0, 151, 230, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10">
                  Let's collaborate and build something remarkable
                </span>
                <svg
                  className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative bg-gradient-to-br from-[#0097e6] to-[#7ed6df] rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
                style={{ boxShadow: "0 8px 24px rgba(0, 151, 230, 0.3)" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
                <FiCode className="w-10 h-10 mx-auto mb-3 relative z-10 drop-shadow-lg" />
                <div className="text-3xl font-bold relative z-10 drop-shadow-lg">
                  2+ Years
                </div>
                <div className="text-white/90 text-sm font-medium relative z-10">
                  Development Experience
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative bg-gradient-to-br from-[#0097e6] to-[#7ed6df] rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
                style={{ boxShadow: "0 8px 24px rgba(0, 151, 230, 0.3)" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
                <FiBook className="w-10 h-10 mx-auto mb-3 relative z-10 drop-shadow-lg" />
                <div className="text-3xl font-bold relative z-10 drop-shadow-lg">
                  UIU
                </div>
                <div className="text-white/90 text-sm font-medium relative z-10">
                  Computer Science
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative bg-gradient-to-br from-[#0097e6] to-[#7ed6df] rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
                style={{ boxShadow: "0 8px 24px rgba(0, 151, 230, 0.3)" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
                <FiAward className="w-10 h-10 mx-auto mb-3 relative z-10 drop-shadow-lg" />
                <div className="text-3xl font-bold relative z-10 drop-shadow-lg">
                  10+
                </div>
                <div className="text-white/90 text-sm font-medium relative z-10">
                  Projects Completed
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative bg-gradient-to-br from-[#0097e6] to-[#7ed6df] rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
                style={{ boxShadow: "0 8px 24px rgba(0, 151, 230, 0.3)" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
                <FiCoffee className="w-10 h-10 mx-auto mb-3 relative z-10 drop-shadow-lg" />
                <div className="text-3xl font-bold relative z-10 drop-shadow-lg">
                  Full Stack
                </div>
                <div className="text-white/90 text-sm font-medium relative z-10">
                  Web Development
                </div>
              </motion.div>
            </div>

            {/* Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100/50 dark:border-gray-700/50 hover:border-[#0097e6]/30 dark:hover:border-[#7ed6df]/30 relative overflow-hidden group"
              style={{ boxShadow: "0 8px 32px rgba(0, 151, 230, 0.08)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0097e6]/5 to-[#7ed6df]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3 relative z-10">
                <div className="w-1.5 h-10 bg-gradient-to-b from-[#0097e6] to-[#7ed6df] rounded-full shadow-lg"></div>
                My Philosophy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium relative z-10">
                I thrive on transforming ideas into functional, efficient web
                solutions. Whether it's a dynamic MERN application or a
                WordPress store, I prioritize <strong>clean code</strong>,{" "}
                <strong>performance optimization</strong>, and{" "}
                <strong>user-centric design</strong> to deliver exceptional
                digital experiences.
              </p>
            </motion.div>

            {/* Tech Stack Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-2xl p-6 border border-blue-100 dark:border-gray-600"
            >
              <h4 className="font-semibold text-white dark:text-white mb-3">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "MERN Stack",
                  "Next.js",
                  "TypeScript",
                  "PHP",
                  "WordPress & WooCommerce",
                  "Data Science & Analytics",
                  "Digital Marketing"
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="px-3 py-1 bg-white dark:bg-white text-gray-900 dark:text-gray-900 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
