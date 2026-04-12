import AnimatedBackground from '@/components/AnimatedBackground';
import TypingTitle from '@/components/TypingTitle';
import ChatBubbles from '@/components/ChatBubbles';
import GlowCard from '@/components/GlowCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Bug, Cog, FlaskConical, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <AnimatedBackground />
      <NavBar />

      <section className="container relative py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[color:var(--panel)] px-3 py-1 text-xs text-[color:var(--muted)]">
            <span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--accent)]" />
            Independent AI studio — research, build, ship
          </span>
          <TypingTitle
            text="Neural Nexus Studios"
            className="mt-6 inline-block bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-6xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-[color:var(--muted)] sm:text-lg">
            I design, debug, and deploy AI systems from first principles. The goal is simple: make everyday life easier and AI accessible to everyone — not by chasing trends, but by building what actually works.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a className="btn" href="#focus">Explore Focus Areas</a>
            <Link className="btn" href="/projects">See Projects</Link>
          </div>
        </div>
        <ChatBubbles />
      </section>

      <section id="focus" className="container py-16 sm:py-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Focus Areas</h2>
          <span className="text-xs text-[color:var(--muted)]">Build what helps people, not hype</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <GlowCard title="Model Debugging & Evals" desc="Pinpoint failure modes, design adversarial tests, and raise reliability." icon={<Bug size={18} />} />
          <GlowCard title="Training & Fine‑Tuning" desc="From-scratch training and targeted adaptation for real constraints." icon={<FlaskConical size={18} />} />
          <GlowCard title="Applied Research & Prototypes" desc="Explore ideas quickly, prove value, and cut to the essentials." icon={<Cog size={18} />} />
          <GlowCard title="Productization & Deployment" desc="Turn research into durable products — edge, web, or local-first." icon={<Rocket size={18} />} />
        </div>
      </section>

      <section className="container py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white sm:text-2xl">Approach</h3>
            <p className="mt-3 text-[color:var(--muted)]">
              Define the problem precisely. Build the smallest thing that can fail. Measure. Iterate. Ship. Repeat. Tools and models change — principles don’t.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[color:var(--muted)]">
              <li>First‑principles thinking over buzzwords</li>
              <li>Measurable evals over vibes</li>
              <li>Accessibility and everyday impact over vanity demos</li>
            </ul>
          </div>
          <div className="card">
            <pre className="whitespace-pre-wrap text-xs text-zinc-300">{`pipeline: {
  define: spec(problem, constraints),
  build: prototype(minimum_system),
  measure: evals(failure_modes),
  iterate: tighten(loop),
  ship: deploy(targets)
}`}</pre>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
