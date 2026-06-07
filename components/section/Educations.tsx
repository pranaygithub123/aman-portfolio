"use client";

import Image from "next/image";
import EduImg from "@/public/Aman_Education.png";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Manipal University Jaipur",
    detail: "Graduating Year 2026"
  },
  {
    degree: "XII (ISC) – Senior Secondary Education",
    school: "Assisi Convent School",
    detail: "87% | 2022"
  },
  {
    degree: "X (ICSE) – Secondary Education",
    school: "Assisi Convent School",
    detail: "79% | 2020"
  }
];

export default function Education() {
  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-10 lg:-mt-20">
      <div className="relative z-[2] w-full max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-100 items-center px-6 lg:px-8">
        {/* ── LEFT — image + heading ── */}
        <div className="relative flex items-end justify-center">
          <div className="absolute bottom-8 lg:bottom-50 z-[100] leading-none">
            {/* ABOUT — font-display, red, italic */}
            <span
              className="font-[family-name:var(--font-cinzel)] block text-[#cc2222] font-semibold "
              style={{
                fontSize: "clamp(20px, 3vw, 38px)",
                letterSpacing: "0.08em"
              }}
            >
              ABOUT
            </span>

            <span
              className="font-[family-name:var(--font-cinzel)] block text-[#f5f2eb] ml-8 font-semibold"
              style={{
                fontSize: "clamp(36px, 6vw, 80px)",
                letterSpacing: "0.1em",
                lineHeight: 1
              }}
            >
              EDUCATION
            </span>
          </div>

          <div
            className="relative w-full overflow-hidden"
            style={{ height: "clamp(280px, 50vw, 560px)" }}
          >
            <Image
              src={EduImg}
              alt="Education photo"
              fill
              className="object-cover scale-125 transition-transform duration-500 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>
        </div>

        {/* ── RIGHT — education cards ── */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {educationData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 border-l-2 border-[#cc2222] pl-5"
            >
              <span
                className="text-[#f5f2eb] font-semibold leading-snug"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "clamp(11px, 1.2vw, 15px)",
                  letterSpacing: "0.04em"
                }}
              >
                {item.degree}
              </span>
              <span
                className="text-[#cc2222] font-semibold"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "clamp(10px, 1vw, 13px)",
                  letterSpacing: "0.06em"
                }}
              >
                {item.school}
              </span>
              <span
                className="text-white font-semibold"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "clamp(9px, 0.9vw, 12px)",
                  letterSpacing: "0.05em"
                }}
              >
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
