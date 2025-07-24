"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Built a scalable e-commerce solution handling 10M+ transactions annually with advanced analytics and inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      features: ["Real-time inventory", "Payment processing", "Analytics dashboard", "Mobile responsive"],
      client: "RetailCorp",
      duration: "6 months",
      team: "8 developers"
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare",
      description: "Developed HIPAA-compliant platform for patient management, telemedicine, and electronic health records.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "MongoDB", "Socket.io", "Azure", "FHIR"],
      features: ["Patient portal", "Telemedicine", "EHR integration", "Appointment scheduling"],
      client: "MedTech Solutions",
      duration: "8 months",
      team: "12 developers"
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      description: "Created secure banking application with real-time transactions, budgeting tools, and investment tracking.",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Python", "Redis", "Docker", "Kubernetes"],
      features: ["Biometric auth", "Real-time transactions", "Investment tracking", "Budget management"],
      client: "FinanceFirst",
      duration: "10 months",
      team: "15 developers"
    },
    {
      title: "Supply Chain Management",
      category: "Enterprise",
      description: "Enterprise solution for supply chain optimization with IoT integration and predictive analytics.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Angular", "Java", "Oracle", "Apache Kafka", "TensorFlow"],
      features: ["IoT integration", "Predictive analytics", "Real-time tracking", "Automated reporting"],
      client: "LogisticsPro",
      duration: "12 months",
      team: "20 developers"
    },
    {
      title: "EdTech Learning Platform",
      category: "Education",
      description: "Interactive learning platform with video streaming, assessments, and progress tracking for online education.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AWS S3"],
      features: ["Video streaming", "Interactive assessments", "Progress tracking", "Discussion forums"],
      client: "EduTech Inc",
      duration: "7 months",
      team: "10 developers"
    },
    {
      title: "Real Estate CRM",
      category: "Real Estate",
      description: "Comprehensive CRM system for real estate agencies with lead management and property listings.",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Express.js", "MongoDB", "Cloudinary", "Twilio"],
      features: ["Lead management", "Property listings", "Document management", "Communication tools"],
      client: "RealtyMax",
      duration: "5 months",
      team: "6 developers"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Healthcare", "Enterprise", "Education", "Real Estate"];

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
          Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
        </h1>
        <p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover how we've helped businesses transform their operations with innovative software solutions across various industries.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "200+", color: "text-blue-600", label: "Projects Completed" },
          { value: "50+", color: "text-purple-600", label: "Happy Clients" },
          { value: "15+", color: "text-green-600", label: "Industries Served" },
          { value: "98%", color: "text-orange-600", label: "Success Rate" }
        ].map((stat, index) => (
          <div 
            key={index}
            data-aos="zoom-in"
            data-aos-delay={300 + (index * 100)}
          >
            <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Filter Tabs */}
  <section 
    className="py-8 bg-white border-b"
    data-aos="fade-up"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            className={index === 0 ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
            data-aos="fade-up"
            data-aos-delay={100 + (index * 50)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  </section>

  {/* Projects Grid */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
            data-aos="fade-up"
            data-aos-delay={100 * (index % 2)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={100 * (index % 2) + 50}
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-aos="fade"
                data-aos-delay={100 * (index % 2) + 100}
              />
              <div 
                className="absolute top-4 left-4"
                data-aos="fade-right"
                data-aos-delay={100 * (index % 2) + 150}
              >
                <Badge className="bg-white text-gray-900">{project.category}</Badge>
              </div>
              <div 
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-aos="fade-left"
                data-aos-delay={100 * (index % 2) + 200}
              >
                <div className="flex space-x-2">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <h3 
                className="text-2xl font-bold mb-3"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 2) + 50}
              >
                {project.title}
              </h3>
              <p 
                className="text-gray-600 mb-6 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 2) + 100}
              >
                {project.description}
              </p>
              
              <div className="space-y-4 mb-6">
                <div data-aos="fade-up" data-aos-delay={100 * (index % 2) + 150}>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center text-sm text-gray-600"
                        data-aos="fade-up"
                        data-aos-delay={100 * (index % 2) + 150 + (idx * 30)}
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div data-aos="fade-up" data-aos-delay={100 * (index % 2) + 200}>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs"
                        data-aos="zoom-in"
                        data-aos-delay={100 * (index % 2) + 200 + (idx * 30)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div 
                className="grid grid-cols-3 gap-4 mb-6 text-center"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 2) + 250}
              >
                <div>
                  <div className="text-sm font-semibold text-gray-900">Client</div>
                  <div className="text-xs text-gray-600">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Duration</div>
                  <div className="text-xs text-gray-600">{project.duration}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Team Size</div>
                  <div className="text-xs text-gray-600">{project.team}</div>
                </div>
              </div>

              <Button 
                className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300" 
                variant="outline"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 2) + 300}
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Technologies Section */}
  <section 
    className="py-20 bg-gray-50"
    data-aos="fade-up"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
        >
          Technologies We Use
        </h2>
        <p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[
          "React", "Node.js", "Python", "AWS", "MongoDB", "PostgreSQL",
          "React Native", "Flutter", "Vue.js", "Angular", "Docker", "Kubernetes",
          "TensorFlow", "Azure", "Google Cloud", "Redis", "GraphQL", "TypeScript"
        ].map((tech, index) => (
          <div 
            key={index} 
            className="text-center group"
            data-aos="zoom-in"
            data-aos-delay={100 + (index % 6) * 50}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="text-lg font-semibold text-gray-900">{tech}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section 
    className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    data-aos="fade-up"
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 
        className="text-3xl md:text-4xl font-bold mb-6"
        data-aos="zoom-in"
      >
        Ready to Build Your Next Project?
      </h2>
      <p 
        className="text-xl mb-8 text-blue-100"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Let's discuss your ideas and create something amazing together. Our team is ready to bring your vision to life.
      </p>
      <div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Button 
          size="lg" 
          variant="secondary" 
          className="px-8 py-3"
          asChild
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link href="/contact">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="px-8 py-3 text-black border-white hover:bg-white hover:text-blue-600"
          asChild
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link href="/services">View Services</Link>
        </Button>
      </div>
    </div>
  </section>

  <Footer />
</div>
  );
}