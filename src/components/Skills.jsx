import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code,
  Brain,
  Database,
  BarChart3,
  FlaskConical,
  Layers,
} from 'lucide-react'

const Skills = () => {
  const skills = [
    { name: 'Python', percentage: 90, icon: Code, color: 'from-yellow-500 to-yellow-600' },
    { name: 'C', percentage: 80, icon: Code, color: 'from-blue-500 to-blue-600' },
    { name: 'TensorFlow', percentage: 85, icon: Brain, color: 'from-orange-500 to-orange-600' },
    { name: 'PyTorch', percentage: 80, icon: Brain, color: 'from-red-500 to-red-600' },
    { name: 'Pandas', percentage: 88, icon: Database, color: 'from-blue-600 to-blue-700' },
    { name: 'NumPy', percentage: 85, icon: Database, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Matplotlib', percentage: 82, icon: BarChart3, color: 'from-blue-400 to-blue-500' },
    { name: 'Seaborn', percentage: 80, icon: BarChart3, color: 'from-pink-500 to-pink-600' },
    { name: 'Scikit-Learn', percentage: 87, icon: FlaskConical, color: 'from-orange-400 to-orange-500' },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [animatedSkills, setAnimatedSkills] = useState({})

  useEffect(() => {
    if (isInView) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => ({
            ...prev,
            [skill.name]: true,
          }))
        }, index * 100)
      })
    }
  }, [isInView])

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto space-y-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            const isAnimated = animatedSkills[skill.name] || false

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} text-white`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: isAnimated ? `${skill.percentage}%` : 0 }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
