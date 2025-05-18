"use client"

import { useState, useEffect } from 'react'
import { Clock, Users, Plane, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

type BoardingStatus = 'Pre-Boarding' | 'Boarding' | 'Final Call' | 'Closed' | 'On Time' | 'Delayed'

interface Flight {
  flightNumber: string
  airline: string
  destination: string
  departureTime: string
  estimatedTime: string | null
  gate: string
  status: BoardingStatus
  statusColor: string
  logo: string
  progress: number
  boardingGroups: string[]
  currentGroup: string | null
}

export default function BoardingDisplay() {
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
  
  const flight: Flight = {
    flightNumber: 'SL 101',
    airline: 'SkyLine Airways',
    destination: 'New York JFK',
    departureTime: '09:15',
    estimatedTime: null,
    gate: 'A1',
    status: 'Boarding',
    statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    logo: '🌐',
    progress: 60,
    boardingGroups: ['First Class', 'Business Class', 'SkyLine Elite', 'Group 1', 'Group 2', 'Group 3', 'Group 4', 'Group 5'],
    currentGroup: 'Group 2'
  }
  
  return (
    <div className="bg-gradient-to-b from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-6 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <Users className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold">Boarding Gate</h2>
        </div>
        <div className="text-right flex items-center">
          <Clock className="h-5 w-5 mr-2 text-gray-500" />
          <span className="text-lg font-mono">{time}</span>
        </div>
      </div>
      
      {/* Flight Information */}
      <div className="glass-card p-5 border border-white/10 dark:border-white/5 rounded-lg mb-6">
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex items-center">
            <span className="text-3xl mr-3">{flight.logo}</span>
            <div>
              <div className="text-2xl font-bold">{flight.flightNumber}</div>
              <div className="text-lg text-gray-600 dark:text-gray-400">{flight.airline}</div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-medium">Gate {flight.gate}</div>
            <span 
              className={cn(
                "inline-block px-3 py-1 rounded-full text-sm font-medium mt-1", 
                flight.statusColor,
                flight.status === 'Boarding' && isPulsing && "animate-pulse"
              )}
            >
              {flight.status}
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center">
          <Plane className="h-5 w-5 rotate-45 mr-2 text-gray-500" />
          <span className="text-lg font-medium">{flight.destination}</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Scheduled</div>
            <div className="text-lg font-mono">{flight.departureTime}</div>
          </div>
          
          {flight.estimatedTime && (
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Estimated</div>
              <div className="text-lg font-mono text-amber-600 dark:text-amber-400">{flight.estimatedTime}</div>
            </div>
          )}
          
          {flight.status === 'Boarding' && (
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Now Boarding</div>
              <div className="text-lg font-medium text-green-600 dark:text-green-400">{flight.currentGroup}</div>
            </div>
          )}
        </div>
      </div>
      
      {/* Boarding Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">Boarding Progress</h3>
          <span className="text-sm font-medium">{flight.progress}%</span>
        </div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" 
            style={{ width: `${flight.progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Boarding Groups */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Boarding Groups</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {flight.boardingGroups.map((group, index) => {
            const isCurrent = group === flight.currentGroup;
            const isBoarded = flight.currentGroup && flight.boardingGroups.indexOf(group) < flight.boardingGroups.indexOf(flight.currentGroup);
            
            return (
              <div 
                key={group}
                className={cn(
                  "border rounded-lg p-3 text-center transition-colors",
                  isCurrent 
                    ? "bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700/50" 
                    : isBoarded 
                      ? "bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 opacity-60" 
                      : "bg-white/50 border-gray-200 dark:bg-gray-900/50 dark:border-gray-700"
                )}
              >
                <div 
                  className={cn(
                    "text-sm font-medium",
                    isCurrent 
                      ? "text-green-800 dark:text-green-400" 
                      : isBoarded 
                        ? "text-gray-500 dark:text-gray-400" 
                        : "text-gray-700 dark:text-gray-300"
                  )}
                >
                  {group}
                </div>
                <div className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                  {isCurrent ? 'Now Boarding' : isBoarded ? 'Boarded' : 'Waiting'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Boarding Announcements */}
      <div className="glass-card border border-white/10 dark:border-white/5 rounded-lg p-4">
        <h3 className="font-medium mb-3">Announcements</h3>
        <div className="space-y-3">
          <div className={cn(
            "p-3 rounded-lg border border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-900/20",
            isPulsing && "animate-pulse"
          )}>
            <div className="font-medium text-green-800 dark:text-green-400">Now Boarding: {flight.currentGroup}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Please have your boarding pass and ID ready for inspection.
            </div>
          </div>
          
          <div className="p-3 rounded-lg border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-900/20">
            <div className="font-medium text-blue-800 dark:text-blue-400">Carry-on Baggage</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Due to the full flight, we may need to check some carry-on bags at the gate.
            </div>
          </div>
          
          <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-200">Overhead Bin Space</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Overhead bin space is limited. Please store smaller items under the seat in front of you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 