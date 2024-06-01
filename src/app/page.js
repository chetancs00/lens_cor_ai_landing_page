import DarkModeVideo from "@/components/DarkModeVideo";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroContainer from "@/components/HeroContainer";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import TruAi from "@/components/TruAi";
import WhyLens2 from "@/components/WhyLens2";
import OurVision from "@/components/OurVision";
import FaqSection from "@/components/Faq";
import WhyChooseLens from "@/components/WhyChooseLense";
import StatsSection from "@/components/Stats";
import OurBlogs from "@/components/OurBlogs";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import ConnectWithUs from "@/components/ConnectWithUs";

export default function Home() {

  return (
    <MaxWidthWrapper className="mb-12 text-center text-white bg-white dark:bg-black">
      <div className="relative w-full">
       <Navbar/>
      </div>
      <HeroContainer/>
      <AboutUs/>
      <Services/>
      <TruAi/>
      <WhyChooseLens/>
      <WhyLens2/>
      <OurVision/>
      <OurBlogs/>
      <Clients/>
      <StatsSection/>
      <FaqSection/>
      <ConnectWithUs/>
      <Footer/>
    </MaxWidthWrapper>
  );
}
