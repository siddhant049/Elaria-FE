import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { Button, Input, Carousel, Avatar, Tooltip, Rate, Card } from "antd";
import {
  SearchOutlined,
  ArrowRightOutlined,
  StarFilled,
  CalendarOutlined,
  PlayCircleOutlined,
  HeartFilled,
  HeartOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Navbar from "./components/Navbar";

// ============================================================================
// ANIMATION VARIANTS - Refined, sophisticated motion patterns
// ============================================================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

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

// ============================================================================
// HERO SECTION - Minimalist, elegant with subtle parallax
// ============================================================================
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageReveal = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};



const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const [currentWord, setCurrentWord] = useState(0);

  const floatingWords = ["Radiant", "Confident", "Beautiful", "Timeless"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % floatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Enhanced parallax
  const yBg = useTransform(scrollY, [0, 500], [0, -50]);
  const yContent = useTransform(scrollY, [0, 500], [0, 25]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / (rect.width / 2),
      y: (e.clientY - rect.top - rect.height / 2) / (rect.height / 2),
    });
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'linear-gradient(135deg, #fdfbf7 0%, #f7f2ed 50%, #faf8f5 100%)',
            'linear-gradient(135deg, #faf8f5 0%, #f5efe8 50%, #fdfbf7 100%)',
            'linear-gradient(135deg, #fdfbf7 0%, #f7f2ed 50%, #faf8f5 100%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80)`,
            filter: 'blur(1.5px) brightness(1.08) saturate(0.95)',
            transform: 'scale(1.05)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-amber-50/45 to-white/70" />
      </motion.div>

      {/* Enhanced Floating Orbs with More Variety */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Primary Gold Orb */}
        <motion.div 
          className="absolute top-[15%] left-[8%] w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle at center, rgba(239, 174, 76, 0.18) 0%, rgba(239, 174, 76, 0.08) 40%, transparent 70%)',
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Navy Accent Orb */}
        <motion.div 
          className="absolute bottom-[12%] right-[5%] w-[550px] h-[550px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 27, 61, 0.12) 0%, rgba(0, 27, 61, 0.05) 45%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
          }}
          animate={{ 
            scale: [1, 1.18, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -25, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Soft Center Glow */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,251,235,0.6) 0%, rgba(239,174,76,0.08) 35%, transparent 65%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sparkle Effects */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#efae4c] rounded-full"
            style={{
              top: `${15 + (i * 7)}%`,
              left: `${10 + (i * 8)}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              y: [-20, -40, -20],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 py-16 md:py-24 lg:py-32"
        style={{ y: yContent }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8 lg:space-y-12">
          
          {/* Premium Badge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-2xl border-2 border-white/60 rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(239,174,76,0.15)] transition-all duration-500 hover:scale-105">
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#efae4c] to-[#d89b3e]" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#efae4c]"
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-xs font-semibold text-gray-700 tracking-[0.15em] uppercase">
                Est. 2009 • Award-Winning Care
              </span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#efae4c] to-[#d89b3e] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Headline - More Dynamic */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-3"
          >
            {/* Main Title */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95] text-gray-900"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, type: "spring", stiffness: 50 }}
            >
              Feel{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: -90 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-[#efae4c] via-[#d89b3e] to-[#efae4c] bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% auto' }}
                >
                  {floatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
            
            {/* Sub Title with Elegant Animation */}
            <div className="relative inline-block">
              <motion.h2 
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.7, type: "spring", stiffness: 50 }}
              >
                <span className="relative inline-block">
                  <span className="text-[#001b3d]">Be </span>
                  <motion.span
                    className="relative inline-block"
                    style={{
                      background: 'linear-gradient(135deg, #efae4c 0%, #d89b3e 50%, #efae4c 100%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    animate={{
                      backgroundPosition: ['0% center', '200% center', '0% center']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Elaria
                  </motion.span>
                </span>
              </motion.h2>
              
              {/* Sophisticated Multi-Layer Underline */}
              <motion.div className="absolute -bottom-3 left-1/2 w-full -translate-x-1/2 flex flex-col gap-1">
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-[#efae4c] to-transparent opacity-40"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
                />
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-transparent via-[#d89b3e] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0.8 }}
                  transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Tagline - More Poetic */}
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
          >
            Where cutting-edge science embraces timeless artistry.
            <br className="hidden sm:block" />
            Discover treatments that honor your unique beauty journey and 
            <span className="text-[#efae4c] font-medium"> transform from within</span>.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
          >
            <motion.button
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-5 w-full sm:w-auto bg-gradient-to-r from-[#efae4c] via-[#d89b3e] to-[#c8892f] text-white font-semibold rounded-2xl shadow-2xl shadow-[#efae4c]/30 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#d89b3e] to-[#efae4c]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wider uppercase">
                <CalendarOutlined className="text-lg" />
                Book Your Transformation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group px-10 py-5 w-full sm:w-auto bg-white/60 backdrop-blur-2xl text-[#001b3d] font-semibold rounded-2xl border-2 border-white/70 hover:border-[#efae4c]/50 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#efae4c]/10 via-[#efae4c]/5 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wider uppercase">
                <PlayCircleOutlined className="text-lg" />
                Explore Treatments
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Trust Metrics */}
          <motion.div
            className="pt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12">
              {/* Avatars with Enhanced Design */}
              <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      className="relative w-11 h-11 rounded-full border-3 border-white shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
                      whileHover={{ scale: 1.15, zIndex: 10, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={`https://i.pravatar.cc/100?u=${i}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    className="w-11 h-11 rounded-full border-3 border-white bg-gradient-to-br from-[#efae4c] to-[#d89b3e] flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                  >
                    2k+
                  </motion.div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1.8 + (i * 0.1), type: "spring" }}
                      >
                        <StarFilled className="text-[#FBBF24] text-sm drop-shadow" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 font-semibold">Trusted by thousands</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

              {/* Stats Grid */}
              <div className="flex gap-8 px-6 py-4 bg-white/50 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl">
                {[
                  { value: "15+", label: "Years" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "100%", label: "FDA Approved" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + (i * 0.1) }}
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <div className="text-2xl font-light bg-gradient-to-r from-[#001b3d] to-[#efae4c] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-600 font-medium uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <motion.button
            className="flex flex-col items-center gap-3 text-gray-500 hover:text-[#efae4c] transition-colors group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase">Begin Your Journey</span>
            <motion.div 
              className="relative w-7 h-11 rounded-full border-2 border-gray-300 group-hover:border-[#efae4c] transition-colors flex justify-center p-2"
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-[#efae4c] rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Corner Decorations */}
      {[
        { top: 8, left: 8, rotate: 0 },
        { top: 8, right: 8, rotate: 90 },
        { bottom: 8, left: 8, rotate: -90 },
        { bottom: 8, right: 8, rotate: 180 },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: corner.top,
            bottom: corner.bottom,
            left: corner.left,
            right: corner.right,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: corner.rotate - 45 }}
          animate={{ opacity: 1, scale: 1, rotate: corner.rotate }}
          transition={{ delay: 2 + (i * 0.1), duration: 0.6, type: "spring" }}
        >
          <div className="relative w-12 h-12">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#efae4c] to-transparent" />
            <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-[#efae4c] to-transparent" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
// ============================================================================
// CATEGORY CARDS - Sophisticated, minimal design
// ============================================================================
const CategoryCard = ({ title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      transition={{ delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="cursor-pointer group"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-96 bg-white border border-gray-100 overflow-hidden"
      >
        {/* Golden accent line */}
        <motion.div
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-px bg-[#efae4c] origin-left"
        />

        <div className="relative z-10 h-full flex flex-col justify-between p-10">
          <div>
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#001b3d] mb-8"
            >
              <div className="w-12 h-px bg-[#efae4c] mb-6"></div>
              <h3 className="text-3xl font-light tracking-wide mb-4">
                {title}
              </h3>
            </motion.div>
            <p className="text-gray-600 text-base leading-relaxed font-light">
              {description}
            </p>
          </div>

          <motion.div
            animate={{
              x: isHovered ? 8 : 0,
              color: isHovered ? "#efae4c" : "#001b3d",
            }}
            className="flex items-center gap-3 text-sm font-light tracking-widest"
          >
            EXPLORE <ArrowRightOutlined className="text-xs" />
          </motion.div>
        </div>

        {/* Subtle hover overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 0.02 : 0 }}
          className="absolute inset-0 bg-[#efae4c]"
        />
      </motion.div>
    </motion.div>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "SKIN ",
      description:
        "Advanced dermatological treatments for rejuvenation, clarity, and timeless radiance. Experience the transformative power of professional skin care.",
    },
    {
      title: "HAIR RESTORATION",
      description:
        "Restorative solutions combining medical expertise with personalized care for optimal hair vitality and luxurious appearance.",
    },
    {
      title: "HAIR TRANSPLANT",
      description:
        "Precision sculpting and contouring treatments tailored to your aesthetic vision. Achieve the body confidence you deserve.",
    },
        {
      title: "AYURVEDIC TREATMENTS",
      description:
        "Restorative solutions combining medical expertise with personalized care for optimal hair vitality and luxurious appearance.",
    },
    {
      title: " SLIMMING",
      description:
        "Precision sculpting and contouring treatments tailored to your aesthetic vision. Achieve the body confidence you deserve.",
    },
    {
      title: " LASER TREATMENTS",
      description:
        "Precision sculpting and contouring treatments tailored to your aesthetic vision. Achieve the body confidence you deserve.",
    },
            {
      title: "SALON",
      description:
        "Restorative solutions combining medical expertise with personalized care for optimal hair vitality and luxurious appearance.",
    },

  ];

  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <div className="w-16 h-px bg-[#efae4c] mx-auto mb-8"></div>
          <h2 className="text-5xl md:text-6xl font-light text-[#001b3d] mb-6 tracking-tight">
            Your Beauty Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light tracking-wide">
            Discover personalized aesthetic treatments tailored to your unique
            beauty goals and lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              {...category}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// TRUST METRICS - Refined, minimal presentation
// ============================================================================
const TrustMetrics = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const targets = { years: 15, clients: 15000, satisfaction: 98 };
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
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "YEARS EXPERIENCE", value: counters.years + "+" },
    {
      label: "SATISFIED CLIENTS",
      value: counters.clients.toLocaleString() + "+",
    },
    { label: "SATISFACTION RATE", value: counters.satisfaction + "%" },
    { label: "FDA APPROVED", value: "100%" },
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

// ============================================================================
// TESTIMONIAL CAROUSEL - Elegant, minimal testimonials
// ============================================================================
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
          variants={fadeUp}
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
          variants={scaleIn}
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

// ============================================================================
// AI SERVICE FINDER - Minimalist search interface
// ============================================================================
// const AIServiceFinder = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const suggestions = [
//     "Facial rejuvenation treatments",
//     "Anti-aging skin solutions",
//     "Hair restoration therapy",
//     "Body contouring procedures",
//     "Laser skin resurfacing",
//     "Dermal fillers and injectables",
//     "Acne scar treatment",
//     "Hydrafacial therapy",
//   ];

//   const filteredSuggestions = suggestions.filter((s) =>
//     s.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   return (
//     <section className="py-32 px-6 bg-[#001b3d] relative overflow-hidden">
//       {/* Geometric accent */}
//       <div className="absolute top-0 right-0 w-64 h-64 border border-[#efae4c] opacity-10 rounded-full"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#efae4c] opacity-5 rounded-full"></div>

//       <div className="max-w-4xl mx-auto relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center mb-16"
//         >
//           <div className="inline-block mb-6 px-6 py-2 border border-[#efae4c] text-[#efae4c] text-xs font-light tracking-widest">
//             AI-POWERED
//           </div>
//           <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
//             Discover Your Treatment
//           </h2>
//           <p className="text-lg text-gray-400 font-light tracking-wide">
//             Intelligent guidance to your perfect beauty solution
//           </p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={scaleIn}
//           className="relative"
//         >
//           <motion.div
//             animate={{
//               borderColor: isFocused ? "#efae4c" : "rgba(239, 174, 76, 0.3)",
//             }}
//             transition={{ duration: 0.3 }}
//             className="bg-white/5 backdrop-blur-sm border-2 overflow-hidden"
//           >
//             <Input
//               size="large"
//               placeholder="Search treatments, concerns, or goals..."
//               prefix={<SearchOutlined className="text-xl text-[#efae4c]" />}
//               value={searchValue}
//               onChange={(e) => {
//                 setSearchValue(e.target.value);
//                 setShowSuggestions(e.target.value.length > 0);
//               }}
//               onFocus={() => {
//                 setIsFocused(true);
//                 setShowSuggestions(searchValue.length > 0);
//               }}
//               onBlur={() => {
//                 setIsFocused(false);
//                 setTimeout(() => setShowSuggestions(false), 200);
//               }}
//               className="text-base py-6 bg-transparent text-white border-none font-light tracking-wide placeholder-gray-500"
//             />
//           </motion.div>

//           <AnimatePresence>
//             {showSuggestions && filteredSuggestions.length > 0 && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute w-full mt-2 bg-white/10 backdrop-blur-md border border-[#efae4c]/30 overflow-hidden z-20"
//               >
//                 {filteredSuggestions.map((suggestion, index) => (
//                   <motion.div
//                     key={suggestion}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     whileHover={{
//                       backgroundColor: "rgba(239, 174, 76, 0.1)",
//                       x: 4,
//                     }}
//                     className="px-6 py-4 cursor-pointer border-b border-white/10 last:border-none transition-all duration-300"
//                     onMouseDown={() => setSearchValue(suggestion)}
//                   >
//                     <div className="flex items-center gap-4">
//                       <SearchOutlined className="text-[#efae4c]" />
//                       <span className="text-gray-300 font-light tracking-wide">
//                         {suggestion}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
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

// ============================================================================
// FOOTER - Minimal, elegant footer
// ============================================================================
const Footer = () => {
  return (
    <footer className="bg-[#001b3d] text-white py-20 px-6 border-t border-[#efae4c]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-light mb-6 text-[#efae4c] tracking-wide">
              ELARIA ESTHETIQUE
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed tracking-wide">
              Premium aesthetic treatments for timeless beauty and confidence
            </p>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              SERVICES
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Skin Treatments
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Hair Restoration
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Body Contouring
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              COMPANY
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                About Us
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Our Team
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-light mb-6 text-sm tracking-widest text-gray-300">
              LEGAL
            </h4>
            <ul className="space-y-3 text-gray-400 font-light text-sm tracking-wide">
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-[#efae4c] transition-colors cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs font-light tracking-widest">
              © 2024 ELARIA ESTHETIQUE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-6">
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">IN</span>
              </div>
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">FB</span>
              </div>
              <div className="w-8 h-8 border border-[#efae4c]/30 flex items-center justify-center hover:border-[#efae4c] transition-colors cursor-pointer">
                <span className="text-[#efae4c] text-xs">IG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .ant-input::placeholder {
          color: rgba(156, 163, 175, 0.6);
        }
        .ant-carousel .slick-dots li button {
          background: rgba(239, 174, 76, 0.3) !important;
          height: 2px !important;
          width: 40px !important;
        }
        .ant-carousel .slick-dots li.slick-active button {
          background: #efae4c !important;
        }
      `}</style>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <TrustMetrics />
      {/* <AIServiceFinder /> */}
      <CoreServices />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default App;
