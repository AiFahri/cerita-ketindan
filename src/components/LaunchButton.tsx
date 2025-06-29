import React, { useState } from 'react';

interface LaunchButtonProps {
  onLaunch: () => void;
  isLaunching?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const LaunchButton: React.FC<LaunchButtonProps> = ({
  onLaunch,
  isLaunching = false,
  disabled = false,
  className = "",
  children = "Launch Website"
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!disabled && !isLaunching) {
      setIsPressed(true);
      setTimeout(() => {
        onLaunch();
        setIsPressed(false);
      }, 200);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLaunching}
      className={`
        relative overflow-hidden group
        bg-gradient-to-r from-amber-600 to-orange-600 
        hover:from-amber-700 hover:to-orange-700
        disabled:from-amber-400 disabled:to-orange-400
        text-white font-bold py-4 px-8 rounded-full
        transition-all duration-300 ease-out
        shadow-lg hover:shadow-xl
        disabled:cursor-not-allowed
        transform hover:scale-105 active:scale-95
        ${isPressed ? 'scale-95' : ''}
        ${isLaunching ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      {isPressed && (
        <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
      )}
      
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {isLaunching ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Launching...</span>
          </>
        ) : (
          <>
            <span>{children}</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </>
        )}
      </span>
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
    </button>
  );
};

export default LaunchButton;
