"use client"

import { useState, useEffect } from 'react'
import { Clock, Search, Luggage, Plane, RefreshCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

type BaggageStatus = 'Arriving' | 'In Progress' | 'Ready' | 'Completed' | 'Delayed'

interface BaggageClaim {
  flightNumber: string
  airline: string
  origin: string
  arrivalTime: string
  carousel: string
  terminal: string
  status: BaggageStatus
  statusColor: string
  logo: string
  estimatedTime?: string
}

export default function BaggageDisplay() {
  const [time, setTime] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isPulsing, setIsPulsing] = useState<{ [key: string]: boolean }>({})
  
  useEffect(() => {
    // Set current time
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const mins = now.getMinutes().toString().padStart(2, '0')
      setTime(`${hours}:${mins}`)
    }
    
    updateTime()
    const timeInterval = setInterval(updateTime, 60000)
    
    // Setup pulsing effect for status
    const setupPulsing = () => {
      const pulsingState: { [key: string]: boolean } = {}
      baggageClaims.forEach(claim => {
        if (claim.status === 'In Progress') {
          pulsingState[claim.flightNumber] = true
        }
      })
      setIsPulsing(pulsingState)
    }
    
    setupPulsing()
    const pulseInterval = setInterval(() => {
      setIsPulsing(prev => {
        const newState = { ...prev }
        Object.keys(newState).forEach(key => {
          newState[key] = !newState[key]
        })
        return newState
      })
    }, 1500)
    
    return () => {
      clearInterval(timeInterval)
      clearInterval(pulseInterval)
    }
  }, [])
  
  const baggageClaims: BaggageClaim[] = [
    {
      flightNumber: 'SL 102',
      airline: 'SkyLine Airways',
      origin: 'New York JFK',
      arrivalTime: '09:10',
      carousel: '3',
      terminal: 'A',
      status: 'In Progress',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      flightNumber: 'SL 206',
      airline: 'SkyLine Airways',
      origin: 'Chicago ORD',
      arrivalTime: '09:40',
      carousel: '1',
      terminal: 'B',
      status: 'Arriving',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌐'
    },
    {
      flightNumber: 'SL 312',
      airline: 'SkyLine Airways',
      origin: 'Miami MIA',
      arrivalTime: '10:45',
      carousel: '4',
      terminal: 'C',
      status: 'Delayed',
      statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      logo: '🌐',
      estimatedTime: '11:15'
    },
    {
      flightNumber: 'MA 119',
      airline: 'Mountain Air',
      origin: 'Denver DEN',
      arrivalTime: '10:55',
      carousel: '2',
      terminal: 'D',
      status: 'Arriving',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🏔️'
    },
    {
      flightNumber: 'CA 221',
      airline: 'Coastal Air',
      origin: 'San Francisco SFO',
      arrivalTime: '11:10',
      carousel: '5',
      terminal: 'B',
      status: 'Arriving',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌊'
    },
    {
      flightNumber: 'SL 552',
      airline: 'SkyLine Airways',
      origin: 'Boston BOS',
      arrivalTime: '11:25',
      carousel: '6',
      terminal: 'C',
      status: 'Ready',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      flightNumber: 'EA 116',
      airline: 'Eastern Airlines',
      origin: 'Washington DCA',
      arrivalTime: '12:00',
      carousel: '3',
      terminal: 'A',
      status: 'Arriving',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌄'
    },
    {
      flightNumber: 'SL 714',
      airline: 'SkyLine Airways',
      origin: 'Dallas DFW',
      arrivalTime: '08:25',
      carousel: '1',
      terminal: 'B',
      status: 'Completed',
      statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400',
      logo: '🌐'
    }
  ]
  
  const filteredClaims = searchTerm
    ? baggageClaims.filter(claim => 
        claim.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.carousel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        claim.terminal.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : baggageClaims
  
  return (
    <div className="bg-gradient-to-b from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <Luggage className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold">Baggage Claim</h2>
        </div>
        <div className="text-right flex items-center">
          <Clock className="h-5 w-5 mr-2 text-gray-500" />
          <span className="text-lg font-mono">{time}</span>
        </div>
      </div>
      
      {/* Search */}
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by origin, flight, airline, terminal or carousel..."
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300/50 dark:border-gray-700/50 glass-effect text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-black/10">
              <th className="py-3 px-4 text-left font-semibold">Flight</th>
              <th className="py-3 px-4 text-left font-semibold">Origin</th>
              <th className="py-3 px-4 text-left font-semibold">Arrival</th>
              <th className="py-3 px-4 text-left font-semibold">Terminal</th>
              <th className="py-3 px-4 text-left font-semibold">Carousel</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredClaims.map((claim) => (
              <tr 
                key={claim.flightNumber}
                className={cn(
                  "border-b border-gray-200/50 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-white/5",
                  claim.status === 'Completed' && "opacity-60"
                )}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{claim.logo}</span>
                    <span className="font-medium">{claim.flightNumber}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <Plane className="h-4 w-4 -rotate-45 mr-2 text-gray-500" />
                    <div>
                      <div className="font-medium">{claim.origin}</div>
                      <div className="text-xs text-gray-500">{claim.airline}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 font-mono">
                  {claim.status === 'Delayed' && claim.estimatedTime ? (
                    <div>
                      <div className="line-through text-gray-400">{claim.arrivalTime}</div>
                      <div className="text-amber-600 dark:text-amber-400">{claim.estimatedTime}</div>
                    </div>
                  ) : (
                    claim.arrivalTime
                  )}
                </td>
                <td className="py-4 px-4 font-medium">
                  {claim.terminal}
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 font-medium">
                    {claim.carousel}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span 
                    className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium", 
                      claim.statusColor,
                      (claim.status === 'In Progress' && isPulsing[claim.flightNumber]) && "animate-pulse"
                    )}
                  >
                    {claim.status === 'In Progress' && (
                      <RefreshCcw className="h-3 w-3 mr-1 animate-spin" />
                    )}
                    {claim.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 