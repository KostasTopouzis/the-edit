import type { Metadata, Viewport } from 'next';
import { Commissioner, Noto_Serif_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import { defaultLanguage, translations } from '../i18n';
import './globals.css';

// Both subsets are preloaded, so switching language never swaps in a font
// that has not downloaded yet.
const bodyFont = Commissioner({
  subsets: ['latin', 'greek'],
  variable: '--font-body',
});

const displayFont = Noto_Serif_Display({
  subsets: ['latin', 'greek'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: translations[defaultLanguage].documentTitle,
  description: translations[defaultLanguage].documentDescription,
};

export const viewport: Viewport = {
  themeColor: '#f6f1e9',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${bodyFont.variable} ${displayFont.variable}`} lang={defaultLanguage}>
      <body>{children}</body>
    </html>
  );
}
