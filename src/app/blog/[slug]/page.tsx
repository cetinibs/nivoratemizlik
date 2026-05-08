import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { blogPosts, getBlogPostBySlug } from '@/lib/blog-posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.nivoratemizlik.com/blog/${post.slug}`,
      languages: {
        'tr-TR': `https://www.nivoratemizlik.com/blog/${post.slug}`,
        'x-default': `https://www.nivoratemizlik.com/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: `${post.title} | Nivora Temizlik`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.nivoratemizlik.com/blog/${post.slug}`,
      images: [{ url: '/images/slider1.png', width: 1200, height: 800, alt: post.title }],
    },
  }
}

function ArrowRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Nivora Temizlik',
      url: 'https://www.nivoratemizlik.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nivora Temizlik',
      url: 'https://www.nivoratemizlik.com',
    },
    url: `https://www.nivoratemizlik.com/blog/${post.slug}`,
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  // Convert markdown-like content to paragraphs
  const contentBlocks = post.content
    .trim()
    .split('\n\n')
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith('## ')) return { type: 'h2', text: block.slice(3) }
      if (block.startsWith('### ')) return { type: 'h3', text: block.slice(4) }
      if (block.startsWith('**') && block.endsWith('**')) return { type: 'strong', text: block.slice(2, -2) }
      if (block.includes('\n- ')) {
        const lines = block.split('\n').filter((l) => l.startsWith('- '))
        return { type: 'ul', items: lines.map((l) => l.slice(2)) }
      }
      return { type: 'p', text: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }
    })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-dm text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-white/40 text-xs font-dm">{post.readTime} okuma</span>
            </div>
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-4">
              {post.title}
            </h1>
            <p className="font-dm text-white/55 text-base">
              {new Date(post.date).toLocaleDateString('tr-TR', {
                year: 'numeric', month: 'long', day: 'numeric',
              })}
              {' '}· Nivora Temizlik
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-14">
            {/* Content */}
            <article className="prose-nivora" itemScope itemType="https://schema.org/Article">
              <p className="font-cormorant text-2xl text-navy-800 leading-relaxed mb-8 font-medium border-l-4 border-cyan-500 pl-6">
                {post.excerpt}
              </p>
              {contentBlocks.map((block, i) => {
                if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
                if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>
                if (block.type === 'ul')
                  return (
                    <ul key={i}>
                      {block.items?.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )
                if (block.type === 'strong') return <p key={i}><strong>{block.text}</strong></p>
                return (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{ __html: block.text || '' }}
                  />
                )
              })}

              {/* CTA inline */}
              <div className="mt-12 bg-navy-900 rounded-2xl p-8 not-prose">
                <h3 className="font-cormorant text-2xl font-bold text-white mb-3">
                  Profesyonel Temizlik Hizmeti mi Arıyorsunuz?
                </h3>
                <p className="font-dm text-white/60 text-sm mb-6 leading-relaxed">
                  İstanbul genelinde ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin.
                </p>
                <Link href="/iletisim" className="btn-primary">
                  Ücretsiz Teklif Al <ArrowRight />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 sticky top-24">
                <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-3">
                  Ücretsiz Teklif Alın
                </h3>
                <p className="font-dm text-slate-500 text-sm mb-5">
                  Keşif yapıp size özel fiyat belirleyelim.
                </p>
                <Link href="/iletisim" className="btn-primary w-full justify-center mb-3">
                  Teklif İste
                </Link>
                <a href="tel:+908501234567" className="block text-center font-dm text-slate-500 text-sm hover:text-navy-900 transition-colors">
                  0850 123 45 67
                </a>
              </div>

              {/* Related posts */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-4">İlgili Yazılar</h3>
                <div className="space-y-4">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="block group"
                    >
                      <div className="font-dm text-xs text-cyan-600 font-semibold mb-1">{rp.category}</div>
                      <h4 className="font-dm font-semibold text-navy-900 text-sm leading-snug group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {rp.title}
                      </h4>
                      <div className="font-dm text-slate-400 text-xs mt-1">
                        {new Date(rp.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services quick links */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-4">Hizmetlerimiz</h3>
                <div className="space-y-2">
                  {[
                    { href: '/hizmetlerimiz/ofis-temizligi', label: 'Ofis Temizliği' },
                    { href: '/hizmetlerimiz/insaat-sonrasi-temizlik', label: 'İnşaat Sonrası' },
                    { href: '/hizmetlerimiz/fabrika-temizligi', label: 'Fabrika Temizliği' },
                    { href: '/hizmetlerimiz/otel-temizligi', label: 'Otel Temizliği' },
                  ].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 group font-dm text-sm text-slate-600 hover:text-cyan-600 transition-colors"
                    >
                      {s.label}
                      <ArrowRight />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
