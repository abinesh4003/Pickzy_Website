'use client';

import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {siteConfig, globalButtons, companyInfoDefaults} from '../voiceassistant/siteConfig';


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
            response = "Stopping listening now.";
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