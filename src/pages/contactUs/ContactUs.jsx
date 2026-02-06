import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

// Fix for default marker icon in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const offices = [
  {
    name: "Nairobi Office",
    address: "Jeevan Bharati Building, P.O BOX 46002-00100, Nairobi",
    phones: ["+254 723 261 696", "+254 729 597 491"],
    email: "omaralhilamtracking2022@gmail.com",
    coords: [-1.288253, 36.821028],
    color: "primary",
  },
  {
    name: "Mombasa Office",
    address: "Coast House, P.O BOX 99105-80107 MSA",
    phones: ["+254 723 261 696", "+254 729 597 491"],
    email: "omaralhilamtracking2022@gmail.com",
    coords: [-4.043477, 39.668206],
    color: "yellow",
  },
  {
    name: "Kisumu Office",
    address: "Nati House, P.O BOX 45990-00800, Kisumu",
    phones: ["+254 723 261 696", "+254 729 597 491"],
    email: "omaralhilamtracking2022@gmail.com",
    coords: [-0.0917, 34.7680], 
    color: "yellow",
  },
  {
    name: "Uganda Office",
    address: "Central Nakawa, Spring Road Modernity, P.O BOX 170401, Kampala",
    phones: ["+256 760 983 837", "+254 723 261 696"],
    email: "nabiltrackingltd@gmail.com",
    coords: [0.3156, 32.5656],
    color: "yellow",
  },
];

function ContactUs() {
  return (
    <section className="relative w-full bg-green-light px-4 md:px-12 py-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block text-secondary mb-8">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-grad-primary"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-light">

            {offices.map((office, idx) => (
              <div
                key={idx}
                className={`space-y-4 p-6 rounded-2xl border transition-all duration-300 ${
                  office.color === "primary"
                    ? "bg-green-light/50 border-grey-light hover:border-primary/40 hover:bg-grey-light/30"
                    : "bg-green-light/50 border-grey-light hover:border-yellow-hero/40 hover:bg-grey-light/30"
                }`}
              >
                <p className="font-semibold flex items-center gap-2 text-base text-secondary">
                  <FaMapMarkerAlt className={office.color === "primary" ? "text-primary" : "text-yellow-hero"} />
                  {office.name}
                </p>
                <p className="text-grey-neutral leading-relaxed">{office.address}</p>

                <div className="space-y-3 pt-2">
                  {office.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      className={`group flex items-center gap-3 text-grey-neutral transition-colors duration-300 ${
                        office.color === "primary" ? "hover:text-primary" : "hover:text-yellow-hero"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        office.color === "primary"
                          ? "bg-primary/10 group-hover:bg-primary/20"
                          : "bg-yellow-hero/10 group-hover:bg-yellow-hero/20"
                      }`}>
                        <FaPhoneAlt className={`text-xs ${office.color === "primary" ? "text-primary" : "text-yellow-hero"}`} />
                      </div>
                      <span>{phone}</span>
                    </a>
                  ))}

                  <a
                    href={`mailto:${office.email}`}
                    className={`group flex items-center gap-3 text-grey-neutral transition-colors duration-300 ${
                      office.color === "primary" ? "hover:text-primary" : "hover:text-yellow-hero"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      office.color === "primary"
                        ? "bg-primary/10 group-hover:bg-primary/20"
                        : "bg-yellow-hero/10 group-hover:bg-yellow-hero/20"
                    }`}>
                      <FaEnvelope className={`text-xs ${office.color === "primary" ? "text-primary" : "text-yellow-hero"}`} />
                    </div>
                    <span>{office.email}</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Working Hours */}
            <div className="sm:col-span-2 p-6 rounded-2xl bg-grad-active-bg border border-grey-light hover:border-primary/40 transition-all duration-300">
              <p className="font-semibold flex items-center gap-2 text-base mb-2 text-secondary">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FaClock className="text-primary" />
                </div>
                Working Hours
              </p>
              <p className="text-grey-neutral leading-relaxed">
                Mon – Fri: 8:00 AM – 5:00 PM · Sat: 8:00 AM – 1:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Leaflet Map for Multiple Locations */}
        <div className="flex-1 sticky top-32 rounded-2xl overflow-hidden shadow-lg shadow-black/10 border border-grey-light h-[600px]">
          <MapContainer
            center={offices[0].coords}
            zoom={6}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {offices.map((office, idx) => (
              <Marker key={idx} position={office.coords}>
                <Popup>
                  <strong>{office.name}</strong>
                  <br />
                  {office.address}
                  <br />
                  {office.phones.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;