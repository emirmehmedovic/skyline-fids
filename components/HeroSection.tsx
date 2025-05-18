"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plane, ArrowRight, ChevronDown, CheckCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import Link from 'next/link'

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
    <section className="pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden relative">
      {/* Ambient background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 opacity-90 z-10"></div>
        <div className="w-full h-full bg-[url('/airport-terminal-bg.jpg')] bg-cover bg-center opacity-15 dark:opacity-10"></div>
      </div>
      
      {/* Simplified Blobs */}
      <div className="blob w-64 h-64 bg-blue-300/20 dark:bg-blue-600/10 top-20 right-[10%]"></div>
      <div className="blob w-52 h-52 bg-cyan-300/15 dark:bg-cyan-600/10 top-[40%] left-[20%] animation-delay-400"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute -top-10 right-0 w-64 h-64 skyline-main-gradient rounded-full blur-3xl opacity-30"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-sm font-medium mb-4 neon-border">
              <span className="animate-pulse mr-1.5">●</span> 
              Modern FIDS for Small Airports
            </div>
            
            <h1 className="relative mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight animate-reveal">
                Sky<span className="skyline-main-text-gradient">Line</span>
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white animate-reveal animate-reveal-delay-1">
                Crystal Clear Vision
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
              A modern, affordable, and intuitive Flight Information Display System designed to enhance passenger experience and optimize operations at smaller airports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <form onSubmit={handleDemoRequest} className="flex flex-col sm:flex-row gap-3 flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-3 rounded-lg border border-gray-300/50 dark:border-gray-700/50 glass-effect text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 flex-grow shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  type="submit"
                  className="skyline-main-gradient text-white flex items-center gap-2 hover:opacity-90 transition-all px-6 py-6 shadow-lg hover:shadow-xl"
                >
                  Request a Demo
                  <ArrowRight size={16} />
                </Button>
              </form>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/examples">
                <Button 
                  variant="outline"
                  className="border border-gray-300/50 dark:border-gray-700/50 glass-effect text-gray-900 dark:text-gray-100"
                >
                  See Examples
                </Button>
              </Link>
              
              <Link href="/pricing">
                <Button 
                  variant="outline"
                  className="border border-gray-300/50 dark:border-gray-700/50 glass-effect text-gray-900 dark:text-gray-100"
                >
                  See Pricing
                </Button>
              </Link>
            </div>

            {/* Quick Stats with Testimonial Integration */}
            <div className="flex flex-wrap items-center justify-around glass-card p-4 shadow-md">
              <div className="text-center px-3 py-2">
                <div className="font-bold text-2xl skyline-main-text-gradient">40%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Fewer Inquiries</div>
              </div>
              <div className="text-center px-3 py-2">
                <div className="font-bold text-2xl skyline-main-text-gradient">15h</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Weekly Savings</div>
              </div>
              <div className="text-center px-3 py-2 flex flex-col items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Trusted Solution</div>
              </div>
            </div>
            
            <div className="flex items-center mt-6">
              <a 
                href="#why-skyline" 
                className="text-gray-500 dark:text-gray-400 flex items-center hover:text-primary transition-colors hover:underline group"
              >
                Learn More 
                <ChevronDown size={16} className="ml-1 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative glass-card overflow-hidden border border-white/20 dark:border-white/5 p-1 shadow-xl">              
              <div className="absolute -top-6 -right-6 w-20 h-20 skyline-main-gradient rounded-full blur-xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 skyline-main-gradient rounded-full blur-xl opacity-40"></div>
              
              <div className="bg-gradient-to-br from-gray-50/90 to-gray-100/90 dark:from-gray-800/80 dark:to-gray-900/80 p-6 rounded-lg relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 skyline-main-gradient rounded-full flex items-center justify-center mr-2 shadow-lg">
                      <Plane size={16} className="text-white rotate-45" />
                    </div>
                    <h3 className="font-bold">SkyLine FIDS</h3>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">9:45 AM</div>
                </div>
                
                <div className="space-y-4">
                  {/* Flight Information Display */}
                  <div className="glass-effect border-0 rounded-lg p-4 shadow-lg">
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
                        className={`grid grid-cols-6 gap-4 text-sm py-2 border-b border-gray-200/50 dark:border-gray-700/50 last:border-0 ${
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
                
                <div className="flex justify-center mt-4">
                  <Link href="/examples" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                    View all display screens
                    <CheckCircle size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}