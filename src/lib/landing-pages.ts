export interface LandingPage {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  h1: string
  intro: string
  /** Hero altı kısa fayda listesi */
  highlights: string[]
  /** "Neden biz" bölümü için maddeler */
  whyUs: { title: string; desc: string }[]
  /** Hizmet alanları/servisler */
  services: { title: string; desc: string; href?: string }[]
  /** SSS bölümü — comparison/review intent karşılığı */
  faq: { q: string; a: string }[]
  /** İlişkili dahili linkler (anchor + href) */
  relatedLinks: { label: string; href: string }[]
}

export const landingPages: LandingPage[] = [
  /* ─────────────────────────────────────────────────────────── */
  {
    slug: 'kurumsal-temizlik-firmalari',
    title: 'Kurumsal Temizlik Firmaları',
    metaTitle: 'Kurumsal Temizlik Firmaları İstanbul | Nivora Temizlik',
    metaDescription:
      "İstanbul'un güvenilir kurumsal temizlik firmaları arasında lider Nivora Temizlik. Ofis, plaza, fabrika, AVM ve kurumsal yapılar için 10+ yıl deneyim, 200+ uzman, ISO 9001 sertifikalı hizmet. Ücretsiz keşif!",
    keywords: [
      'kurumsal temizlik firmaları',
      'kurumsal temizlik şirketleri',
      'istanbul kurumsal temizlik',
      'kurumsal temizlik firması istanbul',
      'plaza temizlik firmaları',
      'iş yeri temizlik firmaları',
      'profesyonel kurumsal temizlik',
    ],
    h1: 'Kurumsal Temizlik Firmaları İstanbul — Nivora Temizlik',
    intro:
      "Kurumsal temizlik firmaları arasında İstanbul'da fark yaratan Nivora Temizlik; ofis, plaza, AVM, fabrika ve kurumsal yapılar için ISO 9001 sertifikalı, sigortalı ve eğitimli ekiplerle profesyonel temizlik hizmeti sunuyor. 500+ kurumsal müşteri, 39 ilçede aktif hizmet ağı.",
    highlights: [
      'ISO 9001 Kalite Sertifikası',
      '10+ Yıl Sektör Deneyimi',
      '500+ Kurumsal Müşteri',
      'Sigortalı ve Sertifikalı Personel',
      'Tüm İstanbul İlçelerinde Aktif',
      '7/24 Müşteri Desteği',
    ],
    whyUs: [
      {
        title: 'Sözleşmeli ve Kurumsal Süreç',
        desc: 'Kurumsal müşterilerimizle yazılı sözleşme, sabit fiyat ve aylık raporlama ile şeffaf çalışıyoruz. Sürpriz maliyet yok.',
      },
      {
        title: 'Eğitimli ve Üniformalı Personel',
        desc: 'Tüm temizlik personelimiz hijyen, iş güvenliği ve kurumsal davranış eğitimi almış olup, sigortalı çalışmaktadır.',
      },
      {
        title: 'Profesyonel Ekipman ve Kimyasallar',
        desc: 'HEPA filtreli profesyonel makineler, çevre dostu ve sertifikalı temizlik kimyasalları kullanıyoruz.',
      },
      {
        title: 'Süpervizör Denetimi',
        desc: 'Her saha için atanmış süpervizör, kalite kontrolünü düzenli olarak yaparak kurumsal standartları garanti eder.',
      },
      {
        title: 'Esnek Çalışma Saatleri',
        desc: 'Mesai saatleri içinde, mesai sonrası veya gece — operasyonunuza uygun saatlerde hizmet sunuyoruz.',
      },
      {
        title: 'Acil Müdahale Ekibi',
        desc: 'Beklenmedik durumlar için 7/24 ulaşılabilir acil müdahale ekibimiz mevcut.',
      },
    ],
    services: [
      { title: 'Ofis Temizliği', desc: 'Düzenli ofis ve iş yeri temizliği', href: '/hizmetlerimiz/ofis-temizligi' },
      { title: 'AVM Temizliği', desc: 'Alışveriş merkezi ve plaza temizliği', href: '/hizmetlerimiz/avm-temizligi' },
      { title: 'Hastane Temizliği', desc: 'Hastane ve klinik hijyen', href: '/hizmetlerimiz/hastane-klinik-temizligi' },
      { title: 'Fabrika Temizliği', desc: 'Endüstriyel tesis temizliği', href: '/hizmetlerimiz/fabrika-temizligi' },
      { title: 'Otel Temizliği', desc: 'Konaklama tesisleri için housekeeping', href: '/hizmetlerimiz/otel-temizligi' },
      { title: 'Showroom Temizliği', desc: 'Mağaza ve showroom temizliği', href: '/hizmetlerimiz/showroom-temizligi' },
    ],
    faq: [
      {
        q: 'Kurumsal temizlik firmaları arasında Nivora\'yı tercih etmemin sebepleri neler?',
        a: 'ISO 9001 sertifikası, sigortalı personel, sözleşmeli hizmet, sabit aylık fiyat, süpervizör denetimi ve 10+ yıl sektör deneyimi ile öne çıkıyoruz. 500+ kurumsal müşteri ile çalışıyoruz.',
      },
      {
        q: 'Kurumsal temizlik firması seçerken nelere dikkat etmeli?',
        a: 'Sigorta kapsamı, personel eğitim sertifikaları, kullanılan kimyasalların güvenilirliği, yazılı sözleşme yapma alışkanlığı, müşteri referansları ve kalite kontrol süreçleri kritik kriterlerdir.',
      },
      {
        q: 'Sözleşme süresi ve ödeme koşulları nasıl?',
        a: 'Aylık, 3 aylık, 6 aylık veya yıllık sözleşme seçenekleri sunuyoruz. Ödeme aylık fatura karşılığı havale/EFT veya kredi kartı ile alınır. Uzun dönem sözleşmelerde özel indirimler uygulanır.',
      },
      {
        q: 'İlk keşif ve teklif ücretli mi?',
        a: 'Hayır. İstanbul\'un tüm 39 ilçesinde keşif ve fiyat teklifi tamamen ücretsizdir. Uzman ekibimiz işyerinize gelir, ihtiyaç analizini yapar, size özel teklif sunar.',
      },
      {
        q: 'Kaç gün içinde hizmete başlayabilirsiniz?',
        a: 'Standart durumlarda anlaşmadan sonraki 2-3 iş günü içinde hizmete başlıyoruz. Acil durumlarda 24 saat içinde ekip yönlendirebiliyoruz.',
      },
    ],
    relatedLinks: [
      { label: 'Tüm Hizmetlerimiz', href: '/hizmetlerimiz' },
      { label: 'Ofis Temizliği', href: '/hizmetlerimiz/ofis-temizligi' },
      { label: 'AVM Temizliği', href: '/hizmetlerimiz/avm-temizligi' },
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'İstanbul Temizlik Şirketleri', href: '/istanbul-temizlik-sirketleri' },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: 'istanbul-temizlik-sirketleri',
    title: 'İstanbul Temizlik Şirketleri',
    metaTitle: "İstanbul'da En İyi Temizlik Şirketi — Nivora Temizlik | Yorumlar & Referanslar",
    metaDescription:
      "İstanbul'da en iyi temizlik şirketi arıyorsanız: Nivora Temizlik. 4.9/5 Google puanı, 248+ değerlendirme, 500+ kurumsal müşteri. Ofis, ev, AVM, hastane temizliğinde 10+ yıl deneyim. Ücretsiz keşif!",
    keywords: [
      'istanbul temizlik şirketleri',
      'istanbul en iyi temizlik şirketi',
      'istanbulda en iyi temizlik şirketi',
      'istanbul temizlik şirket',
      'temizlik şirketleri istanbul',
      'en iyi temizlik firması istanbul',
      'temizlik şirketi yorumları',
    ],
    h1: "İstanbul'da En İyi Temizlik Şirketi — Nivora Temizlik",
    intro:
      "İstanbul temizlik şirketleri arasında müşteri memnuniyeti ile öne çıkan Nivora Temizlik; 4.9/5 Google puanı, 248+ olumlu değerlendirme ve 500+ kurumsal müşterisiyle İstanbul'un en güvenilir temizlik şirketleri arasında yer alıyor. Ofis, ev, AVM, hastane, otel ve fabrika temizliğinde sektörün lideri.",
    highlights: [
      '⭐ 4.9/5 Google Puanı (248+ Değerlendirme)',
      '500+ Aktif Müşteri',
      '200+ Uzman Personel',
      '10+ Yıl Sektör Deneyimi',
      'ISO 9001 Sertifikalı',
      '39 İlçede Aktif Hizmet',
    ],
    whyUs: [
      {
        title: 'Müşteri Memnuniyeti Garantisi',
        desc: 'İlk hizmetten memnun kalmazsanız ücret iadesi veya yeniden hizmet — yazılı garanti ile sunuyoruz.',
      },
      {
        title: 'Şeffaf Fiyatlandırma',
        desc: 'Sürpriz ek ücret yok. Keşif sonrası verilen fiyat sözleşmede sabittir; saat, alan ve hizmet kalemleri açıkça belirtilir.',
      },
      {
        title: 'Gerçek Müşteri Yorumları',
        desc: "Google, Sahibinden ve sektörel platformlarda gerçek müşterilerimizin paylaştığı 248+ değerlendirmeyle İstanbul'da en çok tavsiye edilen temizlik şirketlerindeniz.",
      },
      {
        title: 'Sigortalı ve Eğitimli Ekip',
        desc: 'Tüm personelimiz SGK sigortalı, hijyen sertifikalı ve düzenli eğitim alan profesyonellerden oluşur.',
      },
      {
        title: 'Çevre Dostu Ürünler',
        desc: 'Aile ve evcil hayvan dostu, sertifikalı temizlik ürünleri ile sağlığınıza zarar vermeden temizlik.',
      },
      {
        title: 'Hızlı Müdahale',
        desc: 'Talep sonrası 24-48 saat içinde keşif, 2-3 iş günü içinde hizmet başlangıcı.',
      },
    ],
    services: [
      { title: 'Kurumsal Temizlik', desc: 'Ofis, plaza, AVM, kurum temizliği', href: '/kurumsal-temizlik-firmalari' },
      { title: 'Ev Temizliği', desc: 'Konut, daire, villa temizliği', href: '/ev-temizlik-firmalari' },
      { title: 'Ofis Temizliği', desc: 'İş yeri ve ofis temizliği', href: '/ofis-temizlik-sirketi' },
      { title: 'İnşaat Sonrası', desc: 'Yeni yapı ve tadilat sonrası', href: '/hizmetlerimiz/insaat-sonrasi-temizlik' },
      { title: 'Cam Temizliği', desc: 'Dış cephe ve yüksek kat cam', href: '/hizmetlerimiz/dis-cephe-cam-temizligi' },
      { title: 'Hastane Temizliği', desc: 'Sağlık tesisleri hijyen', href: '/hizmetlerimiz/hastane-klinik-temizligi' },
    ],
    faq: [
      {
        q: "İstanbul'da en iyi temizlik şirketi hangisi?",
        a: "Müşteri yorumları, Google puanı, sektör deneyimi ve sertifikasyonlar dikkate alındığında Nivora Temizlik İstanbul'un en çok tercih edilen temizlik şirketleri arasında yer alıyor. 4.9/5 Google puanı ve 248+ değerlendirme ile sektör lideri.",
      },
      {
        q: 'Temizlik şirketi seçerken nelere dikkat etmeliyim?',
        a: '1) Sigorta ve sertifikalar, 2) Gerçek müşteri yorumları, 3) Şeffaf fiyatlandırma, 4) Yazılı sözleşme, 5) Personel eğitim seviyesi, 6) Kullanılan ürünlerin güvenliği. Bu kriterleri sorgulamadan anlaşma yapmayın.',
      },
      {
        q: 'Ekşi sözlük ve forumlarda yazılan yorumlar gerçek mi?',
        a: 'Forum yorumları çoğu zaman tek taraflı veya rakip kaynaklı olabilir. Daha güvenilir kaynak olarak Google İşletme yorumları, sektörel platformlardaki referanslar ve direkt firma referans listesini incelemenizi öneriyoruz.',
      },
      {
        q: 'Kadınlar Kulübü vb. forumlarda ev temizlik şirketi tavsiyeleri güvenilir mi?',
        a: 'Forumlarda paylaşılan kişisel deneyimler genel bir fikir verir ancak işletmenin güncel hizmet kalitesini yansıtmayabilir. En güvenilir yöntem: 1) Google işletme yorumlarını kontrol etmek, 2) Yazılı sözleşme talep etmek, 3) Sigorta belgesi istemek, 4) Deneme temizliği yaptırmak.',
      },
      {
        q: 'Fiyatlar hangi faktörlere göre değişir?',
        a: 'Temizlik alanın metrekaresi, hizmet sıklığı (günlük/haftalık/aylık), özel ekipman gereksinimi, çalışma saati (gündüz/gece) ve kullanılacak ürün kalitesine göre fiyatlandırma yapılır. Ücretsiz keşif sonrası net fiyat sunulur.',
      },
      {
        q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
        a: 'Nakit, kredi kartı, banka havalesi/EFT ve kurumsal müşteriler için aylık fatura ile ödeme alıyoruz.',
      },
    ],
    relatedLinks: [
      { label: 'Kurumsal Temizlik Firmaları', href: '/kurumsal-temizlik-firmalari' },
      { label: 'Ev Temizlik Firmaları', href: '/ev-temizlik-firmalari' },
      { label: 'Ofis Temizlik Şirketi', href: '/ofis-temizlik-sirketi' },
      { label: 'Tüm Hizmetlerimiz', href: '/hizmetlerimiz' },
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'Blog', href: '/blog' },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: 'ofis-temizlik-sirketi',
    title: 'Ofis Temizlik Şirketi',
    metaTitle: 'Ofis Temizlik Şirketi İstanbul | Nivora Temizlik',
    metaDescription:
      "İstanbul'un öncü ofis temizlik şirketi Nivora. Mesai saatleri dışında, sigortalı personelle profesyonel ofis ve iş yeri temizliği. Günlük, haftalık veya aylık programlar. Ücretsiz keşif ve teklif!",
    keywords: [
      'ofis temizlik şirketi',
      'ofis temizlik şirketleri',
      'ofis temizlik firması',
      'iş yeri temizlik şirketi',
      'ofis temizliği istanbul',
      'kurumsal ofis temizlik',
      'plaza ofis temizlik',
    ],
    h1: "İstanbul'un Tercih Edilen Ofis Temizlik Şirketi — Nivora",
    intro:
      'Ofis temizlik şirketi arıyorsanız doğru adrestesiniz. Nivora Temizlik; çalışanlarınız için hijyenik ve düzenli bir ortam yaratır, mesai saatleri dışında sessizce çalışır, iş akışınızı asla bölmez. Plaza, kat ofisleri, paylaşımlı çalışma alanları ve kurumsal merkezler için özel programlar sunuyoruz.',
    highlights: [
      'Mesai Sonrası ve Gece Temizlik',
      'Günlük / Haftalık / Aylık Program',
      'Sigortalı Personel',
      'Çevre Dostu Ürünler',
      'Sözleşmeli Sabit Fiyat',
      'Süpervizör Denetimi',
    ],
    whyUs: [
      {
        title: 'İş Akışınızı Bölmeden Temizlik',
        desc: 'Çalışanlarınızın yoğun olmadığı saatlerde — sabah erken, akşam mesai sonrası veya gece — sessiz ekipmanlarla temizlik yapıyoruz.',
      },
      {
        title: 'Hijyen Odaklı Yaklaşım',
        desc: 'Ortak alanlar, mutfak, tuvaletler ve toplantı odaları için özel hijyen protokolleri uyguluyoruz. Salgın hastalık riskini azaltır.',
      },
      {
        title: 'Esnek Sözleşme',
        desc: 'Aylık, 3 aylık veya yıllık sözleşmeler. İhtiyacınız değişirse program revizyonu mümkün.',
      },
      {
        title: 'Eğitimli Personel',
        desc: 'Ofis ekipmanlarına (bilgisayar, monitör, klavye) zarar vermeyecek özel temizlik eğitimi almış ekip.',
      },
      {
        title: 'Anahtar Teslim Hizmet',
        desc: 'Tüm temizlik malzemeleri ve ekipmanları biz sağlıyoruz. Sizden ek bir hazırlık beklemiyoruz.',
      },
      {
        title: 'Aylık Raporlama',
        desc: 'Yapılan tüm temizlik işleri, kullanılan ürünler ve denetim notları aylık rapor halinde tarafınıza sunulur.',
      },
    ],
    services: [
      { title: 'Günlük Temizlik', desc: 'Her iş günü düzenli temizlik' },
      { title: 'Periyodik Temizlik', desc: 'Haftalık veya aylık derin temizlik' },
      { title: 'Halı & Koltuk Yıkama', desc: 'Profesyonel makine ile periyodik yıkama' },
      { title: 'Cam Temizliği', desc: 'Pencere ve cephe camları', href: '/hizmetlerimiz/dis-cephe-cam-temizligi' },
      { title: 'Tuvalet Hijyeni', desc: 'WC, lavabo ve dezenfeksiyon' },
      { title: 'Mutfak / Çay Ocağı', desc: 'Ortak mutfak alanı temizliği' },
    ],
    faq: [
      {
        q: 'Ofis temizliği hangi saatlerde yapılıyor?',
        a: 'Müşterilerimizin tercihine göre sabah erken (07:00-09:00), öğle arası (12:00-14:00), mesai sonrası (18:00-22:00) veya gece (22:00-06:00) saatlerinde temizlik yapıyoruz.',
      },
      {
        q: 'Ofis temizliği fiyatları nasıl belirleniyor?',
        a: 'Ofis metrekaresi, çalışan sayısı, temizlik sıklığı, ek hizmetler (cam, halı, koltuk yıkama) ve çalışma saatine göre fiyatlandırma yapılır. Ücretsiz keşif sonrası net teklif sunulur.',
      },
      {
        q: 'Bilgisayar ve hassas ekipmanlar zarar görür mü?',
        a: 'Hayır. Personelimiz elektronik cihaz temizliği konusunda özel eğitimlidir; mikrofiber bezler ve ekran-dostu ürünlerle güvenli temizlik yapılır.',
      },
      {
        q: 'Temizlik malzemelerini biz mi temin edeceğiz?',
        a: 'Hayır. Tüm temizlik kimyasalları, makineler ve sarf malzemeleri (mendil, sabun, tuvalet kağıdı vb. — talep halinde) tarafımızdan sağlanır.',
      },
      {
        q: 'Personel sigortalı mı?',
        a: 'Evet. Tüm personelimiz SGK sigortalı, sertifikalı ve mesleki sorumluluk sigortası kapsamındadır. Olası bir kazada müşterilerimiz mağdur olmaz.',
      },
    ],
    relatedLinks: [
      { label: 'Ofis Temizliği Detay', href: '/hizmetlerimiz/ofis-temizligi' },
      { label: 'Kurumsal Temizlik Firmaları', href: '/kurumsal-temizlik-firmalari' },
      { label: 'AVM Temizliği', href: '/hizmetlerimiz/avm-temizligi' },
      { label: 'Cam Temizliği', href: '/hizmetlerimiz/dis-cephe-cam-temizligi' },
      { label: 'Tüm Hizmetlerimiz', href: '/hizmetlerimiz' },
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: 'ev-temizlik-firmalari',
    title: 'Ev Temizlik Firmaları',
    metaTitle: "En İyi Ev Temizlik Firmaları İstanbul | Nivora Temizlik",
    metaDescription:
      "İstanbul'un en iyi ev temizlik firmaları arasında Nivora Temizlik. Daire, villa, müstakil ev temizliği için sigortalı ve eğitimli personel. Tek seferlik veya periyodik. 4.9/5 Google puanı. Ücretsiz keşif!",
    keywords: [
      'ev temizlik firmaları',
      'en iyi ev temizlik şirketleri',
      'ev temizlik şirketi',
      'ev temizlik firması istanbul',
      'daire temizlik şirketi',
      'villa temizlik firması',
      'profesyonel ev temizliği',
    ],
    h1: "İstanbul'un En İyi Ev Temizlik Firmaları Arasında — Nivora Temizlik",
    intro:
      "Ev temizlik firmaları arasında güvenilirlik ve memnuniyetiyle öne çıkan Nivora Temizlik; daire, villa, müstakil ev ve yazlık için sigortalı, eğitimli personelle profesyonel hizmet sunuyor. 4.9/5 Google puanı ve 248+ olumlu değerlendirme ile İstanbul'un en çok tercih edilen ev temizlik şirketleri arasında yer alıyor.",
    highlights: [
      'SGK Sigortalı Personel',
      'Tek Seferlik veya Periyodik',
      'Çevre Dostu Ürünler',
      'Aile ve Evcil Hayvan Dostu',
      'Aynı Personel Devamlılığı',
      'Memnuniyet Garantisi',
    ],
    whyUs: [
      {
        title: 'Güvenli ve Sigortalı Personel',
        desc: 'Tüm ev temizlik personelimiz SGK sigortalı, kimlik doğrulamalı ve referans kontrollü. Evinize aldığınız kişiden emin olabilirsiniz.',
      },
      {
        title: 'Aynı Personel Devamlılığı',
        desc: 'Periyodik hizmetlerde mümkün olduğunca aynı personeli yönlendiriyoruz; böylece evinizin düzenine alışmış güvenilir bir yardımcınız oluyor.',
      },
      {
        title: 'Çocuk ve Pet Dostu Ürünler',
        desc: 'Sertifikalı, doğal içerikli ve alerjen içermeyen temizlik ürünleri kullanıyoruz. Çocuk ve evcil hayvanlarınız için güvenli.',
      },
      {
        title: 'Şeffaf Fiyat',
        desc: 'Saatlik veya iş bazlı fiyat keşif sonrası netleştirilir. Saatlik ek ücret veya gizli maliyet yok.',
      },
      {
        title: 'Detaylı Temizlik Listesi',
        desc: 'Her temizlik öncesi yapılacak işler listesi onayınıza sunulur. İstemediğiniz alana dokunulmaz, atlanan iş olmaz.',
      },
      {
        title: 'Memnuniyet Garantisi',
        desc: 'Hizmetten memnun kalmazsanız 24 saat içinde tekrar temizlik veya ücret iadesi — yazılı garanti.',
      },
    ],
    services: [
      { title: 'Genel Ev Temizliği', desc: 'Standart düzenli ev temizliği' },
      { title: 'Detaylı / Derin Temizlik', desc: 'Mevsimsel kapsamlı temizlik' },
      { title: 'Bayram Temizliği', desc: 'Özel günler için detaylı temizlik' },
      { title: 'Tadilat Sonrası', desc: 'İnşaat/boya sonrası', href: '/hizmetlerimiz/insaat-sonrasi-temizlik' },
      { title: 'Villa Temizliği', desc: 'Villa ve müstakil ev', href: '/hizmetlerimiz/villa-temizligi' },
      { title: 'Yazlık Temizliği', desc: 'Sezon açma/kapatma', href: '/hizmetlerimiz/yazlik-temizligi' },
    ],
    faq: [
      {
        q: 'En iyi ev temizlik şirketleri nasıl seçilir?',
        a: '1) Personelin sigortalı olması, 2) Yazılı sözleşme yapması, 3) Gerçek Google yorumları, 4) Ücretsiz keşif sunması, 5) Memnuniyet garantisi vermesi, 6) Çevre dostu ürün kullanması — bu kriterleri sağlayan firmalar güvenle tercih edilebilir.',
      },
      {
        q: 'Ev temizlik fiyatları nasıl?',
        a: 'Evin metrekaresi, oda sayısı, temizliğin kapsamı (genel/detaylı), kullanılacak ürün ve sıklığa göre değişir. Ücretsiz keşif sonrası net fiyat verilir; saatlik sürpriz ek ücret yok.',
      },
      {
        q: 'Ev temizlik firması seçerken nelere dikkat edilmeli?',
        a: 'Personel sigortası, kimlik doğrulama, sözleşme, referanslar (özellikle Google yorumları), kullanılan ürünlerin güvenliği, garanti politikası ve şeffaf fiyatlandırma — en kritik kriterler.',
      },
      {
        q: 'Forum yorumları (kadınlar kulübü, ekşi sözlük) güvenilir mi?',
        a: 'Forum ve sosyal medya yorumları kişisel deneyimleri yansıtır, ancak güncel hizmet kalitesini garanti etmez. Daha güvenilir yöntem: Google İşletme yorumlarını incelemek ve deneme temizliği talep etmek.',
      },
      {
        q: 'Tek seferlik temizlik yaptırabilir miyim?',
        a: 'Evet. Tek seferlik genel temizlik, taşınma öncesi/sonrası, bayram temizliği veya özel etkinlik öncesi temizlik için tek seferlik hizmet veriyoruz.',
      },
      {
        q: 'Aynı personel her seferinde gelir mi?',
        a: 'Periyodik hizmetlerde mümkün olduğunca aynı personeli yönlendiriyoruz — programlama uyumu olduğu sürece. Bu, evinize ve isteklerinize alışmış bir personel demektir.',
      },
    ],
    relatedLinks: [
      { label: 'Konut Temizliği', href: '/hizmetlerimiz/konut-temizligi' },
      { label: 'Villa Temizliği', href: '/hizmetlerimiz/villa-temizligi' },
      { label: 'Yazlık Temizliği', href: '/hizmetlerimiz/yazlik-temizligi' },
      { label: "İstanbul'da En İyi Temizlik Şirketi", href: '/istanbul-temizlik-sirketleri' },
      { label: 'İnşaat Sonrası Temizlik', href: '/hizmetlerimiz/insaat-sonrasi-temizlik' },
      { label: 'Tüm Hizmetlerimiz', href: '/hizmetlerimiz' },
    ],
  },
]

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((p) => p.slug === slug)
}
