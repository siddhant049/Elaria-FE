import React, { useState, useEffect } from "react";
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

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const TrustMetrics = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    satisfaction: 0,
    fdaApprMach: 0,
  });

  useEffect(() => {
    const targets = {
      years: 15,
      clients: 15000,
      satisfaction: 98,
      fdaApprMach: 100,
    };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        fdaApprMach: Math.floor(targets.fdaApprMach * progress),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "CERTIFIED SPECIALISTS", value: counters.years + "+" },
    {
      label: "WELLNESS SESSIONS CONDUCTED",
      value: counters.clients.toLocaleString() + "+",
    },
    { label: "SATISFACTION RATE", value: counters.satisfaction + "%" },
    { label: "FDA APPROVED MACHINES", value: counters.fdaApprMach + "%" },
  ];

  return (
    <section className="py-24 bg-[#001b3d] relative overflow-hidden">
      {/* Subtle golden line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#efae4c] to-transparent"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={scaleIn}
              className="text-center"
            >
              <div className="text-5xl font-light text-[#efae4c] mb-4 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs text-gray-400 tracking-widest font-light">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#efae4c] to-transparent"></div>
    </section>
  );
};

export default TrustMetrics;
