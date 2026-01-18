import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Linkedin, Github, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/sreeja-puram', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/sreejapuram', label: 'GitHub' },
    { icon: Mail, href: 'mailto:sreejapuram@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">P. Sreeja</h3>
            <p className="text-gray-400">Data Scientist | AI & ML Enthusiast</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {new Date().getFullYear()} P. Sreeja. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </footer>
  )
}

export default Footer
