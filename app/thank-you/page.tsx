import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowLeft, FileText, CalendarClock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-20 relative overflow-hidden">
        <div className="absolute inset-0 skyline-main-gradient opacity-5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full skyline-main-gradient mb-6">
              <CheckCircle size={40} className="text-white" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We've received your request and will contact you within 24 hours to schedule your personalized SkyLine FIDS demo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <CalendarClock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-medium mb-2">Next Steps</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team will reach out to schedule a demo at your convenience
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">Check Your Email</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We've sent you a confirmation email with more details
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-medium mb-2">Browse Resources</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore our guides and case studies while you wait
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" passHref>
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft size={16} />
                  Return to Home
                </Button>
              </Link>
              
              <Link href="/resources" passHref>
                <Button className="skyline-main-gradient text-white hover:opacity-90 transition-opacity">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 