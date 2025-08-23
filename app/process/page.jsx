"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Presentation,
  MessageCircle,
  Notebook,
  Smartphone,
  Settings,
  Shield,
  Megaphone,
  Lightbulb,
  Target,
  Globe,
  Award
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Process() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad',
    });
  }, []);

  const processSteps = [
    {
      icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />,
      title: "MEETING",
      description: "Let's talk business. We are keen about knowing more about your vision and actual requirements. Our vast experience and technical expertise helps us meet and exceed your expectations.",
      image: "/process/meeting.jpg",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Notebook className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />,
      title: "DISCOVERY",
      description: "We walk the extra mile to find out how our expertise can be used to the client's benefit. Suggesting the right technological solutions that will meet requirements hands down comes to us naturally.",
      image: "/process/discovery.jpg",
      bgColor: "bg-white"
    },
    {
      icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-green-600" />,
      title: "UX / UI",
      description: "Our UX/UI developers blend art with technology to create captivating apps that redefine user experience flawlessly with creativity and future trend intuition.",
      image: "/process/uiux.jpg",
      bgColor: "bg-green-50"
    },
    {
      icon: <Settings className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />,
      title: "DEVELOPMENT",
      description: "We help businesses shoot for runaway success with awesome services developed with great expertise. Our engineers create applications that excite customers.",
      image: "/process/development.jpg",
      bgColor: "bg-orange-50"
    },
    {
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-red-600" />,
      title: "TESTING",
      description: "Good coding becomes perfect with rigorous testing. Our QA process eliminates every single bug and error that can creep in unexpectedly.",
      image: "/process/testing.jpg",
      bgColor: "bg-red-50"
    },
    {
      icon: <Megaphone className="w-8 h-8 md:w-10 md:h-10 text-indigo-600" />,
      title: "DEPLOYMENT",
      description: "From play stores to iTunes and web applications, we ensure that your apps are deployed in the right form, in the right platform where they will gain momentum.",
      image: "/process/deployment.jpg",
      bgColor: "bg-indigo-50"
    },
     {
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-indigo-600" />,
      title: "Support & Maintenance",
      description: "We offer ongoing support and maintenance services to ensure your apps are always running smoothly and up-to-date with the latest features and bug fixes.",
      image: "/process/support.jpg",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
     
    {/* Hero Section */}
<section className="pt-12 md:pt-20 lg:pt-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-100 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      {/* Content Section - Creative Layout */}
      <div className="w-full lg:w-1/2" data-aos="fade-right">
        <div className="relative mb-8">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200/30 rounded-lg -z-10 rotate-12"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-200/30 rounded-lg -z-10 -rotate-12"></div>
          
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm font-semibold py-2 px-4 border border-blue-200/50 shadow-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            OUR METHODOLOGY
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crafting Digital <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up">
            We listen, respond and initiate action to meet client requirements. Our professional IT services help clients of all sizes and types reach for excellence.
          </p>
        </div>

        {/* Stats in creative layout */}
        <div className="grid grid-cols-2 gap-6 mb-8" data-aos="zoom-in">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">100%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">7 Steps</div>
            <div className="text-sm text-gray-600">Proven Process</div>
          </div>
        </div>
      </div>

      {/* Visual Section - Creative Layout */}
      <div className="w-full lg:w-1/2" data-aos="fade-left">
        <div className="relative">
          {/* Main image with creative frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 z-10"></div>
            <img 
              src="/process/process_hero.jpg" 
              alt="PickZy process" 
              className="w-full h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100 animate-float">
            <MessageCircle className="w-6 h-6 text-blue-600" />
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100 animate-float animation-delay-1000">
            <Settings className="w-6 h-6 text-purple-600" />
          </div>
          
          {/* Decorative element */}
          <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-blue-100/50 rounded-full"></div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="flex justify-center mt-12 md:mt-16" data-aos="fade-up">
      <div className="animate-bounce flex flex-col items-center">
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>

  {/* Add CSS for animations */}
  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animation-delay-1000 {
      animation-delay: 1s;
    }
  `}</style>
</section>

      {/* Process Steps */}
      <section className="py-8 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span> Steps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures quality, efficiency, and client satisfaction at every stage.
            </p>
          </div>
          
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12 ${step.bgColor} p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl shadow-lg`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* Content */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="inline-flex items-center justify-center p-2 md:p-3 bg-white rounded-full shadow-md mb-4 md:mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Image */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-xl h-48 sm:h-56 md:h-64 lg:h-72 w-full">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision for Process */}
      <section className="py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-up">
            <Card className="p-8 border-0 shadow-lg" data-aos="flip-left">
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Process Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional software solutions through a structured, transparent process that ensures client satisfaction at every stage.
                </p>
              </div>
            </Card>
            <Card className="p-8 border-0 shadow-lg" data-aos="flip-right">
              <div className="text-center">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Process Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To continuously refine our development methodology to stay at the forefront of technology innovation and delivery excellence.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
         <h2 
        className="text-3xl md:text-4xl font-bold mb-6"
        data-aos="fade-down"
          
      >
        Ready to Work with Us?
      </h2>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" data-aos="fade-down">
            Our Passion is <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">TO MAKE IDEAS HAPPEN</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
            We ensure your ideas become blockbusters in the digital community. Get in touch with us to know more about pricing and commercials.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            asChild
            data-aos="zoom-in"
          >
            <Link href="/contact-us">
              GET IN TOUCH
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}