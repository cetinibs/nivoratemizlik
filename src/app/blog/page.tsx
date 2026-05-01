import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { blogPosts } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog — İstanbul Temizlik Rehberleri ve İpuçları',
  description:
    "Kurumsal temizlik, ofis hijyeni, inşaat sonrası temizlik ve İstanbul ilçelerine özel temizlik rehberleri. Nivora Temizlik Blog.",
  alternates: { canonical: 'https://www.nivoratemizlik.com/blog' },
}

function ArrowRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          <div className="mt-6 max-w-2xl">
            <span className="section-tag text-cyan-400">Blog</span>
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white leading-[1.08] mt-2 mb-4">
              Temizlik Rehberleri
              <br />& Uzman İpuçları
            </h1>
            <p className="font-dm text-white/60 text-lg leading-relaxed">
              Kurumsal temizlik, hijyen standartları ve İstanbul&apos;un farklı bölgelerine özel
              temizlik rehberlerimizi keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-14">
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group block bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[1fr_420px] items-center">
                {/* Image placeholder */}
                <div className="h-72 lg:h-full bg-navy-900 relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-cormorant text-8xl font-bold text-white/10">Blog</span>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-cyan-500 text-white font-dm text-xs font-semibold px-3 py-1 rounded-full">
                      Öne Çıkan
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-cyan-50 text-cyan-700 font-dm text-xs font-semibold px-3 py-1 rounded-full border border-cyan-100">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-slate-400 text-xs font-dm">{blogPosts[0].readTime} okuma</span>
                  </div>
                  <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-navy-900 mb-4 leading-tight group-hover:text-cyan-700 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="font-dm text-slate-500 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-dm text-slate-400 text-sm">
                      {new Date(blogPosts[0].date).toLocaleDateString('tr-TR', {
                        year: 'numeric', month: 'long', day: 'numeric',
                      })}
                    </span>
                    <span className="inline-flex items-center gap-2 text-cyan-600 font-dm font-semibold text-sm group-hover:gap-3 transition-all">
                      Devamını Oku <ArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-navy-900 relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)',
                      backgroundSize: '35px 35px',
                    }}
                  />
                  {post.district && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/10 border border-white/20 text-white font-dm text-xs font-semibold px-3 py-1 rounded-full">
                        {post.district}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-cyan-50 text-cyan-700 font-dm text-xs font-semibold px-2.5 py-1 rounded-full border border-cyan-100">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs font-dm">{post.readTime}</span>
                  </div>
                  <h2 className="font-cormorant text-xl font-bold text-navy-900 mb-3 leading-tight group-hover:text-cyan-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-dm text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="font-dm text-slate-400 text-xs">
                      {new Date(post.date).toLocaleDateString('tr-TR', {
                        year: 'numeric', month: 'long', day: 'numeric',
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-cyan-600 font-dm font-semibold text-xs group-hover:gap-2 transition-all">
                      Oku <ArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Temizlik Hizmeti mi Arıyorsunuz?</h2>
          <p className="section-body mb-7">
            İstanbul genelinde ücretsiz keşif ve fiyat teklifimizden yararlanın.
          </p>
          <Link href="/iletisim" className="btn-primary-lg">
            Ücretsiz Teklif Al <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
