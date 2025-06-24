import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // Format: "2024-12-31T23:59:59"
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0 &&
        !isCompleted
      ) {
        setIsCompleted(true);
        if (onComplete) {
          onComplete();
        }
      }
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate, onComplete, isCompleted]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 z-50">
      <div className="text-center">
        <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 leading-none font-serif">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-800 mt-1 sm:mt-2 font-medium font-serif">
          HARI
        </div>
      </div>

      <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 leading-none font-serif">
        :
      </div>

      <div className="text-center">
        <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 leading-none font-serif">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-800 mt-1 sm:mt-2 font-medium font-serif">
          JAM
        </div>
      </div>

      <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 leading-none font-serif">
        :
      </div>

      <div className="text-center">
        <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 leading-none font-serif">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-800 mt-1 sm:mt-2 font-medium font-serif">
          MENIT
        </div>
      </div>

      <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 leading-none font-serif">
        :
      </div>

      <div className="text-center">
        <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 leading-none font-serif">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-800 mt-1 sm:mt-2 font-medium font-serif">
          DETIK
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
