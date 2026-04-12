export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/70 py-10">
      <div className="container flex flex-col items-center justify-between gap-3 text-xs text-[color:var(--muted)] sm:flex-row">
        <p>© {new Date().getFullYear()} Neural Nexus Studios. All rights reserved.</p>
        <p>Built with Next.js · Deployed on GitHub Pages</p>
      </div>
    </footer>
  );
}
