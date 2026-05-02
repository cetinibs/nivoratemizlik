import Link from 'next/link'

const services = [
  { href: '/hizmetlerimiz/ofis-temizligi', label: 'Ofis Temizliği' },
  { href: '/hizmetlerimiz/insaat-sonrasi-temizlik', label: 'İnşaat Sonrası Temizlik' },
  { href: '/hizmetlerimiz/fabrika-temizligi', label: 'Fabrika Temizliği' },
  { href: '/hizmetlerimiz/otel-temizligi', label: 'Otel Temizliği' },
  { href: '/hizmetlerimiz/konut-temizligi', label: 'Konut Temizliği' },
  { href: '/hizmetlerimiz/cam-temizligi', label: 'Cam Temizliği' },
]

const districts = [
  'Beşiktaş', 'Şişli', 'Kadıköy', 'Ataşehir', 'Levent', 'Maslak',
  'Sarıyer', 'Bakırköy', 'Zeytinburnu', 'Üsküdar', 'Maltepe', 'Pendik',
  'Kartal', 'Tuzla', 'Beylikdüzü', 'Esenyurt',
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L6 10v12l10 6 10-6V10L16 4z" fill="white" fillOpacity="0.95" />
                </svg>
              </div>
              <div className="leading-none">
                <span className="font-cormorant font-bold text-[22px] text-white tracking-tight block leading-none">Nivora</span>
                <span className="font-dm text-[9px] text-cyan-400 tracking-[0.22em] uppercase font-bold leading-none">Temizlik</span>
              </div>
            </Link>
            <p className="font-dm text-white/50 text-sm leading-relaxed mb-6" itemProp="description">
              İstanbul genelinde 10+ yıllık deneyimle kurumsal ve bireysel profesyonel temizlik hizmetleri sunuyoruz.
            </p>
            <div className="space-y-3.5">
              <a href="tel:+905528920118" className="flex items-center gap-2.5 text-white/70 hover:text-cyan-400 font-dm text-sm transition-colors" itemProp="telephone">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                0552 892 01 18
              </a>
              <a href="mailto:info@nivoratemizlik.com" className="flex items-center gap-2.5 text-white/50 hover:text-cyan-400 font-dm text-sm transition-colors" itemProp="email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                info@nivoratemizlik.com
              </a>
              <p className="flex items-center gap-2.5 text-white/50 font-dm text-sm" itemProp="address">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Ataşehir / İstanbul
              </p>
              <a
                href="https://www.instagram.com/nivoratemizlik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/50 hover:text-pink-400 font-dm text-sm transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
                @nivoratemizlik
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-cormorant font-bold text-base text-white mb-5 tracking-wide">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Ana Sayfa' },
                { href: '/hakkimizda', label: 'Hakkımızda' },
                { href: '/hizmetlerimiz', label: 'Tüm Hizmetler' },
                { href: '/kurumsal-temizlik-firmalari', label: 'Kurumsal Temizlik Firmaları' },
                { href: '/istanbul-temizlik-sirketleri', label: 'İstanbul Temizlik Şirketleri' },
                { href: '/ofis-temizlik-sirketi', label: 'Ofis Temizlik Şirketi' },
                { href: '/ev-temizlik-firmalari', label: 'Ev Temizlik Firmaları' },
                { href: '/yorumlar', label: 'Müşteri Yorumları' },
                { href: '/blog', label: 'Blog' },
                { href: '/iletisim', label: 'İletişim & Teklif' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-dm text-sm text-white/50 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    <span className="text-cyan-600 text-xs">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-cormorant font-bold text-base text-white mb-5 tracking-wide">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="font-dm text-sm text-white/50 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                    <span className="text-cyan-600 text-xs">›</span>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Districts */}
          <div>
            <h3 className="font-cormorant font-bold text-base text-white mb-5 tracking-wide">Hizmet Bölgelerimiz</h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
              {districts.map((d) => (
                <span key={d} className="font-dm text-xs text-white/40">
                  {d}
                </span>
              ))}
            </div>
            <p className="font-dm text-white/30 text-xs mt-3">ve İstanbul&apos;un tüm 39 ilçesi</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-white/35 text-xs">
            © {new Date().getFullYear()} Nivora Temizlik. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/gizlilik-politikasi" className="font-dm text-white/35 hover:text-white/60 text-xs transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="font-dm text-white/35 hover:text-white/60 text-xs transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
