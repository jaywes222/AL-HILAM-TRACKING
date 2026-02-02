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
        title="Al-Hilam Auctioneers - Professional Asset Recovery & Auctioneering Services"
        description="Al-Hilam Auctioneers is Kenya's leading specialist in motor vehicle repossession, auctioneering & commission agents. Serving individuals and financial institutions with competence and professionalism since 1995."
        type="website"
        url="https://www.alhilam.co.ke/"
        ogImage="https://www.alhilam.co.ke/og-image.png"
        ogImageAlt="Al-Hilam Auctioneers - Professional Auctioneers & Asset Recovery Specialists"
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