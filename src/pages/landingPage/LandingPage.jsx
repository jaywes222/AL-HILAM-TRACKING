import useScrollToHash from "@/hooks/useScrollToHash";
import LandingWrapper from "../../components/LandingWrapper";
import SeoMetadata from "../../components/SeoMetadata";
import ScrollToTop from "../../utilities/ScrollToTop";
import {
  // FaqSection,
  // FeatureSection,
  HeroSection,
  // Partners,
  // WhatWeDo,
} from "./sections";

// const components = [
//   {
//     title: "what we do",
//     component: <WhatWeDo />,
//   },
//   {
//     title: "faq",
//     component: <FaqSection />,
//   },
// ];

function LandingPage() {

  useScrollToHash();
  
  return (
    <>
      <SeoMetadata
        title="Al-Hilam Tracking - Advanced Fleet Management and Vehicle Tracking Solutions"
        description="Al-Hilam Tracking is a leading provider of advanced fleet management and vehicle tracking solutions in Kenya, with a regional presence in Kampala."
        type="website"
        url="https://www.al-hilamtracking.co.ke"
        ogImage="https://www.al-hilamtracking.co.ke/assets/og/tracking7.jpg"
        ogImageAlt="Al-Hilam Tracking brand showcasing advanced fleet management and vehicle tracking solutions."
      />
      <div className="w-screen overflow-x-hidden bg-white">
        <ScrollToTop />
        <HeroSection />
        {/* <Partners />
        <FeatureSection />
        {components.map(({ component, title }) => (
          <LandingWrapper key={title} title={title}>
            {component}
          </LandingWrapper>
        ))} */}
      </div>
    </>
  );
}

export default LandingPage;