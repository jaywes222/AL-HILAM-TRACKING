/* eslint-disable react/prop-types */

const featuresData = [
  {
    id: 1,
    title: "Real-Time Vehicle Monitoring 24/7",
    description: "Track exact vehicle location and view complete movement history around the clock with our advanced GPS tracking system.",
  },
  {
    id: 2,
    title: "Remote Engine Control",
    description: "Stop and restart the engine remotely via SMS or app in case of theft. Remote immobilization significantly increases recovery chances.",
  },
  {
    id: 3,
    title: "Detailed Daily Status Reports",
    description: "Comprehensive reports showing distance traveled, speed, stop points, and stopping time to help you monitor driver behavior and fleet efficiency.",
  },
  {
    id: 4,
    title: "Geo-Fencing Alerts",
    description: "Create virtual geographic boundaries and receive instant alerts when a vehicle exits the designated area, ensuring operational compliance.",
  },
  {
    id: 5,
    title: "Internal Backup Battery",
    description: "Built-in backup battery keeps the tracking device functional even when the main car battery is disconnected or removed.",
  },
  {
    id: 6,
    title: "User-Friendly Web & Mobile Access",
    description: "Access your fleet data through our intuitive web portal and mobile applications supporting both Android and iOS platforms.",
  },
  {
    id: 7,
    title: "Wide Range of Alerts & Alarms",
    description: "Stay informed with overspeed alerts, battery disconnection notifications, power cut-out warnings, and tamper alerts for complete security.",
  },
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative max-w-7xl w-full mx-auto flex flex-col items-center gap-8 md:gap-10
                 pt-[120px] sm:pt-[140px] md:pt-[160px] pb-12 md:pb-16"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 px-4">
        <h3 className="w-full max-w-3xl text-center font-bold text-xl md:text-3xl lg:text-4xl leading-tight text-secondary">
          Powerful features built for{" "}
          <span className="text-transparent bg-gradient-to-r from-primary to-green-header bg-clip-text">
            complete fleet control
          </span>
        </h3>

        <p className="text-grey-neutral text-center max-w-2xl text-sm md:text-base">
          Our platform combines real-time tracking, intelligent alerts, and secure
          controls to help you monitor, protect, and manage your vehicles with ease.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-4 md:px-8 gap-6 md:gap-8">
        {featuresData.map((card, i) => (
          <FeatureCard key={card.id} index={i} card={card} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ card, index }) {
  const { title, description } = card;

  return (
    <div
      className="group relative bg-green-light border-2 border-grey-light rounded-2xl p-6 flex flex-col justify-between gap-4
                 shadow-lg shadow-grey-light/50 transition-all duration-500
                 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
      style={{ animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both` }}
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h4
          className={`font-bold text-lg md:text-xl ${
            index % 2 === 0
              ? "text-transparent bg-gradient-to-r from-primary to-green-header bg-clip-text"
              : "text-transparent bg-gradient-to-r from-yellow-hero to-green-footer bg-clip-text"
          }`}
        >
          {title}
        </h4>

        {/* Description */}
        <p className="text-grey-neutral text-sm md:text-base leading-relaxed">
          {description}
        </p>

        {/* Decorative Line */}
        <div
          className={`w-12 h-0.5 rounded-full ${
            index % 2 === 0
              ? "bg-gradient-to-r from-primary to-green-footer"
              : "bg-gradient-to-r from-green-footer to-primary"
          }`}
        />
      </div>
    </div>
  );
}

export default FeaturesSection;