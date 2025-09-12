import { useState, useEffect, useCallback, useRef } from 'react';

export const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [browserSupport, setBrowserSupport] = useState({ 
    speechRecognition: true, 
    speechSynthesis: true 
  });
  const [micPermission, setMicPermission] = useState('prompt');
  const recognitionInstanceRef = useRef(null);
  const shouldListenRef = useRef(false);
  const isAutoRestartingRef = useRef(false);

  useEffect(() => {
    const initializeVoiceRecognition = () => {
      if (typeof window === 'undefined') return;

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (!SpeechRecognition) {
        setBrowserSupport(prev => ({ ...prev, speechRecognition: false }));
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.maxAlternatives = 3;

    recognition.onstart = () => {
  setIsListening(true);
  isAutoRestartingRef.current = false;
};

      recognition.onresult = (event) => {
        if (isPaused) return;
        const latestResult = event.results[event.results.length - 1];
        const newTranscript = latestResult[0].transcript;

        if (latestResult.isFinal && window.voiceRecognition && window.voiceRecognition.onCommand) {
          window.voiceRecognition.onCommand(newTranscript);
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (window.voiceRecognition && window.voiceRecognition.onError) {
          window.voiceRecognition.onError(`Recognition error: ${event.error}`);
        }
      };


   recognition.onend = () => {
  if (!isPaused && shouldListenRef.current) {
    isAutoRestartingRef.current = true;
    // Do NOT set isListening to false during auto-restart
    setTimeout(() => {
      try {
        recognition.start();
      } catch (e) {
        console.error('Auto-restart failed:', e);
        isAutoRestartingRef.current = false;
        setIsListening(false);  // Fallback: if restart fails, reflect stopped state
      }
    }, 300);
  } else {
    isListening && setIsListening(false);
  }
};

      recognitionInstanceRef.current = recognition;
      window.voiceRecognition = window.voiceRecognition || {};
      window.voiceRecognition.instance = recognition;
    };

    initializeVoiceRecognition();

    return () => {
      if (recognitionInstanceRef.current) {
        recognitionInstanceRef.current.stop();
        setIsListening(false);
      }
    };
  }, [isPaused]);

  const startListening = useCallback(() => {
    if (!browserSupport.speechRecognition) return;

    if (micPermission === 'denied') {
      if (window.voiceRecognition && window.voiceRecognition.onError) {
        window.voiceRecognition.onError('Microphone permission denied.');
      }
      return;
    }

    shouldListenRef.current = true;

    try {
      recognitionInstanceRef.current.start();
    } catch (e) {
      console.error('Failed to start listening:', e);
    }
  }, [browserSupport.speechRecognition, micPermission]);

  const stopListening = useCallback(() => {
    shouldListenRef.current = false;
    if (recognitionInstanceRef.current) {
      recognitionInstanceRef.current.stop();
      setIsListening(false);
      setIsPaused(false);
    }
  }, []);

  const pauseListening = useCallback(() => {
    setIsPaused(true);
    if (recognitionInstanceRef.current) {
      recognitionInstanceRef.current.stop();
    }
  }, []);

  const resumeListening = useCallback(() => {
    setIsPaused(false);
    if (recognitionInstanceRef.current && !isListening) {
      try {
        recognitionInstanceRef.current.start();
      } catch (e) {
        console.error('Failed to resume listening:', e);
      }
    }
  }, [isListening]);

  return {
    isListening,
    isPaused,
    browserSupport,
    micPermission,
    startListening,
    stopListening,
    pauseListening,
    resumeListening
  };
};
