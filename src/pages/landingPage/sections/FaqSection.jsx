import { FAQ } from "../../../components";
import { questions } from "../data";

function FaqSection() {
  return (
    <section className="relative w-full max-w-7xl mx-auto flex flex-col items-center gap-12 md:gap-16 px-4 py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Section Header */}
      <div className="relative flex flex-col items-center gap-6 w-full max-w-2xl text-center">
        {/* Main Title */}
        <div
          className="space-y-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
        >
          <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Got{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                Questions?
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
            </span>
          </h3>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re a new client looking to understand our recovery
            services or an existing partner needing an update on your cases,
            we&apos;ve got you covered.
          </p>
        </div>

        {/* Quick Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-4"
          style={{ animation: "fadeInUp 0.6s ease-out 0.4s both" }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">{questions.length}+ Common Questions</span>
          </div>

          <div className="w-px h-6 bg-gray-300"></div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">24/7 Support Available</span>
          </div>
        </div>
      </div>

      {/* FAQ Component Container */}
      <div
        className="relative w-full max-w-4xl"
        style={{ animation: "fadeInUp 0.6s ease-out 0.6s both" }}
      >
        {/* Decorative Side Elements */}
        <div className="absolute -left-8 top-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent rounded-full opacity-20 hidden lg:block"></div>
        <div className="absolute -right-8 top-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-purple-500 to-transparent rounded-full opacity-20 hidden lg:block"></div>

        <FAQ questions={questions} />
      </div>

      {/* Bottom CTA Section */}
      <div
        className="relative w-full max-w-4xl mt-8"
        style={{ animation: "fadeInUp 0.6s ease-out 0.8s both" }}
      >
        {/* CTA Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 p-[2px]">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

          {/* Inner Content */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left space-y-3">
                <h4 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Still have questions?
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Can&apos;t find the answer you&apos;re looking for? Our team is here to help you.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@alhilam.co.ke"
                  className="group/btn relative inline-flex overflow-hidden px-6 py-3 rounded-xl
             bg-gradient-to-r from-blue-600 to-purple-600
             text-white font-semibold
             shadow-lg shadow-blue-500/30
             hover:shadow-xl hover:shadow-blue-500/40
             transition-all duration-300"
                  aria-label="Email Al-Hilam Auctioneers"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Us
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </a>


                <a
                  href="tel:+254113091409"
                  className="group/btn relative inline-flex overflow-hidden px-6 py-3 rounded-xl bg-white border-2 border-gray-200 text-gray-700 font-semibold hover:border-blue-300 transition-all duration-300"
                  aria-label="Call Al-Hilam Auctioneers Support"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Support
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </a>

              </div>
            </div>
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

export default FaqSection;