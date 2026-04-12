import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Contact · Neural Nexus Studios' };

export default function ContactPage() {
  return (
    <main>
      <NavBar />
      <section className="container py-16 sm:py-24">
        <h1 className="text-3xl font-bold text-white">Contact</h1>
        <p className="mt-4 max-w-2xl text-[color:var(--muted)]">
          Tell us about your project. We’ll get back within 48 hours.
        </p>
        <form className="mt-8 max-w-xl space-y-4">
          <div>
            <label className="mb-1 block text-xs text-[color:var(--muted)]">Name</label>
            <input className="w-full rounded-md border border-zinc-800 bg-[color:var(--panel)] p-2 text-sm text-white outline-none ring-[color:var(--accent)]/30 focus:ring-2" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-[color:var(--muted)]">Email</label>
            <input type="email" className="w-full rounded-md border border-zinc-800 bg-[color:var(--panel)] p-2 text-sm text-white outline-none ring-[color:var(--accent)]/30 focus:ring-2" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-[color:var(--muted)]">Message</label>
            <textarea rows={5} className="w-full resize-y rounded-md border border-zinc-800 bg-[color:var(--panel)] p-2 text-sm text-white outline-none ring-[color:var(--accent)]/30 focus:ring-2" />
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
