"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import path from 'node:path';

interface NavItem {
  name: string;
  href: string;
  subItems?: NavItem[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout>();

  // Services data
  const services: NavItem[] = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-development" },
    { name: "Desktop Apps", href: "/services/desktop-application-development" },
    { name: "Design & MarkUp", href: "/services/design-and-markup" },
    { name: "Internet Marketing", href: "/services/internet-marketing" },
    { name: "Digital Transformation", href: "/services/digital-transformation" },
  ];

  // Navigation links
  const navLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
  ];

  // Handle scroll effect with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 10);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    console.log(pathname);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen || !mobileMenuRef.current) return;

    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableContent = mobileMenuRef.current.querySelectorAll(focusableElements);
    
    if (focusableContent.length > 0) {
      const firstElement = focusableContent[0] as HTMLElement;
      const lastElement = focusableContent[focusableContent.length - 1] as HTMLElement;
      
      firstElement.focus();
      
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleTabKey);
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isMenuOpen]);

  // Keyboard navigation for services dropdown
  const handleServicesKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    } else if (e.key === 'Escape' && isServicesOpen) {
      setIsServicesOpen(false);
      servicesButtonRef.current?.focus();
    }
  };

  // Close dropdown after delay
  const startCloseTimer = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  // Cancel close timer
  const cancelCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };

  return (
    <header className={`sticky top-0 bg-transparent w-full transition-all duration-300 z-50 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-sm border-b shadow-sm' 
        : 'bg-white/70 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="PickZy Home">
            <Image
              src="/assets/pickzy_logo.png"
              alt="PickZy Logo"
              width={150}  // Set appropriate width
              height={60}  // Set appropriate height
              className="h-10 w-auto"  // Adjust as needed
              priority  // Optional: if this is above the fold
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  pathname === link.href
                    ? ' text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                ref={servicesButtonRef}
                className={`flex items-center font-medium transition-colors ${
                  pathname.startsWith('/services') 
                    ? 'text-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onKeyDown={handleServicesKeyDown}
                onMouseEnter={() => {
                  cancelCloseTimer();
                  setIsServicesOpen(true);
                }}
                onMouseLeave={startCloseTimer}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
                id="services-button"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div 
                id="services-menu"
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 transition-all duration-200 ease-out ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                }`}
                onMouseEnter={cancelCloseTimer}
                onMouseLeave={startCloseTimer}
                role="menu"
                aria-labelledby="services-button"
                aria-hidden={!isServicesOpen}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === service.href
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    role="menuitem"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/contact-us">Get Quote</Link>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <Link href="/contact-us">Start Project</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
          aria-hidden={!isMenuOpen}
          aria-modal="true"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Services Dropdown */}
            <div className="px-3 py-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex justify-between items-center px-3 py-2 text-base font-medium rounded-md ${
                  pathname.startsWith('/services')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                aria-expanded={isServicesOpen}
                aria-controls="mobile-services-menu"
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div 
                id="mobile-services-menu"
                className={`pl-4 mt-1 space-y-1 transition-all duration-200 ease-out ${
                  isServicesOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                }`}
                aria-hidden={!isServicesOpen}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      pathname === service.href
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="px-3 pt-2 space-y-2 border-t">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact-us">Get Quote</Link>
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                <Link href="/contact-us">Start Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}