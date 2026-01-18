import React from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Lightbulb } from 'lucide-react'

const CareerObjective = () => {
  const objectives = [
    {
      icon: Target,
      title: 'Career Objective',
      description:
        'Detail-oriented and motivated aspiring Data Scientist with hands-on experience in Machine Learning, Artificial Intelligence, and Data Visualization. Proficient in Python and C for building data-driven solutions, with strong knowledge in data structures, time series forecasting, and deep learning models such as LSTM. Passionate about solving real-world problems through data analysis, model optimization, and innovative technology solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Career Aspiration',
      description:
        'Seek challenging opportunities in data science and AI where I can apply advanced machine learning techniques, deep learning models, and data visualization skills to solve complex real-world problems.',
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description:
        'Contribute to cutting-edge AI research and development, continuously learn emerging technologies, and collaborate with talented teams to build intelligent systems that enhance human capabilities.',
    },
  ]

  return (
    <section
      id="career"
      className="py-20 md:py-28 bg-white dark:bg-gray-900"
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
            Career Objective
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {objectives.map((item, index) => {
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
                        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
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

export default CareerObjective
