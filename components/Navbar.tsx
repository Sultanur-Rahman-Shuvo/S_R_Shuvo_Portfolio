"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 z-50 py-3 border-b-2 border-gray-200/30 dark:border-gray-700/30 w-full shadow-lg shadow-black/5"
      style={{ boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <Link
            href="/"
            className="text-lg sm:text-xl font-black bg-gradient-to-r from-[#0097e6] to-[#7ed6df] bg-clip-text text-transparent transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Portfolio
            <div className="h-0.5 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </motion.div>

        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 * index,
              }}
              className="hidden sm:block"
            >
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-[#0097e6] dark:hover:text-[#7ed6df] font-semibold transition-all duration-300 relative group py-2 px-1 text-sm"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] group-hover:w-full transition-all duration-300 rounded-full shadow-lg shadow-[#0097e6]/50"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
