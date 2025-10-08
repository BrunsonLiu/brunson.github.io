export default function Timeline({ items }) {
  return (
    <ol className="relative border-s border-white/10 pl-6">
      {items.map((it, idx) => (
        <li key={idx} className="mb-6">
          <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-cyan-400" />
          <p className="text-sm text-gray-400">{it.date}</p>
          <h3 className="text-white font-medium">{it.title}</h3>
          {it.description ? (
            <p className="text-gray-300 mt-1">{it.description}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}


