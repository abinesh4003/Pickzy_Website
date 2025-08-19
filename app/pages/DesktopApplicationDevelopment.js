"use client";

import { Monitor, Shield, Zap, Cpu, Database, Code, Layers, Package, Smartphone, Server, Lock, Briefcase, FileText, ShoppingCart, Users, Book, ArrowBigRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DesktopApplicationDevelopment() {

  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure & Reliable",
      description: "Ideal for tools requiring offline access and local storage"
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "High Performance",
      description: "Native speed, better system resource utilization"
    },
    {
      icon: <Cpu className="h-6 w-6 text-green-600" />,
      title: "Full System Access",
      description: "Integrate with printers, file systems, and OS features"
    },
    {
      icon: <Monitor className="h-6 w-6 text-orange-600" />,
      title: "Cross-Platform Ready",
      description: "Build once, run everywhere"
    }
  ];

  const services = [
    {
      title: "Cross-platform apps",
      technologies: "Electron.js, Flutter Desktop, or Tauri"
    },
    {
      title: "Native Windows apps",
      technologies: ".NET (WPF, WinForms) or UWP"
    },
    {
      title: "Native macOS apps",
      technologies: "Swift and SwiftUI"
    },
    {
      title: "Linux apps",
      technologies: "GTK, Qt, or Python"
    },
    {
      title: "Desktop SaaS clients",
      technologies: "Convert your web app to desktop"
    },
    {
      title: "Database integration",
      technologies: "SQLite, MySQL, Realm"
    },
    {
      title: "Packaging & deployment",
      technologies: "MSIX, DMG, AppImage"
    },
    {
      title: "Auto-update systems",
      technologies: "Enterprise-ready solutions"
    }
  ];

  const technologies = {
    languages: ["C#", "C++", "Swift", "Java", "Python", "JavaScript", "Dart"],
    frameworks: ["Electron.js", "Tauri", ".NET MAUI", "JavaFX", "WPF", "Flutter Desktop"],
    databases: ["SQLite", "Realm", "MySQL", "PostgreSQL", "IndexedDB"],
    packaging: ["NSIS", "Inno Setup", "MSIX", "DMG", "AppImage"]
  };

  const useCases = [
    { icon: <ShoppingCart className="h-5 w-5" />, name: "Inventory & POS Systems" },
    { icon: <Users className="h-5 w-5" />, name: "Enterprise Admin Panels & CRMs" },
    { icon: <FileText className="h-5 w-5" />, name: "File and Data Management Tools" },
    { icon: <Monitor className="h-5 w-5" />, name: "Real-time Monitoring Dashboards" },
    { icon: <Briefcase className="h-5 w-5" />, name: "Productivity & Utility Software" },
    { icon: <Book className="h-5 w-5" />, name: "Educational & Offline Training Tools" }
  ];

  const processSteps = [
    { icon: <FileText className="h-6 w-6" />, title: "Requirement Analysis" },
    { icon: <Layers className="h-6 w-6" />, title: "UI/UX Design" },
    { icon: <Code className="h-6 w-6" />, title: "Development & Integration" },
    { icon: <Package className="h-6 w-6" />, title: "Testing & QA" },
    { icon: <Server className="h-6 w-6" />, title: "Packaging & Installer Setup" },
    { icon: <Zap className="h-6 w-6" />, title: "Launch & Support" }
  ];

  return (
    <div className="min-h-screen bg-white">
       
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50"
        data-aos="fade-in"
      >
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('/service/desktop/hero.png')] bg-center bg-no-repeat bg-cover [mask-image:linear-gradient(to_bottom,rgba(37, 37, 37, 1),transparent)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="relative z-10">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                data-aos="fade-up"
              >
                Custom <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Desktop Apps</span> Built for Performance
              </h1>
              <p 
                className="text-xl text-gray-600 mb-8"
                data-aos="fade-up"
                  
              >
                We develop secure, high-performance desktop applications for Windows, macOS, and Linux using modern frameworks like Electron, .NET MAUI, and Flutter Desktop.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-4"
                data-aos="fade-up"
                 
              >
                 <Link href="/contact-us">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                Request Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
                </Link>
                  <Link href="#desktop-casestudies"> 
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-300 hover:bg-white/90 shadow-sm"
                  data-aos="fade-up"
                   
                >
              View Case Studies
                </Button>
                </Link>
              </div>
              
              {/* Tech stack logos */}
              <div 
                className="mt-12"
                data-aos="fade-up"
                 
              >
                <p className="text-sm text-gray-500 mb-4">Built with modern technologies:</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <img src="/service/desktop/p1.png" alt="Electron" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="/service/desktop/p2.png" alt=".NET" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="/service/desktop/p3.jpg" alt="Flutter" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="/service/desktop/p4.webp" alt="Java" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            
            {/* Image/illustration */}
            <div className="relative">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
                data-aos="fade-left"
                 
              >
                <img 
                  src="/service/desktop/hero.png" 
                  alt="Desktop Application UI Showcase" 
                  className="w-full h-auto"
                />
                {/* Floating UI elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
              </div>
              
              {/* Floating badge */}
              <div 
                className="absolute -bottom-8 -right-8 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 flex items-center"
                data-aos="zoom-in"
                 
              >
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Trusted by 250+</p>
                  <p className="text-sm text-gray-500">Businesses worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" id="desktop-casestudies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
  Why Choose <span className="text-blue-600">Desktop Applications</span> in 2025?
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                 
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 mr-4 rounded-full bg-blue-50">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
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
           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
  End-to-End <span className="text-blue-600">Desktop App</span> Development
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
                
            >
              We handle the full lifecycle—from ideation to deployment—whether you need a lightweight utility app or a full-featured enterprise-grade platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-all bg-white"
                data-aos="fade-up"
                 
              >
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.technologies}</p>
              </div>
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
<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
  Modern Tech Stack for <span className="text-blue-600">Modern Desktop</span> Software
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              className="p-6 border border-gray-100 rounded-lg bg-gray-50"
              data-aos="fade-up"
                
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Code className="h-5 w-5 mr-2 text-blue-600" /> Languages
              </h3>
              <ul className="space-y-2">
                {technologies.languages.map((lang, i) => (
                  <span key={i} className='text-gray-600 flex'><ArrowBigRight className="h-5 w-5 mr-2 text-blue-600" /> {lang}</span>
                ))}
              </ul>
            </div>
            
            <div 
              className="p-6 border border-gray-100 rounded-lg bg-gray-50"
              data-aos="fade-up"
               
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Layers className="h-5 w-5 mr-2 text-purple-600" /> Frameworks
              </h3>
              <ul className="space-y-2">
                {technologies.frameworks.map((framework, i) => (
                  <span key={i} className='text-gray-600 flex'><ArrowBigRight className="h-5 w-5 mr-2 text-purple-600" /> {framework}</span>
                ))}
              </ul>
            </div>
            
            <div 
              className="p-6 border border-gray-100 rounded-lg bg-gray-50"
              data-aos="fade-up"
               
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-600" /> Databases
              </h3>
              <ul className="space-y-2">
                {technologies.databases.map((db, i) => (
                  <span key={i} className='text-gray-600 flex'><ArrowBigRight className="h-5 w-5 mr-2 text-green-600" /> {db}</span>
                ))}
              </ul>
            </div>
            
            <div 
              className="p-6 border border-gray-100 rounded-lg bg-gray-50"
              data-aos="fade-up"
               
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Package className="h-5 w-5 mr-2 text-orange-600" /> Packaging
              </h3>
              <ul className="space-y-2">
                {technologies.packaging.map((tool, i) => (
                  <span key={i} className='text-gray-600 flex'><ArrowBigRight className="h-5 w-5 mr-2 text-orange-600" /> {tool}</span>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
  Apps We <span className="text-blue-600">Build</span>
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-all bg-white flex items-center"
                data-aos="fade-up"
                 
              >
                <div className="p-2 mr-4 rounded-full bg-blue-50">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold">{useCase.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
  From <span className="text-blue-600">Idea</span> to <span className="text-blue-600">Install</span>
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="text-center"
                data-aos="fade-up"
                 
              >
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <span 
              className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4"
              data-aos="fade-up"
                
            >
              Why Choose Us
            </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
  The Right <span className="text-blue-600">Partner</span> for Your Desktop Application
</h2>
<div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

            <p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
               
            >
              We don't just build apps - we create solutions that drive your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                bg: "bg-blue-100",
                text: "text-blue-600",
                title: "Technology Agnostic",
                content: "We recommend the best stack for your specific needs, whether it's Electron for cross-platform or .NET for Windows."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                bg: "bg-purple-100",
                text: "text-purple-600",
                title: "Proven Process",
                content: "Our agile methodology ensures on-time delivery with bi-weekly demos and 100% transparency."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                bg: "bg-green-100",
                text: "text-green-600",
                title: "Expert Team",
                content: "15+ years average experience per developer across Windows, macOS, and Linux platforms."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                bg: "bg-orange-100",
                text: "text-orange-600",
                title: "Long-term Partnership",
                content: "We provide ongoing support, updates, and scaling options as your business grows."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                 
              >
                <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div 
            className="mt-20 pt-10 border-t border-gray-200"
            data-aos="fade-up"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div 
                className="text-center"
                data-aos="fade-up"
                  
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-gray-600 font-medium">Years in Desktop Development</p>
              </div>
              <div 
                className="text-center"
                data-aos="fade-up"
                 
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">250+</div>
                <p className="text-gray-600 font-medium">Successful Projects Delivered</p>
              </div>
              <div 
                className="text-center"
                data-aos="fade-up"
                 
              >
                <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                <p className="text-gray-600 font-medium">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-gradient-to-br from-blue-600 to-purple-600"
        data-aos="fade-in"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-3xl font-bold text-white mb-6 text-center">
  Let's Build Your <span className="text-blue-200">Desktop App</span>
</h2>
<div className="w-24 h-1 bg-blue-200 mx-auto mb-8"></div>
          <p 
            className="text-xl text-blue-100 mb-8"
            data-aos="fade-up"
              
          >
            Have an idea for a desktop application? We're ready to build it with precision and performance.
          </p>
          <div 
            className="space-y-4 sm:space-y-0 sm:space-x-4"
            data-aos="fade-up"
             
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
             <Link href="/contact-us"> Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-600 px-8">
              <Link href="/contact-us">Schedule a Free Demo</Link>
            </Button>
          </div>
        </div>
      </section>

       
    </div>
  );
}