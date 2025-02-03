import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Expert Pharmacists",
    description:
      "Our team of experienced pharmacists is dedicated to providing you with personalized care and expert advice.",
    icon: "🧑‍⚕️",
  },
  {
    title: "Fast Service",
    description:
      "We prioritize your time with quick and efficient service, ensuring you get your medications without the wait.",
    icon: "⏱️",
  },
  {
    title: "Reliable Prescriptions",
    description:
      "Count on us for accurate and safe prescription services tailored to your health needs.",
    icon: "✅",
  },
  {
    title: "Community Focused",
    description:
      "We are committed to serving our community with compassion and respect, making health accessible for everyone.",
    icon: "🏥",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <p className="text-lg mb-12">
          At Nerdiq Pharmacy, we are dedicated to providing exceptional service
          and care. Here’s why you can trust us with your health.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
