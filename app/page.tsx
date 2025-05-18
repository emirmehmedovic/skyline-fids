import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import FAQSection from '@/components/FAQSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <BeforeAfterSection />
      <FeaturesSection />
      <BenefitsSection />
      <CaseStudiesSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}