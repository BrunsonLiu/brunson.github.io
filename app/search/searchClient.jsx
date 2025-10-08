"use client";
import Fuse from "fuse.js";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function SearchClient({ items }) {
  const [q, setQ] = useState("
");
  const results = useMemo(() => {
    if (!q) return items;
    const fuse = new Fuse(items, {
      keys: ["title", "description", "category", "slug"],
      threshold: 0.35,
    });
    return fuse.search(q).map((r) => r.item);
  }, [q, items]);

  return (
    <>
      <div className="mb-6">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search across notes..." className="w-full rounded-xl bg-white/10 px-4 py-2 text-white placeholder-gray-400 outline-none" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((n) => (
          <Link key={`${n.category}-${n.slug}`} href={n.url} className="block bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition">
            <div className="text-xs text-gray-400 mb-1">{n.category}</div>
            <h3 className="text-cyan-300 font-medium">{n.title}</h3>
            <p className="text-gray-400 text-sm mt-2 line-clamp-2">{n.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}


