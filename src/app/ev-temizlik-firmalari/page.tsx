import type { Metadata } from 'next'
import LandingPageView from '@/components/LandingPageView'
import { getLandingPageBySlug } from '@/lib/landing-pages'

const SLUG = 'ev-temizlik-firmalari'
const page = getLandingPageBySlug(SLUG)!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: page.keywords,
  alternates: { canonical: `https://www.nivoratemizlik.com/${SLUG}` },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `https://www.nivoratemizlik.com/${SLUG}`,
    type: 'website',
  },
}

export default function Page() {
  return <LandingPageView page={page} />
}
