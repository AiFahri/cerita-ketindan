import React, { useRef, useState } from "react";
import { type SlideData } from "../data/sliderData";
import ornamentLeft from "../assets/ornament-left.png";
import ornamentRight from "../assets/ornament-right.png";
import background from "../assets/background.png";
interface HeroSliderProps {
  slides: SlideData[];
  title?: string;
  subtitle?: string;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  // title = "Desa Ketindan Wisata, Jejak Tradisi, dan Warisan Leluhur",
  // subtitle = "Menjelajahi kekayaan budaya dan sejarah yang terpelihara dengan baik",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getSlidePosition = (index: number) => {
    const diff = index - currentSlide;
    const totalSlides = slides.length;

    let position = diff;
    if (Math.abs(diff) > totalSlides / 2) {
      position = diff > 0 ? diff - totalSlides : diff + totalSlides;
    }

    return position;
  };

  const getSlideStyle = (index: number) => {
    const position = getSlidePosition(index);
    const isActive = position === 0;
    const absPosition = Math.abs(position);

    const translateX = position * 120;
    const translateZ = isActive ? 0 : -100 - (absPosition - 1) * 50;
    const rotateY = position * -25;
    const scale = isActive ? 1 : Math.max(0.7, 1 - absPosition * 0.15);
    const opacity = absPosition > 2 ? 0 : Math.max(0.3, 1 - absPosition * 0.3);

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: isActive ? 10 : Math.max(1, 10 - absPosition),
    };
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-stone-50 to-stone-50 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 opacity-30 w-full h-full object-cover"
        />
        <img
          src={ornamentLeft}
          alt=""
          className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
        />
      </div>
      <img
        src={ornamentRight}
        alt=""
        className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 "
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-0 sm:mb-0 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-tertiary font-serif leading-tight mb-4">
            Desa Ketindan
            <h1>Wisata, Jejak Tradisi, dan Warisan Leluhur</h1>
          </h1>
          {/* <p className="text-lg sm:text-xl text-amber-700 font-serif max-w-2xl mx-auto">
            {subtitle}
          </p> */}
        </div>

        <div className="relative w-full max-w-6xl">
          <div
            ref={sliderRef}
            className="relative h-56 sm:h-72 lg:h-96 mx-auto"
            style={{
              perspective: "1200px",
              perspectiveOrigin: "center center",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute w-56 h-40 sm:w-56 sm:h-56 lg:w-96 lg:h-72 cursor-pointer transition-all duration-500 ease-out ${
                    isTransitioning ? "pointer-events-none" : ""
                  }`}
                  style={getSlideStyle(index)}
                  onClick={() => goToSlide(index)}
                >
                  <div className="relative w-full h-36 sm:h-56 lg:h-60 rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={slide.imageUrl}
                      alt={slide.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-sm sm:text-base font-bold font-serif mb-1 line-clamp-2">
                        {slide.title}
                      </h3>
                      {slide.description && (
                        <p className="text-xs sm:text-sm opacity-90 line-clamp-2">
                          {slide.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/3 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-amber-900 hover:text-amber-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-20"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/3 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-amber-900 hover:text-amber-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-20"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-gray-400 hover:bg-tertiary"
                } disabled:cursor-not-allowed`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-900 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-900 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
