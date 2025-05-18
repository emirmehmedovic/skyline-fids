import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      type: 'guide',
      title: 'Complete Guide to Modern FIDS Implementation',
      description: 'Learn everything you need to know about implementing a modern Flight Information Display System in small to medium airports.',
      icon: BookOpen,
      cta: 'Read Guide'
    },
    {
      type: 'guide',
      title: 'Hardware Requirements for SkyLine FIDS',
      description: 'Discover the minimum and recommended hardware specifications to run SkyLine FIDS efficiently at your airport.',
      icon: BookOpen,
      cta: 'Read Guide'
    },
    {
      type: 'blog',
      title: 'How Regional Airports Benefit from Modern FIDS',
      description: 'Explore the tangible benefits that small and regional airports experience when upgrading to a modern FIDS solution.',
      icon: FileText,
      cta: 'Read Article'
    },
    {
      type: 'blog',
      title: 'Maximizing ROI with SkyLine FIDS',
      description: 'Learn strategies for maximizing your return on investment when implementing SkyLine FIDS at your airport.',
      icon: FileText,
      cta: 'Read Article'
    },
    {
      type: 'guide',
      title: 'SkyLine FIDS Integration Guide',
      description: 'Step-by-step instructions for integrating SkyLine FIDS with your existing airport management systems.',
      icon: BookOpen,
      cta: 'Read Guide'
    },
    {
      type: 'blog',
      title: "Future of FIDS Technology: What's Next",
      description: 'Explore emerging trends and future developments in Flight Information Display System technology.',
      icon: FileText,
      cta: 'Read Article'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">SkyLine Resources</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our collection of guides, articles, and case studies to learn more about 
              SkyLine FIDS and how it can transform your airport's information displays.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col"
              >
                <div className={`p-3 ${resource.type === 'guide' ? 'skyline-main-gradient' : 'bg-blue-500'} text-white`}>
                  <div className="inline-flex items-center">
                    <resource.icon className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">
                      {resource.type === 'guide' ? 'Guide' : 'Blog Post'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="font-bold text-xl mb-3">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    {resource.description}
                  </p>
                  
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    {resource.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg mb-4">Don't see what you're looking for?</p>
            <Link 
              href="/contact" 
              className="skyline-main-gradient inline-flex items-center px-6 py-3 rounded-lg text-white font-medium"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 