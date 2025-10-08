"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";

export default function LearningList({ notes }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    if (!q) return notes;
    const fuse = new Fuse(notes, { keys: ["slug", "meta.title", "meta.description"], threshold: 0.4 });
    return fuse.search(q).map((r) => r.item);
  }, [q, notes]);

  return (
    <>
      <div className="mb-6">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search notes..." className="w-full rounded-xl bg-white/10 px-4 py-2 text-white placeholder-gray-400 outline-none" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((n) => (
          <Link key={n.slug} href={`/learning/${n.slug}`} className="block bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition">
            <h3 className="text-cyan-300 font-medium">{n.meta.title || n.slug}</h3>
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">{n.meta.description || ""}</p>
          </Link>
        ))}
      </div>
    </>
  );
}


