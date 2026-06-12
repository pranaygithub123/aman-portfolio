"use client";

import Image from "next/image";
import Project1 from "@/public/Google Ads.jpeg";
import Project2 from "@/public/MetaAds.jpeg";

export default function RecentProjects() {
  return (
    <section className="relative w-full bg-[#0a0a0a] flex flex-col items-center justify-center py-16 px-6">
      {/* ── Title ── */}
      <h2 className="font-[family-name:var(--font-cinzel)] text-[clamp(28px,5vw,64px)] font-bold tracking-widest mb-4 text-center">
        <span className="text-[#CC0000]">RECENT </span>
        <span className="text-white">PROJECTS</span>
      </h2>

      {/* ── Subtitle ── */}
      <p className="text-white font-[poppins] text-center max-w-2xl mb-12 text-justify">
        Executed data-driven Google Ads and Meta Ads campaigns across global
        markets, helping businesses generate quality leads, improve conversions,
        and achieve sustainable growth.
      </p>

      {/* ── Images stacked vertically ── */}
      <div className="w-full max-w-[1100px] flex flex-col gap-6">
        {/* Image 1 */}
        <div className="flex flex-col gap-3 group">
          <div className="relative w-full overflow-hidden rounded-sm">
            <Image
              src={Project1}
              alt="Recent Project 1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
          <div className="flex flex-col gap-1 border-l-2 border-[#CC0000] pl-4">
            <span className="font-[poppins] text-white font-semibold text-sm tracking-wide">
              Project Title: Google Ads Campaign
            </span>
            <span className="text-white font-bold text-sm tracking-wide">
              USA MARKET
            </span>
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col gap-3 group">
          <div className="relative w-full overflow-hidden rounded-sm">
            <Image
              src={Project2}
              alt="Recent Project 2"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
          <div className="flex flex-col gap-1 border-l-2 border-[#CC0000] pl-4">
            <span className="font-[poppins] text-white font-semibold text-sm tracking-wide">
              Project Title: Meta Ads Campaign
            </span>
            <span className="text-white font-bold text-sm tracking-wide">
               INDIA & UAE Markets
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
