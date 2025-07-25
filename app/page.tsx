"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  Users,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Target,
  Lightbulb,
  PlayCircle ,
  Sparkles
} from 'lucide-react';


export default function Home() {


  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business requirements and scale with growth.",
      link: "/services/web-development"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      link: "/services/mobile-development"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications optimized for performance.",
      link: "/services/web-development"
    },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      link: "/services/cloud-solutions"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      link: "/services"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Digital Transformation",
      description: "Strategic consulting to modernize your business processes and technology.",
      link: "/services/digital-transformation"
    }
  ];

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      title: "Proven Track Record",
      description: "200+ successful projects delivered across various industries"
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "On-Time Delivery",
      description: "98% of projects delivered on schedule with quality assurance"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-600" />,
      title: "Goal-Oriented",
      description: "Focused on achieving your business objectives and ROI"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-orange-600" />,
      title: "Innovation First",
      description: "Cutting-edge technologies and innovative solutions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, InnovateCorp",
      content: "PickZy transformed our business with their exceptional software solutions. The team's expertise and dedication exceeded our expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Michael Chen",
      role: "CTO, StartupXYZ",
      content: "Outstanding development team that delivered our mobile app ahead of schedule. Their technical skills and communication are top-notch.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, TechStart",
      content: "The cloud migration project was seamless. PickZy's expertise saved us time and money while improving our system performance significantly.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
<div className="min-h-screen bg-white">
      <Header />
{/* Hero Section */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 z-0">
    {/* Main background image with overlay */}
    <img 
      src="/assets/hero/home_hero.jpg"
      alt="Modern office workspace"
      className="w-full h-full object-cover object-center"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30"></div>
  </div>

  {/* Grid pattern overlay */}
  <div className="absolute inset-0 z-0 opacity-10">
    <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5f58a4aec3a7b3266b286abe/5f58a4aec3a7b38b9e286b1a_pattern-grey.svg')] bg-repeat"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-20 relative z-10 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Left Column - Content */}
      <div className="order-2 lg:order-1 mt-12 lg:mt-0">
        <div 
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-4 py-2 rounded-full mb-4 md:mb-6 border border-white/20"
          data-aos="fade-up"
        >
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm font-medium">Innovating Since 2015</span>
        </div>

        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Digital Transformation
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2 sm:mt-3">
            Tailored for Your Success
          </span>
        </h1>
        
        <p 
          className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We craft custom software solutions that drive measurable results, optimize operations, 
          and create competitive advantages for forward-thinking businesses.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-6 sm:px-8 py-3 border-white/30 hover:bg-white/10 hover:text-white backdrop-blur-sm"
            asChild
          >
            <Link href="/portfolio">
              <PlayCircle className="h-5 w-5 mr-2" />
              See Our Work
            </Link>
          </Button>
        </div>
        
        <div 
          className="flex flex-wrap gap-3 md:gap-6 text-sm text-white/80"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center backdrop-blur-sm bg-white/5 px-3 py-2 rounded-lg">
            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 flex-shrink-0" />
            <span>Industry-leading Quality</span>
          </div>
          <div className="flex items-center backdrop-blur-sm bg-white/5 px-3 py-2 rounded-lg">
            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-400 mr-2 flex-shrink-0" />
            <span>Dedicated Support Team</span>
          </div>
        </div>
      </div>

      {/* Right Column - Image with Badges */}
      <div className="order-1 lg:order-2 relative">
        <div 
          className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
            className="w-full h-auto object-cover aspect-video"
            loading="eager"
          />
          
          {/* Glassmorphism overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-purple-900/20 to-transparent"></div>
          
          {/* Award Badge */}
          <div 
            className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white/10 backdrop-blur-md p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-white/20"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 flex-shrink-0" />
              <div>
                <div className="text-sm sm:text-base font-semibold text-white">Top Rated</div>
                <div className="text-xs sm:text-sm text-white/80">Clutch 2024 Winner</div>
              </div>
            </div>
          </div>
          
          {/* Stats Badge */}
          <div 
            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-white/20"
            data-aos="fade-down"
            data-aos-delay="800"
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">98%</div>
              <div className="text-xs sm:text-sm">Client Retention</div>
            </div>
          </div>
        </div>

        {/* Floating tech logos - Hidden on mobile */}
        <div 
          className="hidden sm:flex absolute -bottom-6 right-4 sm:right-8 gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-white/20"
          data-aos="fade-left"
          data-aos-delay="900"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-6 w-6 sm:h-8 sm:w-8" alt="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="h-6 w-6 sm:h-8 sm:w-8" alt="Node.js" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="h-6 w-6 sm:h-8 sm:w-8" alt="Next.js" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to meet your business needs and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={150 * index}
                data-aos-mirror="true"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300" asChild>
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div 
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "8+", label: "Years Experience" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={150 * index}
                data-aos-mirror="true"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-right">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-left">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="text-center shadow-lg border-0"
                data-aos="fade-up"
                data-aos-delay={150 * index}
                data-aos-mirror="true"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center space-x-3">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="zoom-in"
          data-aos-mirror="true"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and explore how we can help you achieve your goals with innovative software solutions.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3" asChild>
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
      
     <Footer />
    </div>
  );
}