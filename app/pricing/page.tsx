"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">SkyLine FIDS: Transparent Pricing for Lasting Value</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Invest once in a SkyLine license and secure a modern FIDS solution for your airport, backed by continuous support and innovation through our annual maintenance plan. All our packages come with unlimited screen displays, giving you complete flexibility in how you present flight information.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">How Does Our Pricing Model Work?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 border border-white/10 dark:border-white/5 shadow-xl backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">One-Time Software License Purchase</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You pay a one-time fee for your chosen SkyLine package, granting you a perpetual license to use the software.
                </p>
              </div>
              <div className="glass-card p-6 border border-white/10 dark:border-white/5 shadow-xl backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Annual Maintenance and Support</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The first year of maintenance, updates, and support is included in your license fee. Starting from the second year, an annual fee ensures your system stays current with the latest features, security enhancements, and provides access to our support team.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Packages */}
          <h2 className="text-2xl font-bold mb-8 text-center">Choose the Perfect Package for Your Airport</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Essential Package */}
            <div className="glass-card p-6 border border-white/10 dark:border-white/5 shadow-xl backdrop-blur-sm rounded-xl relative overflow-hidden flex flex-col">
              <div className="absolute -top-6 -right-6 w-20 h-20 skyline-main-gradient rounded-full blur-xl opacity-30"></div>
              
              <h3 className="text-xl font-bold mb-2">SkyLine Essential</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Perfect for very small airports needing a reliable and straightforward FIDS solution for basic requirements.
              </p>
              
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">€3,850</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">One-Time License Fee</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  + €280/year maintenance
                  <br />
                  <span className="text-green-600 dark:text-green-400">(First year included)</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Unlimited screen displays</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Basic departures and arrivals display</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Manual flight information entry and updates</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Standard flight statuses</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Selection of basic display templates</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>1 administrator account</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Basic advertising module</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Email support during business hours</span>
                </div>
              </div>
              
              <Button className="w-full border border-gray-300/50 dark:border-gray-700/50">
                Request a Quote
              </Button>
            </div>
            
            {/* Professional Package */}
            <div className="glass-card p-6 border border-primary/20 dark:border-primary/30 shadow-xl backdrop-blur-sm rounded-xl relative overflow-hidden flex flex-col transform scale-105 z-10">
              <div className="absolute -top-6 -right-6 w-24 h-24 skyline-main-gradient rounded-full blur-xl opacity-40"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 skyline-main-gradient rounded-full blur-xl opacity-30"></div>
              
              <div className="absolute top-0 right-0 px-3 py-1 skyline-main-gradient text-white text-xs font-medium rounded-bl-lg rounded-tr-xl">Most Popular</div>
              
              <h3 className="text-xl font-bold mb-2">SkyLine Professional</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The best choice for most smaller airports looking for advanced FIDS functionalities and the ability to effectively monetize screens through advertising.
              </p>
              
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">€5,200</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">One-Time License Fee</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  + €750/year maintenance
                  <br />
                  <span className="text-green-600 dark:text-green-400">(First year included)</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>All features from the Essential package</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Up to 5 administrator accounts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Advanced layout customization</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Standard advertising module with more options</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Multi-language support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Basic FIDS operational analytics</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Priority email and chat support</span>
                </div>
              </div>
              
              <Button className="w-full skyline-main-gradient text-white">
                Most Popular Choice
              </Button>
            </div>
            
            {/* Premium Package */}
            <div className="glass-card p-6 border border-white/10 dark:border-white/5 shadow-xl backdrop-blur-sm rounded-xl relative overflow-hidden flex flex-col">
              <div className="absolute -top-6 -right-6 w-20 h-20 skyline-main-gradient rounded-full blur-xl opacity-30"></div>
              
              <h3 className="text-xl font-bold mb-2">SkyLine Premium</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A comprehensive solution for smaller airports with higher traffic or specific requirements for full control, advanced advertising, and integrations.
              </p>
              
              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">€7,500</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">One-Time License Fee</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  + €1,350/year maintenance
                  <br />
                  <span className="text-green-600 dark:text-green-400">(First year included)</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>All features from the Professional package</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Up to 10 administrator accounts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Full control over display template design</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Advanced advertising module</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Basic API access for automated flight data input</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Advanced analytics and custom reports</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Phone support and dedicated account manager</span>
                </div>
              </div>
              
              <Button className="w-full border border-gray-300/50 dark:border-gray-700/50">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Why Maintenance is Important */}
          <div className="glass-card p-8 border border-white/10 dark:border-white/5 shadow-xl backdrop-blur-sm rounded-xl mb-16 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 skyline-main-gradient rounded-full blur-3xl opacity-20"></div>
            
            <h2 className="text-2xl font-bold mb-6">Why is Annual Maintenance Important for Your SkyLine FIDS?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our annual maintenance fee isn't just an expense – it's an investment in the long-term reliability and advancement of your system. With active maintenance, you receive:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Continuous Updates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Access to all the latest features, performance improvements, and user interface enhancements.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Security Patches</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Protection for your system against potential threats.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Expert Technical Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our team is here to assist you with any questions or issues.
                </p>
              </div>
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Compatibility</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We ensure SkyLine remains compatible with changes in the technological landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-br from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 p-10 rounded-xl shadow-xl mb-16">
            <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your Airport with SkyLine FIDS?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right package for your needs and answer all your questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button className="skyline-main-gradient text-white flex items-center gap-2 hover:opacity-90 transition-all px-6 py-6 shadow-lg hover:shadow-xl">
                Request a Personalized Quote
                <ArrowRight size={16} />
              </Button>
              <Button variant="outline" className="border border-gray-300/50 dark:border-gray-700/50">
                Consult with Our Experts
              </Button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400">
              Have questions? Call us at <span className="font-medium">+1 (555) 123-4567</span> or email us at <span className="font-medium">info@skyline-fids.com</span>
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6 border border-white/10 dark:border-white/5 shadow-md backdrop-blur-sm rounded-xl">
                <h3 className="text-lg font-semibold mb-2">What happens if I don't renew my annual maintenance?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your SkyLine license is perpetual, so you can continue using the software version you purchased. However, you will not have access to new updates, features, security patches, or technical support from our team. We highly recommend keeping your maintenance active for optimal performance and security.
                </p>
              </div>
              
              <div className="glass-card p-6 border border-white/10 dark:border-white/5 shadow-md backdrop-blur-sm rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Is there a limit to the number of screens I can use?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No, all our SkyLine packages allow for the use of an unlimited number of FIDS screens. Limitations only apply to the available features within your chosen package.
                </p>
              </div>
              
              <div className="glass-card p-6 border border-white/10 dark:border-white/5 shadow-md backdrop-blur-sm rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Is the first year of maintenance truly at no extra cost?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  That's correct. The price of your one-time license includes the first year of maintenance, support, and all updates. The annual maintenance fee is only billed starting from the second year of use.
                </p>
              </div>
              
              <div className="glass-card p-6 border border-white/10 dark:border-white/5 shadow-md backdrop-blur-sm rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Can I upgrade to a higher package later?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, if your needs grow, you can upgrade your license to a higher package. Please contact us for details on the upgrade process and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 