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
          <h2 className="text-3xl font-bold text-primary mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 text-lg">
            Maaf, halaman yang Anda cari tidak dapat ditemukan.
          </p>
        </div>

        <button
          onClick={handleGoHome}
          className="inline-block bg-amber-900 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default NotFound;
