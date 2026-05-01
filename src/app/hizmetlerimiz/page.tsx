import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { services, getServicesByCategory } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Temizlik Hizmetleri İstanbul — Ofis, AVM, Hastane, Villa, Şantiye',
  description:
    "Nivora Temizlik olarak İstanbul'da ofis, AVM, hastane, okul, showroom, villa, yazlık, şantiye, fabrika, otel ve dış cephe cam temizliği hizmetleri sunuyoruz. Ücretsiz teklif alın!",
  alternates: { canonical: 'https://www.nivoratemizlik.com/hizmetlerimiz' },
}

function ArrowRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
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

const iconMap: Record<string, React.ReactNode> = {
  building: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" /></svg>,
  store: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v0a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" /></svg>,
  hospital: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 6v4M10 8h4" /><path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" /><path d="M9 22v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>,
  school: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M14 22v-4a2 2 0 1 0-4 0v4" /><path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10Z" /><path d="M18 5v5" /><path d="M6 5v5" /><path d="M12 2L6 5l6 3 6-3Z" /></svg>,
  hammer: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" /><path d="m18 15 4-4" /><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14" /></svg>,
  factory: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M17 18h1M13 18h1M9 18h1" /></svg>,
  hotel: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M12 4v6M2 18h20" /></svg>,
  home: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>,
  villa: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /><path d="M3 22h18" /></svg>,
  sun: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>,
  window: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18M3 15h18M12 3v18" /></svg>,
}

const categories = [
  {
    id: 'kurumsal',
    label: 'Kurumsal Temizlik',
    desc: 'Ofis, AVM, hastane, okul ve tüm ticari alanlar için',
    color: 'bg-navy-900',
  },
  {
    id: 'ozel',
    label: 'Bireysel Temizlik',
    desc: 'Konut, villa, yazlık ve özel mekânlar için',
    color: 'bg-cyan-600',
  },
  {
    id: 'endustri',
    label: 'Endüstriyel Temizlik',
    desc: 'Fabrika, şantiye, dış cephe ve inşaat alanları için',
    color: 'bg-slate-700',
  },
]

export default function ServicesPage() {
  const kurumsal = getServicesByCategory('kurumsal')
  const ozel = getServicesByCategory('ozel')
  const endustri = getServicesByCategory('endustri')

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Hizmetlerimiz' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="section-tag text-cyan-400">Hizmetlerimiz</span>
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white leading-[1.08] mt-2 mb-4">
              İstanbul&apos;da Her Mekân İçin
              <br />
              Temizlik Çözümü
            </h1>
            <p className="font-dm text-white/60 text-lg leading-relaxed max-w-2xl">
              Ofisten fabrikaya, villadan yazlığa, hastaneden şantiyeye kadar tüm mekânlar için
              profesyonel temizlik hizmeti. Ücretsiz keşif ile başlayalım.
            </p>
          </div>
        </div>
      </section>

      {/* Category overview */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md hover:border-cyan-200 transition-all">
                <div className={`w-10 h-10 ${cat.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <div>
                  <h2 className="font-cormorant text-xl font-bold text-navy-900 mb-0.5">{cat.label}</h2>
                  <p className="font-dm text-slate-500 text-sm">{cat.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Kurumsal */}
      <section id="kurumsal" className="py-16 lg:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4" /></svg>
            </div>
            <div>
              <h2 className="font-cormorant text-3xl font-bold text-navy-900">Kurumsal Temizlik Hizmetleri</h2>
              <p className="font-dm text-slate-500 text-sm">Ofis, AVM, hastane, okul, showroom ve otel için</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kurumsal.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="service-card group block"
              >
                <div className="icon-box group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {iconMap[s.icon]}
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-navy-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="space-y-1.5 mb-5">
                  {s.benefits.slice(0, 2).map((b) => (
                    <div key={b} className="flex items-center gap-2 text-slate-600 text-xs font-dm">
                      <span className="text-cyan-500 flex-shrink-0"><CheckIcon /></span>
                      {b}
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-cyan-600 text-sm font-dm font-semibold group-hover:gap-2.5 transition-all">
                  Detaylı Bilgi <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bireysel */}
      <section id="ozel" className="py-16 lg:py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
            </div>
            <div>
              <h2 className="font-cormorant text-3xl font-bold text-navy-900">Bireysel Temizlik Hizmetleri</h2>
              <p className="font-dm text-slate-500 text-sm">Konut, villa ve yazlık temizliği</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ozel.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="service-card group block"
              >
                <div className="icon-box group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {iconMap[s.icon]}
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-navy-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="space-y-1.5 mb-5">
                  {s.benefits.slice(0, 2).map((b) => (
                    <div key={b} className="flex items-center gap-2 text-slate-600 text-xs font-dm">
                      <span className="text-cyan-500 flex-shrink-0"><CheckIcon /></span>
                      {b}
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-cyan-600 text-sm font-dm font-semibold group-hover:gap-2.5 transition-all">
                  Detaylı Bilgi <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Endüstriyel */}
      <section id="endustri" className="py-16 lg:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></svg>
            </div>
            <div>
              <h2 className="font-cormorant text-3xl font-bold text-navy-900">Endüstriyel Temizlik Hizmetleri</h2>
              <p className="font-dm text-slate-500 text-sm">Fabrika, şantiye, inşaat ve dış cephe cam temizliği</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {endustri.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="service-card group block"
              >
                <div className="icon-box group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {iconMap[s.icon]}
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-navy-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <div className="space-y-1.5 mb-5">
                  {s.benefits.slice(0, 2).map((b) => (
                    <div key={b} className="flex items-center gap-2 text-slate-600 text-xs font-dm">
                      <span className="text-cyan-500 flex-shrink-0"><CheckIcon /></span>
                      {b}
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-cyan-600 text-sm font-dm font-semibold group-hover:gap-2.5 transition-all">
                  Detaylı Bilgi <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO keyword area */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-2xl font-bold text-navy-900 mb-4 text-center">
            İstanbul&apos;un Her İlçesinde, Her Mekânda Profesyonel Temizlik
          </h2>
          <p className="font-dm text-slate-500 text-sm text-center max-w-3xl mx-auto mb-6 leading-relaxed">
            Beşiktaş ofis temizliği, Kadıköy ev temizliği, Maslak kurumsal temizlik, Levent AVM temizliği,
            Sarıyer villa temizliği, Ataşehir hastane temizliği, Şişli okul temizliği ve İstanbul&apos;un
            tüm 39 ilçesinde profesyonel temizlik hizmeti sunuyoruz.
          </p>
          <div className="text-center">
            <Link href="/iletisim" className="btn-primary-lg">
              Ücretsiz Teklif Al <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
