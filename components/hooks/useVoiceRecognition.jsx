'use client';

import { useState, useEffect, useCallback } from 'react';

export const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [browserSupport, setBrowserSupport] = useState({
    speechRecognition: true,
    speechSynthesis: true
  });
  const [micPermission, setMicPermission] = useState('prompt');

  // Check microphone permission
  useEffect(() => {
    const checkMicrophonePermission = async () => {
      try {
        const permissionStatus = await navigator.permissions.query({ name: 'microphone' });
        setMicPermission(permissionStatus.state);

        permissionStatus.onchange = () => {
          setMicPermission(permissionStatus.state);
        };
      } catch (error) {
        console.error('Error checking microphone permission:', error);
      }
    };

    if (typeof navigator !== 'undefined' && navigator.permissions) {
      checkMicrophonePermission();
    }
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    const initializeVoiceRecognition = () => {
      if (typeof window === 'undefined') return;

      // Check browser support
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        setBrowserSupport(prev => ({ ...prev, speechRecognition: false }));
        return;
      }

      // Initialize speech recognition
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 5;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const results = event.results;
        const latestResult = results[results.length - 1];
        const newTranscript = latestResult[0].transcript;

        // If the result is final, process it
        if (latestResult.isFinal && window.voiceRecognition && window.voiceRecognition.onCommand) {
          window.voiceRecognition.onCommand(newTranscript);
        }
      };

      recognition.onerror = (event) => {
        if (event.error === 'no-speech') {
          if (window.voiceRecognition && window.voiceRecognition.onError) {
            window.voiceRecognition.onError("As a PickZy assistant, I didn't hear anything. Please try again.");
          }
        } else if (event.error === 'audio-capture') {
          if (window.voiceRecognition && window.voiceRecognition.onError) {
            window.voiceRecognition.onError("As a PickZy assistant, I can't access your microphone. Please check your microphone settings.");
          }
        } else if (event.error === 'not-allowed') {
          if (window.voiceRecognition && window.voiceRecognition.onError) {
            window.voiceRecognition.onError("As a PickZy assistant, microphone access is not allowed. Please enable microphone permissions.");
          }
          setMicPermission('denied');
        }
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);

        // Restart recognition if keepAlive is true and we're not currently speaking
        if (window.voiceRecognition?.keepAlive && !window.speechSynthesis?.speaking) {
          try {
            recognition.start();
          } catch (e) {
            console.warn("Recognition restart failed:", e);
          }
        }
      };

      // Store recognition instance globally for access
      window.voiceRecognition = window.voiceRecognition || {};
      window.voiceRecognition.instance = recognition;
      window.voiceRecognition.keepAlive = false;
    };

    initializeVoiceRecognition();

    return () => {
      if (window.voiceRecognition && window.voiceRecognition.instance) {
        window.voiceRecognition.instance.stop();
        setIsListening(false);
      }
    };
  }, []);

  const startListening = useCallback(() => {
    if (!browserSupport.speechRecognition) return;

    if (micPermission === 'denied') {
      if (window.voiceRecognition && window.voiceRecognition.onError) {
        window.voiceRecognition.onError("As a PickZy assistant, microphone access is blocked. Please enable microphone permissions in your browser settings.");
      }
      return;
    }

    if (window.voiceRecognition?.instance && !isListening) {
      try {
        window.voiceRecognition.keepAlive = true;
        window.voiceRecognition.instance.start();
      } catch (e) {
        setIsListening(false);
      }
    }
  }, [isListening, browserSupport.speechRecognition, micPermission]);

  const stopListening = useCallback(() => {
    if (window.voiceRecognition && window.voiceRecognition.instance) {
      try {
        window.voiceRecognition.keepAlive = false; 
        window.voiceRecognition.instance.stop();
        setIsListening(false);
      } catch (e) {
        setIsListening(false);
      }
    }
  }, []);

  return {
    isListening,
    browserSupport,
    micPermission,
    startListening,
    stopListening
  };
};