"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const faqs: FAQItem[] = [
    {
      question: "Is special training required to use SkyLine?",
      answer: "No, SkyLine is designed with user-friendliness in mind. Our intuitive interface requires minimal training, and we provide comprehensive documentation and support to help your staff get started quickly."
    },
    {
      question: "What hardware is needed for the display screens?",
      answer: "SkyLine works with standard commercial displays connected to a PC, Raspberry Pi, or other display devices. You can use existing screens or we can recommend cost-effective hardware solutions based on your airport's specific needs."
    },
    {
      question: "How does the implementation process work?",
      answer: "Our implementation is straightforward and typically takes only 1-2 weeks. We'll set up the system, configure it for your airport's specific needs, integrate with your data sources, and provide training to your staff. The entire process is designed to minimize disruption to your operations."
    },
    {
      question: "Is there a trial period available?",
      answer: "Yes, we offer a 30-day free trial so you can experience the benefits of SkyLine firsthand. During this period, you'll have access to all features and our support team to ensure you get the most out of the system."
    },
    {
      question: "What kind of support is included?",
      answer: "All SkyLine packages include email and chat support. Our Premium tier includes 24/7 phone support and a dedicated account manager. We also provide regular updates and maintenance to ensure your system remains secure and up-to-date."
    },
    {
      question: "Can SkyLine integrate with our existing airport systems?",
      answer: "Yes, SkyLine is designed to integrate with common airport management systems and data sources. We support standard protocols and can develop custom integrations as needed to ensure a seamless flow of information."
    }
  ]
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about SkyLine FIDS for your small airport
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 