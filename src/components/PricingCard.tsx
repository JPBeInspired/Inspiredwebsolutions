import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PricingCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-2xl font-semibold text-white mb-4">Starter Package</h3>
      <p className="text-gray-300 mb-6">Perfect for new business owners who need a modern, conversion-ready site — fast.</p>
      <div className="mb-8">
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2">
          5–7 days turnaround
        </span>
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2">
          From $499
        </span>
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
          5 pages
        </span>
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 ml-2">
          SEO optimised
        </span>
      </div>
      <Button size="lg" className="bg-brand-500 text-white hover:bg-brand-600 mr-4">
        Get Started for $499
      </Button>
      <Link to="/starter-package">
        <Button variant="outline">
          Browse Template Designs
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;
