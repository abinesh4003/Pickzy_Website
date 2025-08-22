"use client";

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';
import AnimatedCounter from '@/components/AnimatedCounter'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

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
  Check,
  PenTool,
  Megaphone 
} from 'lucide-react';


export default function Home() {
   const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);





  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored solutions built to meet your specific business requirements and scale with growth.",
      link: "/custom-software-development"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      link: "/services/mobile-apps-development"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications optimized for performance.",
      link: "/web-development"
    },
     {
    icon: <PenTool className="w-8 h-8 text-pink-600" />,
    title: "UI/UX Design",
    description: "User-centered interfaces and experiences that drive engagement and conversions.",
    link: "/design-and-markup"
  },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      link: "/cloud"
    },
   
     {
    icon: <Megaphone className="w-8 h-8 text-blue-400" />,
    title: "Internet Marketing",
    description: "SEO, PPC, and social media strategies to grow your online presence.",
    link: "/internet-marketing"
  },
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
    name: "Dan",
    role: "President at DVO, United States",
    content: "Over the years, my company has worked with quite a few different software development firms in India. PickZy is definitely the best. The software engineers at PickZy are more experienced and capable than any other firm. But, the thing we value most about PickZy is the get-the-job-done mentality instilled by the company President. PickZy has gone above and beyond the call of duty to help us meet really tight deadlines. They work odd hours to accomodate our needs. And, they do what it takes to get the job done. I'm SO glad we discovered PickZy! In a nutshell, PickZy does a really good job of trying to understand the big picture and deliver solutions. Rather than simply providing a high quality software development service, PickZy strives to understand your goals and objectives and help you achieve them. They're more of a software development partner. I highly recommend PickZy Software.",
    rating: 5,
    image: "/client/Dan DVO.png"
  },
  {
    name: "Steve Lambert",
    role: "United States",
    content: "PickZy continues assisted me with Android development and did such an excellent job that we chose them to assist us with an addition to our existing website. They did a great job, maintained good communication, and delivered exactly what we asked for in a timely manner. Yet another excellent job by PickZy Software! I'm so impressed that we're now moving onto developing a Windows Desktop platform app that's based off the Android app that they developed.",
    rating: 5,
    image: "/client/Equal-I.png"
  },
  {
    name: "Douglas Johnson",
    role: "United States",
    content: "The project has been in the App store since May, 2014 and has been running with very few bugs (https://itunes.apple.com/us/app/art-models/id860168891). Any problems we have found have been fixed quickly. Any improvements we have asked for were delivered quickly and exactly as designed. We were very impressed with the speed with which you were able to get the cryptographic functions of the app written in Objective C to interoperate with our back end code written in C#. That seemed like it was going to be a difficult task. Everyone at PickZy has been easy to communicate with and all business transactions (delivering code, accepting payments, etc.) have been very fair. Our customers have liked the app and it has gotten good reviews in the App Store.",
    rating: 5,
    image: "/client/Art Model.jpg"
  },
  {
    name: "Waheed Iqbal",
    role: "CEO, Pakistan",
    content: "I know Ratheesh for the last 6 months.This guy is amazing with respect to his in-depth technical knowledge and his problem solving skills. He has vast knowledge of Software Development, with brilliant presentation skills and extremely friendly and cooperative attitude for his customers.",
    rating: 5,
    image: "/client/Health mirror.jpg"
  },
  {
    name: "Douglas Campbell",
    role: "United States",
    content: "Management and Team Members at PickZy Software LTD were knowledgeable and creative throughout the project. I will continue working with them and would recommend them for your outsourcing needs. Thumbs -Up",
    rating: 5,
    image: "/client/dummy.png"
  },
  {
    name: "Felix Santos",
    role: "United States",
    content: "A++ I haven't met anyone like pickzysoftware. Not only they're on top of everything, but their attention to detail is beyond my expectation. I will def. work with them again.",
    rating: 5,
    image: "/client/dummy.png"
  },
  {
    name: "Stavarengo",
    role: "United States",
    content: "I approached PickZy to get done some simple improvements in our iOS app. They were highly professional and gave me fast feedbacks awalys I asked for.",
    rating: 5,
    image: "/client/dummy.png"
  },
  {
    name: "Bryan Barclay",
    role: "United States",
    content: "Incredible job! As always, the PickZy team always goes above and beyond my expectations. I have them completing another job for me now as we speak and Im getting ready to hire them for another. This is a top notch team of experts that can complete any task and they are very easy to communicate with.",
    rating: 5,
    image: "/client/dummy.png"
  },
  {
    name: "Bryan Barclay",
    role: "United States",
    content: "Another great job completed promptly. Already hired for the next one and working out the details for another future job now.",
    rating: 5,
    image: "/client/dummy.png"
  }
];

  const handleSeeMore = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };



 return (
    <div className="min-h-screen relative"
      style={{
        backgroundImage: "url('/assets/frame.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
    <div className="absolute inset-0 bg-black/0"></div>
       
      {/* Hero Section */}
      <div className="relative z-10">
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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 sm:gap-2 items-center">
            {/* Left Column - Text */}
            <div className="order-1 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full mb-3 sm:mb-5 md:mb-6 border border-white/20 text-xs sm:text-sm">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300" />
                <span>Innovating Since 2011</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-5 leading-tight" data-aos="fade-up">
            Your Software Development
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-1 sm:mt-3">
                 Partner
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-8 leading-relaxed max-w-lg" data-aos="fade-left">
              We are one of the Top Rated Mobile Application Development Company in India
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 mb-4 sm:mb-8" >
                <Button
                  className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  asChild
                >
                  <Link href="/contact-us">Get in Touch</Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 border-white/30 hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-1 sm:gap-3 text-xs sm:text-sm text-white/80">
                {["Industry-leading Quality", "Dedicated Support", "Agile Development"].map((feature, i) => (
                  <div key={i} className="flex items-center bg-white/5 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-md">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-1 sm:mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-2 lg:order-2 mt-4 sm:mt-10 md:mt-0">
              <div className="relative">
                <ImageCarousel />
                {/* Tech Logos */}
                <div className="absolute -bottom-4 right-0 flex gap-2 bg-white/10 backdrop-blur-sm p-1 sm:p-2 rounded-full border border-white/20">
                  {["react", "nodejs", "nextjs"].map((tech) => (
                    <img
                      key={tech}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                      className="h-4 w-4 sm:h-6 sm:w-6"
                      alt={tech}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 lg:hidden">
          <ChevronDown className="h-5 w-5 text-white animate-bounce" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-10 sm:mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              From mobile app to smart websites, bold design to digital marketing, we build everything your business need to stand out and scale fast
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                data-aos="fade-up"
                data-aos-mirror="true"
              >
                <CardHeader className="text-center pb-3 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-50 rounded-full w-fit group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-1 sm:mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-sm sm:text-base" asChild>
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="text-center mt-8 sm:mt-12"
            data-aos="fade-up"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: "300+", label: "Projects Completed" }, 
              { value: "200+", label: "Happy Clients" },     
              { value: "13+", label: "Years Experience" },  
              { value: "24/7", label: "Support Available" } 
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-mirror="true"
                className="text-center p-3 sm:p-4" 
              >
                <AnimatedCounter value={stat.value} duration={4} classname="text-2xl sm:text-4xl font-bold text-white"/>
                <div className="text-blue-100 mt-1 sm:mt-2 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-right">
              WHAT OUR CLIENTS SAY
            </h2>
            <div className="separator mx-auto w-16 sm:w-20 h-1 bg-blue-500 mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-left">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-mirror="true"
              >
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 italic flex-grow line-clamp-5 text-sm sm:text-base">
                    "{testimonial.content}"
                  </p>
                  <button
                    onClick={() => handleSeeMore(testimonial)}
                    className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium mt-auto"
                  >
                    See More
                  </button>
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonial Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">{/* Testimonial Modal */}
<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
  <DialogContent
    className="
      w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] 
      max-w-lg sm:max-w-xl md:max-w-2xl 
      px-4 sm:px-6 md:px-8 py-6
      rounded-2xl
      max-h-[90vh] overflow-y-auto
    "
  >
    {selectedTestimonial && (
      <>
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl md:text-2xl text-center">
            Client Testimonial
          </DialogTitle>
        </DialogHeader>

        {/* Rating Stars */}
        <div className="flex justify-center mb-4">
          {[...Array(selectedTestimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 mb-6 italic text-sm sm:text-base md:text-lg text-center">
          "{selectedTestimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center justify-center space-x-3 mt-6">
          <img
            src={selectedTestimonial.image}
            alt={selectedTestimonial.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <div className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
              {selectedTestimonial.name}
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              {selectedTestimonial.role}
            </div>
          </div>
        </div>
      </>
    )}
  </DialogContent>
</Dialog>

          {selectedTestimonial && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Client Testimonial</DialogTitle>
              </DialogHeader>
              <div className="flex justify-center mb-4">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-sm md:text-base lg:text-lg">"{selectedTestimonial.content}"</p>
              <div className="flex items-center space-x-3 mt-6">
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{selectedTestimonial.name}</div>
                  <div className="text-sm text-gray-600">{selectedTestimonial.role}</div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-aos="zoom-in"
          data-aos-mirror="true"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Let's discuss your project and explore how we can help you achieve your goals with innovative software solutions.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            data-aos="fade-up"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base" asChild>
              <Link href="/contact-us">
                Get Free Consultation
                <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}