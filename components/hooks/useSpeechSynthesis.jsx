'use client';

import { useState, useEffect, useCallback } from 'react';

export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const [browserSupport, setBrowserSupport] = useState({ 
    speechSynthesis: true 
  });

  // Load voices for speech synthesis
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setBrowserSupport(prev => ({ ...prev, speechSynthesis: false }));
      return;
    }
    
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

  const speak = useCallback((text) => {
    if (!browserSupport.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return;
    }

    if (window.speechSynthesis) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
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
      
      window.speechSynthesis.speak(utterance);
    }
  }, [browserSupport.speechSynthesis, voices]);

  return {
    speak
  };
};