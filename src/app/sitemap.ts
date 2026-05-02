import { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { blogPosts } from '@/lib/blog-posts'
import { landingPages } from '@/lib/landing-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.nivoratemizlik.com'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/hakkimizda`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/hizmetlerimiz`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/yorumlar`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
  ]

  const landingPageUrls: MetadataRoute.Sitemap = landingPages.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.95,
  }))

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/hizmetlerimiz/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...landingPageUrls, ...servicePages, ...blogPages]
}
