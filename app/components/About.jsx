"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm a management science postgraduate passionate about combining 
        <span className="text-cyan-400"> optimization </span> and 
        <span className="text-blue-400"> machine learning </span>.  
        I aim to become an algorithm engineer who bridges theory and real-world impact.
      </motion.p>
    </section>
  );
}
