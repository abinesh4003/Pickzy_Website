'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import {
  Smartphone,
  Globe,
  Monitor,
  Plug,
  ArrowRightLeft,
  X,
  Github,
  ExternalLink
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Sparkles, Cpu } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All', icon: <ArrowRightLeft className="w-4 h-4" /> },
    { id: 'web-development', label: 'Web Development', icon: <Globe className="w-4 h-4" /> },
    { id: 'mobile-development', label: 'Mobile Development', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'healthcare', label: 'Healthcare', icon: <Plug className="w-4 h-4" /> },
    { id: 'enterprise', label: 'Enterprise', icon: <Monitor className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <ArrowRightLeft className="w-4 h-4" /> },
    { id: 'real-estate', label: 'Real Estate', icon: <ArrowRightLeft className="w-4 h-4" /> },
    { id: 'finance', label: 'Finance', icon: <ArrowRightLeft className="w-4 h-4" /> },
    { id: 'saas', label: 'SaaS', icon: <ArrowRightLeft className="w-4 h-4" /> },
  ];

  const projects = [
    {
  id: 'algo-trading',
  title: "Algo Trading Platform",
  category: "finance",
  type: "Finance",
  description: "Designed and implemented a fully automated, high-frequency trading system tailored for NSE intraday equity markets with advanced risk control.",
  image: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["Node.js", "Python (LSTM)", "MongoDB", "Broker APIs"],
  features: [
    "Real-time price tracking",
    "LSTM trend forecasting",
    "AI-based stop-loss",
    "BTST/short trade strategies",
    "Tick-data storage",
    "Broker API integration"
  ],
  client: "Proprietary In-house",
  duration: "6 months",
  team: "4 developers"
},
{
  id: 'nubet',
  title: "Nubet.com",
  category: "web-development",
  type: "Web Development",
  description: "Secure online betting platform for European client with role-based access and real-time wallet management with Finplay integration.",
  image: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["PHP", "Node.js", "MongoDB", "MySQL", "Redis", "React.js", "Stripe"],
  features: [
    "Role-based access control",
    "Finplay integration",
    "Custom admin dashboard",
    "Redis caching",
    "Real-time transactions"
  ],
  client: "European Betting Client",
  duration: "8 months",
  team: "7 developers"
},
{
  id: 'bayfay',
  title: "BayFay",
  category: "saas",
  type: "SaaS",
  description: "SaaS retail commerce platform enabling merchants and farmers to launch geo-targeted storefronts with complete retail ecosystem support.",
  image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  tech: ["Node.js", "Express", "React.js", "Angular", "MongoDB", "Redis", "Kotlin", "Swift", "JWT Auth"],
  features: [
    "Multi-tenant SaaS architecture",
    "Geo-visibility",
    "Secure internal wallet",
    "Multiple app ecosystem",
    "Live tracking",
    "OWASP-compliant security"
  ],
  client: "Retail SaaS Provider",
  duration: "9 months",
  team: "8 developers"
},
    {
      id: 'ecommerce',
      title: "E-commerce Platform",
      category: "web-development",
      type: "Web Development",
      description: "Built a scalable e-commerce solution handling 10M+ transactions annually with advanced analytics and inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
      features: ["Real-time inventory", "Payment processing", "Analytics dashboard", "Mobile responsive"],
      client: "RetailCorp",
      duration: "6 months",
      team: "8 developers"
    },
    {
      id: 'healthcare',
      title: "Healthcare Management System",
      category: "healthcare",
      type: "Healthcare",
      description: "Developed HIPAA-compliant platform for patient management, telemedicine, and electronic health records.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "MongoDB", "Socket.io", "Azure", "FHIR"],
      features: ["Patient portal", "Telemedicine", "EHR integration", "Appointment scheduling"],
      client: "MedTech Solutions",
      duration: "8 months",
      team: "12 developers"
    },
    {
      id: 'fintech',
      title: "FinTech Mobile App",
      category: "mobile-development",
      type: "Mobile Development",
      description: "Created secure banking application with real-time transactions, budgeting tools, and investment tracking.",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Python", "Redis", "Docker", "Kubernetes"],
      features: ["Biometric auth", "Real-time transactions", "Investment tracking", "Budget management"],
      client: "FinanceFirst",
      duration: "10 months",
      team: "15 developers"
    },
    {
      id: 'supply-chain',
      title: "Supply Chain Management",
      category: "enterprise",
      type: "Enterprise",
      description: "Enterprise solution for supply chain optimization with IoT integration and predictive analytics.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Angular", "Java", "Oracle", "Apache Kafka", "TensorFlow"],
      features: ["IoT integration", "Predictive analytics", "Real-time tracking", "Automated reporting"],
      client: "LogisticsPro",
      duration: "12 months",
      team: "20 developers"
    },
    {
      id: 'edtech',
      title: "EdTech Learning Platform",
      category: "education",
      type: "Education",
      description: "Interactive learning platform with video streaming, assessments, and progress tracking for online education.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Laravel", "MySQL", "WebRTC", "AWS S3"],
      features: ["Video streaming", "Interactive assessments", "Progress tracking", "Discussion forums"],
      client: "EduTech Inc",
      duration: "7 months",
      team: "10 developers"
    },
    {
      id: 'real-estate',
      title: "Real Estate CRM",
      category: "real-estate",
      type: "Real Estate",
      description: "Comprehensive CRM system for real estate agencies with lead management and property listings.",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Express.js", "MongoDB", "Cloudinary", "Twilio"],
      features: ["Lead management", "Property listings", "Document management", "Communication tools"],
      client: "RealtyMax",
      duration: "5 months",
      team: "6 developers"
    },
    {
      id: 'equal-i',
      title: "Equal-i",
      category: "iot",
      type: "IoT",
      description: "Mobile app designed for a patented teleconference imaging system that works with a patented hardware board component.",
      image: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS SDK", "WebRTC", "Bluetooth", "Hardware Integration"],
      features: ["Video conferencing", "Hardware integration", "Real-time processing"],
      client: "Confidential",
      duration: "9 months",
      team: "5 developers"
    },
    {
      id: 'offline-ticketing',
      title: "Offline Ticketing",
      category: "iot",
      type: "IoT",
      description: "Automated traffic citation system that expedites traffic ticket issuance with seamless continuity and integration.",
      image: "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Android", "Bluetooth", "Thermal Printing", "Offline Sync"],
      features: ["Offline operation", "Ticket generation", "Data synchronization"],
      client: "Municipal Government",
      duration: "6 months",
      team: "4 developers"
    },
    {
      id: 'light-house-vision',
      title: "Light House Vision",
      category: "iot",
      type: "IoT",
      description: "Clip-on device that makes smartphones and tablets more accessible with big character interface and high contrasts.",
      image: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "Accessibility API", "Bluetooth Low Energy"],
      features: ["Accessibility features", "Hardware integration", "Custom UI"],
      client: "Accessibility Tech",
      duration: "4 months",
      team: "3 developers"
    },
    {
      id: 'elfkins',
      title: "Elfkins",
      category: "iot",
      type: "IoT",
      description: "Marketing and analytics platform backed by big data and consulting services.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "Big Data", "Analytics"],
      features: ["Data visualization", "Marketing tools", "Analytics dashboard"],
      client: "Marketing Corp",
      duration: "8 months",
      team: "7 developers"
    },
    {
      id: 'heartface',
      title: "HeartFace",
      category: "mobile-development",
      type: "Mobile",
      description: "Online shopping platform with the earth's biggest selection of books, magazines, music, DVDs, and electronics.",
      image: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "Swift", "Payment Processing", "Recommendation Engine"],
      features: ["E-commerce", "Recommendations", "Payment processing"],
      client: "Retail Giant",
      duration: "7 months",
      team: "6 developers"
    },
    {
      id: 'miss-me-kiss-me',
      title: "MISS ME KISS ME",
      category: "mobile-development",
      type: "Mobile",
      description: "App that keeps relationships alive by sending virtual kisses to loved ones over long distances.",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "Swift", "Push Notifications", "Social Features"],
      features: ["Virtual gifts", "Notifications", "Social integration"],
      client: "Social Apps Inc",
      duration: "5 months",
      team: "4 developers"
    },
    {
      id: 'spotya',
      title: "SpotYa",
      category: "mobile-development",
      type: "Mobile",
      description: "Fitness app that helps users find and train with different people, featuring the largest exercise database worldwide.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "Swift", "Location Services", "Exercise Database"],
      features: ["Gym buddy finder", "Exercise database", "Training plans"],
      client: "Fitness Network",
      duration: "6 months",
      team: "5 developers"
    },
    {
      id: 'weedseeker',
      title: "WEEDSEEKER",
      category: "web-development",
      type: "Web",
      description: "Website connecting buyers of weed products to growers and dealers with flavor search functionality.",
      image: "https://images.pexels.com/photos/4916562/pexels-photo-4916562.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "Search Algorithms", "E-commerce"],
      features: ["Product search", "Connections platform", "Flavor matching"],
      client: "Cannabis Network",
      duration: "4 months",
      team: "3 developers"
    },
    {
      id: 'forager-pro',
      title: "FORAGER PRO",
      category: "mobile-development",
      type: "Mobile",
      description: "Health app for planning daily meals and tracking dietary habits for weight loss and health improvement.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "HealthKit", "Nutrition Database", "Meal Planning"],
      features: ["Meal planning", "Nutrition tracking", "Health integration"],
      client: "Health & Wellness",
      duration: "5 months",
      team: "4 developers"
    },
    {
      id: 'cocave',
      title: "COCAVE",
      category: "mobile-development",
      type: "Mobile",
      description: "Organic personal care products platform providing solutions for chemical-free personal care.",
      image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "E-commerce", "Product Catalog", "Subscription"],
      features: ["Product catalog", "Subscription", "Organic focus"],
      client: "Organic Goods",
      duration: "4 months",
      team: "3 developers"
    },
    {
      id: 'gym-link',
      title: "GYM LINK",
      category: "mobile-development",
      type: "Mobile",
      description: "Platform for finding personal trainers located close to home, office or favorite hangout spots.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "Location Services", "Booking System", "Payment Processing"],
      features: ["Trainer search", "Booking system", "Location-based"],
      client: "Fitness Network",
      duration: "5 months",
      team: "4 developers"
    },
    {
      id: 'blaster',
      title: "BLASTER",
      category: "mobile-development",
      type: "Mobile",
      description: "Emergency response app for school authorities and rescue teams to track survivors during incidents.",
      image: "https://images.pexels.com/photos/5991246/pexels-photo-5991246.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "Emergency Protocols", "Real-time Tracking", "Alert System"],
      features: ["Emergency response", "Survivor tracking", "Real-time updates"],
      client: "Education Safety",
      duration: "6 months",
      team: "5 developers"
    },
    {
      id: 'ncc-video-connect',
      title: "NCC Video Connect",
      category: "mobile-development",
      type: "Mobile",
      description: "Insurance claim solution allowing users to communicate loss information from the field directly to clients.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["iOS", "Video Streaming", "Document Upload", "Claim Processing"],
      features: ["Video claims", "Document upload", "Field reporting"],
      client: "Insurance Corp",
      duration: "7 months",
      team: "6 developers"
    },
    {
      id: 'computer-doctor',
      title: "COMPUTER DOCTOR",
      category: "enterprise",
      type: "Desktop",
      description: ".NET web application handling inventory management, customer details, purchase orders, and invoicing.",
      image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: [".NET", "SQL Server", "Inventory Management", "Reporting"],
      features: ["Inventory management", "Customer tracking", "Invoicing"],
      client: "IT Services",
      duration: "8 months",
      team: "5 developers"
    }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
            >
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Discover how we've helped businesses transform their operations with innovative software solutions across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "300+", color: "text-blue-600 font-bold text-2xl", label: "Projects Completed" },
              { value: "200+", color: "text-purple-600 font-bold text-2xl", label: "Happy Clients" },
              { value: "15+", color: "text-green-600 font-bold text-2xl", label: "Industries Served" },
              { value: "98%", color: "text-orange-600 font-bold text-2xl", label: "Success Rate" }
            ].map((stat, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={200 + (index * 100)}
              >
                <AnimatedCounter value={stat.value} classname={stat.color} duration={3} />
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
    <Tabs
      defaultValue="all"
      className="w-full"
      onValueChange={(value) => setActiveFilter(value)}
    >
      <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
        {filters.map((filter, index) => (
          <TabsTrigger
            key={filter.id}
            value={filter.id}
            className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-50 transition-colors data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:border-transparent"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <span className="mr-1 sm:mr-2">{filter.icon}</span>
            {filter.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  </div>
</section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <Card
                  className="h-full cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image with Hover Effect */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 ">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Quick View
                      </Button>
                    </div>
                  </div>

                  {/* Card Content - Simplified */}
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start gap-2 mb-3">
                      <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {project.shortDescription || project.description}
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm ">
          {/* Modal Container - scales with zoom but stays within viewport */}
          <div
            className="relative bg-white rounded-lg shadow-xl w-[95vw] max-w-[800px] max-h-[95vh] overflow-hidden p-4"
            style={{
              transform: 'scale(1)',
              transformOrigin: 'center center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 z-10 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Content Grid */}
            <div className="grid grid-rows-[auto_1fr_auto] h-full">
              {/* Header */}
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-gray-900">{selectedProject.title}</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
              </div>

              {/* Main Content - automatically scales */}
              <div className="p-4 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Image */}
                    <div className="relative aspect-video rounded-md overflow-hidden bg-gray-100">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-700 line-clamp-4">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4 ml-4">
                    {/* Features */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 mr-1 text-purple-500" />
                        Key Features
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {selectedProject.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 mr-2"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Cpu className="w-4 h-4 mr-1 text-blue-500" />
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t flex items-center w-full">
                <div className="w-full flex justify-between text-sm">
                
                  <div>
                    <div className="text-gray-500">Duration</div>
                    <div>{selectedProject.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Team</div>
                    <div>{selectedProject.team}</div>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="text-center group hover:-translate-y-1 transition-transform duration-200"
                data-aos="zoom-in"
                data-aos-delay={index % 6 * 50}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="text-lg font-semibold text-gray-900">{tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your ideas and create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-3"
              asChild
            >
              <Link href="/contact-us">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-black border-white hover:bg-white hover:text-blue-600"
              asChild
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