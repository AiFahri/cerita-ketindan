import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Website Desa Ketindan",
  subtitle = "Launching Soon",
}) => {
  return (
    <header className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-900 mb-3 sm:mb-4 md:mb-5 leading-tight">
        {title}
      </h1>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-amber-800 mb-4 sm:mb-6 md:mb-8 leading-tight">
        {subtitle}
      </h2>
    </header>
  );
};

export default Header;
