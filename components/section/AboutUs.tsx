"use client";
import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/constants";
import About from "@/public/About_image.png";

export default function AboutUs() {
  return (
    <>
      {/* ── Section 1 — Hero role ── */}
      <section className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-4">
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(48px,14vw,160px)] text-[#f0ece4] leading-none tracking-wide text-center mb-8 lg:mb-12">
          {PERSONAL_INFO.role}
        </h1>
        <div className="flex flex-col items-center gap-1 max-w-xl text-center font-bold px-4">
          <p className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.2em] text-white capitalize">
            {PERSONAL_INFO.tagline}
          </p>
          <p className="font-body text-sm tracking-[0.12em] text-white uppercase leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </section>

      {/* ── Section 2 — About Me ── */}
      <section className="relative w-full bg-[#0a0a0a] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 xl:px-30 gap-10 lg:gap-20 xl:gap-100 py-20 lg:py-32">
        {/* Portrait */}
        <div className="relative w-[220px] sm:w-[280px] lg:w-[380px] xl:w-[460px] shrink-0 aspect-[3/4] rounded-sm overflow-hidden">
          <Image
            src={About}
            alt="About_Image"
            fill
            className="object-cover object-top grayscale"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left w-full max-w-lg">
          <h2 className="font-display text-[clamp(52px,10vw,120px)] leading-none">
            <span className="text-[#f0ece4]">ABOUT </span>
            <span className="text-[#CC0000]">ME</span>
          </h2>

          <p className="font-semibold text-sm text-white leading-relaxed lg:w-[500px]">
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

          <p className="font-bold text-sm tracking-[0.15em] text-white">
            {PERSONAL_INFO.email}
          </p>
        </div>
      </section>
    </>
  );
}