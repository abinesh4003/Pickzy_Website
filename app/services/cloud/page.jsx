"use client";

import { Cloud, Server, Database, Cpu, Zap, GitBranch, Globe, Lock, Code, BarChart2, Layers, Smartphone, Shield,Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CloudServices() {
  const features = [
    {
      icon: <Server className="h-6 w-6 text-blue-600" />,
      title: "Infrastructure as a Service",
      description: "Scalable virtual machines, storage, and networking"
    },
    {
      icon: <Layers className="h-6 w-6 text-purple-600" />,
      title: "Platform as a Service",
      description: "Ready-to-use development environments"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-green-600" />,
      title: "Software as a Service",
      description: "Cloud-hosted applications with zero maintenance"
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Auto-Scaling",
      description: "Automatic resource adjustment based on demand"
    },
    {
      icon: <Database className="h-6 w-6 text-red-600" />,
      title: "Managed Databases",
      description: "SQL/NoSQL with automated backups and patching"
    },
    {
      icon: <Shield className="h-6 w-6 text-yellow-600" />,
      title: "Built-in Security",
      description: "Encryption, IAM, and compliance controls"
    }
  ];

  const serviceTypes = [
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Public Cloud",
      items: [
        "AWS, Azure, Google Cloud deployment",
        "Multi-region availability zones",
        "Pay-as-you-go pricing models",
        "Elastic compute resources"
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Hybrid Cloud",
      items: [
        "Seamless on-premises integration",
        "Burst capacity to public cloud",
        "Consistent management plane",
        "Data locality compliance"
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-purple-600" />,
      title: "Private Cloud",
      items: [
        "Dedicated infrastructure",
        "Enhanced security controls",
        "Custom SLAs",
        "Regulatory compliance"
      ]
    },
    {
      icon: <GitBranch className="h-8 w-8 text-red-600" />,
      title: "Cloud Migration",
      items: [
        "Workload assessment",
        "Lift-and-shift strategies",
        "Application refactoring",
        "Data transfer services"
      ]
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-indigo-600" />,
      title: "Cloud Optimization",
      items: [
        "Cost management tools",
        "Right-sizing recommendations",
        "Reserved instance planning",
        "Usage analytics"
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-cyan-600" />,
      title: "Cloud Native Development",
      items: [
        "Kubernetes orchestration",
        "Serverless architectures",
        "Microservices design",
        "CI/CD pipelines"
      ]
    }
  ];

  const providers = [
    { name: "AWS", icon: "/service/cloud/aws.png", color: "bg-orange-100" },
    { name: "Microsoft Azure", icon: "/service/cloud/azure.png", color: "bg-blue-100" },
    { name: "Google Cloud", icon: "/service/cloud/gcloud.png", color: "bg-red-100" },
    { name: "IBM Cloud", icon: "/service/cloud/imb.png", color: "bg-purple-100" },
    { name: "Oracle Cloud", icon: "/service/cloud/oracle.png", color: "bg-yellow-100" },
    { name: "Alibaba Cloud", icon: "/service/cloud/alibaba.png", color: "bg-green-100" }
  ];

  const processSteps = [
    { 
      title: "Assessment", 
      description: "Workload analysis and cloud readiness evaluation",
      icon: <BarChart2 className="h-8 w-8 text-blue-500" />
    },
    { 
      title: "Planning", 
      description: "Architecture design and migration roadmap",
      icon: <Globe className="h-8 w-8 text-green-500" />
    },
    { 
      title: "Migration", 
      description: "Data transfer and application deployment",
      icon: <Cloud className="h-8 w-8 text-purple-500" />
    },
    { 
      title: "Optimization", 
      description: "Cost management and performance tuning",
      icon: <Zap className="h-8 w-8 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="cloud-hero relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/service/cloud/hero.jpg')] bg-cover bg-[length:300px] bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="relative z-10" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Enterprise <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cloud Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with scalable, secure, and cost-optimized cloud infrastructure tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us">
                <Button size="lg" className="btn-get-assessment bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                  Get Cloud Assessment
                </Button>
                </Link>
                <Link href="#cloud-case-studies">
                <Button size="lg" variant="outline" className="btn-view-case-studies border-gray-300 hover:bg-white/90 shadow-sm">
                  View Case Studies
                </Button>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
    
                <div>
                  <p className="text-gray-600 font-medium">Trusted by Fortune 500 companies</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-500">Across all major cloud platforms</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="relative rounded-xl w-full h-full flex justify-center items-center" data-aos="fade-left">
              <div className="relative z-10 w-full h-auto max-w-lg mx-auto">
                <div className="relative">
                  {/* Main cloud architecture illustration */}
                  <img 
                    src="/service/cloud/hero.jpg" 
                    alt="Cloud Architecture" 
                    className="w-full h-auto rounded-xl shadow-2xl border-8 border-white"
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">99.99% Uptime</p>
                      <p className="text-xs text-gray-500">SLA Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="cloud-features py-20 bg-white" id="cloud-case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Cloud Service <span className="text-blue-600">Models</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible deployment options for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full" data-aos="fade-up">
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
      <section className="cloud-services py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Cloud <span className="text-blue-600">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end cloud transformation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} 
                   className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                   data-aos="fade-up">
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-4 rounded-full bg-blue-50">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="cloud-providers py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Certified Across Major <span className="text-blue-600">Cloud Platforms</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {providers.map((provider, index) => (
              <div key={index} 
                   className={`${provider.color} p-6 rounded-xl flex flex-col items-center justify-center h-40 hover:shadow-lg transition-all`}
                   data-aos="zoom-in">
                <img src={provider.icon} alt={provider.name} className="h-12 w-auto mb-4" />
                <p className="text-center font-medium text-gray-800">{provider.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="cloud-process py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Cloud Migration <span className="text-blue-600">Process</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proven methodology for seamless cloud adoption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 text-blue-600 font-bold">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cloud-cta py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">
            Ready to Accelerate Your Cloud Journey?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" data-aos="fade-up"></div>
          <p className="text-xl text-blue-100 mb-8" data-aos="fade-up">
            Get a free cloud assessment and migration plan tailored to your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up">
            <Button 
              size="lg" 
              className="btn-start-assessment bg-white text-blue-600 hover:bg-gray-100"
            >
             <Link href="/contact-us">Start Cloud Assessment</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-talk-expert border-white text-gradient-to-r from-blue-600 to-indigo-600 hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact-us">Talk to Cloud Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}