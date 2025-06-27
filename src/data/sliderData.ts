import background from "../assets/trad.png";
import desawisata from "/desa wisata.jpg";
import gapura from "/gapura.jpg";
import kolam from "/kolam renang.jpg";
import prasasti from "/prasasti-katiden-1.jpg";

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
    title: "",
    description: "",
    imageUrl: background,
    alt: "Tradisi dan Warisan Leluhur Desa Ketindan",
  },
  {
    id: 2,
    title: "",
    description: "",
    imageUrl: desawisata,
    alt: "Alam dan Inovasi Desa Ketindan",
  },
  {
    id: 3,
    title: "",
    description: "",
    imageUrl: gapura,
    alt: "UMKM Desa Ketindan",
  },
  {
    id: 4,
    title: "",
    description: "",
    imageUrl: kolam,
    alt: "Wisata Budaya Desa Ketindan",
  },
  {
    id: 5,
    title: "",
    description: "",
    imageUrl: prasasti,
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
  // {
  //   id: "virtual-tour",
  //   label: "Tentang Kami",
  //   href: "/ketindantrad",
  //   isExternal: true,
  // },
];
