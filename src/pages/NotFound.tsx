import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 text-lg">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Kembali ke Beranda
          </button>
          
          <div>
            <button
              onClick={() => window.history.back()}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Atau kembali ke halaman sebelumnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
