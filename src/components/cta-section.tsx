import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready To Transform Your Online Presence?
            </h2>
            <p className="text-gray-400 mb-6">
              Book a free consultation and discover how we can help you achieve your business goals.
            </p>
            <ul className="list-none text-gray-400 mb-6">
              <li className="mb-2"><span className="mr-2">✅</span> Honest, tailored advice for your business</li>
              <li className="mb-2"><span className="mr-2">✅</span> Custom quote based on your goals</li>
              <li className="mb-2"><span className="mr-2">✅</span> Clear, simple roadmap to launch</li>
            </ul>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md">
              Book Free Consultation
            </Button>
          </div>

          {/* Right Column (Lead Magnet) */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Download Our Free Guide
            </h3>
            <p className="text-gray-400 mb-4">
              "5 Website Mistakes That Cost You Clients"
            </p>
            <form className="space-y-4">
              <Input type="text" placeholder="Name" className="w-full rounded-md" />
              <Input type="email" placeholder="Email" className="w-full rounded-md" />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md w-full">
                Get the Free Guide
              </Button>
            </form>
            <p className="text-gray-500 text-sm mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
