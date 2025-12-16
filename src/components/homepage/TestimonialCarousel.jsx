import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import { StarFilled } from "@ant-design/icons";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Sophia Chen",
      role: "Skin Rejuvenation",
      text: "The transformation has been incredible. My skin glows naturally and I feel confident in my own skin for the first time in years.",
      initials: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "Hair Restoration",
      text: "Professional excellence combined with genuine care. The results exceeded my expectations and restored my confidence completely.",
      initials: "MR",
    },
    {
      name: "Isabella Thompson",
      role: "Body Contouring",
      text: "Sophisticated approach to beauty enhancement. The team understood my vision perfectly and delivered outstanding results.",
      initials: "IT",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-center mb-20"
        >
          <div className="w-16 h-px bg-[#efae4c] mx-auto mb-8"></div>
          <h2 className="text-5xl md:text-6xl font-light text-[#001b3d] mb-6 tracking-tight">
            Beauty Transformations
          </h2>
          <p className="text-lg text-gray-600 font-light tracking-wide">
            Real stories from clients who discovered their radiance
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8 },
            },
          }}
        >
          <Carousel
            autoplay
            autoplaySpeed={6000}
            dotPosition="bottom"
            className="testimonial-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="bg-gray-50 border border-gray-100 p-16 mx-4">
                  <div className="flex gap-1 justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <StarFilled key={i} className="text-[#efae4c] text-lg" />
                    ))}
                  </div>

                  <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center font-light italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center justify-center gap-6">
                    <div className="w-16 h-16 bg-[#001b3d] flex items-center justify-center">
                      <span className="text-[#efae4c] text-lg font-light tracking-wider">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-light text-[#001b3d] tracking-wide">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 font-light tracking-wider">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
