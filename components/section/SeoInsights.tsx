"use client";

import Image from "next/image";

import Img1 from "@/public/All India Ulama E Islam NGO 1.jpg.jpeg";
import Img2 from "@/public/Goprop SEO 1.jpg.jpeg";
import Img3 from "@/public/Kalyan Machine SEO 1.jpg.jpeg";
import Img4 from "@/public/Makhana Machine SEO 1.jpg.jpeg";
import Img5 from "@/public/Real estate agent SEO 1.jpg.jpeg";
import Img6 from "@/public/Travbizz SEO 1.jpg.jpeg";

const rows = [
  [Img1, Img2, Img3],
  [Img4, Img5, Img6],
];

function Card({ src, alt }: { src: any; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-sm group w-full aspect-[16/6]">
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

export default function SeoInsights() {
  return (
    <section className="relative w-full bg-[#0a0a0a] flex flex-col items-center justify-center py-16 px-4">

      {/* ── Title ── */}
      <h2
        className="text-[clamp(28px,5vw,64px)] font-bold tracking-widest mb-16 text-center"
        style={{ fontFamily: "var(--font-cinzel), serif" }}
      >
        <span className="text-[#CC0000]">SEO</span>{" "}
        <span className="text-white">INSIGHTS</span>
      </h2>

      {/* ── 2 rows × 3 images ── */}
      <div className="w-full max-w-[1100px] flex flex-col gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {row.map((img, colIndex) => (
              <Card
                key={colIndex}
                src={img}
                alt={`SEO Insight ${rowIndex * 3 + colIndex + 1}`}
              />
            ))}
          </div>
        ))}
      </div>

    </section>
  );
}