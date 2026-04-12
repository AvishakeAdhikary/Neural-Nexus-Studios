export default function GlowCard({ title, desc, icon }) {
  return (
    <div className="card group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" style={{
        background:
          'radial-gradient(120px 80px at 20% 10%, rgba(239,68,68,0.2), transparent 60%), radial-gradient(140px 100px at 80% 90%, rgba(255,255,255,0.08), transparent 60%)'
      }} />
      <div className="mb-3 text-[color:var(--accent)]">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-[color:var(--muted)]">{desc}</p>
    </div>
  );
}
