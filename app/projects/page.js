import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { FlaskConical, Cpu, Database, Satellite } from 'lucide-react';

export const metadata = { title: 'Projects · Neural Nexus Studios' };

const projects = [
  {
    title: 'Everyday AI Toolkit',
    icon: <Cpu size={16} />,
    summary: 'Local‑first utilities that bring practical AI to daily workflows with privacy by default.',
    highlights: ['On‑device inference', 'Small helpful models', 'Zero cloud requirement']
  },
  {
    title: 'Model Debugger',
    icon: <FlaskConical size={16} />,
    summary: 'Open eval harness for finding failure modes and measuring fixes with clarity.',
    highlights: ['Adversarial datasets', 'Reproducible runs', 'Actionable reports']
  },
  {
    title: 'RAG, Done Right',
    icon: <Database size={16} />,
    summary: 'Retrieval that prefers correctness over vibes — strong indexing and grounded answers.',
    highlights: ['Document fingerprints', 'Answer provenance', 'Latency-aware design']
  },
  {
    title: 'Edge Vision Prototype',
    icon: <Satellite size={16} />,
    summary: 'Tiny vision model trained from scratch for a constrained, real‑world environment.',
    highlights: ['Small data regime', 'Quantized inference', 'Battery‑friendly']
  }
];

export default function ProjectsPage() {
  return (
    <main>
      <NavBar />
      <section className="container py-16 sm:py-24">
        <h1 className="text-3xl font-bold text-white">Projects</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
          Selected work and experiments. Some are shipped, some are in progress — all are focused on solving real problems.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="card">
              <div className="mb-2 inline-flex items-center gap-2 text-[color:var(--accent)]">
                {p.icon}
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="text-sm text-[color:var(--muted)]">{p.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                {p.highlights.map((h) => (
                  <li key={h} className="rounded border border-zinc-800 px-2 py-1">{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
