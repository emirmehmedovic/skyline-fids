"use client"

import { useState, useEffect } from 'react'
import { motion } from './motion'
import { DollarSign, Settings, Clock, Wrench, CheckCircle2, BadgeCheck, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState('problems')
  const [animateCards, setAnimateCards] = useState(false)
  
  useEffect(() => {
    // Trigger animation when tab changes
    setAnimateCards(false)
    const timer = setTimeout(() => setAnimateCards(true), 100)
    return () => clearTimeout(timer)
  }, [activeTab])
  
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
      icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
      title: "Affordable FIDS",
      description: "Optimized for small airport budgets, offering transparent pricing with no hidden fees."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-green-500" />,
      title: "Simple & Intuitive",
      description: "Easy-to-use web interface for effortless management, no IT experts needed."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-green-500" />,
      title: "Modern & Clean",
      description: "Clear, concise flight displays and all essential features readily accessible."
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-green-500" />,
      title: "Flexible & Scalable",
      description: "Easily customizable to your airport's branding, specific display needs, and future growth."
    }
  ]
  
  return (
    <section id="why-skyline" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 text-sm font-medium mb-4">
            THE PROBLEM & SOLUTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Is Your Current FIDS Holding Your Small Airport Back?
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-green-400 to-red-400 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
            Smaller airports often face unique challenges with flight information displays. 
            SkyLine is built to address them directly.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 glass-effect rounded-full shadow-lg">
            <button
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden",
                activeTab === 'problems' 
                  ? 'text-white bg-gradient-to-r from-red-600 to-red-500' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              )}
              onClick={() => setActiveTab('problems')}
            >
              The Challenges
            </button>
            <button
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden",
                activeTab === 'solutions' 
                  ? 'text-white bg-gradient-to-r from-green-600 to-green-500' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              )}
              onClick={() => setActiveTab('solutions')}
            >
              SkyLine Solutions
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <motion.div 
            className={`relative ${activeTab === 'problems' ? 'order-first' : 'order-last lg:order-first'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-100 dark:bg-red-900/20 rounded-full blur-3xl opacity-20"></div>
            <div className="relative glass-card border border-white/10 dark:border-white/5 shadow-xl overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  {activeTab === 'problems' ? (
                    <>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 mr-2">!</span>
                      Traditional FIDS Systems Are Often...
                    </>
                  ) : (
                    <>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 text-green-500 mr-2">✓</span>
                      The SkyLine Solution
                    </>
                  )}
                </h3>
                <div className="space-y-6">
                  {(activeTab === 'problems' ? problems : solutions).map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={animateCards ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 hover:bg-white/30 dark:hover:bg-white/5 rounded-lg transition-colors"
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
          </motion.div>
          
          <motion.div 
            className={`relative ${activeTab === 'problems' ? 'order-last' : 'order-first lg:order-last'}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-20"></div>
            <div className="relative glass-card border border-white/10 dark:border-white/5 shadow-xl overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  {activeTab === 'problems' ? (
                    <>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 text-green-500 mr-2">✓</span>
                      The SkyLine Solution
                    </>
                  ) : (
                    <>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 text-red-500 mr-2">!</span>
                      Traditional FIDS Systems Are Often...
                    </>
                  )}
                </h3>
                <div className="space-y-6">
                  {(activeTab === 'problems' ? solutions : problems).map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={animateCards ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 hover:bg-white/30 dark:hover:bg-white/5 rounded-lg transition-colors"
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
          </motion.div>
        </div>
        
        {/* Action button */}
        <div className="flex justify-center mt-12">
          <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full shadow-lg hover:shadow-green-500/20 transition-all duration-300 group">
            <span>See How SkyLine Can Help</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}