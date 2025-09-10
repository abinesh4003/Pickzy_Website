import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Content selectors for different pages
const contentSelectors = {
  '/': { 
    hero: '.home-hero', 
    services_overview: '.home-services', 
    service_list: '.home-services-list', 
    stats: '.home-stats', 
    testimonials: '.home-testimonials', 
    cta: '.home-cta',
    footer: 'footer_section' 
  },
  '/services': { 
    hero: '.service-hero', 
    services_grid: '.service-grid', 
    process: '.service-process', 
    why_choose: '.service-why-choose-us', 
    cta: '.service-cta',
    footer: '.footer_section' 
  },
  '/about-us': { 
    hero: '.about-us-hero h1, .about-us-hero p', 
    mission: '.about-us-mission', 
    vision: '.about-us-vision', 
    values: '.about-us-values', 
    team: '.about-us-team', 
    cta: '.about-us-cta', 
    journey: '.about-us-journey', 
    nasscom: '.about-us-nasscom',
    footer: 'footer_section' 
  },
  '/contact-us': { 
    hero: '.contact-hero', 
    form: '.contact-form', 
    info: '.contact-info', 
    faq: '.contact-faq', 
    map: '.map',
    footer: 'footer_section' 
  },
  '/careers': { 
    hero: '.careers-hero', 
    why_work_withus: '.careers-why-work-withus', 
    career_values: '.careers-values', 
    openings: '.job-listing', 
    hiring_process: '.hiring-process',
    footer: 'footer_section' 
  },
};

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

// Cached schema per page
const schemaCache = new Map();

// Response cache to avoid duplicate API calls
const responseCache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Common responses to avoid API calls for simple queries
const commonResponses = new Map([
  ['hello', { intent: 'greeting', parameters: {}, response_text: 'Hello! How can I help you today?' }],
  ['hi', { intent: 'greeting', parameters: {}, response_text: 'Hi there! How can I assist you?' }],
  ['hey', { intent: 'greeting', parameters: {}, response_text: 'Hey! How can I help you?' }],
  ['thanks', { intent: 'acknowledgement', parameters: {}, response_text: "You're welcome! Is there anything else I can help with?" }],
  ['thank you', { intent: 'acknowledgement', parameters: {}, response_text: "You're welcome! Is there anything else I can help with?" }],
  ['help', { intent: 'help', parameters: {}, response_text: 'I can help you navigate, read content, click buttons, or fill forms. What would you like to do?' }],
  ['what can you do', { intent: 'help', parameters: {}, response_text: 'I can help you navigate our website, read page content, click buttons, and answer questions about our company and services.' }],
]);

