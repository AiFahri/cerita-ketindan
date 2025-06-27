import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { UMKMData } from "../data/UMKMData";
import ornamentMid from "../assets/ornament-mid.svg";
import ornamentLeft from "../assets/ornament-left.png";
import ornamentRight from "../assets/ornament-right.png";
import background from "../assets/background.png";

interface UMKMSectionProps {
  id?: string;
  className?: string;
}

const UMKMSection: React.FC<UMKMSectionProps> = ({ id, className = "" }) => {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-stone-50 to-stone-50${className}`}
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
          className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 z-50"
        />
        <img
          src={ornamentRight}
          alt=""
          className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 "
        />
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-yellow-50/80" /> */}

      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img src={ornamentMid} alt="" className="w-96 h-96 object-contain" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="UMKM Desa"
          subtitle="Bawa Pulang Oleh-Oleh Khas dan Dukung Ekonomi Kreatif Warga Desa Ketindan"
          alignment="center"
          className="mb-12 mt-36 lg:mt-0"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center max-w-6xl mx-auto">
          {UMKMData.map((item) => (
            <Card
              key={item.slug}
              title={item.title}
              description={item.description}
              image={item.image}
              slug={item.slug}
              basePath="/umkm"
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-16 h-0.5 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            <div className="w-16 h-0.5 bg-amber-600"></div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100/30 to-transparent" /> */}
    </section>
  );
};

export default UMKMSection;
