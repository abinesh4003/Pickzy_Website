'use client';

const VoiceAssistantIndicator = ({
  isListening,
  browserSupport,
  micPermission
}) => {
  return (
    <>
      {/* Microphone permission status indicator */}
      {micPermission === 'denied' && (
        <div className="absolute -top-10 right-0 bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded text-xs w-48 z-40">
          Microphone access is blocked
        </div>
      )}

      {/* Listening animation - Behind the button */}
      {isListening && (
        <div className="absolute -inset-2 flex items-center justify-center z-10 pointer-events-none">
          <div className="absolute border border-purple-500 rounded-full animate-ping h-16 w-16"></div>
          <div className="absolute border border-blue-400 rounded-full animate-ping h-20 w-20 animation-delay-300"></div>
        </div>
      )}

      {/* Status indicator (small dot on corner) */}
      <div className="absolute -top-2 -right-2 z-40">
        {isListening && (
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
        )}
      </div>

      {/* Browser support warning */}
      {!browserSupport.speechRecognition && (
        <div className="absolute -top-10 right-0 bg-yellow-100 border border-yellow-400 text-yellow-700 px-2 py-1 rounded text-xs w-48 z-40">
          Voice commands not supported in this browser
        </div>
      )}
    </>
  );
};

export default VoiceAssistantIndicator;
