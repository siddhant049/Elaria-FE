import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const categories = [
    {
      title: "HAIR",
      description: "Advanced hair restoration treatments for healthy, voluminous hair growth and scalp wellness.",
    },
    {
      title: "SKIN",
      description: "Comprehensive skin care solutions addressing pigmentation, acne, aging, and overall skin health.",
    },
    {
      title: "ACNE AND SCARS",
      description: "Targeted treatments for active acne, acne scars, and blemishes for clear, smooth skin.",
    },
    {
      title: "UNDER EYES SERVICES",
      description: "Specialized treatments for dark circles, hollowness, and rejuvenation of delicate under-eye area.",
    },
    {
      title: "PIGMENTATION",
      description: "Effective solutions for uneven skin tone, melasma, freckles, and pigmentation concerns.",
    },
    {
      title: "MEDIFACIAL",
      description: "Medical-grade facials combining advanced technology with expert care for radiant skin.",
    },
    {
      title: "ANTI AGING",
      description: "Cutting-edge anti-aging treatments for wrinkles, fine lines, and skin rejuvenation.",
    },
    {
      title: "LASER",
      description: "Precision laser treatments for hair removal, tattoo removal, and skin resurfacing.",
    },
    {
      title: "BODY CONTOURING",
      description: "Non-invasive body shaping and fat reduction treatments for your ideal silhouette.",
    },
  ];

  return (
    <section id="treatments-section" className="py-20 lg:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
          className="text-center mb-16"
        >
          <div className="w-16 h-px bg-[#efae4c] mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-light text-[#001b3d] mb-6 tracking-tight">
            Our Treatment Categories
          </h2>
          <p className="text-lg text-gray-600 font-light tracking-wide max-w-3xl mx-auto">
            Discover our comprehensive range of advanced aesthetic treatments,
            each designed to address specific skin and hair concerns with
            cutting-edge technology and personalized care.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6 },
                },
              }}
            >
              <CategoryCard
                title={category.title}
                description={category.description}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
