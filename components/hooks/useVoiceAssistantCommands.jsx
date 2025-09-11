'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Fuse from 'fuse.js';

// Content selectors for different pages
const contentSelectors = {
  '/': {
    'hero': '.home-hero ',
    'services': '.home-services',
    'service_list': '.home-services-list',
    'stats': '.home-stats',
    'testimonials': '.home-testimonials',
    'cta': '.home-cta'
  },
  '/services': {
    'hero': '.service-hero',
    'services': '.service-grid',
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

// Intent patterns with weighted scoring
const intentPatterns = {
  navigate: [
    { pattern: /(go to|navigate to|take me to|show me) (the )?(home|homepage)/gi, score: 10, target: 'home' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(about|about us|about page)/gi, score: 10, target: 'about-us' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(services|service page)/gi, score: 10, target: 'services' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(portfolio|work|projects)/gi, score: 10, target: 'portfolio' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(contact|contact us|contact page)/gi, score: 10, target: 'contact-us' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(careers|jobs|career page)/gi, score: 10, target: 'careers' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(web development|web dev)/gi, score: 9, target: 'web-development' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(mobile development|mobile app|app development)/gi, score: 9, target: 'mobile-development' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(digital marketing|seo|marketing)/gi, score: 9, target: 'digital-marketing' },
    { pattern: /(go to|navigate to|take me to|show me) (the )?(desktop application|desktop development)/gi, score: 9, target: 'desktop-application-development' },
  ],
  scroll: [
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(hero|top|header)/gi, score: 10, direction: 'top' },
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(bottom|footer|end)/gi, score: 10, direction: 'bottom' },
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(services|service section)/gi, score: 9, section: 'services' },
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(testimonials|reviews|feedback)/gi, score: 9, section: 'testimonials' },
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(contact|contact us|contact form)/gi, score: 9, section: 'contact' },
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(about|about us|team)/gi, score: 9, section: 'about' },
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(portfolio|work|projects)/gi, score: 9, section: 'portfolio' },
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(stats|statistics|numbers)/gi, score: 8, section: 'stats' },
    { pattern: /(scroll to|go to|show me|move to|find) (the )?(cta|call to action)/gi, score: 8, section: 'cta' },
    { pattern: /scroll (down|up)/gi, score: 10, direction: 'down' },
    { pattern: /scroll up/gi, score: 10, direction: 'up' },
  ],
  read: [
    { pattern: /(read|what does it say|tell me about) (the )?(hero|header|title)/gi, score: 10, content_type: 'hero' },
    { pattern: /(read|what does it say|tell me about) (the )?(services|service section|what we offer)/gi, score: 9, content_type: 'services' },
    { pattern: /(read|what does it say|tell me about) (the )?(testimonials|reviews|feedback)/gi, score: 9, content_type: 'testimonials' },
    { pattern: /(read|what does it say|tell me about) (the )?(stats|statistics|numbers)/gi, score: 8, content_type: 'stats' },
    { pattern: /(read|what does it say|tell me about) (the )?(mission|vision|values)/gi, score: 9, content_type: 'mission' },
    { pattern: /(read|what does it say|tell me about) (the )?(team|people|employees)/gi, score: 8, content_type: 'team' },
    { pattern: /(read|what does it say|tell me about) (the )?(process|how we work)/gi, score: 8, content_type: 'process' },
  ],
  click: [
    { pattern: /(click|press|select) (the )?(get in touch|contact us|contact button)/gi, score: 10, target: 'get in touch' },
    { pattern: /(click|press|select) (the )?(view portfolio|see our work|portfolio button)/gi, score: 9, target: 'view portfolio' },
    { pattern: /(click|press|select) (the )?(view services|our services|services button)/gi, score: 9, target: 'view all services' },
    { pattern: /(click|press|select) (the )?(learn more|more info|details)/gi, score: 8, target: 'learn more' },
    { pattern: /(click|press|select) (the )?(apply now|apply|submit application)/gi, score: 10, target: 'apply now' },
    { pattern: /(click|press|select) (the )?(send message|submit form)/gi, score: 10, target: 'send message' },
  ],
  info: [
    { pattern: /(what|tell me about) (your|the) (services|what you offer|offerings)/gi, score: 10, topic: 'services' },
    { pattern: /(what|tell me about) (your|the) (company|about|who you are)/gi, score: 10, topic: 'about' },
    { pattern: /(what|tell me about) (your|the) (projects|work|portfolio)/gi, score: 9, topic: 'projects' },
    { pattern: /(what|tell me about) (your|the) (technologies|tech stack|tools)/gi, score: 9, topic: 'technologies' },
    { pattern: /(what|tell me about) (your|the) (team|people|employees)/gi, score: 8, topic: 'team' },
    { pattern: /(what|tell me about) (your|the) (nasscom|membership|affiliation)/gi, score: 8, topic: 'nasscom' },
  ],
  stop: [
    { pattern: /(stop|end|that's all|thank you|goodbye)/gi, score: 10 },
  ],
  help: [
    { pattern: /(help|what can you do|assist me)/gi, score: 10 },
  ]
};

// Stop words to remove during preprocessing
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'to', 'of', 'in', 'on', 'at', 'for', 'by', 'with', 'about', 'against', 'between', 'into',
  'through', 'during', 'before', 'after', 'above', 'below', 'from', 'up', 'down', 'off', 'over',
  'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how',
  'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
  'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'can', 'will', 'just', 'should',
  'now', 'i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours',
  'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself',
  'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'this', 'that',
  'these', 'those', 'am', 'do', 'does', 'did', 'doing', 'would', 'could', 'should', 'has', 'have',
  'had', 'having', 'what', 'which', 'who', 'whom', 'please', 'kindly', 'could you', 'would you'
]);

