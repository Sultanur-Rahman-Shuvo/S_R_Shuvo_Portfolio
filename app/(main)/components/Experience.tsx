"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experience = [
  {
    company: "StyleSilo (Own Clothing Brand)",
    role: "Web Developer",
    duration: "Sept 2024 - Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Architected and developed the WooCommerce platform (stylesilo.shop) using WordPress",
      "Designed key pages using Elementor for unique layouts",
      "Implemented responsive designs combining Elementor templates",
      "Integrated Facebook Pixel and server-side tracking for conversion analytics",
      "Managed hosting environment with Elementor-based staging sites for safe updates",
      "Managed Facebook and Instagram page, created engaging contents and conducted paid marketing campaign",
    ],
  },
  {
    company: "RequinBD",
    role: "Marketing & PR Intern",
    duration: "May 2025 - October 2025",
    location: "Remote (Khulna, Bangladesh)",
    points: [
      "Managed email campaigns on Brevo, LinkedIn organic marketing, and Facebook paid ads, supporting lead generation and audience engagement. ",
      "Conducted brand and platform audits, client campaign analysis, and YouTube SEO to optimize digital presence and performance.",
      "Wrote captions, copy, and storytelling content, ensuring alignment with brand voice while collaborating with designers for creative assets",
      "Supported event planning, idea generation, and presentations, contributing to marketing strategies and campaign execution",
      "Organized team tasks in Google Sheets and participated in personal branding sessions to strengthen marketing and PR skills."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My journey through hands-on roles that have shaped my expertise in web
          development and digital marketing.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0097e6] via-[#7ed6df] to-[#0097e6] rounded-full shadow-lg shadow-[#0097e6]/30"></div>

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-5 h-5 bg-gradient-to-br from-[#0097e6] to-[#7ed6df] rounded-full border-4 border-white dark:border-gray-900 shadow-xl shadow-[#0097e6]/40"></div>
                  <div className="absolute w-7 h-7 bg-[#0097e6]/20 rounded-full animate-ping"></div>
                </div>

                {/* Content card */}
                <div
                  className={`backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100/50 dark:border-gray-700/50 hover:border-[#0097e6]/30 dark:hover:border-[#7ed6df]/30 overflow-hidden flex-1 ml-12 md:ml-0 group ${
                    idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                  style={{ boxShadow: "0 8px 32px rgba(0, 151, 230, 0.1)" }}
                >
                  {/* Header with gradient */}
                  <div className="relative px-6 py-5 bg-gradient-to-r from-[#0097e6]/10 to-[#7ed6df]/10 border-b-2 border-gray-100/50 dark:border-gray-700/50 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    <div className="flex items-start justify-start gap-4 relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0097e6] to-[#7ed6df] rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#0097e6]/30 relative group-hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
                        <FiBriefcase className="w-7 h-7 text-white relative z-10" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-lg bg-gradient-to-r from-[#0097e6] to-[#7ed6df] bg-clip-text text-transparent font-bold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2 px-3 py-2 backdrop-blur-sm bg-[#0097e6]/10 rounded-lg text-gray-700 dark:text-gray-300 border border-[#0097e6]/20">
                        <FiCalendar className="w-4 h-4 text-[#0097e6]" />
                        <span className="text-sm font-bold">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 backdrop-blur-sm bg-[#0097e6]/10 rounded-lg text-gray-700 dark:text-gray-300 border border-[#0097e6]/20">
                        <FiMapPin className="w-4 h-4 text-[#0097e6]" />
                        <span className="text-sm font-bold">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * i }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group/item"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-full mt-2 flex-shrink-0 shadow-lg shadow-[#0097e6]/30 group-hover/item:scale-125 transition-transform duration-300"></div>
                          <span className="leading-relaxed font-medium">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="relative bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-2xl p-10 text-white overflow-hidden shadow-2xl shadow-[#0097e6]/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
                Ready to Work Together?
              </h3>
              <p className="text-white/90 text-lg mb-8 font-medium">
                Let's discuss how my experience can contribute to your next
                project.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-white/95 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/30 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative z-10">Get In Touch</span>
                <svg
                  className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
