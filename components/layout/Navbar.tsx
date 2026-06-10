"use client";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="absolute top-4 sm:top-8 md:top-12 lg:top-55 left-0 right-0 z-[200] flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-6 py-4 sm:py-5 md:py-6 mx-0 md:ml-10 lg:ml-30 lg:mr-40">
      <span className="font-body text-[8px] sm:text-xs md:text-sm font-medium tracking-[0.15em] text-white uppercase truncate max-w-[45%] sm:max-w-[50%] md:max-w-none">
        {PERSONAL_INFO.name}
      </span>

      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="font-body text-[8px] sm:text-xs md:text-sm font-normal tracking-[0.05em] text-white no-underline transition-opacity duration-200 hover:text-white/100 truncate max-w-[50%] md:max-w-none text-right lowercase"
      >
        {PERSONAL_INFO.email}
      </a>
    </nav>
  );
}
