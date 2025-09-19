"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Briefcase } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { HireDeveloperModal } from '@/components/HireDeveloperModal';
import { showToast } from './ui/toast';

interface NavItem {
  name: string;
  href: string;
  subItems?: NavItem[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHireOpen, setIsHireOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [selectedDeveloper, setSelectedDeveloper] = useState('');
  const pathname = usePathname();
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const hireButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout>();
  const [successMessage, setSuccessMessage] = useState('');

  // Services data
  const services: NavItem[] = [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile Apps", href: "/mobile-apps-development" },
    { name: "Desktop Apps", href: "/desktop-application-development" },
    { name: "Design & MarkUp", href: "/design-and-markup" },
    { name: "Internet Marketing", href: "/internet-marketing" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "Custom Software", href: "/custom-software-development" },
  ];

  // Developer types for Hire dropdown
  const developerTypes = [
    'iOS Developer',
    'Android Developer',
    'React Native Developer',
    'Flutter Developer',
    'Node.js Developer',
    'Python Developer',
    'UI/UX Designer',
    'Full Stack Developer',
    'Laravel Developer',
    'Angular Developer'
  ];

  // Navigation links - Reordered as requested
  const navLinks: NavItem[] = [
    { name: "About", href: "/about-us" },
    { name: "Works", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
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
    setIsHireOpen(false);
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

  // Toggle functions with mutual exclusivity
  const toggleServices = (open: boolean) => {
    setIsServicesOpen(open);
    if (open) setIsHireOpen(false);
  };

  const toggleHire = (open: boolean) => {
    setIsHireOpen(open);
    if (open) setIsServicesOpen(false);
  };

  // Keyboard navigation for dropdowns
  const handleDropdownKeyDown = (e: React.KeyboardEvent, dropdownType: 'services' | 'hire') => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (dropdownType === 'services') {
        toggleServices(!isServicesOpen);
      } else {
        toggleHire(!isHireOpen);
      }
    } else if (e.key === 'Escape') {
      if (dropdownType === 'services' && isServicesOpen) {
        toggleServices(false);
        servicesButtonRef.current?.focus();
      } else if (dropdownType === 'hire' && isHireOpen) {
        toggleHire(false);
        hireButtonRef.current?.focus();
      }
    }
  };

  // Close dropdown after delay
  const startCloseTimer = (dropdownType: 'services' | 'hire') => {
    closeTimerRef.current = setTimeout(() => {
      if (dropdownType === 'services') {
        toggleServices(false);
      } else {
        toggleHire(false);
      }
    }, 100);
  };

  // Cancel close timer
  const cancelCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };

const handleHireDeveloper = async (formData: any) => {
  try {
    const response = await fetch('/api/hire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        selectedDeveloper: selectedDeveloper || formData.developerType,
      }),
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    // show success
    setSuccessMessage('Your message has been sent successfully! We will get back to you soon.');

    // close after 5 sec
    setTimeout(() => {
      setIsHireModalOpen(false);
      setSuccessMessage('');
    }, 5000);

  } catch (error) {
    console.error('Submission error:', error);
    throw error;
  }
};


  const openHireModal = (developer: string = '') => {
    setSelectedDeveloper(developer);
    setIsHireModalOpen(true);
    toggleHire(false);
  };

  return (
    <header className={`sticky top-0 bg-transparent max-w-full transition-all duration-300 z-50 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-sm border-b shadow-sm' 
        : 'bg-white/70 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="PickZy Home">
            <Image
              src="/assets/pickzy_logo1.png"
              alt="PickZy Logo"
              width={150}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* 1. About */}
            <Link
              href="/about-us"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/about-us"
                  ? ' text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            
            {/* 2. Services Dropdown */}
            <div className="relative group">
              <button 
                ref={servicesButtonRef}
                className={`flex items-center font-medium transition-colors ${
                  pathname.startsWith('/services') 
                    ? 'text-blue-600' 
                    : 'text-gray-900 hover:text-blue-600'
                }`}
                onClick={() => toggleServices(!isServicesOpen)}
                onKeyDown={(e) => handleDropdownKeyDown(e, 'services')}
                onMouseEnter={() => {
                  cancelCloseTimer();
                  toggleServices(true);
                }}
                onMouseLeave={() => startCloseTimer('services')}
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
                onMouseLeave={() => startCloseTimer('services')}
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

            {/* 3. Hire Us Dropdown */}
            <div className="relative group">
              <button 
                ref={hireButtonRef}
                className="flex items-center font-medium text-gray-600 hover:text-blue-600"
                onClick={() => toggleHire(!isHireOpen)}
                onKeyDown={(e) => handleDropdownKeyDown(e, 'hire')}
                onMouseEnter={() => {
                  cancelCloseTimer();
                  toggleHire(true);
                }}
                onMouseLeave={() => startCloseTimer('hire')}
                aria-expanded={isHireOpen}
                aria-haspopup="true"
                aria-controls="hire-menu"
                id="hire-button"
              >
               
                Hire Us
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                  isHireOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div 
                id="hire-menu"
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 transition-all duration-200 ease-out ${
                  isHireOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                }`}
                onMouseEnter={cancelCloseTimer}
                onMouseLeave={() => startCloseTimer('hire')}
                role="menu"
                aria-labelledby="hire-button"
                aria-hidden={!isHireOpen}
              >
                {developerTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => openHireModal(type)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    role="menuitem"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Our Works */}
            <Link
              href="/portfolio"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/portfolio"
                  ? ' text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Works
            </Link>

            {/* 5.process */}
            {/* <Link
              href="/process"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/process"
                  ? ' text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Process
            </Link> */}

            {/* 6. Careers */}
            <Link
              href="/careers"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/careers"
                  ? ' text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Careers
            </Link>

            {/* 7. Contact */}
            <Link
              href="/contact-us"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/contact-us"
                  ? ' text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
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
            className="mobile-menu-button lg:hidden text-gray-600 hover:text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden transition-all duration-300 ease-out overflow-hidden z-50 sticky top-0 ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          }`}
          aria-hidden={!isMenuOpen}
          aria-modal="true"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t">
            {/* 1. About */}
            <Link
              href="/about-us"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/about-us"
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* 2. Mobile Services Dropdown */}
            <div className="px-3 py-2">
              <button
                onClick={() => toggleServices(!isServicesOpen)}
                className={`w-full flex justify-between items-center  py-2 text-base font-medium rounded-md ${
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
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. Mobile Hire Us Button */}
            <button
              onClick={() => {
                openHireModal();
                setIsMenuOpen(false);
              }}
              className="mobile-hire-button flex items-center w-full px-3 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50"
            >
             
              Hire Us
            </button>

            {/* 4. Our Works */}
            <Link
              href="/portfolio"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/portfolio"
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Works
            </Link>

            {/* 5.process */}
            {/* <Link
              href="/process"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/process"
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link> */}

            {/* 5. Careers */}
            <Link
              href="/careers"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/careers"
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>

            {/* 6. Contact */}
            <Link
              href="/contact-us"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                pathname === "/contact-us"
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* Mobile CTA Buttons */}
            <div className="px-3 pt-2 space-y-2 border-t">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>Start Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hire Developer Modal */}
      <HireDeveloperModal
        developerTypes={developerTypes}
        defaultDeveloper={selectedDeveloper}
        open={isHireModalOpen}
        onOpenChange={setIsHireModalOpen}
        onSubmit={handleHireDeveloper}
        successMessage={successMessage}
      />
    </header>
  );
}