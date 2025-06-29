import React, { useState } from "react";
import LaunchTransition from "../components/LaunchTransition";
import LaunchButton from "../components/LaunchButton";

const LaunchDemo: React.FC = () => {
  const [showTransition, setShowTransition] = useState(false);

  const handleStartTransition = () => {
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-200 via-amber-50 to-stone-300 flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-amber-900 font-serif mb-6">
          Launch Transition Demo
        </h1>
        <p className="text-lg text-amber-800 mb-8">
          Klik tombol di bawah untuk melihat animasi transisi launching yang
          akan digunakan setelah countdown selesai.
        </p>

        <LaunchButton
          onLaunch={handleStartTransition}
          isLaunching={showTransition}
          className="text-lg"
        >
          Start Launch Transition
        </LaunchButton>

        <div className="mt-8 p-6 bg-white/70 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-bold text-gray-800 font-serif mb-4">
            Fitur Transisi:
          </h3>
          <ul className="text-left text-gray-700 space-y-2">
            <li>• ✨ Animasi expanding circles dengan efek ripple</li>
            <li>• 🎯 Logo ornamental dengan rotating ring</li>
            <li>• 📝 Text "Selamat Datang" dengan fade-in effect</li>
            <li>• ⭐ Particle effects yang floating</li>
            <li>• 🎭 Curtain effect untuk transisi smooth</li>
            <li>• 🚀 Auto-redirect ke halaman utama setelah 3.5 detik</li>
          </ul>
        </div>

        <div className="mt-6 text-sm text-amber-700">
          <p>
            Transisi ini akan otomatis dimulai ketika countdown mencapai
            00:00:00
          </p>
        </div>
      </div>

      <LaunchTransition
        isVisible={showTransition}
        onComplete={handleTransitionComplete}
      />
    </div>
  );
};

export default LaunchDemo;
