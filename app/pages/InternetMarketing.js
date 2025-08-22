"use client";

import { Search, BarChart2, Mail, TrendingUp, Users, Target, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function InternetMarketing() {
  const services = [
    {
      icon: <Search className="h-6 w-6 text-blue-600" />,
      title: "Search Engine Optimization (SEO)",
      description: "Boost your website ranking and traffic with on-page, off-page, and technical SEO."
    },
    {
      icon: <Target className="h-6 w-6 text-red-600" />,
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Drive instant traffic with ROI-focused ad campaigns across Google, Bing & Meta Ads."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: "Social Media Marketing (SMM)",
      description: "Build a loyal audience with engaging content, influencer collabs, and brand campaigns."
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Content Marketing",
      description: "Attract and convert leads through blogs, videos, infographics, and lead magnets."
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-600" />,
      title: "Email Marketing",
      description: "Retain customers and nurture leads with automated, personalized campaigns."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-yellow-600" />,
      title: "Conversion Rate Optimization (CRO)",
      description: "Turn more visitors into customers through A/B testing and behavior insights."
    }
  ];

  const processSteps = [
    {
      title: "Strategy & Audit",
      description: "Analyze your current presence & competitors"
    },
    {
      title: "Planning",
      description: "Create a custom marketing plan aligned to your goals"
    },
    {
      title: "Execution",
      description: "Launch campaigns, track performance, and optimize"
    },
    {
      title: "Reporting",
      description: "Transparent, detailed performance reports every month"
    }
  ];

  const tools = [
    { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/F4B400"},
    { name: "SEMrush", logo: "https://cdn.simpleicons.org/semrush/FF642D" },
    { name: "Meta Business Suite", logo: "https://cdn.simpleicons.org/meta/0866FF" },
    { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/FFE01B" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/7AB55C" },
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" }
  ];

  const industries = [
    "eCommerce & Retail",
    "Education & eLearning",
    "Healthcare & Clinics",
    "Real Estate & Property",
    "SaaS & IT Services",
    "Local Businesses"
  ];

  const testimonials = [
    {
      quote: "Our traffic increased by 300% in just 6 months with their SEO strategy.",
      name: "Sarah Johnson",
      company: "EcoFashion"
    },
    {
      quote: "They cut our customer acquisition cost in half while doubling conversions.",
      name: "Michael Tan",
      company: "TechSolutions"
    },
    {
      quote: "The social media campaigns delivered 5x ROI in the first quarter.",
      name: "Lisa Rodriguez",
      company: "HealthPlus"
    }
  ];

  const benefits = [
    "100% Transparent Reporting",
    "Data-Driven Strategies",
    "ROI-Focused Campaigns",
    "Experienced Digital Team",
    "Dedicated Account Manager",
    "On-Time Delivery"
  ];

  return (
    <div className="min-h-screen bg-white">
       
      
      {/* Hero Section */}
      <section className="relative  pt-8 pb-12 md:pb-16 md:pt-32 md:pb-28 bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/patterns/subtle-pattern.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              {/* Trust badge with glass effect */}
              <div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-6"
                data-aos="fade-up"
                  
              >
                <span className="text-blue-600 mr-2">🏆</span>
                <span className="text-sm font-medium text-gray-700">Trusted by 500+ businesses</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Data-Driven <span className="text-blue-600">Digital Marketing</span> That Delivers Results
              </h1>
              
              <p 
                className="text-xl text-gray-600 max-w-2xl mb-8"
                data-aos="fade-up"
                 
              >
                We craft measurable marketing strategies that increase visibility, drive qualified traffic, and convert visitors into customers.
              </p>
              
              <div 
                className="flex flex-wrap gap-4"
                data-aos="fade-up"
                 
              >
                <Link href="/contact-us">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm">
                  Get a Free Consultation
                </Button>
                </Link>
                <Link href="/services">
                <Button size="lg" variant="outline" className="text-gray-700 hover:bg-gray-50 border-gray-300 hover:border-gray-400 shadow-sm">
                  Explore Services <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>
              </div>
            </div>
            
            {/* Professional image with glass card effect */}
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-white/30 border border-white/20 rounded-xl"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Marketing team analyzing data"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl"
                  priority
                />
                {/* Floating glass card */}
                <div 
                  className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/20 max-w-xs"
                  data-aos="fade-up"
                   
                >
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm font-medium text-gray-700">Campaign Performance</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">+217%</p>
                      <p className="text-sm text-gray-600">ROI increase</p>
                    </div>
                    <BarChart2 className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Internet Marketing Matters */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Your Business Needs <span className="text-blue-600">Internet Marketing</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
                
            >
              In today's digital world, your website alone isn't enough. With billions of people using the internet daily, you need to attract, engage, and convert your audience where they spend the most time — online.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Reach targeted customers globally",
                    text: "Connect with your ideal audience no matter where they are located."
                  },
                  {
                    title: "Get measurable results and ROI",
                    text: "Track every dollar spent with comprehensive analytics and reporting."
                  },
                  {
                    title: "Build brand trust and loyalty",
                    text: "Establish authority in your industry through consistent digital presence."
                  },
                  {
                    title: "Stay ahead of the competition",
                    text: "Outperform competitors who aren't leveraging digital marketing effectively."
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                    data-aos="fade-up"
                     
                  >
                    <div className="flex-shrink-0 mt-1 mr-4 text-blue-600">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div 
              className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200"
              data-aos="fade-left"
            >
              <Image 
                src="/service/marketing/p1.webp" 
                alt="Digital marketing strategy"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-blue-600">Internet Marketing</span> Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              Comprehensive solutions tailored to your business goals and industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                data-aos="fade-up"
                 
              >
                <CardHeader>
                  <div className="p-3 rounded-lg bg-blue-50 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Proven <span className="text-blue-600">Marketing Process</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              A systematic approach that delivers consistent results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center"
                data-aos="fade-up"
                 
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Powerful <span className="text-blue-600">Tools</span>. Better Results.
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              We use industry-leading platforms to maximize your marketing performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                data-aos="fade-up"
                 
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image 
                    src={tool.logo} 
                    alt={tool.name}
                    width={64}
                    height={64}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              We Help Businesses Across <span className="text-blue-600">Industries</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              Customized strategies for your specific industry needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                data-aos="fade-up"
                 
              >
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Real <span className="text-blue-600">Results</span>. Real Businesses.
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              Don't just take our word for it - hear from our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                 
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-gray-700 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Businesses <span className="text-blue-400">Trust Us</span>
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p 
              className="text-xl text-blue-200 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              The difference is in our approach and commitment to your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start"
                data-aos="fade-up"
                 
              >
                <div className="flex-shrink-0 mt-1 mr-4 text-blue-400">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Let's Elevate Your <span className="text-blue-200">Online Growth</span>
          </h2>
          <div className="w-24 h-1 bg-blue-200 mx-auto mb-8"></div>
          <p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
              
          >
            Ready to grow your business online? Whether you're starting fresh or scaling up, we'll craft a digital strategy that gets results.
          </p>
          <div 
            className="flex flex-wrap justify-center gap-4"
            data-aos="fade-up"
             
          >
            <Link href="/contact-us">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 font-semibold">
              Request a Quote
            </Button>
            </Link>
            <Link href="/contact-us">
            <Button size="lg" variant="outline" className="text-blue-600 border-white hover:bg-white hover:text-blue-600">
              Schedule a Free Call
            </Button>
            </Link>
          </div>
        </div>
      </section>

       
    </div>
  );
}