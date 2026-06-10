"use client";

import Image from "next/image";
import { PERSONAL_INFO } from "@/lib/constants";
import FooterImage from "@/public/Footer Image Final.png";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0a] overflow-hidden px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-0">

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#CC0000]" />

      <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

        {/* ── LEFT — contact links ── */}
        <div className="flex flex-col gap-4 sm:gap-5 justify-center h-full pt-4">

          {/* Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#CC0000] transition-colors shrink-0">
              <Mail size={14} className="text-white" />
            </span>
            <span className="text-white underline underline-offset-2 tracking-wide text-xs sm:text-sm font-medium break-all">
              {PERSONAL_INFO.email}
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#CC0000] transition-colors shrink-0">
              <Phone size={14} className="text-white" />
            </span>
            <span className="text-white underline underline-offset-2 tracking-wide text-xs sm:text-sm font-medium">
              {PERSONAL_INFO.phone}
            </span>
          </a>

          {/* Instagram */}
          <a
            href={PERSONAL_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#CC0000] transition-colors shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
              </svg>
            </span>
            <span className="text-white underline underline-offset-2 tracking-wide text-xs sm:text-sm font-medium break-all">
              {PERSONAL_INFO.instagram}
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#CC0000] transition-colors shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" fill="white" />
                <circle cx="4" cy="4" r="2" fill="white" />
              </svg>
            </span>
            <span className="text-white underline underline-offset-2 tracking-wide text-xs sm:text-sm font-medium break-all">
              {PERSONAL_INFO.linkedin}
            </span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/40 flex items-center justify-center shrink-0">
              <MapPin size={14} className="text-white" />
            </span>
            <span className="text-white tracking-wide text-xs sm:text-sm font-medium">
              {PERSONAL_INFO.location}
            </span>
          </div>

        </div>

        {/* ── RIGHT — profile image + paragraph ── */}
        <div className="relative flex flex-col items-center lg:items-end gap-6">

          {/* Profile Image */}
          <div className="relative w-[180px] sm:w-[220px] lg:w-[260px]">
            <div
              className="absolute inset-0 z-0 scale-125"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, #CC0000 0%, transparent 65%)",
                filter: "blur(18px)",
                opacity: 0.55,
              }}
            />
            <Image
              src={FooterImage}
              alt="Profile"
              width={260}
              height={300}
              className="relative z-10 object-cover object-top w-full h-auto"
            />
          </div>

          {/* Description */}
          <p className="text-white text-[10px] sm:text-[11px] tracking-[0.08em] leading-relaxed text-justify max-w-xs uppercase font-medium px-4 sm:px-0">
            If you&apos;re looking for a dedicated digital marketer to manage
            your social media presence, create engaging content, and build a
            consistent brand identity, feel free to get in touch. I&apos;d be
            happy to discuss how we can work together to achieve your business
            goals.
          </p>

        </div>
      </div>

      {/* ── GET IN TOUCH ── */}
      <div className="relative max-w-[1100px] text-center mx-auto mt-6 sm:mt-8">
        <h2
          className="text-[clamp(36px,8vw,130px)]"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          <span className="text-white">GET IN </span>
          <span className="text-[#CC0000]">TOUCH</span>
        </h2>
      </div>

    </footer>
  );
}