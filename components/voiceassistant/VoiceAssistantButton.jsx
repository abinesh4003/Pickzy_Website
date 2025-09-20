'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, VolumeX } from 'lucide-react';
import Image from 'next/image';

const VoiceAssistantButton = ({
  isListening,
  isProcessing,
  browserSupport,
  micPermission,
  toggleListening
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('Click to start voice assistant');
  const tooltipTimeoutRef = useRef(null);

  // Update tooltip text based on state
  useEffect(() => {
    if (isProcessing) {
      setTooltipText('Processing your request... Click to stop');
    } else if (isListening) {
      setTooltipText('Listening... Click to stop');
    } else if (micPermission === 'denied') {
      setTooltipText('Microphone access denied. Click for info');
    } else if (!browserSupport.speechRecognition) {
      setTooltipText('Voice commands not supported in this browser');
    } else {
      setTooltipText('Click to start voice assistant');
    }
  }, [isListening, isProcessing, micPermission, browserSupport.speechRecognition]);

  // Tooltip handlers
  const handleMouseEnter = () => {
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(false);
  };

  const handleClick = () => {
    toggleListening();
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={!browserSupport.speechRecognition}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center 
                   transition-all duration-300 hover:scale-105 disabled:opacity-50 bg-white"
        aria-label={isListening ? 'Stop listening' : 'Start voice assistant'}
      >
        {isProcessing ? (
          <div className="w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
        ) : isListening ? (
          <Mic className="h-6 w-6 text-blue-500" />
        ) : (
          <Image
            src="/images/ai.png" // place your robot image in public/
            alt="AI Assistant"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 
                        bg-gray-800 text-white text-sm rounded-md shadow-lg 
                        whitespace-nowrap z-50">
          {tooltipText}
          <div className="absolute top-full right-3 -mt-1 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default VoiceAssistantButton;