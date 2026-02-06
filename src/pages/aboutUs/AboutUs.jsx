import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import {
  HeroSection,
  MissionVisionSection,
} from "./sections";
import useScrollToHash from "@/hooks/useScrollToHash";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollToHash();

  return (
    <>
      <SeoMetadata
        title="About Us | Al-Hilam Tracking"
        description="Al-Hilam Tracking is a leading provider of advanced fleet management and vehicle tracking solutions in Kenya, with a regional presence in Kampala."
        type="website"
        url="https://www.al-hilamtracking.co.ke/about-us"
        ogImage="https://www.al-hilamtracking.co.ke/assets/og/tracking7.png"
        ogImageAlt="Al-Hilam Tracking brand showcasing advanced fleet management and vehicle tracking solutions."
      />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <HeroSection />
        <MissionVisionSection />
      </div>
    </>
  );
}

export default AboutUs;
