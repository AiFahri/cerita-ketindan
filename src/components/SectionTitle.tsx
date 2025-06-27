import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  alignment?: "left" | "center" | "right";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  alignment = "left",
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-8 ${alignmentClasses[alignment]} ${className}`}>
      <h2
        className={`text-4xl sm:text-5xl lg:text-5xl font-black text-tertiary font-display leading-tight mb-4 ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg sm:text-xl text-secondary font-serif max-w-4xl ${
            alignment === "center" ? "mx-auto" : ""
          } ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
