"use client"

import { useState } from 'react'
import { motion } from './motion'
import { DollarSign, Settings, Clock, Wrench, CheckCircle2, BadgeCheck } from 'lucide-react'

export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState('problems')
  
  const problems = [
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Too Expensive",
      description: "High upfront investment and costly ongoing maintenance for small airport budgets."
    },
    {
      icon: <Settings className="h-8 w-8 text-red-500" />,
      title: "Overly Complex",
      description: "Requiring specialized IT staff and extensive training, resources many small airports lack."
    },
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "Outdated",
      description: "Featuring limited functionality, clunky interfaces, and poor passenger experience."
    },
    {
      icon: <Wrench className="h-8 w-8 text-red-500" />,
      title: "Inflexible",
      description: "Difficult to customize and adapt to the specific operational needs of smaller airports."
    }
  ]
  
  const solutions = [
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Affordable FIDS",
      description: "Optimized for small airport budgets, offering transparent pricing with no hidden fees."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Simple & Intuitive",
      description: "Easy-to-use web interface for effortless management, no IT experts needed."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Modern & Clean",
      description: "Clear, concise flight displays and all essential features readily accessible."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Flexible & Scalable",
      description: "Easily customizable to your airport's branding, specific display needs, and future growth."
    }
  ]
  
  return (
    <section id="why-skyline" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Is Your Current FIDS Holding Your Small Airport Back?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Smaller airports often face unique challenges with flight information displays. 
            SkyLine is built to address them directly.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'problems' 
                  ? 'bg-white dark:bg-gray-700 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
              onClick={() => setActiveTab('problems')}
            >
              The Challenges
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'solutions' 
                  ? 'bg-white dark:bg-gray-700 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
              onClick={() => setActiveTab('solutions')}
            >
              SkyLine Solutions
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div 
            className={`relative ${activeTab === 'problems' ? 'order-first' : 'order-last md:order-first'}`}
          >
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">
                  {activeTab === 'problems' ? 'Traditional FIDS Systems Are Often...' : 'The SkyLine Solution'}
                </h3>
                <div className="space-y-8">
                  {(activeTab === 'problems' ? problems : solutions).map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className={`relative ${activeTab === 'problems' ? 'order-last' : 'order-first md:order-last'}`}
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 skyline-gradient"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">
                  {activeTab === 'problems' ? 'The SkyLine Solution' : 'Traditional FIDS Systems Are Often...'}
                </h3>
                <div className="space-y-8">
                  {(activeTab === 'problems' ? solutions : problems).map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}