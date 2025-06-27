import React from "react";
import SectionTitle from "./SectionTitle";
import { sejarahDesa } from "../data/sejarahData";
import ornamentLeft from "../assets/ornament-left.png";
import ornamentRight from "../assets/ornament-right.png";
import background from "../assets/background.png";

interface SejarahSectionProps {
  id?: string;
  className?: string;
  showHighlights?: boolean;
}

const SejarahSection: React.FC<SejarahSectionProps> = ({
  id,
  className = "",
  // showHighlights = false,
}) => {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-stone-50 to-stone-50 overflow-hidden${className}`}
    >
      <div className="absolute inset-0 z-10">
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 opacity-30 w-full h-full object-cover"
        />
        <img
          src={ornamentLeft}
          alt=""
          className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
        />
        <img
          src={ornamentRight}
          alt=""
          className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 "
        />
      </div>

      {/* <div className="absolute inset-0 bg-gradient-tote-br from-amber-50/80 via-orange-50/60 to-yellow-50/80" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title={sejarahDesa.title}
            alignment="left"
            className="mb-12 mt-36 lg:mt-0"
            titleClassName="text-amber-900 drop-shadow-sm"
          />

          <div className="space-y-8">
            {sejarahDesa.paragraphs.map((paragraph, index) => (
              <div key={index} className="relative">
                {index === -1 && (
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-600 to-orange-600 rounded-full opacity-60" />
                )}

                <p
                  className={`
                  text-justify leading-relaxed px-4 sm:px-6 lg:px-8
                  ${
                    index === -1
                      ? "text-xl sm:text-2xl lg:text-3xl font-medium text-amber-900 font-display mb-8"
                      : "text-lg sm:text-xl text-amber-800 font-sans"
                  }
                  ${index === 0 ? "pl-8" : ""}
                `}
                >
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights Section */}
          {/* {showHighlights && sejarahDesa.highlights && (
            <div className="mt-16 pt-12 border-t border-amber-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 font-display text-center mb-8">
                Keistimewaan Desa Ketindan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {sejarahDesa.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg shadow-sm border border-amber-100"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-amber-600 rounded-full" />
                    <span className="text-amber-800 font-medium font-sans">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )} */}

          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent rounded-full" />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 wbg-gradient-to-t from-amber-100/30 to-transparent" /> */}
    </section>
  );
};

export default SejarahSection;
