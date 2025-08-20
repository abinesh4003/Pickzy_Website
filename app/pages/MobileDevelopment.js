"use client";

import { Smartphone, Tablet, Cpu, Zap, Shield, Users, Code, Database, Cloud, Layers, SmartphoneCharging, CpuIcon, GitBranch, Figma } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';


export default function MobileDevelopment() {
 

  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: "iOS & Android Native",
      description: "High-performance apps using Swift, Kotlin, and Jetpack Compose"
    },
    {
      icon: <Tablet className="h-6 w-6 text-purple-600" />,
      title: "Cross-Platform",
      description: "Flutter & React Native for cost-effective multi-platform solutions"
    },
    {
      icon: <Cpu className="h-6 w-6 text-green-600" />,
      title: "Optimized Performance",
      description: "60fps smooth animations and instant response times"
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Offline-First",
      description: "Full functionality without internet using local databases"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Enterprise Security",
      description: "Biometric auth, data encryption, and secure APIs"
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-600" />,
      title: "UX-Centric Design",
      description: "Intuitive interfaces with Figma prototypes"
    }
  ];

  const capabilities = [
    {
      icon: <Code className="h-5 w-5 text-blue-500" />,
      title: "Native Development",
      items: ["Android (Kotlin/Java)", "iOS (Swift/Objective-C)", "Platform-Specific UI"]
    },
    {
      icon: <Layers className="h-5 w-5 text-purple-500" />,
      title: "Cross-Platform",
      items: ["Flutter", "React Native", "Kotlin Multiplatform"]
    },
    {
      icon: <Database className="h-5 w-5 text-green-500" />,
      title: "Backend & APIs",
      items: ["Node.js/Django", "GraphQL/REST", "Firebase/Supabase"]
    },
    {
      icon: <Figma className="h-5 w-5 text-red-500" />,
      title: "UI/UX Design",
      items: ["Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: <Cloud className="h-5 w-5 text-orange-500" />,
      title: "Deployment",
      items: ["App Store Publishing", "CI/CD Pipelines", "OTA Updates"]
    },
    {
      icon: <GitBranch className="h-5 w-5 text-indigo-500" />,
      title: "Maintenance",
      items: ["Crash Analytics", "Performance Monitoring", "Feature Updates"]
    }
  ];

  const technologies = [
    { name: "Kotlin/ Swift", icon: <SmartphoneCharging className="h-5 w-5" /> },
    { name: "Flutter", icon: <CpuIcon className="h-5 w-5" /> },
    { name: "React Native", icon: <Code className="h-5 w-5" /> },
    { name: "Firebase", icon: <Cloud className="h-5 w-5" /> },
    { name: "Node.js", icon: <Database className="h-5 w-5" /> },
    { name: "GraphQL", icon: <GitBranch className="h-5 w-5" /> },
    { name: "Figma", icon: <Figma className="h-5 w-5" /> },
    { name: "AWS Amplify", icon: <Cloud className="h-5 w-5" /> }
  ];

  const processSteps = [
    { title: "Discovery", description: "Requirement analysis & planning" },
    { title: "Design", description: "Wireframing & UI/UX prototyping" },
    { title: "Development", description: "Agile sprints with weekly builds" },
    { title: "Testing", description: "QA, performance & security audits" },
    { title: "Launch", description: "App store deployment & marketing" },
    { title: "Support", description: "Updates & feature enhancements" }
  ];

  return (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="relative pb-10 md:pb-24 pt-8 md:pt-16 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/service/mobile/hero_back.jpg')] bg-cover bg-center md:bg-[length:1200px] mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-4 md:px-8 lg:px-8 py-4 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10 text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight">
              Mobile Application <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-1 md:mt-2">Development</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-8 max-w-lg mx-auto lg:mx-0">
              We build scalable, high-performance mobile applications that drive engagement and business growth for startups and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
              <Link href="/contact-us">
                <Button size="lg" className="bg-gradient-to-r w-full sm:w-auto from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg text-sm md:text-base">
                  Get Started
                </Button>
              </Link>
              <Link href="#case-studies">
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-white/90 shadow-sm w-full sm:w-auto text-sm md:text-base">
                  View Case studies
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-6 md:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <img 
                  src="/service/mobile/p1.jpg" 
                  alt="Client" 
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="/service/mobile/p1.jpg" 
                  alt="Client" 
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white"
                />
                <img 
                  src="/service/mobile/p1.jpg" 
                  alt="Client" 
                  className="w-7 h-7 md:w-10 md:h-10 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <p className="text-xs md:text-base text-gray-600 font-medium">Trusted by 100+ businesses</p>
                <div className="flex items-center mt-1 justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-1 text-xs md:text-sm text-gray-500">5.0 (120 reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative rounded-xl w-full h-full flex justify-center items-center order-first lg:order-last mt-4 md:mt-0" data-aos="fade-left">
            <div className="relative z-10 w-56 sm:w-64 md:w-96 h-auto max-w-lg mx-auto">
              <div className="relative">
                {/* Main app screenshot with floating elements */}
                <img 
                  src="/service/mobile/hero.jpg" 
                  alt="Mobile App Development" 
                  className="w-full h-auto rounded-xl shadow-xl md:shadow-2xl border-2 md:border-4 lg:border-8 border-white"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white rounded-md md:rounded-lg shadow-md px-2 py-1 md:px-4 md:py-3 flex items-center">
                  <div className="bg-green-100 p-1 md:p-2 rounded-full mr-1 md:mr-3">
                    <Check className="w-3 h-3 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">Top Rated</p>
                    <p className="text-[9px] md:text-xs text-gray-500">Mobile Developers</p>
                  </div>
                </div>
              </div>
              
              {/* Platform badges floating around */}
              <div className="absolute -left-2 -top-2 md:-left-8 md:-top-8 bg-white p-1 md:p-3 rounded-full shadow-sm md:shadow-md">
                <img src="/service/mobile/logo1.png" alt="iOS" className="w-4 h-4 md:w-8 md:h-8" />
              </div>
              <div className="absolute -right-2 -top-2 md:-right-8 md:-top-8 bg-white p-1 md:p-3 rounded-full shadow-sm md:shadow-md">
                <img src="/service/mobile/logo2.png" alt="Android" className="w-4 h-4 md:w-8 md:h-8" />
              </div>
              <div className="absolute -left-2 -bottom-2 md:-left-8 md:-bottom-8 bg-white p-1 md:p-3 rounded-full shadow-sm md:shadow-md">
                <img src="/service/mobile/logo3.png" alt="Flutter" className="w-4 h-4 md:w-8 md:h-8" />
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 md:w-64 md:h-64 rounded-full bg-blue-400 opacity-10 blur-2xl md:blur-3xl"></div>
              <div className="w-40 h-40 md:w-72 md:h-72 rounded-full bg-purple-400 opacity-10 blur-2xl md:blur-3xl absolute top-5 md:top-20 left-5 md:left-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Overview Section */}
    <section className="py-10 md:py-16 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-8 lg:px-8">
        <div className="bg-gray-50 rounded-lg md:rounded-xl p-5 md:p-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            What Is <span className="text-blue-600">Mobile Development</span>?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                At PickZy, we craft powerful mobile applications that deliver seamless user experiences across platforms. Whether you're a startup launching an MVP or an enterprise scaling your digital ecosystem, we use the latest mobile technologies to build secure, high-performing, and visually engaging mobile apps.
              </p>
              <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>100% Native or Cross-Platform solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>End-to-end development from concept to launch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>App Store optimization and publishing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 mt-4 md:mt-0">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Our Expertise Includes:</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 break-words text-sm md:text-base">
                    <div className="text-blue-500">{tech.icon}</div>
                    <span className="text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-8 lg:px-8">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Our <span className="text-blue-600">Mobile Development</span> Capabilities
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end mobile app development services covering every stage from ideation to post-launch support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300 h-full" data-aos="fade-up">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="p-2 mr-3 md:mr-4 rounded-full bg-blue-50">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities Section */}
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-8 lg:px-8">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Comprehensive <span className="text-blue-600">Mobile Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the right technology stack for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} 
                 className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                 data-aos="fade-up">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="p-2 mr-3 md:mr-4 rounded-full bg-blue-50">
                  {capability.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{capability.title}</h3>
              </div>
              <ul className="space-y-1 md:space-y-2 pl-2 text-sm md:text-base">
                {capability.items.map((item, itemIndex) => (
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

    {/* Process Section */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-8 lg:px-8">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Our <span className="text-blue-600">Mobile App Development</span> Process
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent, agile methodology that delivers results
          </p>
        </div>

        <div className="relative" data-aos="fade-up">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 -ml-px"></div>
          
          <div className="space-y-6 md:space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => (
              <div key={index} 
                   className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between`}
                   data-aos="fade-up">
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mb-4 lg:mb-0`}>
                  <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
                
                <div className="lg:w-2/12 flex justify-center my-4 lg:my-0">
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg md:text-xl shadow-md md:shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <div className="h-full flex items-center">
                    <div className="bg-gray-50 p-4 md:p-6 rounded-lg md:rounded-xl w-full">
                      <p className="text-gray-600 italic text-sm md:text-base">
                        {index === 0 && "User research, competitive analysis, and technical feasibility study"}
                        {index === 1 && "Interactive prototypes, user testing, and design system creation"}
                        {index === 2 && "2-week sprints with continuous integration and demo sessions"}
                        {index === 3 && "Automated testing, manual QA, and performance optimization"}
                        {index === 4 && "App store optimization, metadata preparation, and submission"}
                        {index === 5 && "Crash monitoring, analytics, and feature roadmap planning"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-8 lg:px-8">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Why Choose Our <span className="text-blue-600">Mobile Development</span> Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver more than just code - we deliver business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <div 
              className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm mb-4 md:mb-6 hover:shadow-md transition-shadow"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <div className="p-2 mr-3 md:mr-4 rounded-full bg-blue-100">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Platform Flexibility</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                We deliver native, cross-platform, or hybrid apps based on your specific business goals, budget, and timeline requirements.
              </p>
            </div>
            
            <div 
              className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm mb-4 md:mb-6 hover:shadow-md transition-shadow"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <div className="p-2 mr-3 md:mr-4 rounded-full bg-purple-100">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">All-In-One Team</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Dedicated designers, developers, QA engineers, and DevOps specialists working seamlessly together on your project.
              </p>
            </div>
            
            <div 
              className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <div className="p-2 mr-3 md:mr-4 rounded-full bg-green-100">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">App Store Ready</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                We handle all aspects of app store guidelines, publishing, versioning, and compliance requirements.
              </p>
            </div>
          </div>
          
          <div>
            <div 
              className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm mb-4 md:mb-6 hover:shadow-md transition-shadow"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <div className="p-2 mr-3 md:mr-4 rounded-full bg-yellow-100">
                  <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Performance & Scalability</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Our apps load instantly, run smoothly at 60fps, and scale effortlessly as your user base grows.
              </p>
            </div>
            
            <div 
              className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm mb-4 md:mb-6 hover:shadow-md transition-shadow"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <div className="p-2 mr-3 md:mr-4 rounded-full bg-red-100">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Security First</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Enterprise-grade security with biometric authentication, data encryption, and secure API communications.
              </p>
            </div>
            
            <div 
              className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-3 md:mb-4">
                <div className="p-2 mr-3 md:mr-4 rounded-full bg-indigo-100">
                  <Cloud className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Ongoing Support</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Continuous updates, feature enhancements, and performance optimization post-launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section 
      className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-4 md:px-8 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
          Ready to Build Your Mobile App?
        </h2>
        <div className="w-20 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
        <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
          Let's discuss your mobile strategy and create an app that stands out in the marketplace.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
          <Link href="/contact-us">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-sm md:text-base"
              data-aos="zoom-in"
            >
              Start Your Project
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-blue-600 hover:bg-white hover:text-blue-600 text-sm md:text-base"
              data-aos="zoom-in"
            >
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);
}