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
    description: "Prasasti peninggalan kuno yang merekam sejarah desa.",
    detailDescription:
      "Prasasti Katiden I merupakan salah satu peninggalan bersejarah yang sangat berharga bagi Desa Ketindan. Prasasti ini berisi tulisan aksara Jawa kuno yang menceritakan tentang sejarah pendirian desa dan kehidupan masyarakat pada masa lampau. Ditemukan pada tahun 1960-an, prasasti ini menjadi bukti otentik peradaban yang pernah berkembang di wilayah ini.",
    year: "Abad ke-13",
    location: "TIC Ketindan Trad",
    category: "artefak",
  },
  {
    slug: "prasasti-katiden-ii",
    title: "Prasasti Katiden II",
    image: prasastiKatidenII,
    description: "Prasasti kedua yang melengkapi sejarah Desa Ketindan.",
    detailDescription:
      "Prasasti Katiden II ditemukan beberapa tahun setelah prasasti pertama. Prasasti ini berisi informasi tambahan tentang sistem pemerintahan dan tata kehidupan sosial masyarakat pada masa kerajaan. Tulisan yang terpahat menunjukkan tingkat peradaban yang tinggi dan sistem administrasi yang terorganisir dengan baik.",
    year: "Abad ke-13",
    location: "TIC Ketindan Trad",
    category: "artefak",
  },
  {
    slug: "arca-dwarapala",
    title: "Arca Dwarapala",
    image: arcaDwarapala,
    description: "Penjaga gerbang sakral dari masa kerajaan kuno.",
    detailDescription:
      "Arca Dwarapala adalah patung penjaga gerbang yang biasanya ditempatkan di pintu masuk candi atau bangunan suci. Arca ini menggambarkan sosok raksasa yang gagah dengan ekspresi garang, berfungsi sebagai pelindung dari roh jahat. Keberadaan arca ini menunjukkan bahwa di wilayah Desa Ketindan pernah berdiri bangunan suci yang penting.",
    year: "Abad ke-14",
    location: "Balai Desa Ketindan",
    category: "arsitektur",
  },
  {
    slug: "dupa",
    title: "Dupa",
    image: tatakanDupa,
    description: "Peralatan upacara keagamaan tradisional.",
    detailDescription:
      "Dupa atau kemenyan merupakan bagian penting dalam ritual keagamaan masyarakat Jawa. Dupa kuno yang ditemukan di Desa Ketindan menunjukkan kontinuitas tradisi spiritual yang telah berlangsung selama berabad-abad. Bentuk dan ornamen pada wadah dupa mencerminkan keahlian seni rupa yang tinggi pada masa itu.",
    year: "Abad ke-15",
    location: "Omah Seni Arjuna Art",
    category: "artefak",
  },
  {
    slug: "wayang-ranting",
    title: "Wayang Ranting",
    image: wayangRanting,
    description: "Seni pertunjukan tradisional dengan media ranting.",
    detailDescription:
      "Wayang Ranting adalah bentuk seni pertunjukan unik yang menggunakan ranting pohon sebagai media utama. Berbeda dengan wayang kulit, wayang ranting menggunakan bahan alami yang mudah didapat. Seni ini mencerminkan kreativitas masyarakat lokal dalam mengembangkan budaya pertunjukan yang sesuai dengan kondisi lingkungan setempat.",
    location: "Omah Seni Arjuna Art",
    category: "tradisi",
  },
  {
    slug: "keris-pamor-blarak-sineret",
    title: "Keris Pamor Blarak Sineret",
    image: kerisPamor,
    description: "Pusaka keris dengan pamor istimewa warisan leluhur.",
    detailDescription:
      "Keris Pamor Blarak Sineret merupakan pusaka yang sangat dihormati di Desa Ketindan. Pamor blarak sineret menggambarkan motif daun kelapa yang bergelombang, melambangkan kemakmuran dan perlindungan. Keris ini dipercaya memiliki kekuatan spiritual dan menjadi simbol kepemimpinan tradisional di desa.",
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
