import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/lib/services'
import HeroSlider from '@/components/HeroSlider'

export const metadata: Metadata = {
  title: { absolute: 'Kurumsal Temizlik İstanbul | Nivora Temizlik' },
  description:
    "İstanbul'un en güvenilir kurumsal temizlik şirketi. Ofis, AVM, hastane, okul, villa ve şantiye temizliğinde 10+ yıl deneyim. 500+ mutlu müşteri. Ücretsiz teklif alın!",
  alternates: {
    canonical: 'https://www.nivoratemizlik.com',
    languages: {
      'tr-TR': 'https://www.nivoratemizlik.com',
      'x-default': 'https://www.nivoratemizlik.com',
    },
  },
  openGraph: {
    title: 'Kurumsal Temizlik İstanbul | Nivora Temizlik',
    description: "İstanbul'un en güvenilir kurumsal temizlik şirketi. Ofis, AVM, hastane, okul, villa ve şantiye temizliğinde 10+ yıl deneyim. 500+ mutlu müşteri.",
    url: 'https://www.nivoratemizlik.com',
    type: 'website',
    images: [{ url: '/images/slider1.png', width: 1200, height: 800, alt: 'Nivora Temizlik — Kurumsal Temizlik İstanbul' }],
  },
}

/* ── Icons ─────────────────────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M20 6 9 17l-5-5" />
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

/* ── Icon map ─────────────────────────────────────────────────── */
const iconMap: Record<string, React.ReactNode> = {
  building: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" /></svg>,
  store: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /></svg>,
  hospital: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 6v4M10 8h4" /><path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" /><path d="M9 22v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></svg>,
  school: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M14 22v-4a2 2 0 1 0-4 0v4" /><path d="m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10Z" /><path d="M12 2L6 5l6 3 6-3Z" /></svg>,
  hammer: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" /><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14" /></svg>,
  factory: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></svg>,
  hotel: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M2 18h20" /></svg>,
  home: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>,
  villa: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>,
  sun: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" /></svg>,
  window: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18M3 15h18M12 3v18" /></svg>,
}

