import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { reviews, reviewStats, GOOGLE_REVIEW_URL, GOOGLE_BUSINESS_URL } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Müşteri Yorumları & Referanslar',
  description:
    "Nivora Temizlik müşteri yorumları, Google değerlendirmeleri ve referansları. 4.9/5 ortalama puan, 248+ doğrulanmış değerlendirme. İstanbul'un en iyi temizlik şirketi.",
  keywords: [
    'nivora temizlik yorumları',
    'nivora temizlik referansları',
    'temizlik şirketi yorumları istanbul',
    'kurumsal temizlik referansları',
    'temizlik şirketi tavsiye',
    'en iyi temizlik şirketi yorum',
  ],
  alternates: { canonical: 'https://www.nivoratemizlik.com/yorumlar' },
  openGraph: {
    title: 'Müşteri Yorumları | Nivora Temizlik',
    description: '4.9/5 Google puanı, 248+ değerlendirme. Müşterilerimiz Nivora hakkında ne diyor?',
    url: 'https://www.nivoratemizlik.com/yorumlar',
    type: 'website',
  },
}

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#FBBF24' : '#E5E7EB'} stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function ReviewsPage() {
  // Aggregate Rating Schema for SEO
  const ratingSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.nivoratemizlik.com/#localbusiness',
    name: 'Nivora Temizlik',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewStats.averageRating.toString(),
      reviewCount: reviewStats.totalReviews.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      datePublished: r.date,
      reviewBody: r.text,
      itemReviewed: { '@type': 'Service', name: r.service },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Müşteri Yorumları' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="section-tag text-cyan-400">Referanslar</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mt-2 mb-4">
              Müşterilerimiz Nivora&apos;yı Anlatıyor
            </h1>
            <p className="font-dm text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl">
              500+ aktif müşterimizin gerçek deneyimleri. Google üzerinde {reviewStats.totalReviews}+
              doğrulanmış değerlendirme ile İstanbul&apos;un en çok tavsiye edilen temizlik şirketleri arasında yer alıyoruz.
            </p>

            {/* Big rating block */}
            <div className="flex flex-wrap items-center gap-8 mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 max-w-xl">
              <div className="text-center">
                <div className="font-cormorant text-6xl font-bold text-white leading-none">
                  {reviewStats.averageRating}
                </div>
                <div className="flex items-center gap-0.5 mt-2 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
                </div>
                <div className="font-dm text-white/50 text-xs mt-2">
                  {reviewStats.totalReviews}+ değerlendirme
                </div>
              </div>
              <div className="flex-1">
                <div className="space-y-1.5">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const pct = star === 5 ? 94 : star === 4 ? 5 : star === 3 ? 1 : 0
                    return (
                      <div key={star} className="flex items-center gap-2 text-xs">
                        <span className="text-white/60 w-3 font-dm">{star}</span>
                        <StarIcon />
                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-cyan-400 rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-white/40 w-9 text-right font-dm">%{pct}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-lg"
              >
                <GoogleIcon /> Google&apos;da Yorum Yap
              </a>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <GoogleIcon /> Tüm Yorumlar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Doğrulanmış Yorumlar</span>
            <h2 className="section-title">Müşterilerimizden Gerçek Deneyimler</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name + r.date}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} filled={i <= r.rating} />
                    ))}
                  </div>
                  {r.source === 'google' && (
                    <div className="flex items-center gap-1 text-xs text-slate-400 font-dm">
                      <GoogleIcon />
                      Google
                    </div>
                  )}
                </div>
                <p className="font-dm text-slate-700 text-sm leading-relaxed mb-5 flex-1">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-dm font-semibold text-navy-900 text-sm">
                        {r.name}
                        {r.verified && (
                          <span className="inline-flex items-center ml-1.5 text-cyan-600">
                            <CheckIcon />
                          </span>
                        )}
                      </div>
                      <div className="font-dm text-xs text-slate-500">
                        {r.role && `${r.role}`}
                        {r.role && r.company && ' · '}
                        {r.company}
                        {!r.role && !r.company && r.district}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-dm text-xs text-cyan-600 font-semibold">{r.service}</div>
                      <div className="font-dm text-xs text-slate-400 mt-0.5">
                        {new Date(r.date).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'short',
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Leave a review */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Sizin Sıranız</span>
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Nivora Temizlik ile Çalıştınız mı?
          </h2>
          <p className="font-dm text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Deneyiminizi paylaşın — diğer müşterilerimizin doğru kararı vermesine yardımcı olun.
            Google&apos;da yapacağınız bir değerlendirme bizim için en değerli teşekkür.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-lg"
          >
            <GoogleIcon /> Google&apos;da Yorum Yaz <ArrowRight />
          </a>
          <div className="mt-6 text-xs text-slate-400 font-dm">
            ⚡ 30 saniyede tamamlanır · Google hesabınızla
          </div>
        </div>
      </section>

      {/* CTA: New customer */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
            Siz de 500+ Mutlu Müşteri Arasına Katılın
          </h2>
          <p className="font-dm text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif, sabit fiyat sözleşmesi ve memnuniyet garantisi ile.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/iletisim" className="btn-primary-lg">
              Ücretsiz Teklif Al <ArrowRight />
            </Link>
            <a href="tel:+905528920118" className="btn-ghost">
              0552 892 01 18
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
