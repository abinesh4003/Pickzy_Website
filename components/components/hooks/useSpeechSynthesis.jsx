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
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      // Adjust speech properties for softer tone
      utterance.rate = 1;   // normal rate
      utterance.pitch = 1;   // normal pitch
      utterance.volume = 1;  // normal volume

      // Prefer female voice explicitly
      const femaleVoice = voices.find(voice => 
        voice.lang.includes('en') &&
        (voice.name.toLowerCase().includes('female') || 
         voice.name.toLowerCase().includes('zira') ||
         voice.name.toLowerCase().includes('samantha') ||
         voice.name.toLowerCase().includes('victoria') ||
         voice.name.toLowerCase().includes('google uk english female'))
      ) || voices.find(voice => voice.lang.includes('en'));

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.onend = () => console.log('Finished speaking');
      utterance.onerror = (event) => console.error('Speech synthesis error', event);

      window.speechSynthesis.speak(utterance);
    }
  }, [browserSupport.speechSynthesis, voices]);

  return {
    speak
  };
};
