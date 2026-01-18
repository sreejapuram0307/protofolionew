import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: 'B.Tech (Pursuing)',
      institution: 'Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering & Technology (VNRVJIET), Hyderabad',
      period: '2025-2028',
      description: 'Bachelor of Technology in Artificial Intelligence and Machine Learning',
    },
    {
      icon: Award,
      degree: 'Diploma in Electronics Engineering',
      institution: 'Government Institute of Electronics, Secunderabad',
      period: '2022-2025',
      grade: 'Score: 98%',
      description: 'Diploma in Electronics Engineering',
    },
    {
      icon: BookOpen,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Telangana State Board',
      period: '2021',
      grade: 'Score: 90%',
      description: 'Secondary School Certificate (Class 10th)',
    },
  ]

  return (
    <section
      id="education"
      className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transform md:-translate-x-1/2"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:flex-row`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-24 md:ml-0 md:w-5/12 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                            {item.degree}
                          </h3>
                          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                          {item.institution}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                          <span className="font-semibold">{item.grade}</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
