import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: { absolute: 'İletişim | Ücretsiz Teklif — Nivora Temizlik' },
  description:
    "Nivora Temizlik ile iletişime geçin. İstanbul'da ücretsiz keşif ve fiyat teklifi alın. 0552 892 01 18",
  alternates: {
    canonical: 'https://www.nivoratemizlik.com/iletisim',
    languages: {
      'tr-TR': 'https://www.nivoratemizlik.com/iletisim',
      'x-default': 'https://www.nivoratemizlik.com/iletisim',
    },
  },
  openGraph: {
    title: 'İletişim | Ücretsiz Teklif — Nivora Temizlik',
    description: "Nivora Temizlik ile iletişime geçin. İstanbul'da ücretsiz keşif ve fiyat teklifi alın. 0552 892 01 18",
    url: 'https://www.nivoratemizlik.com/iletisim',
    type: 'website',
    images: [{ url: '/images/slider1.png', width: 1200, height: 800, alt: 'Nivora Temizlik İletişim' }],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Nivora Temizlik İletişim',
  url: 'https://www.nivoratemizlik.com/iletisim',
  description: "İstanbul'da profesyonel temizlik hizmeti için iletişim sayfası",
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Nivora Temizlik',
    telephone: '+905528920118',
    email: 'info@nivoratemizlik.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Atatürk Mah. Ertuğrul Gazi Sok. Metropol İstanbul Sitesi C1 Blok No:2B İç Kapı No:376',
      addressLocality: 'Ataşehir',
      addressRegion: 'İstanbul',
      postalCode: '34758',
      addressCountry: 'TR',
    },
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'İletişim' }]} />
          <div className="mt-6 max-w-2xl">
            <span className="section-tag text-cyan-400">İletişim</span>
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white leading-[1.08] mt-2 mb-4">
              Ücretsiz Keşif &
              <br />
              Fiyat Teklifi
            </h1>
            <p className="font-dm text-white/60 text-lg leading-relaxed">
              Uzman ekibimiz ihtiyacınızı yerinde değerlendirsin ve size özel teklif sunsun.
              Hiçbir ücret ödemeden!
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-14">
            {/* Contact form */}
            <div>
              <h2 className="section-title mb-2">Teklif Formu</h2>
              <p className="section-body mb-8">
                Aşağıdaki formu doldurun, en geç 2 saat içinde sizi arayalım.
              </p>

              <form className="space-y-5" action="#" method="POST" aria-label="Teklif formu">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block font-dm text-sm font-medium text-slate-700 mb-1.5">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Adınız ve soyadınız"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-dm text-sm font-medium text-slate-700 mb-1.5">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="05XX XXX XX XX"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-dm text-sm font-medium text-slate-700 mb-1.5">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ornek@sirket.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-dm text-sm font-medium text-slate-700 mb-1.5">
                    İhtiyaç Duyduğunuz Hizmet *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Hizmet seçin</option>
                    <option value="ofis">Ofis Temizliği</option>
                    <option value="insaat">İnşaat Sonrası Temizlik</option>
                    <option value="fabrika">Fabrika Temizliği</option>
                    <option value="otel">Otel Temizliği</option>
                    <option value="konut">Konut Temizliği</option>
                    <option value="cam">Cam Temizliği</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="district" className="block font-dm text-sm font-medium text-slate-700 mb-1.5">
                    İlçe / Bölge
                  </label>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    placeholder="Örn: Kadıköy, Beşiktaş, Maslak..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="area" className="block font-dm text-sm font-medium text-slate-700 mb-1.5">
                    Alan / Büyüklük (m²)
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    placeholder="Örn: 500 m² ofis, 3 katlı bina..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-dm text-sm font-medium text-slate-700 mb-1.5">
                    Ek Bilgiler / Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Özel talepleriniz, sıklık tercihleri, uygun zaman aralığı..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 font-dm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-lg w-full justify-center"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
                  </svg>
                  Teklif Formu Gönder
                </button>

                <p className="font-dm text-slate-400 text-xs text-center">
                  Bilgileriniz yalnızca teklif hazırlamak amacıyla kullanılır. Spam göndermeyiz.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-5">
              {/* Quick contact */}
              <div className="bg-navy-900 rounded-3xl p-8 text-white">
                <h3 className="font-cormorant text-2xl font-bold mb-6">Hızlı İletişim</h3>
                <div className="space-y-5">
                  <div>
                    <div className="font-dm text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Telefon</div>
                    <a href="tel:+905528920118" className="font-cormorant text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                      0552 892 01 18
                    </a>
                    <p className="font-dm text-white/45 text-xs mt-1">Pzt–Cmt 08:00 – 20:00</p>
                  </div>

                  <div>
                    <div className="font-dm text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">WhatsApp</div>
                    <a
                      href="https://wa.me/905528920118?text=Merhaba!+Temizlik+hizmeti+hakk%C4%B1nda+bilgi+almak+istiyorum."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-dm font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      WhatsApp&apos;tan Yazın
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="font-dm text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">E-posta</div>
                    <a href="mailto:info@nivoratemizlik.com" className="font-dm text-white/80 hover:text-cyan-400 transition-colors text-sm">
                      info@nivoratemizlik.com
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="font-dm text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Instagram</div>
                    <a
                      href="https://www.instagram.com/nivoratemizlik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-dm text-white/80 hover:text-pink-400 transition-colors text-sm"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                      </svg>
                      @nivoratemizlik
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-5">
                    <div className="font-dm text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Adres</div>
                    <p className="font-dm text-white/70 text-sm leading-relaxed">
                      Atatürk Mah. Ertuğrul Gazi Sok.
                      <br />
                      Metropol İstanbul Sitesi C1 Blok No:2B, İç Kapı No:376
                      <br />
                      Ataşehir / İstanbul
                      <br />
                      <span className="text-white/45 text-xs">Tüm İstanbul ilçelerine hizmet veriyoruz</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-4">Çalışma Saatleri</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Pazartesi – Cuma', hours: '08:00 – 20:00', active: true },
                    { day: 'Cumartesi', hours: '08:00 – 18:00', active: true },
                    { day: 'Pazar', hours: 'Kapalı (Acil: 7/24)', active: false },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="font-dm text-slate-600 text-sm">{item.day}</span>
                      <span className={`font-dm text-sm font-semibold ${item.active ? 'text-green-600' : 'text-slate-400'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-4">Neden Nivora?</h3>
                <div className="space-y-3">
                  {[
                    'Ücretsiz yerinde keşif',
                    'Gizli ücret yok, şeffaf fiyat',
                    'Sigortalı ve SGK\'lı personel',
                    'ISO 9001 kalite güvencesi',
                    '500+ referans müşteri',
                    '7/24 müşteri destek hattı',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="font-dm text-slate-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-slate-100 border-t border-slate-200 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p className="font-dm text-slate-400 text-sm">Ataşehir / İstanbul — Tüm 39 ilçeye hizmet</p>
          <a
            href="https://maps.google.com/?q=Istanbul+Turkey"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm text-cyan-600 text-sm font-semibold hover:underline"
          >
            Google Maps&apos;ta Görüntüle →
          </a>
        </div>
      </section>
    </>
  )
}
