import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { peninggalanData } from "../data/peninggalan";
import ornamentLeft from "../assets/ornaments-left.png";
import ornamentRight from "../assets/ornaments-right.png";
import background from "../assets/background.png";

interface PeninggalanSectionProps {
  id?: string;
  className?: string;
}

const PeninggalanSection: React.FC<PeninggalanSectionProps> = ({
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`relative py-20 bg-gradient-to-br from-stone-50 to-stone-50${className}`}
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
      <div className="relative z-10 container mx-auto px-4">
        <SectionTitle
          title="Peninggalan Desa"
          subtitle="Menguak Jejak Masa Lalu, Saksi Bisu Peradaban yang Membentuk Desa Ketindan"
          alignment="center"
          className="mb-12 mt-30 lg:mt-0"
        />

        <div className="z-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center max-w-6xl mx-auto">
          {peninggalanData.map((item) => (
            <Card
              key={item.slug}
              title={item.title}
              description={item.description}
              image={item.image}
              slug={item.slug}
              basePath="/peninggalan"
            />
          ))}
        </div>

        {/* <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-16 h-0.5 bg-amber-600"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            <div className="w-16 h-0.5 bg-amber-600"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PeninggalanSection;
