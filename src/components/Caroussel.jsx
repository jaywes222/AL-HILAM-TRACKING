import PropTypes from "prop-types";
import { useRef } from "react";
import { FaBriefcase, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiArrowCircleLeft, PiArrowCircleRight } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Caroussel({ CarousselData }) {
  const carouselRef = useRef(null);

  const scroll = (offset) => {
    carouselRef.current.scrollLeft += offset;
  };

  return (
    <div className="w-full">
      {/* Cards */}
      <div
        ref={carouselRef}
        className="grid gap-8 overflow-x-auto scrollbar-hide py-4"
        style={{
          gridAutoFlow: "column",
          gridAutoColumns: "minmax(320px, 360px)",
        }}
      >
        {CarousselData.map(
          ({ name, title, image, linkedin, twitter }) => (
            <div
              key={name}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl
                         shadow-lg shadow-gray-200/50
                         hover:shadow-xl hover:shadow-blue-500/10
                         hover:border-blue-300/50
                         transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <LazyLoadImage
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                {/* Name */}
                <h4 className="font-bold text-lg md:text-xl text-transparent bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text">
                  {name}
                </h4>

                {/* Role */}
                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <FaBriefcase className="text-blue-500" />
                  {title}
                </p>

                {/* Decorative Line */}
                <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-2">
                  {linkedin?.username && (
                    <a
                      href={linkedin.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg
                                 bg-blue-500/10 text-blue-600
                                 hover:bg-blue-500/20 transition"
                    >
                      <FaLinkedinIn />
                    </a>
                  )}

                  {twitter?.username && (
                    <a
                      href={twitter.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg
                                 bg-gray-500/10 text-gray-700
                                 hover:bg-gray-500/20 transition"
                    >
                      <FaXTwitter />
                      <span className="text-xs font-medium">
                        {twitter.username}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 pt-6">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scroll(-380)}
        >
          <PiArrowCircleLeft className="size-14 text-blue-600 hover:text-blue-500 transition" />
        </button>

        <button
          type="button"
          aria-label="Next"
          onClick={() => scroll(380)}
        >
          <PiArrowCircleRight className="size-14 text-blue-600 hover:text-blue-500 transition" />
        </button>
      </div>
    </div>
  );
}

Caroussel.propTypes = {
  CarousselData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      linkedin: PropTypes.object,
      twitter: PropTypes.object,
    })
  ).isRequired,
};

export default Caroussel;
