import React, { useEffect, useState } from "react";
import {
  SparklesIcon,
  ScissorsIcon,
  SunIcon,
  FireIcon,
  HeartIcon,
  BeakerIcon,
  ChevronUpIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function HomePage() {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Services array
  const services = [
    { name: "Skin Treatments", icon: SparklesIcon },
    { name: "Hair Treatments", icon: ScissorsIcon },
    { name: "Laser Treatments", icon: SunIcon },
    { name: "Ayurveda Wellness", icon: HeartIcon },
    { name: "Hair Transplant", icon: BeakerIcon },
    { name: "Slimming & Body Shaping", icon: FireIcon },
  ];

  // Testimonials array
  const testimonials = [
    {
      name: "Aditi Sharma",
      text: "Amazing clinic! My skin glow has improved so much after just 2 sessions.",
    },
    {
      name: "Rohan Mehta",
      text: "Professional staff and great laser hair removal experience. Highly recommended!",
    },
    {
      name: "Sanaya Kapoor",
      text: "The Ayurveda therapy was incredibly relaxing. I feel completely rejuvenated.",
    },
  ];

  // Before/After images
  const galleryImages = [
    "https://images.unsplash.com/photo-1562322140-8b5d0b9a1c66?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1581091012184-5a02d8be2c2d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1559599749-6d03aabf04d0?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans antialiased scroll-smooth">

      {/* ---------------- NAVBAR ---------------- */}
      <nav className="bg-[#001b3d] shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <img src="src/assets/images/logo.png" alt="Elaria Esthetique Logo" className="h-16 w-auto" />
            <span className="text-2xl font-bold text-white">
              Elaria <span className="text-[#efae4c]">Esthetique</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Testimonials", href: "#testimonials" },
              // Changed Contact href to scroll to footer contact section
              { name: "Contact", href: "#contact-info" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-white hover:text-[#efae4c] transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(link.href);
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't overlap the navbar */}
      <div className="h-11"></div>

      {/* ---------------- HERO ---------------- */}
      <motion.section
        id="home"
        className=" relative h-[90vh] flex items-center justify-start pl-10 md:pl-20 pr-0 text-left bg-cover bg-center select-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,27,61,0.45), rgba(0,27,61,0.55)), url('src/assets/images/homepage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center ${offsetY}px`,
        }}
      >
        <div className="max-w-7xl text-white animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Feel Beautiful, <br /> Be Elaria.
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md">
            Premium Skin, Hair & Aesthetic Treatments — Tailored for You.
          </p>
          <button
            onClick={() => {
              const formSection = document.querySelector("#contact");
              if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 px-8 py-3 bg-[#efae4c] text-[#001b3d] rounded-full font-semibold hover:bg-[#d89b3e] transition-all shadow-lg"
          >
            Book Appointment
          </button>
        </div>
      </motion.section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-20 px-6 md:px-12 text-center max-w-4xl mx-auto scroll-mt-20">
        <h2 className="text-4xl font-semibold text-[#001b3d]">Welcome to Elaria Esthetique</h2>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          At Elaria Esthetique, we combine advanced medical aesthetics with holistic wellness.
          Our treatments are designed to help you look and feel your absolute best.
        </p>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section id="services" className="py-20 px-6 md:px-12 bg-white scroll-mt-20">
        <h2 className="text-4xl font-semibold text-center text-[#001b3d]">Our Services</h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center shadow hover:shadow-xl transition-transform"
            >
              <service.icon className="w-16 h-16 text-[#efae4c] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#001b3d]">{service.name}</h3>
              <p className="mt-3 text-gray-600">Advanced, safe and effective treatments tailored to your needs.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- BEFORE & AFTER GALLERY ---------------- */}
      <section className="py-20 px-6 md:px-12 bg-gray-100 scroll-mt-20">
        <h2 className="text-4xl font-semibold text-center text-[#001b3d]">Before & After</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt="Before After"
              whileHover={{ scale: 1.05 }}
              className="rounded-xl shadow-lg transition-transform"
            />
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section id="testimonials" className="py-20 px-6 md:px-12 bg-white scroll-mt-20">
        <h2 className="text-4xl font-semibold text-center text-[#001b3d]">What Our Clients Say</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic">“{t.text}”</p>
              <p className="mt-4 font-semibold text-[#001b3d]">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-gray-100 scroll-mt-20">
        <h2 className="text-4xl font-semibold text-center text-[#001b3d]">Get in Touch</h2>
        <form className="mt-12 max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border px-4 py-3 rounded-lg focus:border-[#efae4c] outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full border px-4 py-3 rounded-lg focus:border-[#efae4c] outline-none"
          />
          <select className="w-full border px-4 py-3 rounded-lg focus:border-[#efae4c] outline-none">
            <option>Select Service</option>
            <option>Skin Treatment</option>
            <option>Hair Treatment</option>
            <option>Laser</option>
            <option>Ayurveda</option>
            <option>Hair Transplant</option>
            <option>Slimming</option>
          </select>
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border px-4 py-3 rounded-lg focus:border-[#efae4c] outline-none"
          ></textarea>
          <button className="w-full py-3 bg-[#efae4c] text-[#001b3d] font-semibold rounded-lg hover:bg-[#d89b3e] transition">
            Submit
          </button>
        </form>
      </section>

      {/* ---------------- FOOTER with CONTACT INFO & MAP ---------------- */}
      <footer id="contact-info" className="bg-[#001b3d] text-white pt-0 scroll-mt-20">

        {/* Heading */}
        <h3 className="text-3xl font-semibold text-center text-[#efae4c] pt-12 mb-10">
          Contact Us
        </h3>

        {/* Google Map Container */}
        <div className="w-4/5 mx-auto h-80 md:h-96 overflow-hidden rounded-b-3xl shadow-lg mt-12 border-t border-gray-700">
  <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.911469729931!2d77.04964701112411!3d28.42192807567939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23ff4eebcc05%3A0x44330a89824af893!2sDr.%20Haror&#39;s%20Wellness%20-%20Best%20Dermatologist%20Gurgaon!5e0!3m2!1sen!2sin!4v1764507862251!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Elaria Esthetique Map"
          ></iframe>
        </div>

        {/* Contact & Social Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

            {/* Brand */}
            <div>
              <h4 className="text-2xl font-semibold">Elaria Esthetique</h4>
              <p className="mt-2 text-gray-300">Premium Aesthetic & Wellness Center.</p>
              <p className="mt-1 text-gray-400 italic">Feel Beautiful, Be Elaria.</p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-[#efae4c]">Contact</h4>
              <p className="mt-2 text-gray-300">📍 Delhi, India</p>
              <p className="text-gray-300">📞 +91 9876543210</p>
              <p className="text-gray-300">📧 info@elaria.com</p>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-[#efae4c]">Follow Us</h4>
              <div className="mt-2 flex justify-center md:justify-start space-x-6 text-gray-300">
                <span className="hover:text-[#efae4c] cursor-pointer">Twitter</span>
                <span className="hover:text-[#efae4c] cursor-pointer">Facebook</span>
                <span className="hover:text-[#efae4c] cursor-pointer">Instagram</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 mt-10 text-sm pb-6">
          © {new Date().getFullYear()} Elaria Esthetique — All Rights Reserved.
        </p>
      </footer>

      {/* -------- BACK TO TOP BUTTON -------- */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 bg-[#efae4c] text-[#001b3d] p-3 rounded-full shadow-lg hover:bg-[#d89b3e] transition focus:outline-none focus:ring-4 focus:ring-[#efae4c]"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>

    </div>
  );
}
