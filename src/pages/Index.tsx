import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PackagesSection from "@/components/packages-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PortfolioSection from "@/components/portfolio-section";
import ProcessSection from "@/components/process-section";
import CTASection from "@/components/cta-section";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PortfolioSection />
      <PackagesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
