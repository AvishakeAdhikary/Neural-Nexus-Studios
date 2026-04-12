import './globals.css';
import { clsx } from 'clsx';

export const metadata = {
  title: 'Neural Nexus Studios',
  description: 'AI consulting, automation, and machine learning solutions with a refined, modern aesthetic.',
  metadataBase: new URL('https://avishakeadhikary.github.io/Neural-Nexus-Studios'),
  icons: {
    icon: '/Neural-Nexus-Studios/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('dark')}>
      <body>
        {children}
      </body>
    </html>
  );
}
