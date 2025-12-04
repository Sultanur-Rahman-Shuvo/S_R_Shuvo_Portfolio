'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg z-50 py-4 border-b border-gray-200/50 dark:border-gray-700/50 w-full"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-[#0097e6] to-[#7ed6df] bg-clip-text text-transparent transition-all duration-300"
          >
            Portfolio
          </Link>
        </motion.div>
        
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: 0.1 * index
              }}
            >
              <Link 
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-[#0097e6] dark:hover:text-blue-400 font-medium transition-all duration-300 relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] group-hover:w-full transition-all duration-300"></span>
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
  )
}