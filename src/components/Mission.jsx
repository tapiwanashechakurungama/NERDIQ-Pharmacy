
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaShieldAlt,
  FaUserMd,
  FaClipboardList,
  FaHeart,
} from "react-icons/fa"; // Importing icons

export const OurMission = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          At Nerdiq Pharmacy, we are dedicated to enhancing the health and
          well-being of our community through personalized pharmacy services.
          Our mission is to:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHandsHelping className="text-blue-500 text-4xl mb-4" />,
              title: "Exceptional Service",
              description:
                "Deliver exceptional customer service that prioritizes your needs and ensures satisfaction.",
            },
            {
              icon: <FaShieldAlt className="text-blue-500 text-4xl mb-4" />,
              title: "Safety First",
              description:
                "Provide safe and effective medications through rigorous quality control and patient education.",
            },
            {
              icon: <FaUserMd className="text-blue-500 text-4xl mb-4" />,
              title: "Health Promotion",
              description:
                "Promote wellness by offering health screenings, immunizations, and consultations tailored to your health goals.",
            },
            {
              icon: <FaClipboardList className="text-blue-500 text-4xl mb-4" />,
              title: "Empowerment",
              description:
                "Empower our community with knowledge about medications and health management for better outcomes.",
            },
            {
              icon: <FaHeart className="text-blue-500 text-4xl mb-4" />,
              title: "Integrity & Respect",
              description:
                "Foster a culture of integrity and respect in every interaction.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
