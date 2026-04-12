import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = { title: 'About · Neural Nexus Studios' };

export default function AboutPage() {
  return (
    <main>
      <NavBar />
      <section className="container py-16 sm:py-24">
        <h1 className="text-3xl font-bold text-white">About</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
          Neural Nexus Studios is a one‑person AI company focused on building systems that make everyday life easier and AI accessible to everyone. I research, prototype, train, fine‑tune, and deploy models — and I debug them when they misbehave.
        </p>
        <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
          The work is grounded in first‑principles thinking, careful evaluation, and shipping minimal, reliable products. Tools change; principles don’t.
        </p>
      </section>
      <Footer />
    </main>
  );
}
