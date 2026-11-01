import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { loadLegal, renderMarkdown } from '@/components/LegalDoc';

export const metadata = { title: 'NexRemote Privacy Policy · Neural Nexus Studios' };

export default function NexRemotePrivacyPage() {
  return (
    <main>
      <NavBar />
      <article className="container max-w-3xl py-16 sm:py-24">{renderMarkdown(loadLegal('nexremote-privacy.md'))}</article>
      <Footer />
    </main>
  );
}
