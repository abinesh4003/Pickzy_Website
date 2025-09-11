'use client';

import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Content selectors for different pages
const contentSelectors = {
  '/': {
    'hero': '.home-hero ',
    'services_overview': '.home-services',
    'service_list': '.home-services-list',
    'stats': '.home-stats',
    'testimonials': '.home-testimonials',
    'cta': '.home-cta'
  },
  '/services': {
    'hero': '.service-hero',
    'services_grid': '.service-grid',
    'process': '.service-process',
    'why_choose': '.service-why-choose-us',
    'cta': '.service-cta'
  },
  '/about-us': {
    'hero': '.about-us-hero h1, .about-us-hero p',
    'mission': '.about-us-mission',
    'vision': '.about-us-vision',
    'values': '.about-us-values',
    'team': '.about-us-team',
    'cta': '.about-us-cta',
    'journey': '.about-us-journey',
    'nasscom': '.about-us-nasscom',
  },
  '/contact-us': {
    'hero': '.contact-hero',
    'form': '.contact-form',
    'info': '.contact-info',
    'faq': '.contact-faq ',
    'map': '.map'
  },
  '/careers': {
    'hero': '.careers-hero',
    'why_work_withus': '.careers-why-work-withus',
    'career_values': '.careers-values',
    'openings': '.job-listing',
    'hiring_process': '.hiring-process'
  }
};

// Button selectors for different pages
const buttonSelectors = {
  '/': {
    'get in touch': 'a[href="/contact-us"]',
    'view portfolio': 'a[href="/portfolio"]',
    'view all services': 'a[href="/services"]',
    'get free consultation': 'a[href="/contact-us"]',
    'learn more': '.CardContent a'
  },
  '/about-us': {
    'get in touch': 'a[href="/contact-us"]',
    'join our team': 'a[href="/careers"]'
  },
  '/services': {
    'learn more': '.CardContent a',
    'get free consultation': 'a[href="/contact-us"]',
    'view our work': 'a[href="/portfolio"]'
  },
  '/portfolio': {
    'start your project': 'a[href="/contact-us"]',
    'view services': 'a[href="/services"]'
  },
  '/careers': {
    'apply now': '.btn-apply',
    'open job details': '.btn-view',
    'view open positions': '.view-positions',
    'contact hr': 'a[href="/contact-us"]',
    'send resume': '.send-resume'
  },
  '/contact-us': {
    'send message': '.contact-form button[type="submit"]',
    'schedule a call': '.schedule-call',
    'map': '.map'
  },
};

