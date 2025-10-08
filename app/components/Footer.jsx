"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="py-10 text-center text-gray-400">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © 2025 Brunson. Crafted with ❤️ using Next.js + Tailwind + Framer Motion.
      </motion.p>
    </footer>
  );
}
