import type { Metadata } from 'next'
import LandingPageView from '@/components/LandingPageView'
import { getLandingPageBySlug } from '@/lib/landing-pages'

const SLUG = 'kurumsal-temizlik-firmalari'
const page = getLandingPageBySlug(SLUG)!

export const metadata: Metadata = {
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: page.keywords,
  alternates: {
    canonical: `https://www.nivoratemizlik.com/${SLUG}`,
    languages: {
      'tr-TR': `https://www.nivoratemizlik.com/${SLUG}`,
      'x-default': `https://www.nivoratemizlik.com/${SLUG}`,
    },
  },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `https://www.nivoratemizlik.com/${SLUG}`,
    type: 'website',
    images: [{ url: '/images/slider1.png', width: 1200, height: 800, alt: page.metaTitle }],
  },
}

export default function Page() {
  return <LandingPageView page={page} />
}
