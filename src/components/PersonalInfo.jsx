import React from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Calendar,
  Users,
  Smile,
  MapPin,
  Phone,
  Globe,
  Languages,
} from 'lucide-react'

const PersonalInfo = () => {
  const personalDetails = [
    { icon: User, label: 'Full Name', value: 'P. Sreeja' },
    { icon: Calendar, label: 'Date of Birth', value: '03/07/2006' },
    { icon: Users, label: "Father's Name", value: 'P.Bhasker' },
    { icon: Smile, label: 'Gender', value: 'Female' },
    {
      icon: Smile,
      label: 'Hobbies',
      value: 'Reading, Coding, Data Visualization, Machine Learning Research',
    },
    { icon: MapPin, label: 'Address', value: 'old gunj,vepuri geri,mahabubnagar,Telangana,India' },
    { icon: Phone, label: 'Phone', value: '+919550363968', isLink: true },
    { icon: Globe, label: 'Nationality', value: 'Indian' },
    { icon: Languages, label: 'Languages', value: 'English, Telugu, Hindi' },
  ]

  return (
    <section
      id="personal"
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
            Personal Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {personalDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-4"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                      {detail.label}
                    </h3>
                    {detail.isLink ? (
                      <a
                        href={`tel:${detail.value}`}
                        className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo
