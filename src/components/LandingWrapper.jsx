/* eslint-disable react/prop-types */
import React from "react";
import { cn } from "../utilities/utils";

function LandingWrapper({ children, title, bgColored = false }) {
  return (
    <section
      className={cn(
        "relative flex flex-col gap-8 md:gap-12 overflow-hidden",
        bgColored 
          ? "bg-gradient-to-b from-blue-50/30 via-purple-50/20 to-blue-50/30 py-16 md:py-24" 
          : "my-12 md:my-20"
      )}
    >
      {/* Background Elements for bgColored sections */}
      {bgColored && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      )}

      {/* Section Header */}
      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-row items-center gap-3 md:gap-4">
          {/* Left Line */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
          
          {/* Title Badge */}
          <div className="group relative inline-flex items-center">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Badge */}
            <div className="relative px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-blue-50 via-white to-purple-50 border-2 border-blue-200/50 shadow-lg shadow-blue-500/10 group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500">
              <h2 className="min-w-fit text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                {title}
              </h2>
            </div>
          </div>
          
          {/* Right Line */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {children}
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default LandingWrapper;