import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { id: 1, link: "Home", route: "/" },
  { id: 2, link: "About Us", route: "/about-us" },
  { id: 3, link: "Our Services", route: "/our-services" },
  { id: 4, link: "Our Tracking Devices", route: "/tracking-devices" },
  { id: 5, link: "Our Clients", route: "/our-clients" },
  { id: 6, link: "Contact / Branches", route: "/contact-us" },
];

function Header() {
  const [showNavlinks, setShowNavlinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowNavlinks(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-secondary backdrop-blur border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-10 h-9 flex items-center justify-end gap-6 text-xs text-grey-mild">
          <a href="tel:+254113091409" className="hover:text-white transition-colors">
            +254 723 261 696
          </a>
          <a href="tel:+254723261696" className="hover:text-white transition-colors">
            +254 113 091 409
          </a>
          <a
            href="mailto:info.alhilam@gmail.com"
            className="text-green-footer hover:text-white transition-colors"
          >
            info.alhilam@gmail.com
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-secondary/90 backdrop-blur-lg shadow-2xl shadow-black/30 transition-all duration-500">
        <header className="py-5 md:py-6 md:px-10 px-5 flex items-center justify-between max-w-[1440px] mx-auto relative">

          {/* Top glow line */}
          <div
            className={`absolute top-0 left-0 right-0 h-px bg-glow-primary transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-70"
            }`}
          />

          {/* Logo */}
          <Link to="/" className="relative z-10 group">
            <h1 className="font-bold text-xl md:text-2xl tracking-tight text-white transition-all duration-300">
              Al-Hilam Tracking
            </h1>
            {/* Underline: primary → footer yellow */}
            <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-grad-primary group-hover:w-full transition-all duration-500" />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden z-10">
            <button
              aria-label={showNavlinks ? "Close menu" : "Open menu"}
              onClick={() => setShowNavlinks(!showNavlinks)}
              className={`w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 ${
                showNavlinks
                  ? "bg-yellow-hero/20 border border-yellow-hero/40"
                  : "bg-black/40 border border-white/20 hover:bg-black/60"
              }`}
            >
              {showNavlinks ? (
                <AiOutlineClose className="text-green-footer h-5 w-5" />
              ) : (
                <HiOutlineMenuAlt4 className="text-white h-5 w-5" />
              )}
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="md:flex hidden items-center gap-2">
            {navLinks.map(({ id, link, route }) => {
              const isActive = pathname === route || pathname.startsWith(`${route}/`);

              return (
                <Link
                  key={id}
                  to={route}
                  className="relative group px-4 py-2.5 rounded-lg transition-all duration-300"
                >
                  {/* Background pill */}
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-grad-active-bg border border-primary/35"
                        : "group-hover:bg-white/5 border border-transparent"
                    }`}
                  />

                  {/* Link text */}
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-green-footer" : "text-grey-mild"
                    }`}
                  >
                    {link}
                  </span>

                  {/* Active underline */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-grad-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile nav */}
          <nav
            className={`md:hidden absolute top-full left-0 w-full bg-secondary/95 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-all duration-500 origin-top ${
              showNavlinks
                ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="p-6 space-y-2">
              {navLinks.map(({ link, route, id }, index) => {
                const isActive = pathname === route || pathname.startsWith(`${route}/`);

                return (
                  <Link
                    key={id}
                    to={route}
                    onClick={() => setShowNavlinks(false)}
                    style={{
                      animation: showNavlinks
                        ? `slideInLeft 0.4s ease-out ${index * 0.05}s both`
                        : "none",
                    }}
                    className={`block px-5 py-3.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-grad-active-bg-mobile border border-primary/45"
                        : "hover:bg-white/10 border border-transparent hover:border-white/10"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        isActive ? "text-green-footer" : "text-grey-mild"
                      }`}
                    >
                      {link}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-glow-primary-soft" />
            <p className="text-center text-xs text-grey-darker py-4">
              Professional Auctioneers & Asset Recovery
            </p>
          </nav>
        </header>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Header;