import React from "react";
import { trackingDevices } from "./data";

function TrackingDevicesSection() {
  return (
    <section
      id="tracking-devices"
      className="relative pt-[180px] sm:pt-[200px] md:pt-[220px] lg:pt-[240px] pb-16 scroll-mt-[180px] sm:scroll-mt-[200px] md:scroll-mt-[220px] lg:scroll-mt-[240px] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-light via-blue-light to-blue-light"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-hero/5 rounded-full blur-3xl"></div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12 md:mb-16">
          <div
            className="w-full flex flex-row items-center gap-4 md:gap-6"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-grey-light to-grey-light"></div>
            <h2 className="text-center text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-secondary via-grey-dark to-secondary bg-clip-text px-4">
              Devices
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-grey-light to-grey-light"></div>
          </div>

          <p
            className="text-grey-neutral text-center max-w-2xl text-sm md:text-base"
            style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
          >
            Explore our range of tracking devices and get in touch to learn more
          </p>
        </div>

        {/* Devices Grid */}
        <div className="relative" style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {trackingDevices.map(({ id, img, name }, index) => (
              <DeviceCard key={id} img={img} name={name} index={index} />
            ))}
          </div>

          {/* Mobile Vertical Stack */}
          <div className="md:hidden flex flex-col gap-4">
            {trackingDevices.map(({ id, img, name }, index) => (
              <DeviceCard key={id} img={img} name={name} index={index} mobile />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

function DeviceCard({ img, name, index, mobile }) {
  return (
    <div
      className={`group relative ${mobile ? "w-full" : ""}`}
      style={{ animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.2}s both` }}
    >
      <div className="relative w-full rounded-2xl bg-blue-light border border-grey-light overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10 flex flex-col">
        {/* Image container */}
        <div className={`relative w-full ${mobile ? "h-44" : "h-48"} flex items-center justify-center p-2`}>
          <img
            src={img}
            alt={name}
            className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
        </div>

        {/* Text and button */}
        <div className="p-4 flex flex-col gap-2 mt-auto">
          <h3 className="text-sm md:text-base font-semibold text-grey-dark">{name}</h3>
          <a
            href="tel:+254723261696"
            className="mt-2 px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-green-header transition-colors duration-300 text-center w-full"
          >
            Contact Company
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrackingDevicesSection;
