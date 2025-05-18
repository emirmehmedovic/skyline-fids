"use client"

import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      airport: "Mountain View Regional",
      challenge: "Manually updating flight information displays was consuming 20+ hours per week of staff time and leading to errors.",
      solution: "Implemented SkyLine FIDS with automated data integration from their existing systems.",
      results: "Reduced staff time to just 2 hours per week for oversight, eliminated display errors, and improved passenger satisfaction by 35%.",
      stats: [
        { label: "Staff Time Saved", value: "90%" },
        { label: "Implementation Time", value: "8 days" },
        { label: "ROI Timeline", value: "3 months" },
      ]
    },
    {
      airport: "Lakeside Municipal Airport",
      challenge: "Outdated FIDS system with frequent crashes and poor readability was causing passenger confusion and complaints.",
      solution: "Upgraded to SkyLine with modern displays on existing hardware and customized styling to match airport branding.",
      results: "Eliminated system crashes, improved information clarity, and reduced passenger inquiries at information desk by 45%.",
      stats: [
        { label: "System Uptime", value: "99.9%" },
        { label: "Passenger Complaints", value: "-68%" },
        { label: "Hardware Costs", value: "$0" },
      ]
    },
    {
      airport: "Eastport County Airport",
      challenge: "Limited budget for FIDS technology meant no ability to provide real-time flight information to passengers.",
      solution: "Implemented affordable SkyLine solution with phased installation approach, starting with departure areas.",
      results: "Full airport coverage within budget constraints, improved passenger experience and positive feedback from airlines.",
      stats: [
        { label: "Budget Adherence", value: "100%" },
        { label: "Passenger Satisfaction", value: "+52%" },
        { label: "Airline Feedback", value: "⭐⭐⭐⭐⭐" },
      ]
    }
  ]
  
  return (
    <section id="case-studies" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how small airports across the country have transformed their operations with SkyLine FIDS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="skyline-main-gradient text-white p-4">
                <h3 className="font-bold text-xl">{study.airport}</h3>
              </div>
              
              <div className="p-6 flex-grow">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Our Solution</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">The Results</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{study.results}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/80 p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-2">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="font-bold text-lg skyline-main-text-gradient">{stat.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="skyline-main-gradient text-white hover:opacity-90 transition-opacity">
            Request Your Success Story
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
} 