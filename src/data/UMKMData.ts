import keripik from "/keripik arjuna.jpg";
import pia from "/pia nagaa.jpg";
import kopi from "/kopi.jpg";
import batik from "/batik tulis.png";

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
    image: kopi,
    description: "Kopi berkualitas tinggi dari biji kopi lokal.",
    detailDescription:
      "Kopi Katinden merupakan produk kopi unggulan yang dihasilkan dari perkebunan kopi di Desa Ketindan. Biji kopi lokal ini diolah dengan metode semi-washed dan *honey process*, menghasilkan cita rasa khas yang telah dikenal luas. Produk Kopi Katinden ini dapat ditemukan dan dinikmati di Griya Kopi Katinden, sebuah outlet kopi lokal yang didirikan oleh Ibu Yani pada tahun 2021, yang juga menjadi pusat promosi dan penjualan kopi khas desa ini. Dukungan terhadap Kopi Katinden berarti turut serta dalam pengembangan ekonomi petani kopi lokal dan menjaga kualitas produk unggulan desa.",
    // location: "Kampung Kopi Katindan",
    category: "kuliner",
    // facilities: ["Area duduk indoor", "Teras outdoor", "WiFi", "Parkir"],
  },
  {
    slug: "keripik-arjuna",
    title: "Keripik Arjuna",
    image: keripik,
    description: "Keripik tradisional dengan cita rasa khas desa.",
    detailDescription:
      "Keripik Arjuna adalah usaha yang memproduksi keripik dari bahan-bahan alami, termasuk biji kopi, kacang, dan buah-buahan lokal.",
    // location: "Kampung Kopi Katindan",
    category: "kuliner",
    // facilities: ["Area duduk indoor", "Teras outdoor", "WiFi", "Parkir"],
  },
  {
    slug: "pia-naga",
    title: "Pia Naga",
    image: pia,
    description:
      "Pia Naga adalah usaha yang memproduksi pia dari bahan-bahan alami, termasuk biji kopi, kacang, dan buah-buahan lokal.",
    detailDescription:
      "Pia Naga adalah usaha yang memproduksi pia dari bahan-bahan alami, termasuk biji kopi, kacang, dan buah-buahan lokal.",
    // location: "Pia Naga",
    category: "kuliner",
    // facilities: [
    //   "Tour guide",
    //   "Area petik kopi",
    //   "Tempat pengolahan",
    //   "Gazebo",
    // ],
  },
  {
    slug: "batik-tulis-ketindan",
    title: "Batik Tulis Ketindan",
    image: batik,
    description: "Batik tulis dengan motif khas Ketindan.",
    detailDescription:
      "Batik Tulis Ketindan adalah tempat dimana pengunjung dapat melihat langsung proses pembuatan batik tulis tradisional. Para pengrajin berpengalaman akan menunjukkan teknik membatik yang telah diwariskan turun-temurun, dengan motif-motif khas yang terinspirasi dari alam dan budaya Desa Ketindan.",
    // location: "Kampung Batik Ketindan",
    category: "budaya",
    // facilities: ["Workshop batik", "Galeri", "Toko souvenir", "Area parkir"],
  },
];
