"use client";

import { Code, Cpu, Server, Database, Shield, Zap, Layers, Box, Globe, GitBranch, Cloud, Lock, Users, Settings, BarChart, Rocket, Target, PieChart, Clock, RefreshCw,Check,HeartPulse,Landmark ,ShoppingCart ,Factory ,GraduationCap ,Truck  } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function CustomSoftwareDevelopment() {
  // Hero section image from Pexels
  const heroImage = "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg";

  // Feature images from Pexels
  const featureImages = [
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg"
  ];

  // Process images from Pexels
  const processImages = [
    "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
    "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg"
  ];

  const features = [
    {
      icon: <Rocket className="h-6 w-6 text-blue-600" />,
      title: "Tailor-Made Solutions",
      description: "Software crafted specifically for your unique business requirements and workflows"
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "Precision Engineering",
      description: "Solutions designed to hit your exact business objectives"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Enterprise-Grade Security",
      description: "Built with security best practices and compliance standards"
    },
    {
      icon: <PieChart className="h-6 w-6 text-purple-600" />,
      title: "Data-Driven Design",
      description: "Applications that leverage your business data intelligently"
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-600" />,
      title: "Time-Efficient Development",
      description: "Rapid delivery without compromising quality"
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-indigo-600" />,
      title: "Future-Proof Architecture",
      description: "Software that evolves with your business needs"
    }
  ];

 const industriesWeServe = [
  {
    name: "Healthcare",
    description: "HIPAA-compliant solutions for providers and payers",
    icon: <HeartPulse className="h-6 w-6 text-red-500" />
  },
  {
    name: "Finance",
    description: "Secure fintech and banking applications",
    icon: <Landmark className="h-6 w-6 text-blue-500" />
  },
  {
    name: "Retail",
    description: "E-commerce and inventory management systems",
    icon: <ShoppingCart className="h-6 w-6 text-purple-500" />
  },
  {
    name: "Manufacturing",
    description: "IoT and supply chain optimization",
    icon: <Factory className="h-6 w-6 text-orange-500" />
  },
  {
    name: "Education",
    description: "LMS and e-learning platforms",
    icon: <GraduationCap className="h-6 w-6 text-green-500" />
  },
  {
    name: "Logistics",
    description: "Fleet management and route optimization",
    icon: <Truck className="h-6 w-6 text-cyan-500" />
  }
];

  const developmentProcess = [
    {
      title: "Discovery Workshop",
      description: "Deep dive into your business needs and technical requirements",
      icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Solution Design",
      description: "Architecture planning and technology selection",
      icon: <Layers className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Agile Development",
      description: "Iterative development with continuous feedback",
      icon: <Code className="h-8 w-8 text-green-500" />
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing at every stage",
      icon: <Shield className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Deployment",
      description: "Seamless rollout with zero downtime",
      icon: <Cloud className="h-8 w-8 text-cyan-500" />
    },
    {
      title: "Ongoing Support",
      description: "Continuous improvement and maintenance",
      icon: <Settings className="h-8 w-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
     
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden">
  {/* Background Image with overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg"
      alt="Software development background"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/70"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Any Software
          </span> <br />For Any Business Need
        </h1>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0">
          We build completely custom software solutions designed to solve your exact business challenges
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
          >
            <Link href="/contact-us">Get Free Consultation</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-black hover:bg-white/10 hover:text-white"
          >
            <Link href="/portfolio">See Our Work</Link>
          </Button>
        </div>
      </div>
      
      {/* Image Content - Optional foreground image */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        <Image
          src="https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg"
          alt="Custom software development"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-xl"
          priority
        />
      </div>
    </div>
  </div>
</section>

      {/* What We Build Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Build <span className="text-blue-600">Exactly What You Need</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple business tools to complex enterprise systems - if you can imagine it, we can build it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 h-full"
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
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <Image
                      src={featureImages[index]}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries <span className="text-blue-600">We Serve</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our custom solutions are adaptable to any industry's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Development Process</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent, collaborative approach to building your perfect software solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 rounded-full bg-blue-100">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                </div>
                <div className="h-48 relative">
                  <Image
                    src={processImages[index]}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Agnostic Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
              <Image
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
                alt="Technology stack"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Technology <span className="text-blue-600">Agnostic Approach</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                We don't believe in one-size-fits-all solutions. Our team selects the perfect technology stack for your specific requirements, whether it's:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Web or Mobile</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Cloud or On-Premise</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Monolithic or Microservices</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>SQL or NoSQL</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600">
                Our expertise spans all major platforms and frameworks, ensuring we always use the right tool for the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Custom Software Solution?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your vision and create a software solution that transforms your business operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact-us" >Get Started Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-blue-600">
              <Link href="/contact-us">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}