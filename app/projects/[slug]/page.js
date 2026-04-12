import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { MicrosoftStoreButton, GithubReleasesButton } from '@/components/StoreButtons';
import { getProject, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const proj = getProject(slug);
  return {
    title: proj ? `${proj.title} · Neural Nexus Studios` : 'Project · Neural Nexus Studios'
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const proj = getProject(slug);
  if (!proj) {
    return (
      <main>
        <NavBar />
        <section className="container py-16 sm:py-24">
          <h1 className="text-3xl font-bold text-white">Project</h1>
          <p className="mt-4 text-[color:var(--muted)]">Project not found.</p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <NavBar />
      <section className="container py-16 sm:py-24">
        <h1 className="text-3xl font-bold text-white">{proj.title}</h1>
        <p className="mt-3 max-w-2xl text-[color:var(--muted)]">{proj.tagline}</p>
        <p className="mt-3 max-w-2xl text-[color:var(--muted)]">{proj.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {proj.links?.microsoftInstaller && (
            <MicrosoftStoreButton href={proj.links.microsoftInstaller} />
          )}
          {proj.links?.githubReleases && (
            <GithubReleasesButton href={proj.links.githubReleases} />
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
