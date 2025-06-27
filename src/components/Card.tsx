import React from "react";
import { useNavigate } from "react-router-dom";
import bottomCard from "../assets/bottom-card.png";

interface CardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  category?: string;
  year?: string;
  location?: string;
  basePath?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  slug,
  basePath = "/peninggalan",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${basePath}/${slug}`);
  };

  return (
    <div className="group relative cursor-pointer mb-8 sm:mb-10 md:mb-12">
      <div
        onClick={handleClick}
        className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-[#A09280] w-full max-w-[280px] mx-auto"
        style={{ aspectRatio: "3/4" }}
      >
        <div className="relative h-5/6 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white">
              <p className="text-sm leading-relaxed font-sans">{description}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1/5 flex items-center justify-center px-4 bg-back rounded-t-2xl">
          <h3 className="font-bold text-base text-black font-display text-center leading-tight group-hover:text-amber-700 transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      <div
        className="absolute left-1/12 transform -translate-x-1/12 z-10"
        style={{ bottom: "-3.2rem" }}
      >
        <img
          src={bottomCard}
          alt="Ornament"
          className="w-full h-auto opacity-100  "
        />
      </div>
    </div>
  );
};

export default Card;