/* ── Static data ───────────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Mutlu Müşteri', sub: 'kurumsal referans' },
  { value: '10+', label: 'Yıl Deneyim', sub: 'sektörde lider' },
  { value: '200+', label: 'Uzman Personel', sub: 'eğitimli ekip' },
  { value: '39', label: 'İlçe Hizmeti', sub: "tüm İstanbul'da" },
]

const whyUs = [
  'ISO 9001 Kalite Yönetim Sertifikası',
  'Sigortalı ve SGK\'lı çalışan güvencesi',
  'Çevre dostu, sertifikalı temizlik ürünleri',
  '7/24 acil temizlik destek hattı',
  'Şeffaf fiyatlandırma, gizli ücret yok',
  'Her temizlik sonrası kalite kontrol raporu',
  'Ücretsiz keşif ve teklif hizmeti',
  'İstanbul\'un tüm 39 ilçesinde aktif hizmet',
]

const testimonials = [
  { name: 'Ayşe Kaya', role: 'İK Direktörü', company: 'TechGroup A.Ş.', rating: 5, text: 'Ofisimizin temizliği için yıllardır Nivora ile çalışıyoruz. Kaliteden ödün vermeden, her seferinde aynı titizlik ve profesyonellikle hizmet sunuyorlar.' },
  { name: 'Mehmet Yılmaz', role: 'Proje Müdürü', company: 'İnşaat Ltd.', rating: 5, text: 'İnşaat sonrası temizlik için aradım, hem hızlı hem de son derece kapsamlı bir temizlik yapıldı. Ekip gerçekten uzmanlaşmış, kesinlikle tavsiye ederim.' },
  { name: 'Fatma Arslan', role: 'Genel Müdür', company: 'Üretim Sanayi A.Ş.', rating: 5, text: 'Fabrikamızın aylık periyodik temizliği için en doğru tercih. Üretimi aksatmadan, plan dahilinde çalışıyorlar. Güvenilir ve dakik bir ekip.' },
]

const faq = [
  { q: 'İstanbul\'un her ilçesine hizmet veriyor musunuz?', a: 'Evet, Avrupa ve Anadolu Yakası dahil İstanbul\'un tüm 39 ilçesine hizmet veriyoruz.' },
  { q: 'Ücretsiz keşif yapıyor musunuz?', a: 'Evet, tüm hizmetlerimiz için ücretsiz yerinde keşif ve fiyat teklifi sunuyoruz.' },
  { q: 'Temizlik personeli sigortalı mı?', a: 'Tüm personelimiz SGK\'lı, sigortalı ve referans kontrollerinden geçmiştir.' },
  { q: 'Sözleşmeli temizlik hizmeti sunuyor musunuz?', a: 'Evet, aylık veya yıllık periyodik temizlik sözleşmeleri için özel fiyatlandırma uyguluyoruz.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

/* ── Home page component ──────────────────────────────────────── */
export default function HomePage() {
  // Featured 9 services for home
  const featuredServices = services.slice(0, 9)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ══ HERO SLIDER ═══════════════════════════════════════════ */}
      <HeroSlider />

      {/* ══ STATS ═════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="font-cormorant text-5xl font-bold text-navy-900">{s.value}</div>
                <div className="font-dm text-sm font-semibold text-slate-700 mt-1">{s.label}</div>
                <div className="font-dm text-xs text-slate-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-slate-50" id="hizmetler" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag">Hizmetlerimiz</span>
            <h2 id="services-heading" className="section-title mb-4">
              Her Mekân İçin Profesyonel Temizlik
            </h2>
            <p className="section-body">
              Ofisten fabrikaya, villadan hastaneye kadar İstanbul&apos;da tüm temizlik ihtiyaçlarınız için yanınızdayız.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="service-card group block"
                aria-label={s.title}
              >
                <div className="icon-box group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {iconMap[s.icon]}
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-navy-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed mb-5">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-cyan-600 text-sm font-dm font-semibold group-hover:gap-2.5 transition-all">
                  Detaylı Bilgi <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/hizmetlerimiz" className="btn-outline">
              Tüm Hizmetleri Gör <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY US ════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Neden Nivora?</span>
              <h2 id="why-heading" className="section-title mb-5">
                İstanbul&apos;da 10 Yıldır
                <br />
                Güvenilir Temizlik
              </h2>
              <p className="section-body mb-8">
                Kurumsal temizlik alanında 10+ yıllık deneyimimiz, sektör standartlarını aşan kalite
                anlayışımız ve 500&apos;ü aşkın mutlu müşterimizle İstanbul&apos;un en tercih edilen
                temizlik şirketiyiz.
              </p>
              <ul className="space-y-3.5 mb-10">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center mt-0.5">
                      <CheckIcon />
                    </span>
                    <span className="font-dm text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/hakkimizda" className="btn-outline">
                Hakkımızda <ArrowRight />
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-navy-900 rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <p className="font-cormorant text-4xl font-bold text-white leading-tight mb-6">
                    &ldquo;Temizlik, sadece görünüm değil; sağlık ve verimlilik demektir.&rdquo;
                  </p>
                  <div className="border-t border-white/15 pt-6 flex items-center justify-between">
                    <div>
                      <p className="font-dm text-white/40 text-xs font-semibold tracking-widest uppercase mb-0.5">Misyonumuz</p>
                      <p className="font-dm text-white/75 text-sm">İstanbul&apos;u daha temiz yapmak</p>
                    </div>
                    <div className="text-right">
                      <div className="font-cormorant text-4xl font-bold text-cyan-400">100%</div>
                      <div className="font-dm text-white/45 text-xs">Müşteri Odaklı</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cyan-500 rounded-2xl p-5 shadow-xl">
                <div className="font-cormorant text-3xl font-bold text-white">248</div>
                <div className="font-dm text-white/80 text-xs font-semibold">5★ Google Yorumu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ DISTRICTS ═════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50" aria-labelledby="districts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="section-tag">Hizmet Bölgelerimiz</span>
            <h2 id="districts-heading" className="section-title">
              İstanbul&apos;un Tüm 39 İlçesinde Hizmet
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {[
              'Beşiktaş', 'Şişli', 'Kadıköy', 'Ataşehir', 'Levent', 'Maslak',
              'Sarıyer', 'Bakırköy', 'Zeytinburnu', 'Üsküdar', 'Maltepe', 'Pendik',
              'Kartal', 'Tuzla', 'Beylikdüzü', 'Esenyurt', 'Büyükçekmece', 'Avcılar',
              'Bağcılar', 'Güngören', 'Bahçelievler', 'Esenler', 'Sultangazi', 'Gaziosmanpaşa',
              'Eyüpsultan', 'Fatih', 'Beyoğlu', 'Kağıthane', 'Küçükçekmece', 'Başakşehir',
              'Arnavutköy', 'Silivri', 'Çatalca', 'Adalar', 'Sancaktepe', 'Sultanbeyli',
              'Çekmeköy', 'Ümraniye', 'Beykoz',
            ].map((d) => (
              <span key={d} className="font-dm text-xs text-slate-600 bg-white border border-slate-200 rounded-lg px-2 py-2 text-center hover:border-cyan-300 hover:text-cyan-700 transition-colors">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="section-tag">Müşteri Yorumları</span>
            <h2 id="testimonials-heading" className="section-title">500+ Mutlu Müşteri Söylüyor</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300" itemScope itemType="https://schema.org/Review">
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} />)}
                </div>
                <blockquote className="font-cormorant text-xl text-navy-800 leading-relaxed mb-6" itemProp="reviewBody">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-200">
                  <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-cormorant font-bold text-lg flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-dm font-semibold text-navy-900 text-sm" itemProp="author">{t.name}</div>
                    <div className="font-dm text-slate-500 text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">SSS</span>
            <h2 id="faq-heading" className="section-title">Sıkça Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <div key={item.q} className="bg-white rounded-xl border border-slate-100 px-6 py-5 hover:border-cyan-200 transition-colors">
                <h3 className="font-dm font-semibold text-navy-900 text-base mb-2">{item.q}</h3>
                <p className="font-dm text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════ */}
      <section className="bg-navy-900 py-20 relative overflow-hidden" aria-label="İletişim çağrısı">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(6,182,212,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="section-tag text-cyan-400">Hemen Başlayalım</span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Ücretsiz Keşif ve <br />
            <span className="text-cyan-400">Fiyat Teklifi</span> Alın
          </h2>
          <p className="font-dm text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Uzman ekibimiz mekânınızı yerinde inceleyip size özel bir temizlik planı hazırlasın.
            Ofis, AVM, hastane, villa — hangi mekân olursa olsun!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim" className="btn-primary-lg w-full sm:w-auto justify-center">
              Teklif İste <ArrowRight />
            </Link>
            <a href="tel:+905528920118" className="btn-ghost w-full sm:w-auto justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              0552 892 01 18
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
