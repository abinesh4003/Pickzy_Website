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
  
  const {
    isListening,
    browserSupport,
    micPermission,
    startListening,
    stopListening,
    pauseListening, 
    resumeListening
  } = useVoiceRecognition();

  const {
    speak
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


  const speakAndPauseRecognition = useCallback((text, onEndCallback) => {
  pauseListening();  // Pause recognition before speaking

  speak(
    text,
    () => { /* onStart */ },
    () => { 
      resumeListening();  // Resume recognition after speaking ends
      if (onEndCallback) onEndCallback();
    },
    (error) => { 
      console.error('Speech synthesis error:', error);
      resumeListening();  // Ensure recognition always resumes
    }
  );
}, [pauseListening, resumeListening, speak]);



const toggleListening = useCallback(() => {
  if (isListening) {
    stopListening();
    
    if (welcomeTimeoutRef.current) {
      clearTimeout(welcomeTimeoutRef.current);
      welcomeTimeoutRef.current = null;
    }
  } else {
    startListening();
    
    welcomeTimeoutRef.current = setTimeout(() => {
      speakAndPauseRecognition("Hi, I'm your PickZy voice assistant. How can I help you?");
    }, 500);
  }
}, [isListening, startListening, stopListening, speakAndPauseRecognition]);


  return (
    <div className="fixed bottom-24 right-6 z-50">
      <VoiceAssistantButton
        isListening={isListening}
        isProcessing={isProcessing}
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