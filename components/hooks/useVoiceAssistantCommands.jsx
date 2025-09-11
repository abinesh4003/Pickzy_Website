'use client';

import { useCallback, useRef } from 'react';
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

// Advanced intent patterns with weighted scoring and multiple variations
const advancedIntentPatterns = {
  navigate: [
    // Home navigation
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:home|homepage|main page|start(?:ing)? page)(?: please)?[.!]?$/i, score: 15, target: 'home' },
    { pattern: /^(?:i want to |i'd like to |)?(?:see|view|visit) (?:the |our |)?(?:home|homepage|main page)(?: please)?[.!]?$/i, score: 14, target: 'home' },
    { pattern: /^(?:go|navigate) (?:back |)?home[.!]?$/i, score: 16, target: 'home' },
    
    // About us navigation
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:about|about us|about page|company info|our story)(?: please)?[.!]?$/i, score: 15, target: 'about-us' },
    { pattern: /^(?:i want to |i'd like to |)?(?:see|view|visit|learn about) (?:the |our |)?(?:company|about us|our team|who we are)(?: please)?[.!]?$/i, score: 14, target: 'about-us' },
    { pattern: /^(?:show me|tell me about) (?:the |your |)?(?:company|team|story)(?: please)?[.!]?$/i, score: 13, target: 'about-us' },
    
    // Services navigation
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:services|service page|what we offer|our offerings)(?: please)?[.!]?$/i, score: 15, target: 'services' },
    { pattern: /^(?:i want to |i'd like to |)?(?:see|view|visit|explore) (?:the |our |)?(?:services|offerings|what you do)(?: please)?[.!]?$/i, score: 14, target: 'services' },
    { pattern: /^(?:what (?:services|offerings) do you have|what do you offer)[?]?$/i, score: 13, target: 'services' },
    
    // Portfolio navigation
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:portfolio|our work|projects|case studies)(?: please)?[.!]?$/i, score: 15, target: 'portfolio' },
    { pattern: /^(?:i want to |i'd like to |)?(?:see|view|visit|check out) (?:the |our |)?(?:portfolio|work|projects)(?: please)?[.!]?$/i, score: 14, target: 'portfolio' },
    { pattern: /^(?:show me|display) (?:your |some |)?(?:work|projects|portfolio)(?: examples)?(?: please)?[.!]?$/i, score: 13, target: 'portfolio' },
    
    // Contact navigation
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:contact|contact us|contact page|get in touch|reach us)(?: please)?[.!]?$/i, score: 15, target: 'contact-us' },
    { pattern: /^(?:i want to |i'd like to |)?(?:see|view|visit|access) (?:the |our |)?(?:contact (?:info|details)|get in touch)(?: please)?[.!]?$/i, score: 14, target: 'contact-us' },
    { pattern: /^(?:how can i |what's the best way to |)?(?:contact|reach|get in touch with) (?:you|pickzy|the team)(?: please)?[.?]?$/i, score: 13, target: 'contact-us' },
    
    // Careers navigation
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:careers|jobs|career page|work with us|join us)(?: please)?[.!]?$/i, score: 15, target: 'careers' },
    { pattern: /^(?:i want to |i'd like to |)?(?:see|view|visit|check) (?:the |our |)?(?:careers|job openings|employment opportunities)(?: please)?[.!]?$/i, score: 14, target: 'careers' },
    { pattern: /^(?:are you|do you) (?:hiring|recruiting|looking for new people)[?]?$/i, score: 13, target: 'careers' },
    
    // Service-specific navigation
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:web development|web dev|website development)(?: page| section)?(?: please)?[.!]?$/i, score: 14, target: 'web-development' },
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:mobile development|mobile app|app development)(?: page| section)?(?: please)?[.!]?$/i, score: 14, target: 'mobile-development' },
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:digital marketing|seo|marketing|online marketing)(?: page| section)?(?: please)?[.!]?$/i, score: 14, target: 'digital-marketing' },
    { pattern: /^(?:can you |please |)?(?:take me|go|navigate|bring me) (?:to |on |over to |)?(?:the |our |)?(?:desktop application|desktop development|desktop software)(?: page| section)?(?: please)?[.!]?$/i, score: 14, target: 'desktop-application-development' },
    
    // Complex navigation patterns
    { pattern: /^(?:i'm interested in|i want to learn about|tell me more about) (?:your |)?(web development|mobile development|digital marketing|desktop applications)[.!]?$/i, score: 12, target: (match) => match[1].toLowerCase().replace(/\s+/g, '-') },
    { pattern: /^(?:where can i find|how do i get to) (?:the |)?(services|about us|portfolio|contact|careers)[?]?$/i, score: 12, target: (match) => match[1].toLowerCase().replace(/\s+/g, '-') },
  ],

  scroll: [
    // Direction-based scrolling
    { pattern: /^(?:can you |please |)?(?:scroll|move) (?:the page |)?(down|up|downwards|upwards)(?: a bit| slightly| a little)?(?: please)?[.!]?$/i, score: 15, direction: (match) => match[1].toLowerCase().includes('down') ? 'down' : 'up' },
    { pattern: /^(?:scroll|move) (?:to the |)(top|bottom|beginning|end|start|footer)(?: of (?:the|this) page)?(?: please)?[.!]?$/i, score: 16, direction: (match) => {
      const dir = match[1].toLowerCase();
      return dir === 'top' || dir === 'beginning' || dir === 'start' ? 'top' : 'bottom';
    }},
    { pattern: /^(?:go|jump|take me) (?:to the |)(top|bottom|beginning|end)(?: please)?[.!]?$/i, score: 15, direction: (match) => match[1].toLowerCase() === 'top' ? 'top' : 'bottom' },
    
    // Section-based scrolling
    { pattern: /^(?:can you |please |)?(?:scroll|go|jump) (?:to|into|down to) (?:the |)?(hero|header|title)(?: section)?(?: please)?[.!]?$/i, score: 14, section: 'hero' },
    { pattern: /^(?:can you |please |)?(?:scroll|go|jump) (?:to|into|down to) (?:the |)?(services|service section|what we offer)(?: please)?[.!]?$/i, score: 14, section: 'services' },
    { pattern: /^(?:can you |please |)?(?:scroll|go|jump) (?:to|into|down to) (?:the |)?(testimonials|reviews|feedback|client stories)(?: please)?[.!]?$/i, score: 14, section: 'testimonials' },
    { pattern: /^(?:can you |please |)?(?:scroll|go|jump) (?:to|into|down to) (?:the |)?(contact|contact us|contact form|get in touch)(?: please)?[.!]?$/i, score: 14, section: 'contact' },
    { pattern: /^(?:can you |please |)?(?:scroll|go|jump) (?:to|into|down to) (?:the |)?(about|about us|our team|company info)(?: please)?[.!]?$/i, score: 14, section: 'about' },
    { pattern: /^(?:can you |please |)?(?:scroll|go|jump) (?:to|into|down to) (?:the |)?(portfolio|our work|projects|case studies)(?: please)?[.!]?$/i, score: 14, section: 'portfolio' },
    { pattern: /^(?:can you |please |)?(?:scroll|go|jump) (?:to|into|down to) (?:the |)?(stats|statistics|numbers|achievements)(?: please)?[.!]?$/i, score: 13, section: 'stats' },
    { pattern: /^(?:can you |please |)?(?:scroll|go|jump) (?:to|into|down to) (?:the |)?(cta|call to action|next step|what's next)(?: please)?[.!]?$/i, score: 13, section: 'cta' },
    
    // Complex scrolling patterns
    { pattern: /^(?:i want to see|show me|take me to) (?:the |)?(services|testimonials|contact|about|portfolio)(?: section)?(?: please)?[.!]?$/i, score: 13, section: (match) => match[1].toLowerCase() },
    { pattern: /^(?:where is|how do i get to) (?:the |)?(services|testimonials|contact form|about section|portfolio)(?: on this page)?[?]?$/i, score: 12, section: (match) => match[1].toLowerCase().replace(/\s+/g, '_') },
  ],

  read: [
    // Content reading requests
    { pattern: /^(?:can you |please |)?(?:read|tell me|what does it say) (?:in|on|at) (?:the |)?(hero|header|title)(?: section)?(?: please)?[.!]?$/i, score: 15, content_type: 'hero' },
    { pattern: /^(?:can you |please |)?(?:read|tell me|what does it say) (?:in|on|at) (?:the |)?(services|service section|what we offer)(?: please)?[.!]?$/i, score: 14, content_type: 'services' },
    { pattern: /^(?:can you |please |)?(?:read|tell me|what does it say) (?:in|on|at) (?:the |)?(testimonials|reviews|feedback|client stories)(?: please)?[.!]?$/i, score: 14, content_type: 'testimonials' },
    { pattern: /^(?:can you |please |)?(?:read|tell me|what does it say) (?:in|on|at) (?:the |)?(stats|statistics|numbers|achievements)(?: please)?[.!]?$/i, score: 13, content_type: 'stats' },
    { pattern: /^(?:can you |please |)?(?:read|tell me|what does it say) (?:in|on|at) (?:the |)?(mission|vision|values)(?: please)?[.!]?$/i, score: 14, content_type: (match) => match[1].toLowerCase() },
    { pattern: /^(?:can you |please |)?(?:read|tell me|what does it say) (?:in|on|at) (?:the |)?(team|people|employees)(?: please)?[.!]?$/i, score: 13, content_type: 'team' },
    { pattern: /^(?:can you |please |)?(?:read|tell me|what does it say) (?:in|on|at) (?:the |)?(process|how we work|our approach)(?: please)?[.!]?$/i, score: 13, content_type: 'process' },
    
    // Complex reading patterns
    { pattern: /^(?:what's|what is) (?:in|on|at) (?:the |)?(hero|services|testimonials|contact|about|portfolio)(?: section)?[?]?$/i, score: 13, content_type: (match) => match[1].toLowerCase() },
    { pattern: /^(?:can you |)?(?:read|tell me) (?:what's|what is) (?:in|on|at) (?:the |)?(hero|services|testimonials)(?: section)?[?]?$/i, score: 12, content_type: (match) => match[1].toLowerCase() },
    { pattern: /^(?:i'd like to know|i want to hear) (?:what's|what is) (?:in|on|at) (?:the |)?(services|testimonials|about)(?: section)?[.!]?$/i, score: 12, content_type: (match) => match[1].toLowerCase() },
  ],

  click: [
    // Button clicking requests
    { pattern: /^(?:can you |please |)?(?:click|press|select|tap) (?:on |the |)?(get in touch|contact us|contact button)(?: please)?[.!]?$/i, score: 15, target: 'get in touch' },
    { pattern: /^(?:can you |please |)?(?:click|press|select|tap) (?:on |the |)?(view portfolio|see our work|portfolio button)(?: please)?[.!]?$/i, score: 14, target: 'view portfolio' },
    { pattern: /^(?:can you |please |)?(?:click|press|select|tap) (?:on |the |)?(view services|our services|services button)(?: please)?[.!]?$/i, score: 14, target: 'view all services' },
    { pattern: /^(?:can you |please |)?(?:click|press|select|tap) (?:on |the |)?(learn more|more info|details|read more)(?: please)?[.!]?$/i, score: 13, target: 'learn more' },
    { pattern: /^(?:can you |please |)?(?:click|press|select|tap) (?:on |the |)?(apply now|apply|submit application)(?: please)?[.!]?$/i, score: 15, target: 'apply now' },
    { pattern: /^(?:can you |please |)?(?:click|press|select|tap) (?:on |the |)?(send message|submit form|send)(?: please)?[.!]?$/i, score: 15, target: 'send message' },
    
    // Complex clicking patterns
    { pattern: /^(?:i want to|i'd like to) (?:contact|get in touch|reach out)(?: please)?[.!]?$/i, score: 13, target: 'get in touch' },
    { pattern: /^(?:how can i|what's the way to) (?:contact|get in touch|reach) you[?]?$/i, score: 12, target: 'get in touch' },
    { pattern: /^(?:show me|i want to see) (?:your|the) (?:portfolio|work|projects)[.!]?$/i, score: 12, target: 'view portfolio' },
    { pattern: /^(?:i'm interested in|i want to learn about) (?:your|the) (?:services|offerings)[.!]?$/i, score: 12, target: 'view all services' },
  ],

  info: [
    // Company information requests
    { pattern: /^(?:can you |please |)?(?:tell me about|what are|describe) (?:your|the) (?:services|what you offer|offerings)(?: please)?[.?]?$/i, score: 15, topic: 'services' },
    { pattern: /^(?:can you |please |)?(?:tell me about|what is|describe) (?:your|the) (?:company|about us|who you are)(?: please)?[.?]?$/i, score: 15, topic: 'about' },
    { pattern: /^(?:can you |please |)?(?:tell me about|what are|describe) (?:your|the) (?:projects|work|portfolio)(?: please)?[.?]?$/i, score: 14, topic: 'projects' },
    { pattern: /^(?:can you |please |)?(?:tell me about|what are|describe) (?:your|the) (?:technologies|tech stack|tools|technology)(?: please)?[.?]?$/i, score: 14, topic: 'technologies' },
    { pattern: /^(?:can you |please |)?(?:tell me about|what is|describe) (?:your|the) (?:team|people|employees)(?: please)?[.?]?$/i, score: 13, topic: 'team' },
    { pattern: /^(?:can you |please |)?(?:tell me about|what is|describe) (?:your|the) (?:nasscom|membership|affiliation)(?: please)?[.?]?$/i, score: 13, topic: 'nasscom' },
    
    // Complex information patterns
    { pattern: /^(?:what (?:kind of|types of) (?:services|work) do you (?:offer|provide))[?]?$/i, score: 14, topic: 'services' },
    { pattern: /^(?:how long have you been|when did you start) (?:in business|operating|running)[?]?$/i, score: 13, topic: 'about' },
    { pattern: /^(?:what (?:technologies|tools|frameworks) do you (?:use|work with))[?]?$/i, score: 14, topic: 'technologies' },
    { pattern: /^(?:how many (?:projects|clients) have you (?:worked with|completed))[?]?$/i, score: 13, topic: 'projects' },
    { pattern: /^(?:do you have|are you part of) (?:any|a) (?:nasscom|membership|association)[?]?$/i, score: 13, topic: 'nasscom' },
  ],

  stop: [
    // Stop listening requests
    { pattern: /^(?:that's all|that will be all|i'm done|no more commands)(?: for now)?[.!]?$/i, score: 16 },
    { pattern: /^(?:stop|end|exit|quit) (?:listening|voice|assistant|help)(?: please)?[.!]?$/i, score: 15 },
    { pattern: /^(?:thank you|thanks)(?: that's all| that will be all)?[.!]?$/i, score: 14 },
    { pattern: /^(?:goodbye|see you|farewell|bye)(?: for now)?[.!]?$/i, score: 14 },
    { pattern: /^(?:i don't need|no more) (?:help|assistance)(?: right now)?[.!]?$/i, score: 13 },
  ],

  help: [
    // Help requests
    { pattern: /^(?:what can you do|how can you help|what are my options)(?: please)?[?]?$/i, score: 15 },
    { pattern: /^(?:help|assist me|guide me|show me what to do)(?: please)?[.!]?$/i, score: 14 },
    { pattern: /^(?:i need help|i need assistance|can you help me)(?: please)?[.?]?$/i, score: 14 },
    { pattern: /^(?:what commands|what can i say|what should i say)(?: please)?[?]?$/i, score: 13 },
    { pattern: /^(?:how does this work|how do i use this|what's possible)(?: please)?[?]?$/i, score: 13 },
  ],

  form: [
    // Form interaction requests
    { pattern: /^(?:i want to|i'd like to) (?:contact|get in touch|reach out|send a message)(?: please)?[.!]?$/i, score: 14, action: 'contact' },
    { pattern: /^(?:how can i|what's the process to) (?:contact|get in touch|reach) you[?]?$/i, score: 13, action: 'contact' },
    { pattern: /^(?:i'm interested in|i want to apply for) (?:a job|careers|working with you)(?: please)?[.!]?$/i, score: 14, action: 'careers' },
    { pattern: /^(?:i need|i want) (?:more information|additional details)(?: please)?[.!]?$/i, score: 13, action: 'information' },
  ],

  search: [
    // Search requests
    { pattern: /^(?:search|find|look for) (?:web development|mobile development|digital marketing)(?: information| details)?[.!]?$/i, score: 14, query: (match) => match[1] },
    { pattern: /^(?:where can i find|how do i find) (?:information|details) about (?:web development|mobile development|digital marketing)[?]?$/i, score: 13, query: (match) => match[1] },
    { pattern: /^(?:show me|tell me about) (?:web development|mobile development|digital marketing)(?: services)?[.!]?$/i, score: 13, query: (match) => match[1] },
  ]
};

// Contextual understanding patterns
const contextualPatterns = {
  greetings: [
    /^(?:hello|hi|hey|greetings|good (?:morning|afternoon|evening))(?: there| pickzy| assistant)?[!.]?$/i,
    /^(?:howdy|what's up|yo)(?: pickzy| assistant)?[!.]?$/i
  ],
  appreciation: [
    /^(?:thank you|thanks|appreciate it|much appreciated)(?: very much| a lot)?[!.]?$/i,
    /^(?:that's|that is) (?:great|awesome|wonderful|perfect|helpful|excellent)[!.]?$/i
  ],
  confirmation: [
    /^(?:yes|yeah|yep|sure|ok|okay|alright|correct|right)(?: please)?[!.]?$/i,
    /^(?:that's|that is) (?:right|correct|what i wanted|what i meant)[!.]?$/i
  ],
  negation: [
    /^(?:no|nope|nah|not really|not exactly|that's not)(?: what i meant| what i wanted)?[!.]?$/i,
    /^(?:cancel|stop|nevermind|forget it)(?: that| please)?[!.]?$/i
  ]
};

// Advanced synonym mapping for better intent recognition
const synonymMap = {
  // Navigation synonyms
  'home': ['home', 'homepage', 'main page', 'start page', 'starting page', 'main'],
  'about': ['about', 'about us', 'about page', 'company', 'company info', 'our story', 'who we are'],
  'services': ['services', 'service page', 'what we offer', 'our offerings', 'what you do'],
  'portfolio': ['portfolio', 'our work', 'projects', 'case studies', 'work examples'],
  'contact': ['contact', 'contact us', 'contact page', 'get in touch', 'reach us', 'contact info'],
  'careers': ['careers', 'jobs', 'career page', 'work with us', 'join us', 'employment'],
  
  // Section synonyms
  'hero': ['hero', 'header', 'title', 'top section', 'main banner'],
  'services_section': ['services', 'service section', 'what we offer', 'our services'],
  'testimonials': ['testimonials', 'reviews', 'feedback', 'client stories', 'customer feedback'],
  'contact_section': ['contact', 'contact us', 'contact form', 'get in touch'],
  'about_section': ['about', 'about us', 'our team', 'company info'],
  'portfolio_section': ['portfolio', 'our work', 'projects', 'case studies'],
  'stats': ['stats', 'statistics', 'numbers', 'achievements', 'metrics'],
  'cta': ['cta', 'call to action', 'next step', "what's next", 'action button'],
  
  // Action synonyms
  'click': ['click', 'press', 'select', 'tap', 'choose'],
  'read': ['read', 'tell me', 'what does it say', 'what is written', 'what is there'],
  'scroll': ['scroll', 'move', 'navigate', 'go', 'jump'],
  'view': ['view', 'see', 'look at', 'check out', 'visit'],
  
  // Information synonyms
  'services_info': ['services', 'what you offer', 'offerings', 'what you do'],
  'company_info': ['company', 'about us', 'who you are', 'your story', 'background'],
  'projects_info': ['projects', 'work', 'portfolio', 'case studies', 'what youve done'],
  'tech_info': ['technologies', 'tech stack', 'tools', 'technology', 'frameworks'],
  'team_info': ['team', 'people', 'employees', 'staff', 'who works here'],
  'nasscom_info': ['nasscom', 'membership', 'affiliation', 'association'],
};

export const useVoiceAssistantCommands = ({
  speak,
  setIsProcessing,
  setConversationHistory,
  stopListening
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const conversationContext = useRef({
    lastIntent: null,
    lastParameters: {},
    expectedNext: null,
    userContext: {}
  });

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

  // Get page context
  const getPageContext = useCallback(() => {
    const contexts = {
      '/': {
        name: 'Homepage',
        features: ['hero section', 'services overview', 'testimonials', 'contact form'],
        availableActions: ['navigate', 'scroll', 'read content', 'click buttons', 'get information']
      },
      '/about-us': {
        name: 'About Us',
        features: ['company history', 'team', 'mission', 'vision', 'values', 'nasscom membership'],
        availableActions: ['navigate', 'scroll', 'read content', 'click buttons', 'get information']
      },
      '/contact-us': {
        name: 'Contact',
        features: ['contact form', 'office location', 'contact details', 'FAQ'],
        availableActions: ['navigate', 'scroll', 'read content', 'click buttons', 'get information']
      },
      '/services': {
        name: 'Services',
        features: ['service categories', 'technologies', 'process', 'why choose us'],
        availableActions: ['navigate', 'scroll', 'read content', 'click buttons', 'get information']
      },
      '/portfolio': {
        name: 'Portfolio',
        features: ['project showcase', 'case studies', 'technology filters', 'client testimonials'],
        availableActions: ['navigate', 'scroll', 'read content', 'click buttons', 'get information']
      },
      '/careers': {
        name: 'Careers',
        features: ['job openings', 'company culture', 'benefits', 'application process'],
        availableActions: ['navigate', 'scroll', 'read content', 'click buttons', 'get information']
      }
    };

    return contexts[pathname] || {
      name: 'Page',
      features: [],
      availableActions: ['navigate', 'scroll', 'read content', 'click buttons', 'get information']
    };
  }, [pathname]);

  // Advanced text normalization
  const normalizeText = useCallback((text) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/[^\w\s]/g, '')
      .replace(/\b(?:please|kindly|could you|would you|can you)\b/gi, '')
      .trim();
  }, []);

  // Advanced synonym expansion
  const expandSynonyms = useCallback((text) => {
    let expandedText = text;
    Object.entries(synonymMap).forEach(([key, synonyms]) => {
      synonyms.forEach(synonym => {
        const regex = new RegExp(`\\b${synonym}\\b`, 'gi');
        if (regex.test(expandedText)) {
          expandedText = expandedText.replace(regex, key);
        }
      });
    });
    return expandedText;
  }, []);

  // Contextual understanding
  const understandContext = useCallback((command) => {
    const normalizedCommand = normalizeText(command);
    
    // Check for greetings
    for (const pattern of contextualPatterns.greetings) {
      if (pattern.test(command)) {
        return { type: 'greeting', response: "Hello! I'm PickZy assistant. How can I help you today?" };
      }
    }
    
    // Check for appreciation
    for (const pattern of contextualPatterns.appreciation) {
      if (pattern.test(command)) {
        return { type: 'appreciation', response: "You're welcome! Is there anything else I can help you with?" };
      }
    }
    
    // Check for confirmation
    for (const pattern of contextualPatterns.confirmation) {
      if (pattern.test(command)) {
        return { type: 'confirmation', response: "Great! What would you like to do next?" };
      }
    }
    
    // Check for negation
    for (const pattern of contextualPatterns.negation) {
      if (pattern.test(command)) {
        return { type: 'negation', response: "I understand. How can I assist you differently?" };
      }
    }
    
    return null;
  }, []);

  // Advanced intent recognition with multiple strategies
  const recognizeIntent = useCallback((command) => {
    const normalizedCommand = normalizeText(command);
    const expandedCommand = expandSynonyms(normalizedCommand);
    
    let bestMatch = { intent: null, score: 0, parameters: {} };
    
    // Strategy 1: Exact pattern matching
    Object.entries(advancedIntentPatterns).forEach(([intent, patterns]) => {
      patterns.forEach(({ pattern, score, ...params }) => {
        const match = command.match(pattern);
        if (match && score > bestMatch.score) {
          let processedParams = {};
          
          // Process parameters that might be functions
          Object.entries(params).forEach(([key, value]) => {
            if (typeof value === 'function') {
              processedParams[key] = value(match);
            } else {
              processedParams[key] = value;
            }
          });
          
          bestMatch = { 
            intent, 
            score, 
            parameters: processedParams,
            match
          };
        }
      });
    });
    
    // Strategy 2: Keyword-based matching with context
    if (bestMatch.score < 8) {
      const keywords = expandedCommand.split(' ');
      const pageContext = getPageContext();
      
      // Navigation detection
      const navKeywords = ['go', 'navigate', 'take', 'show', 'view', 'visit'];
      const navTargets = ['home', 'about', 'services', 'portfolio', 'contact', 'careers'];
      
      if (keywords.some(k => navKeywords.includes(k)) && 
          keywords.some(k => navTargets.includes(k))) {
        const target = keywords.find(k => navTargets.includes(k));
        bestMatch = {
          intent: 'navigate',
          score: 9,
          parameters: { target }
        };
      }
      
      // Scroll detection
      const scrollKeywords = ['scroll', 'move', 'jump', 'top', 'bottom', 'up', 'down'];
      if (keywords.some(k => scrollKeywords.includes(k))) {
        if (keywords.includes('top') || keywords.includes('up')) {
          bestMatch = {
            intent: 'scroll',
            score: 9,
            parameters: { direction: 'top' }
          };
        } else if (keywords.includes('bottom') || keywords.includes('down')) {
          bestMatch = {
            intent: 'scroll',
            score: 9,
            parameters: { direction: 'bottom' }
          };
        } else {
          bestMatch = {
            intent: 'scroll',
            score: 8,
            parameters: { direction: 'down' }
          };
        }
      }
      
      // Read detection
      const readKeywords = ['read', 'tell', 'what', 'say', 'content'];
      if (keywords.some(k => readKeywords.includes(k))) {
        const contentTypes = ['hero', 'services', 'testimonials', 'stats', 'mission', 'team'];
        const contentType = keywords.find(k => contentTypes.includes(k)) || 'hero';
        bestMatch = {
          intent: 'read',
          score: 8,
          parameters: { content_type: contentType }
        };
      }
    }
    
    // Strategy 3: Contextual follow-up
    if (bestMatch.score < 6 && conversationContext.current.expectedNext) {
      const { expectedIntent, expectedParameters } = conversationContext.current.expectedNext;
      bestMatch = {
        intent: expectedIntent,
        score: 7,
        parameters: expectedParameters
      };
      conversationContext.current.expectedNext = null;
    }
    
    return bestMatch.intent ? bestMatch : { intent: 'unknown', score: 0, parameters: {} };
  }, [getPageContext]);

  // Intent handlers
  const handleNavigateIntent = useCallback((parameters) => {
    if (parameters && parameters.target) {
      const target = parameters.target;
      const route = enhancedNavigate(target);
      
      // Update context
      conversationContext.current.lastIntent = 'navigate';
      conversationContext.current.lastParameters = parameters;
      conversationContext.current.expectedNext = null;
      
      return route ? 
        `As a PickZy assistant, I'll take you to the ${target} page.` : 
        `As a PickZy assistant, I couldn't find a page for "${target}".`;
    }
    
    // If no target specified, ask for clarification
    conversationContext.current.expectedNext = {
      expectedIntent: 'navigate',
      expectedParameters: {}
    };
    
    return "As a PickZy assistant, where would you like to go? You can say 'home', 'services', 'about us', 'portfolio', 'contact us', or 'careers'.";
  }, [enhancedNavigate]);

  const handleScrollIntent = useCallback((parameters) => {
    if (parameters && parameters.direction) {
      if (parameters.direction === 'down' || parameters.direction === 'up') {
        const scrollAmount = window.innerHeight * 0.8;
        window.scrollBy({ 
          top: parameters.direction === 'down' ? scrollAmount : -scrollAmount, 
          behavior: 'smooth' 
        });
        
        // Update context
        conversationContext.current.lastIntent = 'scroll';
        conversationContext.current.lastParameters = parameters;
        conversationContext.current.expectedNext = null;
        
        return `As a PickZy assistant, I'm scrolling ${parameters.direction}.`;
      } else if (parameters.direction === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        conversationContext.current.lastIntent = 'scroll';
        conversationContext.current.lastParameters = parameters;
        conversationContext.current.expectedNext = null;
        
        return "As a PickZy assistant, I'm taking you to the top of the page.";
      } else if (parameters.direction === 'bottom') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        
        conversationContext.current.lastIntent = 'scroll';
        conversationContext.current.lastParameters = parameters;
        conversationContext.current.expectedNext = null;
        
        return "As a PickZy assistant, I'm taking you to the bottom of the page.";
      }
    } else if (parameters && parameters.section) {
      const scrolled = enhancedScrollToSection(parameters.section);
      
      conversationContext.current.lastIntent = 'scroll';
      conversationContext.current.lastParameters = parameters;
      conversationContext.current.expectedNext = null;
      
      return scrolled ? 
        `As a PickZy assistant, I'm scrolling to the ${parameters.section} section.` : 
        `As a PickZy assistant, I couldn't find the ${parameters.section} section on this page.`;
    }
    
    // If no direction/section specified, ask for clarification
    conversationContext.current.expectedNext = {
      expectedIntent: 'scroll',
      expectedParameters: {}
    };
    
    return "As a PickZy assistant, where would you like to scroll? You can say 'up', 'down', 'top', 'bottom', or specify a section like 'services' or 'testimonials'.";
  }, [enhancedScrollToSection]);

  const handleReadContentIntent = useCallback((parameters) => {
    if (parameters && parameters.content_type) {
      const content = readPageContent(parameters.content_type);
      
      // Update context
      conversationContext.current.lastIntent = 'read';
      conversationContext.current.lastParameters = parameters;
      conversationContext.current.expectedNext = null;
      
      return content ? 
        `As a PickZy assistant, here's what's in the ${parameters.content_type} section: ${content}` : 
        `As a PickZy assistant, I couldn't find the ${parameters.content_type} section on this page.`;
    }
    
    // If no content type specified, ask for clarification
    conversationContext.current.expectedNext = {
      expectedIntent: 'read',
      expectedParameters: {}
    };
    
    return "As a PickZy assistant, what content would you like me to read? You can specify a section like 'hero', 'services', 'testimonials', or 'stats'.";
  }, [readPageContent]);

  const handleClickIntent = useCallback((parameters) => {
    if (parameters && parameters.target) {
      const clicked = clickButton(parameters.target);
      
      // Update context
      conversationContext.current.lastIntent = 'click';
      conversationContext.current.lastParameters = parameters;
      conversationContext.current.expectedNext = null;
      
      return clicked ? 
        `As a PickZy assistant, I clicked the ${parameters.target} button.` : 
        `As a PickZy assistant, I couldn't find a ${parameters.target} button on this page.`;
    }
    
    // If no target specified, ask for clarification
    conversationContext.current.expectedNext = {
      expectedIntent: 'click',
      expectedParameters: {}
    };
    
    return "As a PickZy assistant, what button would you like me to click? You can say 'contact us', 'view portfolio', 'learn more', or other available buttons.";
  }, [clickButton]);

  const handleCompanyInfoIntent = useCallback((parameters) => {
    if (parameters && parameters.topic) {
      // Update context
      conversationContext.current.lastIntent = 'info';
      conversationContext.current.lastParameters = parameters;
      conversationContext.current.expectedNext = null;
      
      if (parameters.topic === 'services') {
        return "As a PickZy assistant, we offer custom software development, mobile app development, web development, UI/UX design, cloud solutions, and digital marketing services. We specialize in creating tailored solutions that drive business growth.";
      } else if (parameters.topic === 'about') {
        return "As a PickZy assistant, we're a Chennai-based software company founded in 2011. We deliver AI-driven web and mobile solutions to clients globally. With over 300 successful projects, we're known for delivering flawless, on-time IT solutions with 24/7 support.";
      } else if (parameters.topic === 'projects') {
        return "As a PickZy assistant, we have completed over 300 projects with more than 200 happy clients across various industries including e-commerce, healthcare, finance, and education. Our portfolio showcases innovative solutions that drive real business results.";
      } else if (parameters.topic === 'technologies') {
        return "As a PickZy assistant, we use a wide range of technologies including React, Node.js, Next.js, Python, .NET, Java, Flutter, React Native, AWS, Azure, and Google Cloud. We stay updated with the latest tech trends to deliver cutting-edge solutions.";
      } else if (parameters.topic === 'team') {
        return "As a PickZy assistant, our team consists of 50-200 skilled professionals including developers, designers, project managers, and digital marketing experts. We're proud of our diverse talent pool that brings years of experience to every project.";
      } else if (parameters.topic === 'nasscom') {
        return "As a PickZy assistant, we're proud members of NASSCOM, the premier trade association of the Indian IT industry. This membership reflects our commitment to industry standards, excellence, and ethical business practices.";
      }
    }
    
    // If no topic specified, ask for clarification
    conversationContext.current.expectedNext = {
      expectedIntent: 'info',
      expectedParameters: {}
    };
    
    return "As a PickZy assistant, what would you like to know about? You can ask about our 'services', 'company', 'projects', 'technologies', 'team', or 'NASSCOM membership'.";
  }, []);

  const handleStopIntent = useCallback(() => {
    // Update context
    conversationContext.current.lastIntent = 'stop';
    conversationContext.current.lastParameters = {};
    conversationContext.current.expectedNext = null;
    
    return "As a PickZy assistant, I'll stop listening now. Click the button if you need me again!";
  }, []);

  const handleHelpIntent = useCallback(() => {
    const pageContext = getPageContext();
    
    // Update context
    conversationContext.current.lastIntent = 'help';
    conversationContext.current.lastParameters = {};
    conversationContext.current.expectedNext = null;
    
    return `As a PickZy assistant, I can help you navigate our website, get information about our services, and assist with various tasks. On this ${pageContext.name} page, I can help you with: ${pageContext.features.join(', ')}. Try saying: "go to services", "scroll down", or "contact us".`;
  }, [getPageContext]);

  const handleFormIntent = useCallback((parameters) => {
    if (parameters && parameters.action) {
      // Update context
      conversationContext.current.lastIntent = 'form';
      conversationContext.current.lastParameters = parameters;
      
      if (parameters.action === 'contact') {
        const contactClicked = clickButton('get in touch');
        return contactClicked ? 
          "As a PickZy assistant, I've opened the contact form for you. How can I help you with it?" : 
          "As a PickZy assistant, I'll take you to our contact page where you can reach out to us.";
      } else if (parameters.action === 'careers') {
        const careersClicked = clickButton('apply now');
        return careersClicked ? 
          "As a PickZy assistant, I've opened the careers section for you. Would you like to see available positions?" : 
          "As a PickZy assistant, I'll take you to our careers page where you can explore job opportunities.";
      }
    }
    
    return "As a PickZy assistant, I can help you with forms. Would you like to contact us or explore career opportunities?";
  }, [clickButton]);

  const handleSearchIntent = useCallback((parameters) => {
    if (parameters && parameters.query) {
      // Update context
      conversationContext.current.lastIntent = 'search';
      conversationContext.current.lastParameters = parameters;
      
      // Navigate to services page for search queries
      enhancedNavigate('services');
      return `As a PickZy assistant, I'm taking you to our services page where you can find information about ${parameters.query}.`;
    }
    
    return "As a PickZy assistant, what would you like to search for? You can ask about our services like 'web development' or 'digital marketing'.";
  }, [enhancedNavigate]);

  const handleUnknownIntent = useCallback((command) => {
    // Try to understand the context of the unknown command
    const contextualResponse = understandContext(command);
    if (contextualResponse) {
      return contextualResponse.response;
    }
    
    // If we have context from previous interaction, use it
    if (conversationContext.current.lastIntent) {
      const { lastIntent, lastParameters } = conversationContext.current;
      
      switch (lastIntent) {
        case 'navigate':
          return "I'm not sure where you want to go. Please specify a destination like 'home', 'services', or 'contact us'.";
        case 'scroll':
          return "I'm not sure where you want to scroll. Please specify a direction like 'up', 'down', or a section like 'services'.";
        case 'read':
          return "I'm not sure what content you want me to read. Please specify a section like 'hero' or 'testimonials'.";
        case 'click':
          return "I'm not sure what button you want me to click. Please specify a button like 'contact us' or 'learn more'.";
        case 'info':
          return "I'm not sure what information you're looking for. Please specify a topic like 'services' or 'company'.";
        default:
          return "I'm not sure I understand. Can you please rephrase your request? Try saying 'help' to see what I can do.";
      }
    }
    
    // Default response for completely unknown commands
    return "I'm not sure I understand. Can you please rephrase your request? Try saying 'help' to see what I can do.";
  }, [understandContext]);

  // Enhanced command processing with advanced intent recognition
  const processCommand = useCallback(async (command) => {
    if (!command.trim()) return;
    
    console.log('Processing command:', command);
    setIsProcessing(true);
    
    let response = '';
    let shouldContinueListening = true;
    
    // Recognize intent using our advanced system
    const { intent, parameters } = recognizeIntent(command);
    
    console.log('Recognized intent:', intent, 'with parameters:', parameters);
    
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
      case 'form':
        response = handleFormIntent(parameters);
        break;
      case 'search':
        response = handleSearchIntent(parameters);
        break;
      case 'unknown':
      default:
        response = handleUnknownIntent(command);
        break;
    }
    
    // Update conversation history
    setConversationHistory(prev => [
      ...prev,
      { type: 'user', content: command },
      { type: 'assistant', content: response, timestamp: new Date().toISOString() }
    ]);
    
    console.log('Response:', response);
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
    handleHelpIntent,
    handleFormIntent,
    handleSearchIntent,
    handleUnknownIntent
  ]);

  return {
    processCommand
  };
};