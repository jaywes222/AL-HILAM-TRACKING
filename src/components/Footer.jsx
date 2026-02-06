import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Company",
    links: [
      { to: "/about-us", name: "About Us" },
      { to: "/our-services", name: "Services" },
      { to: "/tracking-devices", name: "Our Tracking Devices" },
      { to: "/our-clients", name: "Our Clients" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { to: "/contact-us", name: "Contact Us" },
      { href: "", name: "Terms and Conditions" },
      { href: "", name: "Privacy Policy" },
    ],
  },
];

const branches = [
  {
    name: "Nairobi (HQ)",
    address: "Jeevan Bharati Building",
    phones: ["+254 723 261 696", "+254 729 597 491"],
    email: "omaralhilamtracking2022@gmail.com",
    highlight: true,
  },
  {
    name: "Mombasa",
    address: "Coast House",
    phones: ["+254 723 261 696", "+254 729 597 491"],
    email: "omaralhilamtracking2022@gmail.com",
  },
  {
    name: "Kisumu",
    address: "Nati House",
    phones: ["+254 723 261 696", "+254 729 597 491"],
    email: "omaralhilamtracking2022@gmail.com",
  },
  {
    name: "Uganda",
    address: "Nakawa, Spring Road",
    phones: ["+256 760 983 837", "+254 723 261 696"],
    email: "nabiltrackingltd@gmail.com",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-secondary via-green-dark to-secondary text-green-light">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 pt-12 pb-6">

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Brand */}
          <div className="space-y-3 text-center lg:text-left">
            <h1 className="text-3xl font-bold">Al-Hilam Tracking</h1>
            <p className="text-grey-mild text-sm max-w-xs">
              Professional Fleet Management Specialists
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h2 className="font-bold text-lg">{section.title}</h2>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.href ? (
                        <a
                          href={link.href}
                          className="text-grey-mild hover:text-green-footer transition"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          className="text-grey-mild hover:text-green-footer transition"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="flex-1 space-y-6">
            <h2 className="font-bold text-lg">Our Locations</h2>

            {/* Max 2 columns, no overlap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className={`p-4 rounded-xl border text-xs
                    ${branch.highlight
                      ? "border-primary bg-primary/10"
                      : "border-primary/20 bg-green-dark/40"}
                  `}
                >
                  <p className="font-semibold text-sm flex items-center gap-2 mb-1">
                    <FaMapMarkerAlt className="text-green-footer text-xs" />
                    {branch.name}
                  </p>

                  <p className="text-grey-mild mb-2">
                    {branch.address}
                  </p>

                  {/* Phones */}
                  <div className="space-y-1">
                    {branch.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-1 text-grey-mild hover:text-green-footer transition"
                      >
                        <FaPhoneAlt className="text-[10px]" />
                        <span className="break-all">{phone}</span>
                      </a>
                    ))}
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${branch.email}`}
                    className="flex items-center gap-1 mt-2 text-grey-mild hover:text-green-footer transition"
                  >
                    <FaEnvelope className="text-[10px]" />
                    <span className="break-all">{branch.email}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-3 text-sm text-grey-mild pt-4">
              <FaClock className="text-green-footer flex-shrink-0" />
              <span>Mon – Fri: 8:00 AM – 5:00 PM · Sat: 8:00 AM – 1:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-primary/20 text-center text-sm text-grey-mild">
          <p>&copy; Al-Hilam Tracking | All Rights Reserved</p>
          <p className="text-xs mt-2">
            Powered by{" "}
            <a
              href="https://www.linkedin.com/in/wesley-jack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-footer hover:text-green-light font-semibold"
            >
              SkeptiKrafts
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;