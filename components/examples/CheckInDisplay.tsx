"use client"

import { useState, useEffect } from 'react'
import { Clock, Search, CheckCircle2, Users, Clock3 } from 'lucide-react'
import { cn } from '@/lib/utils'

type CheckInStatus = 'Open' | 'Closing Soon' | 'Closed' | 'Opens Soon'

interface CheckInCounter {
  id: string
  airline: string
  flightNumbers: string[]
  destination: string
  openTime: string
  closeTime: string
  counters: string
  status: CheckInStatus
  statusColor: string
  logo: string
}

export default function CheckInDisplay() {
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
      checkInCounters.forEach(counter => {
        if (counter.status === 'Closing Soon') {
          pulsingState[counter.id] = true
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
  
  const checkInCounters: CheckInCounter[] = [
    {
      id: 'SL-NYC',
      airline: 'SkyLine Airways',
      flightNumbers: ['SL 101', 'SL 103', 'SL 105'],
      destination: 'New York JFK',
      openTime: '06:00',
      closeTime: '08:45',
      counters: '1-4',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      id: 'SL-CHI',
      airline: 'SkyLine Airways',
      flightNumbers: ['SL 205'],
      destination: 'Chicago ORD',
      openTime: '07:00',
      closeTime: '09:15',
      counters: '5-6',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      id: 'SL-MIA',
      airline: 'SkyLine Airways',
      flightNumbers: ['SL 310'],
      destination: 'Miami MIA',
      openTime: '07:30',
      closeTime: '09:45',
      counters: '7-8',
      status: 'Closing Soon',
      statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
      logo: '🌐'
    },
    {
      id: 'SL-SEA',
      airline: 'SkyLine Airways',
      flightNumbers: ['SL 422'],
      destination: 'Seattle SEA',
      openTime: '08:00',
      closeTime: '10:00',
      counters: '9-10',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      id: 'MA-DEN',
      airline: 'Mountain Air',
      flightNumbers: ['MA 118'],
      destination: 'Denver DEN',
      openTime: '08:30',
      closeTime: '10:30',
      counters: '11-12',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🏔️'
    },
    {
      id: 'CA-SFO',
      airline: 'Coastal Air',
      flightNumbers: ['CA 220'],
      destination: 'San Francisco SFO',
      openTime: '08:45',
      closeTime: '10:45',
      counters: '13-14',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌊'
    },
    {
      id: 'SL-BOS',
      airline: 'SkyLine Airways',
      flightNumbers: ['SL 550'],
      destination: 'Boston BOS',
      openTime: '09:00',
      closeTime: '11:00',
      counters: '15-16',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🌐'
    },
    {
      id: 'MA-LAS',
      airline: 'Mountain Air',
      flightNumbers: ['MA 330'],
      destination: 'Las Vegas LAS',
      openTime: '09:15',
      closeTime: '11:15',
      counters: '17-18',
      status: 'Open',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      logo: '🏔️'
    },
    {
      id: 'EA-DCA',
      airline: 'Eastern Airlines',
      flightNumbers: ['EA 115'],
      destination: 'Washington DCA',
      openTime: '09:30',
      closeTime: '11:30',
      counters: '19-20',
      status: 'Opens Soon',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      logo: '🌄'
    },
    {
      id: 'SL-DFW',
      airline: 'SkyLine Airways',
      flightNumbers: ['SL 712'],
      destination: 'Dallas DFW',
      openTime: '06:15',
      closeTime: '08:15',
      counters: '21-22',
      status: 'Closed',
      statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400',
      logo: '🌐'
    }
  ]
  
  const filteredCounters = searchTerm
    ? checkInCounters.filter(counter => 
        counter.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        counter.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        counter.counters.toLowerCase().includes(searchTerm.toLowerCase()) ||
        counter.flightNumbers.some(num => num.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : checkInCounters
  
  return (
    <div className="bg-gradient-to-b from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold">Check-in Counters</h2>
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
          placeholder="Search by airline, destination, counter or flight number..."
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300/50 dark:border-gray-700/50 glass-effect text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-black/10">
              <th className="py-3 px-4 text-left font-semibold">Airline</th>
              <th className="py-3 px-4 text-left font-semibold">Flight(s)</th>
              <th className="py-3 px-4 text-left font-semibold">Destination</th>
              <th className="py-3 px-4 text-left font-semibold">Open</th>
              <th className="py-3 px-4 text-left font-semibold">Close</th>
              <th className="py-3 px-4 text-left font-semibold">Counter</th>
              <th className="py-3 px-4 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCounters.map((counter) => (
              <tr 
                key={counter.id}
                className={cn(
                  "border-b border-gray-200/50 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-white/5",
                  counter.status === 'Closed' && "opacity-60"
                )}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{counter.logo}</span>
                    <span className="font-medium">{counter.airline}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    {counter.flightNumbers.map((flight, index) => (
                      <span key={index} className="inline-block bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs font-medium mr-1">
                        {flight}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-4 font-medium">{counter.destination}</td>
                <td className="py-4 px-4 font-mono">{counter.openTime}</td>
                <td className="py-4 px-4 font-mono">{counter.closeTime}</td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <Users className="h-3 w-3" />
                    {counter.counters}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span 
                    className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium", 
                      counter.statusColor,
                      (counter.status === 'Closing Soon' && isPulsing[counter.id]) && "animate-pulse"
                    )}
                  >
                    {counter.status}
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