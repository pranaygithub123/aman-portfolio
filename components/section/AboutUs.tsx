"use client";
import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/constants";
import About from "@/public/About_image.png";

export default function AboutUs() {
  return (
    <>
      {/* ── Section 1 — Hero role ── */}
      <section className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-4">
        <h1 className="font-[poppins] text-[clamp(36px,10vw,160px)] font-semibold text-[#f0ece4] leading-none tracking-wide text-center mb-6 lg:mb-12">
          {PERSONAL_INFO.role}
        </h1>
        <div className="flex flex-col items-center gap-2 w-full max-w-xl text-center px-4">
          <p className="font-[poppins] text-[clamp(10px,1.5vw,16px)] tracking-[0.2em] text-white capitalize">
            {PERSONAL_INFO.tagline}
          </p>
          <p className="font-body font-[poppins] text-[clamp(10px,1.2vw,14px)] tracking-[0.1em] text-white uppercase leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </section>

      {/* ── Section 2 — About Me ── */}
      <section className="relative w-full bg-[#0a0a0a] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 xl:px-24 gap-8 lg:gap-6 xl:gap-14 py-12 lg:py-20">

        {/* Portrait */}
        <div className="relative w-[180px] sm:w-[240px] lg:w-[340px] xl:w-[400px] shrink-0 aspect-[3/4] rounded-sm overflow-hidden">
          <Image
            src={About}
            alt="About_Image"
            fill
            className="object-cover object-top grayscale"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left w-full max-w-2xl">
          <h2 className="font-[family-name:var(--font-cinzel)] text-[clamp(40px,8vw,120px)] leading-none font-semibold">
            <span className="text-[#f0ece4]">ABOUT </span>
            <span className="text-[#CC0000]">ME</span>
          </h2>

          <p className="text-[clamp(12px,1.4vw,18px)] text-white leading-7 tracking-wide w-full font-[poppins]">
            I am a results-driven performance marketer focused on creating
            profitable digital growth systems for brands. My expertise spans the
            full digital landscape — from Meta Ads (Facebook & Instagram) and
            Google Ads to SEO (Local & International), Lead Generation, and
            E-commerce Conversion Campaigns. I also specialize in Funnel
            Strategy, Landing Page Optimization, Social Media Growth, WordPress
            Website Development, Google My Business Optimization, and Email &
            WhatsApp Marketing. But I don't just run ads. I go deeper — into
            customer psychology, CRM Integration, Email Marketing, and Lead
            Nurturing Strategy — because sustainable growth isn't just about
            clicks and impressions. It's about building systems that attract the
            right people, nurture them through the journey, and convert them
            into loyal customers. Every campaign I build is rooted in data,
            driven by strategy, and designed to deliver measurable results that
            matter to your business.
          </p>

          <div className="w-16 h-px bg-[#CC0000]" />

          <p className="font-bold text-[clamp(10px,1.2vw,14px)] tracking-[0.15em] text-white">
            {PERSONAL_INFO.email}
          </p>
        </div>
      </section>
    </>
  );
}