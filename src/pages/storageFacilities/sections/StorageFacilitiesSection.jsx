/* eslint-disable react/prop-types */

import { storageServicesData } from "./data";

function StorageFacilitiesSection() {
  return (
    <section
      id="storage-facilities"
      className="relative max-w-7xl w-full mx-auto flex flex-col items-center gap-8 md:gap-10
                 pt-[160px] sm:pt-[180px] md:pt-[200px] lg:pt-[220px] pb-12 md:pb-16
                 scroll-mt-[160px] sm:scroll-mt-[180px] md:scroll-mt-[200px] lg:scroll-mt-[220px]"
    >

      {/* ── Section Header (mirrors WhatWeDo header) ── */}
      <div className="flex flex-col items-center gap-4 px-4">
        <h3 className="w-full max-w-3xl text-center font-bold text-xl md:text-3xl lg:text-4xl leading-tight">
          Secure, professional{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
            vehicle storage
          </span>{" "}
          you can trust.
        </h3>
        <p className="text-gray-600 text-center max-w-2xl text-sm md:text-base">
          Northern Kenya Storage — your licensed storage yard and sale facility in Garissa,
          purpose-built for auctioneers, businesses, and individuals.
        </p>
      </div>

      {/* ── Quick-Info Cards (3-up, same card shell as WhatWeDo) ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full px-4 md:px-8 gap-6 md:gap-8">
        {storageServicesData.quickInfo.map((info, i) => (
          <QuickInfoCard key={i} index={i} value={info.value} label={info.label} />
        ))}
      </div>

      {/* ── Main Services (exact same grid + card pattern as WhatWeDo) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-8 gap-6 md:gap-8">
        {storageServicesData.services.map((service, i) => (
          <ServiceCard key={i} index={i} title={service.title} description={service.description} />
        ))}
      </div>

      {/* ── Contact & Offices (two-col, same spacing rhythm) ── */}
      <div className="w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-2">
        <ContactBlock
          index={0}
          heading="Talk to Us"
          lines={[
            { label: "Tel", value: "0723 261 696" },
            { label: "Email", value: "northernkenyastorage@gmail.com" },
          ]}
        />
        <ContactBlock
          index={1}
          heading="Registered Offices"
          lines={[
            { label: null, value: "P.O Box 70100, Garissa" }
          ]}
        />
      </div>

      {/* ── Company Profile (single full-width card) ── */}
      <div className="w-full px-4 md:px-8">
        <ProfileCard />
      </div>
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────
   QuickInfoCard — stat-style card, uses the same
   shell as WhatWeDo cards but centres the value
   ───────────────────────────────────────────── */
function QuickInfoCard({ index, value, label }) {
  return (
    <div
      className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6
                 flex flex-col items-center justify-center text-center gap-1
                 shadow-lg shadow-gray-200/50
                 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/50"
      style={{ animation: `fadeInUp 0.6s ease-out ${0.15 + index * 0.1}s both` }}
    >
      {/* large value */}
      <h3
        className={`font-bold text-2xl md:text-3xl ${
          index % 2 === 0
            ? "text-transparent bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text"
            : "text-transparent bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text"
        }`}
      >
        {value}
      </h3>

      {/* label */}
      <p className="text-gray-600 text-sm md:text-base">{label}</p>

      {/* decorative line */}
      <div
        className={`w-12 h-0.5 rounded-full mt-2 ${
          index % 2 === 0
            ? "bg-gradient-to-r from-blue-500 to-purple-500"
            : "bg-gradient-to-r from-purple-500 to-blue-500"
        }`}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   ServiceCard — 1:1 match to WhatWeDoCard
   ───────────────────────────────────────────── */
function ServiceCard({ index, title, description }) {
  return (
    <div
      className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6
                 flex flex-col justify-between gap-4
                 shadow-lg shadow-gray-200/50
                 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/50"
      style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` }}
    >
      <div className="flex flex-col gap-4">
        {/* title */}
        <h4
          className={`font-bold capitalize text-lg md:text-xl ${
            index % 2 === 0
              ? "text-transparent bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text"
              : "text-transparent bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text"
          }`}
        >
          {title}
        </h4>

        {/* description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>

        {/* decorative line */}
        <div
          className={`w-12 h-0.5 rounded-full ${
            index % 2 === 0
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : "bg-gradient-to-r from-purple-500 to-blue-500"
          }`}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ContactBlock — same card shell, left-aligned
   content with label : value rows
   ───────────────────────────────────────────── */
function ContactBlock({ index, heading, lines }) {
  return (
    <div
      className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6
                 flex flex-col gap-3
                 shadow-lg shadow-gray-200/50
                 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/50"
      style={{ animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.12}s both` }}
    >
      {/* heading */}
      <h4
        className={`font-bold text-lg md:text-xl ${
          index % 2 === 0
            ? "text-transparent bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text"
            : "text-transparent bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text"
        }`}
      >
        {heading}
      </h4>

      {/* rows */}
      <div className="flex flex-col gap-1.5">
        {lines.map((line, j) => (
          <p key={j} className="text-gray-600 text-sm md:text-base">
            {line.label && (
              <span className="font-semibold text-gray-700">{line.label}: </span>
            )}
            {line.value}
          </p>
        ))}
      </div>

      {/* decorative line */}
      <div
        className={`w-12 h-0.5 rounded-full mt-1 ${
          index % 2 === 0
            ? "bg-gradient-to-r from-blue-500 to-purple-500"
            : "bg-gradient-to-r from-purple-500 to-blue-500"
        }`}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   ProfileCard — full-width single card for the
   company profile copy
   ───────────────────────────────────────────── */
function ProfileCard() {
  const paragraphs = [
    "The Company was incorporated in March 2025 as a licensed storage yard in Kenya. We operate with professionalism and strict compliance with the Auctioneers Act and other applicable laws. Our facility provides storage for all types of motor vehicles and a sale yard accessible to auctioneers, businesses, and individuals.",
    "Insurance: Cover of 20,000,000 KES and professional indemnity cover of 10,000,000 KES from Pioneers Insurance. Political Violence Cover: 3,500,000 KES.",
    "Staff includes Marketing Manager Beatrice Mueni, Office Manager Abdulkadir Hussein, yard attendants, and security guards ensuring safety 24/7.",
    "We are committed to building strong, transparent, and lasting relationships with our clients and partners.",
  ];

  return (
    <div
      className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8
                 flex flex-col gap-4
                 shadow-lg shadow-gray-200/50
                 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/50"
      style={{ animation: "fadeInUp 0.6s ease-out 0.55s both" }}
    >
      {/* heading */}
      <h4 className="font-bold text-lg md:text-xl text-transparent bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text">
        Company Profile
      </h4>

      {/* paragraphs */}
      <div className="flex flex-col gap-3">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-gray-600 text-sm md:text-base leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* decorative line */}
      <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-1" />
    </div>
  );
}

export default StorageFacilitiesSection;