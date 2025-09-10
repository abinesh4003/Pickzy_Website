'use client';

import { useCallback, useRef, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// Content selectors for different pages
const contentSelectors = {
  '/': {
    'hero': '.home-hero',
    'services_overview': '.home-services',
    'service_list': '.home-services-list',
    'stats': '.home-stats',
    'testimonials': '.home-testimonials',
    'cta': '.home-cta',
    'footer': '.footer_section'
  },
  '/services': {
    'hero': '.service-hero',
    'services_grid': '.service-grid',
    'process': '.service-process',
    'why_choose': '.service-why-choose-us',
    'cta': '.service-cta',
    'footer': '.footer_section'
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
    'footer': '.footer_section'
  },
  '/contact-us': {
    'hero': '.contact-hero',
    'form': '.contact-form',
    'info': '.contact-info',
    'faq': '.contact-faq',
    'map': '.map',
    'footer': '.footer_section'
  },
  '/careers': {
    'hero': '.careers-hero',
    'why_work_withus': '.careers-why-work-withus',
    'career_values': '.careers-values',
    'openings': '.job-listing',
    'hiring_process': '.hiring-process',
    'footer': '.footer_section'
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
    'map': '.map',
  },
};

// Cache for content reading to avoid repeated DOM queries
const contentCache = new Map();
const CACHE_DURATION = 30000; // 30 seconds

// Common greetings and responses to reduce API calls
const commonResponses = {
  'hello': { 
    intent: 'greeting', 
    response: "Hello! I'm PickZy's voice assistant. How can I help you today?" 
  },
  'hi': { 
    intent: 'greeting', 
    response: "Hi there! How can I assist you with PickZy's services?" 
  },
  'hey': { 
    intent: 'greeting', 
    response: "Hey! I'm here to help you navigate our website and services." 
  },
  'thanks': { 
    intent: 'acknowledgement', 
    response: "You're welcome! Is there anything else I can help with?" 
  },
  'thank you': { 
    intent: 'acknowledgement', 
    response: "You're welcome! Feel free to ask if you need anything else." 
  },
  'goodbye': { 
    intent: 'stop', 
    response: "Goodbye! Thanks for visiting PickZy. Have a great day!" 
  },
  'bye': { 
    intent: 'stop', 
    response: "Bye! Come back if you need any assistance with our services." 
  }
};

export const useVoiceAssistantCommands = ({
  speak,
  setIsProcessing,
  setConversationHistory,
  stopListening
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const lastCommandRef = useRef('');
  const lastResponseRef = useRef('');

  // Memoized page context to avoid recalculating
  const pageContext = useMemo(() => {
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

    return contexts[pathname] || { name: 'Page', features: [] };
  }, [pathname]);

  // Enhanced content reading for different page types with caching
  const readPageContent = useCallback((contentType) => {
    const cacheKey = `${pathname}-${contentType}`;
    const cached = contentCache.get(cacheKey);
    
    // Return cached content if available and not expired
    if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
      return cached.content;
    }
    
    const pageSelectors = contentSelectors[pathname];
    if (!pageSelectors) return null;
    
    const selector = pageSelectors[contentType];
    if (!selector) return null;
    
    try {
      const element = document.querySelector(selector);
      if (element) {
        const content = element.textContent.trim();
        
        // Cache the content
        contentCache.set(cacheKey, {
          content,
          timestamp: Date.now()
        });
        
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
      'about us': '/about-us',
      'about-us': '/about-us',
      'services': '/services',
      'portfolio': '/portfolio',
      'work': '/portfolio',
      'projects': '/portfolio',
      'contact': '/contact-us',
      'contact us': '/contact-us',
      'contact-us': '/contact-us',
      'careers': '/careers',
      'jobs': '/careers',
      'hiring': '/careers',
      'web development': '/services/web-development',
      'web-development': '/services/web-development',
      'web-dev': '/services/web-development',
      'mobile development': '/services/mobile-development',
      'mobile-development': '/services/mobile-development',
      'mobile-dev': '/services/mobile-development',
      'app development': '/services/mobile-development',
      'app-development': '/services/mobile-development',
      'desktop development': '/services/desktop-application-development',
      'desktop-development': '/services/desktop-application-development',
      'internet marketing': '/services/internet-marketing',
      'internet-marketing': '/services/internet-marketing',
      'custom software': '/services/custom-software-development',
      'custom-software': '/services/custom-software-development',
      'digital marketing': '/services/digital-marketing',
      'digital-marketing': '/services/digital-marketing',
      'marketing': '/services/digital-marketing',
      'seo': '/services/digital-marketing',
      'design': '/services/design-and-markup',
      'design markup': '/services/design-and-markup',
      'design-and-markup': '/services/design-and-markup',
      'ui ux': '/services/design-and-markup',
      'ui/ux': '/services/design-and-markup',
      'ui-ux': '/services/design-and-markup',
    };

    const normalizedDestination = destination.toLowerCase().replace(/\s+/g, '-');
    const route = routes[normalizedDestination];
    
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
        // Calculate offset for fixed headers if any
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - 20; // 20px extra padding
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return true;
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
    
    return false;
  }, [pathname]);

  // Click button function with improved error handling
  const clickButton = useCallback((buttonName) => {
    const pageButtons = buttonSelectors[pathname];
    if (!pageButtons) return false;
    
    // Try exact match first
    let selector = pageButtons[buttonName.toLowerCase()];
    
    // If no exact match, try partial match
    if (!selector) {
      const buttonKey = Object.keys(pageButtons).find(key => 
        buttonName.toLowerCase().includes(key)
      );
      selector = buttonKey ? pageButtons[buttonKey] : null;
    }
    
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

  // Enhanced conversation context for OpenAI
  const getConversationContext = useCallback(() => {
    return {
      currentPage: {
        path: pathname,
        name: pageContext.name,
        availableFeatures: pageContext.features
      },
      siteStructure: {
        pages: ['home', 'about-us', 'services', 'portfolio', 'contact-us', 'careers', 'blog'],
        servicePages: ['web-development', 'mobile-development', 'digital-marketing','desktop-application-development', 'custom-software-development', 'design-and-markup', 'internet-marketing', 'digital-transformation'],
        mainSections: ['hero', 'services', 'testimonials', 'contact', 'about', 'portfolio','footer']
      }
    };
  }, [pathname, pageContext]);

  // Intent handlers
  const handleNavigateIntent = useCallback((parameters) => {
    if (parameters && parameters.target) {
      const target = parameters.target;
      const route = enhancedNavigate(target);
      return route ? 
        `Taking you to our ${target} page.` : 
        `I couldn't find a page for "${target}". Try saying "go to services", "go to about us", or "go to contact".`;
    }
    return "Where would you like to go? You can say 'go to services', 'go to about us', or 'go to contact'.";
  }, [enhancedNavigate]);

  const handleScrollIntent = useCallback((parameters) => {
    if (parameters && parameters.direction) {
      if (parameters.direction === 'down' || parameters.direction === 'up') {
        const scrollAmount = window.innerHeight * 0.8;
        window.scrollBy({ 
          top: parameters.direction === 'down' ? scrollAmount : -scrollAmount, 
          behavior: 'smooth' 
        });
        return `Scrolling ${parameters.direction}.`;
      } else if (parameters.direction === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return "Taking you to the top of the page.";
      } else if (parameters.direction === 'bottom') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        return "Taking you to the bottom of the page.";
      }
    }
    return "I need to know where you want to scroll. Try saying 'scroll down', 'scroll up', or 'scroll to top'.";
  }, []);

  const handleScrollToSectionIntent = useCallback((parameters) => {
    if (parameters && parameters.section) {
      const scrolled = enhancedScrollToSection(parameters.section);
      return scrolled ? 
        `Scrolling to the ${parameters.section.replace(/_/g, ' ')} section.` : 
        `I couldn't find the ${parameters.section.replace(/_/g, ' ')} section on this page.`;
    }
    return "Which section would you like me to scroll to?";
  }, [enhancedScrollToSection]);

  const handleReadContentIntent = useCallback((parameters) => {
    if (parameters && parameters.content_type) {
      const content = readPageContent(parameters.content_type);
      return content ? 
        `Here's what's in the ${parameters.content_type.replace(/_/g, ' ')} section: ${content}` : 
        `I couldn't find the ${parameters.content_type.replace(/_/g, ' ')} section on this page.`;
    }
    return "What content would you like me to read?";
  }, [readPageContent]);

  const handleClickIntent = useCallback((parameters) => {
    if (parameters && parameters.target) {
      const clicked = clickButton(parameters.target);
      return clicked ? 
        `I clicked the ${parameters.target} button for you.` : 
        `I couldn't find a ${parameters.target} button on this page.`;
    }
    return "Which button would you like me to click?";
  }, [clickButton]);

  const handleCompanyInfoIntent = useCallback((parameters) => {
    if (parameters && parameters.topic === 'services') {
      return "We offer custom software development, mobile app development, web development, UI/UX design, cloud solutions, and digital marketing services. We specialize in creating tailored solutions that drive business growth.";
    } else if (parameters && parameters.topic === 'about') {
      return "We're a Chennai-based software company founded in 2011. We deliver AI-driven web and mobile solutions to clients globally. With over 300 successful projects, we're known for delivering flawless, on-time IT solutions with 24/7 support.";
    } else if (parameters && parameters.topic === 'projects') {
      return "We have completed over 300 projects with more than 200 happy clients across various industries including e-commerce, healthcare, finance, and education. Our portfolio showcases innovative solutions that drive real business results.";
    } else if (parameters && parameters.topic === 'technologies') {
      return "We use a wide range of technologies including React, Node.js, Next.js, Python, .NET, Java, Flutter, React Native, AWS, Azure, and Google Cloud. We stay updated with the latest tech trends to deliver cutting-edge solutions.";
    } else if (parameters && parameters.topic === 'team') {
      return "Our team consists of 50-200 skilled professionals including developers, designers, project managers, and digital marketing experts. We're proud of our diverse talent pool that brings years of experience to every project.";
    } else if (parameters && parameters.topic === 'nasscom') {
      return "We're proud members of NASSCOM, the premier trade association of the Indian IT industry. This membership reflects our commitment to industry standards, excellence, and ethical business practices.";
    }
    return "I can tell you about our services, projects, technologies, team, or NASSCOM membership. What would you like to know?";
  }, []);

  const handleStopIntent = useCallback(() => {
    return "I'll stop listening now. Click the microphone button if you need me again!";
  }, []);

  const handleHelpIntent = useCallback(() => {
    return `I can help you navigate our website, get information about our services, and assist with various tasks. On this ${pageContext.name} page, I can help you with: ${pageContext.features.join(', ')}. Try saying: "go to services", "scroll down", or "contact us".`;
  }, [pageContext]);

  const handleGreetingIntent = useCallback(() => {
    return commonResponses['hello'].response;
  }, []);

  // Check for common commands before calling API
  const checkCommonCommands = useCallback((command) => {
    const normalizedCommand = command.toLowerCase().trim();
    
    // Check for exact matches
    if (commonResponses[normalizedCommand]) {
      return commonResponses[normalizedCommand];
    }
    
    // Check for partial matches
    for (const [key, value] of Object.entries(commonResponses)) {
      if (normalizedCommand.includes(key)) {
        return value;
      }
    }
    
    return null;
  }, []);

  // Call OpenAI API for intent recognition with retry logic
  const getIntentFromOpenAI = useCallback(async (command) => {
    // Skip API call for duplicate commands
    if (command === lastCommandRef.current) {
      return {
        intent: "repeat",
        parameters: {},
        response_text: "You just said that. Would you like me to do something else?"
      };
    }
    
    lastCommandRef.current = command;
    
    // Check for common commands first to avoid API calls
    const commonResponse = checkCommonCommands(command);
    if (commonResponse) {
      return {
        intent: commonResponse.intent,
        parameters: {},
        response_text: commonResponse.response
      };
    }
    
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
        ...prev.slice(-10), // Keep only last 10 messages
        { type: 'user', content: command, timestamp: new Date().toISOString() },
        { type: 'assistant', content: data.response_text, timestamp: new Date().toISOString() }
      ]);
      
      return data;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return {
        intent: "error",
        parameters: {},
        response_text: "I'm having trouble connecting right now. Please try again in a moment."
      };
    }
  }, [getConversationContext, setConversationHistory, checkCommonCommands]);

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
      intentData = {
        intent: "error",
        parameters: {},
        response_text: "I'm having trouble processing your request. Please try again."
      };
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
        case 'scroll_to_section':
          response = handleScrollToSectionIntent(intentData.parameters);
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
        case 'greeting':
          response = handleGreetingIntent();
          break;
        case 'repeat':
          response = intentData.response_text;
          break;
        case 'error':
          response = intentData.response_text;
          break;
        case 'form_interaction':
          response = "Form interactions are coming soon. For now, please fill out the form manually.";
          break;
        default:
          response = intentData.response_text || "I'm not sure I understand. Can you please rephrase your request?";
          break;
      }
    } else {
      // Fallback to keyword matching if OpenAI fails
      if (lowerCommand.includes('click')) {
        const buttonName = lowerCommand.replace(/click\s*/g, '');
        const clicked = clickButton(buttonName);
        response = clicked ? 
          `I clicked the ${buttonName} button.` : 
          `I couldn't find a ${buttonName} button on this page.`;
      } else if (lowerCommand.includes('go to') || lowerCommand.includes('navigate') || lowerCommand.includes('show me')) {
        const destination = lowerCommand.replace(/(go to|navigate|show me)\s*/g, '');
        const route = enhancedNavigate(destination);
        response = route ? 
          `I'll take you to the ${destination} page.` : 
          `I couldn't find a page for "${destination}". Try saying "go to services", "go to about us", or "go to contact".`;
      } else if (lowerCommand.includes('scroll to') || lowerCommand.includes('show') || lowerCommand.includes('find')) {
        const section = lowerCommand.replace(/(scroll to|show|find)\s*/g, '');
        const scrolled = enhancedScrollToSection(section);
        response = scrolled ? 
          `I'm scrolling to the ${section} section.` : 
          `I couldn't find the ${section} section on this page.`;
      } else if (lowerCommand.includes('scroll down')) {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        response = "I'm scrolling down.";
      } else if (lowerCommand.includes('scroll up')) {
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
        response = "I'm scrolling up.";
      } else if (lowerCommand.includes('scroll to top')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        response = "I'm taking you to the top of the page.";
      } else if (lowerCommand.includes('scroll to bottom')) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        response = "I'm taking you to the bottom of the page.";
      } else if (lowerCommand.includes('stop listening') || lowerCommand.includes('that\'s all') || 
          lowerCommand.includes('thank you') || lowerCommand.includes('goodbye')) {
        response = "I'll stop listening now. Click the microphone button if you need me again!";
        shouldContinueListening = false;
      } else if (lowerCommand.includes('help') || lowerCommand.includes('what can you do')) {
        response = handleHelpIntent();
      } else {
        response = "I'm not sure I understand. Can you please rephrase your request?";
      }
    }
    
    // Avoid repeating the same response
    if (response !== lastResponseRef.current) {
      console.log('Response:', response);
      speak(response);
      lastResponseRef.current = response;
    }
    
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
    handleGreetingIntent,
    setIsProcessing
  ]);

  return {
    processCommand
  };
};