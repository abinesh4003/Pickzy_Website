'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [browserSupport, setBrowserSupport] = useState({ 
    speechRecognition: true, 
    speechSynthesis: true 
  });
  const [voices, setVoices] = useState([]);
  const [micPermission, setMicPermission] = useState('prompt');
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('Click to start voice assistant');
  const [conversationHistory, setConversationHistory] = useState([]);
  
  const recognitionRef = useRef(null);
  const speechSynthesisRef = useRef(null);
  const silenceTimerRef = useRef(null);
  const tooltipTimeoutRef = useRef(null);
  
  const router = useRouter();
  const pathname = usePathname();

  // Page-specific selectors
  const sectionSelectors = {
    '/': {
      'hero': 'section:first-of-type',
      'services': 'section.bg-gray-50',
      'stats': 'section.bg-gradient-to-r.from-blue-600',
      'testimonials': 'section.bg-white/60',
      'cta': 'section.bg-gray-50:last-of-type'
    },
    '/services': {
      'hero': 'section.bg-gradient-to-br',
      'services_grid': 'section.bg-white',
      'process': 'section.bg-gray-50',
      'why_choose': 'section.bg-white',
      'cta': 'section.bg-gradient-to-r'
    },
    '/about-us': {
      'mission': '.mission',
      'vision': '.vision',
      'values': '.values',
      'team': '.team'
    },
    '/contact-us': {
      'form': '.contact-form',
      'info': '.contact-info',
      'map': 'iframe'
    },
    '/careers': {
      'hero': '.careers-hero',
      'openings': '.job-listing'
    }
  };

  const contentSelectors = {
    '/': {
      'hero': 'section:first-of-type h1, section:first-of-type p',
      'services': 'section.bg-gray-50 h2, section.bg-gray-50 p',
      'stats': 'section.bg-gradient-to-r.from-blue-600 h2, section.bg-gradient-to-r.from-blue-600 p',
      'testimonials': 'section.bg-white/60 h2, section.bg-white/60 p',
      'cta': 'section.bg-gray-50:last-of-type h2, section.bg-gray-50:last-of-type p'
    },
    '/services': {
      'hero': 'section.bg-gradient-to-br h1, section.bg-gradient-to-br p',
      'services_grid': 'section.bg-white h2, section.bg-white p',
      'process': 'section.bg-gray-50 h2, section.bg-gray-50 p',
      'why_choose': 'section.bg-white h2, section.bg-white p',
      'cta': 'section.bg-gradient-to-r h2, section.bg-gradient-to-r p'
    },
    '/about-us': {
      'mission': '.mission h2, .mission p',
      'vision': '.vision h2, .vision p',
      'values': '.values h2, .values p',
      'team': '.team h2, .team p'
    },
    '/contact-us': {
      'form': '.contact-form h2, .contact-form p',
      'info': '.contact-info h2, .contact-info p',
      'map': '.map-container h2, .map-container p'
    },
    '/careers': {
      'hero': '.careers-hero h1, .careers-hero p',
      'openings': '.job-listing h2, .job-listing p'
    }
  };

  const buttonSelectors = {
    '/': {
      'get in touch': 'a[href="/contact-us"]',
      'view portfolio': 'a[href="/portfolio"]',
      'view all services': 'a[href="/services"]'
    },
    '/services': {
      'learn more': '.CardContent a',
      'get free consultation': 'a[href="/contact-us"]',
      'view our work': 'a[href="/portfolio"]'
    },
    '/contact-us': {
      'send message': '.contact-form button[type="submit"]'
    },
    '/careers': {
      'apply now': '.btn-apply'
    }
  };

  // Update tooltip text based on state
  useEffect(() => {
    if (isProcessing) {
      setTooltipText('Processing your request...');
    } else if (isListening) {
      setTooltipText('Listening... Click to stop');
    } else if (micPermission === 'denied') {
      setTooltipText('Microphone access denied. Click for info');
    } else if (!browserSupport.speechRecognition) {
      setTooltipText('Voice commands not supported in this browser');
    } else {
      setTooltipText('Click to start voice assistant');
    }
  }, [isListening, isProcessing, micPermission, browserSupport.speechRecognition]);

  // Check microphone permission
  useEffect(() => {
    const checkMicrophonePermission = async () => {
      try {
        const permissionStatus = await navigator.permissions.query({ name: 'microphone' });
        setMicPermission(permissionStatus.state);
        
        permissionStatus.onchange = () => {
          setMicPermission(permissionStatus.state);
        };
      } catch (error) {
        console.error('Error checking microphone permission:', error);
      }
    };
    
    if (typeof navigator !== 'undefined' && navigator.permissions) {
      checkMicrophonePermission();
    }
  }, []);

  // Load voices for speech synthesis
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };
    
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    const initializeVoiceAssistant = () => {
      if (typeof window === 'undefined') return;

      // Check browser support
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognition) {
        console.error('Speech Recognition API is not supported in this browser');
        setBrowserSupport(prev => ({ ...prev, speechRecognition: false }));
        return;
      }

      // Initialize speech recognition
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.maxAlternatives = 3;

      recognitionRef.current.onstart = () => {
        console.log('Speech recognition started');
        setIsListening(true);
      };

      recognitionRef.current.onresult = (event) => {
        clearTimeout(silenceTimerRef.current);
        const results = event.results;
        const latestResult = results[results.length - 1];
        const newTranscript = latestResult[0].transcript;
        
        console.log('Heard:', newTranscript);
        
        // If the result is final, process it after a brief pause
        if (latestResult.isFinal) {
          silenceTimerRef.current = setTimeout(() => {
            processCommand(newTranscript);
          }, 800);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'no-speech') {
          speak("As a PickZy assistant, I didn't hear anything. Please try again.");
        } else if (event.error === 'audio-capture') {
          speak("As a PickZy assistant, I can't access your microphone. Please check your microphone settings.");
        } else if (event.error === 'not-allowed') {
          speak("As a PickZy assistant, microphone access is not allowed. Please enable microphone permissions.");
          setMicPermission('denied');
        }
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        console.log('Speech recognition ended');
        setIsListening(false);
      };

      // Initialize speech synthesis
      speechSynthesisRef.current = window.speechSynthesis;
      
      // Check if speech synthesis is available
      if (!speechSynthesisRef.current) {
        console.error('Speech Synthesis API is not supported in this browser');
        setBrowserSupport(prev => ({ ...prev, speechSynthesis: false }));
      }
    };

    initializeVoiceAssistant();

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
      }
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
    };
  }, []);

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
        return content.length > 500 ? content.substring(0, 500) + '...' : content;
      }
    } catch (error) {
      console.error('Error reading content:', error);
    }
    
    return null;
  }, [pathname, contentSelectors]);

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
      'digital-marketing': '/services/digital-marketing',
      'marketing': '/services/digital-marketing',
      'seo': '/services/digital-marketing'
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
    const pageSelectors = sectionSelectors[pathname];
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
  }, [pathname, sectionSelectors]);

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
  }, [pathname, buttonSelectors]);

  const speak = useCallback((text) => {
    if (!browserSupport.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return;
    }

    if (speechSynthesisRef.current) {
      // Cancel any ongoing speech
      speechSynthesisRef.current.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Configure voice properties for more natural speech
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Try to get a more natural voice if available
      const englishVoice = voices.find(voice => 
        voice.lang.includes('en') && (voice.localService === false || voice.name.includes('Natural'))
      ) || voices.find(voice => voice.lang.includes('en'));
      
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      
      utterance.onend = () => {
        console.log('Finished speaking');
      };
      
      utterance.onerror = (event) => {
        console.error('Speech synthesis error', event);
      };
      
      speechSynthesisRef.current.speak(utterance);
    }
  }, [browserSupport.speechSynthesis, voices]);

  const startListening = useCallback(() => {
    if (!browserSupport.speechRecognition) {
      console.log('Speech recognition not supported');
      return;
    }

    if (micPermission === 'denied') {
      speak("As a PickZy assistant, microphone access is blocked. Please enable microphone permissions in your browser settings.");
      return;
    }

    if (recognitionRef.current && !isListening) {
      try {
        console.log('Starting speech recognition...');
        recognitionRef.current.start();
        // Don't speak the greeting immediately to prevent recognition interruption
        setTimeout(() => {
          speak("As a PickZy assistant, I'm here to help you. How can I assist you today?");
        }, 1000);
      } catch (e) {
        console.error('Error starting recognition:', e);
        setIsListening(false);
      }
    }
  }, [isListening, browserSupport.speechRecognition, micPermission, speak]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      console.log('Stopping speech recognition...');
      recognitionRef.current.stop();
    }
  }, [isListening]);

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
      conversationHistory: conversationHistory.slice(-5), // Last 5 exchanges
      siteStructure: {
        pages: ['home', 'about-us', 'services', 'portfolio', 'contact-us', 'careers'],
        servicePages: ['web-development', 'mobile-development', 'digital-marketing'],
        mainSections: ['hero', 'services', 'testimonials', 'contact', 'about', 'portfolio']
      }
    };
  }, [pathname, getPageContext, conversationHistory]);

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
          context
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
        { type: 'assistant', content: data.intent, timestamp: new Date().toISOString() }
      ]);
      
      return data;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return null;
    }
  }, [getConversationContext]);

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
          response = "As a PickZy assistant, I'm not sure I understand. Can you please rephrase your request?";
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
        response = "Sorry ,I'm not sure I understand. Can you please rephrase your request?";
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
    handleHelpIntent
  ]);

  // Toggle listening with keyboard shortcut (Ctrl+Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.code === 'Space') {
        e.preventDefault();
        if (isListening) {
          stopListening();
        } else {
          startListening();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isListening, startListening, stopListening]);

  // Handle tooltip show/hide with delay
  const handleMouseEnter = () => {
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Assistant button with tooltip */}
      <div className="relative">
        <button
          onClick={isListening ? stopListening : startListening}
          disabled={isProcessing || !browserSupport.speechRecognition}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`p-4 rounded-full shadow-lg flex items-center justify-center ${
            isListening 
              ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
              : (browserSupport.speechRecognition ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gray-400 cursor-not-allowed')
          } text-white transition-all duration-300 transform hover:scale-105`}
          aria-label={isListening ? 'Stop listening' : 'Start voice assistant'}
        >
          {/* Voice assistant icon based on state */}
          {isProcessing ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : isListening ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          )}
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg whitespace-nowrap">
            {tooltipText}
            <div className="absolute top-full right-3 -mt-1 border-4 border-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>

      {/* Microphone permission status indicator */}
      {micPermission === 'denied' && (
        <div className="absolute -top-10 right-0 bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded text-xs w-48">
          Microphone access is blocked
        </div>
      )}

      {/* Listening animation */}
      {isListening && (
        <div className="absolute -inset-2 flex items-center justify-center">
          <div className="absolute border border-purple-500 rounded-full animate-ping h-16 w-16"></div>
          <div className="absolute border border-blue-400 rounded-full animate-ping h-20 w-20 animation-delay-300"></div>
        </div>
      )}

      {/* Status indicator */}
      <div className="absolute -top-2 -right-2">
        {isListening && (
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
        )}
      </div>

      {/* Browser support warning */}
      {!browserSupport.speechRecognition && (
        <div className="absolute -top-10 right-0 bg-yellow-100 border border-yellow-400 text-yellow-700 px-2 py-1 rounded text-xs w-48">
          Voice commands not supported in this browser
        </div>
      )}
    </div>
  );
};

export default VoiceAssistant;