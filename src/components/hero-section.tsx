import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Dark mode background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-900 to-gray-950"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-900/40 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-800/30 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="inline-block px-3 py-1 mb-4 text-sm text-blue-400 bg-blue-900/50 rounded-full">
              Premium Website Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
              Websites That <span className="text-brand-500">Convert</span> — Built With Strategy
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Custom, semi-custom, and pre-built websites for entrepreneurs, coaches, and small businesses 
              that look like a $20K agency build but are more accessible and strategic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#packages" className="flex items-center gap-2">
                  View Packages <ArrowRight size={16} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white/10">
                <a href="#quiz" className="flex items-center gap-2">
                  Take The Quiz
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs font-medium text-white">JM</div>
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-gray-800 flex items-center justify-center text-xs font-medium text-white">KL</div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-gray-800 flex items-center justify-center text-xs font-medium text-white">RS</div>
              </div>
              <p className="text-sm text-gray-300">Trusted by <span className="font-semibold">100+</span> businesses</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 opacity-20 blur-xl"></div>
            <div className="relative bg-gray-800 p-2 rounded-xl shadow-2xl animate-float">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?auto=format&fit=crop&q=80&w=2000" 
                  alt="Website design showcase" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-white">300% increase in leads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
