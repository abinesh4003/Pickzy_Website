"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useState } from 'react';
import { Calendar, User, ArrowRight, Clock , MapPin, Phone, Send, Mail,MessageSquare} from 'lucide-react';
import Blogs from '@/app/blog/blog';
import { showToast } from '@/components/ui/toast';



export default function Blog() {

       const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    details: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    details: ''
  });

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

  const blogPosts = [
    {
      title: "Building Scalable Web Applications with Next.js and React",
      excerpt: "Learn best practices for creating high-performance, scalable web applications using modern React frameworks.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Web Development",
      slug: "scalable-web-apps-nextjs-react"
    },
    {
      title: "Mobile App Security: Best Practices for 2024",
      excerpt: "Essential security measures every mobile app developer should implement to protect user data and prevent breaches.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Mobile Development",
      slug: "mobile-app-security-best-practices"
    },
    {
      title: "Cloud Migration Strategies for Enterprise Applications",
      excerpt: "A comprehensive guide to successfully migrating enterprise applications to the cloud with minimal downtime.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Cloud Computing",
      slug: "cloud-migration-strategies-enterprise"
    },
    {
      title: "UX Design Trends That Will Shape 2024",
      excerpt: "Discover the latest user experience design trends and how they're influencing modern software development.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Design",
      slug: "ux-design-trends-2024"
    },
    {
      title: "DevOps Automation: Streamlining Your Development Pipeline",
      excerpt: "How to implement effective DevOps automation to improve deployment frequency and reduce time to market.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Alex Thompson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "DevOps",
      slug: "devops-automation-development-pipeline"
    },
    {
      title: "The Rise of Low-Code Development Platforms",
      excerpt: "Examining how low-code platforms are changing software development and their impact on traditional coding.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Sarah Johnson",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Technology",
      slug: "rise-of-low-code-platforms"
    }
  ];

  const categories = [
    "All",
    "Technology", 
    "Web Development",
    "Mobile Development",
    "Cloud Computing",
    "Design",
    "DevOps"
  ];


 const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      email: '',
      details: ''
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
      showToast('Error', 'Please fix the errors in the form', 'error');
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
    } catch (error) {
      showToast('Error', 'Failed to send message. Please try again.', 'error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div className="min-h-screen bg-white">
   

<Blogs/>
 

  {/* Featured Post */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="mb-12"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
        <p className="text-gray-600">Our latest and most popular content</p>
      </div>

      <Card 
        className="overflow-hidden border-0 shadow-xl"
        data-aos="zoom-in"
         
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <img 
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-64 lg:h-full object-cover"
              data-aos="fade-right"
            />
            <div className="absolute top-4 left-4">
              <Badge 
                className="bg-blue-600 text-white"
                data-aos="zoom-in"
                 
              >
                {featuredPost.category}
              </Badge>
            </div>
          </div>
          <CardContent 
            className="p-8 lg:p-12 flex flex-col justify-center"
            data-aos="fade-left"
             
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {featuredPost.title}
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div 
              className="flex items-center space-x-6 text-sm text-gray-500 mb-6"
              data-aos="fade-up"
               
            >
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {featuredPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {featuredPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {featuredPost.readTime}
              </div>
            </div>
            <Button 
              className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              asChild
              data-aos="zoom-in"
               
            >
              <Link href='/blog/reactjs-web-development-company'>
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  </section>





  

  {/* Categories Filter */}
  <section className="py-8 bg-gray-50 border-y">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="flex flex-wrap justify-center gap-4"
        data-aos="fade-up"
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            className={index === 0 ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
            data-aos="zoom-in"
             
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  </section>

  {/* Blog Posts Grid */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="mb-12"
        data-aos="fade-right"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
        <p className="text-gray-600">Explore our recent posts and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card 
            key={index} 
            className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            data-aos="fade-up"
    
          >
            <div className="relative overflow-hidden">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 left-4">
                <Badge 
                  variant="secondary" 
                  className="bg-white text-gray-900"
                  data-aos="zoom-in"
                   
                >
                  {post.category}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                asChild
                data-aos="zoom-in"
                 
              >
                <Link href={`/blog/${post.slug}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div 
        className="text-center mt-12"
        data-aos="fade-up"
      >
        <Button size="lg" variant="outline">
          Load More Articles
        </Button>
      </div>
    </div>
  </section>




  
 {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Web Application?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">Partner with PickZy Interactive for high-quality React.js and Node.js development services tailored to your business needs.</p>
          <Link
            href="#contact"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 gap-2"
          >
            Get in Touch <Mail className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div data-aos="fade-right">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in touch</h3>
                <p className="text-gray-600 mb-6">Have a project in mind or want to discuss how we can help your business? Reach out to our team.</p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">123 Tech Park, Silicon Valley, CA 94025</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">contact@pickzyinteractive.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left">
                 <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 mb-2">
          Your Name
          {errors.firstName && (
            <span className="text-red-500 text-sm ml-2">{errors.firstName}</span>
          )}
        </label>
        <input 
          type="text" 
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.firstName 
              ? 'border-red-500 focus:ring-red-200' 
              : 'border-gray-300 focus:ring-indigo-500'
          }`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email Address
          {errors.email && (
            <span className="text-red-500 text-sm ml-2">{errors.email}</span>
          )}
        </label>
        <input 
          type="email" 
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.email 
              ? 'border-red-500 focus:ring-red-200' 
              : 'border-gray-300 focus:ring-indigo-500'
          }`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="details" className="block text-gray-700 mb-2">
          Your Message
          {errors.details && (
            <span className="text-red-500 text-sm ml-2">{errors.details}</span>
          )}
        </label>
        <textarea 
          id="details"
          name="details"
          rows="4"
          value={formData.details}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.details 
              ? 'border-red-500 focus:ring-red-200' 
              : 'border-gray-300 focus:ring-indigo-500'
          }`}
        ></textarea>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Send Message
            <MessageSquare className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - End */}

      

  {/* Newsletter Signup */}
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      data-aos="zoom-in"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Stay Updated with Our Newsletter
      </h2>
      <p 
        className="text-xl mb-8 text-blue-100"
        data-aos="fade-up"
          
      >
        Get the latest tech insights, tutorials, and industry news delivered straight to your inbox.
      </p>
      <div 
        className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
        data-aos="fade-up"
         
      >
        <input 
          type="email" 
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <Button 
          size="lg" 
          variant="secondary" 
          className="px-8"
          data-aos="zoom-in"
           
        >
          Subscribe
        </Button>
      </div>
      <p 
        className="text-sm text-blue-100 mt-4"
        data-aos="fade-up"
         
      >
        No spam, unsubscribe at any time.
      </p>
    </div>
  </section>



   
</div>
  );
}