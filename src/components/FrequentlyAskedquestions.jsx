import { useState } from "react";
import { motion } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa"; // Importing icons for toggle

const faqs = [
  {
    question: "What services does Nerdiq Pharmacy offer?",
    answer:
      "We offer a variety of services including prescription filling, health consultations, immunizations, and medication delivery.",
  },
  {
    question: "How can I contact the pharmacy?",
    answer:
      "You can reach us via phone at +263 771 383 631 or email us at info@nerdiq.co.zw",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans. Please contact us for more details.",
  },
  {
    question: "What should I do if I have a medication question?",
    answer:
      "Feel free to ask our pharmacists any questions about your medications. We're here to help!",
  },
  {
    question: "Can I get my medications delivered?",
    answer: "Yes! We offer medication delivery services for your convenience.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto ">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-sm rounded-lg mb-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h5 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h5>
                <span className="text-gray-600">
                  {openIndex === index ? (
                    <div className="p-2 rounded-4xl bg-gray-100">
                      <FaAngleUp size={20} color="rgb(0, 129, 255, 255)" />
                    </div>
                  ) : (
                    <div className="p-2 rounded-4xl bg-gray-100">
                      <FaAngleDown size={20} />
                    </div>
                  )}
                </span>
              </div>
              {openIndex === index && (
                <motion.div
                  className="p-6 border-t border-gray-200"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-500 font-[600]">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
