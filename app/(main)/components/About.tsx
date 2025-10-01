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
          Passionate developer crafting digital experiences with modern technologies and innovative solutions.
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
              >
                I'm{" "}
                <strong className="text-[#00a8ff] dark:text-[#00a8ff]">
                  Sultanur Rahman Shuvo
                </strong>
                , a dedicated <strong>MERN Stack & Next.js Developer</strong> with hands-on
                expertise in <strong>Node.js</strong>. Currently
                pursuing my{" "}
                <strong>
                  Bachelor of Science in Computer Science and Engineering
                </strong>{" "}
                at <strong>United International University (UIU)</strong>, I
                specialize in building scalable, high-performance web applications
                and intuitive e-commerce solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                My toolkit includes{" "}
                <strong>React, Node.js, MongoDB, and Express</strong> for
                full-stack development, along with{" "}
                <strong>Next.js and TypeScript</strong> for SEO-optimized applications.
                As the founder of <strong>StyleSilo</strong>, I designed and
                managed a <strong>WooCommerce-based e-commerce platform</strong>,
                integrating frontend design with backend functionality to deliver
                seamless user experiences.
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
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00a8ff] to-[#0097e6] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Let's collaborate and build something remarkable
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
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
                className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 text-white text-center"
              >
                <FiCode className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">2+ Years</div>
                <div className="text-blue-100 text-sm">Development Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl p-6 text-white text-center"
              >
                <FiBook className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">UIU</div>
                <div className="text-blue-100 text-sm">Computer Science</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center"
              >
                <FiAward className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-blue-100 text-sm">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white text-center"
              >
                <FiCoffee className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">Full Stack</div>
                <div className="text-blue-100 text-sm">Web Development</div>
              </motion.div>
            </div>

            {/* Philosophy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                My Philosophy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I thrive on transforming ideas into functional, efficient web
                solutions. Whether it's a dynamic MERN application or a WordPress
                store, I prioritize <strong>clean code</strong>,{" "}
                <strong>performance optimization</strong>, and{" "}
                <strong>user-centric design</strong> to deliver exceptional digital experiences.
              </p>
            </motion.div>

            {/* Tech Stack Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 border border-blue-100 dark:border-gray-600"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['MERN Stack', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'WordPress', 'WooCommerce', 'Tailwind CSS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
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