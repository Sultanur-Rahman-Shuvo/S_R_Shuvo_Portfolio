'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experience = [
  {
    company: 'StyleSilo (Own Clothing Brand)',
    role: 'Web Developer',
    duration: 'Sept 2024 - Present',
    location: 'Dhaka, Bangladesh',
    points: [
      'Architected and developed the WooCommerce platform (stylesilo.shop) using WordPress, PHP, and MySQL',
      'Designed key pages using Elementor with custom CSS enhancements for unique layouts',
      'Developed custom WordPress plugins while utilizing Elementor for rapid page building',
      'Implemented responsive designs combining Elementor templates with hand-coded components',
      'Integrated Facebook Pixel and server-side tracking for conversion analytics',
      'Managed hosting environment with Elementor-based staging sites for safe updates'
    ]
  },
  {
    company: 'RequinBD',
    role: 'Marketing & PR Intern',
    duration: 'May 2025 - October 2025',
    location: 'Dhaka, Bangladesh',
    points: [
      'Conducted comprehensive brand and platform audits to identify growth opportunities',
      'Crafted engaging social media captions and developed strategic content calendars',
      'Created and scheduled social media posts while driving audience engagement',
      'Developed compelling copywriting and storytelling for brand narratives',
      'Executed email marketing campaigns to nurture leads and drive conversions',
      'Maintained regular LinkedIn posting schedule to enhance professional presence',
      'Planned events and managed Olympiad marketing initiatives'
    ]
  }
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
          My journey through hands-on roles that have shaped my expertise in web development and digital marketing.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-r from-[#0097e6] to-[#7ed6df]"></div>
          
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
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-full border-4 border-gray-200 dark:border-gray-900 z-10"></div>

                {/* Content card */}
                <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex-1 ml-12 md:ml-0 ${
                  idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  {/* Header with gradient */}
                    <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-start justify-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiBriefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-white dark:text-white font-semibold">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FiCalendar className="w-4 h-4 text-[#00a8ff]" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <FiMapPin className="w-4 h-4 text-[#00a8ff]" />
                        <span className="text-sm font-medium">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 * i }}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-[#00a8ff] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{point}</span>
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
          <div className="bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 text-lg mb-6">
              Let's discuss how my experience can contribute to your next project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}