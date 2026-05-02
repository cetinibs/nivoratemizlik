import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import type { LandingPage } from '@/lib/landing-pages'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

interface Props {
  page: LandingPage
}

export default function LandingPageView({ page }: Props) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: 'https://www.nivoratemizlik.com' },
      { '@type': 'ListItem', position: 2, name: page.title, item: `https://www.nivoratemizlik.com/${page.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: page.title }]} />
          <div className="mt-6 max-w-3xl">
            <span className="section-tag text-cyan-400">Nivora Temizlik</span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mt-2 mb-4">
              {page.h1}
            </h1>
            <p className="font-dm text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl">
              {page.intro}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 mt-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
                <span className="font-dm text-white/60 text-sm ml-1.5">4.9 Google Puanı</span>
              </div>
              <div className="text-white/55 text-sm font-dm">
                <span className="text-cyan-400 font-semibold">500+</span> Aktif Müşteri
              </div>
              <div className="text-white/55 text-sm font-dm">
                <span className="text-cyan-400 font-semibold">10+</span> Yıl Deneyim
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/iletisim" className="btn-primary-lg">
                Ücretsiz Teklif Al <ArrowRight />
              </Link>
              <a href="tel:+905528920118" className="btn-ghost">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                0552 892 01 18
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {page.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2 text-slate-700 text-sm font-dm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                  <CheckIcon />
                </span>
                {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left content */}
            <div className="lg:col-span-2 space-y-14">
              {/* Why us */}
              <div>
                <span className="section-tag">Neden Nivora?</span>
                <h2 className="section-title mb-8">Bizi Tercih Eden 500+ Müşterimizin Sebepleri</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {page.whyUs.map((w) => (
                    <div key={w.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-2">{w.title}</h3>
                      <p className="font-dm text-slate-600 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <span className="section-tag">Hizmetlerimiz</span>
                <h2 className="section-title mb-8">{page.title} Kapsamında Sunduğumuz Hizmetler</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {page.services.map((s) => {
                    const cardContent = (
                      <>
                        <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-1.5">{s.title}</h3>
                        <p className="font-dm text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                      </>
                    )
                    return s.href ? (
                      <Link
                        key={s.title}
                        href={s.href}
                        className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all group block"
                      >
                        {cardContent}
                        <span className="inline-flex items-center gap-1 text-cyan-600 text-sm font-dm font-semibold mt-3 group-hover:gap-2 transition-all">
                          Detaylar <ArrowRight />
                        </span>
                      </Link>
                    ) : (
                      <div
                        key={s.title}
                        className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm"
                      >
                        {cardContent}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <span className="section-tag">Sıkça Sorulan Sorular</span>
                <h2 className="section-title mb-6">Müşterilerimizin En Çok Sorduğu Sorular</h2>
                <div className="space-y-4">
                  {page.faq.map((f) => (
                    <div key={f.q} className="bg-slate-50 rounded-xl border border-slate-100 px-6 py-5">
                      <h3 className="font-dm font-semibold text-navy-900 mb-2">{f.q}</h3>
                      <p className="font-dm text-slate-600 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related internal links — SEO booster */}
              <div>
                <h2 className="font-cormorant text-2xl font-bold text-navy-900 mb-4">İlgili Sayfalar</h2>
                <div className="flex flex-wrap gap-2">
                  {page.relatedLinks.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-dm text-slate-700 hover:border-cyan-300 hover:text-cyan-700 transition-colors"
                    >
                      {r.label}
                      <ArrowRight />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-navy-900 rounded-3xl p-7 sticky top-24">
                <h3 className="font-cormorant text-2xl font-bold text-white mb-3">
                  Ücretsiz Keşif & Teklif
                </h3>
                <p className="font-dm text-white/55 text-sm leading-relaxed mb-6">
                  Uzman ekibimiz adresinize gelir, ihtiyaç analizi yapar ve size özel sabit fiyat teklifi sunar.
                </p>
                <Link href="/iletisim" className="btn-primary-lg w-full justify-center mb-4">
                  Teklif İste <ArrowRight />
                </Link>
                <a
                  href="tel:+905528920118"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-dm text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  0552 892 01 18
                </a>
                <a
                  href="https://wa.me/905528920118"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-dm text-sm mt-3"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  WhatsApp ile Yaz
                </a>
                <div className="border-t border-white/10 mt-6 pt-6 space-y-3">
                  {['Ücretsiz keşif', 'Sabit sözleşmeli fiyat', 'Sigortalı personel', 'ISO 9001 sertifikalı', '4.9/5 Google puanı'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-white/50 text-xs font-dm">
                      <span className="text-cyan-400"><CheckIcon /></span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Districts strip */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant text-2xl font-bold text-navy-900 mb-3">
            {page.title} — İstanbul Geneli Hizmet Bölgelerimiz
          </h2>
          <p className="font-dm text-slate-500 text-sm mb-6 max-w-3xl mx-auto">
            Beşiktaş, Şişli, Kadıköy, Ataşehir, Levent, Maslak, Sarıyer, Bakırköy, Üsküdar,
            Maltepe, Pendik, Kartal, Tuzla, Beylikdüzü, Esenyurt ve İstanbul&apos;un tüm 39 ilçesinde
            {' '}{page.title.toLowerCase()} hizmeti sunuyoruz.
          </p>
          <Link href="/iletisim" className="btn-primary">
            Bölgeniz İçin Ücretsiz Teklif Alın <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
