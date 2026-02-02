import React from "react";

function FeatureSection() {
  const features = [
    {
      id: 1,
      title: "Listen",
      description:
        "Gather all information about the vehicle and debtor, including tracking data, movement history, and public inquiries, to understand the situation before taking action.",
      icon: (
        <svg
          width={69}
          height={66}
          viewBox="0 0 69 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.7"
            cx={49}
            cy={46}
            r="19.75"
            stroke="#1E88E5"
            strokeWidth="0.5"
          />
          <circle opacity="0.2" cx={42} cy={46} r={20} fill="#1E88E5" />
          <path
            d="M58 42H56V18C56 16.4087 55.3679 14.8826 54.2426 13.7574C53.1174 12.6321 51.5913 12 50 12H14C12.4087 12 10.8826 12.6321 9.75736 13.7574C8.63214 14.8826 8 16.4087 8 18V42H6C5.46957 42 4.96086 42.2107 4.58579 42.5858C4.21071 42.9609 4 43.4696 4 44V48C4 49.5913 4.63214 51.1174 5.75736 52.2426C6.88258 53.3679 8.4087 54 10 54H54C55.5913 54 57.1174 53.3679 58.2426 52.2426C59.3679 51.1174 60 49.5913 60 48V44C60 43.4696 59.7893 42.9609 59.4142 42.5858C59.0391 42.2107 58.5304 42 58 42ZM12 18C12 17.4696 12.2107 16.9609 12.5858 16.5858C12.9609 16.2107 13.4696 16 14 16H50C50.5304 16 51.0391 16.2107 51.4142 16.5858C51.7893 16.9609 52 17.4696 52 18V42H12V18ZM56 48C56 48.5304 55.7893 49.0391 55.4142 49.4142C55.0391 49.7893 54.5304 50 54 50H10C9.46957 50 8.96086 49.7893 8.58579 49.4142C8.21071 49.0391 8 48.5304 8 48V46H56V48ZM38 22C38 22.5304 37.7893 23.0391 37.4142 23.4142C37.0391 23.7893 36.5304 24 36 24H28C27.4696 24 26.9609 23.7893 26.5858 23.4142C26.2107 23.0391 26 22.5304 26 22C26 21.4696 26.2107 20.9609 26.5858 20.5858C26.9609 20.2107 27.4696 20 28 20H36C36.5304 20 37.0391 20.2107 37.4142 20.5858C37.7893 20.9609 38 21.4696 38 22Z"
            fill="#1E88E5"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      id: 2,
      title: "Strategize",
      description:
        "Plan a coordinated recovery approach for one or multiple vehicles, assessing contingencies and aligning with the bank officer for the best course of action.",
      icon: (
        <svg
          width={69}
          height={66}
          viewBox="0 0 69 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.9077 9.97265C61.8792 9.48337 61.6719 9.02161 61.3254 8.67504C60.9788 8.32847 60.517 8.12123 60.0277 8.09265C47.0877 7.34265 36.6977 11.2777 32.2327 18.6477C29.2827 23.5202 29.2877 29.4377 32.1927 35.0827C30.5392 37.0511 29.3308 39.3536 28.6502 41.8327L24.5827 37.7502C26.5377 33.6677 26.4627 29.4127 24.3327 25.8777C21.0327 20.4302 13.4152 17.5102 3.95774 18.0652C3.46845 18.0937 3.00669 18.301 2.66012 18.6475C2.31355 18.9941 2.10631 19.4559 2.07774 19.9452C1.52024 29.4027 4.44274 37.0202 9.89024 40.3202C11.6879 41.4185 13.7536 41.9998 15.8602 42.0002C17.905 41.975 19.9179 41.4905 21.7502 40.5827L28.0002 46.8327V54.0002C28.0002 54.5306 28.211 55.0393 28.586 55.4144C28.9611 55.7894 29.4698 56.0002 30.0002 56.0002C30.5307 56.0002 31.0394 55.7894 31.4144 55.4144C31.7895 55.0393 32.0002 54.5306 32.0002 54.0002V46.6277C31.9913 43.4459 33.0741 40.3574 35.0677 37.8777C37.6401 39.222 40.493 39.9414 43.3952 39.9777C46.2012 39.9867 48.955 39.2202 51.3527 37.7627C58.7227 33.3027 62.6677 22.9127 61.9077 9.97265ZM11.9527 36.9002C8.11774 34.5777 5.94774 29.0802 6.00024 22.0002C13.0802 21.9402 18.5777 24.1177 20.9002 27.9527C22.1127 29.9527 22.3102 32.2852 21.5152 34.6877L15.4127 28.5852C15.0346 28.2259 14.5311 28.0286 14.0096 28.0353C13.4881 28.0419 12.9898 28.2521 12.621 28.6209C12.2522 28.9897 12.042 29.488 12.0354 30.0095C12.0287 30.531 12.226 31.0345 12.5852 31.4127L18.6877 37.5152C16.2852 38.3102 13.9552 38.1127 11.9527 36.9002ZM49.2802 34.3452C45.9302 36.3727 41.9927 36.5277 37.9927 34.8452L51.4152 21.4202C51.7745 21.042 51.9718 20.5385 51.9651 20.017C51.9584 19.4955 51.7483 18.9972 51.3795 18.6284C51.0107 18.2596 50.5124 18.0495 49.9909 18.0428C49.4694 18.0361 48.9659 18.2334 48.5877 18.5927L35.1627 32.0002C33.4727 28.0002 33.6252 24.0602 35.6627 20.7127C39.1477 14.9627 47.4127 11.7577 57.9952 12.0052C58.2352 22.5852 55.0352 30.8602 49.2802 34.3452Z"
            fill="#1E88E5"
          />
          <circle
            opacity="0.7"
            cx={49}
            cy={46}
            r="19.75"
            stroke="#1E88E5"
            strokeWidth="0.5"
          />
          <circle opacity="0.2" cx={42} cy={46} r={20} fill="#1E88E5" />
        </svg>
      ),
      color: "purple",
    },
    {
      id: 3,
      title: "Execute",
      description:
        "Recover the vehicle following bank instructions, issue notices, document the process, and deliver comprehensive reports with photographs, booking forms, and invoices.",
      icon: (
        <svg
          width={69}
          height={67}
          viewBox="0 0 69 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.6852 16.621C48.2384 13.1666 45.803 10.2169 42.685 8.1423C39.567 6.06774 35.9054 4.96094 32.1602 4.96094C28.4151 4.96094 24.7535 6.06774 21.6355 8.1423C18.5174 10.2169 16.082 13.1666 14.6352 16.621C11.5216 18.0629 8.883 20.3616 7.02797 23.2481C5.17295 26.1347 4.17825 29.4898 4.16023 32.921C4.13273 42.626 12.0002 50.721 21.6952 50.971C24.628 51.0476 27.5348 50.4029 30.1602 49.0935V58.971C30.1602 59.5015 30.3709 60.0102 30.746 60.3852C31.1211 60.7603 31.6298 60.971 32.1602 60.971C32.6907 60.971 33.1994 60.7603 33.5744 60.3852C33.9495 60.0102 34.1602 59.5015 34.1602 58.971V49.0935C36.6447 50.3326 39.3839 50.9754 42.1602 50.971H42.6252C52.3202 50.721 60.1877 42.631 60.1602 32.926C60.1435 29.4939 59.1493 26.1376 57.2942 23.25C55.4391 20.3624 52.7998 18.063 49.6852 16.621ZM42.5227 46.971C39.6344 47.0516 36.7927 46.2302 34.3927 44.621C34.3144 44.571 34.2369 44.5235 34.1602 44.4785V34.206L45.0552 28.761C45.2903 28.6435 45.4999 28.4808 45.6721 28.2823C45.8443 28.0837 45.9757 27.8532 46.0588 27.6039C46.1419 27.3546 46.1751 27.0913 46.1565 26.8292C46.1378 26.567 46.0678 26.3111 45.9502 26.076C45.8327 25.841 45.67 25.6313 45.4715 25.4591C45.2729 25.287 45.0424 25.1555 44.7931 25.0724C44.5438 24.9893 44.2805 24.9561 44.0184 24.9748C43.7562 24.9934 43.5003 25.0635 43.2652 25.181L34.1602 29.736V22.971C34.1602 22.4406 33.9495 21.9319 33.5744 21.5568C33.1994 21.1817 32.6907 20.971 32.1602 20.971C31.6298 20.971 31.1211 21.1817 30.746 21.5568C30.3709 21.9319 30.1602 22.4406 30.1602 22.971V35.736L21.0552 31.181C20.5805 30.9437 20.0309 30.9046 19.5274 31.0724C19.0238 31.2403 18.6076 31.6013 18.3702 32.076C18.1329 32.5508 18.0938 33.1003 18.2616 33.6039C18.4295 34.1074 18.7905 34.5237 19.2652 34.761L30.1602 40.206V44.471C30.0819 44.516 30.0044 44.5635 29.9277 44.6135C27.528 46.224 24.6867 47.0479 21.7977 46.971C18.6358 46.892 15.5938 45.7447 13.1673 43.7159C10.7407 41.6871 9.0727 38.8964 8.43491 35.7985C7.79711 32.7005 8.22714 29.4779 9.65493 26.6556C11.0827 23.8333 13.4241 21.5776 16.2977 20.256C17.2066 19.8396 17.9251 19.0961 18.3102 18.1735C19.4518 15.4452 21.3745 13.1152 23.8366 11.4765C26.2986 9.83779 29.1902 8.96348 32.1477 8.96348C35.1053 8.96348 37.9968 9.83779 40.4589 11.4765C42.9209 13.1152 44.8436 15.4452 45.9852 18.1735C46.3703 19.0961 47.0889 19.8396 47.9977 20.256C50.8713 21.5776 53.2127 23.8333 54.6405 26.6556C56.0683 29.4779 56.4983 32.7005 55.8605 35.7985C55.2228 38.8964 53.5547 41.6871 51.1282 43.7159C48.7017 45.7447 45.6597 46.892 42.4977 46.971H42.5227Z"
            fill="#1E88E5"
          />
          <circle
            opacity="0.7"
            cx="48.8398"
            cy={47}
            r="19.75"
            stroke="#1E88E5"
            strokeWidth="0.5"
          />
          <circle opacity="0.2" cx="41.8398" cy={47} r={20} fill="#1E88E5" />
        </svg>
      ),
      color: "blue",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative px-4 py-8 mx-auto max-w-7xl">
        {/* Top Badge */}
        <div className="flex justify-center mb-12" style={{ animation: "fadeInUp 0.6s ease-out" }}>
          <div className="group relative inline-flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative px-8 py-3 rounded-full bg-gradient-to-r from-blue-50 via-white to-purple-50 border-2 border-blue-200/50 shadow-lg shadow-blue-500/10">
              <span className="text-sm font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                How We Work
              </span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="flex flex-col items-center w-full gap-8 mb-16">
          <h3
            className="text-2xl md:text-4xl lg:text-5xl leading-tight font-bold max-w-4xl text-center"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            Fostering{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                competence
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
            </span>{" "}
            and{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text">
                professionalism
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
            </span>{" "}
            in asset recovery for individuals and financial institutions.
          </h3>
        </div>

        {/* Feature Cards */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-6 w-full">
          {features.map((feature, index) => (
            <React.Fragment key={feature.id}>
              {/* Feature Card */}
              <div
                className="group relative w-full max-w-sm"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.2}s both`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 ${
                    feature.color === "blue"
                      ? "bg-gradient-to-r from-blue-500/30 to-blue-400/30"
                      : "bg-gradient-to-r from-purple-500/30 to-purple-400/30"
                  }`}
                ></div>

                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl border border-gray-200 group-hover:border-gray-300 transition-all duration-500 shadow-xl shadow-gray-200/50 group-hover:shadow-2xl group-hover:shadow-blue-500/10 overflow-hidden">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      feature.color === "blue"
                        ? "bg-gradient-to-br from-blue-50/50 to-purple-50/30"
                        : "bg-gradient-to-br from-purple-50/50 to-blue-50/30"
                    }`}
                  ></div>

                  {/* Content */}
                  <div className="relative p-8 md:p-10 flex flex-col items-center gap-6">
                    {/* Icon Container */}
                    <div className="relative">
                      {/* Icon Background */}
                      <div
                        className={`absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${
                          feature.color === "blue"
                            ? "bg-blue-500/30"
                            : "bg-purple-500/30"
                        }`}
                      ></div>

                      {/* Icon */}
                      <div className="relative w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        {feature.icon}
                      </div>

                      {/* Step Number */}
                      <div
                        className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg ${
                          feature.color === "blue"
                            ? "bg-gradient-to-br from-blue-500 to-blue-600"
                            : "bg-gradient-to-br from-purple-500 to-purple-600"
                        }`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Title */}
                    <h4
                      className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text ${
                        feature.color === "blue"
                          ? "bg-gradient-to-r from-blue-600 to-blue-400"
                          : "bg-gradient-to-r from-purple-600 to-purple-400"
                      }`}
                    >
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-blue-400 transition-colors duration-500"></div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${
                      feature.color === "blue"
                        ? "bg-gradient-to-r from-blue-500 via-blue-400 to-purple-400"
                        : "bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400"
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                </div>
              </div>

              {/* Connector - Desktop Only */}
              {index < features.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center flex-shrink-0"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${0.6 + index * 0.2}s both`,
                  }}
                >
                  <div className="relative w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}

              {/* Connector - Mobile */}
              {index < features.length - 1 && (
                <div
                  className="lg:hidden flex justify-center"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${0.6 + index * 0.2}s both`,
                  }}
                >
                  <div className="relative w-1 h-12 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 rounded-full">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              )}
            </React.Fragment>
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

export default FeatureSection;