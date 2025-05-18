import { 
  Clock, 
  Palette, 
  Cloud, 
  Shield, 
  Globe, 
  BarChart3 
} from 'lucide-react'
import { cn } from '@/lib/utils'

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden group",
        index % 2 === 0 ? "lg:translate-y-4" : ""
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 skyline-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
      <div className="w-12 h-12 skyline-gradient rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {
  const features = [
    {
      icon: <Clock className="text-white" size={24} />,
      title: "Real-Time Flight Updates",
      description: "Instantly display changes in flight statuses, gate assignments, and times, ensuring accurate information for passengers."
    },
    {
      icon: <Palette className="text-white" size={24} />,
      title: "Customizable Display Layouts",
      description: "Easily tailor screen layouts and content to your airport's branding and specific information needs."
    },
    {
      icon: <Cloud className="text-white" size={24} />,
      title: "Cloud-Based Management",
      description: "Access and manage your FIDS from any device, anywhere, anytime, eliminating the need for local servers."
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: "Reliable & Secure Platform",
      description: "Built on modern, robust technology, SkyLine ensures stable operation and the security of your airport data."
    },
    {
      icon: <Globe className="text-white" size={24} />,
      title: "Multi-Language Support",
      description: "Provide flight information in multiple languages to enhance the experience for international passengers."
    },
    {
      icon: <BarChart3 className="text-white" size={24} />,
      title: "Basic Reporting & Analytics",
      description: "Track essential metrics and generate simple reports for better insights into your flight display operations."
    }
  ]
  
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core FIDS Features, Built for Efficiency at Small Airports
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            SkyLine offers a robust set of features, carefully selected for effective flight information 
            management without overwhelming smaller airport teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}