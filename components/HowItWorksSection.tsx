"use client"

import { motion } from './motion'
import { Cloud, Monitor, Rocket } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Cloud size={32} />,
      title: "Sign Up & Configure",
      description: "Create your account and easily set up your airport's basic details and display preferences via our intuitive web interface."
    },
    {
      icon: <Monitor size={32} />,
      title: "Connect Your Displays",
      description: "Link any standard internet-connected screen (TV, monitor) to our cloud platform using a small, affordable player device or directly via a web browser."
    },
    {
      icon: <Rocket size={32} />,
      title: "Manage & Display Content",
      description: "Input and update flight information, gate assignments, and important messages through the user-friendly SkyLine dashboard. All changes are reflected instantly on your FIDS screens."
    }
  ]
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Airport FIDS Up and Running, Simply
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Implementing the SkyLine FIDS solution is quick and straightforward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md relative"
            >
              <div className="absolute -top-5 -right-5 w-10 h-10 skyline-gradient rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-full"></div>
              )}
              
              <div className="w-16 h-16 skyline-gradient rounded-2xl flex items-center justify-center mb-6 text-white">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              
              {/* Visual connection between steps on mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden mx-auto my-4 w-0.5 h-8 bg-gray-200 dark:bg-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Implementation Timeline */}
        <div className="mt-20 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="skyline-gradient p-4 text-white">
            <h3 className="text-xl font-bold">Typical Implementation Timeline</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 text-right font-bold">Day 1</div>
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="flex-1">
                  <h4 className="font-medium">Initial Setup</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Account creation, basic configuration, and training</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-right font-bold">Day 2-3</div>
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="flex-1">
                  <h4 className="font-medium">Display Configuration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Setting up display devices, customizing layouts</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 text-right font-bold">Day 4-5</div>
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="flex-1">
                  <h4 className="font-medium">Testing & Refinement</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Final checks, staff training, and going live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}