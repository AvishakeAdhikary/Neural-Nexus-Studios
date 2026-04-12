import Link from 'next/link';

export default function NavBar() {
  const items = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/focus', label: 'Focus' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/70 bg-[color:var(--bg)]/70 backdrop-blur-md">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[color:var(--accent)] text-black shadow-glow-red">N</span>
          <span className="text-white transition-colors group-hover:text-[color:var(--accent)]">Neural Nexus Studios</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="text-[color:var(--muted)] transition-colors hover:text-white">
              {it.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
