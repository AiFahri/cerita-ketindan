import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  isLaunching?: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  isLaunching = false 
}) => {
  const [isVisible, setIsVisible] = useState(!isLaunching);
  const [animationStage, setAnimationStage] = useState<'hidden' | 'entering' | 'visible'>('hidden');

  useEffect(() => {
    if (isLaunching) {
      setAnimationStage('hidden');
      const timer = setTimeout(() => {
        setAnimationStage('entering');
        setIsVisible(true);
        
        setTimeout(() => {
          setAnimationStage('visible');
        }, 1000);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      setAnimationStage('entering');
      setIsVisible(true);
      setTimeout(() => setAnimationStage('visible'), 100);
    }
  }, [isLaunching]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-300/30 border-t-amber-300 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-amber-100 text-lg font-serif">Memuat...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen transition-all duration-1000 ease-out ${
        animationStage === 'hidden' 
          ? 'opacity-0 scale-95 blur-sm' 
          : animationStage === 'entering'
          ? 'opacity-100 scale-100 blur-0'
          : 'opacity-100 scale-100 blur-0'
      }`}
    >
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-amber-50/80 to-orange-50/80 pointer-events-none transition-opacity duration-1000 ${
          animationStage === 'visible' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      <div 
        className={`relative z-10 transition-all duration-1000 ease-out delay-300 ${
          animationStage === 'hidden' 
            ? 'transform translate-y-8 opacity-0' 
            : 'transform translate-y-0 opacity-100'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
