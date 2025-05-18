"use client"

import { useState } from 'react'
import { Plane, Briefcase, Clock, TrendingUp, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BenefitsSection() {
  const [activeBenefit, setActiveBenefit] = useState(0)
  
  const benefits = [
    {
      icon: <Plane size={24} />,
      title: "Improved Passenger Experience",
      description: "Clear, accurate, and timely flight information reduces passenger stress and significantly boosts satisfaction.",
      image: "https://images.pexels.com/photos/2008145/pexels-photo-2008145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Lower Operational Costs",
      description: "Eliminate the need for expensive proprietary hardware, complex software licenses, and specialized IT staff for FIDS maintenance.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Clock size={24} />,
      title: "Increased Staff Efficiency",
      description: "Simple information management frees up your team's time to focus on other critical airport tasks.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Scalable for Future Needs",
      description: "SkyLine grows with your airport. Easily add new displays or features as your operations expand.",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Star size={24} />,
      title: "Modern Airport Image",
      description: "Showcase a commitment to modern technology and passenger service, even with limited resources.",
      image: "https://images.pexels.com/photos/2130610/pexels-photo-2130610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SkyLine: The Smart FIDS Choice for Small Airport Growth
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've focused on delivering tangible benefits that truly matter to smaller airport operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -z-10 -top-20 -left-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
              <img 
                src={benefits[activeBenefit].image} 
                alt={benefits[activeBenefit].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{benefits[activeBenefit].title}</h3>
                <p className="text-white/90 max-w-md">{benefits[activeBenefit].description}</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 skyline-gradient rounded-lg rotate-12 opacity-70"></div>
            <div className="absolute top-1/3 -right-6 w-12 h-12 bg-blue-400 dark:bg-blue-600 rounded-full animate-float-slow"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-5 rounded-lg cursor-pointer transition-all duration-300",
                    activeBenefit === index 
                      ? "bg-white dark:bg-gray-800 shadow-md border-l-4 border-primary" 
                      : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  )}
                  onClick={() => setActiveBenefit(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "mt-1 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                      activeBenefit === index 
                        ? "skyline-gradient text-white" 
                        : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                    )}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}