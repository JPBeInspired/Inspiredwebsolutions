import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Mail, MessageSquare } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#0c1c2c]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-sm text-brand-500 bg-brand-50 rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-brand-500">Elevate</span> Your Online Presence?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Fill out the form to schedule a free consultation. We'll discuss your goals, recommend the right package, and outline a clear plan for your project.
            </p>
            
            <div className="space-y-6">
              <Card className="bg-gray-50 border-none hover:bg-gray-100 transition-colors">
                <CardContent className="flex items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-500 flex items-center justify-center mr-4">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Book a Consultation</h3>
                    <p className="text-gray-600">Schedule a 30-minute discovery call</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-50 border-none hover:bg-gray-100 transition-colors">
                <CardContent className="flex items-center p-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-500 flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@inspiredwebsolutions.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-[#111827] rounded-xl shadow-xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#1f2937] text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#1f2937] text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <Input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#1f2937] text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-400 mb-1">Current Website (if any)</label>
                <Input 
                  type="url" 
                  id="website" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#1f2937] text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="https://example.com"
                />
              </div>
              
              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-400 mb-1">Interested In</label>
                <Select>
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#1f2937] text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter ($499-$999)</SelectItem>
                    <SelectItem value="semi-custom">Semi-Custom ($1,500-$3,000)</SelectItem>
                    <SelectItem value="premium">Premium Custom ($5,000+)</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Tell us about your project</label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#1f2937] text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="Share your goals, timeline, and any specific features you're looking for..."
                />
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md">
                Submit Request
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                By submitting, you agree to our <a href="#" className="text-brand-500 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
