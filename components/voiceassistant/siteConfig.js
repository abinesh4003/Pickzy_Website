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
      },
      map: {
        selector: ".map",
        keywords: ["map", "location", "office", "visit", "address", "directions"]
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
    },
    multiButtons: {
  quick_view: [
    { title: "Algo Trading Platform", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Nubet", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "BayFay", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Equal-i", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Offline Ticketing", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Light House Vision", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Elfkins", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "HeartFace", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "MISS ME KISS ME", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "SpotYa", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "WEEDSEEKER", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "FORAGER PRO", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "COCAVE", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "GYM LINK", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "BLASTER", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "NCC Video Connect", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "COMPUTER DOCTOR", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Super Market Billing Software", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "HIIT", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "TO SHARE", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "ECOMMERCE MAGAZIN", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "FLURV", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "CITY LIMOUSINE", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "CLASSIC VACATIONS", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "EHR EVOLUTION", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "T5 DATA CENTERS", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "WI SPA USA", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "PLE", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Smart Home", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Home Controls", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Ez Trailer", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "HOME AUTOMATION", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "React Native", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Angular JS", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Ionic", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Xamarin", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Face Guru, Face Dox & Sales Guru", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "COOK'N", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Health Mirror", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Meditation App", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Photo Lasso", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "TIX ALERT", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" },
    { title: "Fajr WakeUp", cardSelector: ".portfolio-projects .group", buttonSelector: ".btn-quick-view" }
  ],
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

export { siteConfig, globalButtons, companyInfoDefaults };