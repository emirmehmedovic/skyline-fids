"use client"

import { useState, useEffect } from 'react'
import { Clock, Search, CheckCircle2, AlertTriangle, Plane } from 'lucide-react'
import { cn } from '@/lib/utils'

type FlightStatus = 'On Time' | 'Delayed' | 'Landed' | 'Arrived' | 'Cancelled' | 'In Flight'

interface Flight {
  flightNumber: string
  airline: string
  origin: string
  scheduledTime: string
  estimatedTime: string | null
  terminal: string
  baggage: string
  status: FlightStatus
  statusColor: string
  logo: string
}

export default function ArrivalsDisplay() {
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
      flights.forEach(flight => {
        if (flight.status === 'Landed') {
          pulsingState[flight.flightNumber] = true
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
  
  const flights: Flight[] = [
    {
      flightNumber: 'SL 102',
      airline: 'SkyLine Airways',
      origin: 'New York JFK',
      scheduledTime: '09:15',
      estimatedTime: '09:10',
      terminal: 'A',
      baggage: 'A3',
      status: 'Landed',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      flightNumber: 'SL 206',
      airline: 'SkyLine Airways',
      origin: 'Chicago ORD',
      scheduledTime: '09:45',
      estimatedTime: null,
      terminal: 'B',
      baggage: 'B2',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌐'
    },
    {
      flightNumber: 'SL 312',
      airline: 'SkyLine Airways',
      origin: 'Miami MIA',
      scheduledTime: '10:15',
      estimatedTime: '10:45',
      terminal: 'C',
      baggage: 'C1',
      status: 'Delayed',
      statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      logo: '🌐'
    },
    {
      flightNumber: 'SL 424',
      airline: 'SkyLine Airways',
      origin: 'Seattle SEA',
      scheduledTime: '10:30',
      estimatedTime: null,
      terminal: 'A',
      baggage: 'A1',
      status: 'In Flight',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌐'
    },
    {
      flightNumber: 'MA 119',
      airline: 'Mountain Air',
      origin: 'Denver DEN',
      scheduledTime: '11:00',
      estimatedTime: null,
      terminal: 'D',
      baggage: 'D3',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🏔️'
    },
    {
      flightNumber: 'CA 221',
      airline: 'Coastal Air',
      origin: 'San Francisco SFO',
      scheduledTime: '11:15',
      estimatedTime: null,
      terminal: 'B',
      baggage: 'B4',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌊'
    },
    {
      flightNumber: 'SL 552',
      airline: 'SkyLine Airways',
      origin: 'Boston BOS',
      scheduledTime: '11:30',
      estimatedTime: '11:25',
      terminal: 'C',
      baggage: 'C2',
      status: 'Arrived',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      flightNumber: 'MA 332',
      airline: 'Mountain Air',
      origin: 'Las Vegas LAS',
      scheduledTime: '11:45',
      estimatedTime: '12:30',
      terminal: 'D',
      baggage: 'D1',
      status: 'Delayed',
      statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      logo: '🏔️'
    },
    {
      flightNumber: 'EA 116',
      airline: 'Eastern Airlines',
      origin: 'Washington DCA',
      scheduledTime: '12:00',
      estimatedTime: null,
      terminal: 'A',
      baggage: 'A2',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌄'
    },
    {
      flightNumber: 'SL 714',
      airline: 'SkyLine Airways',
      origin: 'Dallas DFW',
      scheduledTime: '08:45',
      estimatedTime: null,
      terminal: 'B',
      baggage: 'B1',
      status: 'Arrived',
      statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400',
      logo: '🌐'
    }
  ]
  
  const filteredFlights = searchTerm
    ? flights.filter(flight => 
        flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.terminal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.baggage.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : flights
  
  return (
    <div className="bg-gradient-to-b from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <Plane className="h-5 w-5 text-white -rotate-45" />
          </div>
          <h2 className="text-xl font-bold">Arrivals</h2>
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
          placeholder="Search by origin, flight, terminal or baggage..."
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300/50 dark:border-gray-700/50 glass-effect text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
              <th className="py-3 px-4 text-left font-semibold">Scheduled</th>
              <th className="py-3 px-4 text-left font-semibold">Estimated</th>
              <th className="py-3 px-4 text-left font-semibold">Terminal</th>
              <th className="py-3 px-4 text-left font-semibold">Baggage</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredFlights.map((flight) => (
              <tr 
                key={flight.flightNumber}
                className={cn(
                  "border-b border-gray-200/50 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-white/5",
                  flight.status === 'Arrived' && "opacity-60"
                )}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{flight.logo}</span>
                    <span className="font-medium">{flight.flightNumber}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="font-medium">{flight.origin}</div>
                  <div className="text-xs text-gray-500">{flight.airline}</div>
                </td>
                <td className="py-4 px-4 font-mono">{flight.scheduledTime}</td>
                <td className="py-4 px-4 font-mono">
                  {flight.estimatedTime || <span className="text-gray-400">-</span>}
                </td>
                <td className="py-4 px-4 font-medium">{flight.terminal}</td>
                <td className="py-4 px-4 font-medium">{flight.baggage}</td>
                <td className="py-4 px-4">
                  <span 
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium", 
                      flight.statusColor,
                      (flight.status === 'Landed' && isPulsing[flight.flightNumber]) && "animate-pulse"
                    )}
                  >
                    {flight.status}
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