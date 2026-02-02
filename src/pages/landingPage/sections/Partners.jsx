import React from "react";
import { partners } from "../data";

function Partners() {
  return (
    <section
      id="partners"
      className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-6 mb-12 md:mb-16">
          {/* Badge */}
          <div
            className="inline-flex items-center justify-center"
            style={{ animation: "fadeInUp 0.6s ease-out" }}
          >
            <div className="group relative px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <span className="relative text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Trusted Partnerships
              </span>
            </div>
          </div>

          {/* Title with Decorative Lines */}
          <div
            className="w-full flex flex-row items-center gap-4 md:gap-6"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>

            <h2 className="text-center text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text px-4">
              Our Esteemed Partners
            </h2>

            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
          </div>

          {/* Subtitle */}
          <p
            className="text-gray-600 text-center max-w-2xl text-sm md:text-base"
            style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
          >
            Building success through strategic collaborations with industry leaders
          </p>
        </div>

        {/* Partners Grid */}
        <div
          className="relative"
          style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}
        >
          {/* Desktop View - Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {partners.map(({ id, img, name }, index) => (
              <div
                key={id}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.05}s both`,
                }}
              >
                {/* Card Container */}
                <div className="relative h-32 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Logo */}
                  <div className="relative h-full w-full flex items-center justify-center p-6">
                    <img
                      src={img}
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      alt={name}
                      loading="lazy"
                    />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10"></div>
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                    {name}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Horizontal Scroll */}
          <div className="md:hidden relative">
            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable Container */}
            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 px-4">
              <div className="flex gap-4 pb-4 min-w-max">
                {partners.map(({ id, img, name }, index) => (
                  <div
                    key={id}
                    className="group relative flex-shrink-0"
                    style={{
                      animation: `slideInRight 0.6s ease-out ${0.8 + index * 0.05}s both`,
                    }}
                  >
                    {/* Card Container */}
                    <div className="relative w-40 h-28 rounded-2xl bg-white border border-gray-200 active:border-blue-300 transition-all duration-300 active:shadow-lg active:shadow-blue-500/10 overflow-hidden">
                      {/* Gradient Background on Active */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-active:opacity-100 transition-opacity duration-300"></div>

                      {/* Logo */}
                      <div className="relative h-full w-full flex items-center justify-center p-5">
                        <img
                          src={img}
                          className="max-h-full max-w-full object-contain grayscale group-active:grayscale-0 transition-all duration-300"
                          alt={name}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Hint */}
            <div className="flex justify-center mt-6 gap-2 items-center text-gray-400 text-xs">
              <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Swipe to see more</span>
              <svg className="w-4 h-4 animate-bounce-horizontal animation-delay-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          style={{ animation: "fadeInUp 0.6s ease-out 1s both" }}
        >
          {[
            { icon: "🤝", label: "Strategic Partners", value: partners.length },
            { icon: "🌍", label: "National Reach", value: "10+ Counties" },
            { icon: "⭐", label: "Partnership Years", value: "5+ Combined" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </div>
          ))}
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-horizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-5px);
          }
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default Partners;