"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plane, ArrowRight, ChevronDown, Quote } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/image'

export default function HeroSection() {
  const { toast } = useToast()
  const [email, setEmail] = useState('')

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
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              A modern, affordable, and intuitive Flight Information Display System designed to enhance passenger experience and optimize operations at smaller airports.
            </p>
            
            <form onSubmit={handleDemoRequest} className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit"
                className="skyline-main-gradient text-white flex items-center gap-2 hover:opacity-90 transition-opacity px-6"
              >
                Request a Free Demo
                <ArrowRight size={16} />
              </Button>
            </form>
            
            <div className="flex items-center mb-8">
              <a 
                href="#why-skyline" 
                className="text-gray-500 dark:text-gray-400 flex items-center hover:text-primary transition-colors"
              >
                Learn More 
                <ChevronDown size={16} className="ml-1 animate-bounce" />
              </a>
            </div>

            {/* Testimonials Section */}
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Trusted by Airport Directors:</h3>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Quote size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      "SkyLine saved us 15 hours weekly on information updates and reduced passenger inquiries by 40%."
                    </p>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-2">
                        <span className="text-xs font-medium">JD</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Director, Regional Airport</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 p-1">
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
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
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
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 skyline-main-gradient rounded-full animate-float"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 skyline-main-gradient rounded-full animate-float-slow"></div>
            <div className="absolute -bottom-6 right-1/3 w-8 h-8 skyline-main-gradient rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  )
}