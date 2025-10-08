"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Learning to Optimize (L2O)",
    desc: "Neural networks learning heuristic solvers for combinatorial optimization.",
  },
  {
    title: "VRP Reinforcement Learning",
    desc: "Using policy gradient to solve vehicle routing problems efficiently.",
  },
  {
    title: "Supply Chain Optimization",
    desc: "Hybrid MILP + ML models to enhance logistics coordination.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card card-hover p-6 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--brand)" }}>{p.title}</h3>
            <p style={{ color: "var(--muted)" }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
