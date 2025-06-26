import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";
import { heroSlides } from "../data/sliderData";
import background from "../assets/background.png";

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

      <section
        id="tentang"
        className="min-h-screen bg-gradient-to-br from-[#D3CAB9] via-amber-50 to-[#E7E1D5]  flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-tertiary font-serif mb-4">
            Tentang Desa
          </h2>
          <p className="text-xl text-primary font-serif lg:px-36">
            Desa Ketindan, Kecamatan Lawang, Kabupaten Malang, adalah permata
            tersembunyi yang mempesona. Nikmati keindahan alam, telusuri jejak
            sejarah dan budaya, serta cicipi keunikan produk-produk UMKM lokal
            kami.
          </p>
        </div>
      </section>

      <section
        id="sejarah"
        className="min-h-screen bg-gradient-to-br from-[#D3CAB9] via-amber-50 to-[#E7E1D5] flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-tertiary font-serif mb-4">
            Sejarah
          </h2>
          <p className="text-xl text-amber-700 font-serif">
            Konten akan ditambahkan di sini
          </p>
        </div>
      </section>

      <section
        id="peninggalan"
        className="min-h-screen bg-stone-100 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-amber-900 font-serif mb-4">
            Peninggalan
          </h2>
          <p className="text-xl text-amber-700 font-serif">
            Konten akan ditambahkan di sini
          </p>
        </div>
      </section>

      <section
        id="wisata"
        className="min-h-screen bg-stone-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-amber-900 font-serif mb-4">
            Wisata
          </h2>
          <p className="text-xl text-amber-700 font-serif">
            Konten akan ditambahkan di sini
          </p>
        </div>
      </section>

      <section
        id="umkm"
        className="min-h-screen bg-stone-100 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-amber-900 font-serif mb-4">
            UMKM
          </h2>
          <p className="text-xl text-amber-700 font-serif">
            Konten akan ditambahkan di sini
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
