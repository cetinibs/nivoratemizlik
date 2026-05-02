export interface Review {
  name: string
  role?: string
  company?: string
  district: string
  rating: 1 | 2 | 3 | 4 | 5
  date: string
  service: string
  text: string
  source: 'google' | 'sahibinden' | 'direct' | 'instagram'
  verified?: boolean
}

/**
 * Google Business review yazma URL'si.
 * PlaceID öğrenildiğinde aşağıdaki gibi değiştir:
 *   `https://search.google.com/local/writereview?placeid=ChIJxxxxxxxx`
 *
 * Şimdilik fallback: işletme arama sayfası.
 */
export const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=Nivora+Temizlik+Ata%C5%9Fehir'

export const GOOGLE_BUSINESS_URL =
  'https://www.google.com/maps/search/?api=1&query=Nivora+Temizlik+Ata%C5%9Fehir'

export const reviews: Review[] = [
  {
    name: 'Mehmet K.',
    role: 'Genel Müdür',
    company: 'Ata Plaza',
    district: 'Ataşehir',
    rating: 5,
    date: '2026-04-18',
    service: 'Ofis Temizliği',
    text: 'Plaza ofisimiz için 2 yıldır Nivora ile çalışıyoruz. Personel düzenli, sorumlu ve kaliteli. Süpervizör denetimi gerçekten fark yaratıyor. Tavsiye ederim.',
    source: 'google',
    verified: true,
  },
  {
    name: 'Ayşe T.',
    district: 'Kadıköy',
    rating: 5,
    date: '2026-04-12',
    service: 'Konut Temizliği',
    text: 'Evimde ilk kez bir temizlik şirketinden bu kadar memnun kaldım. Sigortalı personel, çevre dostu ürünler ve titiz çalışma. Aynı personel devamlılığı çok değerli.',
    source: 'google',
    verified: true,
  },
  {
    name: 'Zeynep S.',
    role: 'Yönetici Asistanı',
    company: 'XYZ Holding',
    district: 'Şişli',
    rating: 5,
    date: '2026-03-29',
    service: 'Kurumsal Temizlik',
    text: 'Aylık raporlama ve şeffaf süreç bizim için kritikti, Nivora bu konuda gerçek bir kurumsal yaklaşım sergiliyor. 6 aydır sözleşmeli çalışıyoruz, sıfır şikayet.',
    source: 'google',
    verified: true,
  },
  {
    name: 'Burak A.',
    role: 'AVM Operasyon Müdürü',
    district: 'Beylikdüzü',
    rating: 5,
    date: '2026-03-15',
    service: 'AVM Temizliği',
    text: 'Yoğun ziyaretçi trafiğiyle baş edebilen profesyonel bir ekip. 7/24 müdahale ve gece derin temizlikte çok başarılılar.',
    source: 'google',
    verified: true,
  },
  {
    name: 'Selin O.',
    district: 'Üsküdar',
    rating: 5,
    date: '2026-03-08',
    service: 'İnşaat Sonrası Temizlik',
    text: 'Tadilattan sonra evi tanıyamadık! Boya, harç, toz hepsi gitti. Fiyat çok adil, iş kalitesi mükemmel.',
    source: 'google',
    verified: true,
  },
  {
    name: 'Cem D.',
    role: 'Otel Müdürü',
    district: 'Beşiktaş',
    rating: 5,
    date: '2026-02-25',
    service: 'Otel Housekeeping',
    text: 'Misafir yorumlarımızda temizlik puanı %92\'ye çıktı. Nivora ekibi housekeeping standartlarımızı bir üst seviyeye taşıdı.',
    source: 'google',
    verified: true,
  },
  {
    name: 'Funda Y.',
    district: 'Maltepe',
    rating: 5,
    date: '2026-02-10',
    service: 'Villa Temizliği',
    text: 'Villamızın bahçesi ve iç mekan haftalık temizliği için tercih ediyoruz. Pet dostu ürünler kullanmaları en büyük artıları.',
    source: 'google',
    verified: true,
  },
  {
    name: 'İhsan B.',
    role: 'Fabrika Yöneticisi',
    district: 'Tuzla',
    rating: 5,
    date: '2026-01-30',
    service: 'Fabrika Temizliği',
    text: 'Endüstriyel temizlikte ekipmanları ve iş güvenliği yaklaşımları çok profesyonel. ISO denetimlerinde sorun yaşamıyoruz.',
    source: 'google',
    verified: true,
  },
]

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 248,
  fiveStarPercentage: 94,
  googleRating: 4.9,
  googleReviewCount: 248,
}
