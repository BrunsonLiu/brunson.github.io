export default function Card({ title, description, href }) {
  return (
    <a href={href} className="block card card-hover p-6 transition">
      <h3 className="font-semibold" style={{ color: "var(--brand)" }}>{title}</h3>
      {description ? <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{description}</p> : null}
    </a>
  );
}


