import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  CalendarOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const HeroSection = ({ onBookAppointment }) => {
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
            "linear-gradient(135deg, #fdfbf7 0%, #f7f2ed 50%, #faf8f5 100%)",
            "linear-gradient(135deg, #faf8f5 0%, #f5efe8 50%, #fdfbf7 100%)",
            "linear-gradient(135deg, #fdfbf7 0%, #f7f2ed 50%, #faf8f5 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80)`,
            filter: "blur(1.5px) brightness(1.08) saturate(0.95)",
            transform: "scale(1.05)",
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
            background:
              "radial-gradient(circle at center, rgba(239, 174, 76, 0.18) 0%, rgba(239, 174, 76, 0.08) 40%, transparent 70%)",
            transform: `translate(${mousePosition.x * 40}px, ${
              mousePosition.y * 40
            }px)`,
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
            background:
              "radial-gradient(circle at center, rgba(0, 27, 61, 0.12) 0%, rgba(0, 27, 61, 0.05) 45%, transparent 70%)",
            transform: `translate(${-mousePosition.x * 30}px, ${
              -mousePosition.y * 30
            }px)`,
          }}
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Soft Center Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,251,235,0.6) 0%, rgba(239,174,76,0.08) 35%, transparent 65%)",
            filter: "blur(80px)",
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
              top: `${15 + i * 7}%`,
              left: `${10 + i * 8}%`,
              filter: "blur(1px)",
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
              ease: "easeInOut",
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
              transition={{
                duration: 0.9,
                delay: 0.5,
                type: "spring",
                stiffness: 50,
              }}
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
                  style={{ backgroundSize: "200% auto" }}
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
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <span className="relative inline-block">
                  <span className="text-[#001b3d]">Be </span>
                  <motion.span
                    className="relative inline-block"
                    style={{
                      background:
                        "linear-gradient(135deg, #efae4c 0%, #d89b3e 50%, #efae4c 100%)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    animate={{
                      backgroundPosition: [
                        "0% center",
                        "200% center",
                        "0% center",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
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
            <span className="text-[#efae4c] font-medium">
              {" "}
              transform from within
            </span>
            .
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
          >
            <motion.button
              onClick={onBookAppointment}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-10 py-5 w-full sm:w-auto bg-gradient-to-r from-[#efae4c] via-[#d89b3e] to-[#c8892f] text-white font-semibold rounded-2xl shadow-2xl shadow-[#efae4c]/30 overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#d89b3e] to-[#efae4c]"
                initial={{ x: "-100%" }}
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
              onClick={() => {
                const section = document.getElementById("treatments-section");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group px-10 py-5 w-full sm:w-auto bg-white/60 backdrop-blur-2xl text-[#001b3d] font-semibold rounded-2xl border-2 border-white/70 hover:border-[#efae4c]/50 transition-all duration-300 shadow-xl relative overflow-hidden cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#efae4c]/10 via-[#efae4c]/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-wider uppercase">
                <PlayCircleOutlined className="text-lg" />
                Explore Treatments
              </span>
            </motion.button>
          </motion.div>
        </div>
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
          transition={{ delay: 2 + i * 0.1, duration: 0.6, type: "spring" }}
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

export default HeroSection;
