import React from 'react';
import { CheckCircle, Zap, BarChart, Code, Layout, Search } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl bg-secondary border border-border hover:border-primary transition-colors duration-200">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center text-brand-500 mb-5">
        <Icon size={24} className="text-brand-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "AI Chatbot Integration",
      description: "Smart, branded AI assistant that welcomes users, recommends services, answers FAQs, and books discovery calls."
    },
    {
      icon: Layout,
      title: "Template Library Showcase",
      description: "Browse and preview beautiful, proven website templates with demo links and feature breakdowns."
    },
    {
      icon: BarChart,
      title: "Results-Based Case Studies",
      description: "Before/after screenshots, traffic gains, and client stories showing measurable ROI for your business."
    },
    {
      icon: Zap,
      title: "Interactive Quiz Funnel",
      description: "Help visitors self-select into the right package based on their goals and stage in business."
    },
    {
      icon: Search,
      title: "SEO & Performance Optimization",
      description: "Proper tag structure, meta titles, fast loading, image compression, and built-in analytics."
    },
    {
      icon: Code,
      title: "Clean, High-Performing Code",
      description: "Websites built with modern technologies that ensure speed, security, and seamless functionality."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm text-brand-400 bg-secondary rounded-full">
            Additional Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need To <span className="text-brand-400">Succeed</span> Online
          </h2>
          <p className="text-lg text-muted-foreground">
            Our websites come packed with features designed to help you convert visitors into customers and grow your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
