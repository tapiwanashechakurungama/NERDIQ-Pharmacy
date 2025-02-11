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
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  {testimonials[currentIndex].feedback}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
              <h4> {testimonials[currentIndex].name}</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
