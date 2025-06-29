import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LaunchTransitionProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const LaunchTransition: React.FC<LaunchTransitionProps> = ({
  isVisible,
  onComplete,
}) => {
  const [stage, setStage] = useState<
    "initial" | "expanding" | "revealing" | "complete"
  >("initial");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isVisible) return;

    const timeline: Array<{
      stage: "expanding" | "revealing" | "complete";
      delay: number;
    }> = [
      { stage: "expanding", delay: 500 },
      { stage: "revealing", delay: 1500 },
      { stage: "complete", delay: 2500 },
    ];

    timeline.forEach(({ stage: nextStage, delay }) => {
      setTimeout(() => {
        console.log(`LaunchTransition: Stage changed to ${nextStage}`);
        setStage(nextStage);
        if (nextStage === "complete") {
          setTimeout(() => {
            console.log("LaunchTransition: Navigating to /");
            navigate("/", { state: { fromLaunch: true } });
            onComplete?.();
          }, 800);
        }
      }, delay);
    });
  }, [isVisible, navigate, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 transition-opacity duration-1000 ${
          stage === "complete" ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full border-2 border-amber-300/30 transition-all duration-1000 ease-out ${
              stage === "expanding"
                ? `w-${(i + 1) * 40} h-${(i + 1) * 40} opacity-100`
                : "w-0 h-0 opacity-0"
            }`}
            style={{
              animationDelay: `${i * 200}ms`,
              transform:
                stage === "expanding" ? `scale(${1 + i * 0.2})` : "scale(0)",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`transition-all duration-1000 ease-out ${
            stage === "expanding"
              ? "scale-110 opacity-100"
              : stage === "revealing"
              ? "scale-125 opacity-100"
              : stage === "complete"
              ? "scale-150 opacity-0"
              : "scale-100 opacity-100"
          }`}
        >
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-amber-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z" />
                  <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z" />
                </svg>
              </div>
            </div>

            <div
              className={`absolute inset-0 border-4 border-amber-400/50 rounded-full transition-all duration-2000 ${
                stage === "expanding" ? "animate-spin" : ""
              }`}
              style={{
                animation:
                  stage === "expanding" ? "spin 2s linear infinite" : "none",
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            stage === "revealing"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ marginTop: "200px" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-amber-100 font-serif mb-4">
            Selamat Datang
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 font-medium">
            di Cerita Ketindan
          </p>

          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-amber-300 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 300}ms`,
                  animationDuration: "1s",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-amber-300/60 rounded-full transition-all duration-2000 ${
              stage === "expanding" ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2000}ms`,
              animation:
                stage === "expanding"
                  ? "float 3s ease-in-out infinite"
                  : "none",
            }}
          />
        ))}
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/20 to-amber-900 transition-all duration-1000 ${
          stage === "complete"
            ? "opacity-0 translate-y-full"
            : "opacity-100 translate-y-0"
        }`}
      />
    </div>
  );
};

export default LaunchTransition;
