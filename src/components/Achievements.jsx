import React from 'react'
import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Won 3rd Prize – CMR HackFest 3.0 (National Level)',
      description:
        'Built a Smart Healthcare platform using ESP32, biomedical sensors, and AI-based health prediction for elderly care.',
      year: '2024',
    },
  ]

  return (
    <section
      id="achievements"
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
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex-shrink-0">
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
