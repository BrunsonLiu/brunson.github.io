"use client";
import { useEffect, useState } from "react";

export default function ToneToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    if (typeof document !== "undefined") {
      if (initial === "light") document.documentElement.setAttribute("data-theme", "light");
      else document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof document !== "undefined") {
      if (next === "light") document.documentElement.setAttribute("data-theme", "light");
      else document.documentElement.removeAttribute("data-theme");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next);
    }
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="text-sm px-3 py-1.5 rounded-lg surface text-cyan-700">
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}


