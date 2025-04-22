import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-white">Inspired</span>
              <span className="text-brand-400"> Web</span>
              <span className="text-white"> Solutions</span>
            </a>
            <p className="text-gray-400 mb-4">
              We design and build custom websites that convert visitors into customers for entrepreneurs, coaches, and small business owners.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email for updates..." 
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-500 pr-10"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-brand-500 hover:text-brand-400">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Starter Package</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Semi-Custom Website</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Premium Custom Website</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Chatbot Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Website Quiz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Free Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Inspired Web Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
