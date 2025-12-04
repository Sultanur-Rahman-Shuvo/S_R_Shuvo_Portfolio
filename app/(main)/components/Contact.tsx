'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement
  email: HTMLInputElement
  subject: HTMLInputElement
  message: HTMLTextAreaElement
}

interface ContactForm extends HTMLFormElement {
  readonly elements: FormElements
}

export default function Contact() {
  const formRef = useRef<ContactForm>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      if (!formRef.current) return
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formRef.current.elements.name.value,
          email: formRef.current.elements.email.value,
          subject: formRef.current.elements.subject.value,
          message: formRef.current.elements.message.value,
        }),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setStatus('success')
      formRef.current.reset()
    } catch (error) {
      setStatus('error')
    }
  }

  const formFields = [
    { 
      id: 'name', 
      label: 'Your Name', 
      type: 'text', 
      icon: <FiUser className="w-4 h-4" />,
      placeholder: 'Enter your full name'
    },
    { 
      id: 'email', 
      label: 'Email Address', 
      type: 'email', 
      icon: <FiMail className="w-4 h-4" />,
      placeholder: 'your.email@example.com'
    },
    { 
      id: 'subject', 
      label: 'Subject', 
      type: 'text', 
      icon: <FiMessageSquare className="w-4 h-4" />,
      placeholder: 'What is this regarding?'
    },
    { 
      id: 'message', 
      label: 'Your Message', 
      type: 'textarea', 
      icon: <FiSend className="w-4 h-4" />,
      placeholder: 'Tell me about your project or just say hello...'
    }
  ]

  return (
    <section id="contact" className="scroll-mt-20 py-12">
      <motion.h2 
        className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        {/* Left side info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm always excited to hear about new projects and opportunities. Whether you need a website, 
              have a question, or just want to connect, feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            <motion.div 
              className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email Me</h4>
                <a 
                  href="mailto:sultanurrahmanshuvo@gmail.com" 
                  className="text-gray-600 dark:text-gray-300 hover:text-[#00a8ff] dark:hover:text-[#0097e6] transition-colors text-lg"
                >
                  sultanurrahmanshuvo@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  West Pirerbag, Kamal Sarani, Mirpur, Dhaka-1216
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {formFields.map((field, i) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="group"
            >
              <label htmlFor={field.id} className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                {field.label}
              </label>
              
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#00a8ff] transition-colors duration-200">
                  {field.icon}
                </div>
                
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    rows={5}
                    required
                    placeholder={field.placeholder}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 resize-none shadow-sm hover:shadow-md focus:shadow-lg"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    placeholder={field.placeholder}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00a8ff] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
                  />
                )}
              </div>
            </motion.div>
          ))}
          
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0097e6] to-[#7ed6df] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {status === 'loading' ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Message...
              </>
            ) : status === 'success' ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Message Sent!
              </>
            ) : status === 'error' ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Error - Try Again
              </>
            ) : (
              <>
                <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </>
            )}
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4"
          >
            I typically respond within 24 hours
          </motion.p>
        </motion.form>
      </motion.div>
    </section>
  )
}