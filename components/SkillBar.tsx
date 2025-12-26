"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  categoryGradient?: string;
}

export default function SkillBar({
  name,
  level,
  categoryGradient = "from-[#0097e6] to-[#7ed6df]",
}: SkillBarProps) {
  return (
    <div className="space-y-3 group">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#0097e6] dark:group-hover:text-[#7ed6df] transition-colors duration-300">
          {name}
        </span>
        <motion.span
          className={`text-xs font-bold bg-gradient-to-r ${categoryGradient} text-white px-3 py-1 rounded-full shadow-md`}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          {level}%
        </motion.span>
      </div>

      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"></div>

        {/* Animated progress bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className={`relative h-full bg-gradient-to-r ${categoryGradient} rounded-full shadow-lg`}
          style={{ boxShadow: "0 2px 8px rgba(0, 151, 230, 0.4)" }}
        >
          {/* Shimmer effect */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 2,
              delay: 1.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
          />

          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full"></div>

          {/* Particles/sparkles effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
