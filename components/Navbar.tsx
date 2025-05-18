"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Plane } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Why SkyLine?', href: '#why-skyline' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link 
              href="#"
              className="flex items-center gap-2 font-bold text-xl"
            >
              <div className="relative p-1 rounded-md skyline-gradient group">
                <Plane size={24} className="text-white rotate-45 transform transition-transform group-hover:rotate-[60deg]" />
              </div>
              <span className={cn(
                "transition-colors duration-300",
                scrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
              )}>
                Sky<span className="skyline-text-gradient font-bold">Line</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    scrolled 
                      ? "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white" 
                      : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                className="ml-4 skyline-gradient text-white hover:opacity-90 transition-opacity"
              >
                Request a Demo
              </Button>
            </div>
          </div>

          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md focus:outline-none transition-colors",
                scrolled 
                  ? "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white" 
                  : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-white rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                className="w-full skyline-gradient text-white hover:opacity-90 transition-opacity"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}