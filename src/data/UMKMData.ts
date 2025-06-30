import keripik from "/keripik arjuna.jpg";
import pia from "/Pia Naga.jpg";
import kopi from "/kopi.jpg";
import batik from "/batik tulis.png";
import wdang from "/wedang waras.jpg";

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
    description:
      "Keripik hasil olahan pertanian lokal Desa Ketindan, dirintis oleh Ibu Tarwiyah dengan rasa gurih dan renyah yang digemari banyak orang.",
    detailDescription:
      "Keripik Arjuna adalah salah satu produk UMKM unggulan Desa Ketindan yang telah dirintis oleh Ibu Tarwiyah sejak 12 tahun lalu, bermula dari modal Rp250.000. Awalnya hanya memproduksi keripik singkong, usaha ini kemudian berkembang dengan menambah varian seperti keripik pisang, nangka, dan talas. Bu Tarwiyah secara khusus menggunakan bahan baku dari Desa Ketindan sendiri, karena meyakini kontur tanah yang subur di desa menghasilkan cita rasa keripik yang lebih enak dan autentik. Produk Keripik Arjuna sangat populer dan distribusinya telah meluas hingga ke luar Desa Ketindan dan Kota Lawang melalui berbagai distributor. Usaha yang awalnya dirintis berdua dengan suami ini, kini telah mempekerjakan 4 orang karyawan, dengan kapasitas produksi mencapai 3 kuintal bahan mentah seperti singkong, talas, pisang, nangka setiap minggunya, menghasilkan sekitar 5 plastik besar keripik dengan berat masing-masing 12 kg.",
    category: "kuliner",
  },
  {
    slug: "pia-naga",
    title: "Pia Naga",
    image: pia,
    description:
      "Pia lembut dengan isian lezat, Pia Naga adalah kue tradisional khas Ketindan yang cocok sebagai buah tangan.",
    detailDescription:
      "Pia Naga adalah salah satu produk kuliner khas Desa Ketindan yang populer sebagai camilan dan oleh-oleh. Seperti pia pada umumnya, Pia Naga berbentuk bulat pipih dengan kulit yang renyah di luar namun lembut di dalam, serta diisi dengan berbagai varian rasa manis. Dibuat dengan menggunakan bahan-bahan pilihan berkualitas dan melalui proses pengolahan yang menjaga tradisi, Pia Naga menawarkan perpaduan cita rasa klasik dan sentuhan khas lokal. Produk ini mencerminkan keahlian dan dedikasi pelaku UMKM di Desa Ketindan dalam menghasilkan penganan yang nikmat dan berkualitas, menjadikannya pilihan sempurna untuk dinikmati bersama keluarga atau sebagai buah tangan yang berkesan.",
    category: "kuliner",
  },
  {
    slug: "batik-tulis-ketindan",
    title: "Batik Tulis Ketindan",
    image: batik,
    description:
      "Kain batik asli dengan motif khas Ketindan, dibuat melalui proses tulis tradisional oleh Ibu PKK desa.",
    detailDescription:
      "Batik Tulis Ketindan adalah perwujudan nyata dari seni dan kearifan lokal yang terukir di atas kain, dikelola oleh kelompok Ibu PKK di Desa Ketindan. Setiap helainya merupakan hasil karya tangan terampil yang penuh kesabaran dan ketelitian, menggunakan teknik tulis tradisional yang telah diwariskan secara turun-temurun. Motif-motif yang diaplikasikan pada Batik Tulis Ketindan terinspirasi dari kekayaan alam, flora, fauna, serta unsur-unsur budaya dan sejarah yang ada di Desa Ketindan, menjadikan setiap kain memiliki cerita dan keunikan tersendiri. Produk ini tidak hanya berfungsi sebagai pakaian atau dekorasi, tetapi juga sebagai medium untuk melestarikan nilai-nilai budaya dan memberdayakan perempuan desa, menjadikan setiap pembelian adalah dukungan langsung terhadap pelestarian seni tradisional dan ekonomi lokal.",
    // location: "Kampung Batik Ketindan",
    category: "budaya",
    // facilities: ["Workshop batik", "Galeri", "Toko souvenir", "Area parkir"],
  },
  {
    slug: "w-dang-waras",
    title: "W-dang Waras (Minuman Herbal Instan)",
    image: wdang,
    description:
      "Minuman herbal instan tradisional dengan bahan alami Temulawak dan Jahe, diproduksi oleh Kelompok Binar Ketindan.",
    detailDescription:
      "W-dang Waras adalah produk minuman herbal instan yang menawarkan kehangatan dan manfaat kesehatan alami dari rempah-rempah pilihan, yaitu Temulawak dan Jahe. Dikemas praktis dalam bentuk bubuk di dalam botol, W-dang Waras diproduksi secara higienis oleh 'Kelompok Binar' Ketindan, sebuah UMKM lokal yang berkomitmen menghadirkan produk berkualitas dari Desa Ketindan. Temulawak dikenal kaya akan manfaat untuk kesehatan pencernaan dan daya tahan tubuh, sementara Jahe memberikan kehangatan serta membantu meredakan mual dan pegal-pegal. W-dang Waras hadir sebagai solusi minuman sehat dan praktis yang siap diseduh kapan saja, mencerminkan kekayaan rempah alami yang dimiliki desa.",
    category: "kuliner & herbal",
  },
];
