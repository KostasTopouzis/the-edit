import type { Metadata } from 'next';
import Storefront from '../components/Storefront';
import { getLanguage, translations } from '../i18n';

type PageProps = {
  searchParams: Promise<{ lang?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const t = translations[getLanguage((await searchParams).lang)];
  return { title: t.documentTitle, description: t.documentDescription };
}

export default async function Home({ searchParams }: PageProps) {
  const language = getLanguage((await searchParams).lang);
  return <Storefront initialLanguage={language} />;
}
