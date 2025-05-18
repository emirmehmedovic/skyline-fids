"use client"

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  Plane, 
  Clock, 
  Luggage, 
  CheckCircle, 
  Users, 
  AlertCircle,
  ChevronRight,
  Clock3
} from 'lucide-react'
import { cn } from '@/lib/utils'
import DeparturesDisplay from '@/components/examples/DeparturesDisplay'
import ArrivalsDisplay from '@/components/examples/ArrivalsDisplay'
import CheckInDisplay from '@/components/examples/CheckInDisplay'
import BoardingDisplay from '@/components/examples/BoardingDisplay'
import BaggageDisplay from '@/components/examples/BaggageDisplay'
import GateInfoDisplay from '@/components/examples/GateInfoDisplay'

type DisplayType = 'departures' | 'arrivals' | 'check-in' | 'boarding' | 'baggage' | 'gate-info'

export default function ExamplesPage() {
  const [activeDisplay, setActiveDisplay] = useState<DisplayType>('departures')
  
  const displays = [
    { 
      id: 'departures', 
      name: 'Departures Board', 
      icon: <Plane className="h-5 w-5 rotate-45" />,
      description: 'Real-time departure information with gate assignments and flight status.' 
    },
    { 
      id: 'arrivals', 
      name: 'Arrivals Board', 
      icon: <Plane className="h-5 w-5 -rotate-45" />,
      description: 'Live arrival information with baggage claim details and flight status.' 
    },
    { 
      id: 'check-in', 
      name: 'Check-in Display', 
      icon: <CheckCircle className="h-5 w-5" />,
      description: 'Check-in counter assignments and hours of operation.' 
    },
    { 
      id: 'boarding', 
      name: 'Boarding Gate Display', 
      icon: <Users className="h-5 w-5" />,
      description: 'Boarding announcements and passenger information at gates.' 
    },
    { 
      id: 'baggage', 
      name: 'Baggage Information', 
      icon: <Luggage className="h-5 w-5" />,
      description: 'Baggage claim/drop locations and carousel assignments.' 
    },
    { 
      id: 'gate-info', 
      name: 'Gate Information', 
      icon: <Clock3 className="h-5 w-5" />,
      description: 'Detailed flight and timing information at individual gates.' 
    }
  ]
  
  const getActiveDisplay = () => {
    switch(activeDisplay) {
      case 'departures':
        return <DeparturesDisplay />
      case 'arrivals':
        return <ArrivalsDisplay />
      case 'check-in':
        return <CheckInDisplay />
      case 'boarding':
        return <BoardingDisplay />
      case 'baggage':
        return <BaggageDisplay />
      case 'gate-info':
        return <GateInfoDisplay />
      default:
        return <DeparturesDisplay />
    }
  }
  
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">SkyLine FIDS Examples</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore interactive examples of SkyLine's various display screens. See how your airport could look with our modern FIDS solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar menu */}
            <div className="lg:col-span-3 sticky top-24">
              <div className="glass-card p-4 border border-white/10 dark:border-white/5 shadow-xl overflow-hidden backdrop-blur-sm">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Display Types</h2>
                <div className="space-y-2">
                  {displays.map((display) => (
                    <button
                      key={display.id}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors",
                        activeDisplay === display.id
                          ? "bg-green-500/10 text-green-600 dark:text-green-400 font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300"
                      )}
                      onClick={() => setActiveDisplay(display.id as DisplayType)}
                    >
                      <div className={cn(
                        "p-2 rounded-full",
                        activeDisplay === display.id
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                      )}>
                        {display.icon}
                      </div>
                      <div>
                        <div>{display.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                          {display.description}
                        </div>
                      </div>
                      {activeDisplay === display.id && (
                        <ChevronRight className="ml-auto h-4 w-4" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Display area */}
            <div className="lg:col-span-9">
              <div className="glass-card border border-white/10 dark:border-white/5 shadow-xl overflow-hidden backdrop-blur-sm relative p-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0"></div>
                {getActiveDisplay()}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 