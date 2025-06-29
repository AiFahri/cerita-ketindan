import React, { useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LaunchTransition from "../components/LaunchTransition";
import { COUNTDOWN_CONFIG } from "../config/countdown";
import ornamentLeft from "../assets/ornament-left.png";
import ornamentRight from "../assets/ornament-right.png";
import ornamentBottom from "../assets/ornament-bottom.png";
import ornamentMid from "../assets/ornament-mid.svg";
import bgLogo from "/logo sadewa.png";
import background from "../assets/background.png";

interface CountdownPageProps {
  launchDate?: string;
}

const CountdownPage: React.FC<CountdownPageProps> = ({
  launchDate = COUNTDOWN_CONFIG.LAUNCH_DATE,
}) => {
  const [showTransition, setShowTransition] = useState(false);

  const handleCountdownComplete = () => {
    if (COUNTDOWN_CONFIG.REDIRECT.autoRedirect) {
      setShowTransition(true);
    }
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-br from-stone-200 via-amber-50 to-stone-300 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={background}
            alt="Background"
            className="absolute inset-0 opacity-30 w-full h-full object-cover"
          />

          <img
            src={ornamentLeft}
            alt="Ornament Left"
            className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          />

          <img
            src={ornamentRight}
            alt="Ornament Right"
            className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 "
          />

          <img
            src={ornamentBottom}
            alt="Ornament Bottom"
            className="absolute bottom-24 sm:bottom-14 md:bottom-16 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 object-cover transform scale-x-[-1]"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 relative z-10 py-4">
          <div className="px-4 sm:px-6 z-50">
            <Header
              title={COUNTDOWN_CONFIG.SITE_INFO.title}
              subtitle={COUNTDOWN_CONFIG.SITE_INFO.subtitle}
            />
          </div>

          <div className="mb-4 sm:mb-6 md:mb-8 relative w-full px-4 sm:px-6">
            <img
              src={bgLogo}
              alt="Background Logo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-5/6 md:w-3/8 h-auto object-contain opacity-30 sm:opacity-50 md:opacity-60 z-0"
            />
            <div className="relative z-10">
              <CountdownTimer
                targetDate={launchDate}
                onComplete={handleCountdownComplete}
              />
            </div>
          </div>

          <div className="mb-4 sm:mb-6 md:mb-8">
            <img
              src={ornamentMid}
              alt="Ornament Mid"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto object-contain"
            />
          </div>

          {/* Additional Info */}
          {/* <div className="text-center max-w-2xl">
          <p className="text-amber-800 text-lg md:text-xl font-medium mb-4">
            {COUNTDOWN_CONFIG.SITE_INFO.description}
          </p>
          <p className="text-amber-700 text-sm md:text-base opacity-80">
            {COUNTDOWN_CONFIG.SITE_INFO.additionalInfo}
          </p>
        </div> */}
        </div>

        <Footer
          phone={COUNTDOWN_CONFIG.CONTACT.phone}
          copyright={COUNTDOWN_CONFIG.CONTACT.copyright}
          instagram={COUNTDOWN_CONFIG.CONTACT.instagram}
        />
      </div>

      {/* Launch Transition Overlay */}
      <LaunchTransition
        isVisible={showTransition}
        onComplete={handleTransitionComplete}
      />
    </>
  );
};

export default CountdownPage;
