import { useState, useEffect, useCallback } from 'react';

interface UseLaunchTransitionProps {
  autoStart?: boolean;
  duration?: number;
}

export const useLaunchTransition = ({ 
  autoStart = false, 
}: UseLaunchTransitionProps = {}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
    setIsComplete(false);
  }, []);

  const completeTransition = useCallback(() => {
    setIsTransitioning(false);
    setIsComplete(true);
  }, []);

  const resetTransition = useCallback(() => {
    setIsTransitioning(false);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (autoStart) {
      startTransition();
    }
  }, [autoStart, startTransition]);

  return {
    isTransitioning,
    isComplete,
    startTransition,
    completeTransition,
    resetTransition
  };
};
