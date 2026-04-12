export const projects = [
  {
    slug: 'nexremote',
    title: 'NexRemote',
    tagline: 'Control your PC from your phone — simple, fast, and private.',
    summary:
      'Windows + Android companion that lets you view your screen, send input, and transfer files with a privacy-first design. Free and ad‑free.',
    links: {
      microsoftInstaller: 'https://get.microsoft.com/installer/download/9p4rn2kggjxc?referrer=appbadge',
      microsoftStore: 'https://apps.microsoft.com/detail/9P4RN2KGGJXC',
      githubReleases: 'https://github.com/AvishakeAdhikary/NexRemote/releases/latest'
    }
  }
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}