export const useVoiceAssistantCommands = ({
  speak,
  setIsProcessing,
  setConversationHistory,
  stopListening
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Enhanced content reading for different page types
  const readPageContent = useCallback((contentType) => {
    const pageSelectors = contentSelectors[pathname];
    if (!pageSelectors) return null;
    
    const selector = pageSelectors[contentType];
    if (!selector) return null;
    
    try {
      const element = document.querySelector(selector);
      if (element) {
        const content = element.textContent.trim();
        return content;
      }
    } catch (error) {
      console.error('Error reading content:', error);
    }
    
    return null;
  }, [pathname]);

  // Enhanced navigation with service-specific routing
  const enhancedNavigate = useCallback((destination) => {
    const routes = {
      'home': '/',
      'homepage': '/',
      'about': '/about-us',
      'about-us': '/about-us',
      'services': '/services',
      'portfolio': '/portfolio',
      'work': '/portfolio',
      'contact': '/contact-us',
      'contact-us': '/contact-us',
      'careers': '/careers',
      'jobs': '/careers',
      'web-development': '/services/web-development',
      'web-dev': '/services/web-development',
      'mobile-development': '/services/mobile-development',
      'mobile-dev': '/services/mobile-development',
      'app-development': '/services/mobile-development',
      'desktop-development': '/services/desktop-application-development',
      'internet-marketing': '/services/internet-marketing',
      'custom-software-development': '/services/custom-software-development',
      'digital-marketing': '/services/digital-marketing',
      'marketing': '/services/digital-marketing',
      'seo': '/services/digital-marketing',
      'design-markup': '/services/design-and-markup',
      'ui-ux': '/services/design-and-markup',
      'ui/ux': '/services/design-and-markup',
    };

    const route = routes[destination.toLowerCase().replace(/\s+/g, '-')];
    if (route) {
      router.push(route);
      return route;
    }
    return null;
  }, [router]);

  // Enhanced section scrolling with better selectors
  const enhancedScrollToSection = useCallback((sectionId) => {
    const pageSelectors = contentSelectors[pathname];
    if (!pageSelectors) return false;
    
    const selector = pageSelectors[sectionId];
    if (!selector) return false;
    
    try {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
    
    return false;
  }, [pathname]);

  // Click button function
  const clickButton = useCallback((buttonName) => {
    const pageButtons = buttonSelectors[pathname];
    if (!pageButtons) return false;
    
    const selector = pageButtons[buttonName.toLowerCase()];
    if (!selector) return false;
    
    try {
      const button = document.querySelector(selector);
      if (button) {
        button.click();
        return true;
      }
    } catch (error) {
      console.error('Error clicking button:', error);
    }
    
    return false;
  }, [pathname]);

  // Get page context for OpenAI
  const getPageContext = useCallback(() => {
    const contexts = {
      '/': {
        name: 'Homepage',
        features: ['hero section', 'services overview', 'testimonials', 'contact form'],
      },
      '/about-us': {
        name: 'About Us',
        features: ['company history', 'team', 'mission', 'vision', 'values', 'nasscom membership'],
      },
      '/contact-us': {
        name: 'Contact',
        features: ['contact form', 'office location', 'contact details', 'FAQ'],
      },
      '/services': {
        name: 'Services',
        features: ['service categories', 'technologies', 'process', 'why choose us'],
      },
      '/portfolio': {
        name: 'Portfolio',
        features: ['project showcase', 'case studies', 'technology filters', 'client testimonials'],
      },
      '/careers': {
        name: 'Careers',
        features: ['job openings', 'company culture', 'benefits', 'application process'],
      }
    };

    return contexts[pathname] || {
      name: 'Page',
      features: [],
    };
  }, [pathname]);

  // Enhanced conversation context for OpenAI
  const getConversationContext = useCallback(() => {
    const pageContext = getPageContext();
    
    return {
      currentPage: {
        path: pathname,
        name: pageContext.name,
        availableFeatures: pageContext.features
      },
      siteStructure: {
        pages: ['home', 'about-us', 'services', 'portfolio', 'contact-us', 'careers'],
        servicePages: ['web-development', 'mobile-development', 'digital-marketing'],
        mainSections: ['hero', 'services', 'testimonials', 'contact', 'about', 'portfolio']
      }
    };
  }, [pathname, getPageContext]);

  // Intent handlers
  const handleNavigateIntent = useCallback((parameters) => {
    if (parameters && parameters.target) {
      const target = parameters.target;
      const route = enhancedNavigate(target);
      return route ? 
        `As a PickZy assistant, I'll take you to the ${target} page.` : 
        `As a PickZy assistant, I couldn't find a page for "${target}".`;
    }
    return "As a PickZy assistant, I need to know where you want to navigate.";
  }, [enhancedNavigate]);

  const handleScrollIntent = useCallback((parameters) => {
    if (parameters && parameters.direction) {
      if (parameters.direction === 'down' || parameters.direction === 'up') {
        const scrollAmount = window.innerHeight * 0.8;
        window.scrollBy({ 
          top: parameters.direction === 'down' ? scrollAmount : -scrollAmount, 
          behavior: 'smooth' 
        });
        return `As a PickZy assistant, I'm scrolling ${parameters.direction}.`;
      } else if (parameters.direction === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return "As a PickZy assistant, I'm taking you to the top of the page.";
      } else if (parameters.direction === 'bottom') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        return "As a PickZy assistant, I'm taking you to the bottom of the page.";
      }
    } else if (parameters && parameters.section) {
      const scrolled = enhancedScrollToSection(parameters.section);
      return scrolled ? 
        `As a PickZy assistant, I'm scrolling to the ${parameters.section} section.` : 
        `As a PickZy assistant, I couldn't find the ${parameters.section} section on this page.`;
    }
    return "As a PickZy assistant, I need to know where you want to scroll.";
  }, [enhancedScrollToSection]);

  const handleReadContentIntent = useCallback((parameters) => {
    if (parameters && parameters.content_type) {
      const content = readPageContent(parameters.content_type);
      return content ? 
        `As a PickZy assistant, here's what's in the ${parameters.content_type} section: ${content}` : 
        `As a PickZy assistant, I couldn't find the ${parameters.content_type} section on this page.`;
    }
    return "As a PickZy assistant, I need to know what content you want me to read.";
  }, [readPageContent]);

  const handleClickIntent = useCallback((parameters) => {
    if (parameters && parameters.target) {
      const clicked = clickButton(parameters.target);
      return clicked ? 
        `As a PickZy assistant, I clicked the ${parameters.target} button.` : 
        `As a PickZy assistant, I couldn't find a ${parameters.target} button on this page.`;
    }
    return "As a PickZy assistant, I need to know what button you want me to click.";
  }, [clickButton]);

  const handleCompanyInfoIntent = useCallback((parameters) => {
    if (parameters && parameters.topic === 'services') {
      return "As a PickZy assistant, we offer custom software development, mobile app development, web development, UI/UX design, cloud solutions, and digital marketing services. We specialize in creating tailored solutions that drive business growth.";
    } else if (parameters && parameters.topic === 'about') {
      return "As a PickZy assistant, we're a Chennai-based software company founded in 2011. We deliver AI-driven web and mobile solutions to clients globally. With over 300 successful projects, we're known for delivering flawless, on-time IT solutions with 24/7 support.";
    } else if (parameters && parameters.topic === 'projects') {
      return "As a PickZy assistant, we have completed over 300 projects with more than 200 happy clients across various industries including e-commerce, healthcare, finance, and education. Our portfolio showcases innovative solutions that drive real business results.";
    } else if (parameters && parameters.topic === 'technologies') {
      return "As a PickZy assistant, we use a wide range of technologies including React, Node.js, Next.js, Python, .NET, Java, Flutter, React Native, AWS, Azure, and Google Cloud. We stay updated with the latest tech trends to deliver cutting-edge solutions.";
    } else if (parameters && parameters.topic === 'team') {
      return "As a PickZy assistant, our team consists of 50-200 skilled professionals including developers, designers, project managers, and digital marketing experts. We're proud of our diverse talent pool that brings years of experience to every project.";
    } else if (parameters && parameters.topic === 'nasscom') {
      return "As a PickZy assistant, we're proud members of NASSCOM, the premier trade association of the Indian IT industry. This membership reflects our commitment to industry standards, excellence, and ethical business practices.";
    }
    return "As a PickZy assistant, I can tell you about our services, projects, technologies, team, or NASSCOM membership. What would you like to know?";
  }, []);

  const handleStopIntent = useCallback(() => {
    return "As a PickZy assistant, I'll stop listening now. Click the button if you need me again!";
  }, []);

  const handleHelpIntent = useCallback(() => {
    const pageContext = getPageContext();
    return `As a PickZy assistant, I can help you navigate our website, get information about our services, and assist with various tasks. On this ${pageContext.name} page, I can help you with: ${pageContext.features.join(', ')}. Try saying: "go to services", "scroll down", or "contact us".`;
  }, [getPageContext]);

  // Call OpenAI API for intent recognition
  const getIntentFromOpenAI = useCallback(async (command) => {
    try {
      const context = getConversationContext();
      
      const response = await fetch('/api/voice-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          command,
          context: {
            currentPage: context.currentPage,
            formState: context.formState
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Update conversation history
      setConversationHistory(prev => [
        ...prev,
        { type: 'user', content: command },
        { type: 'assistant', content: data.response_text, timestamp: new Date().toISOString() }
      ]);
      
      return data;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return null;
    }
  }, [getConversationContext, setConversationHistory]);

  // Enhanced command processing with better page awareness
  const processCommand = useCallback(async (command) => {
    if (!command.trim()) return;
    
    console.log('Processing command:', command);
    setIsProcessing(true);
    
    let response = '';
    let shouldContinueListening = true;
    const lowerCommand = command.toLowerCase().trim();

    // Try OpenAI intent recognition first
    let intentData = null;
    try {
      intentData = await getIntentFromOpenAI(command);
    } catch (error) {
      console.error('Error getting intent from OpenAI:', error);
    }

    // Process based on intent or fallback to enhanced keyword matching
    if (intentData?.intent) {
      // Handle OpenAI response using intent handlers
      switch (intentData.intent) {
        case 'navigate':
          response = handleNavigateIntent(intentData.parameters);
          break;
        case 'scroll':
          response = handleScrollIntent(intentData.parameters);
          break;
        case 'read_content':
          response = handleReadContentIntent(intentData.parameters);
          break;
        case 'click':
          response = handleClickIntent(intentData.parameters);
          break;
        case 'company_info':
          response = handleCompanyInfoIntent(intentData.parameters);
          break;
        case 'stop':
          response = handleStopIntent();
          shouldContinueListening = false;
          break;
        case 'help':
          response = handleHelpIntent();
          break;
        case 'form_interaction':
          response = "As a PickZy assistant, form interactions are coming soon. For now, please fill out the form manually.";
          break;
        default:
          response = intentData.response_text || "As a PickZy assistant, I'm not sure I understand. Can you please rephrase your request?";
          break;
      }
    } else {
      // Fallback to keyword matching if OpenAI fails
      if (lowerCommand.includes('click')) {
        const buttonName = lowerCommand.replace(/click\s*/g, '');
        const clicked = clickButton(buttonName);
        response = clicked ? 
          `As a PickZy assistant, I clicked the ${buttonName} button.` : 
          `As a PickZy assistant, I couldn't find a ${buttonName} button on this page.`;
      } else if (lowerCommand.includes('go to') || lowerCommand.includes('navigate') || lowerCommand.includes('show me')) {
        const destination = lowerCommand.replace(/(go to|navigate|show me)\s*/g, '');
        const route = enhancedNavigate(destination);
        response = route ? 
          `As a PickZy assistant, I'll take you to the ${destination} page.` : 
          `As a PickZy assistant, I couldn't find a page for "${destination}". Try saying "go to services", "go to about us", or "go to contact".`;
      } else if (lowerCommand.includes('scroll to') || lowerCommand.includes('show') || lowerCommand.includes('find')) {
        const section = lowerCommand.replace(/(scroll to|show|find)\s*/g, '');
        const scrolled = enhancedScrollToSection(section);
        response = scrolled ? 
          `As a PickZy assistant, I'm scrolling to the ${section} section.` : 
          `As a PickZy assistant, I couldn't find the ${section} section on this page.`;
      } else if (lowerCommand.includes('scroll down')) {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        response = "As a PickZy assistant, I'm scrolling down.";
      } else if (lowerCommand.includes('scroll up')) {
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
        response = "As a PickZy assistant, I'm scrolling up.";
      } else if (lowerCommand.includes('scroll to top')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        response = "As a PickZy assistant, I'm taking you to the top of the page.";
      } else if (lowerCommand.includes('scroll to bottom')) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        response = "As a PickZy assistant, I'm taking you to the bottom of the page.";
      } else if (lowerCommand.includes('stop listening') || lowerCommand.includes('that\'s all') || 
          lowerCommand.includes('thank you') || lowerCommand.includes('goodbye')) {
        response = "As a PickZy assistant, I'll stop listening now. Click the button if you need me again!";
        shouldContinueListening = false;
      } else if (lowerCommand.includes('help') || lowerCommand.includes('what can you do')) {
        response = handleHelpIntent();
      } else {
        response = "Sorry, I'm not sure I understand. Can you please rephrase your request?";
      }
    }
    
    console.log('Response:', response);
    speak(response);
    setIsProcessing(false);
    
    if (!shouldContinueListening) {
      stopListening();
    }
  }, [
    speak, 
    enhancedNavigate, 
    enhancedScrollToSection, 
    clickButton,
    stopListening, 
    getIntentFromOpenAI,
    handleNavigateIntent,
    handleScrollIntent,
    handleReadContentIntent,
    handleClickIntent,
    handleCompanyInfoIntent,
    handleStopIntent,
    handleHelpIntent,
    setIsProcessing
  ]);

  return {
    processCommand
  };
};