import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "dark:bg-black/70 dark:backdrop-blur-md dark:border-b dark:border-white/10 bg-white/95 backdrop-blur-sm shadow-md py-3" 
        : "bg-transparent dark:bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          <span className="text-black dark:text-white">Inspired</span>
          <span className="text-brand-500"> Web</span>
          <span className="text-black dark:text-white"> Solutions</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">Services</a>
          <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">Portfolio</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">About</a>
          <a href="#process" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">Process</a>
          <a href="#quiz" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors">Quiz</a>
          <Button 
            variant="default" 
            className="bg-brand-500 text-white hover:bg-brand-600"
          >
            <a href="#contact">Get Started</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-700 dark:text-gray-300 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white dark:bg-black/90 w-full absolute transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "max-h-96 opacity-100 shadow-md" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#services" className="text-gray-700 dark:text-gray-300 py-2 hover:text-brand-500 transition-colors" onClick={toggleMobileMenu}>Services</a>
          <a href="#portfolio" className="text-gray-700 dark:text-gray-300 py-2 hover:text-brand-500 transition-colors" onClick={toggleMobileMenu}>Portfolio</a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 py-2 hover:text-brand-500 transition-colors" onClick={toggleMobileMenu}>About</a>
          <a href="#process" className="text-gray-700 dark:text-gray-300 py-2 hover:text-brand-500 transition-colors" onClick={toggleMobileMenu}>Process</a>
          <a href="#quiz" className="text-gray-700 dark:text-gray-300 py-2 hover:text-brand-500 transition-colors" onClick={toggleMobileMenu}>Quiz</a>
          <Button 
            variant="default" 
            className="w-full bg-brand-500 text-white hover:bg-brand-600"
            onClick={toggleMobileMenu}
          >
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
