import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Inspired Web Solutions transformed our online presence. Our new website not only looks beautiful but has increased our conversion rate by 215%.",
      name: "Sarah Johnson",
      role: "Founder, Mindful Coaching",
      stars: 5
    },
    {
      quote: "The semi-custom package was perfect for our needs. Professional, strategic, and delivered on time. Our clients constantly compliment our website!",
      name: "David Chen",
      role: "CEO, Growth Financial",
      stars: 5
    },
    {
      quote: "We started with the Starter Package and were so impressed that we upgraded to Semi-Custom six months later. Best investment we've made in our business.",
      name: "Emma Roberts",
      role: "Owner, Wellness Simplified",
      stars: 5
    },
    {
      quote: "Another great testimonial here.",
      name: "John Doe",
      role: "Developer",
      stars: 4
    },
    {
      quote: "And yet another testimonial to fill the space.",
      name: "Jane Smith",
      role: "Designer",
      stars: 5
    }
  ];

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
    ));
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollPosition = 0;
    let animationId;

    const scrollAmount = 0.5;

    const scroll = () => {
      if (container) {
        scrollPosition += scrollAmount;
        if (scrollPosition > container.scrollWidth - container.clientWidth) {
          scrollPosition = 0;
        }
        container.scrollTo({ left: scrollPosition, top: 0, behavior: 'smooth' });
        animationId = requestAnimationFrame(scroll);
      }
    };

    const startScroll = () => {
      if (!animationId) {
        animationId = requestAnimationFrame(scroll);
      }
    };

    const stopScroll = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    if (container) {
      container.addEventListener('mouseenter', stopScroll);
      container.addEventListener('mouseleave', startScroll);
      startScroll();
    }

    return () => {
      stopScroll();
      if (container) {
        container.removeEventListener('mouseenter', stopScroll);
        container.removeEventListener('mouseleave', startScroll);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-[#0c1c2c]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 mb-4 text-sm text-blue-400 bg-blue-900/20 rounded-full">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-blue-400">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-400">
            Real feedback from business owners just like you.
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div
            ref={containerRef}
            className="flex gap-6 min-w-full w-max"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 sm:w-96 bg-[#111827] text-white rounded-2xl border border-slate-700 shadow-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-6 w-6 text-blue-400 mb-2" />
                  <div className="flex">
                    {renderStars(testimonial.stars)}
                  </div>
                  <p className="text-gray-300 italic break-words leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
