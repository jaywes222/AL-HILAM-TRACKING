function MissionVisionSection() {
  const cards = [
    {
      title: "Our Mission",
      description: `To empower businesses and financial institutions through cutting-edge tracking technology,
      ensuring the safety, accountability, and efficient management of their vehicle assets.`,
      gradient: "from-primary to-green-header",
      line: "from-primary to-green-footer",
    },
    {
      title: "Our Vision",
      description: `To be the most trusted and preferred vehicle tracking and fleet management partner across the
      financial and logistics sectors, delivering smart solutions that enhance security, transparency, and
      control.`,
      gradient: "from-yellow-hero to-green-footer",
      line: "from-green-footer to-primary",
    },
    {
      title: "Our Strength",
      description: `At Al-Hilam Tracking, our strength lies in our innovative technology, reliability, and commitment to
      client satisfaction. With a robust tracking platform, experienced team, and seamless integration
      with mobile and desktop devices, we ensure real-time accuracy, data security, and operational
      efficiency for our clients.`,
      gradient: "from-primary to-green-header",
      line: "from-primary to-green-footer",
    },
    {
      title: "Our Goal",
      description: `To continuously improve and expand our services, providing reliable and innovative tracking
      solutions that support our clients’ operational and strategic objectives, while setting new
      standards in the tracking industry.`,
      gradient: "from-yellow-hero to-green-footer",
      line: "from-green-footer to-primary",
    },
  ];

  return (
    <section className="relative max-w-7xl w-full mx-auto py-12 md:py-16 px-4 md:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <h3 className="text-center font-bold text-xl md:text-3xl lg:text-4xl text-secondary">
          Our guiding{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-green-header bg-clip-text">
            purpose
          </span>{" "}
          and direction
        </h3>
        <p className="text-grey-neutral text-center max-w-2xl text-sm md:text-base">
          What drives us and where we are headed as Al-Hilam Tracking
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative bg-green-light border-2 border-grey-light rounded-2xl p-6 md:p-8
                       shadow-lg shadow-grey-light/50 transition-all duration-500
                       hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
            style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.15}s both` }}
          >
            <div className="flex flex-col gap-4">
              {/* Title */}
              <h4
                className={`font-bold text-lg md:text-xl text-transparent bg-gradient-to-r ${card.gradient} bg-clip-text`}
              >
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-grey-neutral text-sm md:text-base leading-relaxed">
                {card.description}
              </p>

              {/* Decorative Line */}
              <div
                className={`w-12 h-0.5 rounded-full bg-gradient-to-r ${card.line}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
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

export default MissionVisionSection;