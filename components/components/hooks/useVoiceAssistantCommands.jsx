'use client';

import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const siteConfig = {
  "/": {
    sections: {
      hero: { selector: ".home-hero", keywords: ["hero", "banner", "top"] },
      services: { selector: ".home-services", keywords: ["service", "services"] },
      stats: { selector: ".home-stats", keywords: ["stat", "number"] },
      testimonials: { selector: ".home-testimonials", keywords: ["testimonial", "review"] },
      cta: { selector: ".home-cta", keywords: ["cta", "call", "action"] },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      contact: { selector: 'a[href="/contact-us"], .contact-button', keywords: ["contact", "get", "touch"] },
      portfolio: { selector: 'a[href="/portfolio"], .portfolio-button', keywords: ["portfolio", "see", "our", "work"] },
      services: { selector: 'a[href="/services"], .services-button', keywords: ["service", "services"] },
      consultation: { selector: 'a[href="/contact-us"], .consultation-button', keywords: ["consultation", "free", "consultation"] },
      learn_more: { selector: '.learnmore, .read-more', keywords: ["learn", "more", "read"] }
    }
  },
  "/services": {
    sections: {
      hero: {
        selector: ".service-hero", keywords: ["hero", "banner", "top", "intro"]
      },
      services: {
        selector: ".service-grid", keywords: ["service", "services", "offering", "solution", "feature"]
      },
      process: {
        selector: ".service-process", keywords: ["process", "workflow", "step", "method"]
      },
      benefits: {
        selector: ".service-why-choose-us", keywords: ["benefit", "why", "advantage", "choose", "us", "reasons", "value"]
      },
      cta: {
        selector: ".service-cta", keywords: ["cta", "call", "action", "get", "started", "consultation", "start", "project"]
      },
      footer: {
        selector: ".footer-section", keywords: ["footer", "bottom", "foot"]
      }
    },
    buttons: {
      learn_more: {
        selector: '.service-grid a, .service-grid button, .read-more, .learn-more', keywords: ["learn", "more", "read", "details", "explore"]
      },
      consultation: {
        selector: 'a[href="/contact-us"], .service-cta a:first-child', keywords: ["consultation", "free", "get", "started", "contact", "us", "start", "project"]
      },
      portfolio: {
        selector: 'a[href="/portfolio"], .service-cta a:last-child', keywords: ["portfolio", "see", "our", "work", "view", "work", "projects", "case", "studies"]
      },
      contact: {
        selector: 'a[href="/contact-us"], .contact-button', keywords: ["contact", "get", "in", "touch", "reach", "us"]
      }
    }
  },
  "/about-us": {
    sections: {
      hero: { selector: ".about-us-hero", keywords: ["hero", "banner", "top"] },
      mission: { selector: ".about-us-mission", keywords: ["mission"] },
      vision: { selector: ".about-us-vision", keywords: ["vision"] },
      values: { selector: ".about-us-values", keywords: ["value", "values"] },
      team: { selector: ".about-us-team", keywords: ["team", "member"] },
      history: { selector: ".about-us-journey", keywords: ["history", "journey"] },
      cta: { selector: ".about-us-cta", keywords: ["cta", "call", "action"] },
      nasscom: { selector: ".about-us-nasscom", keywords: ["nasscom", "certification", "recognization"] },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      contact: { selector: 'a[href="/contact-us"], .contact-button', keywords: ["contact", "get", "touch"] },
      careers: { selector: 'a[href="/careers"], .careers-button', keywords: ["career", "jobs", "join", "team", "positions"] }
    }
  },
  "/contact-us": {
    sections: {
      hero: {
        selector: ".contact-hero",
        keywords: ["hero", "top", "banner", "get", "in", "touch", "contact", "us"]
      },
      info: {
        selector: ".contact-info",
        keywords: ["contact", "info", "phone", "email", "address", "reach", "us", "details"]
      },
      form: {
        selector: ".contact-form",
        keywords: ["form", "contact", "form", "send", "message", "get", "quote", "enquiry", "reach", "out"]
      },
      why_choose: {
        selector: ".why-choose",
        keywords: ["why", "choose", "us", "benefits", "advantages", "features", "reasons"]
      },
      testimonials: {
        selector: ".contact-testimonials",
        keywords: ["testimonials", "reviews", "feedback", "clients", "what", "people", "say"]
      },
      social: {
        selector: ".social-links",
        keywords: ["social", "linkedin", "twitter", "facebook", "follow", "us", "connect"]
      },
      faq: {
        selector: ".contact-faq",
        keywords: ["faq", "questions", "help", "common", "questions", "support"]
      },
      map: {
        selector: ".contact-map",
        keywords: ["map", "location", "office", "visit", "address", "directions"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      submit_form: {
        selector: ".contact-form button[type='submit']",
        keywords: ["submit", "send", "message", "form", "enquiry"]
      },
      schedule_call: {
        selector: ".schedule-call",
        keywords: ["schedule", "call","talk","meeting", "consultation"]
      },
      social_linkedin: {
        selector: ".social-links a[href*='linkedin']",
        keywords: ["linkedin", "connect", "linkedin"]
      },
      social_twitter: {
        selector: ".social-links a[href*='x.com'], .social-links a[href*='twitter']",
        keywords: ["twitter", "twitter"]
      },
      social_facebook: {
        selector: ".social-links a[href*='facebook']",
        keywords: ["facebook", "facebook", "connect"]
      }
    }
  },
  "/careers": {
    sections: {
      hero: {
        selector: ".careers-hero",
        keywords: ["hero", "banner", "intro", "top", "careers", "intro", "join", "team"]
      },
      why_work_with_us: {
        selector: ".careers-why-work-withus",
        keywords: ["why", "work", "benefits", "perks", "culture", "advantages"]
      },
      values: {
        selector: ".careers-values",
        keywords: ["values", "principles", "company", "culture", "core", "values"]
      },
      positions: {
        selector: "#positions",
        keywords: ["open", "positions", "jobs", "job", "openings", "vacancies", "careers", "list"]
      },
      hiring_process: {
        selector: ".hiring-process",
        keywords: ["hiring", "application", "process", "steps", "recruitment", "interview", "process"]
      },
      testimonial: {
        selector: ".careers-testimonial",
        keywords: ["employee", "testimonial", "review", "experience", "feedback", "employee", "story"]
      },
      cta: {
        selector: ".careers-cta",
        keywords: ["cta", "call", "action", "apply", "now", "join", "team", "contact", "hr"]
      },
      footer: {
        selector: ".footer-section",
        keywords: ["footer", "bottom", "foot"]
      }
    },
    buttons: {
      view_positions: { selector: ".view-positions", keywords: ["view", "positions", "see", "jobs", "open", "roles", "job", "listings"] },
      contact_hr: { selector: 'a[href="/contact-us"]', keywords: ["contact", "hr", "get", "in", "touch", "reach", "hr", "talk", "hr"] },
      job_view: { selector: ".btn-view", keywords: ["view", "job", "job", "details", "see", "details", "position", "details"] },
      job_apply: { selector: ".btn-apply", keywords: ["apply", "apply", "now", "submit", "application", "send", "resume"] },
      resume_submit: { selector: ".send-resume", keywords: ["send", "resume", "submit", "resume", "upload", "cv", "resume", "form"] },
      modal_close: { selector: ".btn-close", keywords: ["close", "dismiss", "exit", "cancel"] },
      modal_submit: { selector: ".btn-submit", keywords: ["submit", "submit", "resume", "apply", "send"] }
    }
  },
  "/portfolio": {
    sections: {
      hero: {
        selector: ".portfolio-hero",
        keywords: ["hero", "banner", "intro", "top", "portfolio", "intro"]
      },
      categories: {
        selector: ".portfolio-categories",
        keywords: ["categories", "filters", "tabs", "industries", "portfolio", "filter"]
      },
      projects: {
        selector: ".portfolio-projects",
        keywords: ["projects", "works", "case", "studies", "showcase", "our", "work"]
      },
      project_modal: {
        selector: ".portfolio-modal",
        keywords: ["project", "details", "quick", "view", "modal", "popup", "project", "info"]
      },
      technologies: {
        selector: ".portfolio-technologies",
        keywords: ["technologies", "tools", "stack", "frameworks", "tech"]
      },
      cta: {
        selector: ".portfolio-cta",
        keywords: ["cta", "call", "action", "start", "project", "get", "started"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      quick_view: {
        selector: ".btn-quick-view",
        keywords: ["quick", "view", "view", "details", "open", "project", "project", "info"]
      },
      modal_close: {
        selector: ".btn-close",
        keywords: ["close", "dismiss", "exit", "hide", "modal"]
      },
      contact_cta: {
        selector: 'a[href="/contact-us"]',
        keywords: ["start", "project", "contact", "free", "consultation", "get", "in", "touch"]
      },
      services_cta: {
        selector: 'a[href="/services"]',
        keywords: ["view", "services", "explore", "services", "our", "services"]
      }
    }
  },
  "/blog": {
    sections: {
      hero: { selector: ".blog-hero", keywords: ["hero", "banner", "top"] },
      posts: { selector: ".blog-posts", keywords: ["post", "article", "blog"] },
      categories: { selector: ".blog-categories", keywords: ["category", "topic"] },
      popular: { selector: ".blog-popular", keywords: ["popular", "trending"] },
      cta: { selector: ".blog-cta", keywords: ["cta", "call", "action"] },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      read_more: { selector: '.read-more, .blog-read-more', keywords: ["read", "more"] },
      subscribe: { selector: '.subscribe-button, .newsletter-button', keywords: ["subscribe", "newsletter"] }
    }
  },
  "/web-development": {
    sections: {
      hero: {
        selector: ".webdev-hero",
        keywords: ["hero", "top", "banner", "web", "development", "services", "introduction"]
      },
      features: {
        selector: ".webdev-features",
        keywords: ["features", "expertise", "skills", "strengths", "capabilities", "overview"]
      },
      services: {
        selector: ".webdev-services",
        keywords: ["services", "capabilities", "offerings", "solutions", "what", "we", "do"]
      },
      technologies: {
        selector: ".webdev-technologies",
        keywords: ["technologies", "tech", "stack", "languages", "frameworks", "tools", "databases", "cloud"]
      },
      process: {
        selector: ".webdev-process",
        keywords: ["process", "steps", "workflow", "how", "we", "work", "development", "approach"]
      },
      why_choose: {
        selector: ".webdev-why-choose",
        keywords: ["why", "choose", "us", "benefits", "advantages", "value", "reasons"]
      },
      cta: {
        selector: ".webdev-cta",
        keywords: ["cta", "call", "action", "get", "quote", "contact", "us", "start", "project", "build", "web", "project"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      get_started: {
        selector: ".webdev-hero a[href='/contact-us'] button",
        keywords: ["get", "started", "now", "begin", "project", "start", "building"]
      },
      view_portfolio: {
        selector: ".webdev-hero a[href='/portfolio'] button",
        keywords: ["view", "portfolio", "see", "work", "case", "studies", "our", "projects"]
      },
      get_quote: {
        selector: ".webdev-cta a[href='/contact-us']:first-child button",
        keywords: ["get", "a", "free", "quote", "request", "quote", "pricing", "estimate"]
      },
      contact_now: {
        selector: ".webdev-cta a[href='/contact-us']:last-child button",
        keywords: ["contact", "now", "talk", "us", "reach", "out", "get", "in", "touch"]
      }
    }
  },
  "/mobile-apps-development": {
    sections: {
      hero: {
        selector: ".mobile-hero",
        keywords: ["hero", "top", "banner", "mobile", "development", "introduction"]
      },
      overview: {
        selector: ".mobile-overview",
        keywords: ["overview", "what", "is", "mobile", "development", "intro", "summary", "expertise"]
      },
      features: {
        selector: ".mobile-features",
        keywords: ["features", "capabilities", "services", "strengths", "mobile", "app", "features"]
      },
      capabilities: {
        selector: ".mobile-capabilities",
        keywords: ["capabilities", "solutions", "mobile", "solutions", "offerings", "technology", "stack"]
      },
      process: {
        selector: ".mobile-process",
        keywords: ["process", "workflow", "steps", "how", "we", "work", "development", "process"]
      },
      why_choose: {
        selector: ".mobile-why-choose",
        keywords: ["why", "choose", "us", "advantages", "benefits", "reasons", "value"]
      },
      cta: {
        selector: ".mobile-cta",
        keywords: ["cta", "call", "action", "contact", "us", "start", "project", "book", "consultation", "get", "quote"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      get_started: {
        selector: ".mobile-hero a[href='/contact-us'] button",
        keywords: ["get", "started", "start", "now", "begin", "project", "let's", "begin"]
      },
      view_case_studies: {
        selector: ".mobile-hero a[href='/portfolio'] button",
        keywords: ["view", "case", "studies", "see", "portfolio", "our", "work", "projects"]
      },
      start_project: {
        selector: ".mobile-cta a[href='/contact-us']:first-child button",
        keywords: ["start", "your", "project", "launch", "project", "kickoff", "build", "app"]
      },
      book_consultation: {
        selector: ".mobile-cta a[href='/contact-us']:last-child button",
        keywords: ["book", "consultation", "schedule", "meeting", "talk", "us", "discuss", "strategy"]
      }
    }
  },
  "/desktop-application-development": {
    sections: {
      hero: {
        selector: ".desktop-hero",
        keywords: ["hero", "banner", "desktop", "top"]
      },
      benefits: {
        selector: ".desktop-benefits",
        keywords: ["benefit", "advantage", "why", "desktop", "choose"]
      },
      services: {
        selector: ".desktop-services",
        keywords: ["service", "development", "end", "end", "offer"]
      },
      technologies: {
        selector: ".desktop-technologies",
        keywords: ["tech", "technology", "stack", "tools"]
      },
      usecases: {
        selector: ".desktop-usecases",
        keywords: ["use", "apps", "we", "build", "examples"]
      },
      process: {
        selector: ".desktop-process",
        keywords: ["process", "steps", "workflow", "idea"]
      },
      whyus: {
        selector: ".desktop-whyus",
        keywords: ["why", "us", "partner", "team", "experience"]
      },
      cta: {
        selector: ".desktop-cta",
        keywords: ["cta", "action", "contact", "demo", "start"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      free_consultation: {
        selector: ".desktop-hero a[href='/contact-us'] button",
        keywords: ["free", "consult", "consultation", "talk", "call"]
      },
      case_studies: {
        selector: ".desktop-hero a[href='/portfolio'] button",
        keywords: ["case", "study", "portfolio", "work"]
      },
      contact_team: {
        selector: ".desktop-cta a[href='/contact-us']:first-child button",
        keywords: ["contact", "team", "reach"]
      },
      free_demo: {
        selector: ".desktop-cta a[href='/contact-us']:last-child button",
        keywords: ["demo", "schedule", "book", "free", "demo"]
      }
    }
  },
  "/digital-transformation": {
    sections: {
      hero: {
        selector: ".digital-hero",
        keywords: ["hero", "banner", "digital", "top"]
      },
      intro: {
        selector: ".digital-intro",
        keywords: ["intro", "introduction", "what", "overview"]
      },
      services: {
        selector: ".digital-services",
        keywords: ["service", "services", "solutions"]
      },
      why_choose: {
        selector: ".digital-why-choose",
        keywords: ["why", "choose", "partner", "benefit"]
      },
      technologies: {
        selector: ".digital-technologies",
        keywords: ["tech", "technology", "tools", "stack"]
      },
      cta: {
        selector: ".digital-cta",
        keywords: ["cta", "action", "contact", "start"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      consultation: {
        selector: ".digital-hero a[href='/contact-us'] button",
        keywords: ["consult", "free", "talk"]
      },
      explore_services: {
        selector: ".digital-hero a[href='/services'] button",
        keywords: ["explore", "services"]
      },
      schedule_call: {
        selector: ".digital-cta a[href='/contact-us']:first-child button",
        keywords: ["call", "schedule", "book"]
      },
      start_project: {
        selector: ".digital-cta a[href='/contact-us']:last-child button",
        keywords: ["start", "project", "begin"]
      }
    }
  },
  "/design-and-markup": {
    sections: {
      hero: {
        selector: ".design-hero",
        keywords: ["hero", "banner", "top", "markup"]
      },
      why: {
        selector: ".design-why",
        keywords: ["why", "importance", "quality", "crucial"]
      },
      services: {
        selector: ".design-services",
        keywords: ["service", "services", "offer", "solutions"]
      },
      process: {
        selector: ".design-process",
        keywords: ["process", "workflow", "steps", "design", "code"]
      },
      technologies: {
        selector: ".design-technologies",
        keywords: ["tech", "technology", "tools", "stack"]
      },
      benefits: {
        selector: ".design-benefits",
        keywords: ["benefit", "advantages", "trust", "clients"]
      },
      testimonials: {
        selector: ".design-testimonials",
        keywords: ["testimonial", "review", "feedback", "clients"]
      },
      cta: {
        selector: ".design-cta",
        keywords: ["cta", "action", "contact", "start"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      work_together: {
        selector: ".design-hero a[href='/contact-us'] button",
        keywords: ["work", "together", "collaborate"]
      },
      free_quote: {
        selector: ".design-hero a[href='/portfolio'] button",
        keywords: ["quote", "pricing", "estimate"]
      },
      request_quote: {
        selector: ".design-cta a[href='/contact-us']:first-child button",
        keywords: ["request", "quote"]
      },
      book_consult: {
        selector: ".design-cta a[href='/contact-us']:last-child button",
        keywords: ["book", "consult", "free", "discussion", "call"]
      }
    }
  },
  "/custom-software-development": {
    sections: {
      hero: {
        selector: ".custom-hero",
        keywords: ["hero", "banner", "custom", "top"]
      },
      build: {
        selector: ".custom-build",
        keywords: ["build", "need", "solution", "feature"]
      },
      industries: {
        selector: ".custom-industries",
        keywords: ["industry", "industries", "sector", "business"]
      },
      process: {
        selector: ".custom-process",
        keywords: ["process", "steps", "workflow", "development"]
      },
      technology: {
        selector: ".custom-technology",
        keywords: ["tech", "technology", "stack", "approach"]
      },
      cta: {
        selector: ".custom-cta",
        keywords: ["cta", "contact", "start", "consult", "call"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      free_consultation: {
        selector: ".custom-hero a[href='/contact-us'] button",
        keywords: ["consult", "free", "talk"]
      },
      see_work: {
        selector: ".custom-hero a[href='/portfolio'] button",
        keywords: ["work", "portfolio", "see"]
      },
      get_started: {
        selector: ".custom-cta a[href='/contact-us']:first-child",
        keywords: ["start", "get", "begin"]
      },
      schedule_consult: {
        selector: ".custom-cta a[href='/contact-us']:last-child",
        keywords: ["schedule", "consult", "call"]
      }
    }
  },
  "/internet-marketing": {
    sections: {
      hero: {
        selector: ".internet-hero",
        keywords: ["hero", "banner", "internet", "top"]
      },
      why: {
        selector: ".internet-why",
        keywords: ["why", "need", "importance", "reason"]
      },
      services: {
        selector: ".internet-services",
        keywords: ["service", "services", "offer", "solutions"]
      },
      process: {
        selector: ".internet-process",
        keywords: ["process", "steps", "workflow", "how"]
      },
      tools: {
        selector: ".internet-tools",
        keywords: ["tool", "tools", "platform", "software"]
      },
      industries: {
        selector: ".internet-industries",
        keywords: ["industry", "industries", "sector", "business", "type"]
      },
      testimonials: {
        selector: ".internet-testimonials",
        keywords: ["testimonial", "review", "feedback", "results"]
      },
      whyus: {
        selector: ".internet-whyus",
        keywords: ["why", "us", "trust", "choose", "partner"]
      },
      cta: {
        selector: ".internet-cta",
        keywords: ["cta", "contact", "action", "quote", "call"]
      },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {
      free_consultation: {
        selector: ".internet-hero a[href='/contact-us'] button",
        keywords: ["free", "consult", "consultation", "talk"]
      },
      explore_services: {
        selector: ".internet-hero a[href='/services'] button",
        keywords: ["explore", "services"]
      },
      request_quote: {
        selector: ".internet-cta a[href='/contact-us']:first-child button",
        keywords: ["quote", "request", "pricing"]
      },
      schedule_call: {
        selector: ".internet-cta a[href='/contact-us']:last-child button",
        keywords: ["call", "schedule", "book"]
      }
    }
  },
  "/cloud": {
    sections: {
      hero: { selector: ".cloud-hero", keywords: ["hero", "banner", "top"] },
      services: { selector: ".cloud-services", keywords: ["service", "services"] },
      providers: { selector: ".cloud-providers", keywords: ["provider", "vendor"] },
      benefits: { selector: ".cloud-benefits", keywords: ["benefit", "advantage"] },
      case_studies: { selector: ".cloud-case-studies", keywords: ["case", "study", "example"] },
      cta: { selector: ".cloud-cta", keywords: ["cta", "call", "action"] },
      footer: { selector: ".footer-section", keywords: ["footer", "bottom", "foot"] }
    },
    buttons: {}
  }
};

// Global buttons available across all pages
const globalButtons = {
  menu: { selector: ".mobile-menu-button", keywords: ["menu"] },
  logo: { selector: 'a[href="/"]', keywords: ["logo", "company logo", "brand"] },
  about: { selector: 'a[href="/about-us"]', keywords: ["about", "about us"] },
  services: { selector: 'a[href="/services"], .services-button', keywords: ["service", "our services"] },
  portfolio: { selector: 'a[href="/portfolio"], .portfolio-button', keywords: ["portfolio", "see our work", "work"] },
  careers: { selector: 'a[href="/careers"], .careers-button', keywords: ["career", "jobs", "positions"] },
  contact: { selector: 'a[href="/contact-us"], .contact-button', keywords: ["contact", "get in touch"] },
  blog: { selector: 'a[href="/blog"], .blog-button', keywords: ["blog", "articles"] },
  hire: { selector: '.mobile-hire-button', keywords: ["hire", "hire us", "higher"] },
  quote: { selector: 'a[href="/contact-us"]', keywords: ["quote", "get quote"] },
  project: { selector: 'a[href="/contact-us"]', keywords: ["project", "start project"] },
  privacy: { selector: 'a[href="/placeholders/privacy"]', keywords: ["privacy", "privacy policy"] },
  cookies: { selector: 'a[href="/placeholders/cookies"]', keywords: ["cookies", "cookie policy"] },
  terms: { selector: 'a[href="/placeholders/terms"]', keywords: ["terms", "terms and conditions"] },
  linkedin: { selector: 'a[href*="linkedin.com"]', keywords: ["linkedin"] },
  twitter: { selector: 'a[href*="x.com"], a[href*="twitter.com"]', keywords: ["twitter", "x"] },
  instagram: { selector: 'a[href*="instagram.com"]', keywords: ["instagram"] },
  facebook: { selector: 'a[href*="facebook.com"]', keywords: ["facebook"] }
};

const companyInfoDefaults = [
  {
    keywords: [ "company", "who are you", "what is pickzy"],
    response: "PickZy is a software solutions company that specializes in web, mobile, and custom software development, digital transformation, cloud services, and UI/UX design."
  },
  {
    keywords: ["services", "offer", "do you provide"],
    response: "PickZy offers services including web development, mobile apps, desktop applications, custom software, digital marketing, cloud solutions, and UI/UX design."
  },
  {
    keywords: ["contact", "reach you", "get in touch"],
    response: "You can contact PickZy via the Contact Us page or email at info@pickzy.com."
  },
  {
    keywords: ["careers", "job", "work with you"],
    response: "PickZy is always looking for talented individuals! Check our Careers page for open positions."
  }
];

export const useVoiceAssistantCommands = ({
  speak,
  setIsProcessing,
  setConversationHistory,
  stopListening
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Helper function to find elements by text content
  const findElementByText = useCallback((selector, text) => {
    const elements = document.querySelectorAll(selector);
    return Array.from(elements).find(el =>
      el.textContent && el.textContent.toLowerCase().includes(text.toLowerCase())
    );
  }, []);

  // Simple navigation function
  const enhancedNavigate = useCallback((command) => {
    const lowerCommand = command.toLowerCase();

    // Main pages
    if (lowerCommand.includes("home") || lowerCommand.includes("main")) {
      router.push("/");
      return "Navigating to home page";
    }
    else if (lowerCommand.includes("about")) {
      router.push("/about-us");
      return "Navigating to about us page";
    }
    else if (lowerCommand.includes("service")) {
      router.push("/services");
      return "Navigating to services page";
    }
    else if (lowerCommand.includes("portfolio") || lowerCommand.includes("work")) {
      router.push("/portfolio");
      return "Navigating to portfolio page";
    }
    else if (lowerCommand.includes("contact")) {
      router.push("/contact-us");
      return "Navigating to contact us page";
    }
    else if (lowerCommand.includes("career") || lowerCommand.includes("job")) {
      router.push("/careers");
      return "Navigating to careers page";
    }
    else if (lowerCommand.includes("blog")) {
      router.push("/blog");
      return "Navigating to blog page";
    }

    // Service detail pages
    else if (lowerCommand.includes("web") || lowerCommand.includes("website")) {
      router.push("/web-development");
      return "Navigating to web development page";
    }
    else if (lowerCommand.includes("mobile") || lowerCommand.includes("app")) {
      router.push("/mobile-apps-development");
      return "Navigating to mobile apps development page";
    }
    else if (lowerCommand.includes("desktop") || lowerCommand.includes("desk")) {
      router.push("/desktop-application-development");
      return "Navigating to desktop apps development page";
    }
    else if (lowerCommand.includes("digital") || lowerCommand.includes("transformation")) {
      router.push("/digital-transformation");
      return "Navigating to digital transformation page";
    }
    else if (lowerCommand.includes("custom") || lowerCommand.includes("software")) {
      router.push("/custom-software-development");
      return "Navigating to custom software development page";
    }
    else if (lowerCommand.includes("design") || lowerCommand.includes("ui") || lowerCommand.includes("ux") || lowerCommand.includes("markup")) {
      router.push("/design-and-markup");
      return "Navigating to design and markup page";
    }
    else if (lowerCommand.includes("cloud")) {
      router.push("/cloud");
      return "Navigating to cloud services page";
    }
    else if (lowerCommand.includes("marketing") || lowerCommand.includes("seo") || lowerCommand.includes("promotion")) {
      router.push("/internet-marketing");
      return "Navigating to internet marketing page";
    }

    return "I'm not sure which page you want to navigate to. Try saying 'go to services', 'open contact page', etc.";
  }, [router]);

  // Simple content reading function
  const readPageContent = useCallback((command) => {
    const pageConfig = siteConfig[pathname];
    if (!pageConfig || !pageConfig.sections) {
      return "I couldn't find any readable sections on this page.";
    }

    const lowerCommand = command.toLowerCase();
    let targetSection = null;
    let targetSectionKey = null;
    console.log(pageConfig.sections);

    // Search through sections on this page
    for (const [sectionKey, sectionData] of Object.entries(pageConfig.sections)) {
      if (sectionData.keywords && sectionData.keywords.some((word) => lowerCommand.includes(word))) {
        targetSection = sectionData;
        targetSectionKey = sectionKey;
        break;
      }
    }

    if (!targetSection) {
      return "I'm not sure which section you want me to read.";
    }

    const selector = targetSection.selector;
    if (!selector) {
      return `This page doesn't have a "${targetSectionKey}" section.`;
    }

    try {
      const element = document.querySelector(selector);
      if (element) {
        // Get text content but limit to reasonable length
        const text = element.textContent?.trim() || '';
        if (!text) {
          return `The ${targetSectionKey} section is empty.`;
        }

    

        return text;
      } else {
        return `I couldn't find the ${targetSectionKey} section on this page.`;
      }
    } catch (error) {
      console.error("Error reading content:", error);
      return "Something went wrong while reading the section.";
    }
  }, [pathname]);

  // Simple scrolling function
  const enhancedScrollToSection = useCallback((command) => {
    const pageConfig = siteConfig[pathname];
    if (!pageConfig || !pageConfig.sections) {
      return "I couldn't find any sections for this page.";
    }

    const lowerCommand = command.toLowerCase();
    let targetSection = null;
    let targetSectionKey = null;

    // Search through sections on this page
    for (const [sectionKey, sectionData] of Object.entries(pageConfig.sections)) {
      if (sectionData.keywords && sectionData.keywords.some((word) => lowerCommand.includes(word))) {
        targetSection = sectionData;
        targetSectionKey = sectionKey;
        break;
      }
    }

    if (!targetSection) {
      return "I'm not sure which section you want to scroll to.";
    }

    const selector = targetSection.selector;
    if (!selector) {
      return `This page doesn't have a "${targetSectionKey}" section.`;
    }

    try {
      const element = document.querySelector(selector);
      if (element) {
        // Add a small timeout to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return `Scrolling to ${targetSectionKey} section.`;
      } else {
        return `I couldn't find the ${targetSectionKey} section on this page.`;
      }
    } catch (error) {
      console.error("Error scrolling:", error);
      return "Something went wrong while scrolling.";
    }
  }, [pathname]);

  // Simple button clicking function
  const clickButton = useCallback((command) => {
    const pageConfig = siteConfig[pathname];
    const pageButtons = pageConfig?.buttons || {};
    const lowerCommand = command.toLowerCase();
    let targetButton = null;
    let buttonName = null;

    // First search page-specific buttons
    for (const [buttonKey, buttonData] of Object.entries(pageButtons)) {
      if (buttonData.keywords && buttonData.keywords.some((word) => lowerCommand.includes(word))) {
        targetButton = buttonData.selector;
        buttonName = buttonKey;
        break;
      }
    }

    // If not found, search global/common buttons
    if (!targetButton) {
      for (const [buttonKey, buttonData] of Object.entries(globalButtons)) {
        if (buttonData.keywords && buttonData.keywords.some((word) => lowerCommand.includes(word))) {
          targetButton = buttonData.selector;
          buttonName = buttonKey;
          break;
        }
      }
    }

    if (!targetButton) {
      return "I'm not sure which button or link you want me to click.";
    }

    try {
      let element;

      // Handle special text matching for buttons that need specific text content
      if (buttonName === 'quote' || buttonName === 'project') {
        // For quote and project buttons, we need to find the specific link with matching text
        const searchText = buttonName === 'quote' ? 'quote' : 'project';
        element = findElementByText(targetButton, searchText);
      } else {
        // Standard selector query
        element = document.querySelector(targetButton);
      }

      if (element) {
        console.log("Trying to click:", buttonName, "selector:", targetButton);
        element.click();
        return `Clicked the ${buttonName || 'button'}.`;
      } else {
        return `I couldn't find that button/link on this page.`;
      }
    } catch (error) {
      console.error("Error clicking button:", error);
      return "Something went wrong while clicking.";
    }
  }, [pathname, findElementByText]);

  // API call to get intent
  const getIntentFromAPI = useCallback(async (command) => {
    try {
      const response = await fetch('/api/voice-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command, currentPath: pathname }),
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Error fetching intent:', error);

      return {
        intent: 'fallback',
        response_text: "I'm having trouble connecting to the server. Please try again in a moment."
      };
    }
  }, [pathname]);

  // Helper function to check for company info
  const getCompanyInfoResponse = (command) => {
    const lower = command.toLowerCase();
    for (const item of companyInfoDefaults) {
      if (item.keywords.some(keyword => lower.includes(keyword))) {
        return item.response;
      }
    }
    return null; // no match
  };

  // Main command processing function
  const processCommand = useCallback(async (command) => {
    if (!command.trim()) return;

    setIsProcessing(true);
    let response = '';
    let shouldContinueListening = true;

    const lowerCommand = command.toLowerCase();

    try {
      let intentData = await getIntentFromAPI(command);

      if (intentData?.intent) {
        switch (intentData.intent) {
          case 'navigate': {
            response = enhancedNavigate(lowerCommand);
            break;
          }
          case 'scroll': {
            if (lowerCommand.includes('up') || lowerCommand.includes('above')) {
              window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
              response = "Scrolling up";
            }
            else if (lowerCommand.includes('down') || lowerCommand.includes('below')) {
              window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
              response = "Scrolling down";
            }
            else if (lowerCommand.includes('top') || lowerCommand.includes('beginning')) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              response = "Going to the top of the page";
            }
            else if (lowerCommand.includes('bottom') || lowerCommand.includes('end')) {
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              response = "Going to the bottom of the page";
            }
            else {
              // Scroll to a specific section
              response = enhancedScrollToSection(lowerCommand);
            }
            break;
          }
          case 'scroll_section': {
            response = enhancedScrollToSection(lowerCommand);
            break;
          }
          case 'read_content': {
            const content = readPageContent(lowerCommand);
            response = content.startsWith("I couldn't find") || content.startsWith("I'm not sure")
              ? content
              : `Here's what it says: ${content}`;
            break;
          }
          case 'click': {
            response = clickButton(lowerCommand);
            break;
          }
          case 'company_info': {
            const defaultResponse = getCompanyInfoResponse(lowerCommand);
            response = defaultResponse || intentData.response_text ||
              "PickZy is a software solutions company. I can provide more info if you specify your question.";
            break;
          }
          case 'stop': {
            response = "Stopping listening now. Say 'Hey Nova' to start again";
            shouldContinueListening = false;
            break;
          }
          // case 'help': {
          //   response = intentData.response_text || "I can help you navigate to pages, scroll to sections, read content, or click buttons. Try saying 'go to services', 'scroll to testimonials', or 'click contact us'";
          //   break;
          // }
          case 'greeting':
          case 'acknowledgement': {
            response = intentData.response_text;
            break;
          }
          case 'fallback': {
            response = intentData.response_text || "I'm not sure I understood that. Try asking me to navigate to a page, scroll to a section, or read content";
            break;
          }
          default: {
            response = intentData.response_text || "I'm not sure I understood that. Try asking me to navigate to a page, scroll to a section, or read content";
          }
        }
      } else {
        response = "I'm having trouble understanding. Please try again";
      }

      // Update conversation history
      setConversationHistory(prev => [
        ...prev,
        { type: 'user', content: command },
        { type: 'assistant', content: response, timestamp: new Date().toISOString() }
      ]);

    } catch (error) {
      console.error('Error processing command:', error);
      response = "I encountered an error processing your request. Please try again";

      setConversationHistory(prev => [
        ...prev,
        { type: 'user', content: command },
        { type: 'assistant', content: response, timestamp: new Date().toISOString() }
      ]);
    }

    speak(response);
    setIsProcessing(false);

    if (!shouldContinueListening) {
      stopListening();
    }
  }, [
    speak,
    setIsProcessing,
    stopListening,
    getIntentFromAPI,
    enhancedNavigate,
    enhancedScrollToSection,
    readPageContent,
    clickButton,
    setConversationHistory
  ]);

  return { processCommand };
};