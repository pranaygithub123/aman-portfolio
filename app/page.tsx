import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import AboutUs from "@/components/section/AboutUs";
import AmanCoverImage from "@/public/AmanCover.jpeg";
import AmanProfile from "@/public/AmanProfile.png";
import Profile from "@/public/profile.svg";
import Image1 from "@/public/Image.svg";
// import Skills from "@/components/section/Skills";
import Education from "@/components/section/Educations";
import Experience from "@/components/section/Experience";
import RecentProject from "@/components/section/RecentProject";
import ContentCreation from "@/components/section/ContentCreation";
import SeoInsights from "@/components/section/SeoInsights";
import Website from "@/components/section/Website";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black">
      {/* Black header bar */}
      <div className="sticky top-0 z-100 w-full h-16 sm:h-20 md:h-32 lg:h-60 bg-black" />
      <Navbar />
      <Image src={Image1} alt="CoverImage" className="w-full" />
      <div className="flex flex-col w-full gap-0">
        <AboutUs />
        {/* <Skills /> */}
        <Education />
        <Experience />
        <RecentProject />
        <ContentCreation />
        <SeoInsights />
        <Website />
        <Footer />
      </div>
    </div>
  );
}
