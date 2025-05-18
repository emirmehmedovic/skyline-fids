"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if scrolled
      if (currentScrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Determine scroll direction and visibility
      if (currentScrollY > 150) {
        // If we're scrolling down and not at the top, hide the navbar
        if (currentScrollY > lastScrollY && visible) {
          setVisible(false)
        } 
        // If we're scrolling up, show the navbar
        else if (currentScrollY < lastScrollY && !visible) {
          setVisible(true)
        }
      } else {
        // Always show navbar when near the top
        setVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, visible])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Benefits', href: '/#benefits' },
    { name: 'Examples', href: '/examples' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Why SkyLine?', href: '/#why-skyline' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-gradient-to-r from-gray-900/90 via-green-900/90 to-gray-900/90 backdrop-blur-md py-2 border-b border-green-500/20" 
          : "bg-gradient-to-r from-gray-900/80 via-green-900/80 to-gray-900/80 backdrop-blur-sm py-4",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Accent line at top */}
        <div className="absolute -top-2 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500/0 via-green-500/70 to-green-500/0 mx-8"></div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              href="/"
              className="group flex items-center relative z-10"
              onClick={() => setActiveLink('Home')}
            >
              <div className="relative h-10 w-auto mr-2 transform transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/SkyLine logo.png" 
                  alt="SkyLine Logo" 
                  width={130} 
                  height={40} 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute -inset-1 bg-green-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative overflow-hidden group",
                    activeLink === link.name 
                      ? "text-white bg-green-500/20" 
                      : "text-gray-300 hover:text-white hover:bg-green-500/10",
                    "hover:scale-105"
                  )}
                  onClick={() => setActiveLink(link.name)}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 group-hover:w-full",
                    activeLink === link.name ? "w-full" : "w-0"
                  )}></span>
                </Link>
              ))}
              <Button 
                className="ml-4 bg-gradient-to-r from-green-600 to-green-500 text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/20 border border-green-400/20 flex items-center gap-1 rounded-lg"
              >
                <span>Request a Demo</span>
                <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ExternalLink size={12} className="text-white" />
                </div>
              </Button>
            </div>
          </div>

          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-full focus:outline-none transition-colors",
                "bg-green-900/40 border border-green-500/20 text-gray-200 hover:text-white hover:bg-green-800/50 shadow-md"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900/95 to-green-900/95 backdrop-blur-xl mt-2 mx-4 rounded-xl shadow-xl border border-green-500/20 overflow-hidden animate-in fade-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveLink(link.name);
                }}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                  activeLink === link.name
                    ? "bg-green-500/20 text-white"
                    : "text-gray-300 hover:text-white hover:bg-green-500/10"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 pb-1 px-1">
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:opacity-90 transition-opacity py-5 rounded-lg group relative overflow-hidden"
              >
                <span className="relative z-10">Request a Demo</span>
                <div className="absolute inset-0 bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <ExternalLink size={16} className="ml-2 relative z-10" />
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] right-[10%] w-40 h-40 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
      </div>
    </nav>
  )
}