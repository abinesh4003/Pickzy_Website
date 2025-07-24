"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Star,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

export default function Contact() {
const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "Email Us",
    details: "sales@pickzy.com",
    description: "For business inquiries and support"
  },
  {
    icon: <Phone className="h-6 w-6 text-green-600" />,
    title: "Call Us (India)",
    details: "+91 44 4501 4466",
    description: "Mon–Sat, 10 AM–6 PM IST"
  },
  {
    icon: <Phone className="h-6 w-6 text-green-600" />,
    title: "Call Us (US)",
    details: "+1 213 261 0599",
    description: "Mon–Fri, US business hours"
  },
  {
    icon: <MapPin className="h-6 w-6 text-purple-600" />,
    title: "Visit Us",
    details: "JVL Plaza, 6th & Ground Floor, Rear Wing, Anna Salai, Teynampet, Chennai 600018",
    description: "Head office in Chennai, TN" 
  },
  {
    icon: <Clock className="h-6 w-6 text-orange-600" />,
    title: "Business Hours",
    details: "Mon–Sat: 10 AM – 6 PM",
    description: "Closed on Sundays and public holidays"
  }
];


  const services = [
    "Web Development",
    "Mobile App Development", 
    "Cloud Solutions",
    "Digital Transformation",
    "UI/UX Design",
    "Cybersecurity",
    "Data Analytics",
    "IT Consulting"
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most projects range from 3-12 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your software continues to perform optimally after launch."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern technologies including React, Node.js, Python, AWS, mobile frameworks, and emerging technologies like AI/ML."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We can integrate with your existing team or provide dedicated resources based on your project needs."
    }
  ];

  return (
 <div className="min-h-screen bg-white">
  <Header />

  {/* Hero Section */}
  <section 
    className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20"
    data-aos="fade"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ready to transform your business with cutting-edge software? Let's discuss your project and explore how we can help you achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {contactInfo.map((info, index) => (
          <Card 
            key={index} 
            className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={100 + (index * 100)}
          >
            <CardContent className="p-6">
              <div 
                className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit"
                data-aos="zoom-in"
                data-aos-delay={150 + (index * 100)}
              >
                {info.icon}
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-1"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                {info.title}
              </h3>
              <p 
                className="text-gray-900 font-medium mb-1"
                data-aos="fade-up"
                data-aos-delay={250 + (index * 100)}
              >
                {info.details}
              </p>
              <p 
                className="text-sm text-gray-600"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                {info.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Contact Form & Info */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card 
          className="shadow-xl border-0"
          data-aos="fade-right"
        >
          <CardHeader>
            <CardTitle 
              className="text-2xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Send us a message
            </CardTitle>
            <CardDescription
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Fill out the form below and we'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <label className="text-sm font-medium mb-2 block">First Name *</label>
                <Input placeholder="John" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Last Name *</label>
                <Input placeholder="Doe" />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="250">
              <label className="text-sm font-medium mb-2 block">Email *</label>
              <Input type="email" placeholder="john@example.com" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <label className="text-sm font-medium mb-2 block">Phone</label>
              <Input placeholder="+1 (555) 123-4567" />
            </div>
            <div data-aos="fade-up" data-aos-delay="350">
              <label className="text-sm font-medium mb-2 block">Company</label>
              <Input placeholder="Your Company" />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <label className="text-sm font-medium mb-2 block">Service Interested In</label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div data-aos="fade-up" data-aos-delay="450">
              <label className="text-sm font-medium mb-2 block">Project Budget</label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select budget range</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <label className="text-sm font-medium mb-2 block">Project Details *</label>
              <Textarea 
                placeholder="Tell us about your project, requirements, timeline, and any specific challenges you're facing..."
                className="min-h-[120px]"
              />
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              Send Message
              <MessageSquare className="ml-2 h-4 w-4" />
            </Button>
            <p 
              className="text-xs text-gray-500 text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="space-y-8">
          {/* Why Choose Us */}
          <Card 
            className="border-0 shadow-lg"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <CardHeader>
              <CardTitle 
                className="text-xl"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Why Choose PickZy?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Free Consultation",
                  desc: "Get expert advice on your project at no cost"
                },
                {
                  title: "Proven Track Record",
                  desc: "200+ successful projects delivered"
                },
                {
                  title: "24/7 Support",
                  desc: "Round-the-clock support and maintenance"
                },
                {
                  title: "Money-back Guarantee",
                  desc: "100% satisfaction guaranteed"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={200 + (index * 50)}
                >
                  <CheckCircle 
                    className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" 
                    data-aos="zoom-in"
                    data-aos-delay={200 + (index * 50) + 25}
                  />
                  <div>
                    <h4 
                      className="font-semibold text-gray-900"
                      data-aos="fade-up"
                      data-aos-delay={200 + (index * 50)}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="text-sm text-gray-600"
                      data-aos="fade-up"
                      data-aos-delay={200 + (index * 50) + 25}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card 
            className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <CardContent className="p-6">
              <div 
                className="flex items-center mb-4"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                {[1,2,3,4,5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    data-aos="zoom-in"
                    data-aos-delay={250 + (star * 50)}
                  />
                ))}
              </div>
              <p 
                className="text-gray-700 mb-4 italic"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                "PickZy transformed our business with their exceptional software solutions. The team's expertise and dedication exceeded our expectations."
              </p>
              <div 
                className="flex items-center space-x-3"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Rathish TR"
                  className="w-12 h-12 rounded-full object-cover"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
                <div>
                  <div 
                    className="font-semibold text-gray-900"
                    data-aos="fade-up"
                    data-aos-delay="450"
                  >
                    Sarah Johnson
                  </div>
                  <div 
                    className="text-sm text-gray-600"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    CEO, InnovateCorp
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card 
            className="border-0 shadow-lg"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <CardHeader>
              <CardTitle 
                className="text-xl"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Follow Us
              </CardTitle>
              <CardDescription
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Stay updated with our latest projects and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="flex space-x-4"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <Link href="#" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h2>
        <p 
          className="text-xl text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Get answers to common questions about our services and process.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <Card 
            key={index} 
            className="border-0 shadow-lg"
            data-aos="fade-up"
            data-aos-delay={100 + (index * 50)}
          >
            <CardContent className="p-6">
              <h3 
                className="text-lg font-semibold text-gray-900 mb-3"
                data-aos="fade-up"
                data-aos-delay={100 + (index * 50)}
              >
                {faq.question}
              </h3>
              <p 
                className="text-gray-600"
                data-aos="fade-up"
                data-aos-delay={150 + (index * 50)}
              >
                {faq.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div 
        className="text-center mt-12"
        data-aos="fade-up"
      >
        <p 
          className="text-gray-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Still have questions?
        </p>
        <Button 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Schedule a Call
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>

 {/* Map Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div 
      className="text-center mb-12"
      data-aos="fade-up"
    >
      <h2 
        className="text-3xl font-bold text-gray-900 mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Visit Our Office
      </h2>
      <p 
        className="text-xl text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Located in the heart of Tech City's innovation district
      </p>
    </div>

    <div 
      className="overflow-hidden rounded-lg shadow-lg w-full h-15"
      data-aos="zoom-in" >
      <iframe
        title="PickZy Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0021472816775!2d80.24262777489412!3d13.035534987285773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b2ccd93b41%3A0x41ed7963e2164dfe!2sPickZy!5e0!3m2!1sen!2sin!4v1753084995249!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>


  <Footer />
</div>
  );
}