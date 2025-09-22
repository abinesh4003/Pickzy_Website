'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [browserSupport, setBrowserSupport] = useState({ speechSynthesis: true });
  const currentUtteranceRef = useRef(null);

  useEffect(() => {
    if (!window.speechSynthesis) {
      setBrowserSupport({ speechSynthesis: false });
      return;
    }

    let attempts = 0;
    const maxAttempts = 10;

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0 || attempts >= maxAttempts) {
        setVoices(availableVoices);
      } else {
        attempts++;
        setTimeout(loadVoices, 100);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = useCallback((text) => {
    if (!browserSupport.speechSynthesis) {
      console.error('Speech synthesis not supported');
      return Promise.reject('Speech synthesis not supported');
    }

    if (voices.length === 0) {
      console.warn('No voices available yet');
    }

    return new Promise((resolve, reject) => {
      if (!window.speechSynthesis) return reject('No speechSynthesis API');

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      currentUtteranceRef.current = utterance;

      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      // Use any available voice, prefer first in list
      if (voices.length > 0) {
        utterance.voice = voices[0];
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        if (window.voiceRecognition?.instance) {
          window.voiceRecognition.instance.stop();
        }
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        currentUtteranceRef.current = null;
        resolve();

        if (window.voiceRecognition?.keepAlive) {
          setTimeout(() => {
            try {
              window.voiceRecognition.instance.start();
            } catch (e) {
              console.warn('Failed to restart recognition:', e);
            }
          }, 300);
        }
      };

      utterance.onerror = (e) => {
        setIsSpeaking(false);
        currentUtteranceRef.current = null;
        console.error('Speech synthesis error', e);
        reject(e);
      };

      window.speechSynthesis.speak(utterance);
    });
  }, [voices, browserSupport.speechSynthesis]);

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
    stopSpeaking,
    voices
  };
};
