import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className="footer_section bg-gray-900 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-foot border-b border-gray-800 pb-8">
          <div className="footer_link_menu grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Links - Column 1 */}
            <div className="foot_sstyle fm1 space-y-3">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <p><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm block">Home</Link></p>
              <p><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors text-sm block">About Us</Link></p>
              <p><Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm block">Careers</Link></p>
              <p><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm block">Portfolio</Link></p>
              <p><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm block">Blog</Link></p>
              <p><Link href="/contact-us" className="text-gray-400 hover:text-white transition-colors text-sm block">Contact Us</Link></p>
            </div>

            {/* Services - Column 2 */}
            <div className="foot_sstyle fm2 space-y-3">
              <h3 className="text-lg font-semibold mb-4">Mobile Services</h3>
              <p><Link href="/services/mobile-development" className="text-gray-400 hover:text-white transition-colors text-sm block">Mobile Development</Link></p>
              <p><Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors text-sm block">Web Development</Link></p>
              <p><Link href="/services/internet-marketing" className="text-gray-400 hover:text-white transition-colors text-sm block">Cloud Solutions</Link></p>
              <p><Link href="/services/digital-transformation" className="text-gray-400 hover:text-white transition-colors text-sm block">Digital Transformation</Link></p>
              <p><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm block">All Services</Link></p>
            </div>

            {/* Technologies - Column 3 */}
            <div className="foot_sstyle fm3 space-y-3">
              <h3 className="text-lg font-semibold mb-4">Technologies</h3>
              <p><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm block">Microsoft .Net</Link></p>
              <p><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm block">Java Development</Link></p>
              <p><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm block">Python</Link></p>
              <p><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm block">Node.js</Link></p>
              <p><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm block">React/Angular</Link></p>
            </div>

            {/* Policies - Column 4 */}
            <div className="foot_sstyle fm4 space-y-3">
              <h3 className="text-lg font-semibold mb-4">Policies</h3>
              <p><Link href="/placeholders/privacy" className="text-gray-400 hover:text-white transition-colors text-sm block">Privacy Policy</Link></p>
              <p><Link href="/placeholders/cookies" className="text-gray-400 hover:text-white transition-colors text-sm block">Cookie Policy</Link></p>
              <p><Link href="/placeholders/terms" className="text-gray-400 hover:text-white transition-colors text-sm block">Terms of Service</Link></p>
                <div className="flex space-x-4">
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

            {/* Contact - Column 5 */}
            <div className="foot_sstyle fm5 space-y-3">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">sales@pickzy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">+91 44 4501 4466</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  JVL Plaza, 6th Floor,<br />
                  Anna Salai, Teynampet,<br />
                  Chennai 600018
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer_bot pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="footer_copy text-gray-400 text-sm mb-4 md:mb-0">
              PickZy Software Pvt Ltd © 2011-{new Date().getFullYear()} | All rights reserved
            </div>
            
            <div className="footer_sm">
              <div className="foot_logo flex items-center space-x-6">
                 <Image 
                  src="/assets/footer_logo.png" 
                  alt="PickZy Logo" 
                  width={180} 
                  height={70} 
                  className="h-12 w-auto ml-6"
                />
                <Image 
                  src="/assets/pickzy_logo.png" 
                  alt="PickZy Logo" 
                  width={120} 
                  height={48} 
                  className="h-10 w-auto ml-6"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}