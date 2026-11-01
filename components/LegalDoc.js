import fs from 'node:fs';
import path from 'node:path';

// Minimal Markdown for the bundled legal documents: headings, paragraphs, bullet lists,
// **bold** and bare links. Rendered at build time (static export).

function inline(text, keyBase) {
  const parts = [];
  const pattern = /(\*\*[^*]+\*\*|https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.]+)/g;
  let last = 0;
  let match;
  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    const key = `${keyBase}-${match.index}`;
    if (token.startsWith('**')) parts.push(<strong key={key} className="text-white">{token.slice(2, -2)}</strong>);
    else if (token.startsWith('http'))
      parts.push(<a key={key} href={token} className="underline" rel="noreferrer">{token}</a>);
    else parts.push(<a key={key} href={`mailto:${token}`} className="underline">{token}</a>);
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function renderMarkdown(source) {
  const blocks = [];
  let paragraph = [];
  let list = [];
  const flush = () => {
    if (paragraph.length) {
      const k = blocks.length;
      blocks.push(<p key={k} className="mt-3 text-[color:var(--muted)] leading-relaxed">{inline(paragraph.join(' '), k)}</p>);
      paragraph = [];
    }
    if (list.length) {
      const k = blocks.length;
      blocks.push(
        <ul key={k} className="mt-3 list-disc space-y-1 pl-6 text-[color:var(--muted)]">
          {list.map((item, i) => <li key={i}>{inline(item, `${k}-${i}`)}</li>)}
        </ul>,
      );
      list = [];
    }
  };
  for (const raw of source.replace(/\r\n/g, '\n').split('\n')) {
    const line = raw.trimEnd();
    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      flush();
      const k = blocks.length;
      const level = heading[1].length;
      if (level === 1) blocks.push(<h1 key={k} className="text-3xl font-bold text-white">{heading[2]}</h1>);
      else if (level === 2) blocks.push(<h2 key={k} className="mt-8 text-xl font-semibold text-white">{heading[2]}</h2>);
      else blocks.push(<h3 key={k} className="mt-5 font-semibold text-white">{heading[2]}</h3>);
    } else if (/^\s*[-*]\s+/.test(line)) {
      if (paragraph.length) flush();
      list.push(line.replace(/^\s*[-*]\s+/, ''));
    } else if (!line.trim()) {
      flush();
    } else {
      if (list.length) flush();
      paragraph.push(line.trim());
    }
  }
  flush();
  return blocks;
}

export function loadLegal(file) {
  return fs.readFileSync(path.join(process.cwd(), 'data', 'legal', file), 'utf8');
}
