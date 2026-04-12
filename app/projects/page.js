import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export const metadata = { title: 'Projects · Neural Nexus Studios' };

export default function ProjectsPage() {
  return (
    <main>
      <NavBar />
      <section className="container py-16 sm:py-24">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
          Selected work. Each project has its own page with details and downloads.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="card block no-underline">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{p.tagline}</p>
              <span className="mt-4 inline-block text-xs text-[color:var(--accent)]">View details →</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
