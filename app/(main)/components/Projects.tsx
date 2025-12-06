"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiCoder, SiPython, SiMeta } from "react-icons/si";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
  source: string;
  image: string;
  category: string;
};

const projects: Project[] = [
  // Web Development Projects
  {
    title: "Expense Tracker App with MERN Stack",
    description:
      "I built this site using React and CSS for a sleek and responsive UI, with Node.js and MongoDB powering the backend. It features user authentication, real-time expense tracking, and insightful data visualizations to help users manage their finances effectively.",
    techStack: [
      "React.js",
      "CSS",
      "Node.js",
      "MongoDB"
    ],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/MERN-Stack-and-NEXT-Js-and-PHP-Projects/tree/main/expense_tracker_app",
    image: "/projects/expense_tracker.png",
    category: "Web Development",
  },
  {
    title: "Blog App with Next.js, TypeScript, and TailwindCSS",
    description:
      "Build a modern blog app using Next.js, TypeScript, and TailwindCSS. This project features a dynamic post system, responsive UI, and a structured layout for an optimized user experience.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/MERN-Stack-and-NEXT-Js-and-PHP-Projects/tree/main/blogapp_nextjs",
    image: "/projects/blogapp.png",
    category: "Web Development",
  },
  {
    title: "Responsive React Corporate Website with React Bootstrap & CSS",
    description:
      "Built with React, Bootstrap, and CSS, this website offers a sleek, responsive design with smooth UI components for an enhanced user experience.",
    techStack: ["React", "CSS", "React Bootstrap"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/MERN-Stack-and-NEXT-Js-and-PHP-Projects/tree/main/corporate",
    image: "/projects/corporate.png",
    category: "Web Development",
  },
  {
    title: "Full-Stack E-Commerce App with React, Node, MongoDB & Redux ",
    description:
      "A feature-rich e-commerce platform built with React, Node.js, MongoDB, and Redux for efficient state management. It includes product listings, cart management, user authentication, and secure checkout for a seamless shopping experience.",
    techStack: ["React", "Node.js", "MongoDB", "Redux"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/MERN-Stack-and-NEXT-Js-and-PHP-Projects/tree/main/react_ecommerceapp",
    image: "/projects/react_ecommerce.png",
    category: "Web Development",
  },
  {
    title: "Full-Stack Notebook App with React, Node, MongoDB & Bootstrap",
    description:
      "A simple and efficient notebook app built with React for the frontend, Node.js and MongoDB for the backend, and Bootstrap for a responsive UI. It allows users to create, edit, and manage notes seamlessly.",
    techStack: ["React", "Node.js", "MongoDB", "Bootstrap"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/MERN-Stack-and-NEXT-Js-and-PHP-Projects/tree/main/notebookapp",
    image: "/projects/notebookapp.png",
    category: "Web Development",
  },
  {
    title: "Full-Stack POS App with React, Node, and MongoDB",
    description:
      "A powerful Point of Sale (POS) application built with React, Node.js, and MongoDB. It features product management, sales tracking, and a seamless checkout system for efficient business operations.",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/MERN-Stack-and-NEXT-Js-and-PHP-Projects/tree/main/posapp",
    image: "/projects/posapp.png",
    category: "Web Development",
  },
  {
    title: "NewsApp: React & Bootstrap News Platform",
    description:
      "NewsApp is a sleek and responsive React-based news platform built with Bootstrap, offering users quick access to the latest headlines from around the world. Stay informed with real-time updates, easy navigation, and a user-friendly interface.",
    techStack: ["React", "Bootstrap"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/MERN-Stack-and-NEXT-Js-and-PHP-Projects/tree/main/newsapp",
    image: "/projects/newsapp.png",
    category: "Web Development",
  },
  {
    title: "WorldInfo API: React & CSS - Explore Global Country Data",
    description:
      "WorldInfo is a React-based website providing detailed country information, including currency, population, and more. Designed with a sleek interface using CSS for a smooth user experience.",
    techStack: ["React", "CSS"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/MERN-Stack-and-NEXT-Js-and-PHP-Projects/tree/main/countries_react",
    image: "/projects/worldinfo.png",
    category: "Web Development",
  },
  {
    title: "Library Explorer: Next.js & Tailwind Book Search Platform",
    description:
      "Built with Next.js, Tailwind CSS where I fetched and visualized book data using REST API.",
    techStack: ["Next.js", "Tailwind CSS", "REST API"],
    link: "https://book-search-app-seven-nu.vercel.app/",
    source: "https://github.com/Sultanur-Rahman-Shuvo/book-search-app",
    image: "/projects/library_explorer.png",
    category: "Web Development",
  },
  // Data Science & Analytics Projects
  {
    title: "Data Analysis with Excel",
    description:
      "I cleaned and analyzed multiple Excel projects to create a comprehensive dashboard that provides a detailed overview of the data. The dashboard includes interactive charts, graphs, and tables for easy data visualization and analysis.",
    techStack: ["Excel", "Data Cleaning", "Data Visualization"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/excelprojects",
    image: "/projects/excel_projects.png",
    category: "Data Science & Analytics",
  },
  {
    title: "Data Analysis with MySQL",
    description:
      "I used MySQL to analyze multiple projects and create a detailed report with insights and recommendations. The analysis included data cleaning, data manipulation, and data visualization to provide a comprehensive overview of the projects.",
    techStack: ["MySQL", "Data Cleaning", "Data Visualization"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/mysql-projects",
    image: "/projects/mysql_projects.png",
    category: "Data Science & Analytics",
  },
  {
    title: "Tableau Project Dashboard",
    description:
      "I created a series of Tableau dashboards for multiple projects to provide a detailed overview of the data. The dashboards include interactive visualizations, charts, and graphs for easy data analysis and insights.",
    techStack: ["Tableau", "Data Visualization", "Dashboard Design"],
    link: "https://public.tableau.com/app/profile/sultan.shuvo/vizzes",
    source: "https://public.tableau.com/app/profile/sultan.shuvo/vizzes",
    image: "/projects/tableau_projects.png",
    category: "Data Science & Analytics",
  },
  {
    title: "Power BI Project Dashboard",
    description:
      "I created a series of Power BI dashboards for multiple projects to provide a detailed overview of the data. The dashboards include interactive visualizations, charts, and graphs for easy data analysis and insights.",
    techStack: ["Power BI", "Data Visualization", "Dashboard Design"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/powerbiprojects",
    image: "/projects/powerbi_projects.png",
    category: "Data Science & Analytics",
  },
  {
    title: "Python Data Analysis Project",
    description:
      "I used Python to analyze multiple projects and create a detailed report with insights and recommendations. The analysis included data cleaning, data manipulation, and data visualization to provide a comprehensive overview of the projects.",
    techStack: ["Python","Data Cleaning", "Data Visualization"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/pythonprojects",
    image: "/projects/python_projects.png",
    category: "Data Science & Analytics",
  },
  {
    title: "RAG-Based AI Teaching Assistant",
    description:
      "Built a preprocessing pipeline that chunked transcripts and generated bge-m3 embeddings via Ollama, saving structured vectors to joblib for downstream RAG retrieval.",
    techStack: ["Python","Ollama", "BGE-M3"],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/data_science/tree/main/RAG%20Based%20AI%20Teaching%20Assistant",
    image: "/projects/rag_based_ai_assistant.png",
    category: "Data Science & Analytics",
  },
  // Digital Marketing Projects
  {
    title: "GA4 and Pixel Set Up with Server Side Tracking (CAPI)",
    description:
      "GA4 and Facebook Pixel Setup with Server-Side Tracking (CAPI) on My Business Website and enhanced tracking using Google Tag Manager and Meta Events Manager. ",
    techStack: [
      "Google Tag Manager",
      "Google Analytics",
      "Facebook Event Manager"
    ],
    link: "#",
    source: "https://github.com/Sultanur-Rahman-Shuvo/DigitalMarketing",
    image: "/projects/tag_manager.png",
    category: "Digital Marketing",
  }
];

const categoryConfig = {
  "Web Development": {
    icon: <SiCoder className="w-6 h-6" />,
    gradient: "from-[#0097e6] to-[#7ed6df]",
    bgGradient:
      "from-[#0097e6] to-[#7ed6df] dark:from-[#0097e6]/20 dark:to-[#7ed6df]/20",
  },
  "Data Science & Analytics": {
    icon: <SiPython className="w-6 h-6" />,
    gradient: "from-[#0097e6] to-[#7ed6df]",
    bgGradient:
      "from-[#0097e6] to-[#7ed6df] dark:from-[#0097e6]/20 dark:to-[#7ed6df]/20",
  },
  "Digital Marketing": {
    icon: <SiMeta className="w-6 h-6" />,
    gradient: "from-[#0097e6] to-[#7ed6df]",
    bgGradient:
      "from-[#0097e6] to-[#7ed6df] dark:from-[#0097e6]/20 dark:to-[#7ed6df]/20",
  },
};

const modalVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    // GSAP animations for projects section
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate project cards on scroll
    gsap.utils.toArray(".project-card").forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  if (!isMounted) {
    return (
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            My Projects
          </h2>
          <div className="flex justify-center">
            <div className="animate-pulse text-gray-600 dark:text-gray-400">
              Loading projects...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={titleRef}
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my work across different domains - from full-stack web
          applications to data science solutions and digital marketing
          campaigns.
        </motion.p>

        <div className="space-y-16">
          {Object.entries(projectsByCategory).map(
            ([category, categoryProjects], categoryIndex) => {
              const config =
                categoryConfig[category as keyof typeof categoryConfig];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div
                    className={`relative rounded-2xl p-8 ${config.bgGradient} border-2 border-white/30 dark:border-gray-700/30 shadow-xl overflow-hidden`}
                    style={{ boxShadow: "0 8px 32px rgba(0, 151, 230, 0.12)" }}
                  >
                    {/* Premium background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    <div className="flex items-center gap-5 relative z-10">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-2xl text-white shadow-2xl shadow-[#0097e6]/40 relative`}
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="relative z-10">{config.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {category}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                          {category === "Web Development" &&
                            "Full-stack applications and responsive web solutions"}
                          {category === "Data Science & Analytics" &&
                            "Machine learning models and data analysis projects"}
                          {category === "Digital Marketing" &&
                            "Strategic campaigns and growth initiatives"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProjects.map((project, projectIndex) => (
                      <Tilt
                        key={`${category}-${projectIndex}`}
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        glareEnable={true}
                        glareMaxOpacity={0.15}
                        glareColor="#ffffff"
                        glarePosition="all"
                        glareBorderRadius="16px"
                        transitionSpeed={800}
                        scale={1.02}
                        className="project-card transform-gpu h-full"
                      >
                        <motion.div
                          className="backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer border-2 border-gray-100/50 dark:border-gray-700/50 hover:border-[#0097e6]/30 dark:hover:border-[#7ed6df]/30 h-full flex flex-col"
                          style={{
                            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                          }}
                          whileHover={{ y: -8 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          onClick={() => setSelectedProject(project)}
                          role="button"
                          tabIndex={0}
                          onKeyPress={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              setSelectedProject(project);
                            }
                          }}
                        >
                          {/* Image Container */}
                          <div className="overflow-hidden flex-shrink-0 relative">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={400}
                              height={240}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20">
                              <span
                                className={`px-3 py-1.5 text-xs font-bold text-white rounded-full bg-gradient-to-r ${config.gradient} shadow-2xl shadow-[#0097e6]/50 backdrop-blur-sm border border-white/20`}
                              >
                                {project.category}
                              </span>
                            </div>
                            {/* Multi-layer overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0097e6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-[#0097e6] group-hover:to-[#7ed6df] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                              {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow font-medium">
                              {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.techStack.slice(0, 4).map((tech, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-3 py-1.5 backdrop-blur-sm bg-gradient-to-r from-gray-100/80 to-gray-50/80 dark:from-gray-700/80 dark:to-gray-800/80 text-gray-700 dark:text-gray-300 rounded-lg font-semibold border border-gray-200/50 dark:border-gray-600/50 hover:border-[#0097e6]/40 transition-all duration-300 hover:shadow-md"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.techStack.length > 4 && (
                                <span className="text-xs px-3 py-1.5 backdrop-blur-sm bg-gradient-to-r from-[#0097e6]/10 to-[#7ed6df]/10 text-[#0097e6] dark:text-[#7ed6df] rounded-lg font-bold border border-[#0097e6]/20">
                                  +{project.techStack.length - 4}
                                </span>
                              )}
                            </div>

                            {/* Action Button */}
                            <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100/50 dark:border-gray-700/50 mt-auto">
                              <span className="text-sm text-gray-600 dark:text-gray-400 font-bold group-hover:text-[#0097e6] dark:group-hover:text-[#7ed6df] transition-colors duration-300">
                                View Project
                              </span>
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-300 bg-gradient-to-br ${config.gradient} text-white shadow-xl shadow-[#0097e6]/30 relative overflow-hidden`}
                              >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <svg
                                  className="w-5 h-5 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Tilt>
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-2xl p-10 text-white overflow-hidden shadow-2xl shadow-[#0097e6]/40">
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 drop-shadow-lg">
                Want to See More?
              </h3>
              <p className="text-white/90 text-lg mb-8 font-medium max-w-2xl mx-auto">
                Check out my GitHub for more projects and code samples.
              </p>
              <a
                href="https://github.com/Sultanur-Rahman-Shuvo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-white/95 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/30 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <svg
                  className="w-5 h-5 relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="relative z-10">Visit My GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="backdrop-blur-sm bg-white/98 dark:bg-gray-800/98 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-gray-200/50 dark:border-gray-700/50"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 151, 230, 0.25)",
                }}
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="relative">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 w-12 h-12 backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 shadow-2xl hover:scale-110 hover:rotate-90 border-2 border-white/50 dark:border-gray-700/50 z-20"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${
                        categoryConfig[
                          selectedProject.category as keyof typeof categoryConfig
                        ]?.gradient
                      }`}
                    >
                      {selectedProject.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] hover:bg-gradient-to-r from-[#0097e6] to-[#7ed6df] text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      View Live Demo
                    </a>
                    <a
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 border-2 border-[#0097e6] text-[#0097e6] hover:bg-gradient-to-r from-[#0097e6] to-[#7ed6df] hover:text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
