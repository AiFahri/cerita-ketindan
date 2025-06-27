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

export const wisataData = [
  {
    slug: "ketindan-trad",
    title: "Ketindan Trad (Kawasan Wisata Desa)",
    image: trad,
    description:
      "Kawasan wisata terpadu yang menawarkan beragam wahana rekreasi, edukasi, dan sentra UMKM di tengah asrinya Desa Ketindan.",
    detailDescription:
      "Ketindan Trad adalah ikon pariwisata terbaru Desa Ketindan, yang sedang berkembang menjadi kawasan wisata terpadu. Berpusat di lahan desa, Ketindan Trad memiliki Gapura Utama yang megah, sering menjadi lokasi acara seni dan budaya. Pengunjung dapat menikmati serunya Kolam Renang,  berinteraksi di Peternakan Domba, untuk pengalaman yang lebih menantang, tersedia Jeep & ATV untuk berpetualang. Saat ini, beberapa kios Pusat Oleh-Oleh sudah beroperasi, menawarkan produk khas desa. Selain itu, akan dihadirkan pula fasilitas Kerajinan Batik bagi yang ingin belajar dan menjelajahi Lahan Petik Coklat.",
    location: "Ketindan Trad, Lawang, Malang",
    category: "wisata terpadu",
    facilities: [
      "Gapura Utama",
      "Pusat Oleh-Oleh",
      "Kolam Renang",
      "Peternakan Domba",
      "Jeep & ATV",
      // "Area Kerajinan Batik",
    ],
    // Informasi tambahan yang bisa ditampilkan di detail page
    tickets: "Mulai Rp8.000 (per wahana, belum dalam bentuk paket)",
  },
  {
    slug: "griya-kopi-katinden",
    title: "Griya Kopi Katinden",
    image: griya,
    description:
      "Kedai kopi lokal yang menyajikan kopi berkualitas tinggi dari biji kopi asli Ketindan.",
    detailDescription:
      "Griya Kopi Katindan adalah outlet kopi lokal yang didirikan sejak tahun 2021 di masa pandemi. Dengan bekal keikutsertaan dalam berbagai program dan kompetisi tingkat Jawa Timur, serta acara penggerak petani milenial, Griya Kopi Katindan berkomitmen menyajikan Kopi Ketindan terbaik. Tempat ini menjadi sentra bagi warga dan wisatawan untuk menikmati kopi asli sambil berbincang, dengan suasana tradisional yang nyaman.",
    location: "Pusat Desa Ketindan, Lawang, Malang",
    category: "kuliner & edukasi",
    // facilities: [
    //   "Area duduk *indoor*",
    //   "Teras *outdoor*",
    //   "WiFi",
    //   "Parkir",
    //   "Area *Coffee Tasting*",
    // ],
    // owner: "Ibu Yani",
    established: "Tahun 2021",
  },
  {
    slug: "wisata-edukasi-kebun-kopi-lawang",
    title: "Wisata Edukasi Kebun Kopi Lawang",
    image: kopi,
    description:
      "Nikmati pengalaman edukasi kopi dari hulu ke hilir, belajar budidaya hingga petik biji kopi segar di kebun kopi Lawang.",
    detailDescription:
      "Wisata Edukasi Kebun Kopi Lawang (W.E.K.K) menawarkan pengalaman imersif bagi pengunjung untuk mendalami seluk-beluk dunia kopi. Anda akan diajak menjelajahi perkebunan kopi yang asri, belajar langsung dari petani lokal tentang proses budidaya kopi dari biji hingga buah matang, serta berkesempatan ikut memetik buah kopi. Pengalaman ini dilengkapi dengan pemahaman mengenai proses pengolahan kopi tradisional hingga siap seduh, memberikan wawasan autentik tentang perjalanan secangkir kopi.",
    location: "Jl. Tegal Rejo No.22, Tegalrejo, Ketindan, Lawang, Malang",
    category: "edukasi & alam",
    // facilities: [
    //   "Pemandu wisata (Tour Guide)",
    //   "Area petik kopi",
    //   "Area pengolahan kopi (sederhana)",
    //   "Gazebo/Area istirahat",
    //   "Papan informasi edukasi",
    // ],
  },
  {
    slug: "kawasan-inovasi-pengelolaan-sampah-terpadu",
    title: "Kawasan Inovasi Pengelolaan Sampah Terpadu",
    image: pengelolaan,
    description:
      "Pusat edukasi dan praktik pengelolaan sampah berkelanjutan, wujud komitmen Desa Ketindan pada lingkungan.",
    detailDescription:
      "Kawasan Inovasi Pengelolaan Sampah Terpadu merupakan salah satu program unggulan Desa Ketindan dalam mewujudkan desa yang bersih dan lestari. Area ini menjadi pusat edukasi yang menunjukkan bagaimana masyarakat desa mengelola sampah secara berkelanjutan dan inovatif. Pengunjung dapat belajar langsung tentang sistem daur ulang berbagai jenis sampah, proses pembuatan kompos dari sampah organik, hingga berbagai inisiasi kreatif lainnya dalam mengolah limbah menjadi sesuatu yang bernilai. Ini adalah bukti nyata komitmen desa dalam menjaga kelestarian lingkungan dan membangun kesadaran kolektif.",
    location: "Area TPS Terpadu Desa Ketindan, Lawang, Malang",
    category: "edukasi & lingkungan", // Ditambahkan "lingkungan"
    // facilities: [
    //   "Fasilitas daur ulang",
    //   "Area pengolahan kompos",
    //   "Ruang edukasi/Display informasi",
    //   "Toilet",
    //   "Area pemilahan sampah",
    // ],
  },
];
