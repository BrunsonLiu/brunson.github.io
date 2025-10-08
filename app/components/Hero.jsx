"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center relative bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Hey, I'm Brunson 👋
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A postgraduate exploring <span className="text-cyan-400">Optimization + Machine Learning</span>.  
          I love algorithms, interdisciplinary research, and elegant design.
        </p>
      </motion.div>
    </section>
  );
}