// Generate intent schema based on current page
const generateIntentSchema = (currentPath) => {
  const contentKeys = contentSelectors[currentPath] ? Object.keys(contentSelectors[currentPath]) : [];
  const buttonKeys = buttonSelectors[currentPath] ? Object.keys(buttonSelectors[currentPath]) : [];

  return {
    navigate: {
      description: "Navigate between pages",
      parameters: { 
        target: "home|about-us|services|portfolio|contact-us|careers|web-development|mobile-development|digital-marketing|digital-transformation|design-and-markup|internet-marketing|custom-software-development|desktop-application-development" 
      },
    },
    scroll: {
      description: "Scroll the page or a section",
      parameters: { 
        direction: "up|down|top|bottom", 
      },
    },
    scroll_to_section: {
      description: "Scroll to a specific section",
      parameters: {
        section: contentKeys.join("|") || ""
      },
    },
    read_content: {
      description: "Read specific content on the page",
      parameters: { 
        content_type: contentKeys.join("|") || "" 
      },
    },
    click: {
      description: "Click a button or link",
      parameters: { 
        target: buttonKeys.join("|") || "" 
      },
    },
    company_info: {
      description: "Provide company-related information",
      parameters: { 
        topic: "services|about|projects|technologies|team|nasscom" 
      },
    },
    form_interaction: {
      description: "Start, fill or submit forms",
      parameters: { 
        form: "contact", 
        action: "start|fill", 
        field: "name|email|phone|message", 
        value: "string" 
      },
    },
    greeting: { 
      description: "Respond to greetings", 
      parameters: {} 
    },
    acknowledgement: { 
      description: "Respond to thanks", 
      parameters: {} 
    },
    stop: { 
      description: "Stop the current action", 
      parameters: {} 
    },
    help: {
      description: "Provide help information",
      parameters: { 
        page: currentPath, 
        section: contentKeys.join("|") || "" 
      },
    },
  };
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '/';

  let schema = schemaCache.get(page);
  if (!schema) {
    schema = generateIntentSchema(page);
    schemaCache.set(page, schema);
  }

  return NextResponse.json({ intents: schema });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
    const { command, context = {} } = body;
    const currentPage = context.currentPage || { path: "/" };
    const normalizedCommand = command.toLowerCase().trim();
    const cacheKey = `${normalizedCommand}-${currentPage.path}-${JSON.stringify(context.formState || {})}`;

    // Check for common responses first
    if (commonResponses.has(normalizedCommand)) {
      const response = commonResponses.get(normalizedCommand);
      return NextResponse.json(response);
    }

    // Check cache for existing response
    if (responseCache.has(cacheKey)) {
      const cached = responseCache.get(cacheKey);
      return NextResponse.json(cached);
    }

    // Get or generate intent schema for current page
    let intentSchema = schemaCache.get(currentPage.path);
    if (!intentSchema) {
      intentSchema = generateIntentSchema(currentPage.path);
      schemaCache.set(currentPage.path, intentSchema);
    }

    // Create system prompt with context
    const systemPrompt = `You are a voice assistant for PickZy, a software development company. 
    Current page: ${currentPage.path}
    Available content sections: ${Object.keys(contentSelectors[currentPage.path] || {}).join(', ')}
    Available buttons: ${Object.keys(buttonSelectors[currentPage.path] || {}).join(', ')}
    
    Follow this intent schema: ${JSON.stringify(intentSchema)}. 
    
    Provide a JSON response with these keys: 
    - intent: one of the intent types from the schema
    - parameters: object with parameters for the intent
    - response_text: natural language response to speak to the user (keep it concise, under 150 characters)
    
    Make responses conversational and helpful.`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: command },
      ],
      temperature: 0.1,
      max_tokens: 150,
      response_format: { type: "json_object" },
    });

    let intentData;
    try {
      intentData = JSON.parse(completion.choices[0].message.content);
      console.log('prompt',intentSchema);
      console.log('OpenAI response:', intentData);


      // Validate response structure
      if (!intentData.intent || !intentData.response_text) {
        throw new Error('Invalid response format from OpenAI');
      }
      
      // Handle read_content intent specifically
      if (intentData.intent === "read_content" && intentData.parameters?.content_type) {
        let key = intentData.parameters.content_type.toLowerCase()
          .replace(/ the | section/g, '')
          .replace(/\s+/g, '_')
          .trim();
          
        const selector = contentSelectors[currentPage.path]?.[key];
        if (!selector) {
          intentData.response_text = `I couldn't find the ${key} section on this page.`;
        } else {
          intentData.parameters.content_type = key;
        }
      }
      
      // Ensure response text is properly formatted
      if (!intentData.response_text.startsWith('As a PickZy assistant')) {
        intentData.response_text = intentData.response_text;
      }

    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      intentData = {
        intent: "help",
        parameters: {},
        response_text: "I couldn't process that request. Please try again.",
      };
    }

    // Cache the response
    responseCache.set(cacheKey, intentData);
    setTimeout(() => responseCache.delete(cacheKey), CACHE_TTL);

    return NextResponse.json(intentData);

  } catch (error) {
    console.error("API error:", error);

    const command = body?.command || '';
    const context = body?.context || {};
    const currentPage = context.currentPage || { path: "/" };
    const cacheKey = `${command.toLowerCase().trim()}-${currentPage.path}-${JSON.stringify(context.formState || {})}`;

    // Return cached response if available even on error
    if (responseCache.has(cacheKey)) {
      return NextResponse.json(responseCache.get(cacheKey));
    }

    // Return error response
    return NextResponse.json({
      intent: "help",
      parameters: {},
      response_text: "I'm experiencing technical difficulties. Please try again in a moment.",
    }, { status: 500 });
  }
}