"use client"

import { Check, X } from 'lucide-react'

export default function BeforeAfterSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Airport Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how SkyLine FIDS is changing the way small airports manage and display flight information
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Before Column */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 px-4 py-1 text-white text-sm font-medium">BEFORE</div>
            <h3 className="text-2xl font-bold mb-6 mt-6 text-gray-900 dark:text-gray-100">Traditional FIDS Systems</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-3">
                  <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Manually updated displays requiring staff intervention</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-3">
                  <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Expensive proprietary hardware and software</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-3">
                  <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Limited customization options and outdated designs</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-3">
                  <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Complex implementation requiring IT specialists</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-3">
                  <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Difficult to adapt to changing requirements</p>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">Typical outdated FIDS display</p>
                <div className="mt-3 font-mono bg-black text-white p-3 rounded text-xs">
                  <div className="grid grid-cols-5 gap-2 text-green-400 border-b border-green-500/30 pb-1 mb-2">
                    <div>FLIGHT</div>
                    <div>DEST</div>
                    <div>TIME</div>
                    <div>GATE</div>
                    <div>STATUS</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    <div>AA1234</div>
                    <div>NYC</div>
                    <div>09:45</div>
                    <div>A1</div>
                    <div>ON TIME</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 mt-1">
                    <div>DL5678</div>
                    <div>LAX</div>
                    <div>10:15</div>
                    <div>B3</div>
                    <div>DELAYED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* After Column */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 skyline-main-gradient px-4 py-1 text-white text-sm font-medium">AFTER</div>
            <h3 className="text-2xl font-bold mb-6 mt-6 text-gray-900 dark:text-gray-100">SkyLine FIDS Solution</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Automated updates from flight data sources with minimal supervision</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Works with standard hardware you already have</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Fully customizable themes and layouts that match your airport branding</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Simple setup that can be completed in days, not months</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-3">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300">Scalable system that grows with your airport's needs</p>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center shadow-md">
                <p className="text-sm text-gray-500 dark:text-gray-400">Modern SkyLine FIDS display</p>
                <div className="mt-3 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-blue-500 text-white p-2 text-sm font-medium flex items-center justify-between">
                    <span>SkyLine FIDS</span>
                    <span>10:30 AM</span>
                  </div>
                  <div className="p-3">
                    <div className="grid grid-cols-5 gap-2 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 pb-2 mb-2 text-sm">
                      <div>Flight</div>
                      <div>Destination</div>
                      <div>Time</div>
                      <div>Gate</div>
                      <div>Status</div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 text-sm border-b border-gray-100 dark:border-gray-700 pb-2">
                      <div className="font-medium">SL101</div>
                      <div>New York</div>
                      <div>10:45</div>
                      <div>A1</div>
                      <div><span className="inline-block px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs">Boarding</span></div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 text-sm mt-2">
                      <div className="font-medium">SL205</div>
                      <div>Chicago</div>
                      <div>11:15</div>
                      <div>B3</div>
                      <div><span className="inline-block px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs">On Time</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 