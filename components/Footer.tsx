import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
         
          {/* Services - Second column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors text-sm block">Web Development</Link></li>
              <li><Link href="/services/mobile-development" className="text-gray-400 hover:text-white transition-colors text-sm block">Mobile Development</Link></li>
              <li><Link href="/services/cloud-solutions" className="text-gray-400 hover:text-white transition-colors text-sm block">Cloud Solutions</Link></li>
              <li><Link href="/services/digital-transformation" className="text-gray-400 hover:text-white transition-colors text-sm block">Digital Transformation</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm block">All Services</Link></li>
            </ul>
          </div>

          {/* Company - Third column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors text-sm block">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm block">Portfolio</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm block">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm block">Blog</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors text-sm block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info - Fourth column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">sales@pickzy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 44 4501 4466</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  JVL Plaza, 6th Floor,
                  Anna Salai, Teynampet,
                  Chennai 600018
                </span>
              </div>
            </div>
          </div>


         {/* Company - Fourth column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policies </h3>
            <ul className="space-y-2">
              <li><Link href="/placeholders/privacy" className="text-gray-400 hover:text-white transition-colors text-sm block">privacy policy</Link></li>
              <li><Link href="/placeholders/cookie" className="text-gray-400 hover:text-white transition-colors text-sm block">cookie policy</Link></li>
              <li><Link href="/placeholders/terms" className="text-gray-400 hover:text-white transition-colors text-sm block">Terms of Service</Link></li>
             
            </ul>
          </div>



         {/* Company Info - 5th column */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading software development company delivering innovative digital solutions that transform businesses and drive growth worldwide.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://www.linkedin.com/company/pickzy-interactive-private-limited/" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://x.com/PickZySoftware" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://www.instagram.com/pickzy__softwares?igsh=aDVmamU5Z3lubjJ1" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://www.facebook.com/pickzy" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            
            </div>
          </div>


        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              PickZy Software Pvt Ltd &copy; 2011-{new Date().getFullYear()} | All rights reserved
            </p>
            
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/assets/pickzy_logo.png" 
                  alt="PickZy Logo" 
                  width={150} 
                  height={60} 
                  className="h-10 w-auto"
                />
              </Link>
              <Image 
                src="/assets/footer_logo.png" 
                alt="Pickzy Software Logo" 
                width={150} 
                height={60} 
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 