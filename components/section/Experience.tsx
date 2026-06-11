"use client";
import { useEffect, useRef, useState } from "react";
import Experience1 from "@/public/Experience1.png";
import Experience2 from "@/public/Experience2.png";
import Image from "next/image";

const highlights = [
  "Managed Meta Ads & Google Ads campaigns across Real Estate, Travel CRM, and Service-Based industries.",
  "Generated qualified B2B and B2C leads through performance marketing strategies.",
  "Improved online visibility through SEO and Local SEO optimization.",
  "Executed WhatsApp Marketing & Email Marketing campaigns to enhance customer engagement.",
  "Worked with Travel CRM brands to drive lead generation and business growth.",
  "Analyzed and optimized campaign performance to maximize ROI and conversions."
];

const skills = [
  "Meta Ads",
  "Google Ads",
  "Lead Generation",
  "SEO",
  "Local SEO",
  "WhatsApp Marketing",
  "Email Marketing",
  "Performance Marketing"
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
     className="relative w-full bg-[#0a0a0a] flex items-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
    
      <div className="max-w-6xl w-full mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
        {/* ── LEFT: Overlapping Image Collage ── */}
        <div
          className={`relative h-[480px] transition-all duration-[800ms] ease-out
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          {/* Red corner marks */}
          <span className="absolute -top-1 -left-1 w-25 h-25 border-t-2 border-l-2 border-red-600 z-20" />
          <span className="absolute -bottom-1 -right-1 w-25 h-25 border-b-2 border-r-2 border-red-600 z-20" />

          {/* Back image — top left */}
          <div
            className="absolute top-0 left-0 w-[68%] h-[56%] overflow-hidden z-[1]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 82%, 86% 100%, 0 100%)"
            }}
          >
            {/* Left white line */}
            <span className="absolute top-0 left-0 w-[2px] h-full bg-white z-10" />
            {/* Right white line */}
            <span className="absolute top-0 right-0 w-[2px] h-full bg-white z-10" />

            <Image
              src={Experience1}
              alt="Digital Marketing Professional"
              fill
              sizes="35vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Front image — bottom right */}
          <div
            className="absolute bottom-0 right-0 w-[68%] h-[56%] overflow-hidden z-[2]"
            style={{
              clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%, 0 18%)"
            }}
          >
            {/* Left white line */}
            <span className="absolute top-0 left-0 w-[2px] h-full bg-white z-10" />
            {/* Right white line */}
            <span className="absolute top-0 right-0 w-[2px] h-full bg-white z-10" />

            <Image
              src={Experience2}
              alt="Build Your Brand"
              fill
              sizes="35vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex flex-col">
          {/* Heading */}
          <h2
            className={`font-[family-name:var(--font-cinzel)] text-[clamp(32px,6vw,64px)] font-bold leading-none uppercase tracking-widest text-white text-justify mb-4
    transition-all duration-700 delay-200
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Work
            <span className="block text-red-600">Experience</span>
          </h2>

          {/* Red divider */}
          <div
            className={`w-12 h-[3px] bg-red-600 mb-5
              transition-all duration-700 delay-200
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          />

          {/* Role */}
          <p
            className={`text-[14px] font-semibold uppercase tracking-[1.5px] text-white mb-3
              transition-all duration-700 delay-300
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Performance Marketing Specialist
          </p>

          {/* Description */}
          <p
            className={`text-sm text-white leading-relaxed font-[poppins] uppercase tracking-wide mb-5
              transition-all duration-700 delay-300 text-justify
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Performance marketer with 3+ years of experience helping businesses
            generate high-quality leads and increase revenue through strategic
            digital marketing campaigns.
          </p>

          {/* Highlights label */}
          <p
            className={`text-[16px] font-bold tracking-[2px] uppercase text-white mb-2
              transition-all duration-700 delay-[400ms]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            Key Highlights
          </p>

          {/* Highlights list */}
          <ul
            className={`list-none p-0 m-0 mb-5
              transition-all duration-700 delay-[400ms]
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {highlights.map((item, i) => (
              <li
                key={i}
                className="relative pl-[18px] py-[2px] sm:py-[5px] text-[11px] sm:text-[12px] font-[poppins] text-white text-justify uppercase border-b border-[#1a1a1a] last:border-b-0"
              >
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-red-600"
                  style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div
            className={`pt-4 border-t border-[white] flex flex-wrap gap-2
              transition-all duration-700 delay-500
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-[poppins] tracking-[1px] uppercase text-white border border-white bg-[#110303] px-[10px] py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
