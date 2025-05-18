"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function CTASection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    airport: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.airport) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
    
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll contact you shortly.",
    })
    
    setFormSubmitted(true)
  }
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      airport: '',
      message: ''
    })
    setFormSubmitted(false)
  }
  
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 skyline-main-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Small Airport's FIDS?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              See firsthand how SkyLine can revolutionize flight information display at your airport. 
              Our team is ready to answer your questions and show you the benefits.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-8">
              <h3 className="font-bold text-xl mb-2">What happens after you contact us?</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full skyline-main-gradient text-white flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                  <p>Our team will reach out within 24 hours to schedule your demo</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full skyline-main-gradient text-white flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                  <p>We'll customize the demo to showcase features relevant to your airport</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full skyline-main-gradient text-white flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                  <p>You'll receive a custom quote based on your specific needs</p>
                </li>
              </ol>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="font-medium">Or, contact us directly:</div>
              <a href="mailto:sales@skyline-fids.com" className="text-primary hover:underline">
                sales@skyline-fids.com
              </a>
              <div className="text-gray-300 dark:text-gray-600">|</div>
              <a href="tel:+15555555555" className="text-primary hover:underline">
                (555) 555-5555
              </a>
            </div>
          </div>
          
          <div>
            {!formSubmitted ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6">Schedule a Personalized Demo</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="airport" className="block text-sm font-medium mb-1">
                      Airport Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="airport"
                      name="airport"
                      value={formData.airport}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Regional Airport Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell us about your specific requirements..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full skyline-main-gradient text-white hover:opacity-90 transition-opacity py-6 flex items-center justify-center gap-2"
                  >
                    Schedule Demo
                    <Send size={16} />
                  </Button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>.
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full skyline-main-gradient mb-4">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    We've received your request and will contact you within 24 hours to schedule your personalized demo.
                  </p>
                  
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mb-6">
                    <h4 className="font-medium mb-2">What to expect next:</h4>
                    <ul className="text-left text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Email confirmation (check your inbox or spam folder)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Call from our sales team within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Demo session scheduled at your convenience</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    While you wait, feel free to explore our resources or schedule another demo for a colleague.
                  </p>
                  
                  <Button 
                    onClick={resetForm}
                    className="skyline-main-gradient text-white hover:opacity-90 transition-opacity"
                  >
                    Schedule Another Demo
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}