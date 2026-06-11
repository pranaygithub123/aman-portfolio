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
    <section className="relative w-full flex items-center py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0a0a0a]">
      {" "}
      <div className="relative z-[2] w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-100 items-center px-4 sm:px-6 md:px-10 lg:px-8">
        {/* ── LEFT — image + heading ── */}
        <div className="relative flex items-end justify-center">
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-50 z-[100] leading-none">
            <span
              className="font-[family-name:var(--font-cinzel)] block text-[#cc2222] font-semibold"
              style={{
                fontSize: "clamp(16px, 2.5vw, 38px)",
                letterSpacing: "0.08em"
              }}
            >
              ABOUT
            </span>
            <span
              className="font-[family-name:var(--font-cinzel)] block text-[#f5f2eb] ml-6 sm:ml-8 font-semibold"
              style={{
                fontSize: "clamp(28px, 5vw, 80px)",
                letterSpacing: "0.1em",
                lineHeight: 1
              }}
            >
              EDUCATION
            </span>
          </div>

          {/* Mobile/tablet — natural height, no crop */}
          <div className="relative w-full overflow-hidden lg:hidden">
            <Image
              src={EduImg}
              alt="Education photo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover object-top transition-transform duration-500 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>

          {/* Desktop — fixed height with fill */}
          <div
            className="relative w-full overflow-hidden hidden lg:block"
            style={{ height: "clamp(320px, 45vw, 560px)" }}
          >
            <Image
              src={EduImg}
              alt="Education photo"
              fill
              className="object-cover object-top scale-125 transition-transform duration-500 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>
        </div>

        {/* ── RIGHT — education cards ── */}
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {educationData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 border-l-2 border-[#cc2222] pl-4 sm:pl-5"
            >
              <span
                className="text-[#f5f2eb] font-semibold leading-snug"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "clamp(11px, 1.8vw, 15px)",
                  letterSpacing: "0.04em"
                }}
              >
                {item.degree}
              </span>
              <span
                className="text-[#cc2222] font-semibold"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "clamp(10px, 1.5vw, 13px)",
                  letterSpacing: "0.06em"
                }}
              >
                {item.school}
              </span>
              <span
                className="text-white font-semibold"
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "clamp(9px, 1.2vw, 12px)",
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
