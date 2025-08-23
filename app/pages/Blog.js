"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Calendar, User, ArrowRight, Clock, MapPin, Phone, Send, Mail, MessageSquare } from 'lucide-react';
import Blogs from '@/app/blog/blog';
import { showToast } from '@/components/ui/toast';
import Recaptcha from '@/components/ui/recaptcha';

export default function Blog() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    details: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    details: '',
    recaptcha: ''
  });
  
  const recaptchaRef = useRef(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const featuredPost = {
    title: "The Future of Software Development: AI and Machine Learning Integration",
    excerpt: "Explore how artificial intelligence and machine learning are revolutionizing the software development landscape and what it means for businesses in 2024.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    slug: "future-of-software-development-ai-ml"
  };

  const handleRecaptchaVerified = () => {
    setIsRecaptchaVerified(true);
    setErrors(prev => ({ ...prev, recaptcha: '' }));
  };

  const handleRecaptchaError = (errorMsg) => {
    setIsRecaptchaVerified(false);
    setErrors(prev => ({ ...prev, recaptcha: errorMsg }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      email: '',
      details: '',
      recaptcha: ''
    };

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Name is required';
      isValid = false;
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Message validation
    if (!formData.details.trim()) {
      newErrors.details = 'Message is required';
      isValid = false;
    } else if (formData.details.trim().length < 10) {
      newErrors.details = 'Message must be at least 10 characters';
      isValid = false;
    }

    // ReCAPTCHA validation
    if (!isRecaptchaVerified) {
      newErrors.recaptcha = 'Please complete the reCAPTCHA verification';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/email-send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      showToast('Success', 'Your message has been sent successfully!', 'success');
      setFormData({
        firstName: '',
        email: '',
        details: '' 
      });
      
      // Reset reCAPTCHA after successful submission
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setIsRecaptchaVerified(false);
    } catch (error) {
      showToast('Error', 'Failed to send message. Please try again.', 'error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubscribe = () => {
    // Email validation
    if (!email.trim()) {
      showToast('Error', 'Email is required', 'error');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Error', 'Please enter a valid email', 'error');
      return;
    }

    // Simulate subscription logic
    showToast('Success', 'Thank you for subscribing!', 'success');
    setEmail('');
  }

  return (
    <div className="min-h-screen bg-white">
      <Blogs/>
 
      {/* Featured Post */}
      <section className="py-12 xs:py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="mb-8 xs:mb-10 sm:mb-12" data-aos="fade-right">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600 text-sm xs:text-base">Our latest and most popular content</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-lg xs:shadow-xl" data-aos="zoom-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-full object-cover"
                  data-aos="fade-right"
                />
                <div className="absolute top-3 xs:top-4 left-3 xs:left-4">
                  <Badge className="bg-blue-600 text-white text-xs xs:text-sm" data-aos="zoom-in">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center" data-aos="fade-left">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 text-sm xs:text-base sm:text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 xs:gap-4 sm:gap-6 text-xs xs:text-sm text-gray-500 mb-4 xs:mb-5 sm:mb-6" data-aos="fade-up">
                  <div className="flex items-center">
                    <User className="h-3 w-3 xs:h-4 xs:w-4 mr-1 xs:mr-2" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 xs:h-4 xs:w-4 mr-1 xs:mr-2" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 xs:h-4 xs:w-4 mr-1 xs:mr-2" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button 
                  className="w-full xs:w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm xs:text-base" 
                  asChild
                  data-aos="zoom-in"
                >
                  <Link href='/blog/reactjs-web-development-company'>
                    Read Full Article
                    <ArrowRight className="ml-2 h-3 w-3 xs:h-4 xs:w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 xs:py-14 sm:py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-3 xs:px-4 text-center" data-aos="fade-up">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 xs:mb-5 sm:mb-6">Ready to Build Your Next Web Application?</h2>
          <p className="text-base xs:text-lg sm:text-xl opacity-90 max-w-2xl mx-auto mb-6 xs:mb-7 sm:mb-8">
            Partner with PickZy Interactive for high-quality React.js and Node.js development services tailored to your business needs.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center bg-white text-indigo-600 px-6 xs:px-8 py-2 xs:py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 gap-2 text-sm xs:text-base"
          >
            Get in Touch <Mail className="w-4 h-4 xs:w-5 xs:h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 xs:py-14 sm:py-16 bg-white" id="contact">
        <div className="container mx-auto px-3 xs:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 xs:mb-10 sm:mb-12" data-aos="fade-up">
              <h2 className="text-2xl xs:text-3xl font-bold text-gray-800 mb-3 xs:mb-4">Contact Us</h2>
              <div className="w-16 xs:w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
              <div data-aos="fade-right">
                <h3 className="text-lg xs:text-xl font-semibold mb-3 xs:mb-4 text-gray-800">Get in touch</h3>
                <p className="text-gray-600 mb-4 xs:mb-5 sm:mb-6 text-sm xs:text-base">
                  Have a project in mind or want to discuss how we can help your business? Reach out to our team.
                </p>

                <div className="space-y-3 xs:space-y-4">
                  <div className="flex items-start space-x-3 xs:space-x-4">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <MapPin className="w-3 h-3 xs:w-4 xs:h-4 xs:w-5 xs:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm xs:text-base">Address</h4>
                      <p className="text-gray-600 text-xs xs:text-sm">
                        JVL Plaza, 6th & Ground Floor, Rear Wing, Anna Salai, Teynampet, Chennai 600018
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 xs:space-x-4">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Mail className="w-3 h-3 xs:w-4 xs:h-4 xs:w-5 xs:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm xs:text-base">Email</h4>
                      <p className="text-gray-600 text-xs xs:text-sm">sales@pickzy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 xs:space-x-4">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <Phone className="w-3 h-3 xs:w-4 xs:h-4 xs:w-5 xs:h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm xs:text-base">Phone</h4>
                      <p className="text-gray-600 text-xs xs:text-sm">+91 44 4501 4466</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left">
                <form onSubmit={handleSubmit} className="bg-gray-50 p-4 xs:p-5 sm:p-6 rounded-lg shadow-sm">
                  <div className="mb-3 xs:mb-4">
                    <label htmlFor="firstName" className="block text-gray-700 mb-1 xs:mb-2 text-sm xs:text-base">
                      Your Name
                      {errors.firstName && (
                        <span className="text-red-500 text-xs ml-2">{errors.firstName}</span>
                      )}
                    </label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-3 xs:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm xs:text-base ${
                        errors.firstName 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-indigo-500'
                      }`}
                    />
                  </div>

                  <div className="mb-3 xs:mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-1 xs:mb-2 text-sm xs:text-base">
                      Email Address
                      {errors.email && (
                        <span className="text-red-500 text-xs ml-2">{errors.email}</span>
                      )}
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 xs:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm xs:text-base ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-indigo-500'
                      }`}
                    />
                  </div>

                  <div className="mb-3 xs:mb-4">
                    <label htmlFor="details" className="block text-gray-700 mb-1 xs:mb-2 text-sm xs:text-base">
                      Your Message
                      {errors.details && (
                        <span className="text-red-500 text-xs ml-2">{errors.details}</span>
                      )}
                    </label>
                    <textarea 
                      id="details"
                      name="details"
                      rows="3"
                      value={formData.details}
                      onChange={handleChange}
                      className={`w-full px-3 xs:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-sm xs:text-base ${
                        errors.details 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-indigo-500'
                      }`}
                    ></textarea>
                  </div>
                  
                  {/* ReCAPTCHA Component */}
                  <div className="mb-4">
                    <Recaptcha
                      ref={recaptchaRef}
                      onVerified={handleRecaptchaVerified}
                      onError={handleRecaptchaError}
                    />
                    {errors.recaptcha && (
                      <p className="text-red-500 text-xs mt-2">{errors.recaptcha}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2 xs:py-3 transition-all text-sm xs:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-3 w-3 xs:h-4 xs:w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <MessageSquare className="ml-2 h-3 w-3 xs:h-4 xs:w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 xs:mb-5 sm:mb-6">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-base xs:text-lg sm:text-xl mb-6 xs:mb-7 sm:mb-8 text-blue-100" data-aos="fade-up">
            Get the latest tech insights, tutorials, and industry news delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 justify-center max-w-md mx-auto" data-aos="fade-up">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 xs:px-4 py-2 xs:py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-sm xs:text-base"
            />
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-4 xs:px-6 sm:px-8 text-sm xs:text-base"
              data-aos="zoom-in"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </div>
          <p className="text-xs xs:text-sm text-blue-100 mt-3 xs:mt-4" data-aos="fade-up">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}