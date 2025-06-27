import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import SejarahSection from "../components/SejarahSection";
import PeninggalanSection from "../components/PeninggalanSection";
import Footer from "../components/Footer";
import { heroSlides } from "../data/sliderData";
import Tentangsection from "../components/TentangSection";
import WisataSection from "../components/WisataSection";
import UMKMSection from "../components/UMKMSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3CAB9] via-amber-50 to-[#E7E1D5]">
      <Navbar />
      <section id="hero" className="relative sm:mt-6 lg:mt-20">
        <HeroSlider
          slides={heroSlides}
          title="Desa Ketindan: Jejak Tradisi dan Warisan Leluhur"
          // subtitle="Menjelajahi kekayaan budaya dan sejarah yang terpelihara dengan baik di tengah kemajuan zaman"
        />
      </section>
      <Tentangsection id="tentang" className="mb-16" />
      <SejarahSection id="sejarah" showHighlights={true} />
      <PeninggalanSection id="peninggalan" />
      <WisataSection id="wisata" />
      <UMKMSection id="umkm" />
      <Footer />
    </div>
  );
};

export default Home;
