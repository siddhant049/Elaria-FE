import React from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import { HeartOutlined, SolutionOutlined, UsergroupAddOutlined, ArrowRightOutlined } from "@ant-design/icons";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const CoreServices = () => {
  const specialties = [
    {
      icon: <HeartOutlined className="text-4xl text-teal-600" />,
      title: "Holistic Wellness Plans",
      description:
        "Integrated programs focusing on nutrition, mindfulness, and physical health for long-term vitality.",
      link: "#plans",
    },
    {
      icon: <SolutionOutlined className="text-4xl text-teal-600" />,
      title: "Specialized Pain Therapy",
      description:
        "Targeted physiotherapy and osteopathy to treat chronic pain, injuries, and post-operative conditions.",
      link: "#paintherapy",
    },
    {
      icon: <UsergroupAddOutlined className="text-4xl text-teal-600" />,
      title: "Mind-Body Balance",
      description:
        "Counseling, stress management, and therapeutic massage to achieve complete mental and emotional well-being.",
      link: "#mindbody",
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
            Our Pillars of Care
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Expertise That Heals
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {specialties.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card
                hoverable
                className="h-full border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-6"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors mt-4"
                  >
                    Learn More <ArrowRightOutlined className="ml-2 text-sm" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
