"use client";

import { Palette, Layout, Type, Image, Code2, Smartphone,Star,Code, Figma, PencilRuler, Globe, CheckCircle, Zap, Search, Headphones } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DesignAndMarkup() {
  const services = [
    {
      icon: <Figma className="h-8 w-8 text-blue-600" />,
      title: "PSD/Figma to HTML",
      description: "Convert design files into pixel-perfect HTML5/CSS3 code with responsive behavior"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      title: "Responsive Web Design",
      description: "Flawless display across all devices from mobile to desktop"
    },
    {
      icon: <Palette className="h-8 w-8 text-green-600" />,
      title: "UI/UX Integration",
      description: "Turn UI kits into functional websites with perfect design implementation"
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Cross-Browser Compatibility",
      description: "Guaranteed performance across Chrome, Firefox, Safari, Edge"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-red-600" />,
      title: "W3C Validated Markup",
      description: "Clean, semantic HTML that passes W3C standards"
    },
    {
      icon: <PencilRuler className="h-8 w-8 text-yellow-600" />,
      title: "Landing Page Design + Code",
      description: "High-converting pages optimized for campaigns"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Receive Design Files",
      description: "Figma, PSD, XD, Sketch or any design format",
      src:"/service/design/p1.png"
    },
    {
      step: "2",
      title: "Planning & Breakdown",
      description: "Analyze components and create implementation plan",
      src:"/service/design/p2.avif"
    },
    {
      step: "3",
      title: "Pixel-Perfect Markup",
      description: "Modern HTML/CSS/JS implementation",
      src:"/service/design/p3.webp"
    },
    {
      step: "4",
      title: "Responsive Layering",
      description: "Ensure perfect display on all devices",
      src:"/service/design/p4.avif"
    },
    {
      step: "5",
      title: "Testing & Optimization",
      description: "Cross-browser and performance testing",
      src:"/service/design/p5.jpg"
    },
    {
      step: "6",
      title: "Delivery & Support",
      description: "Handoff with integration support",
      src:"/service/design/p6.avif"
    }
  ];

  const technologies = [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
    { name: "SASS/SCSS", icon: "https://cdn.simpleicons.org/sass/CC6699" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" }
  ];

  const benefits = [
    { icon: <Code2 className="h-6 w-6" />, text: "100% Hand-Coded" },
    { icon: <Zap className="h-6 w-6" />, text: "Lightning-Fast Turnaround" },
    { icon: <Smartphone className="h-6 w-6" />, text: "Fully Responsive Outputs" },
    { icon: <Search className="h-6 w-6" />, text: "Thorough QA & Testing" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "SEO-Optimized Code" },
    { icon: <Headphones className="h-6 w-6" />, text: "Ongoing Support" }
  ];

  const testimonials = [
    {
      quote: "The team brought our Figma files to life flawlessly. The code quality was top-notch!",
      author: "Sarah Johnson",
      role: "Product Designer, TechCorp"
    },
    {
      quote: "Our conversion rates improved by 40% after their landing page implementation.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthLab"
    },
    {
      quote: "Exceptional attention to detail and communication throughout the project.",
      author: "Emily Rodriguez",
      role: "Founder, StartupX"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
       
      
{/* Design & Markup Hero */}
<section className="relative pt-16 pb-12 md:pt-32 md:pb-28 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden min-h-screen flex items-center">
  {/* Background pattern */}
  <div className="absolute top-0 left-0 w-full h-full opacity-20">
    <div className="absolute inset-0 bg-[url('/service/design/hero.avif')] bg-no-repeat bg-center bg-cover bg-[length:70px_70px]"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Text Content */}
      <div className="relative z-10 text-center lg:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Design &{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Markup
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
          Pixel-Perfect Designs, Hand-Coded Markup
        </p>
        
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
          From Figma to Functional – We bring your UI/UX designs to life with clean, 
          responsive HTML, CSS, and modern frontend technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
          <Link href="/contact-us">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm md:text-base">
              Let's Work Together
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-sm md:text-base">
              Get a Free Quote
            </Button>
          </Link>
        </div>
        
  
      </div>

      {/* Image Content */}
      <div className="relative mt-8 md:mt-0">
        <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <img
            src="/service/design/hero.avif"
            alt="Design to code transformation"
            className="w-full h-auto object-cover"
            width={600}
            height={500}
          />
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-400 rounded-full mix-blend-multiply opacity-20 animate-float"></div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-28 h-28 md:w-40 md:h-40 bg-purple-400 rounded-full mix-blend-multiply opacity-20 animate-float-delay"></div>
        </div>
        
        <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-2 md:p-3 rounded-full shadow-lg">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Code className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
          </div>
        </div>
        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white p-2 md:p-3 rounded-full shadow-lg">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Palette className="h-4 w-4 md:h-6 md:w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
      {/* Why It Matters Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why <span className="text-blue-600">Quality Design</span> & Markup is Crucial
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600" data-aos="fade-up"   >
                In the digital world, first impressions matter. A seamless blend of beautiful design and clean, semantic code ensures:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="h-8 w-8 text-blue-600" />, title: "Faster Load Times", text: "Optimized code for better performance" },
              { icon: <Smartphone className="h-8 w-8 text-purple-600" />, title: "Responsive Layouts", text: "Perfect display on any device" },
              { icon: <Search className="h-8 w-8 text-green-600" />, title: "Better SEO", text: "Clean code that search engines love" },
              { icon: <Layout className="h-8 w-8 text-orange-600" />, title: "Smooth UX", text: "Intuitive interfaces that engage users" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl text-center"
                data-aos="fade-up"
                 
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-blue-600">Design & Markup</span> Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              Comprehensive solutions from design to implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-0"
                data-aos="fade-up"
                 
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 mr-4 rounded-lg bg-blue-50">
                      {service.icon}
                    </div>  
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-blue-600">Design-to-Code</span> Process
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
                
            >
              A seamless workflow that transforms your designs into clean, functional, and scalable code
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                 
              >
                {/* Content */}
                <div className="p-6">
                  {/* Step number */}
                  <div className="w-12 h-12 mb-4 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  {/* Image with hover effect */}
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-gray-100">
                    <img
                      src={step.src}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Tools & <span className="text-blue-600">Technologies</span> We Use
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              Modern stack for cutting-edge frontend development
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center"
                data-aos="fade-up"
                 
              >
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-3 mb-3">
                  <img src={tech.icon} alt={tech.name} className="w-full h-auto" />
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Clients <span className="text-blue-600">Trust Us</span> for Design & Markup
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              We deliver exceptional quality with every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4"
                data-aos="fade-up"
                 
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit.text}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What Our <span className="text-blue-600">Clients</span> Say
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              Don't just take our word for it
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                data-aos="fade-up"
                 
              >
                <div className="mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg text-gray-600 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-gray-900 font-medium">
                  <p>{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Let's Turn Your <span className="text-blue-200">Design Into Reality</span>
            </h2>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-8"></div>
            <p 
              className="text-xl text-blue-100 mb-8"
              data-aos="fade-up"
                
            >
              Whether you're a startup, agency, or enterprise, we're ready to bring your design vision to the web.
            </p>
            <div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              data-aos="fade-up"
               
            >
              <Link href="/contact-us">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Request a Quote
              </Button>
              </Link>
              <Link href="/contact-us">
              <Button size="lg" variant="outline" className="text-blue-900 border-white hover:bg-white hover:text-blue-600">
                <Link href="/contact-us">Book a Free Consultation</Link>
              </Button>
              </Link>
            </div>
          </div>
        </section>

         
      </div>
    );
}