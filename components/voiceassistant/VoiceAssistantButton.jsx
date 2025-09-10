'use client';

import { useState, useRef, useEffect } from 'react';
import { Mic, Headphones } from 'lucide-react';

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
      setTooltipText('Processing your request...');
      // Hide tooltip after 2 seconds when processing
      const timer = setTimeout(() => setShowTooltip(false), 2000);
      return () => clearTimeout(timer);
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

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  // Handle tooltip show/hide with delay
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
    if (!isProcessing && browserSupport.speechRecognition) {
      toggleListening();
      // Hide tooltip after click
      setShowTooltip(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        disabled={isProcessing || !browserSupport.speechRecognition}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`p-2 rounded-full shadow-lg flex items-center justify-center relative z-50 ${
          isListening 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
            : (browserSupport.speechRecognition ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gray-400 cursor-not-allowed')
        } text-white transition-all duration-300 transform hover:scale-105`}
        aria-label={isListening ? 'Stop listening' : 'Start voice assistant'}
      >
        {/* Voice assistant icon based on state */}
        {isProcessing ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : isListening ? (
          <Mic className="h-6 w-6" />
        ) : (
          <Headphones className="h-6 w-6" />
        )}
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg whitespace-nowrap z-50">
          {tooltipText}
          <div className="absolute top-full right-3 -mt-1 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </div>
  ); 
};

export default VoiceAssistantButton;