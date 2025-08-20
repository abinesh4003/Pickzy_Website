
import Head from 'next/head';
import Image from 'next/image';
import { 
  Home, BookOpen, Briefcase, Mail, ArrowRight, ChevronRight, Check, 
  ArrowUp, Twitter, Linkedin, Github, Menu, MapPin, Phone, Send,
  Code, Server, Layers
} from 'lucide-react';

import Link from 'next/link';

const PickzyInteractive = () => {

 
  return (
    <div className="antialiased text-gray-800">
      <Head>
        <title>PickZy Interactive - Tech Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
      </Head>

    
      {/* Hero Section */}
      <section 
        className="text-white py-20" 
        style={{ 
          background: 'url(https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHx0ZWNofGVufDB8fDB8fHww) no-repeat center',
          backgroundSize: 'cover',
          objectFit: 'cover'
        }}
      >
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tech Insights for Modern Development</h1>
            <p className="text-xl mb-8 opacity-90">Expert articles on React.js, Node.js, and full-stack development trends in 2025</p>
            <Link 
              href="#blog"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 gap-2"
            >
              Explore Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50" id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Articles</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div 
              className="blog-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
              data-aos="fade-up" 
                
            >
              <div className="relative overflow-hidden h-48">
                <Image 
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="React.js"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Frontend
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>June 15, 2025</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-indigo-600 transition">
                  <Link href="blog/reactjs-web-development-company">Why React.js Is the First Choice for Modern Web Applications in 2025</Link>
                </h3>
                <p className="text-gray-600 mb-4">Discover why React.js continues to dominate frontend development with its component-based architecture and virtual DOM.</p>
                <div className="flex justify-between items-center">
                  <Link href="blog/reactjs-web-development-company" className="text-indigo-600 font-semibold hover:underline flex items-center gap-1">
                    ReadMore <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex space-x-2">
                    <span className="tag bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs hover:bg-indigo-600 hover:text-white transition">#React.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div 
              className="blog-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
              data-aos="fade-up" 
               
            >
              <div className="relative overflow-hidden h-48">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Node.js"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Backend
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>June 5, 2025</span>
                  <span className="mx-2">•</span>
                  <span>10 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-indigo-600 transition">
                  <Link href="blog/nodejs-backend-development">Top 10 Benefits of Using Node.js for Scalable Backend Development in 2025</Link>
                </h3>
                <p className="text-gray-600 mb-4">Explore how Node.js enables high-performance, scalable backend solutions with its non-blocking I/O model.</p>
                <div className="flex justify-between items-center">
                  <Link href="blog/nodejs-backend-development" className="text-indigo-600 font-semibold hover:underline flex items-center gap-1">
                    ReadMore <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex space-x-2">
                    <span className="tag bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs hover:bg-indigo-600 hover:text-white transition">#Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div 
              className="blog-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
              data-aos="fade-up" 
               
            >
              <div className="relative overflow-hidden h-48">
                <Image 
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Fullstack"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Fullstack
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>May 28, 2025</span>
                  <span className="mx-2">•</span>
                  <span>12 min read</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-indigo-600 transition">
                  <Link href="blog/react-nodejs-tech-stack">Why React + Node.js is the Perfect Tech Stack for Modern Web Applications in 2025</Link>
                </h3>
                <p className="text-gray-600 mb-4">Learn how combining React and Node.js creates a powerful fullstack solution for high-performance web applications.</p>
                <div className="flex justify-between items-center">
                  <Link href="blog/react-nodejs-tech-stack" className="text-indigo-600 font-semibold hover:underline flex items-center gap-1">
                    ReadMore <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex space-x-2">
                    <span className="tag bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs hover:bg-indigo-600 hover:text-white transition">#Fullstack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <Link 
              href="/blog/reactjs-web-development-company"
              className="inline-flex items-center border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-indigo-600 hover:text-white transition gap-2"
            >
              View All Articles <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Development Services</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition" 
              data-aos="fade-up"
                
            >
              <div className="w-14 h-14 bg-indigo-600 rounded-lg flex items-center justify-center text-white  mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">React.js Development</h3>
              <p className="text-gray-600">We build fast, responsive, and scalable web applications using React.js, Next.js, and modern frontend tools.</p>
            </div>

            <div 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition" 
              data-aos="fade-up"
               
            >
              <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Node.js Development</h3>
              <p className="text-gray-600">High-performance backend solutions with Node.js, Express, and MongoDB for scalable API development.</p>
            </div>

            <div 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition" 
              data-aos="fade-up"
               
            >
              <div className="w-14 h-14 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Fullstack Solutions</h3>
              <p className="text-gray-600">End-to-end web applications using React + Node.js stack for seamless JavaScript development.</p>
            </div>
          </div>
        </div>
      </section>

     
  

      {/* Back to Top Button */}
      <button 
        id="backToTop"
        className="fixed bottom-20 right-4 w-12 h-12 bg-gray-800 rounded-full shadow-lg z-50 flex items-center justify-center text-white opacity-0 invisible transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PickzyInteractive;