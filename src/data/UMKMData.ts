import trad from "/ketindan trad.jpg";
import griya from "/griya kopi.jpg";
import kopi from "/wisata kopi.webp";
import pengelolaan from "/pengelolaan sampah.jpg";

export interface UMKMData {
  slug: string;
  title: string;
  image: string;
  description: string;
  detailDescription?: string;
  location?: string;
  category?: string;
  facilities?: string[];
}

export const UMKMData: UMKMData[] = [
  {
    slug: "kopi-katinden",
    title: "Kopi Katinden",
    image: trad,
    description: "Kopi berkualitas tinggi dari biji kopi lokal.",
    detailDescription:
      "Kopi Katinden adalah kedai kopi yang menyajikan kopi berkualitas tinggi dari biji kopi lokal.",
    location: "Kampung Kopi Katindan",
    category: "kuliner",
    facilities: ["Area duduk indoor", "Teras outdoor", "WiFi", "Parkir"],
  },
  {
    slug: "keripik-arjuna",
    title: "Keripik Arjuna",
    image: griya,
    description: "Keripik tradisional dengan cita rasa khas desa.",
    detailDescription:
      "Keripik Arjuna adalah usaha yang memproduksi keripik dari bahan-bahan alami, termasuk biji kopi, kacang, dan buah-buahan lokal.",
    location: "Kampung Kopi Katindan",
    category: "kuliner",
    facilities: ["Area duduk indoor", "Teras outdoor", "WiFi", "Parkir"],
  },
  {
    slug: "pia-naga",
    title: "Pia Naga",
    image: kopi,
    description:
      "Pia Naga adalah usaha yang memproduksi pia dari bahan-bahan alami, termasuk biji kopi, kacang, dan buah-buahan lokal.",
    detailDescription:
      "Pia Naga adalah usaha yang memproduksi pia dari bahan-bahan alami, termasuk biji kopi, kacang, dan buah-buahan lokal.",
    location: "Pia Naga",
    category: "kuliner",
    facilities: [
      "Tour guide",
      "Area petik kopi",
      "Tempat pengolahan",
      "Gazebo",
    ],
  },
  {
    slug: "batik-tulis-ketindan",
    title: "Batik Tulis Ketindan",
    image: pengelolaan,
    description: "Batik tulis dengan motif khas Ketindan.",
    detailDescription:
      "Batik Tulis Ketindan adalah tempat dimana pengunjung dapat melihat langsung proses pembuatan batik tulis tradisional. Para pengrajin berpengalaman akan menunjukkan teknik membatik yang telah diwariskan turun-temurun, dengan motif-motif khas yang terinspirasi dari alam dan budaya Desa Ketindan.",
    location: "Kampung Batik Ketindan",
    category: "budaya",
    facilities: ["Workshop batik", "Galeri", "Toko souvenir", "Area parkir"],
  },
];
