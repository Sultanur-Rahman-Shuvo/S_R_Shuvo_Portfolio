"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FiCode, 
  FiDatabase,
  FiTrendingUp,
} from "react-icons/fi";

// Register ScrollTrigger
if (typeof window !== 'undefined') {
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
    title: "StyleSilo - E-Commerce Platform",
    description: "A fully-featured e-commerce web app with product listings, filters, cart, checkout, and dynamic offer updates using Next.js, Redux Toolkit, and MongoDB.",
    techStack: ["Next.js", "Redux Toolkit", "MongoDB", "Tailwind CSS", "WordPress", "WooCommerce"],
    link: "https://stylesilo.shop",
    source: "https://github.com/yourusername/stylesilo",
    image: "/projects/stylesilo.png",
    category: "Web Development"
  },
  {
    title: "Modern Portfolio Website",
    description: "A contemporary personal portfolio showcasing projects and skills with smooth animations and responsive design built using Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "#",
    source: "https://github.com/yourusername/portfolio",
    image: "/projects/portfolio.png",
    category: "Web Development"
  },
  {
    title: "TaskFlow - Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    link: "#",
    source: "https://github.com/yourusername/taskapp",
    image: "/projects/taskapp.png",
    category: "Web Development"
  },
  // Data Science Projects
  {
    title: "Sales Prediction Dashboard",
    description: "Machine learning model to predict sales trends with interactive PowerBI dashboard for business intelligence and decision making.",
    techStack: ["Python", "Scikit-learn", "PowerBI", "Pandas", "NumPy"],
    link: "#",
    source: "https://github.com/yourusername/sales-prediction",
    image: "/projects/sales-dashboard.png",
    category: "Data Science"
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Unsupervised machine learning project for customer segmentation using clustering algorithms to identify customer groups.",
    techStack: ["Python", "K-means", "Matplotlib", "Seaborn", "PCA"],
    link: "#",
    source: "https://github.com/yourusername/customer-segmentation",
    image: "/projects/segmentation.png",
    category: "Data Science"
  },
  {
    title: "LLM Chat Application",
    description: "Retrieval Augmented Generation based chat application using large language models for intelligent question answering.",
    techStack: ["Python", "Transformers", "LangChain", "FAISS", "Streamlit"],
    link: "#",
    source: "https://github.com/yourusername/llm-chat",
    image: "/projects/llm-chat.png",
    category: "Data Science"
  },
  // Digital Marketing Projects
  {
    title: "E-commerce Marketing Campaign",
    description: "Comprehensive digital marketing campaign with Facebook Ads, Google Analytics, and email marketing strategies for e-commerce growth.",
    techStack: ["Facebook Ads", "Google Analytics", "Email Marketing", "Copywriting"],
    link: "#",
    source: "#",
    image: "/projects/marketing-campaign.png",
    category: "Digital Marketing"
  },
  {
    title: "Brand Awareness Strategy",
    description: "Strategic brand awareness campaign with social media management, content creation, and audience engagement initiatives.",
    techStack: ["Social Media", "Content Strategy", "Audience Analysis", "Brand Positioning"],
    link: "#",
    source: "#",
    image: "/projects/brand-strategy.png",
    category: "Digital Marketing"
  },
  {
    title: "Conversion Optimization Funnel",
    description: "Data-driven conversion rate optimization project with A/B testing, user journey analysis, and funnel optimization strategies.",
    techStack: ["A/B Testing", "GA4", "User Research", "Funnel Analysis"],
    link: "#",
    source: "#",
    image: "/projects/conversion-funnel.png",
    category: "Digital Marketing"
  },
];

const categoryConfig = {
  "Web Development": {
    icon: <FiCode className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
  },
  "Data Science": {
    icon: <FiDatabase className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
  },
  "Digital Marketing": {
    icon: <FiTrendingUp className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
  }
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
      gsap.fromTo(titleRef.current,
        { 
          opacity: 0, 
          y: 40 
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
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate project cards on scroll
    gsap.utils.toArray('.project-card').forEach((card: any, i) => {
      gsap.fromTo(card,
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
            toggleActions: "play none none reverse"
          }
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
            <div className="animate-pulse text-gray-600 dark:text-gray-400">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4"
    >
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
          Explore my work across different domains - from full-stack web applications to data science solutions and digital marketing campaigns.
        </motion.p>

        <div className="space-y-16">
          {Object.entries(projectsByCategory).map(([category, categoryProjects], categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            
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
                <div className={`rounded-2xl p-8 ${config.bgGradient} border border-gray-200 dark:border-gray-700`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${config.gradient} flex items-center justify-center text-2xl text-white`}>
                      {config.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {category}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {category === "Web Development" && "Full-stack applications and responsive web solutions"}
                        {category === "Data Science" && "Machine learning models and data analysis projects"}
                        {category === "Digital Marketing" && "Strategic campaigns and growth initiatives"}
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
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200 dark:border-gray-700 h-full flex flex-col"
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${config.gradient} shadow-lg`}>
                              {project.category}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 4 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                                +{project.techStack.length - 4}
                              </span>
                            )}
                          </div>

                          {/* Action Button */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                              View Project
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-200 bg-gradient-to-r ${config.gradient} text-white shadow-lg`}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
            <p className="text-blue-100 text-lg mb-6">
              Check out my GitHub for more projects and code samples.
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Visit My GitHub
            </a>
          </div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
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
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors duration-200 shadow-lg hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${
                      categoryConfig[selectedProject.category as keyof typeof categoryConfig]?.gradient
                    }`}>
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
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technologies Used</h4>
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
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      View Live Demo
                    </a>
                    <a
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg text-center transition-all duration-300 hover:scale-105"
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