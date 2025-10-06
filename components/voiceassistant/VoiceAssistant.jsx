'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import VoiceAssistantButton from './VoiceAssistantButton';
import VoiceAssistantIndicator from './VoiceAssistantIndicator';
import { useVoiceRecognition } from '@/components/hooks/useVoiceRecognition';
import { useSpeechSynthesis } from '@/components/hooks/useSpeechSynthesis';
import { useVoiceAssistantCommands } from '@/components/hooks/useVoiceAssistantCommands';

const VoiceAssistant = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const welcomeTimeoutRef = useRef(null);
  const hasWelcomedRef = useRef(false); // ✅ NEW: Track if welcome message has already been spoken
  
  const {
    isListening,
    browserSupport,
    micPermission,
    startListening,
    stopListening
  } = useVoiceRecognition();

  const {
    speak,
    isSpeaking,
    stopSpeaking
  } = useSpeechSynthesis();

  const {
    processCommand
  } = useVoiceAssistantCommands({
    speak,
    setIsProcessing,
    setConversationHistory,
    stopListening
  });

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (welcomeTimeoutRef.current) {
        clearTimeout(welcomeTimeoutRef.current);
      }
    };
  }, []);

  // Update the voice recognition callback when processCommand changes
  useEffect(() => {
    if (window.voiceRecognition) {
      window.voiceRecognition.onCommand = processCommand;
    }
  }, [processCommand]);

  const toggleListening = useCallback(() => {
    // If currently speaking, stop the speech
    if (isSpeaking) {
      stopSpeaking();
      stopListening();
      if (welcomeTimeoutRef.current) {
        clearTimeout(welcomeTimeoutRef.current);
        welcomeTimeoutRef.current = null;
      }
      return;
    }
    
    if (isListening) {
      stopListening();
      if (welcomeTimeoutRef.current) {
        clearTimeout(welcomeTimeoutRef.current);
        welcomeTimeoutRef.current = null;
      }
    } else {
      startListening();

      // ✅ Speak welcome message only the FIRST time
      if (!hasWelcomedRef.current) {
        hasWelcomedRef.current = true;
        welcomeTimeoutRef.current = setTimeout(() => {
          speak("Hi, I'm your PickZy voice assistant. How can I help you?");
        }, 500);
      }
    }
  }, [isListening, isSpeaking, startListening, stopListening, speak, stopSpeaking]);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <VoiceAssistantButton
        isListening={isListening}
        isProcessing={isProcessing || isSpeaking} 
        browserSupport={browserSupport}
        micPermission={micPermission}
        toggleListening={toggleListening}
      />
      
      <VoiceAssistantIndicator
        isListening={isListening}
        browserSupport={browserSupport}
        micPermission={micPermission}
      />
    </div>
  );
};

export default VoiceAssistant;
