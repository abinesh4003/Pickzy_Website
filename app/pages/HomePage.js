"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';
import AnimatedCounter from '@/components/AnimatedCounter'

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
  PlayCircle,
  Sparkles,
  Car,
  Check 
} from 'lucide-react';


export default function Home() {


  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business requirements and scale with growth.",
      link: "/services/custom-software-development"
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


      <section className="relative flex items-center justify-center min-h-[90vh] sm:min-h-[calc(100vh-var(--navbar-height))] w-full overflow-hidden">
        {/* Background Layers - Contained within hero section */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero/home_hero.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/30"></div>
          <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5f58a4aec3a7b3266b286abe/5f58a4aec3a7b38b9e286b1a_pattern-grey.svg')] bg-repeat opacity-70" />
        </div>

        {/* Hero Content - Container with safe padding */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 sm:gap-2 items-center">
            {/* Left Column - Text */}
            <div className="order-1 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full mb-4 sm:mb-5 md:mb-6 border border-white/20 text-xs sm:text-sm">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300" />
                <span>Innovating Since 2015</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 leading-tight" data-aos="fade-up">
                Custom-Built Software
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2 sm:mt-3">
                  That Drives Results
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-lg" data-aos="fade-left">
                We build custom mobile apps, web platforms, and digital solutions to accelerate your growth.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8" >
                <Button
                  className="text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  asChild

                >
                  <Link href="/contact-us">Get in Touch</Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 border-white/30 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
                {["Industry-leading Quality", "Dedicated Support", "Agile Development"].map((feature, i) => (
                  <div key={i} className="flex items-center bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-md">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-2 lg:order-2 mt-8 sm:mt-10 md:mt-0">
              <div className="relative">
                <ImageCarousel />
                {/* Tech Logos */}
                <div className="absolute -bottom-4 right-0 flex gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
                  {["react", "nodejs", "nextjs"].map((tech) => (
                    <img
                      key={tech}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      alt={tech}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 lg:hidden">
          <ChevronDown className="h-6 w-6 text-white animate-bounce" />
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
              From mobile app to smart websites, bold design to digital marketing, we build everything your business need to stand out and scale fast
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
              { value: "300+", label: "Projects Completed" }, // Removed '+' here
              { value: "200+", label: "Happy Clients" },     // Removed '+' here
              { value: "13+", label: "Years Experience" },   // Removed '+' here
              { value: "24/7", label: "Support Available" } // Non-numeric stays the same
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={150 * index}
                data-aos-mirror="true"
                className="text-center p-4" // Added some padding
              >
                <AnimatedCounter value={stat.value} duration={4} classname="text-4xl font-bold text-white"/>
                <div className="text-blue-100 mt-2">{stat.label}</div>
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
              <Link href="/contact-us">
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