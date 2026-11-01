import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { loadLegal, renderMarkdown } from '@/components/LegalDoc';

export const metadata = { title: 'NexRemote Terms of Service · Neural Nexus Studios' };

export default function NexRemoteTermsPage() {
  return (
    <main>
      <NavBar />
      <article className="container max-w-3xl py-16 sm:py-24">{renderMarkdown(loadLegal('nexremote-terms.md'))}</article>
      <Footer />
    </main>
  );
}
