import React, { useState, useEffect, useCallback } from "react";
import heroImage from "/src/assets/images/hero-section/tracking6.webp";
import heroImage2 from "/src/assets/images/hero-section/tracking7.jpg";
import heroImage3 from "/src/assets/images/hero-section/tracking3.jpg";
import heroImage4 from "/src/assets/images/hero-section/tracking4.jpg";
import heroImage5 from "/src/assets/images/hero-section/tracking5.jpg";

const SLIDES = [
  { src: heroImage, alt: "Tracking Vehicles" },
  { src: heroImage2, alt: "Tracking Vehicles" },
  { src: heroImage3, alt: "Tracking Vehicles" },
  { src: heroImage4, alt: "Tracking Vehicles Items" },
  { src: heroImage5, alt: "Tracking Vehicles" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  /* ───────── Mouse parallax ───────── */
  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 18,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ───────── Autoplay ───────── */
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden">

      {/* ───────── Carousel images ───────── */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === current ? 1 : 0,
              transform: `scale(1.04) translate(${mouse.x * 0.4}px, ${mouse.y * 0.4}px)`,
              transition: "opacity 1s ease-in-out, transform 0.5s ease-out",
            }}
          />
        ))}
      </div>

      {/* ───────── Light overlay – lets photos breathe ───────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-hero/40 via-transparent to-green-hero/50" />

      {/* ───────── Green glow orb ───────── */}
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* ───────── Dots navigation ───────── */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: i === current ? "28px" : "8px",
              background: i === current
                ? "linear-gradient(90deg, #2E7D32, #FACC15)"  /* bg-grad-primary – inlined for dot width transition */
                : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      {/* ───────── Animations ───────── */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: .2; }
          50%      { opacity: .45; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}