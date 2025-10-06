import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Intents we want OpenAI to classify
const intents = [
  "navigate",
  "scroll",
  "scroll_section",
  "read_content",
  "click",
  "company_info",
  "form_interaction",
  "stop",
  "help",
  "greeting",
  "acknowledgement",
];

// Common quick responses (skip OpenAI for these)
const commonResponses = new Map([
  ["hello", { intent: "greeting", response_text: "Hello! How can I help you?" }],
  ["hey", { intent: "greeting", response_text: "Hey! How can I help you?" }],
  ["thanks", { intent: "acknowledgement", response_text: "You're welcome!" }],
  ["thank you", { intent: "acknowledgement", response_text: "You're welcome!" }],
  // ["help", { intent: "help", response_text: "I can help you navigate, read content, scroll, or click buttons. What do you want to do?" }],
  ["stop", { intent: "stop", response_text: "Goodbye!" }],
  ["exit", { intent: "stop", response_text: "Goodbye!" }],
  ["quit", { intent: "stop", response_text: "Goodbye!" }],
  ["up", { intent: "scroll", response_text: "Scrolling up." }],
  ["down", { intent: "scroll", response_text: "Scrolling down." }],
  ["top", { intent: "scroll", response_text: "Scrolling to top." }],
  ["bottom", { intent: "scroll", response_text: "Scrolling to bottom." }],
  ["go to home", { intent: "navigate", response_text: "Navigating to home page." }],
  ["go to contact", { intent: "navigate", response_text: "Navigating to contact page." }],
  ["go to about", { intent: "navigate", response_text: "Navigating to about page." }],
  ["go to services", { intent: "navigate", response_text: "Navigating to services page." }],
  ["go to portfolio", { intent: "navigate", response_text: "Navigating to portfolio page." }],
  ["company",{ intent: "company_info", response_text:"Pickzy is a Leading Software Development Company." }],
  ["read", { intent: "read_content", response_text: "Reading content." }],
  ["scroll to testimonial", { intent: "scroll_section", response_text: "Scrolling to testimonials section." }],
  ["scroll to footer", { intent: "scroll_section", response_text: "Scrolling to footer section." }],
  ["scroll to form", { intent: "scroll_section", response_text: "Scrolling to form section." }],
  ["click", { intent: "click", response_text: "Clicking button." }],
  ["press", { intent: "click", response_text: "Clicking button." }],

]);

// Response cache to reduce API calls
const responseCache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// System prompt for OpenAI (intent-only)
const systemPrompt = `You are an intent classifier for a website voice assistant.  

Classify the user command into ONE of these intents:
- navigate → move between pages
- scroll → up, down, top, bottom
- scroll_section → move to a specific section on the same page
- read_content → read some section content
- click → click a button
- company_info → information about PickZy
- form_interaction → filling or submitting forms
- stop → end or exit
- greeting → hello/hi
- acknowledgement → thanks/okay

Rules:
- Respond ONLY in JSON format.
- Do not invent actions outside the list.

Examples:
User: "contact page"  
→ {"intent":"navigate","response_text":"Navigating to contact page."}

User: "scroll down"  
→ {"intent":"scroll","response_text":"Scrolling down."}

User: "read about us"  
→ {"intent":"read_content","response_text":"Reading content."}
`;

function findCommonResponse(command) {
  const normalized = command.toLowerCase().trim();
  
  for (const [key, value] of commonResponses.entries()) {
    if (normalized.includes(key)) { 
      return value;
    }
  }
  return null;
}



export async function POST(request) {
  try {
    const body = await request.json();
    const { command = "" } = body;
    const normalizedCommand = command.toLowerCase().trim();

     const commonResponse = findCommonResponse(normalizedCommand);
    if (commonResponse) {
      console.log(normalizedCommand);
      console.log("common response:", commonResponse);
      return NextResponse.json(commonResponse);
    }

    // 2. Check cache
    if (responseCache.has(normalizedCommand)) {
      const cached = responseCache.get(normalizedCommand);
      return NextResponse.json(cached);
    }

    // 3. Call OpenAI to classify intent
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: command },
      ],
      temperature: 0.1,
      max_tokens: 60,
      response_format: { type: "json_object" },
    });

    console.log("user command:", normalizedCommand);

    let intentData;
    try {
      intentData = JSON.parse(completion.choices[0].message.content);

      // Validate structure
      if (!intentData.intent || !intents.includes(intentData.intent)) {
        intentData = { intent: "help", response_text: "Sorry, I didn’t understand that." };
      }
    } catch (err) {
      console.error("Error parsing OpenAI response:", err);
      intentData = { intent: "help", response_text: "I couldn’t process that. Please try again." };
    }

    // 4. Cache result
    responseCache.set(normalizedCommand, intentData);
    setTimeout(() => responseCache.delete(normalizedCommand), CACHE_TTL);
    console.log("API response:", intentData);
    return NextResponse.json(intentData);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { intent: "help", response_text: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}