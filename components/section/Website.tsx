"use client";

import Image from "next/image";

import Web1 from "@/public/Goprop SS-fotor-2026053017484.png";
import Web2 from "@/public/Kalyan machine web site.png";
import Web3 from "@/public/TravBizz Website.png";
import Web4 from "@/public/Rumours Clothing.png";
import Web5 from "@/public/B3rg Website .png";
import Web6 from "@/public/Vedansha Website .png";
import Web7 from "@/public/All India Ulama E Islam NGO.png";
import Web8 from "@/public/Makhana Machines .png";

const images = [
  { src: Web1, alt: "Website 1" },
  { src: Web2, alt: "Website 2" },
  { src: Web3, alt: "Website 3" },
  { src: Web4, alt: "Website 4" },
  { src: Web5, alt: "Website 5" },
  { src: Web6, alt: "Website 6" },
  { src: Web7, alt: "Website 7" },
  { src: Web8, alt: "Website 8" }
];

function Card({ src, alt }: { src: any; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-sm group w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  );
}

export default function Website() {
  return (
    <section className="relative w-full bg-[#0a0a0a] flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4">
      {/* ── Title ── */}
      <h2
        className="text-[clamp(28px,5vw,64px)] font-bold tracking-widest mb-10 sm:mb-16 text-center"
        style={{ fontFamily: "var(--font-cinzel), serif" }}
      >
        <span className="text-[#CC0000]">WEBSITE </span>
        <span className="text-white">DEVELOPMENT</span>
      </h2>

      <div className="w-full max-w-[1100px] flex flex-col gap-3 sm:gap-4">
        {/* ── Row 1: 1 col mobile → 3 col sm+ ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.slice(0, 3).map((img, i) => (
            <Card key={i} src={img.src} alt={img.alt} />
          ))}
        </div>

        {/* ── Row 2: 1 col mobile → 3 col sm+ ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.slice(3, 6).map((img, i) => (
            <Card key={i} src={img.src} alt={img.alt} />
          ))}
        </div>

        {/* ── Row 3: 1 col mobile → 2 col sm+ centered ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-full sm:max-w-[730px] mx-auto w-full">
          {images.slice(6, 8).map((img, i) => (
            <Card key={i} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
