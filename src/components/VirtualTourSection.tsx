import React from "react";
import SectionTitle from "./SectionTitle";
import ornamentLeft from "../assets/ornaments-left.png";
import ornamentRight from "../assets/ornaments-right.png";
import background from "../assets/background.png";

interface VirtualTourSectionProps {
  id?: string;
  className?: string;
}

const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24   bg-gradient-to-br from-stone-50 to-stone-50 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 z-10">
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 opacity-30 w-full h-full object-cover"
        />
        {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-amber-100/35" /> */}

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

      <div className="relative z-10 max-w-7xl mt-28 lg:mt-0  mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Virtual Tour"
          subtitle="Jelajahi Wisata Ketindan TRAD Secara Virtual dalam Pengalaman 360° yang Menakjubkan. Virtual tour 360° ini memungkinkan Anda menjelajahi keindahan alam
              dan Wisata Desa Ketindan TRAD secara interaktif. Cukup klik dan
              seret untuk melihat sekeliling, zoom in untuk detail lebih dekat,
              dan nikmati panorama yang menakjubkan dari berbagai sudut."
          alignment="center"
          className="mb-12"
        />

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium">
                  Memuat Virtual Tour...
                </p>
              </div>
            </div>

            <iframe
              src="https://tour.panoee.net/685eb7a5329df6da384a5c61"
              width="100%"
              height="600"
              allowFullScreen
              className="relative z-10 w-full h-[400px] sm:h-[500px] lg:h-[600px]"
              loading="lazy"
              title="Virtual Tour Desa Ketindan"
              onLoad={(e) => {
                const placeholder = e.currentTarget.previousElementSibling;
                if (placeholder) {
                  (placeholder as HTMLElement).style.display = "none";
                }
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 font-serif mb-2">
                Pandangan 360°
              </h3>
              <p className="text-gray-600 text-sm">
                Lihat sekeliling dengan bebas dalam pandangan 360 derajat penuh
              </p>
            </div>

            <div className="text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 font-serif mb-2">
                Lokasi Interaktif
              </h3>
              <p className="text-gray-600 text-sm">
                Kunjungi berbagai lokasi menarik dengan navigasi yang mudah
              </p>
            </div>

            <div className="text-center p-6 bg-white/70 rounded-xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 font-serif mb-2">
                Pengalaman Real-time
              </h3>
              <p className="text-gray-600 text-sm">
                Rasakan sensasi berada langsung di Desa Ketindan
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary font-serif mb-4">
                Tertarik Berkunjung Langsung?
              </h3>
              <p className="text-tertiary mb-6 max-w-2xl mx-auto">
                Setelah menjelajahi virtual tour, rencanakan kunjungan nyata
                Anda ke Desa Ketindan untuk merasakan pengalaman yang lebih
                autentik dan berinteraksi langsung dengan masyarakat lokal.
              </p>
              <button className="bg-primary hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                <a href="/wisata/ketindan-trad" className="text-sm">
                  Rencanakan Kunjungan
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-16 h-0.5 bg-blue-600"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="w-16 h-0.5 bg-blue-600"></div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-100/30 to-transparent" />
    </section>
  );
};

export default VirtualTourSection;
