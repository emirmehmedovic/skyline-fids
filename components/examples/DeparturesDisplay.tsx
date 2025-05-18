"use client"

import { useState, useEffect } from 'react'
import { Clock, Search, CheckCircle2, AlertTriangle, Plane } from 'lucide-react'
import { cn } from '@/lib/utils'

type FlightStatus = 'On Time' | 'Delayed' | 'Boarding' | 'Final Call' | 'Departed' | 'Cancelled'

interface Flight {
  flightNumber: string
  airline: string
  destination: string
  scheduledTime: string
  estimatedTime: string | null
  gate: string
  status: FlightStatus
  statusColor: string
  logo: string
}

export default function DeparturesDisplay() {
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
        if (flight.status === 'Boarding' || flight.status === 'Final Call') {
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
      flightNumber: 'SL 101',
      airline: 'SkyLine Airways',
      destination: 'New York JFK',
      scheduledTime: '09:15',
      estimatedTime: null,
      gate: 'A1',
      status: 'Boarding',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      flightNumber: 'SL 205',
      airline: 'SkyLine Airways',
      destination: 'Chicago ORD',
      scheduledTime: '09:45',
      estimatedTime: null,
      gate: 'B3',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌐'
    },
    {
      flightNumber: 'SL 310',
      airline: 'SkyLine Airways',
      destination: 'Miami MIA',
      scheduledTime: '10:15',
      estimatedTime: '10:45',
      gate: 'C2',
      status: 'Delayed',
      statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      logo: '🌐'
    },
    {
      flightNumber: 'SL 422',
      airline: 'SkyLine Airways',
      destination: 'Seattle SEA',
      scheduledTime: '10:30',
      estimatedTime: null,
      gate: 'A5',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌐'
    },
    {
      flightNumber: 'MA 118',
      airline: 'Mountain Air',
      destination: 'Denver DEN',
      scheduledTime: '11:00',
      estimatedTime: null,
      gate: 'D1',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🏔️'
    },
    {
      flightNumber: 'CA 220',
      airline: 'Coastal Air',
      destination: 'San Francisco SFO',
      scheduledTime: '11:15',
      estimatedTime: null,
      gate: 'B5',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌊'
    },
    {
      flightNumber: 'SL 550',
      airline: 'SkyLine Airways',
      destination: 'Boston BOS',
      scheduledTime: '11:30',
      estimatedTime: null,
      gate: 'C4',
      status: 'Final Call',
      statusColor: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      logo: '🌐'
    },
    {
      flightNumber: 'MA 330',
      airline: 'Mountain Air',
      destination: 'Las Vegas LAS',
      scheduledTime: '11:45',
      estimatedTime: '12:30',
      gate: 'D3',
      status: 'Delayed',
      statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      logo: '🏔️'
    },
    {
      flightNumber: 'EA 115',
      airline: 'Eastern Airlines',
      destination: 'Washington DCA',
      scheduledTime: '12:00',
      estimatedTime: null,
      gate: 'A4',
      status: 'On Time',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌄'
    },
    {
      flightNumber: 'SL 712',
      airline: 'SkyLine Airways',
      destination: 'Dallas DFW',
      scheduledTime: '08:45',
      estimatedTime: null,
      gate: 'B2',
      status: 'Departed',
      statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400',
      logo: '🌐'
    }
  ]
  
  const filteredFlights = searchTerm
    ? flights.filter(flight => 
        flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.gate.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : flights
  
  return (
    <div className="bg-gradient-to-b from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <Plane className="h-5 w-5 text-white rotate-45" />
          </div>
          <h2 className="text-xl font-bold">Departures</h2>
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
          placeholder="Search by destination, flight or gate..."
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300/50 dark:border-gray-700/50 glass-effect text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500/50"
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
              <th className="py-3 px-4 text-left font-semibold">Destination</th>
              <th className="py-3 px-4 text-left font-semibold">Scheduled</th>
              <th className="py-3 px-4 text-left font-semibold">Estimated</th>
              <th className="py-3 px-4 text-left font-semibold">Gate</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredFlights.map((flight, index) => (
              <tr 
                key={flight.flightNumber}
                className={cn(
                  "border-b border-gray-200/50 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-white/5",
                  flight.status === 'Departed' && "opacity-60"
                )}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{flight.logo}</span>
                    <span className="font-medium">{flight.flightNumber}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="font-medium">{flight.destination}</div>
                  <div className="text-xs text-gray-500">{flight.airline}</div>
                </td>
                <td className="py-4 px-4 font-mono">{flight.scheduledTime}</td>
                <td className="py-4 px-4 font-mono">
                  {flight.estimatedTime ? (
                    <span className="text-amber-600 dark:text-amber-400">{flight.estimatedTime}</span>
                  ) : (
                    '—'
                  )}
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800">
                    {flight.gate}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span 
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      flight.statusColor,
                      (flight.status === 'Boarding' || flight.status === 'Final Call') && 
                        isPulsing[flight.flightNumber] && "animate-pulse"
                    )}
                  >
                    {flight.status}
                  </span>
                </td>
              </tr>
            ))}
            {filteredFlights.length === 0 && (
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-500">
                  No flights match your search. Try a different term.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer */}
      <div className="mt-6 flex justify-between items-center text-xs text-gray-500">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
            <span>On Time</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
            <span>Boarding</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
            <span>Final Call</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-amber-400 mr-2"></span>
            <span>Delayed</span>
          </div>
        </div>
        <div>Last Updated: {time} Local Time</div>
      </div>
    </div>
  )
} 