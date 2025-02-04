import  { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Thomas",
    feedback:
      "Nerdiq Pharmacy provided me with exceptional service and care. Highly recommended!",
  },
  {
    name: "Kudakwashe",
    feedback:
      "The pharmacists at Nerdiq are knowledgeable and always ready to help. I trust them completely.",
  },
  {
    name: "Tapiwanashe",
    feedback:
      "I love the convenience of their medication delivery service. It makes my life so much easier!",
  },
  {
    name: "John",
    feedback:
      "Nerdiq Pharmacy has been my go-to for all my health needs. Their team is fantastic!",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextTestimonial(),
    onSwipedRight: () => prevTestimonial(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section className="relative">
      <video
        className="absolute top-0 left-0 w-full h-[80vh] object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src="https://videocdn.cdnpk.net/videos/437b8e0f-4381-56d9-8e5a-c6b1f86522cd/horizontal/previews/watermarked/large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex items-center justify-center h-[80vh] bg-black bg-opacity-50 cursor-grab p-4 md:p-0 ">
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
          <motion.div
            key={currentIndex}
            className="bg-white p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            {...handlers} // Attach swipe handlers
          >
            <p className="text-gray-700 italic text-xl">
              &ldquo;{testimonials[currentIndex].feedback}&rdquo;
            </p>
            <h3 className="mt-2 font-semibold text-lg">
              {testimonials[currentIndex].name}
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
