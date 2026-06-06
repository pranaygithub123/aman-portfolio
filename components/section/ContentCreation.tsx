"use client";

import Image from "next/image";

import Img1 from "@/public/Content Image 1.webp";
import Img2 from "@/public/Content Image 2.webp";
import Img3 from "@/public/Content Image 3.webp";
import Img4 from "@/public/Content Image 4.webp";
import Img5 from "@/public/Content Image 5.jpg.jpeg";
import Img6 from "@/public/Content Image 6.jpg.jpeg";
import Img7 from "@/public/Content Image 7.jpeg";
import Img8 from "@/public/Content Image 8.jpg.jpeg";
import Img9 from "@/public/Content Image 9.jpg.jpeg";
import Img10 from "@/public/Content Image 10.webp";
import Img11 from "@/public/Content 11.jpg.jpeg";
import Img12 from "@/public/Content Image 12.webp";

const rows = [
  [Img1, Img2, Img11],
  [Img4, Img5, Img6],
  [Img7, Img8, Img9],
  [Img10, Img12, Img3]
];

const OFFSET = 40;
const GAP = 20; 

function Card({ src, alt, offset }: { src: any; alt: string; offset: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-sm group w-full aspect-[4/5]"
      style={{ transform: `translateY(${offset}px)` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="transition-transform duration-500 group-hover:scale-105 rounded-lg"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  );
}

export default function ContentCreation() {
  return (
    <section className="relative w-full bg-[#0a0a0a] flex flex-col items-center justify-center py-16 px-4 ">
      {/* ── Title ── */}
      <h2
        className="text-[clamp(28px,5vw,64px)] font-bold tracking-widest mb-16 text-center"
        style={{ fontFamily: "var(--font-cinzel), serif" }}
      >
        <span className="text-[#CC0000]">CONTENT</span>{" "}
        <span className="text-white">CREATION</span>
      </h2>

      <div
        className="w-full max-w-[860px] flex flex-col"
        style={{ paddingBottom: OFFSET }}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-3 gap-3"
            style={{
              marginTop: rowIndex === 0 ? 0 : GAP
            }}
          >
            {/* Side left — always DOWN */}
            <Card
              src={row[0]}
              alt={`Content ${rowIndex * 3 + 1}`}
              offset={OFFSET}
            />
            {/* Middle — always 0 */}
            <Card src={row[1]} alt={`Content ${rowIndex * 3 + 2}`} offset={0} />
            {/* Side right — always DOWN */}
            <Card
              src={row[2]}
              alt={`Content ${rowIndex * 3 + 3}`}
              offset={OFFSET}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
