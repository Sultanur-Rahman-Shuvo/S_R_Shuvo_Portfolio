'use client'

import { motion } from 'framer-motion'
import SkillBar from '@/components/SkillBar'
import { 
  FiCode, 
  FiBarChart2, 
  FiTarget, 
  FiTool,
  FiCpu,
  FiDatabase,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi'

const groupedSkills = [
  {
    category: 'Web Development',
    icon: <FiCode className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    skills: [
      { name: 'MERN Stack & Next.js', level: 85 },
      { name: 'Tailwind CSS & Shadcn', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'Node.js', level: 80 },
      { name: 'PHP', level: 80 },
      { name: 'MongoDB', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'WordPress, Elementor & WooCommerce', level: 90 },
      { name: 'WordPress Theme Development', level: 80 },
      { name: 'WordPress Plugin Development', level: 80 },
    ],
  },
  {
    category: 'Data Science',
    icon: <FiBarChart2 className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Numpy', level: 80 },
      { name: 'Pandas', level: 80 },
      { name: 'Matplotlib', level: 85 },
      { name: 'SQL', level: 85 },
      { name: 'Probability', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Deep Learning & Neural Networks', level: 80 },
      { name: 'Large Language Model', level: 85 },
      { name: 'Retrieval Augmented Generation', level: 85 },
      { name: 'PowerBI', level: 85 },
      { name: 'Tableau', level: 90 },
      { name: 'MS Excel', level: 95 },
    ],
  },
  {
    category: 'Digital Marketing',
    icon: <FiTarget className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    skills: [
      { name: 'Facebook Ads (Organic & Paid)', level: 90 },
      { name: 'Google Ads', level: 85 },
      { name: 'Web Analytics with Server-Side Tracking (GA4)', level: 80 },
      { name: 'Business & Marketing Fundamentals', level: 90 },
      { name: 'Email Marketing', level: 90 },
      { name: 'Copywriting & Storytelling', level: 90 },
    ],
  },
  {
    category: 'Tools & Soft Skills',
    icon: <FiTool className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Communication & Teamwork', level: 95 },
      { name: 'English', level: 85 },
      { name: 'Time Management', level: 95 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A comprehensive overview of my technical skills and professional expertise across multiple domains.
        </motion.p>

        <div className="space-y-8">
          {groupedSkills.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className={`${group.bgGradient} px-6 py-4 border-b border-gray-100 dark:border-gray-700`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${group.gradient} flex items-center justify-center text-white shadow-lg`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {group.category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {group.skills.length} skills mastered
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      className="group"
                    >
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md">
                        <SkillBar name={skill.name} level={skill.level} categoryGradient={group.gradient} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Versatile Skill Set</h3>
            <p className="text-blue-100 text-lg mb-6">
              Combining technical expertise with marketing insights to deliver comprehensive digital solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">4+</div>
                <div className="text-blue-200">Domains</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-blue-200">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-blue-200">Average Skill</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-blue-200">Dedication</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}