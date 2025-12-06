"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiFacebook,
} from "react-icons/fi";
import { useState } from "react";

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      url: "https://github.com/Sultanur-Rahman-Shuvo",
      label: "GitHub",
      color:
        "text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400",
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      url: "https://x.com/ShuvoSultanur",
      label: "X (Twitter)",
      color:
        "text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400",
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/sultanur-rahman-shuvo/",
      label: "LinkedIn",
      color: "text-[#0A66C2] hover:text-[#0A66C2]/90",
    },
    {
      icon: <FiYoutube className="w-5 h-5" />,
      url: "https://www.youtube.com/@sultanurrahmanshuvo",
      label: "YouTube",
      color: "text-[#FF0000] hover:text-[#FF0000]/90",
    },
    {
      icon: <FiInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com/sultanurrahmanshuvo/",
      label: "Instagram",
      color: "text-[#E1306C] hover:text-[#E1306C]/90",
    },
    {
      icon: <FiFacebook className="w-5 h-5" />,
      url: "https://www.facebook.com/sultanur.rahman.shuvo.2024",
      label: "Facebook",
      color: "text-[#1877F2] hover:text-[#1877F2]/90",
    },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("sultanurrahmanshuvo@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-gray-200 dark:border-gray-700 mt-20 py-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Stacked */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${link.color}`}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center space-y-2"
          >
            <p className="text-gray-600 dark:text-gray-300">
              West Pirerbag, Kamal Sarani, Mirpur, Dhaka-1216
            </p>
            <div className="flex items-center justify-center gap-2">
              <FiMail className="text-blue-600 dark:text-blue-400" />
              <div className="flex items-center gap-1">
                <a
                  href="mailto:sultanurrahmanshuvo@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  sultanurrahmanshuvo@gmail.com
                </a>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="copy-button text-gray-400 hover:text-blue-500 transition-colors ml-1 focus:outline-none"
                  aria-label="Copy email"
                >
                  {emailCopied ? (
                    <span className="text-xs text-green-500">Copied!</span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hidden md:flex flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <p className="text-gray-600 dark:text-gray-300">
              West Pirerbag, Kamal Sarani, Mirpur, Dhaka-1216
            </p>
            <div className="flex items-center gap-2">
              <FiMail className="text-[#00a8ff] dark:text-[#0097e6]" />
              <div className="flex items-center gap-1">
                <a
                  href="mailto:sultanurrahmanshuvo@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#00a8ff] dark:hover:text-[#0097e6] transition-colors"
                >
                  sultanurrahmanshuvo@gmail.com
                </a>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="copy-button text-gray-400 hover:text-blue-500 transition-colors ml-1 focus:outline-none"
                  aria-label="Copy email"
                >
                  {emailCopied ? (
                    <span className="text-xs text-[#00a8ff] dark:text-[#0097e6]">
                      Copied!
                    </span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${link.color}`}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Developed by{" "}
            <span className="text-[#00a8ff]">Sultanur Rahman Shuvo</span>. All
            rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
