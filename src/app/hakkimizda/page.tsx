import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Hakkımızda — İstanbul\'un Güvenilir Temizlik Şirketi',
  description:
    "Nivora Temizlik, 2014'ten bu yana İstanbul'da kurumsal ve bireysel temizlik hizmeti sunmaktadır. Ekibimiz, sertifikalarımız ve misyonumuz hakkında bilgi edinin.",
  alternates: { canonical: 'https://www.nivoratemizlik.com/hakkimizda' },
}

const milestones = [
  { year: '2014', title: 'Kuruluş', desc: 'Nivora Temizlik, 10 kişilik bir ekiple İstanbul\'da kurumsal temizlik hizmetine başladı.' },
  { year: '2016', title: 'ISO 9001 Sertifikası', desc: 'Kalite yönetim sistemimiz ISO 9001:2015 sertifikası ile belgelendi.' },
  { year: '2018', title: '100 Müşteri', desc: 'İstanbul\'daki 100. kurumsal müşterimize ulaştık. Ekibimiz 50 kişiye büyüdü.' },
  { year: '2020', title: 'Anadolu Yakası Açılımı', desc: 'Kadıköy merkezli ofisimizle Anadolu Yakası\'nda aktif hizmet vermeye başladık.' },
  { year: '2022', title: '200+ Personel', desc: 'Ekibimiz 200 kişiyi aştı. İstanbul\'un tüm 39 ilçesine kesintisiz hizmet sağladık.' },
  { year: '2024', title: '500+ Müşteri', desc: '500\'ü aşkın kurumsal müşteri ve 4.9 Google puanı ile sektörün lideri konumundayız.' },
]

const team = [
  { name: 'Ahmet Demir', role: 'Genel Müdür', desc: '15+ yıl temizlik sektörü deneyimi' },
  { name: 'Zeynep Şahin', role: 'Operasyon Direktörü', desc: 'Lojistik ve kalite kontrol uzmanı' },
  { name: 'Mustafa Kılıç', role: 'Teknik Müdür', desc: 'Endüstriyel ekipman ve süreç yönetimi' },
  { name: 'Selin Yıldız', role: 'Müşteri İlişkileri', desc: 'Kurumsal müşteri memnuniyeti odaklı' },
]

const certs = [
  { title: 'ISO 9001:2015', desc: 'Kalite Yönetim Sistemi' },
  { title: 'ISO 14001:2015', desc: 'Çevre Yönetim Sistemi' },
  { title: 'İSG Sertifikası', desc: 'İş Sağlığı ve Güvenliği' },
  { title: 'TSE Belgesi', desc: 'Türk Standartları Enstitüsü' },
]

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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Hakkımızda' }]} />
          <div className="mt-6 max-w-3xl">
            <span className="section-tag text-cyan-400">Hakkımızda</span>
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-white leading-[1.08] mt-2 mb-4">
              İstanbul&apos;un Güvenilir
              <br />
              Temizlik Ortağı
            </h1>
            <p className="font-dm text-white/60 text-lg leading-relaxed max-w-2xl">
              2014&apos;ten bu yana İstanbul&apos;da kurumsal ve bireysel temizlik hizmetleri sunuyoruz.
              Misyonumuz: her mekânı insanlara yakışır bir temizlikle buluşturmak.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
              <div className="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="font-cormorant text-3xl font-bold text-navy-900 mb-4">Misyonumuz</h2>
              <p className="font-dm text-slate-600 leading-relaxed">
                İstanbul&apos;daki her işletmeye ve bireye, sağlıklı ve hijyenik bir yaşam ve çalışma
                ortamı sağlamak. Güvenilirlik, kalite ve müşteri memnuniyetini en ön plana alarak
                temizlik sektöründe fark yaratmak.
              </p>
            </div>
            <div className="bg-navy-900 rounded-3xl p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h2 className="font-cormorant text-3xl font-bold text-white mb-4">Vizyonumuz</h2>
                <p className="font-dm text-white/60 leading-relaxed">
                  Türkiye&apos;nin en büyük ve en güvenilir kurumsal temizlik firması olmak.
                  Teknoloji, sürdürülebilirlik ve insan odaklı hizmet anlayışımızla sektörü
                  dönüştürmek ve tüm Türkiye&apos;ye ulaşmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">10 Yıllık Yolculuk</span>
            <h2 className="section-title">Büyüme Hikayemiz</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-0.5" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white shadow md:-translate-x-2 mt-1.5 z-10" />
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                      <div className="font-cormorant text-2xl font-bold text-cyan-500 mb-1">{m.year}</div>
                      <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-2">{m.title}</h3>
                      <p className="font-dm text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Belgelerimiz</span>
            <h2 className="section-title">Sertifikalar & Kalite Belgeleri</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((c) => (
              <div
                key={c.title}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 text-center hover:border-cyan-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-1">{c.title}</h3>
                <p className="font-dm text-slate-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Ekibimiz</span>
            <h2 className="section-title">Yönetim Ekibi</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-7 border border-slate-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-cormorant font-bold text-2xl text-white">{m.name[0]}</span>
                </div>
                <h3 className="font-cormorant text-xl font-bold text-navy-900 mb-1">{m.name}</h3>
                <div className="font-dm text-cyan-600 text-xs font-semibold tracking-wide uppercase mb-2">{m.role}</div>
                <p className="font-dm text-slate-500 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag text-cyan-400">Değerlerimiz</span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mt-2 mb-6 leading-tight">
                Her Temizlikte
                <br />
                <span className="text-cyan-400">Aynı Özen</span>
              </h2>
              <p className="font-dm text-white/60 text-lg leading-relaxed mb-8">
                Büyük veya küçük fark etmez; her müşterimize aynı profesyonelliği ve özeni
                sunuyoruz. Bu ilke, 10 yıldır değişmeden devam etmektedir.
              </p>
              <Link href="/iletisim" className="btn-primary-lg">
                Teklif Al
                <ArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: 'Güvenilirlik', desc: 'Söz verdiğimiz kaliteyi her seferinde teslim ediyoruz.' },
                { val: 'Şeffaflık', desc: 'Gizli ücret yok. Net ve dürüst fiyatlandırma.' },
                { val: 'Süreklilik', desc: 'Tek seferlik değil, uzun vadeli ortaklık anlayışı.' },
                { val: 'Yenilikçilik', desc: 'En modern ekipman ve yöntemleri kullanıyoruz.' },
              ].map((v) => (
                <div key={v.val} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-400"><CheckIcon /></span>
                    <h3 className="font-cormorant text-xl font-bold text-white">{v.val}</h3>
                  </div>
                  <p className="font-dm text-white/55 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
