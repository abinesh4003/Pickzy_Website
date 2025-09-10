"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp, 
  Shield, 
  Clock,
  Heart,
  Lightbulb,
  Zap,
  Car
} from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality",
      description: "We maintain the highest standards in code quality, testing, and project delivery."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Client-Centric",
      description: "Our clients' success is our success. We build long-term partnerships based on trust."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Agility",
      description: "We adapt quickly to changing requirements and market conditions to deliver optimal results."
    }
  ];

  const team = [
    {
      name: "Ratheesh TR",
      role: "CEO & Founder",
      image: "/team/ceo.jpg",
      bio: "15+ years in software development and business strategy. Led digital transformation initiatives for Fortune 500 companies.",
      skills: ["Strategic Planning", "Business Development", "Team Leadership"]
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in cloud architecture and DevOps practices. Former senior engineer at major tech companies.",
      skills: ["Cloud Architecture", "DevOps", "System Design"]
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Specializes in user experience and interface design. Award-winning designer with 10+ years experience.",
      skills: ["UI/UX Design", "Product Design", "User Research"]
    },

 
  ];

  const milestones = [
    {
      year: "2011",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through innovative software solutions."
    },
    {
      year: "2015",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a successful digital transformation project."
    },
    {
      year: "2019",
      title: "Team Expansion",
      description: "Grew to 25+ team members and opened our second office to serve more clients."
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Won 'Best Software Development Company' award and achieved ISO certification."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded internationally and reached 200+ successful project deliveries."
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description: "Launched our AI/ML division and established partnerships with leading tech companies."
    }
  ];

  const teamImages = ['01', 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

  return (
   <div className="min-h-screen bg-white">
   
{/* Hero Section */}
  <section className="about-us-hero pt-8 md:pt-12 lg:pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-2 md:py-12 lg:py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 " data-aos="fade-down"  >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 ">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PickZy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up"  >
              Founded in 2011, PickZy Interactive is a Chennai‑based software company delivering AI‑driven web & mobile solutions to clients in the US, UK, and India.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6">
                From a small team of passionate developers, we’ve grown into a medium-sized firm known for delivering flawless, on-time IT solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With over 200 successful projects and a presence in global markets, we continue to build enterprise-grade software with precision and passion.
              </p>
              <div className="grid grid-cols-2 gap-6" data-aos="zoom-in"  >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50‑200</div>
                  <div className="text-gray-600">Employees</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left"   className='flex justify-center items-center h-90'>
              <img src="/team/about_hero.jpg" alt="PickZy team working" className="rounded-lg shadow-xl w-full h-full" />
            </div>
          </div>
        </div>
      </section>

       {/* Mission & Vision */}
      <section className=" py-4 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-up">
            <Card className="about-us-mission p-8 border-0 shadow-lg" data-aos="flip-left"   >
              <div className="text-center ">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with AI-enabled software and reliable IT solutions that drive growth and innovation.
                </p>
              </div>
            </Card>
            <Card className="about-us-vision p-8 border-0 shadow-lg" data-aos="flip-right"  >
              <div className="text-center ">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a global leader in adaptive tech solutions recognized for excellence, quality, and innovation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>


  {/* Values */}
  <section className="about-us-values py-8 md:py-16 lg:py-20 bg-gray-50 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="text-center mb-8 md:mb-12 "
        data-aos="fade-down"
      >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          These core values guide everything we do and shape how we work with our clients and each other.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <Card 
            key={index} 
            className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
             
          >
            <CardContent className="p-0">
              <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

   {/* Timeline */}
      <section className="about-us-journey py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span></h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings in Chennai, we’ve steadily evolved into an AI-forward technology partner.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}  >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-left' : 'pl-8 text-left'}`}>
                    <Card className="p-4 border-0 shadow-lg ">
                      <div className="text-2xl font-bold text-blue-600 mb-2 md:text-3xl">{milestone.year}</div>
                      <h3 className="text-md md:text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-xs md:text-base">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  {/* Team */}
  <section className="py-8 md:py-16 lg:py-20 bg-gray-50 about-us-team">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="text-center mb-16"
        data-aos="fade-down"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Team</span></h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our diverse team of experts brings together years of experience and passion for creating exceptional software.
        </p>
      </div>

     <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 w-full h-max'>
       <Image
            src="/team/emp_01.jpg"
            alt="Team Member 1"
            width={500}
            height={500}
            className="w-full h-full object-cover "
       
          />
             <Image
            src="/team/emp_12.jpg"
            alt="Team Member 1"
            width={500}
            height={500}
            className="w-full h-full object-cover "
          
          />
     </div>
    </div>
  </section>

{/* Nasscom Membership Section */}
<section className="about-us-nasscom py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10" data-aos="fade-down">
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
        Recognized by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NASSCOM</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
    </div>
<div className="bg-white p-6 md:p-8 border border-gray-200" data-aos="zoom-in">
  <div className="flex flex-col md:flex-row items-center justify-center mb-6 ">
    <div className="flex items-center justify-center mb-4 md:mb-0 md:mr-6">
      <Image src="/process/Nasscom.png" alt="NASSCOM Logo" width={180} height={180} />
    </div>
   
  </div>

  <div className="space-y-4 text-gray-700">
    <p className="leading-relaxed text-lg">
      PickZy Interactive is a proud member of 
      <span className="font-semibold text-blue-700"> NASSCOM</span> 
      (National Association of Software and Services Companies), the premier trade association 
      and chamber of commerce of the Indian IT and BPO industry.
    </p>
    
    <div className="border-l-4 border-blue-500 pl-4 my-6">
      <p className="italic text-gray-600">
        "Established in 1988, NASSCOM is a non-profit organization focused on driving the growth 
        and development of the technology sector in India."
      </p>
    </div>
    
    <p className="leading-relaxed">
      With over <span className="font-semibold">2000 members</span>, including 250+ global companies from 
      China, EU, Japan, US, UK, and India, NASSCOM represents businesses across software development, 
      IT services, software products, BPO services, and e-commerce.
    </p>
    
    <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
      <p className="text-blue-800 font-medium flex items-start">
        <Award className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
        This membership reflects our commitment to industry standards, ethical practices, 
        and excellence in technology services.
      </p>
    </div>
  </div>

  <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-start">
    <div className="flex items-center text-sm text-gray-600">
      <Globe className="w-4 h-4 mr-2 text-blue-500" />
      <span>Global Industry Recognition</span>
    </div>
  </div>
</div>

  </div>
</section>


 {/* CTA */}
  <section 
    className="about-us-cta py-8 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    data-aos="zoom-in"
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 
        className="text-3xl md:text-4xl font-bold mb-6"
        // data-aos="fade-down"
          
      >
        Ready to Work with Us?
      </h2>
      <p 
        className="text-xl mb-8 text-blue-100"
        data-aos="fade-up"
         
      >
        Let's discuss your project and explore how our team can help you achieve your goals.
      </p>
      <div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        data-aos="zoom-in"
         
      >
        <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
          <Link href="/contact-us">Get in Touch</Link>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-3 text-black border-white hover:bg-white hover:text-blue-600" asChild>
          <Link href="/careers">Join Our Team</Link>
        </Button>
      </div>
    </div>
  </section>

   
</div>
  );
}