"use client";

import { Rocket, RefreshCw, Cloud, Database, Zap, Shield, Users, Code, Smartphone, BarChart2, Layers, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
export default function DigitalTransformation() {
  const services = [
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Business Process Automation",
      description: "Optimize workflows, reduce manual effort, and increase productivity."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Legacy System Modernization",
      description: "Upgrade outdated systems to modern, scalable, and secure platforms."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Migration & Management",
      description: "Move to the cloud seamlessly and scale efficiently with robust cloud strategies."
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "AI & Data Analytics",
      description: "Gain actionable insights and automate decisions with AI-powered analytics."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Build scalable and tailored solutions that match your unique needs."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile & Web App Development",
      description: "Deliver user-first experiences through responsive apps and platforms."
    }
  ];

  const whyUs = [
    {
      icon: "🧠",
      title: "Expertise Across Industries",
      description: "Healthcare, Retail, Finance, Education, and more."
    },
    {
      icon: "🚀",
      title: "Agile & Scalable Approach",
      description: "Flexible delivery models that grow with your business."
    },
    {
      icon: "🔐",
      title: "Security & Compliance First",
      description: "Data privacy and secure systems at every level."
    },
    {
      icon: "🤝",
      title: "End-to-End Support",
      description: "From planning to implementation and continuous improvement."
    },
    {
      icon: "💡",
      title: "Innovation-Driven Culture",
      description: "Stay ahead with emerging tech trends and solutions."
    }
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", 
    "React", "Angular", "Vue", 
    "Node.js", "Java", "Python",
    "MongoDB", "MySQL", "PostgreSQL",
    "Docker", "Kubernetes",
    "AI/ML", "Power BI", "TensorFlow"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-blue-900 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://example.com/tech-pattern.svg')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empower Your Business with <span className="text-blue-300">Digital Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
              Unlock efficiency, innovation, and growth with our end-to-end digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-6 text-lg font-semibold">
                Get a Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-blue-900 border-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg font-semibold">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Is <span className="text-blue-600">Digital Transformation</span>?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Digital transformation is the process of integrating digital technologies into every aspect of your business to drive fundamental changes in operations, customer experiences, and value delivery. At PickZy, we help organizations stay competitive by embracing the future through smart, scalable, and sustainable technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key <span className="text-blue-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-xl">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 mr-4 rounded-lg bg-blue-100 text-blue-600">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner With <span className="text-blue-300">PickZy</span>?
            </h2>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-8"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We deliver more than just technology - we deliver results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge <span className="text-blue-600">Technologies</span> We Work With
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="px-6 py-3 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-blue-100 hover:text-blue-800 transition-all">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can modernize your operations and deliver impactful results with digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-6 text-lg font-semibold">
              Schedule a Free Call
            </Button>
            <Button size="lg" variant="outline" className="text-blue-900 border-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg font-semibold">
              <Link rel="stylesheet" href="/contact-us" >Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}