import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackageCard = ({ 
  title, 
  price, 
  timeline, 
  description, 
  features, 
  isPopular = false,
  ctaText = "Get Started",
  ctaLink = "#"
}) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border-gray-800 ${
      isPopular ? 'border-brand-500 shadow-lg shadow-brand-500/20' : 'hover:border-gray-700'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex flex-col items-start">
          <span className="text-xl md:text-2xl font-bold text-white">{title}</span>
          <span className="mt-3 text-2xl md:text-3xl font-bold text-brand-400">{price}</span>
        </CardTitle>
        <CardDescription className="mt-2 text-gray-400">
          {timeline} • {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group">
              <span className="mr-2 mt-1 text-brand-400">
                <Check size={16} className="flex-shrink-0" />
              </span>
              <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to={ctaLink} className="w-full">
          <Button 
            className={`w-full ${
              isPopular 
                ? 'bg-brand-500 hover:bg-brand-600 text-white' 
                : 'bg-gray-800 hover:bg-gray-700 text-white'
            }`}
          >
            {ctaText} <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const PackagesSection = () => {
  const packages = [
    {
      title: "Starter",
      price: "$499-$999",
      timeline: "5-7 days",
      description: "Done-for-you with your content",
      features: [
        "High-quality, conversion-focused template",
        "Basic SEO optimization",
        "Mobile optimization",
        "Up to 5 pages",
        "Perfect for early-stage businesses",
        "Stripe/PayPal integration",
        "CMS for easy updates"
      ],
      isPopular: false,
      ctaText: "See More",
      ctaLink: "/starter-package"
    },
    {
      title: "Semi-Custom Website",
      price: "$1,500-$3,000",
      timeline: "1-2 weeks",
      description: "Tailored to your brand",
      features: [
        "Customization of high-performing framework",
        "Styled with your branding",
        "Tailored sections and features",
        "Enhanced SEO strategy",
        "Complete responsive design",
        "Ideal for growing businesses",
        "Maintenance & support options"
      ],
      isPopular: true,
      ctaText: "Get Started",
      ctaLink: "#"
    },
    {
      title: "Premium Custom",
      price: "$5,000+",
      timeline: "4-6 weeks",
      description: "Complete bespoke experience",
      features: [
        "Completely bespoke design",
        "In-depth strategy & UX planning",
        "Professional copywriting",
        "Advanced SEO implementation",
        "Animation & interactive elements",
        "Position at top of your market",
        "Premium support & maintenance"
      ],
      isPopular: false,
      ctaText: "Book Consultation",
      ctaLink: "#"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-900/30 backdrop-blur-sm border-y border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your <span className="text-brand-400">Perfect</span> Website Package
          </h2>
          <p className="text-lg text-gray-400">
            Select from our three core tiers, each designed to meet different business needs and stages of growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Not sure which package is right for you?</p>
          <Link to="/starter-package">
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
