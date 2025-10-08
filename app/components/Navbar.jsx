"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full flex justify-center py-4 surface backdrop-blur-xl z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul className="flex gap-8 text-lg font-medium">
        <li><a href="/" className="hover:text-cyan-400 transition">Home</a></li>
        <li><a href="/about" className="hover:text-cyan-400 transition">About</a></li>
        <li><a href="/learning" className="hover:text-cyan-400 transition">Learning</a></li>
        <li><a href="/research" className="hover:text-cyan-400 transition">Research</a></li>
        <li><a href="/internship" className="hover:text-cyan-400 transition">Internship</a></li>
        <li><a href="/diary" className="hover:text-cyan-400 transition">Diary</a></li>
        <li><a href="/search" className="hover:text-cyan-400 transition">Search</a></li>
        <li><a href="/contact" className="hover:text-cyan-400 transition">Contact</a></li>
      </ul>
    </motion.nav>
  );
}
