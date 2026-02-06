import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import useScrollToHash from "@/hooks/useScrollToHash";
import OurClientsSection from "./sections/OurClientsSection";

function ClientsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollToHash();

  return (
    <>
      <SeoMetadata
        title="Our Clients | Al-Hilam Tracking"
        description="Al-Hilam Tracking is a leading provider of advanced fleet management and vehicle tracking solutions in Kenya, with a regional presence in Kampala."
        type="website"
        url="https://www.al-hilamtracking.co.ke/our-clients"
        ogImage="https://www.al-hilamtracking.co.ke/assets/og/tracking7.jpg"
        ogImageAlt="Al-Hilam Tracking brand showcasing advanced fleet management and vehicle tracking solutions."
      />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <OurClientsSection />
      </div>
    </>
  );
}

export default ClientsPage;
