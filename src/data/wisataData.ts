import trad from "/ketindan trad.jpg";
import griya from "/griya kopi.jpg";
import kopi from "/wisata kopi.webp";
import pengelolaan from "/pengelolaan sampah.jpg";

export interface WisataData {
  slug: string;
  title: string;
  image: string;
  description: string;
  detailDescription?: string;
  location?: string;
  category?: string;
  facilities?: string[];
}

export const wisataData: WisataData[] = [
  {
    slug: "ketindan-trad",
    title: "Ketindan Trad",
    image: trad,
    description:
      "Jalur trekking yang menawarkan pemandangan alam desa yang asri.",
    detailDescription:
      "Ketindan Trek merupakan jalur trekking yang menghubungkan berbagai spot menarik di Desa Ketindan. Jalur ini menawarkan pengalaman berjalan kaki melalui persawahan, perkebunan, dan area hutan kecil yang masih alami. Sepanjang perjalanan, pengunjung dapat menikmati udara segar dan pemandangan yang menenangkan.",
    location: "Area Persawahan Desa Ketindan",
    category: "alam",
    facilities: ["Jalur setapak", "Rest area", "Papan informasi"],
  },
  {
    slug: "griya-kopi-katindan",
    title: "Griya Kopi Katindan",
    image: griya,
    description: "Kedai kopi tradisional dengan cita rasa khas desa.",
    detailDescription:
      "Griya Kopi Katindan adalah kedai kopi yang menyajikan kopi berkualitas tinggi dari biji kopi lokal. Tempat ini menjadi pusat berkumpul warga dan wisatawan untuk menikmati kopi sambil berbincang. Suasana tradisional dengan sentuhan modern membuat tempat ini nyaman untuk bersantai.",
    location: "Pusat Desa Ketindan",
    category: "kuliner",
    facilities: ["Area duduk indoor", "Teras outdoor", "WiFi", "Parkir"],
  },
  {
    slug: "perkebunan-kopi-ketindan",
    title: "Perkebunan Kopi Ketindan",
    image: kopi,
    description: "Wisata edukasi perkebunan kopi dengan pengalaman petik kopi.",
    detailDescription:
      "Perkebunan Kopi Ketindan menawarkan wisata edukasi tentang proses budidaya kopi dari biji hingga siap seduh. Pengunjung dapat belajar langsung dari petani lokal, ikut memetik buah kopi, dan memahami proses pengolahan kopi tradisional.",
    location: "Lereng Bukit Ketindan",
    category: "edukasi",
    facilities: [
      "Tour guide",
      "Area petik kopi",
      "Tempat pengolahan",
      "Gazebo",
    ],
  },
  {
    slug: "kawasan-inovasi-pengelolaan-sampah-terpadu",
    title: "Kawasan Inovasi Pengelolaan Sampah Terpadu",
    image: pengelolaan,
    description: "Wisata edukasi pengelolaan sampah ramah lingkungan.",
    detailDescription:
      "Kawasan Inovasi Pengelolaan Sampah Terpadu merupakan area edukasi yang menunjukkan bagaimana Desa Ketindan mengelola sampah secara berkelanjutan. Pengunjung dapat belajar tentang daur ulang, komposting, dan berbagai inovasi pengelolaan sampah yang ramah lingkungan.",
    location: "Area TPS Terpadu Ketindan",
    category: "edukasi",
    facilities: [
      "Fasilitas daur ulang",
      "Area kompos",
      "Ruang edukasi",
      "Toilet",
    ],
  },
];
