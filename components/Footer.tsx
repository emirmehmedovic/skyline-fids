import Link from 'next/link'
import { Plane, Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative p-1 rounded-md skyline-gradient">
                <Plane size={20} className="text-white rotate-45" />
              </div>
              <span className="font-bold text-xl">
                Sky<span className="skyline-text-gradient">Line</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Modern, affordable, and intuitive Flight Information Display System designed specifically for smaller airports.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@skyline-fids.com" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  info@skyline-fids.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:+15555555555" className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors">
                  (555) 555-5555
                </a>
              </li>
              <li className="mt-4">
                <Link href="#contact" className="text-primary hover:underline font-medium">
                  Request a Demo →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {year} SkyLine FIDS. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}