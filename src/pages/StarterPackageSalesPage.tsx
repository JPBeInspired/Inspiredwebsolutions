import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Package, Zap, Clock, Smartphone, Search, CreditCard } from 'lucide-react';

const StarterPackageSalesPage = () => {
  const testimonials = [
    {
      quote: "The Starter Package was exactly what my new business needed. Fast turnaround, clean design, and so easy to manage!",
      name: "Sarah Johnson",
      role: "Life Coach",
      stars: 5
    },
    {
      quote: "I was up and running in less than a week. The site looks so professional that clients assume I spent thousands on it.",
      name: "David Chen",
      role: "Financial Consultant",
      stars: 5
    },
    {
      quote: "Perfect solution for my startup. Clean design, easy to update, and it's already bringing in new clients.",
      name: "Emma Roberts",
      role: "Wellness Practitioner",
      stars: 5
    }
  ];

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} size={16} className="fill-blue-400 text-blue-400" />
    ));
  };

  const features = [
    { icon: <Package className="h-6 w-6 text-blue-400" />, title: "High-quality Template", description: "Conversion-focused design that looks premium" },
    { icon: <Search className="h-6 w-6 text-blue-400" />, title: "SEO Optimization", description: "Basic setup to help clients find you" },
    { icon: <Smartphone className="h-6 w-6 text-blue-400" />, title: "Mobile Responsive", description: "Perfect on every device" },
    { icon: <Zap className="h-6 w-6 text-blue-400" />, title: "5 Core Pages", description: "Everything you need to launch" },
    { icon: <CreditCard className="h-6 w-6 text-blue-400" />, title: "Payment Integration", description: "Stripe/PayPal ready" },
    { icon: <Clock className="h-6 w-6 text-blue-400" />, title: "Quick Turnaround", description: "Live in just 5-7 days" }
  ];

  const addOns = [
    { title: "Logo Design", price: "$199", description: "Professional logo design to match your new website" },
    { title: "Copywriting", price: "$299", description: "Conversion-focused copy for your entire website" },
    { title: "Social Media Graphics", price: "$149", description: "Branded graphics for your social platforms" }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-[#0c1c2c]">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="inline-block px-3 py-1 mb-6 text-sm text-blue-400 bg-blue-900/20 rounded-full">
            Starter Website Package
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Online with <span className="text-blue-400">Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A complete, done-for-you website built in 7 days — perfect for small businesses ready to launch.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="inline-block bg-gray-800 rounded-full px-4 py-2 text-sm font-semibold text-gray-300">
              <Clock size={16} className="inline mr-2" /> 5–7 days turnaround
            </span>
            <span className="inline-block bg-gray-800 rounded-full px-4 py-2 text-sm font-semibold text-gray-300">
              <CreditCard size={16} className="inline mr-2" /> From $499
            </span>
            <span className="inline-block bg-gray-800 rounded-full px-4 py-2 text-sm font-semibold text-gray-300">
              <Package size={16} className="inline mr-2" /> 5 pages
            </span>
            <span className="inline-block bg-gray-800 rounded-full px-4 py-2 text-sm font-semibold text-gray-300">
              <Search size={16} className="inline mr-2" /> SEO optimised
            </span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600">
              Get Started Now <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
              View Demo
            </Button>
          </div>
          <div className="relative mt-16 mb-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-1">
              <div className="bg-gray-900 rounded-lg p-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Website Mockup" 
                  className="rounded shadow-2xl shadow-blue-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm text-blue-400 bg-blue-900/20 rounded-full">
              Everything You Need
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What's <span className="text-blue-400">Included</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              No coding. No stress. Just a professional, polished site ready to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-800/30 border border-gray-700 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">Every Starter Package includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "High-quality, conversion-focused template",
                "Basic SEO optimization",
                "Mobile responsiveness",
                "Up to 5 pages",
                "Stripe/PayPal integration",
                "CMS for easy self-updates",
                "Perfect for early-stage businesses",
                "30 days of support"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Package Works */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0c1c2c]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm text-blue-400 bg-blue-900/20 rounded-full">
              Smart Investment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why This Package <span className="text-blue-400">Works</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The perfect balance of quality, speed, and affordability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Cost-effective without compromising quality</h3>
              <p className="text-gray-400 mb-4">
                Get a professional website at a fraction of the cost of custom development, without sacrificing the quality and professionalism your business deserves.
              </p>
              <div className="flex items-center">
                <Check className="text-blue-400 mr-2" />
                <span className="text-gray-300">Save thousands compared to custom development</span>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Built using high-performing frameworks</h3>
              <p className="text-gray-400 mb-4">
                We use the same professional-grade frameworks and technologies that power enterprise websites, optimized for speed and conversion.
              </p>
              <div className="flex items-center">
                <Check className="text-blue-400 mr-2" />
                <span className="text-gray-300">Enterprise-grade technology, simplified</span>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Designed to grow with your business</h3>
              <p className="text-gray-400 mb-4">
                Your Starter Package website is built with scalability in mind, allowing you to expand features and functionality as your business grows.
              </p>
              <div className="flex items-center">
                <Check className="text-blue-400 mr-2" />
                <span className="text-gray-300">Flexible foundation for future growth</span>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Easily upgradable to full custom</h3>
              <p className="text-gray-400 mb-4">
                Start with our Starter Package now, and seamlessly upgrade to a fully custom solution later as your business needs evolve.
              </p>
              <div className="flex items-center">
                <Check className="text-blue-400 mr-2" />
                <span className="text-gray-300">Future-proof your digital investment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm text-blue-400 bg-blue-900/20 rounded-full">
              Client Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="text-blue-400">Clients</span> Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real feedback from business owners just like you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <div className="flex mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#0c1c2c]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm text-blue-400 bg-blue-900/20 rounded-full">
              Simple Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Affordable <span className="text-blue-400">Investment</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get your professional website at a fraction of custom development costs
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Starter Website Package</h3>
                <p className="text-gray-400">Complete, done-for-you website in 5-7 days</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-3xl font-bold text-blue-400">$499-$999</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "High-quality template design",
                "Up to 5 core pages",
                "Mobile responsive",
                "Basic SEO setup",
                "Payment integration",
                "Content management system",
                "30 days of support",
                "Training session included"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-900/20 rounded-lg p-4 mb-8 border border-blue-500/30">
              <p className="text-blue-300 font-medium">
                <Clock className="inline-block mr-2" /> Limited spots available this month. Secure yours today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600">
                Book a Free Discovery Call
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
                Secure Your Spot Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Add-On Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm text-blue-400 bg-blue-900/20 rounded-full">
              Enhance Your Package
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Optional <span className="text-blue-400">Add-Ons</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Customize your package with these powerful enhancements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">{addon.title}</h3>
                <p className="text-blue-400 font-bold mb-4">{addon.price}</p>
                <p className="text-gray-400 mb-6">{addon.description}</p>
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                  Add to Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#0c1c2c] to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You only launch once — let's make your business look <span className="text-blue-400">great online</span>.
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the hundreds of small businesses who've launched with confidence using our Starter Website Package.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600">
              Get Started Today <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
              Need Help Choosing?
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-800 p-4 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="hidden md:block">
            <p className="font-semibold text-white">Starter Website Package</p>
            <p className="text-sm text-gray-400">From $499 • 5-7 days delivery</p>
          </div>
          <div className="flex gap-4">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Get Started Now
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterPackageSalesPage;
