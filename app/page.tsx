import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import AboutUs from "@/components/section/AboutUs";
import AmanCoverImage from "@/public/AmanCover.jpeg";
import Skills from "@/components/section/Skills";
import Education from "@/components/section/Educations";
import Experience from "@/components/section/Experience";
import ContentCreation from "@/components/section/ContentCreation";
import SeoInsights from "@/components/section/SeoInsights";
import Website from "@/components/section/Website";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      {/* Black header bar */}
      <div className="sticky top-0 z-100 w-full h-16 sm:h-32 md:h-60 bg-black" />
      <Navbar />
      <Image src={AmanCoverImage} alt="CoverImage" className="w-full" />
      <AboutUs />
      <Skills />
      <Education />
      <Experience />
      <ContentCreation />
      <SeoInsights />
      <Website />
      <Footer />
    </div>
  );
}
