import { useParams, useNavigate, useLocation } from "react-router-dom";
import { wisataData } from "../data/wisataData";
import { peninggalanData } from "../data/peninggalan";

const DetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const getItemData = () => {
    const path = location.pathname;

    if (path.includes("/wisata/")) {
      return wisataData.find((item) => item.slug === slug);
    } else if (path.includes("/peninggalan/")) {
      return peninggalanData.find((item) => item.slug === slug);
    }

    return null;
  };

  const itemData = getItemData();

  const handleGoBack = () => {
    navigate("/home");
  };

  if (!itemData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#D3CAB9] via-amber-50 to-[#E7E1D5] py-8">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={handleGoBack}
            className="mb-6 flex items-center text-amber-700 hover:text-amber-900 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Kembali ke Beranda
          </button>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Konten Tidak Ditemukan
            </h1>
            <p className="text-gray-600">
              Maaf, konten yang Anda cari tidak ditemukan.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3CAB9] via-amber-50 to-[#E7E1D5] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={handleGoBack}
          className="mb-6 flex items-center text-amber-700 hover:text-amber-900 transition-colors font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
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
          Kembali ke Beranda
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 sm:h-80 lg:h-96 relative overflow-hidden">
            <img
              src={itemData.image}
              alt={itemData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-2">
                {itemData.title}
              </h1>
              <p className="text-white/90 text-lg">{itemData.description}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {itemData.detailDescription && (
              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-bold text-gray-800 font-serif mb-4">
                  Deskripsi Lengkap
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {itemData.detailDescription}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {itemData.location && (
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">
                    📍 Lokasi
                  </h3>
                  <p className="text-amber-800">{itemData.location}</p>
                </div>
              )}

              {itemData.category && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    🏷️ Kategori
                  </h3>
                  <p className="text-blue-800 capitalize">
                    {itemData.category}
                  </p>
                </div>
              )}

              {"facilities" in itemData &&
                itemData.facilities &&
                itemData.facilities.length > 0 && (
                  <div className="bg-green-50 p-4 rounded-lg md:col-span-2">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">
                      🏢 Fasilitas
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {itemData.facilities.map(
                        (facility: string, index: number) => (
                          <div
                            key={index}
                            className="bg-white px-3 py-2 rounded-md text-green-800 text-sm"
                          >
                            {facility}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
