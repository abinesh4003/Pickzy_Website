"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PositionsPage from '@/components/positions'
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Coffee, 
  Laptop,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Import
} from 'lucide-react';

export default function Careers() {
 

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs"
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-500" />,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and remote work options"
    },
    {
      icon: <Laptop className="w-8 h-8 text-blue-500" />,
      title: "Latest Technology",
      description: "Top-of-the-line equipment and access to cutting-edge tools"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-500" />,
      title: "Learning & Development",
      description: "Conference attendance, online courses, and skill development budget"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: "Competitive Compensation",
      description: "Competitive salaries, equity options, and performance bonuses"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Amazing Team",
      description: "Work with talented, passionate people in a collaborative environment"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      title: "Quality Excellence", 
      description: "We maintain the highest standards in everything we do, from code quality to client service."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage continuous skill development."
    },
    {
      title: "Work-Life Balance",
      description: "We believe in sustainable work practices that allow our team to thrive personally and professionally."
    }
  ];

  return (
 <div className="min-h-screen bg-white">
  <Header />

  {/* Hero Section */} 
  <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="zoom-in"  >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Amazing Team</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build your career with PickZy, a company that values innovation, growth, and work-life balance. Help us create exceptional software solutions that transform businesses worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div data-aos="fade-up"   >
          <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-600">Team Members</div>
        </div>
        <div data-aos="fade-up"  >
          <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
          <div className="text-gray-600">Countries</div>
        </div>
        <div data-aos="fade-up"  >
          <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
          <div className="text-gray-600">Employee Rating</div>
        </div>
      </div>
    </div>
  </section>

  {/* Why Work With Us */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work at PickZy?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're more than just a workplace - we're a community of passionate individuals working together to create amazing software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <Card 
            key={index} 
            className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="flip-up"
             
          >
            <CardContent className="p-6">
              <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Company Values */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          These core values guide how we work, make decisions, and treat each other every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <Card 
            key={index} 
            className="border-0 shadow-lg"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
             
          >
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>


 {/* Open Positions */}
   <PositionsPage/>

  

  {/* Application Process */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We've designed a transparent and efficient process to help you showcase your skills and learn about us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            step: "01",
            title: "Application Review",
            description: "We review your application and resume within 48 hours"
          },
          {
            step: "02", 
            title: "Initial Interview",
            description: "30-minute video call to discuss your background and interests"
          },
          {
            step: "03",
            title: "Technical Assessment",
            description: "Practical coding challenge or portfolio review"
          },
          {
            step: "04",
            title: "Final Interview",
            description: "Meet the team and discuss role expectations and culture fit"
          }
        ].map((step, index) => (
          <div 
            key={index} 
            className="text-center"
            data-aos="zoom-in"
       
          >
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                {step.step}
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-1/2 z-[-1] w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Employee Testimonial */}
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card 
        className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <CardContent className="p-12 text-center">
          <img 
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="David Kim"
            className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
            data-aos="zoom-in"
             
          />
          <blockquote className="text-xl text-gray-700 mb-6 italic" data-aos="fade-up"  >
            "PickZy has been an incredible place to grow my career. The team is supportive, the projects are challenging, and the work-life balance is amazing. I've learned more in my two years here than in my previous five years combined."
          </blockquote>
          <div data-aos="fade-up"  >
            <div className="font-semibold text-gray-900">David Kim</div>
            <div className="text-gray-600">Senior Full Stack Developer</div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-down">
        Ready to Join Our Team?
      </h2>
      <p className="text-xl mb-8 text-blue-100" data-aos="fade-down"   >
        Take the next step in your career and help us build amazing software solutions that make a difference.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          variant="secondary" 
          className="px-8 py-3"
          data-aos="zoom-in"
           
        >
          View Open Positions
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="px-8 py-3 text-black border-white hover:bg-white hover:text-blue-600" 
          asChild
          data-aos="zoom-in"
           
        >
          <Link href="/contact-us">Contact HR</Link>
        </Button>
      </div>
    </div>
  </section>

  <Footer />
   
</div>
  );
}