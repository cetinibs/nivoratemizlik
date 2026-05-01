import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { services, getServiceBySlug } from '@/lib/services'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `https://www.nivoratemizlik.com/hizmetlerimiz/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Nivora Temizlik`,
      description: service.description,
      url: `https://www.nivoratemizlik.com/hizmetlerimiz/${service.slug}`,
    },
  }
}

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

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Nivora Temizlik',
      telephone: '+908501234567',
      url: 'https://www.nivoratemizlik.com',
    },
    areaServed: { '@type': 'City', name: 'İstanbul' },
    url: `https://www.nivoratemizlik.com/hizmetlerimiz/${service.slug}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
              { label: service.shortTitle },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <span className="section-tag text-cyan-400">Hizmetlerimiz</span>
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white leading-[1.08] mt-2 mb-4">
              {service.title}
            </h1>
            <p className="font-dm text-white/60 text-lg leading-relaxed max-w-2xl">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/iletisim" className="btn-primary-lg">
                Ücretsiz Teklif Al <ArrowRight />
              </Link>
              <a href="tel:+908501234567" className="btn-ghost">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                0850 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Description + Benefits */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <span className="section-tag">Hizmet Hakkında</span>
                <h2 className="section-title mb-4">
                  Profesyonel {service.shortTitle}
                </h2>
                <p className="section-body">{service.longDescription}</p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-cormorant text-3xl font-bold text-navy-900 mb-6">Hizmet Avantajları</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center mt-0.5">
                        <CheckIcon />
                      </span>
                      <span className="font-dm text-slate-700 text-sm leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-cormorant text-3xl font-bold text-navy-900 mb-6">Çalışma Sürecimiz</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.process.map((p, i) => (
                    <div key={p.step} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                      <div className="font-cormorant text-4xl font-bold text-slate-100 mb-2">0{i + 1}</div>
                      <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-2">{p.step}</h3>
                      <p className="font-dm text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-cormorant text-3xl font-bold text-navy-900 mb-6">Sıkça Sorulan Sorular</h2>
                <div className="space-y-4">
                  {service.faq.map((f) => (
                    <div key={f.q} className="bg-slate-50 rounded-xl border border-slate-100 px-6 py-5">
                      <h3 className="font-dm font-semibold text-navy-900 mb-2">{f.q}</h3>
                      <p className="font-dm text-slate-600 text-sm leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-navy-900 rounded-3xl p-7 sticky top-24">
                <h3 className="font-cormorant text-2xl font-bold text-white mb-3">
                  Ücretsiz Teklif Alın
                </h3>
                <p className="font-dm text-white/55 text-sm leading-relaxed mb-6">
                  Uzman ekibimiz yerinde keşif yapıp size özel fiyat teklifi sunsun.
                </p>
                <Link href="/iletisim" className="btn-primary-lg w-full justify-center mb-4">
                  Teklif İste <ArrowRight />
                </Link>
                <a
                  href="tel:+908501234567"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors font-dm text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  0850 123 45 67
                </a>
                <div className="border-t border-white/10 mt-6 pt-6 space-y-3">
                  {['Ücretsiz keşif', 'Gizli ücret yok', '7/24 destek', 'Sigortalı hizmet'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-white/50 text-xs font-dm">
                      <span className="text-cyan-400"><CheckIcon /></span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Other services */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-4">Diğer Hizmetlerimiz</h3>
                <div className="space-y-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/hizmetlerimiz/${s.slug}`}
                      className="flex items-center justify-between gap-2 py-2.5 border-b border-slate-200 last:border-0 group"
                    >
                      <span className="font-dm text-slate-700 text-sm group-hover:text-cyan-600 transition-colors">
                        {s.shortTitle}
                      </span>
                      <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                        <ArrowRight />
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/hizmetlerimiz"
                    className="block text-center text-cyan-600 text-sm font-dm font-semibold mt-2 hover:underline"
                  >
                    Tüm Hizmetler →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword-rich district section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant text-2xl font-bold text-navy-900 mb-3">
            {service.shortTitle} — İstanbul Geneli Hizmet Bölgelerimiz
          </h2>
          <p className="font-dm text-slate-500 text-sm mb-6 max-w-2xl mx-auto">
            Beşiktaş, Şişli, Kadıköy, Ataşehir, Levent, Maslak, Sarıyer, Bakırköy, Üsküdar,
            Maltepe, Pendik, Kartal ve İstanbul&apos;un tüm ilçelerinde {service.shortTitle.toLowerCase()} hizmeti sunuyoruz.
          </p>
          <Link href="/iletisim" className="btn-primary">
            Bölgeniz İçin Teklif Alın <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
