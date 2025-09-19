"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect, useRef } from 'react';
import ContactForm from '@/components/ContactForm';
import ScheduleCallButton from '@/components/ScheduleCallButton';

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
  Github,
  Facebook
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
  // Replace the existing Client Testimonial card with this component
 const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const carouselRef = useRef(null);
    const testimonialRefs = useRef([]);

    const testimonials = [
  {
    name: "Dan",
    role: "President at DVO, United States",
    content: "PickZy stands out among Indian software firms with their highly skilled engineers and get-it-done attitude. They've helped us meet tight deadlines consistently while working odd hours when needed. More than just a vendor, they're true partners who deeply understand our business goals and objectives.",
    rating: 5,
    image: "/client/Dan DVO.png"
  },
  {
    name: "Steve Lambert",
    role: "United States",
    content: "PickZy excelled in Android development, which led us to hire them for our website work as well. Their communication is excellent and delivery is always timely. We were so impressed that we're now developing a Windows app based on their Android expertise and quality work.",
    rating: 5,
    image: "/client/Equal-I.png"
  },
  {
    name: "Douglas Johnson",
    role: "United States",
    content: "Our application has been running smoothly since 2014 with very few bugs or issues. Whenever problems arose, they were fixed quickly and improvements were delivered exactly as designed. We were particularly impressed with their Objective C and C# integration skills and professional approach.",
    rating: 5,
    image: "/client/Art Model.jpg"
  },
  {
    name: "Waheed Iqbal",
    role: "CEO, Pakistan",
    content: "Ratheesh possesses amazing technical knowledge and exceptional problem-solving capabilities. His software expertise combined with excellent presentation skills and customer-focused attitude makes him absolutely exceptional to work with on any project we undertake together.",
    rating: 5,
    image: "/client/Health mirror.jpg"
  },
  {
    name: "Douglas Campbell",
    role: "United States",
    content: "PickZy's team demonstrated extensive knowledge and creativity throughout our entire project duration. I plan to continue working with them indefinitely and highly recommend them for any outsourcing needs. They truly deserve a thumbs up for their outstanding performance!",
    rating: 5,
    image: "/client/dummy.png"
  },
  {
    name: "Felix Santos",
    role: "United States",
    content: "A++ service quality from PickZy who consistently exceeds all expectations with their meticulous attention to detail and rapid responsiveness. They deliver top-notch performance that I will definitely utilize again for all my future software development projects and requirements.",
    rating: 5,
    image: "/client/dummy.png"
  },
  {
    name: "Stavarengo",
    role: "United States",
    content: "PickZy handled our iOS application improvements with complete professionalism and provided extremely fast feedback on all changes. I highly recommend their services for any mobile development needs you might have - they are reliable and technically excellent partners.",
    rating: 5,
    image: "/client/dummy.png"
  },
  {
    name: "Bryan Barclay",
    role: "United States",
    content: "PickZy consistently exceeds all expectations and delivers beyond what's promised. They're currently handling multiple projects for me simultaneously - a truly top-notch team that's exceptionally easy to communicate with and completes every single task expertly.",
    rating: 5,
    image: "/client/dummy.png"
  },
  {
    name: "Bryan Barclay",
    role: "United States",
    content: "Another excellent job completed promptly and delivered ahead of schedule. We're already engaged for the next project phase and planning substantial future work with this incredibly reliable team that always delivers quality results on time and within budget constraints.",
    rating: 5,
    image: "/client/dummy.png"
  }
];

    // Update container height when testimonial changes
    useEffect(() => {
      if (testimonialRefs.current[currentIndex]) {
        const height = testimonialRefs.current[currentIndex].offsetHeight;
        setContainerHeight(height);
      }
    }, [currentIndex]);

    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (!startX) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      
      if (diff > 5) {
        // Swipe left - go next
        handleNext();
      } else if (diff < -5) {
        // Swipe right - go previous
        handlePrev();
      }
      setStartX(null);
    };

    const handleNext = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
      <Card 
        className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden" 
        data-aos="fade-left"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <CardContent className="p-4 xs:p-5 sm:p-6 relative" style={{ minHeight: containerHeight > 0 ? `${containerHeight}px` : 'auto' }}>
          {/* Testimonial content */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                ref={el => testimonialRefs.current[index] = el}
                className={`transition-all duration-300 ease-in-out flex flex-col gap-4 xs:gap-5 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 h-auto' 
                    : 'opacity-0 absolute h-0 overflow-hidden'
                }`}
              >
                <div className="flex items-center" data-aos="fade-up">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 xs:h-5 xs:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-xs xs:text-sm sm:text-base" data-aos="fade-up">
                 {testimonial.content}
                </p>
                <div className="flex items-center space-x-2 xs:space-x-3 mt-auto" data-aos="fade-up">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 xs:w-12 xs:h-12 rounded-full object-cover flex-shrink-0"
                    onError={(e) => {
                      e.target.src = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-900 text-sm xs:text-base truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-xs xs:text-sm text-gray-600 truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="mt-6 flex justify-center space-x-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-600 w-3 xs:w-4' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Manual navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-1 xs:left-2 top-1/2 -translate-y-1/2 backdrop-blur p-1 xs:p-2 rounded-full bg-white/70 hover:bg-white transition-colors shadow-sm xs:shadow-md"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 xs:w-4 xs:h-4">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-1 xs:right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white transition-colors p-1 xs:p-2 rounded-full shadow-sm xs:shadow-md backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 xs:w-4 xs:h-4">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </CardContent>
      </Card>
    );
  };


  return (
 <div className= "min-h-screen bg-white overflow-x-hidden">
   

  {/* Hero Section */}
  <section 
    className="contact-hero bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 md:py-16 lg:py-20"
    data-aos="fade"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
        >
          Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
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
          >
            <CardContent className="p-6">
              <div 
                className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit"
                data-aos="zoom-in"
              >
                {info.icon}
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-1"
                data-aos="fade-up"
              >
                {info.title}
              </h3>
              <p 
                className="text-gray-900 font-medium mb-1"
                data-aos="fade-up"
              >
                {info.details}
              </p>
              <p 
                className="text-sm text-gray-600"
                data-aos="fade-up"
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
  <section className="py-8 md:py-16 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       {/* contact form */}
       <div className='contact-form'>
              <ContactForm />
        </div>
       
        {/* Additional Info */}
        <div className="space-y-8">
          {/* Why Choose Us */}
          <Card 
            className="why-choose border-0 shadow-lg"
            data-aos="fade-left"
          >
            <CardHeader>
              <CardTitle 
                className="text-xl"
                data-aos="fade-up"
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
                >
                  <CheckCircle 
                    className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" 
                    data-aos="zoom-in"
                  />
                  <div>
                    <h4 
                      className="font-semibold text-gray-900"
                      data-aos="fade-up"
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="text-sm text-gray-600"
                      data-aos="fade-up"
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Client Testimonial */}
           <div className="contact-testimonials">
                <TestimonialCarousel />
              </div>

          {/* Social Links */}
          <Card 
            className="border-0 shadow-lg"
            data-aos="fade-left"
          >
            <CardHeader>
              <CardTitle 
                className="text-xl"
                data-aos="fade-up"
              >
                Follow Us
              </CardTitle>
              <CardDescription
                data-aos="fade-up"
              >
                Stay updated with our latest projects and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="social-links flex space-x-4"
                data-aos="fade-up"
                 
              >
                <Link href="https://www.linkedin.com/company/pickzy-interactive-private-limited/" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://x.com/PickZySoftware" className="p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://www.facebook.com/pickzy" className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="contact-faq py-8 md:py-16 lg:py-20 bg-gray-50">
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
        
          >
            <CardContent className="p-6">
              <h3 
                className="text-lg font-semibold text-gray-900 mb-3"
                data-aos="fade-up"
             
              >
                {faq.question}
              </h3>
              <p 
                className="text-gray-600"
                data-aos="fade-up"
       
              >
                {faq.answer}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

     <ScheduleCallButton />
    </div>
  </section>

 {/* Map Section */}
<section className="contact-map py-8 md:py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div 
      className="text-center mb-12"
      data-aos="fade-up"
    >
      <h2 
        className="text-3xl font-bold text-gray-900 mb-4"
        data-aos="fade-up"
          
      >
        Visit Our Office
      </h2>
      <p 
        className="text-xl text-gray-600"
        data-aos="fade-up"
         
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


   
</div>
  );
}