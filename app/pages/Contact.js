"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
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
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

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

   useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(true);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setIsAnimating(true);
  };

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden" data-aos="fade-left">
      <CardContent className="p-6 relative h-[300px]"> {/* Set a fixed height */}
        {/* Testimonial content with sliding animation */}
        <div className="absolute inset-0 p-6">
          {testimonials.map((testimonial, index) => (
            <div 
             key={index}
  className={`absolute inset-0 p-6 transition-transform duration-500 ease-in-out ${
    index === currentIndex ? 'translate-x-0' : 
    (index < currentIndex ? '-translate-x-full' : 'translate-x-full')
  }`}
            >
              <div className="flex items-center mb-4" data-aos="fade-up">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic" data-aos="fade-up">
                "{testimonial.content.length > 200 ? testimonial.content.slice(0, 300) + '...' : testimonial.content}"
              </p>
              <div className="flex items-center space-x-3" data-aos="fade-up">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};




  return (
 <div className="min-h-screen bg-white">
   

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
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
       {/* contact form */}
       <ContactForm />
       
        {/* Additional Info */}
        <div className="space-y-8">
          {/* Why Choose Us */}
          <Card 
            className="border-0 shadow-lg"
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
         <TestimonialCarousel />

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
                className="flex space-x-4"
                data-aos="fade-up"
                 
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
<section className="py-20 bg-white">
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