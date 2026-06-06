"use client";

import Image from "next/image";
import SkillsImg from "@/public/Skills.jpeg";

export default function Skills() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0 lg:mt-15">
      <div className="relative z-[2] w-full max-w-[1420px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-46 items-center px-6">

        {/* ── LEFT — heading + text ── */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center leading-none text-center gap-5 lg:ml-100">
            <span
              className="text-[#cc2222] mb-[-6px]"
              style={{
                fontFamily: "var(--font-greatvibes), cursive",
                fontSize: "clamp(24px, 3vw, 42px)"
              }}
            >
              personal
            </span>
            <span
              className="text-[#f5f2eb] font-semibold tracking-[0.14em]"
              style={{
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "clamp(50px, 6.5vw, 90px)"
              }}
            >
              SKILLS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <p className="text-white leading-relaxed text-base lg:text-lg font-bold lg:w-[900px] lg:mr-[80px]">
              I am a results-driven performance marketer focused on creating
              profitable digital growth systems for brands. My expertise spans the
              full digital landscape — from Meta Ads (Facebook &amp; Instagram)
              and Google Ads to SEO (Local &amp; International), Lead Generation,
              and E-commerce Conversion Campaigns. I also specialize in Funnel
              Strategy, Landing Page Optimization, Social Media Growth, WordPress
              Website Development, Google My Business Optimization, and Email
              &amp; WhatsApp Marketing.
            </p>

            <p className="text-white text-base lg:text-lg leading-relaxed font-bold lg:w-[900px]">
              But I don&apos;t just run ads. I go deeper — into customer
              psychology, CRM Integration, Email Marketing, and Lead Nurturing
              Strategy — because sustainable growth isn&apos;t just about clicks
              and impressions. It&apos;s about building systems that attract the
              right people, nurture them thro?ugh the journey, and convert them
              into loyal customers. Every campaign I build is rooted in data,
              driven by strategy, and designed to deliver measurable results that
              matter to your business.
            </p>
          </div>
        </div>

        {/* ── RIGHT — circular portrait ── */}
        <div className="flex items-center justify-center lg:ml-30">
          <div
            className="rounded-full overflow-hidden relative bg-[#1a0505]"
            style={{
              width: "clamp(200px, 40vw, 360px)",
              height: "clamp(200px, 40vw, 360px)"
            }}
          >
            <Image
              src={SkillsImg}
              alt="Profile photo"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
