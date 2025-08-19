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
    { id: 'finance', label: 'Finance', icon: <ArrowRightLeft className="w-4 h-4" /> },
    { id: 'saas', label: 'SaaS', icon: <ArrowRightLeft className="w-4 h-4" /> },   
    { id: 'iot', label: 'IoT', icon: <ArrowRightLeft className="w-4 h-4" /> }, // Added IoT filter
    { id: 'cross-platform', label: 'Cross Platform', icon: <ArrowRightLeft className="w-4 h-4" /> } // Added Cross Platform filter
]
 
  const projects = [
      {
  id: 'algo-trading',
  title: "Algo Trading Platform",
  category: "finance",
  type: "Finance",
  description: "Designed and implemented a fully automated, high-frequency trading system tailored for NSE intraday equity markets with advanced risk control.",
  image: "/images/portfolio-images/algo_trade.png",
   modalImage: "/images/portfolio-images/algo_trade.png",
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
  image: "/images/portfolio-images/newbet.png",
  modalImage: "/images/portfolio-images/newbet_model.jpg",
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
  image: "/images/portfolio-images/bayfay_model.jpg",
  modalImage: "/images/portfolio-images/bayfay_model.jpg",
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
    id: 'trigger-demo5',
    title: 'Equal-i',
    category: 'iot',
    type: 'IOT',
    description: 'Equal-i is a Mobile app, designed by us for a Patented Teleconference Imaging System, that works with the support of a Patented Hardware Board component. Developed as an executable program, this system makes video Conferincing a hassle free process.',
    image: '/images/portfolio-images/equ_front.jpg',
    modalImage: '/images/portfolio-images/Equal-i.jpg',
    tech: ["iOS SDK", "WebRTC", "Bluetooth", "Hardware Integration"],
    features: [
      "Video conferencing",
      "Hardware integration",
      "Real-time processing"
    ],
    client: "Confidential",
    duration: "9 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo15',
    title: 'Offline Ticketing',
    category: 'iot',
    type: 'IOT',
    description: 'Offline ticketing automates traffic citations, expedites traffic ticket issuance creating a more efficient process with seamless continuity and integration.',
    image: '/images/portfolio-images/Offline-ticketing.jpg',
    modalImage: '/images/portfolio-images/Offline-ticketing-view.jpg',
    tech: ["Android", "Bluetooth", "Thermal Printing", "Offline Sync"],
    features: [
      "Offline operation",
      "Ticket generation",
      "Data synchronization"
    ],
    client: "Municipal Government",
    duration: "6 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo1',
    title: 'Light House Vision',
    category: 'iot',
    type: 'IOT',
    description: 'Ever struggled to read on your smartphone/tablet because of your sight? Light house vision clip makes your devices accessible and its big character interface, large keyboards and contrasts are very useful.',
    image: '/images/portfolio-images/LightHouseVision.jpg',
    modalImage: '/images/portfolio-images/LightHouseVision-view.jpg',
    tech: ["iOS", "Accessibility API", "Bluetooth Low Energy"],
    features: [
      "Accessibility features",
      "Hardware integration",
      "Custom UI"
    ],
    client: "Accessibility Tech",
    duration: "4 months",
    team: "3 developers"
  },
  {
    id: 'trigger-demo',
    title: 'Elfkins',
    category: 'iot',
    type: 'IOT',
    description: 'The highest caliber marketing, analytics & collaboration apps – backed by big data & world class consulting services.',
    image: '/images/portfolio-images/elfkin.jpg',
    modalImage: '/images/portfolio-images/Elfin-view.jpg',
    tech: ["React", "Node.js", "Big Data", "Analytics"],
    features: [
      "Data visualization",
      "Marketing tools",
      "Analytics dashboard"
    ],
    client: "Marketing Corp",
    duration: "8 months",
    team: "7 developers"
  },
  {
    id: 'trigger-demo3',
    title: 'HeartFace',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Online shopping from the earth\'s biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, broadband & dsl, gourmet food & just about anything else.',
    image: '/images/portfolio-images/Heartface.jpg',
    modalImage: '/images/portfolio-images/Hartface-view.jpg',
    tech: ["iOS", "Swift", "Payment Processing", "Recommendation Engine"],
    features: [
      "E-commerce",
      "Recommendations",
      "Payment processing"
    ],
    client: "Retail Giant",
    duration: "7 months",
    team: "6 developers"
  },
  {
    id: 'trigger-demo6',
    title: 'MISS ME KISS ME',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Miss Me Kiss Me is an app that will keep your relationships alive. Long distance hurting your romantic sentiments? No worries. Send a quick kiss using the Miss Me Kiss Me app.',
    image: '/images/portfolio-images/miss_front.jpg',
    modalImage: '/images/portfolio-images/Miss-me-Kiss-me.jpg',
    tech: ["iOS", "Swift", "Push Notifications", "Social Features"],
    features: [
      "Virtual gifts",
      "Notifications",
      "Social integration"
    ],
    client: "Social Apps Inc",
    duration: "5 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo4',
    title: 'SpotYa',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Find a fitness buddy with SpotYa, the easiest way to meet and train with different people. Finding a gym buddy has never been easier. We have the largest exercise data base world wide.',
    image: '/images/portfolio-images/Spotya.jpg',
    modalImage: '/images/portfolio-images/Spotya-view.jpg',
    tech: ["iOS", "Swift", "Location Services", "Exercise Database"],
    features: [
      "Gym buddy finder",
      "Exercise database",
      "Training plans"
    ],
    client: "Fitness Network",
    duration: "6 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo7',
    title: 'WEEDSEEKER',
    category: 'web-development',
    type: 'Web',
    description: 'Weedseeker is a website that connects buyers of weed products to growers and dealers. The search button on the home page enables users to search for their favorite flavors of cannabis.',
    image: '/images/portfolio-images/weed_front.jpg',
    modalImage: '/images/portfolio-images/Weedseeker.jpg',
    tech: ["React", "Node.js", "Search Algorithms", "E-commerce"],
    features: [
      "Product search",
      "Connections platform",
      "Flavor matching"
    ],
    client: "Cannabis Network",
    duration: "4 months",
    team: "3 developers"
  },
  {
    id: 'trigger-demo8',
    title: 'FORAGER PRO',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Health conscious individuals head straight to Forager Pro for planning their daily meals. Losing weight can be a daunting task, especially when you have no idea if your dietary habits are healthy or not.',
    image: '/images/portfolio-images/foragertwo.jpg',
    modalImage: '/images/portfolio-images/FORAGER-PRO.jpg',
    tech: ["iOS", "HealthKit", "Nutrition Database", "Meal Planning"],
    features: [
      "Meal planning",
      "Nutrition tracking",
      "Health integration"
    ],
    client: "Health & Wellness",
    duration: "5 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo8a',
    title: 'FORAGER PRO',
    category: 'web-development',
    type: 'Web',
    description: 'Health conscious individuals head straight to Forager Pro for planning their daily meals. Losing weight can be a daunting task, especially when you have no idea if your dietary habits are healthy or not.',
    image: '/images/portfolio-images/Forager-web.jpg',
    modalImage: '/images/portfolio-images/Forager-web.jpg',
    tech: ["React", "Node.js", "MongoDB", "Nutrition API"],
    features: [
      "Web-based meal planning",
      "Cross-platform sync",
      "Nutrition analytics"
    ],
    client: "Health & Wellness",
    duration: "5 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo9',
    title: 'COCAVE',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Why spoil your health with chemical based personal care products where Global Goods Biz. (Cocave) provides you organic solutions.',
    image: '/images/portfolio-images/coc_front.jpg',
    modalImage: '/images/portfolio-images/Cocave.jpg',
    tech: ["iOS", "E-commerce", "Product Catalog", "Subscription"],
    features: [
      "Product catalog",
      "Subscription",
      "Organic focus"
    ],
    client: "Organic Goods",
    duration: "4 months",
    team: "3 developers"
  },
  {
    id: 'trigger-demo10',
    title: 'GYM LINK',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Find your perfect personal trainer with Gym Link. Search for personal trainers located close to your home, office or favourite hangout.',
    image: '/images/portfolio-images/gym_front.jpg',
    modalImage: '/images/portfolio-images/Gym-Link.jpg',
    tech: ["iOS", "Location Services", "Booking System", "Payment Processing"],
    features: [
      "Trainer search",
      "Booking system",
      "Location-based"
    ],
    client: "Fitness Network",
    duration: "5 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo11',
    title: 'BLASTER',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Blaster Student assures to make things easier for the school authorities and rescue teams by providing a quick and comprehensive control over the count and details of survivors.',
    image: '/images/portfolio-images/blaster.jpg',
    modalImage: '/images/portfolio-images/Blaster_view.jpg',
    tech: ["iOS", "Emergency Protocols", "Real-time Tracking", "Alert System"],
    features: [
      "Emergency response",
      "Survivor tracking",
      "Real-time updates"
    ],
    client: "Education Safety",
    duration: "6 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo12',
    title: 'BLASTER',
    category: 'education',
    type: 'Desktop',
    description: 'Blaster Student assures to make things easier for the school authorities and rescue teams by providing a quick and comprehensive control over the count and details of survivors.',
    image: '/images/portfolio-images/blaster_front.jpg',
    modalImage: '/images/portfolio-images/Blaster-Web.jpg',
    tech: [".NET", "SQL Server", "Windows Services", "Desktop UI"],
    features: [
      "Desktop version",
      "Offline capabilities",
      "Windows integration"
    ],
    client: "Education Safety",
    duration: "6 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo13',
    title: 'NCC Video Connect',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'NCC Video Connect is the nation\'s most advanced insurance claim solution provider. The app allows our users to communicate immediate loss information from the field directly to our clients.',
    image: '/images/portfolio-images/ncc-front.png',
    modalImage: '/images/portfolio-images/NCC.jpg',
    tech: ["iOS", "Video Streaming", "Document Upload", "Claim Processing"],
    features: [
      "Video claims",
      "Document upload",
      "Field reporting"
    ],
    client: "Insurance Corp",
    duration: "7 months",
    team: "6 developers"
  },
  {
    id: 'trigger-demo14',
    title: 'COMPUTER DOCTOR',
    category: 'enterprise',
    type: 'Desktop',
    description: 'Computer Doctor is a .NET web Application handles Inventory management process, Customer details, Purchase and sales order, Invoice Generation, Payment Tracking and Appointment scheduling.',
    image: '/images/portfolio-images/cd-home banner.jpg',
    modalImage: '/images/portfolio-images/Computer-Doctor.jpg',
    tech: [".NET", "SQL Server", "Inventory Management", "Reporting"],
    features: [
      "Inventory management",
      "Customer tracking",
      "Invoicing"
    ],
    client: "IT Services",
    duration: "8 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo35',
    title: 'Super Market Billing Software',
    category: 'enterprise',
    type: 'Desktop',
    description: 'Our software gives you complete control over your business and is in perfect compliance with the industry standards. Our software fully understands the need for convenience and efficiency in any industry.',
    image: '/images/portfolio-images/billing software-pop-up.jpg',
    modalImage: '/images/portfolio-images/billing software-view.jpg',
    tech: [".NET", "SQL Server", "Barcode Scanning", "POS Integration"],
    features: [
      "POS system",
      "Inventory tracking",
      "Barcode support"
    ],
    client: "Retail Chain",
    duration: "8 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo23',
    title: 'HIIT',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Welcome to this easy to use HIIT & Tabata Workout Timer giving you the possibility to measure your training and achieve even better results.',
    image: '/images/portfolio-images/HIIT.jpg',
    modalImage: '/images/portfolio-images/HIIT-view.jpg',
    tech: ["iOS", "Swift", "HealthKit", "Workout Tracking"],
    features: [
      "HIIT timer",
      "Workout tracking",
      "Health integration"
    ],
    client: "Fitness App",
    duration: "4 months",
    team: "3 developers"
  },
  {
    id: 'trigger-demo25',
    title: 'TO SHARE',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'This app helps to share the play time or usage time equally between the kids or teenage who interested to share usage of one IPAD/IPHONE.',
    image: '/images/portfolio-images/To-Share.jpg',
    modalImage: '/images/portfolio-images/To-Share-view.jpg',
    tech: ["iOS", "Swift", "Parental Controls", "Time Management"],
    features: [
      "Time sharing",
      "Usage tracking",
      "Parental controls"
    ],
    client: "Family Tech",
    duration: "3 months",
    team: "2 developers"
  },
  {
    id: 'trigger-demo26',
    title: 'ECOMMERCE MAGAZIN',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Its an e-commerce magazine. Our intuitive help section is the one-stop destination to manage your account, email preferences and magazine subscription.',
    image: '/images/portfolio-images/ecommerce-magazin.jpg',
    modalImage: '/images/portfolio-images/ecommerce-magazin-view.jpg',
    tech: ["iOS", "Swift", "E-commerce", "Subscription"],
    features: [
      "Digital magazine",
      "Subscription management",
      "E-commerce"
    ],
    client: "Media Company",
    duration: "5 months",
    team: "3 developers"
  },
  {
    id: 'trigger-demo27',
    title: 'FLURV',
    category: 'mobile-development',
    type: 'Mobile',
    description: 'Flurv is the global network for meeting new people. Instantly meet people near you or around the world! See who is broadcasting in Live.',
    image: '/images/portfolio-images/flurv.jpg',
    modalImage: '/images/portfolio-images/flurv-view.jpg',
    tech: ["iOS", "Swift", "Location Services", "Social Networking"],
    features: [
      "Social networking",
      "Live broadcasting",
      "Location-based"
    ],
    client: "Social Network",
    duration: "6 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo28',
    title: 'CITY LIMOUSINE',
    category: 'web-development',
    type: 'Web',
    description: 'Our chauffeured car services offering you the most comfortable way of travelling in Paris. We can adjust to your needs with our luxury vehicles.',
    image: '/images/portfolio-images/City-Limousine.jpg',
    modalImage: '/images/portfolio-images/City-Limousine-Paris.jpg',
    tech: ["React", "Node.js", "Booking System", "Payment Processing"],
    features: [
      "Luxury car booking",
      "Online payments",
      "Schedule management"
    ],
    client: "Transportation Service",
    duration: "4 months",
    team: "3 developers"
  },
  {
    id: 'trigger-demo29',
    title: 'CLASSIC VACATIONS',
    category: 'web-development',
    type: 'Web',
    description: 'A premier provider of vacations for discerning travelers, Classic Vacations offers a full line of luxury accommodations, first class and private transportation options.',
    image: '/images/portfolio-images/Classic-Vacations-pop-up.jpg',
    modalImage: '/images/portfolio-images/Classic-Vacations.jpg',
    tech: ["Angular", "Node.js", "Travel API", "Booking System"],
    features: [
      "Vacation packages",
      "Luxury bookings",
      "Travel planning"
    ],
    client: "Travel Agency",
    duration: "5 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo30',
    title: 'EHR EVOLUTION',
    category: 'healthcare',
    type: 'Web',
    description: 'A single platform that unifies clinical, operational, and financial data to drive improvements using real time information.',
    image: '/images/portfolio-images/EHR.jpg',
    modalImage: '/images/portfolio-images/EHR-Evolution.jpg',
    tech: ["React", "Node.js", "HL7/FHIR", "Healthcare API"],
    features: [
      "Health records",
      "Real-time data",
      "Clinical integration"
    ],
    client: "Healthcare Provider",
    duration: "8 months",
    team: "7 developers"
  },
  {
    id: 'trigger-demo31',
    title: 'T5 DATA CENTERS',
    category: 'enterprise',
    type: 'Web',
    description: 'T5 Data Centers, innovators in providing secure, customizable, hyperscale computing environments for enterprise companies.',
    image: '/images/portfolio-images/T5-Data-Centers.jpg',
    modalImage: '/images/portfolio-images/T5-Data-Centers-Enterprise-Wholesale-Solutions.jpg',
    tech: ["Vue.js", "Node.js", "Enterprise Security", "Data Visualization"],
    features: [
      "Data center management",
      "Enterprise security",
      "Infrastructure monitoring"
    ],
    client: "Data Center Provider",
    duration: "6 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo32',
    title: 'WI SPA USA',
    category: 'web-development',
    type: 'Web',
    description: 'Get away from the city for an hour. Or stay away for a day. Just minutes from Hollywood and downtown. Wi Spa is a convenient and affordable place to de-stress and be pampered.',
    image: '/images/portfolio-images/WiSpa.jpg',
    modalImage: '/images/portfolio-images/WiSpa-USA-24 Hour-Spa-in-Los-Angeles.jpg',
    tech: ["React", "Node.js", "Booking System", "Spa Management"],
    features: [
      "Spa booking",
      "Service catalog",
      "Membership management"
    ],
    client: "Spa Chain",
    duration: "4 months",
    team: "3 developers"
  },
  {
    id: 'trigger-demo33',
    title: 'PLE',
    category: 'web-development',
    type: 'Web',
    description: 'Traveling through a large, busy airport can be a harrowing experience. Booking one of our airport pickup and transfers to Le bourget or other Paris airport transfer in advance takes a big problem off your mind.',
    image: '/images/portfolio-images/Parislimo-express-pop-up.jpg',
    modalImage: '/images/portfolio-images/Parislimoexpress.jpg',
    tech: ["Angular", "Node.js", "Booking System", "Transportation API"],
    features: [
      "Airport transfers",
      "Online booking",
      "Fleet management"
    ],
    client: "Transportation Service",
    duration: "5 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo2',
    title: 'Smart Home',
    category: 'iot',
    type: 'IOT',
    description: 'AppPics is a web application developed in HTML 5, CSS 3, PHP, JQuery, AJAX & DOM. This web application will let any user to pick an app from the pre existing apps gallery.',
    image: '/images/portfolio-images/smart-home.jpg',
    modalImage: '/images/portfolio-images/smart-home-view.jpg',
    tech: ["IoT", "Home Automation", "Mobile App", "Cloud Integration"],
    features: [
      "Smart home control",
      "Device automation",
      "Remote access"
    ],
    client: "Home Automation",
    duration: "6 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo20',
    title: 'Home Controls',
    category: 'iot',
    type: 'IOT',
    description: 'AppPics is a web application developed in HTML 5, CSS 3, PHP, JQuery, AJAX & DOM. This web application will let any user to pick an app from the pre existing apps gallery.',
    image: '/images/portfolio-images/Home-Controls.jpg',
    modalImage: '/images/portfolio-images/Home-Control-view.jpg',
    tech: ["IoT", "Z-Wave", "Zigbee", "Home Automation"],
    features: [
      "Device control",
      "Automation rules",
      "Energy monitoring"
    ],
    client: "Smart Home",
    duration: "5 months",
    team: "3 developers"
  },
  {
    id: 'trigger-demo21',
    title: 'Ez Trailer',
    category: 'iot',
    type: 'IOT',
    description: 'Use your smartphone to browse, explore and manage files of any Bluetooth ready device, sensors are installed on the bogie of axle box at each shaft, connected with temperature monitoring device directly.',
    image: '/images/portfolio-images/EzTrailer.jpg',
    modalImage: '/images/portfolio-images/EzTrailer-view.jpg',
    tech: ["IoT", "Bluetooth", "Sensor Network", "Mobile App"],
    features: [
      "Trailer monitoring",
      "Sensor data",
      "Bluetooth connectivity"
    ],
    client: "Transportation",
    duration: "7 months",
    team: "5 developers"
  },
  {
    id: 'trigger-demo22',
    title: 'HOME AUTOMATION',
    category: 'iot',
    type: 'IOT',
    description: 'AppPics is a web application developed in HTML 5, CSS 3, PHP, JQuery, AJAX & DOM. This web application will let any user to pick an app from the pre existing apps gallery.',
    image: '/images/portfolio-images/HOME-AUTOMATION.png',
    modalImage: '/images/portfolio-images/HOME-AUTOMATION-view.jpg',
    tech: ["IoT", "Home Automation", "Voice Control", "Mobile App"],
    features: [
      "Voice control",
      "Scene automation",
      "Energy saving"
    ],
    client: "Smart Home",
    duration: "6 months",
    team: "4 developers"
  },
  {
    id: 'trigger-demo16',
    title: 'React Native',
    category: 'cross-platform',
    type: 'Cross Platform',
    description: 'With React Native, you don\'t build a "mobile web app", an "HTML5 app", or a "hybrid app". You build a real mobile app that\'s indistinguishable.',
    image: '/images/portfolio-images/React-Native.jpg',
    modalImage: '/images/portfolio-images/React-Native-view.jpg',
    tech: ["React Native", "JavaScript", "iOS", "Android"],
    features: [
      "Cross-platform",
      "Native performance",
      "Hot reloading"
    ],
    client: "Various",
    duration: "Ongoing",
    team: "Framework"
  },
  {
    id: 'trigger-demo17',
    title: 'Angular JS',
    category: 'cross-platform',
    type: 'Cross Platform',
    description: 'Angular JS stack is one of the best stacks for web application developments. Angular JS focus and aims to work on fast and modern browsers such as Chrome, firefox, Opera, Internet Explorer 8, Android, iOS6+ etc.',
    image: '/images/portfolio-images/Angular-JS.jpg',
    modalImage: '/images/portfolio-images/Angular-JS-view.jpg',
    tech: ["AngularJS", "JavaScript", "HTML5", "CSS3"],
    features: [
      "SPA framework",
      "Two-way binding",
      "Modular architecture"
    ],
    client: "Various",
    duration: "Ongoing",
    team: "Framework"
  },
  {
    id: 'trigger-demo18',
    title: 'Ionic',
    category: 'cross-platform',
    type: 'Cross Platform',
    description: 'The top open source framework for building amazing mobile apps.Ionic is the beautiful, free and open source mobile SDK for developing native and progressive web apps with ease.',
    image: '/images/portfolio-images/ionic.jpg',
    modalImage: '/images/portfolio-images/ionic-view.jpg',
    tech: ["Ionic", "Angular", "Cordova", "Hybrid Apps"],
    features: [
      "Hybrid apps",
      "UI components",
      "Cross-platform"
    ],
    client: "Various",
    duration: "Ongoing",
    team: "Framework"
  },
  {
    id: 'trigger-demo19',
    title: 'Xamarin',
    category: 'cross-platform',
    type: 'Cross Platform',
    description: 'Stay on top of mobile trends with curriculum that\'s constantly updated by a dedicated team of mobile experts. Individually, Xamarin\'s mobile lifecycle products are best-in-class.',
    image: '/images/portfolio-images/xamarin.jpg',
    modalImage: '/images/portfolio-images/xamarin-view.jpg',
    tech: ["Xamarin", "C#", ".NET", "Mobile"],
    features: [
      "Native performance",
      "Shared codebase",
      "Microsoft ecosystem"
    ],
    client: "Various",
    duration: "Ongoing",
    team: "Framework"
  },
  {
  id: 'face-guru-dox-sales',
  title: "Face Guru, Face Dox & Sales Guru",
  category: "saas",
  type: "SaaS",
  description: "AI-powered marketing, analytics, and collaboration suite leveraging big data and facial recognition to optimize sales, customer profiling, and targeted outreach for enterprises.",
  image: "/images/portfolio-images/faceguru_model.jpg ",
  modalImage: "/images/portfolio-images/Face-Guru.jpg",
  tech: [
    "Python", 
    "TensorFlow/Keras", 
    "Node.js", 
    "React.js", 
    "AWS/GCP", 
    "OpenCV", 
    "PostgreSQL", 
    "Redis", 
    "OAuth 2.0"
  ],
  features: [
    "Facial recognition & sentiment analysis (Face Guru)",
    "Data aggregation & customer profiling (Face Dox)",
    "AI-driven sales pipeline optimization (Sales Guru)",
    "Real-time analytics dashboard",
    "Multi-platform integration (CRM, ERP, etc.)",
    "GDPR/CCPA-compliant data handling"
  ],
  client: "Enterprise Marketing & Sales Teams",
  duration: "12 months",
  team: "10 developers, 3 data scientists, 2 UX designers"
},

{
  id: 'cookn',
  title: "COOK'N",
  category: "web-development",
  type: "Web & Mobile App",
  description: "A recipe discovery and organization platform for food enthusiasts, enabling users to compile, save, and discover new recipes from across the web in one centralized hub.",
  image: "/images/portfolio-images/cookn_app.jpg",
  modalImage: "/images/portfolio-images/cookn_app_modal.jpg",
  tech: [
    "React.js", 
    "Next.js", 
    "Node.js", 
    "Firebase", 
    "MongoDB", 
    "Web Scraping (Puppeteer/Cheerio)", 
    "RESTful API", 
    "OAuth 2.0"
  ],
  features: [
    "Recipe aggregation from multiple sources",
    "Smart search & filtering by dietary preferences",
    "User recipe collections & bookmarking",
    "Meal planning & grocery list generation",
    "Community sharing & ratings",
    "Browser extension for quick recipe saves"
  ],
  client: "Food Enthusiasts & Home Cooks",
  duration: "6 months",
  team: "5 developers, 1 UI/UX designer, 1 QA specialist"
},
{
  id: 'health-mirror',
  title: "Health Mirror",
  category: "healthcare",
  type: "healthcare platform",
  description: "An interactive patient engagement platform that delivers personalized, multimedia health education at every stage of care—before, during, and after clinical visits—to improve outcomes and adherence.",
  image: "/images/portfolio-images/health_mirror_front.png",
  modalImage: "/images/portfolio-images/Health-Mirror.jpg",
  tech: [
    "AWS/GCP (Cloud Hosting)", 
    "React.js/React Native", 
    "Node.js", 
    "MongoDB", 
    "WebRTC (Video Support)", 
    "HIPAA-Compliant APIs", 
    "Content Management System (CMS)"
  ],
  features: [
    "Personalized health content delivery",
    "Real-time updates for post-care instructions",
    "Multimedia support (videos, interactive guides, FAQs)",
    "Integration with EHR/EMR systems",
    "Multi-language & accessibility support",
    "Analytics dashboard for providers"
  ],
  client: "Hospitals, Clinics, and Telehealth Providers",
  duration: "8 months",
  team: "6 developers, 2 healthcare UX specialists, 1 compliance officer"
},
{
  id: 'meditation-app',
  title: "Meditation App",
  category: "healthcare",
  type: "healthcare platform",
  description: "A precision-engineered brainwave entrainment app featuring 75+ scientifically-backed meditation programs using Isochronic Tones and Binaural Beats for stress relief, focus, and sleep enhancement.",
  image: "/images/portfolio-images/meditation_app.jpg",
  modalImage: "/images/portfolio-images/meditation-view.jpg",
  tech: [
    "Flutter (Cross-platform)",
    "Dart",
    "Firebase",
    "Audio Signal Processing",
    "FFmpeg",
    "Google Billing API",
    "Meditation Analytics SDK"
  ],
  features: [
    "75+ science-backed meditation programs",
    "Customizable brainwave entrainment (Alpha/Theta/Delta)",
    "Sleep timer & background playback",
    "Progress tracking & achievements",
    "Offline mode with downloadable content",
    "Premium subscription model"
  ],
  client: "Mental Wellness Seekers",
  duration: "7 months",
  team: "4 developers, 1 audio engineer, 1 neuroscientist consultant"
},
{
  id: 'photo-lasso',
  title: "Photo Lasso",
  category: "mobile-development",
  type: "Mobile Application",
  description: "An intuitive photo editing app that transforms images with powerful yet simple tools including filters, color adjustments, and AI-enhanced effects.",
  image: "/images/portfolio-images/photo-lasso.jpg",
  modalImage: "/images/portfolio-images/photo-lasso-view.jpg",
  tech: [
    "React Native",
    "Python (for AI filters)",
    "OpenCV",
    "TensorFlow Lite",
    "Firebase Storage",
    "GPUImage",
    "FastAPI (for cloud processing)"
  ],
  features: [
    "One-tap AI photo enhancement",
    "100+ customizable filters",
    "Advanced color correction tools",
    "Background removal tool",
    "Social media sharing integration",
    "Before/after comparison",
    "Premium filter packs"
  ],
  client: "Mobile Photographers & Social Media Users",
  duration: "6 months",
  team: "3 mobile developers, 1 AI specialist, 1 UI designer"
},
{
  id: 'tix-alert',
  title: "TIX ALERT",
  category: "mobile-development",
  type: "Mobile Application",
  description: "A parking intelligence app that helps drivers avoid tickets by identifying restricted zones, disabled parking, and available parking spots in real-time across urban areas.",
  image: "/images/portfolio-images/tix_front.jpg",
  modalImage: "/images/portfolio-images/tix_map_view.jpg",
  tech: [
    "Flutter (Cross-platform)",
    "Firebase Realtime Database",
    "Google Maps API",
    "Geofencing API",
    "ARKit/ARCore (AR Parking Spot Detection)",
    "Stripe Payment Integration",
    "Machine Learning (for Parking Predictions)"
  ],
  features: [
    "Real-time parking zone visualization (color-coded maps)",
    "Voice-guided parking alerts",
    "User-reported violation hotspots",
    "Meter reminder notifications",
    "Premium subscription for premium parking spots",
    "AR view for spot identification",
    "Municipal regulation database integration"
  ],
  client: "Urban Drivers & City Commuters",
  duration: "8 months",
  team: "5 developers, 1 GIS specialist, 1 urban planner consultant"
},
{
  id: 'fajr-wakeup',
  title: "Fajr WakeUp",
  category: "mobile-development",
  type: "Android Application",
  description: "A comprehensive Islamic prayer companion app featuring synchronized prayer alarms, community features, and spiritual reminders with push notifications.",
  image: "/images/portfolio-images/fajr-wakeup-main.jpg",
  modalImage: "/images/portfolio-images/fajr-wakeup-modal.jpg",
  tech: [
    "Core Java (Android)",
    "XML",
    "Google GCM Service",
    "Parse Push Service",
    "Parse (MBaaS)",
    "REST APIs",
    "Android SDK",
    "Prayer Time Calculation API",
    "SQLite"
  ],
  features: [
    "Location-based prayer time calculations",
    "Synchronized community prayer alarms",
    "In-app Islamic chat community",
    "Qibla direction finder",
    "Progress tracking for prayers",
    "Islamic calendar with important dates",
    "Adhan (prayer call) customization"
  ],
  client: "Muslim Community Worldwide",
  duration: "6 months",
  team: "3 Android developers, 1 Islamic scholar consultant, 1 UX designer"
}

];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
       

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
          <div 
           key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative"
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
                        src={selectedProject.modalImage}
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

       
    </div>
  );
}