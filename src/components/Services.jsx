import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Prescription Services",
    description:
      "We provide reliable and accurate prescription services tailored to your health needs.",
    icon: "💊",
  },
  {
    title: "Health Consultations",
    description:
      "Get personalized health advice from our experienced pharmacists.",
    icon: "🩺",
  },
  {
    title: "Medication Delivery",
    description:
      "Enjoy the convenience of having your medications delivered right to your door.",
    icon: "🚚",
  },
  {
    title: "Immunizations",
    description:
      "Stay healthy with our immunization services, including flu shots and more.",
    icon: "💉",
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-[#e9f5ff] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Services</h2>
        <p className="text-lg mb-12 text-gray-600">
          At Nerdiq Pharmacy, we offer a range of services designed to meet your
          health and wellness needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[#d1e7ff] rounded-lg opacity-50"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
