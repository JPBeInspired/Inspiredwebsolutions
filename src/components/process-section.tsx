import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="flex group">
      <div className="mr-6 flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full bg-brand-100 text-brand-500 flex items-center justify-center font-bold group-hover:bg-brand-500 group-hover:text-white transition-colors`}>
          {number}
        </div>
        {number < 3 && <div className="w-0.5 h-full bg-border mt-4"></div>}
      </div>
      <div className="pb-12">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-500 transition-colors text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and competitors to develop a strategic plan for your website."
    },
    {
      number: 2,
      title: "Design & Content",
      description: "Our team creates a beautiful, conversion-focused design and helps you develop compelling content that speaks to your audience."
    },
    {
      number: 3,
      title: "Development & Testing",
      description: "We build your website with clean code and test it thoroughly across all devices to ensure perfect functionality."
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 mb-4 text-sm text-brand-400 bg-secondary rounded-full">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-brand-400">Transform</span> Your Online Presence
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mt-8">
              {steps.map((step) => (
                <ProcessStep key={step.number} {...step} />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl bg-secondary aspect-video flex items-center justify-center group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200" 
                alt="Team working on web design" 
                className="w-full h-full object-cover opacity-75 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30 hover:text-white">
                  <PlayCircle size={24} className="mr-2" />
                  Watch Our Process
                </Button>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-xl max-w-xs border border-border">
              <p className="text-muted-foreground font-medium italic">
                "Working with Inspired Web Solutions transformed our online presence and doubled our leads within just one month!"
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-muted mr-3"></div>
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, Mindful Coaching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
