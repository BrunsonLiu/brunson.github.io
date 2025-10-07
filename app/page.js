"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";

/**
 * 直接替换到 app/page.js（或 src/app/page.js）
 * 记得：安装依赖 -> npm i framer-motion react-icons
 * 并把 public/avatar.jpg / public/cv.pdf 等替换为你的资源
 */

export default function Home() {
  const [dark, setDark] = useState(true);

  const projects = [
    {
      title: "RL-VRP Solver",
      desc: "Reinforcement Learning approach to Vehicle Routing Problem. Benchmarks vs heuristics.",
      repo: "#",
      live: "#",
      tags: ["RL", "Combinatorial", "GNN"],
    },
    {
      title: "Learning-to-Optimize Framework",
      desc: "Neural optimizer experiments on combinatorial problems: generalization & benchmarks.",
      repo: "#",
      live: "#",
      tags: ["L2O", "PyTorch", "Gurobi"],
    },
    {
      title: "Supply Chain MIP System",
      desc: "Multi-echelon logistics MIP model + solver pipelines and dashboards.",
      repo: "#",
      live: "#",
      tags: ["MIP", "Optimization", "OR-Tools"],
    },
  ];

  const papers = [
    {
      title: "Draft: Learning-to-Optimize for VRP",
      venue: "arXiv (working draft)",
      pdf: "/papers/L2O_VRP_draft.pdf",
    },
    {
      title: "Robust Routing with RL",
      venue: "Conference (in prep)",
      pdf: "/papers/rl_vrp.pdf",
    },
  ];

  return (
    <div className={dark ? "bg-gradient-to-br from-slate-900 via-gray-900 to-black text-slate-100" : "bg-white text-slate-900"}>
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-blue-400 to-violet-500 font-bold text-lg">Br</div>
          <div>
            <div className="text-sm opacity-80">Brunson</div>
            <div className="text-xs opacity-60">Optimization · ML · Algorithms</div>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#papers" className="text-sm hover:underline">Papers</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 px-3 py-1 rounded-full border text-sm"
            aria-label="toggle-theme"
          >
            {dark ? "Dark" : "Light"}
          </button>
        </nav>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi — I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-400">Brunson</span>.<br />
              I build algorithms that think.
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-lg text-slate-300">
              Postgraduate in Management Science. Research: Learning-to-Optimize, Graph ML, RL for combinatorial optimization.
              <br />
              Goal → Algorithm Engineer: optimization + ML for real systems.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow" href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" href="/cv.pdf" download>
                <FaFilePdf /> Download CV
              </a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" href="#contact">
                <FaEnvelope /> Contact
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-sm text-slate-400">Core skills</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "C++", "PyTorch", "Gurobi", "OR-Tools", "GraphNN", "RL"].map((t) => (
                  <span key={t} className="px-3 py-1 text-sm rounded-full bg-slate-800/60 border">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card with animated accent */}
          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="relative">
            <div className="w-full rounded-2xl p-6 bg-gradient-to-tr from-slate-800/60 to-slate-700/50 backdrop-blur border border-slate-700">
              <div className="flex items-center gap-4">
                <img src="/avatar.jpg" alt="Brunson" className="w-20 h-20 rounded-lg object-cover" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/80'}}/>
                <div>
                  <div className="text-lg font-semibold">Brunson</div>
                  <div className="text-sm text-slate-400">Management Science • Learning-to-Optimize</div>
                </div>
              </div>

              <div className="mt-4 text-slate-300 text-sm">
                I design algorithms that combine mathematical rigor with experimental ML. I enjoy prototyping solver-hybrid pipelines and turning research into reproducible code.
              </div>

              <div className="mt-4 flex gap-3">
                <a href="#projects" className="text-sm px-3 py-2 rounded-md border">See Projects</a>
                <a href="#papers" className="text-sm px-3 py-2 rounded-md border">Papers</a>
              </div>
            </div>

            {/* decorative ring */}
            <div className="pointer-events-none absolute -right-6 -top-6 w-36 h-36 rounded-full bg-gradient-to-tr from-transparent to-violet-600 opacity-20 blur-2xl" />
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <h3 className="text-2xl font-semibold">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {projects.map((p) => (
              <motion.article key={p.title} whileHover={{ y: -6 }} className="p-4 bg-slate-800/60 border border-slate-700 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      {p.tags.map((t)=> <span key={t} className="px-2 py-1 text-xs rounded bg-slate-700/40">{t}</span>)}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <a href={p.repo} className="text-sm px-3 py-1 rounded border">Repo</a>
                  <a href={p.live} className="text-sm px-3 py-1 rounded border">Live</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Papers */}
        <section id="papers" className="mt-16">
          <h3 className="text-2xl font-semibold">Papers & Reports</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {papers.map((s)=>(
              <div key={s.title} className="p-4 bg-slate-800/60 rounded-lg border">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-sm text-slate-400">{s.venue}</div>
                  </div>
                  <a href={s.pdf} className="text-sm px-3 py-1 rounded border">PDF</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog teaser */}
        <section id="blog" className="mt-16">
          <h3 className="text-2xl font-semibold">Thoughts & Notes</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <article className="p-4 bg-slate-800/60 rounded border">
              <div className="text-sm text-slate-300">How I benchmark L2O models — quick notes + experiments</div>
              <div className="mt-3 text-xs text-slate-400">Jun 2025 · 8 min read</div>
            </article>
            <article className="p-4 bg-slate-800/60 rounded border">
              <div className="text-sm text-slate-300">Designing robust RL for routing under demand uncertainty</div>
              <div className="mt-3 text-xs text-slate-400">Apr 2025 · 6 min read</div>
            </article>
            <article className="p-4 bg-slate-800/60 rounded border">
              <div className="text-sm text-slate-300">Practical tips: Gurobi tuning & warm starts</div>
              <div className="mt-3 text-xs text-slate-400">Mar 2025 · 5 min read</div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-300">Email me or use the form. I respond to research/collab/industry inquiries.</p>
              <div className="mt-4 flex gap-3 items-center">
                <a className="inline-flex items-center gap-2 px-3 py-2 rounded border" href="mailto:your_email@xx.com"><FaEnvelope /> your_email@xx.com</a>
                <a className="inline-flex items-center gap-2 px-3 py-2 rounded border" href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                <a className="inline-flex items-center gap-2 px-3 py-2 rounded border" href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
              </div>
            </div>

            <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-3">
              <input name="name" required placeholder="Your name" className="w-full p-3 rounded border bg-transparent" />
              <input name="email" type="email" required placeholder="Email" className="w-full p-3 rounded border bg-transparent" />
              <textarea name="message" rows={4} placeholder="Message" className="w-full p-3 rounded border bg-transparent"></textarea>
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-violet-500 text-white">Send</button>
                <a href="mailto:your_email@xx.com" className="px-4 py-2 rounded border">Email fallback</a>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-20 pb-12 text-center text-sm text-slate-400">
          <div className="max-w-xl mx-auto">
            <div>© {new Date().getFullYear()} Brunson • Built with Next.js + Tailwind</div>
            <div className="mt-2 opacity-80">
              <img src={`https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=nightowl`} alt="github stats" className="mx-auto mt-3"/>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
