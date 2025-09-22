'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [browserSupport, setBrowserSupport] = useState({ 
    speechSynthesis: true 
  });
  const currentUtteranceRef = useRef(null);

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
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speak = useCallback((text) => {
    if (!browserSupport.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return Promise.reject('Speech synthesis not supported');
    }

    return new Promise((resolve, reject) => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        currentUtteranceRef.current = utterance;

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

        utterance.onstart = () => {
          setIsSpeaking(true);
          // Pause recognition when speaking starts
          if (window.voiceRecognition && window.voiceRecognition.instance) {
            window.voiceRecognition.instance.stop();
          }
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          currentUtteranceRef.current = null;
          console.log('Finished speaking');
          resolve();
          
          // Resume recognition if keepAlive was enabled
          if (window.voiceRecognition?.keepAlive) {
            setTimeout(() => {
              try {
                window.voiceRecognition.instance.start();
              } catch (e) {
                console.warn("Failed to restart recognition:", e);
              }
            }, 300);
          }
        };

        utterance.onerror = (event) => {
          setIsSpeaking(false);
          currentUtteranceRef.current = null;
          console.error('Speech synthesis error', event);
          reject(event);
        };

        window.speechSynthesis.speak(utterance);
      }
    });
  }, [browserSupport.speechSynthesis, voices]);

  const stopSpeaking = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      currentUtteranceRef.current = null;
    }
  }, []);

  return {
    speak,
    isSpeaking,
    stopSpeaking
  };
};