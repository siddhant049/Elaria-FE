import React from "react";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const FAQsSection = () => {
  const faqs = [
    {
      question: "Are the treatments safe and FDA approved?",
      answer:
        "Yes, all our treatments are performed using FDA-approved equipment and techniques. Our medical professionals ensure the highest safety standards are maintained throughout your treatment journey.",
    },
    {
      question: "How long do the results typically last?",
      answer:
        "Results vary depending on the treatment and individual factors. Most aesthetic treatments provide results lasting 6-18 months, while some surgical procedures offer permanent results. We'll discuss realistic expectations during your consultation.",
    },
    {
      question: "What is the recovery time for treatments?",
      answer:
        "Recovery time depends on the specific treatment. Non-invasive procedures like Botox typically require minimal downtime (1-2 days), while more comprehensive treatments may need 1-2 weeks for full recovery. We'll provide detailed aftercare instructions.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer flexible financing options and payment plans to make treatments accessible. We accept major credit cards, and our team can help you explore financing solutions that fit your budget.",
    },
    {
      question: "What should I expect during my first consultation?",
      answer:
        "Your first consultation includes a comprehensive assessment of your concerns, medical history review, and personalized treatment recommendations. We'll discuss your goals, answer questions, and create a customized treatment plan.",
    },
    {
      question: "Are there any age restrictions for treatments?",
      answer:
        "Most treatments are suitable for adults 18 and older. Some procedures may have different age guidelines based on individual circumstances. We'll assess your eligibility during the consultation and recommend the most appropriate treatments.",
    },
    {
      question: "How do I know which treatment is right for me?",
      answer:
        "You don’t need to decide on your own. During your consultation, our experts will assess your concerns, skin or hair type, lifestyle, and goals, then recommend a customized treatment plan that suits you best.",
    },
    {
      question:
        "Do I need to stop my current skincare or medications before treatment?",
      answer:
        "In some cases, we may ask you to pause certain products or medications, such as retinoids or blood thinners, before a procedure. Our doctor will review your current routine and medical history and give you clear pre-treatment instructions.",
    },
    {
      question: "How soon will I see results after my treatment?",
      answer:
        "Some treatments show visible improvement immediately or within a few days, while others work gradually over several weeks as your skin or hair regenerates. During your consultation, we’ll explain the expected timeline and how many sessions you may need.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-light text-[#001b3d] mb-4 tracking-wide"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Find answers to common questions about our treatments and services
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="group h-64 [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-[#efae4c]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#efae4c] text-xl font-bold">?</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#001b3d] leading-tight">
                    {faq.question}
                  </h3>
                  <div className="mt-4 text-[#efae4c] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Hover to reveal answer →
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#001b3d] to-[#002952] rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center text-white">
                  <div className="w-12 h-12 bg-[#efae4c]/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#efae4c] text-xl font-bold">✓</span>
                  </div>
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                  <div className="mt-4 text-[#efae4c] text-sm font-medium">
                    ← Back to question
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQsSection;
