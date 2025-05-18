"use client"

import { useState, useEffect } from 'react'
import { Clock, Clock3, Plane, Users, Terminal, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type GateStatus = 'Scheduled' | 'Boarding Soon' | 'Boarding' | 'Final Call' | 'Departed' | 'Delayed'

interface GateInfo {
  flightNumber: string
  airline: string
  destination: string
  departureTime: string
  estimatedTime: string | null
  status: GateStatus
  statusColor: string
  logo: string
  boardingTime: string
  aircraft: string
  terminal: string
  gate: string
}

export default function GateInfoDisplay() {
  const [time, setTime] = useState<string>('')
  const [isPulsing, setIsPulsing] = useState<boolean>(false)
  
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
    const pulseInterval = setInterval(() => {
      setIsPulsing(prev => !prev)
    }, 1500)
    
    return () => {
      clearInterval(timeInterval)
      clearInterval(pulseInterval)
    }
  }, [])
  
  const gateInfo: GateInfo = {
    flightNumber: 'SL 101',
    airline: 'SkyLine Airways',
    destination: 'New York JFK',
    departureTime: '09:15',
    estimatedTime: null,
    status: 'Boarding',
    statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    logo: '🌐',
    boardingTime: '08:45',
    aircraft: 'Boeing 737-800',
    terminal: 'A',
    gate: 'A1'
  }
  
  // Mock flight information
  const nextFlights = [
    {
      flightNumber: 'SL 205',
      destination: 'Chicago ORD',
      departureTime: '11:30',
      status: 'Scheduled'
    },
    {
      flightNumber: 'SL 310',
      destination: 'Miami MIA',
      departureTime: '13:45',
      status: 'Scheduled'
    }
  ]
  
  return (
    <div className="bg-gradient-to-b from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <Terminal className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Gate Information</h2>
            <div className="text-sm text-gray-500">Terminal {gateInfo.terminal} • Gate {gateInfo.gate}</div>
          </div>
        </div>
        <div className="text-right flex items-center">
          <Clock className="h-5 w-5 mr-2 text-gray-500" />
          <span className="text-lg font-mono">{time}</span>
        </div>
      </div>
      
      {/* Current Flight */}
      <div className="glass-card p-5 border border-white/10 dark:border-white/5 rounded-lg mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <span className="text-3xl mr-3">{gateInfo.logo}</span>
            <div>
              <div className="text-lg font-bold">{gateInfo.airline}</div>
              <div className="text-2xl font-bold">{gateInfo.flightNumber}</div>
            </div>
          </div>
          
          <span 
            className={cn(
              "inline-block px-3 py-1 rounded-full text-sm font-medium", 
              gateInfo.statusColor,
              (gateInfo.status === 'Boarding' || gateInfo.status === 'Final Call') && isPulsing && "animate-pulse"
            )}
          >
            {gateInfo.status}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-4">
              <Plane className="h-5 w-5 rotate-45 mr-2 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Destination</div>
                <div className="text-lg font-medium">{gateInfo.destination}</div>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock3 className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Scheduled Departure</div>
                <div className="text-lg font-mono">{gateInfo.departureTime}</div>
              </div>
            </div>
            
            {gateInfo.estimatedTime && (
              <div className="flex items-center mb-4">
                <Clock3 className="h-5 w-5 mr-2 text-amber-500" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Estimated Departure</div>
                  <div className="text-lg font-mono text-amber-600 dark:text-amber-400">{gateInfo.estimatedTime}</div>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Users className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Boarding Time</div>
                <div className="text-lg font-mono">{gateInfo.boardingTime}</div>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <Plane className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Aircraft</div>
                <div className="text-lg font-medium">{gateInfo.aircraft}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Terminal className="h-5 w-5 mr-2 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Terminal / Gate</div>
                <div className="text-lg font-medium">{gateInfo.terminal} / {gateInfo.gate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Boarding Status */}
      {(gateInfo.status === 'Boarding' || gateInfo.status === 'Final Call' || gateInfo.status === 'Boarding Soon') && (
        <div className={cn(
          "mb-6 p-4 rounded-lg border",
          gateInfo.status === 'Boarding' 
            ? "bg-green-50/50 dark:bg-green-900/20 border-green-200 dark:border-green-900/50" 
            : gateInfo.status === 'Final Call' 
              ? "bg-red-50/50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50" 
              : "bg-blue-50/50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50",
          (gateInfo.status === 'Boarding' || gateInfo.status === 'Final Call') && isPulsing && "animate-pulse"
        )}>
          <div className="text-lg font-medium mb-1">
            {gateInfo.status === 'Boarding' 
              ? "Now Boarding" 
              : gateInfo.status === 'Final Call' 
                ? "Final Call" 
                : "Boarding Soon"}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {gateInfo.status === 'Boarding' 
              ? "Please proceed to the gate with your boarding pass and ID ready." 
              : gateInfo.status === 'Final Call' 
                ? "This is the final call for SkyLine Airways flight SL 101 to New York JFK. Please proceed to gate A1 immediately."
                : "Boarding will begin at " + gateInfo.boardingTime + ". Please be at the gate on time."}
          </div>
        </div>
      )}
      
      {/* Next Flights at this Gate */}
      <div className="glass-card p-5 border border-white/10 dark:border-white/5 rounded-lg">
        <h3 className="font-medium mb-4">Next Flights from this Gate</h3>
        <div className="space-y-4">
          {nextFlights.map((flight) => (
            <div 
              key={flight.flightNumber}
              className="flex justify-between items-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50"
            >
              <div className="flex items-center">
                <span className="text-2xl mr-2">{gateInfo.logo}</span>
                <div>
                  <div className="font-medium">{flight.flightNumber}</div>
                  <div className="text-sm text-gray-500">{flight.destination}</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-right mr-4">
                  <div className="text-sm text-gray-500">Departure</div>
                  <div className="font-mono">{flight.departureTime}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 