import prasastiKatidenI from "/prasasti-katiden-1.jpg";
import prasastiKatidenII from "/prasasti-katiden-2.jpg";
import arcaDwarapala from "/arca-dwarapala.jpg";
import tatakanDupa from "/tatakan dupa.jpg";
import wayangRanting from "/wayang ranting.jpg";
import kerisPamor from "/keris pamor.jpg";

export interface PeninggalanData {
  slug: string;
  title: string;
  image: string;
  description: string;
  detailDescription?: string;
  year?: string;
  location?: string;
  category?: string;
}

export const peninggalanData: PeninggalanData[] = [
  {
    slug: "prasasti-katiden-i",
    title: "Prasasti Katiden I",
    image: prasastiKatidenI,
    description:
      "Saksi bisu sejarah agung, Prasasti Katiden I adalah tonggak peradaban kuno yang mengukir kisah penting wilayah Malang pada abad ke-14 Masehi.",
    detailDescription:
      "Prasasti Katiden I, yang dituliskan pada lempeng tembaga berukuran 35,7 cm x 9,7 cm dengan aksara dan bahasa Jawa Kuno, dikeluarkan pada bulan Caitra tahun 1314 Saka (sekitar 24 Maret – 22 April 1392 M). Kini menjadi koleksi Museum Nasional (E65), prasasti ini mencatat pengumuman resmi Raja Wikramawardhana (menantu Hayam Wuruk) kepada dua pihak: Pacatanda di Turen dan masyarakat 'si para same Katiḍen' yang berdiam di sebelah timur Gunung Kawi, baik yang berada di seberang timur maupun barat Sungai Brantas. Raja memerintahkan mereka untuk melestarikan dan menjaga hutan alang-alang di lereng Gunung Lejar agar tidak terbakar, dan sebagai imbalannya, kelompok masyarakat dari 11 desa ini dibebaskan dari berbagai pajak seperti jalang, palawang (pajak rumah), dan titisara (uang upeti), serta diberi hak untuk mengambil hasil alam dari hutan dan pantai selatan, termasuk mengumpulkan telur penyu. Nama Katiden sendiri merujuk pada nama wilayah yang kini dikenal sebagai Desa Ketindan. Kini, duplikat prasasti ini dapat ditemukan dan dipelajari di TIC Ketindan Trad, Desa Ketindan.",
    year: "Abad ke-1",
    location: "TIC Ketindan Trad",
    category: "artefak",
  },
  {
    slug: "prasasti-katiden-ii",
    title: "Prasasti Katiden II",
    image: prasastiKatidenII,
    description:
      "Penguat ketetapan Raja, Prasasti Katiden II melengkapi jejak peradaban purba di Desa Ketindan dengan pesan pembebasan pajak dan pelestarian alam bagi warga lokal.",
    detailDescription:
      "Prasasti Katiden II, juga dikenal sebagai Prasasti Lumpang, ditulis pada satu lempeng tembaga berukuran 35 x 9,5 cm dengan aksara dan bahasa Jawa Kuno. Prasasti ini dikeluarkan pada bulan Srawana tahun 1317 Saka (sekitar 17 Juli – 15 Agustus 1395 M), tiga tahun setelah Prasasti Katiden I, dan juga berisi pengumuman resmi dari Raja Wikramawardhana kepada Pacatanda di Turen serta kelompok masyarakat 'si para same Katiḍen' yang mendiami wilayah timur Gunung Kawi. Intinya, prasasti ini memperkuat perintah untuk melestarikan dan menjaga hutan alang-alang di Gunung Lejar dan menegaskan kembali pembebasan mereka dari berbagai jenis pajak serta hak untuk memanfaatkan hasil hutan dan telur penyu, sebagai bentuk penguatan kedudukan warga penduduk Katiden. Kini, duplikat prasasti ini dapat ditemukan dan dipelajari di TIC Ketindan Trad, Desa Ketindan.",
    year: "Abad ke-14",
    location: "TIC Ketindan Trad",
    category: "artefak",
  },
  {
    slug: "arca-dwarapala",
    title: "Arca Dwarapala",
    image: arcaDwarapala,
    description:
      "Penjaga setia situs kuno, Arca Dwarapala di Ketindan adalah pahatan batu raksasa yang melambangkan kekuatan dan perlindungan spiritual.",
    detailDescription:
      "Arca Dwarapala adalah patung penjaga yang umumnya diukir dari batu andesit, berfungsi untuk melindungi pintu masuk kompleks candi, kuil, atau area sakral lainnya dari energi negatif atau roh jahat. Arca Dwarapala di Malang Raya seringkali berasal dari periode Kerajaan Singasari atau Majapahit (sekitar abad ke-13 hingga ke-15 Masehi), yang tercermin dari gaya seni dan arsitekturnya yang khas, digambarkan sebagai sosok raksasa dengan wajah garang dan membawa gada.",
    year: "Abad ke-15",
    location: "-",
    category: "arsitektur",
  },
  {
    slug: "dupa",
    title: "Dupa",
    image: tatakanDupa,
    description:
      "Inovasi kreatif dari limbah, tatakan Dupa ini adalah perwujudan kearifan lokal dalam mendaur ulang bata bekas menjadi kerajinan fungsional yang estetis.",
    detailDescription:
      "Tatakan Dupa ini berfungsi sebagai alas atau wadah untuk meletakkan dupa yang sedang dibakar, dengan lubang atau cekungan untuk menancapkan batang dupa serta permukaan datar untuk menampung abu, menjaga kebersihan area sekitarnya. Terbuat dari batu bata bekas yang didaur ulang melalui proses pemotongan, pembentukan, dan penghalusan, produk ini merupakan kerajinan tangan kontemporer dari Desa Ketindan. Sejarahnya berakar pada inisiatif lokal untuk memanfaatkan limbah dan menciptakan nilai tambah, sekaligus memenuhi kebutuhan akan perangkat dupa yang praktis dan ramah lingkungan, menunjukkan semangat inovasi dan keberlanjutan di desa.",
    location: "Omah Seni Arjuna Art",
    category: "artefak",
  },
  {
    slug: "wayang-ranting",
    title: "Wayang Ranting",
    image: wayangRanting,
    description:
      "Punakawan dalam wujud alami, Wayang Ranting adalah kreasi seni unik dari ranting asli, melestarikan kisah pewayangan dengan sentuhan kearifan alam.",
    detailDescription:
      "Wayang Ranting berfungsi sebagai benda seni dekoratif, media edukasi budaya tentang tokoh pewayangan, atau properti untuk pementasan wayang sederhana, sekaligus simbol kreativitas masyarakat desa dan hubungan mereka dengan alam. Pembuatannya melibatkan pemilihan ranting pohon kering yang memiliki bentuk unik menyerupai bagian tubuh tokoh, kemudian dirangkai dan dibentuk minimalis menjadi figur tokoh Punakawan (Semar, Petruk, Gareng, Bagong), namun tetap mempertahankan bentuk asli ranting sebagai ciri khasnya. Produk ini merupakan inovasi kerajinan tangan yang berasal dari Desa Ketindan sebagai upaya untuk menciptakan produk seni yang berbeda dan memanfaatkan sumber daya alam yang melimpah, menunjukkan adaptasi dan kreativitas baru dalam melestarikan cerita pewayangan.",
    location: "Omah Seni Arjuna Art",
    category: "tradisi",
  },
  {
    slug: "keris-pamor-blarak-sineret",
    title: "Keris Pamor Blarak Sineret",
    image: kerisPamor,
    description:
      "Simbol kewibawaan dan keselarasan, Keris Pamor Blarak Sineret adalah warisan adiluhung dengan pola bilah menyerupai daun kelapa yang terikat rapat, melambangkan kemantapan hati.",
    detailDescription:
      "Keris ini, sebagai benda pusaka dan lambang status, memiliki fungsi spiritual dan filosofis yang mendalam selain sebagai senjata tradisional. Bilahnya ditempa dari kombinasi kompleks besi, nikel, dan material meteorit oleh seorang empu, menciptakan pola 'Pamor Blarak Sineret' yang menyerupai susunan pelepah daun kelapa yang ditarik rapat. Secara filosofis, pamor ini dipercaya membawa tuah untuk kewibawaan, keteguhan hati, dan kemampuan mengambil keputusan. Keris dengan pamor ini merupakan bagian dari warisan budaya dan seni kriya tradisional Jawa, mencerminkan kekayaan tradisi penempaan keris dan kepercayaan masyarakat.",
    year: "Abad ke-16",
    location: "Omah Seni Arjuna Art",
    category: "artefak",
  },
];

export const getPeninggalanBySlug = (
  slug: string
): PeninggalanData | undefined => {
  return peninggalanData.find((item) => item.slug === slug);
};

export const getRelatedPeninggalan = (
  currentSlug: string,
  limit: number = 3
): PeninggalanData[] => {
  return peninggalanData
    .filter((item) => item.slug !== currentSlug)
    .slice(0, limit);
};
