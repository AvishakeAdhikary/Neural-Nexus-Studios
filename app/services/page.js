import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Focus Areas · Neural Nexus Studios' };

const areas = [
  {
    title: 'Model Debugging & Evals',
    bullets: [
      'Define failure modes and success metrics',
      'Curate adversarial datasets and red-team prompts',
      'Benchmark reliably and close the loop'
    ]
  },
  {
    title: 'Training & Fine‑Tuning',
    bullets: [
      'From-scratch training for small, task-specific models',
      'LoRA/QLoRA and instruction-tuning for targeted gains',
      'Data recipes and token budgets that fit reality'
    ]
  },
  {
    title: 'Applied Research & Prototyping',
    bullets: [
      'Explore ideas quickly; validate with minimal systems',
      'Ablations that separate signal from noise',
      'Clear docs, reproducible results'
    ]
  },
  {
    title: 'Productization & Deployment',
    bullets: [
      'Reliability, cost, and latency tradeoffs by design',
      'Edge, web, or local-first deployments',
      'Observability, safety rails, and rollback plans'
    ]
  }
];

export default function FocusAreasPage() {
  return (
    <main>
      <NavBar />
      <section className="container py-16 sm:py-24">
        <h1 className="text-3xl font-bold text-white">Focus Areas</h1>
        <p className="mt-3 max-w-2xl text-[color:var(--muted)]">
          Work centered on making AI actually useful in everyday life. No buzzwords — just disciplined engineering and clear results.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {areas.map((s) => (
            <div key={s.title} className="card">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[color:var(--muted)]">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
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
