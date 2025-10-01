'use client'

import { motion } from 'framer-motion'

interface SkillBarProps {
  name: string;
  level: number;
  categoryGradient?: string;
}

export default function SkillBar({ name, level, categoryGradient = "from-blue-500 to-purple-500" }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <motion.span 
          className={`text-xs font-bold bg-gradient-to-r ${categoryGradient} text-white px-2 py-1 rounded-full`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      
      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${categoryGradient} rounded-full relative`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          />
        </motion.div>
      </div>
    </div>
  )
}