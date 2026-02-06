import { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import TrackingDevicesSection from "./sections/TrackingDevicesSection";

function TrackingDevicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoMetadata
              title="Our Tracking Devices | Al-Hilam Tracking"
              description="Al-Hilam Tracking is a leading provider of advanced fleet management and vehicle tracking solutions in Kenya, with a regional presence in Kampala."
              type="website"
              url="https://www.al-hilamtracking.co.ke/tracking-devices"
              ogImage="https://www.al-hilamtracking.co.ke/assets/og/tracking7.png"
              ogImageAlt="Al-Hilam Tracking brand showcasing advanced fleet management and vehicle tracking solutions."
            />

      <div className="text-[#323433] max-w-[1440px] mx-auto">
        <TrackingDevicesSection />
      </div>
    </>
  );
}

export default TrackingDevicesPage;
