import background from "../assets/trad.png";

export interface SlideData {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  alt: string;
}

export const heroSlides: SlideData[] = [
  {
    id: 1,
    title: "Jejak Tradisi dan Warisan Leluhur",
    description:
      "Desa Ketindan dalam lintasan sejarah dan budaya yang kaya akan nilai-nilai luhur.",
    imageUrl: background,
    alt: "Tradisi dan Warisan Leluhur Desa Ketindan",
  },
  {
    id: 2,
    title: "Alam dan Inovasi",
    description:
      "Keseimbangan harmonis antara kearifan lokal dan kemajuan modern.",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Alam dan Inovasi Desa Ketindan",
  },
  {
    id: 3,
    title: "UMKM Berkembang",
    description:
      "Produk lokal berkualitas tinggi yang mendunia dari tangan terampil warga Ketindan.",
    imageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    alt: "UMKM Desa Ketindan",
  },
  {
    id: 4,
    title: "Wisata Budaya",
    description:
      "Destinasi wisata yang memadukan keindahan alam dengan kekayaan budaya lokal.",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Wisata Budaya Desa Ketindan",
  },
  {
    id: 5,
    title: "Peninggalan Bersejarah",
    description:
      "Situs-situs bersejarah yang menjadi saksi bisu perjalanan panjang Desa Ketindan.",
    imageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    alt: "Peninggalan Bersejarah Desa Ketindan",
  },
];

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navigationItems: NavItem[] = [
  {
    id: "beranda",
    label: "Beranda",
    href: "#hero",
  },
  {
    id: "desa",
    label: "Desa",
    href: "#tentang",
  },
  {
    id: "sejarah",
    label: "Sejarah",
    href: "#sejarah",
  },
  {
    id: "peninggalan",
    label: "Peninggalan",
    href: "#peninggalan",
  },
  {
    id: "wisata",
    label: "Wisata",
    href: "#wisata",
  },
  {
    id: "umkm",
    label: "UMKM",
    href: "#umkm",
  },
  {
    id: "virtual-tour",
    label: "Tentang Kami",
    href: "/ketindantrad",
    isExternal: true,
  },
];
