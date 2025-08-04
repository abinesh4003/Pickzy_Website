"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Palette,
  Search,
  BarChart,
  Cog
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and scale with your growth.",
      features: ["Full-stack development", "API integration", "Legacy system modernization", "Microservices architecture"],
      technologies: ["React", "Node.js", "Python", "Java", ".NET"],
      link: "/services/custom-software-development"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android apps", "React Native", "Progressive Web Apps", "App Store optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      link: "/services/mobile-development"
    },
    {
      icon: <Globe className="w-12 h-12 text-green-600" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications optimized for performance and user engagement.",
      features: ["Responsive design", "E-commerce solutions", "CMS development", "Performance optimization"],
      technologies: ["Next.js", "React", "Vue.js", "WordPress"],
      link: "/services/web-development"
    },
    {
      icon: <Database className="w-12 h-12 text-orange-600" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.",
      features: ["Cloud migration", "DevOps & CI/CD", "Database optimization", "Auto-scaling solutions"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      link: "/services/cloud-solutions"
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security audits", "Penetration testing", "Compliance consulting", "Incident response"],
      technologies: ["OWASP", "ISO 27001", "GDPR", "SOC 2"],
      link: "/services"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      title: "Digital Transformation",
      description: "Strategic consulting to modernize your business processes and technology stack for the digital age.",
      features: ["Process automation", "AI/ML integration", "Digital strategy", "Change management"],
      technologies: ["AI/ML", "RPA", "IoT", "Blockchain"],
      link: "/services/digital-transformation"
    },
    {
      icon: <Palette className="w-12 h-12 text-pink-600" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging experiences for your customers.",
      features: ["User research", "Wireframing", "Prototyping", "Design systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      link: "/services"
    },
    {
      icon: <Search className="w-12 h-12 text-indigo-600" />,
      title: "SEO & Digital Marketing",
      description: "Comprehensive digital marketing strategies to increase your online visibility and drive business growth.",
      features: ["SEO optimization", "Content marketing", "Social media", "PPC campaigns"],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Mailchimp"],
      link: "/services"
    },
    {
      icon: <BarChart className="w-12 h-12 text-teal-600" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Data visualization", "Business intelligence", "Predictive analytics", "Real-time dashboards"],
      technologies: ["Tableau", "Power BI", "Python", "R"],
      link: "/services"
    },
    {
      icon: <Cog className="w-12 h-12 text-gray-600" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to help you make informed decisions about your IT infrastructure.",
      features: ["Technology assessment", "Architecture planning", "Vendor selection", "Project management"],
      technologies: ["ITIL", "Agile", "Scrum", "PMI"],
      link: "/services"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and challenges to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the solution architecture and creates detailed wireframes and prototypes for your approval."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing and quality assurance throughout."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support, maintenance, and optimization services."
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
          data-aos="fade-right"
            
        >
          Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
        </h1>
        <p 
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-left"
           
        >
          Comprehensive software solutions tailored to meet your business needs and drive digital transformation across all industries.
        </p>
      </div>
    </div>
  </section>

  {/* Services Grid */}
  <section 
    className="py-20 bg-white"
    data-aos="fade-up"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            data-aos="fade-up"
          >
            <CardHeader className="text-center pb-4">
              <div 
                className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300"
                data-aos="zoom-in"
              >
                {service.icon}
              </div>
              <CardTitle className="text-xl mb-2" data-aos="fade-up">{service.title}</CardTitle>
              <CardDescription className="text-gray-600" data-aos="fade-up">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div data-aos="fade-up">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-sm text-gray-600"
                        data-aos="fade-up"
                      
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div data-aos="fade-up">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs"
                        data-aos="zoom-in"
                      
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300" 
                  variant="outline"
                  asChild
                  data-aos="fade-up"
                >
                  <Link href={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Process Section */}
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
          Our Process
        </h2>
        <p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
            
        >
          We follow a proven methodology to ensure successful project delivery and client satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {process.map((step, index) => (
          <div 
            key={index} 
            className="text-center"
            data-aos="fade-up"
            
          >
            <div className="relative mb-6">
              <div 
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto"
                data-aos="zoom-in"
               
              >
                {step.step}
              </div>
              {index < process.length - 1 && (
                <div 
                  className="hidden lg:block absolute top-8  left-1/2 z-[-1] w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2 "
                  data-aos="fade-right"
                 
                ></div>
              )}
            </div>
            <h3 
              className="text-xl font-semibold mb-3"
              data-aos="fade-up"
            
            >
              {step.title}
            </h3>
            <p 
              className="text-gray-600 text-sm"
              data-aos="fade-up"
             
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section 
    className="py-20 bg-white"
    data-aos="fade-up"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-right"
          >
            Why Choose PickZy for Your Project?
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Proven Expertise",
                desc: "8+ years of experience delivering successful projects across various industries."
              },
              {
                title: "Agile Methodology",
                desc: "We use agile development practices to ensure flexibility and rapid delivery."
              },
              {
                title: "24/7 Support",
                desc: "Round-the-clock support and maintenance to keep your systems running smoothly."
              },
              {
                title: "Transparent Communication",
                desc: "Regular updates and clear communication throughout the project lifecycle."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4"
                data-aos="fade-right"
               
              >
                <CheckCircle 
                  className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" 
                  data-aos="zoom-in"
                 
                />
                <div>
                  <h3 
                    className="font-semibold text-gray-900 mb-1"
                    data-aos="fade-up"
                  
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-gray-600"
                    data-aos="fade-up"
                  
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          data-aos="fade-left"
           
        >
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Team working"
            className="rounded-lg shadow-xl"
            data-aos="zoom-in"
             
          />
        </div>
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
        Ready to Start Your Project?
      </h2>
      <p 
        className="text-xl mb-8 text-blue-100"
        data-aos="fade-up"
          
      >
        Let's discuss your requirements and create a custom solution that drives your business forward.
      </p>
      <div 
        className="flex flex-col sm:flex-row gap-4 justify-center"
        data-aos="fade-up"
         
      >
        <Button 
          size="lg" 
          variant="secondary" 
          className="px-8 py-3"
          asChild
          data-aos="fade-up"
           
        >
          <Link href="/contact-us">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="px-8 py-3 text-black border-white hover:bg-white hover:text-blue-600"
          asChild
          data-aos="fade-up"
           
        >
          <Link href="/portfolio">View Our Work</Link>
        </Button>
      </div>
    </div>
  </section>

  <Footer />
</div>
  );
}