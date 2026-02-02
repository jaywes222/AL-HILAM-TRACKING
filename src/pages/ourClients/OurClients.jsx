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
        title="Our Partners | Al-Hilam Auctioneers"
        description="Meet our trusted partners who collaborate with Al-Hilam Auctioneers to deliver top-notch auctioneering, storage, and asset recovery solutions across Kenya."
        type="website"
        url="https://www.alhilamauctions.com/partners"
        ogImage="https://www.alhilamauctions.com/assets/og/partners-og.png"
        ogImageAlt="Al-Hilam Auctioneers trusted partners"
      />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <OurClientsSection />
      </div>
    </>
  );
}

export default ClientsPage;
