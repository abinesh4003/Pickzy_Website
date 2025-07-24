"use client";

import { Code, Globe, Cpu, Server, Database, Shield, Zap, Layout, CpuIcon, Code2, ShoppingCart, Cloud, Lock, GitBranch, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link'; 

export default function WebDevelopment() {

  const features = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Responsive Design",
      description: "Websites that look great on all devices from desktop to mobile"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "High Performance",
      description: "Optimized code and architecture for blazing fast load times"
    },
    {
      icon: <Server className="h-6 w-6 text-green-600" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business needs"
    },
    {
      icon: <Database className="h-6 w-6 text-orange-600" />,
      title: "Database Integration",
      description: "Seamless connection with modern database systems"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Security First",
      description: "Built-in protections against common web vulnerabilities"
    },
    {
      icon: <GitBranch className="h-6 w-6 text-purple-600" />,
      title: "DevOps Ready",
      description: "CI/CD pipelines and cloud deployment expertise"
    }
  ];

  const services = [
    {
      icon: <Layout className="h-8 w-8 text-blue-600" />,
      title: "Front-End Development",
      items: [
        "React.js, Angular, Vue.js, Next.js",
        "Tailwind CSS, Bootstrap, Material UI",
        "HTML5, CSS3, JavaScript (ES6+)",
        "Mobile-first & accessibility best practices"
      ]
    },
    {
      icon: <CpuIcon className="h-8 w-8 text-green-600" />,
      title: "Back-End Development",
      items: [
        "Node.js, Express.js, Spring Boot, Django",
        "REST & GraphQL APIs",
        "Authentication & Authorization",
        "Real-time apps with WebSockets"
      ]
    },
    {
      icon: <Code2 className="h-8 w-8 text-purple-600" />,
      title: "Full-Stack Development",
      items: [
        "MERN/MEVN/MEAN stack apps",
        "JAMstack architecture",
        "CMS integration (WordPress, Strapi)",
        "Custom API development"
      ]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-red-600" />,
      title: "E-Commerce Solutions",
      items: [
        "Shopify, WooCommerce, Magento",
        "Custom carts with Stripe, PayPal",
        "Marketplace development",
        "Inventory management"
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      title: "CMS & No-Code Platforms",
      items: [
        "Webflow, Wix, WordPress",
        "Headless CMS solutions",
        "Content modeling",
        "Editorial workflows"
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-cyan-600" />,
      title: "DevOps & Deployment",
      items: [
        "AWS, Azure, Google Cloud",
        "Vercel, Netlify, Firebase",
        "Docker containerization",
        "CI/CD pipelines"
      ]
    }
  ];

  const technologies = {
    languages: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C#"],
    frameworks: ["React", "Angular", "Vue", "Next.js", "Django", "Spring Boot"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"],
    cloud: ["AWS", "Azure", "GCP", "Vercel", "Netlify"],
    tools: ["GitHub", "Docker", "Jenkins", "CI/CD pipelines"]
  };

  const processSteps = [
    { name: "Discovery & Consultation", description: "Understand your requirements and goals", src:"/service/web/p1.jpg" },
    { name: "UI/UX Design", description: "Create intuitive and beautiful interfaces", src:"/service/web/p2.jpg" },
    { name: "Quality Testing", description: "Rigorous testing for performance and security", src:"/service/web/p4.webp" },
    { name: "Launch & Support", description: "Deployment and ongoing maintenance", src:"/service/web/p5.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Image */}
      <section 
        className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden"
        data-aos="fade-in"
      >
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:70px_70px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="relative z-10 text-center lg:text-left">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                data-aos="fade-up"
              >
                Web Development{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              
              <p 
                className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Build Powerful, Scalable, and Modern Web Solutions
              </p>
              
              <p 
                className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We build high-performance web applications using all major technologies. 
                Whether you're a startup or an enterprise, we'll bring your vision to life.
              </p>
              
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              {/* Main hero image */}
              <div 
                className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src="/service/web/hero.avif"
                  alt="Web development illustration"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={500}
                />
                {/* Floating elements overlay */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply opacity-20 animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply opacity-20 animate-float-delay"></div>
              </div>
              
              {/* Floating tech badges */}
              <div 
                className="absolute -bottom-6 -left-6 bg-white p-3 rounded-full shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div 
                className="absolute -top-6 -right-6 bg-white p-3 rounded-full shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Web Development <span className="text-blue-600">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technologies with proven methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 rounded-full bg-blue-50">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Web Development <span className="text-blue-600">Capabilities</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end web development services using the latest technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 rounded-full bg-blue-50">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologies We <span className="text-blue-600">Use</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technology agnostic - we recommend the best stack for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(technologies).map(([category, items], index) => (
              <div 
                key={category}
                className="bg-gray-50 p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className={`text-lg font-semibold mb-4 ${
                  category === 'languages' ? 'text-blue-600' :
                  category === 'frameworks' ? 'text-green-600' :
                  category === 'databases' ? 'text-purple-600' :
                  category === 'cloud' ? 'text-cyan-600' : 'text-orange-600'
                }`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Development <span className="text-blue-600">Process</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent and collaborative approach to building your web solution
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 150}
                >
                  <div className={`lg:w-5/12 mb-8 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.name}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 py-3 rounded-full bg-blue-600 text-white font-bold text-lg z-10 text-center flex align-center justify-center">
                    <p>{index + 1}</p>
                  </div>

                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={step.src} 
                        alt={step.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our <span className="text-blue-600">Web Development</span> Services?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                bg: "bg-blue-50",
                text: "text-blue-800",
                title: "Technology Agnostic",
                content: "We work with all modern frameworks and tools – you choose the stack or let us recommend the best fit for your project requirements and business goals."
              },
              {
                bg: "bg-green-50",
                text: "text-green-800",
                title: "Business-Oriented Solutions",
                content: "Our focus is on delivering real business value, not just code. We align technical solutions with your strategic objectives."
              },
              {
                bg: "bg-purple-50",
                text: "text-purple-800",
                title: "Performance + Security",
                content: "Optimized loading speeds, scalable architecture, and top-tier security practices built into every project from day one."
              },
              {
                bg: "bg-orange-50",
                text: "text-orange-800",
                title: "Full Ownership & Transparency",
                content: "We keep you involved at every stage with regular updates and demos. You retain full ownership of all code and assets."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.bg} p-8 rounded-lg hover:shadow-lg transition-shadow duration-300`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className={`text-xl font-semibold mb-4 ${item.text}`}>{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
        data-aos="fade-in"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Ready to Build Your <span className="text-blue-200">Web Project</span>?
          </h2>
          <div 
            className="w-24 h-1 bg-blue-200 mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
          <p 
            className="text-xl text-blue-100 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let's discuss your requirements and create a custom solution for your business. We'll help you choose the right stack and bring your ideas to life—on time and within budget.
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}