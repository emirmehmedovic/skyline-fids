"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Plane, ArrowRight, ChevronDown, Quote, Play, CheckCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/image'

export default function HeroSection() {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [boardingAnimation, setBoardingAnimation] = useState(false)

  // Animacija za "Boarding" status
  useEffect(() => {
    const interval = setInterval(() => {
      setBoardingAnimation(prev => !prev)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  const handleDemoRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address to request a demo.",
        variant: "destructive",
      })
      return
    }
    
    toast({
      title: "Demo requested!",
      description: "Thank you for your interest. We'll contact you shortly.",
    })
    setEmail('')
  }

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Ambient background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 opacity-90 z-10"></div>
        <div className="w-full h-full bg-[url('/airport-terminal-bg.jpg')] bg-cover bg-center opacity-15 dark:opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute -top-10 right-0 w-64 h-64 skyline-main-gradient rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 left-10 w-72 h-72 skyline-main-gradient rounded-full blur-3xl opacity-30"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-sm font-medium mb-4">
              <span className="animate-pulse mr-1.5">●</span> 
              Modern FIDS for Small Airports
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              SkyLine: Crystal Clear <br/>
              <span className="skyline-main-text-gradient">FIDS</span> for Your <br/> Small Airport
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
              A modern, affordable, and intuitive Flight Information Display System designed to enhance passenger experience and optimize operations at smaller airports.
            </p>
            
            {/* Statistics Row */}
            <div className="flex items-center justify-around mb-6 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-center">
                <div className="font-bold text-2xl skyline-main-text-gradient">40%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Fewer Inquiries</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl skyline-main-text-gradient">15h</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Weekly Savings</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl skyline-main-text-gradient">7 days</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Implementation</div>
              </div>
            </div>
            
            <form onSubmit={handleDemoRequest} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 flex-grow shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit"
                className="skyline-main-gradient text-white flex items-center gap-2 hover:opacity-90 transition-all px-6 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
              >
                Request a Free Demo
                <ArrowRight size={16} className="animate-pulse" />
              </Button>
            </form>
            
            <div className="flex items-center mb-8">
              <a 
                href="#why-skyline" 
                className="text-gray-500 dark:text-gray-400 flex items-center hover:text-primary transition-colors hover:underline"
              >
                Learn More 
                <ChevronDown size={16} className="ml-1 animate-bounce" />
              </a>
            </div>

            {/* Testimonials Section - Now a Carousel */}
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center">
                <CheckCircle size={16} className="mr-2 text-green-500" />
                Trusted by Airport Directors:
              </h3>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Quote size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      "SkyLine saved us 15 hours weekly on information updates and reduced passenger inquiries by 40%. Best investment we've made for our terminal."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative mr-3">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-medium">JD</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Director, Mountain View Regional</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 p-1 transform transition-transform hover:scale-[1.02] hover:rotate-1 duration-300 group">
              {/* Video Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/0 group-hover:bg-black/20 transition-colors cursor-pointer" onClick={() => setShowVideoModal(true)}>
                <div className="w-16 h-16 skyline-main-gradient rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  <Play size={24} className="text-white ml-1" />
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-20 h-20 skyline-main-gradient rounded-full blur-xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 skyline-main-gradient rounded-full blur-xl opacity-40"></div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 skyline-main-gradient rounded-full flex items-center justify-center mr-2">
                      <Plane size={16} className="text-white rotate-45" />
                    </div>
                    <h3 className="font-bold">SkyLine FIDS</h3>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">9:45 AM</div>
                </div>
                
                <div className="space-y-4">
                  {/* Flight Information Display */}
                  <div className="bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
                    <div className="grid grid-cols-6 gap-4 text-sm font-medium mb-3">
                      <div className="col-span-1">Flight</div>
                      <div className="col-span-2">Destination</div>
                      <div className="col-span-1">Gate</div>
                      <div className="col-span-1">Time</div>
                      <div className="col-span-1">Status</div>
                    </div>

                    {[
                      { flight: "SL 101", destination: "New York", gate: "A1", time: "10:15", status: "Boarding", delay: false },
                      { flight: "SL 205", destination: "Chicago", gate: "B3", time: "10:45", status: "On Time", delay: false },
                      { flight: "SL 310", destination: "Miami", gate: "C2", time: "11:05", status: "Delayed", delay: true },
                      { flight: "SL 422", destination: "Seattle", gate: "A5", time: "11:30", status: "On Time", delay: false },
                    ].map((flight, i) => (
                      <div 
                        key={i}
                        className={`grid grid-cols-6 gap-4 text-sm py-2 border-b last:border-0 ${
                          flight.delay ? 'text-amber-600 dark:text-amber-400' : ''
                        }`}
                      >
                        <div className="col-span-1 font-medium">{flight.flight}</div>
                        <div className="col-span-2">{flight.destination}</div>
                        <div className="col-span-1">{flight.gate}</div>
                        <div className="col-span-1">{flight.time}</div>
                        <div className="col-span-1">
                          <span 
                            className={`px-2 py-1 rounded-full text-xs ${
                              flight.status === 'Boarding' 
                                ? `bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 ${boardingAnimation ? 'animate-pulse' : ''}` 
                                : flight.status === 'Delayed'
                                ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                            }`}
                          >
                            {flight.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Before & After Toggle */}
                <div className="mt-4 flex justify-end">
                  <div className="inline-flex rounded-md shadow-sm">
                    <button className="px-3 py-1 rounded-l-md bg-white dark:bg-gray-700 text-xs font-medium border border-gray-200 dark:border-gray-600">
                      Modern
                    </button>
                    <button className="px-3 py-1 rounded-r-md bg-gray-100 dark:bg-gray-800 text-xs font-medium border border-gray-200 dark:border-gray-600 border-l-0 text-gray-500">
                      Legacy
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 skyline-main-gradient rounded-full animate-float"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 skyline-main-gradient rounded-full animate-float-slow"></div>
            <div className="absolute -bottom-6 right-1/3 w-8 h-8 skyline-main-gradient rounded-full animate-float"></div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowVideoModal(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[80vh]" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-bold">SkyLine FIDS Demo</h3>
              <button 
                onClick={() => setShowVideoModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <p className="text-white">Video demo would play here</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}