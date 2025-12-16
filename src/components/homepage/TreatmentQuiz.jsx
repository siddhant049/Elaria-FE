import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const TreatmentQuiz = ({ onBookAppointment }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const quizQuestions = [
    {
      question: "What's your primary skin concern?",
      options: [
        { text: "Aging & Fine Lines", value: "aging", icon: "👵" },
        { text: "Acne & Breakouts", value: "acne", icon: "🧴" },
        { text: "Uneven Skin Tone", value: "pigmentation", icon: "🌟" },
        { text: "Dryness & Dehydration", value: "dryness", icon: "💧" },
        { text: "Hair Loss", value: "hair", icon: "💇‍♀️" },
        { text: "Body Contouring", value: "body", icon: "🏃‍♀️" },
      ],
    },
    {
      question: "What's your age range?",
      options: [
        { text: "18-25", value: "young", icon: "🌱" },
        { text: "26-35", value: "adult", icon: "💼" },
        { text: "36-45", value: "mature", icon: "🌟" },
        { text: "46+", value: "senior", icon: "👑" },
      ],
    },
  ];

  const treatmentRecommendations = {
    aging: {
      young: ["HydraFacial", "Chemical Peels", "Anti-aging Peels"],
      adult: ["Botox", "Dermal Fillers", "Laser Resurfacing"],
      mature: ["Thread Lift", "PRP Therapy", "Stem Cell Treatment"],
      senior: ["PRP Therapy", "Stem Cell Treatment", "Ayurvedic Rejuvenation"],
    },
    acne: {
      young: ["Acne Peels", "Advanced Acne Treatments", "Chemical Peels"],
      adult: ["Carbon Peels", "Fractional Laser", "Radiofrequency Microneedling"],
      mature: ["PRP Therapy", "Laser Resurfacing", "Ayurvedic Treatments"],
      senior: ["Gentle Laser", "Ayurvedic Healing", "PRP Therapy"],
    },
  };

  const handleAnswer = (questionIndex, answer) => {
    setAnswers({ ...answers, [questionIndex]: answer });

    if (questionIndex < quizQuestions.length - 1) {
      setTimeout(() => setCurrentStep(questionIndex + 1), 300);
    } else {
      const primaryConcern = answers[0]?.value;
      const ageRange = answers[1]?.value;
      let recs = [];
      if (primaryConcern && ageRange) {
        recs = treatmentRecommendations[primaryConcern]?.[ageRange] || [];
      }
      setRecommendations(recs.slice(0, 3));
      setTimeout(() => setIsCompleted(true), 500);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
    setRecommendations([]);
  };

  if (isCompleted) {
    return (
      <section className="py-32 px-6 bg-gradient-to-br from-[#001b3d] via-[#002952] to-[#001b3d] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-6 px-6 py-2 border border-[#efae4c] text-[#efae4c] text-xs font-light tracking-widest rounded-full">
              ✨ YOUR PERSONALIZED RECOMMENDATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Your Perfect Treatment Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {recommendations.map((treatment, index) => (
              <motion.div
                key={treatment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-6xl mb-4">💫</div>
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                  {treatment}
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  Premium treatment for your beauty goals
                </p>
                <Link to={`/treatment/${treatment.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <button className="bg-[#efae4c] hover:bg-[#d89b3e] text-[#001b3d] px-6 py-2 rounded-full font-semibold">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <button
              onClick={resetQuiz}
              className="bg-white/10 hover:bg-white/20 border border-white/30 rounded-full px-8 py-3 text-white font-light tracking-wider mr-4"
            >
              Retake Quiz
            </button>
            <button
              onClick={onBookAppointment}
              className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-8 py-3 text-[#001b3d] font-semibold"
            >
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  const currentQuestion = quizQuestions[currentStep];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-[#001b3d] via-[#002952] to-[#001b3d] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
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
          <div className="inline-block mb-6 px-6 py-2 border border-[#efae4c] text-[#efae4c] text-xs font-light tracking-widest rounded-full">
            🤖 AI ASSESSMENT
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Find Your Perfect Treatment
          </h2>
          <p className="text-lg text-gray-300 font-light tracking-wide">
            Answer a few questions and discover personalized recommendations
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex justify-center mb-4">
            {quizQuestions.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${
                  index <= currentStep ? "bg-[#efae4c]" : "bg-white/30"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
          <div className="text-center text-gray-400 text-sm font-light">
            Question {currentStep + 1} of {quizQuestions.length}
          </div>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-light text-white text-center mb-12 tracking-wide">
            {currentQuestion.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(currentStep, option)}
                className="group bg-white/5 hover:bg-white/15 border border-white/20 hover:border-[#efae4c]/50 rounded-2xl p-6 text-left transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>
                <div className="text-white font-light tracking-wide group-hover:text-[#efae4c] transition-colors">
                  {option.text}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentQuiz;
