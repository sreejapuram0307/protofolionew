import React from 'react'
import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { TrendingUp, Github, ExternalLink, Heart, Car, Shield, Calendar } from 'lucide-react'

const Projects = () => {
  // Sample stock price prediction data
  const stockData = [
    { date: 'Day 1', actual: 150, predicted: 152 },
    { date: 'Day 2', actual: 152, predicted: 154 },
    { date: 'Day 3', actual: 148, predicted: 150 },
    { date: 'Day 4', actual: 155, predicted: 153 },
    { date: 'Day 5', actual: 158, predicted: 156 },
    { date: 'Day 6', actual: 160, predicted: 159 },
    { date: 'Day 7', actual: 162, predicted: 161 },
    { date: 'Day 8', actual: 159, predicted: 160 },
    { date: 'Day 9', actual: 161, predicted: 162 },
    { date: 'Day 10', actual: 164, predicted: 163 },
  ]

  const projects = [
    {
      title: 'AI Week Event Website – Krithomedha AIML Department',
      description:
        'As a member of the Technical Team at Krithomedha (AIML Department), I contributed to organizing AI Week, a week-long technical event focused on Artificial Intelligence and emerging technologies. Our team designed and developed a dedicated event website where students could explore event details, schedules, and register for activities conducted during the event.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Responsive Design',
      ],
      features: [
        'Displays event schedule and technical session details',
        'Allows participants to register for events',
        'Provides centralized information about the AI Week activities',
        'Clean and responsive user interface for students',
      ],
      icon: Calendar,
      hasChart: false,
      liveUrl: 'https://ai-week.netlify.app/',
    },
    {
      title: 'ScholarSync – AI Powered Scholarship Recommendation Platform',
      description:
        'A platform designed to recommend scholarships to students based on their academic profile, interests, and eligibility. It includes a career roadmap system that guides students through future academic and professional paths, along with a community feature that allows students to collaborate and share opportunities.',
      technologies: [
        'React.js',
        'JavaScript',
        'Recommendation Logic',
        'UI/UX Design',
      ],
      features: [
        'AI-powered scholarship recommendations based on academic profile and interests',
        'Career roadmap system for academic and professional guidance',
        'Community feature for student collaboration and opportunity sharing',
        'Personalized eligibility matching system',
      ],
      icon: TrendingUp,
      hasChart: false,
    },
    {
      title: 'SheRise – Women Entrepreneur Platform',
      description:
        'A professional platform connecting women entrepreneurs with investors and mentors to support startup ideas, funding, and mentorship. It includes role-based dashboards, idea submission, investment interaction, community discussions, and private chat functionality between entrepreneurs and investors.',
      technologies: [
        'React 18',
        'Vite',
        'Tailwind CSS',
        'React Router',
        'LocalStorage',
      ],
      features: [
        'Role-based dashboards for entrepreneurs, investors, and mentors',
        'Idea submission and investment interaction system',
        'Community discussions and networking features',
        'Private chat functionality between entrepreneurs and investors',
        'Mentorship collaboration tools',
      ],
      icon: Heart,
      hasChart: false,
    },
    {
      title: 'Stock Price Prediction Using LSTM',
      description:
        'A deep learning project that predicts stock prices using Long Short-Term Memory (LSTM) neural networks. The model analyzes historical stock data to forecast future prices with high accuracy.',
      technologies: [
        'Python',
        'TensorFlow',
        'Keras',
        'LSTM',
        'Pandas',
        'NumPy',
        'Matplotlib',
      ],
      features: [
        'Time series data preprocessing and normalization',
        'LSTM neural network architecture implementation',
        'Real-time stock price prediction',
        'Performance metrics visualization (MAE, RMSE, R²)',
        'Interactive charts for actual vs predicted prices',
      ],
      icon: TrendingUp,
      hasChart: true,
    },
    {
      title: 'Smart Healthcare',
      description:
        'An ESP32-based healthcare system using biomedical sensors for real-time health monitoring and AI-based health prediction for elderly patients with role-based dashboards.',
      technologies: [
        'ESP32',
        'Arduino',
        'Python',
        'Machine Learning',
        'Biomedical Sensors',
        'IoT',
        'AI',
      ],
      features: [
        'ESP32-based system using biomedical sensors',
        'Real-time health monitoring and alerts for elderly patients',
        'AI-based health prediction with role-based dashboards',
      ],
      icon: Heart,
      hasChart: false,
    },
    {
      title: 'Traffic Light Simulator (Python)',
      description:
        'A Python-based traffic light simulation system with flexible signal timing control implementing Red-Yellow-Green logic.',
      technologies: [
        'Python',
        'Tkinter',
        'Logic Programming',
      ],
      features: [
        'Red-Yellow-Green logic implementation',
        'Flexible signal timing control',
      ],
      icon: Car,
      hasChart: false,
    },
    {
      title: 'CIVSURE – Anonymous Crime Reporting Platform',
      description:
        'A comprehensive platform for anonymous crime reporting with image uploads, alerts to nearby police stations and hospitals, lawyer booking system, and AI legal chatbot.',
      technologies: [
        'Python',
        'Django',
        'React',
        'AI Chatbot',
        'Database',
        'Image Processing',
      ],
      features: [
        'Anonymous crime reporting with image uploads',
        'Alerts to nearby police stations and hospitals',
        'Lawyer booking system and AI legal chatbot',
      ],
      icon: Shield,
      hasChart: false,
    },
  ]

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, projectIndex) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={projectIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                  className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-2xl overflow-hidden ${
                    project.hasChart ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="p-8 md:p-12">
                    {/* Project Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                          <Icon size={28} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.liveUrl || "https://github.com/sreejapuram0307"}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                        >
                          {project.liveUrl ? <ExternalLink size={20} /> : <Github size={20} />}
                        </motion.a>
                        {!project.liveUrl && (
                          <motion.a
                            href="#"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-md"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Chart - Only for first project */}
                    {project.hasChart && (
                      <div className="mt-10">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
                          Actual vs Predicted Stock Prices
                        </h4>
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                          <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={stockData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                              <XAxis
                                dataKey="date"
                                stroke="#6b7280"
                                style={{ fontSize: '12px' }}
                              />
                              <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                  border: '1px solid #e5e7eb',
                                  borderRadius: '8px',
                                }}
                              />
                              <Legend />
                              <Line
                                type="monotone"
                                dataKey="actual"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                dot={{ r: 5 }}
                                name="Actual Price"
                              />
                              <Line
                                type="monotone"
                                dataKey="predicted"
                                stroke="#8b5cf6"
                                strokeWidth={3}
                                dot={{ r: 5 }}
                                name="Predicted Price"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    )}
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

export default Projects