// Confidence thresholds
const CONFIDENCE_THRESHOLDS = {
  EXACT_MATCH: 0.9,
  FUZZY_MATCH: 0.7,
  EMBEDDING_MATCH: 0.6
};

export const useVoiceAssistantCommands = ({
  speak,
  setIsProcessing,
  setConversationHistory,
  stopListening
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Memoize Fuse instances globally
  const fuseInstances = useMemo(() => {
    const instances = {};
    
    Object.entries(intentPatterns).forEach(([intent, patterns]) => {
      const searchItems = patterns.map((patternObj, index) => ({
        id: index,
        pattern: patternObj.pattern.source.replace(/\\b|\\s|\\(|\)|\\|)/gi, ' ').replace(/\s+/g, ' ').trim(),
        ...patternObj
      })); 
      
      instances[intent] = new Fuse(searchItems, {
        keys: ['pattern'],
        includeScore: true,
        threshold: 0.3,
        distance: 100,
        minMatchCharLength: 2
      });
    });
    
    return instances;
  }, []);

  // Preprocess command text
  const preprocessCommand = useCallback((command) => {
    // Lowercase
    let processed = command.toLowerCase();
    
    // Remove punctuation (optional)
    processed = processed.replace(/[^\w\s]/g, ' ');
    
    // Remove stop words
    processed = processed.split(/\s+/)
      .filter(word => !STOP_WORDS.has(word) && word.length > 1)
      .join(' ')
      .trim();
    
    return processed;
  }, []);

  // Enhanced content reading for different page types
  const readPageContent = useCallback((contentType) => {
    const pageSelectors = contentSelectors[pathname];
    if (!pageSelectors) return null;
    
    const selector = pageSelectors[contentType];
    if (!selector) return null;
    
    try {
      const elements = document.querySelectorAll(selector);
      if (elements.length) {
        return Array.from(elements).map(el => el.textContent.trim()).join(' ');
      }
    } catch (error) {
      console.error({ 
        step: 'Error reading content', 
        error: error.message, 
        contentType, 
        selector 
      });
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
      console.error({ 
        step: 'Error scrolling to section', 
        error: error.message, 
        sectionId, 
        selector 
      });
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
      console.error({ 
        step: 'Error clicking button', 
        error: error.message, 
        buttonName, 
        selector 
      });
    }
    
    return false;
  }, [pathname]);

  // Get page context
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

  // Hybrid intent recognition with multiple layers
  const recognizeIntent = useCallback((command) => {
    const preprocessedCommand = preprocessCommand(command);
    const lowerCommand = command.toLowerCase();
    let bestMatch = { intent: null, score: 0, parameters: {}, confidence: 0 };
    
    // Layer 1: Exact regex matching
    Object.entries(intentPatterns).forEach(([intent, patterns]) => {
      patterns.forEach(({ pattern, score, ...params }) => {
        const matches = lowerCommand.match(pattern);
        if (matches && score > bestMatch.score) {
          bestMatch = { 
            intent, 
            score, 
            parameters: { ...params },
            confidence: CONFIDENCE_THRESHOLDS.EXACT_MATCH
          };
        }
      });
    });
    
    // If exact match found with good confidence, return it
    if (bestMatch.confidence >= CONFIDENCE_THRESHOLDS.EXACT_MATCH) {
      return bestMatch;
    }
    
    // Layer 2: Fuzzy matching fallback
    let fuzzyBestMatch = { intent: null, score: 0, parameters: {}, confidence: 0 };
    
    Object.entries(fuseInstances).forEach(([intent, fuse]) => {
      const results = fuse.search(preprocessedCommand);
      if (results.length > 0) {
        const bestFuzzyResult = results[0];
        const confidence = 1 - (bestFuzzyResult.score || 0);
        
        if (confidence > fuzzyBestMatch.confidence && confidence >= CONFIDENCE_THRESHOLDS.FUZZY_MATCH) {
          fuzzyBestMatch = {
            intent,
            score: bestFuzzyResult.item.score,
            parameters: { ...bestFuzzyResult.item },
            confidence
          };
        }
      }
    });
    
    // If fuzzy match has better confidence, use it
    if (fuzzyBestMatch.confidence > bestMatch.confidence) {
      bestMatch = fuzzyBestMatch;
    }
    
    // Layer 3: Keyword-based fallback for very low confidence cases
    if (bestMatch.confidence < CONFIDENCE_THRESHOLDS.FUZZY_MATCH) {
      const keywordMatches = {
        navigate: ['go to', 'navigate', 'show me', 'take me', 'open'],
        scroll: ['scroll', 'up', 'down', 'top', 'bottom'],
        read: ['read', 'what does', 'tell me about', 'say'],
        click: ['click', 'press', 'select', 'button'],
        info: ['what', 'tell me', 'information', 'about'],
        stop: ['stop', 'end', 'thank you', 'goodbye'],
        help: ['help', 'assist', 'what can you do']
      };
      
      let keywordScore = 0;
      let detectedIntent = 'unknown';
      
      Object.entries(keywordMatches).forEach(([intent, keywords]) => {
        const matchCount = keywords.filter(keyword => 
          lowerCommand.includes(keyword)
        ).length;
        
        if (matchCount > keywordScore) {
          keywordScore = matchCount;
          detectedIntent = intent;
        }
      });
      
      if (keywordScore > 0) {
        bestMatch = {
          intent: detectedIntent,
          score: 6,
          parameters: {},
          confidence: CONFIDENCE_THRESHOLDS.EMBEDDING_MATCH
        };
      }
    }
    
    // Final confidence check
    if (bestMatch.confidence < CONFIDENCE_THRESHOLDS.EMBEDDING_MATCH) {
      return { intent: 'unknown', score: 0, parameters: {}, confidence: 0 };
    }
    
    return bestMatch;
  }, [preprocessCommand, fuseInstances]);

  // Intent handlers with try/catch blocks
  const handleNavigateIntent = useCallback((parameters) => {
    try {
      if (parameters && parameters.target) {
        const target = parameters.target;
        const route = enhancedNavigate(target);
        return route ? 
          ` I'll take you to the ${target} page.` : 
          ` I couldn't find a page for "${target}".`;
      }
      return " I need to know where you want to navigate.";
    } catch (error) {
      console.error({ 
        step: 'Error in handleNavigateIntent', 
        error: error.message, 
        parameters 
      });
      return " I encountered an error while trying to navigate.";
    }
  }, [enhancedNavigate]);

  const handleScrollIntent = useCallback((parameters) => {
    try {
      if (parameters && parameters.direction) {
        if (parameters.direction === 'down' || parameters.direction === 'up') {
          const scrollAmount = window.innerHeight * 0.8;
          window.scrollBy({ 
            top: parameters.direction === 'down' ? scrollAmount : -scrollAmount, 
            behavior: 'smooth' 
          });
          return ` I'm scrolling ${parameters.direction}.`;
        } else if (parameters.direction === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return " I'm taking you to the top of the page.";
        } else if (parameters.direction === 'bottom') {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          return " I'm taking you to the bottom of the page.";
        }
      } else if (parameters && parameters.section) {
        const scrolled = enhancedScrollToSection(parameters.section);
        return scrolled ? 
          ` I'm scrolling to the ${parameters.section} section.` : 
          ` I couldn't find the ${parameters.section} section on this page.`;
      }
      return " I need to know where you want to scroll.";
    } catch (error) {
      console.error({ 
        step: 'Error in handleScrollIntent', 
        error: error.message, 
        parameters 
      });
      return " I encountered an error while trying to scroll.";
    }
  }, [enhancedScrollToSection]);

  const handleReadContentIntent = useCallback((parameters) => {
    try {
      if (parameters && parameters.content_type) {
        const content = readPageContent(parameters.content_type);
        return content ? 
          ` here's what's in the ${parameters.content_type} section: ${content}` : 
          ` I couldn't find the ${parameters.content_type} section on this page.`;
      }
      return " I need to know what content you want me to read.";
    } catch (error) {
      console.error({ 
        step: 'Error in handleReadContentIntent', 
        error: error.message, 
        parameters 
      });
      return " I encountered an error while trying to read content.";
    }
  }, [readPageContent]);

  const handleClickIntent = useCallback((parameters) => {
    try {
      if (parameters && parameters.target) {
        const clicked = clickButton(parameters.target);
        return clicked ? 
          ` I clicked the ${parameters.target} button.` : 
          ` I couldn't find a ${parameters.target} button on this page.`;
      }
      return " I need to know what button you want me to click.";
    } catch (error) {
      console.error({ 
        step: 'Error in handleClickIntent', 
        error: error.message, 
        parameters 
      });
      return " I encountered an error while trying to click the button.";
    }
  }, [clickButton]);

  const handleCompanyInfoIntent = useCallback((parameters) => {
    try {
      if (parameters && parameters.topic === 'services') {
        return " we offer custom software development, mobile app development, web development, UI/UX design, cloud solutions, and digital marketing services. We specialize in creating tailored solutions that drive business growth.";
      } else if (parameters && parameters.topic === 'about') {
        return " we're a Chennai-based software company founded in 2011. We deliver AI-driven web and mobile solutions to clients globally. With over 300 successful projects, we're known for delivering flawless, on-time IT solutions with 24/7 support.";
      } else if (parameters && parameters.topic === 'projects') {
        return " we have completed over 300 projects with more than 200 happy clients across various industries including e-commerce, healthcare, finance, and education. Our portfolio showcases innovative solutions that drive real business results.";
      } else if (parameters && parameters.topic === 'technologies') {
        return " we use a wide range of technologies including React, Node.js, Next.js, Python, .NET, Java, Flutter, React Native, AWS, Azure, and Google Cloud. We stay updated with the latest tech trends to deliver cutting-edge solutions.";
      } else if (parameters && parameters.topic === 'team') {
        return " our team consists of 50-200 skilled professionals including developers, designers, project managers, and digital marketing experts. We're proud of our diverse talent pool that brings years of experience to every project.";
      } else if (parameters && parameters.topic === 'nasscom') {
        return " we're proud members of NASSCOM, the premier trade association of the Indian IT industry. This membership reflects our commitment to industry standards, excellence, and ethical business practices.";
      }
      return " I can tell you about our services, projects, technologies, team, or NASSCOM membership. What would you like to know?";
    } catch (error) {
      console.error({ 
        step: 'Error in handleCompanyInfoIntent', 
        error: error.message, 
        parameters 
      });
      return " I encountered an error while retrieving company information.";
    }
  }, []);

  const handleStopIntent = useCallback(() => {
    try {
      return " I'll stop listening now. Click the button if you need me again!";
    } catch (error) {
      console.error({ 
        step: 'Error in handleStopIntent', 
        error: error.message 
      });
      return " I encountered an error while trying to stop.";
    }
  }, []);

  const handleHelpIntent = useCallback(() => {
    try {
      const pageContext = getPageContext();
      return ` I can help you navigate our website, get information about our services, and assist with various tasks. On this ${pageContext.name} page, I can help you with: ${pageContext.features.join(', ')}. Try saying: "go to services", "scroll down", or "contact us".`;
    } catch (error) {
      console.error({ 
        step: 'Error in handleHelpIntent', 
        error: error.message 
      });
      return " I can help you navigate our website, get information about our services, and assist with various tasks. Try saying: 'go to services', 'scroll down', or 'contact us'.";
    }
  }, [getPageContext]);

  // Enhanced command processing with hybrid intent recognition
  const processCommand = useCallback(async (command) => {
    if (!command.trim()) return;
    
    console.log({ step: 'Processing command', command });
    setIsProcessing(true);
    
    let response = '';
    let shouldContinueListening = true;
    
    // Recognize intent using our hybrid system
    const { intent, parameters, confidence } = recognizeIntent(command);
    
    console.log({ 
      step: 'Intent Recognized', 
      intent, 
      parameters, 
      confidence 
    });
    
    // Process based on recognized intent
    switch (intent) {
      case 'navigate':
        response = handleNavigateIntent(parameters);
        break;
      case 'scroll':
        response = handleScrollIntent(parameters);
        break;
      case 'read':
        response = handleReadContentIntent(parameters);
        break;
      case 'click':
        response = handleClickIntent(parameters);
        break;
      case 'info':
        response = handleCompanyInfoIntent(parameters);
        break;
      case 'stop':
        response = handleStopIntent();
        shouldContinueListening = false;
        break;
      case 'help':
        response = handleHelpIntent();
        break;
      default:
        response = " I'm not sure I understand. Can you please rephrase your request? Try saying 'help' to see what I can do.";
        break;
    }
    
    // Update conversation history
    setConversationHistory(prev => [
      ...prev,
      { type: 'user', content: command },
      { type: 'assistant', content: response, timestamp: new Date().toISOString() }
    ]);
    
    console.log({ step: 'Response Generated', response });
    speak(response);
    setIsProcessing(false);
    
    if (!shouldContinueListening) {
      stopListening();
    }
  }, [
    speak, 
    stopListening, 
    setIsProcessing,
    setConversationHistory,
    recognizeIntent,
    handleNavigateIntent,
    handleScrollIntent,
    handleReadContentIntent,
    handleClickIntent,
    handleCompanyInfoIntent,
    handleStopIntent,
    handleHelpIntent
  ]);

  return {
    processCommand
  };
};