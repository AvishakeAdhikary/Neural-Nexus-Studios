export function MicrosoftStoreButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="btn no-underline"
      aria-label="Get it from Microsoft Store"
    >
      <span className="mr-1 inline-block h-3 w-3 bg-[color:var(--accent)]"></span>
      Get it from Microsoft Store
    </a>
  );
}

export function GithubReleasesButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="btn no-underline"
      aria-label="Get Android APK from GitHub Releases"
    >
      Download APK (GitHub Releases)
    </a>
  );
}
