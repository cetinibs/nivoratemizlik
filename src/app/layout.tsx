import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm',
})

export const viewport: Viewport = {
  themeColor: '#0B1628',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nivoratemizlik.com'),
  title: {
    default: 'Nivora Temizlik Hizmetleri | Kurumsal Temizlik İstanbul',
    template: '%s | Nivora Temizlik Hizmetleri',
  },
  description:
    "İstanbul'un lider kurumsal temizlik şirketi Nivora Temizlik. Ofis, AVM, hastane, otel, fabrika ve konut temizliğinde 10+ yıl deneyim. 500+ müşteri, 200+ uzman personel. Tüm 39 ilçede ücretsiz keşif ve teklif!",
  applicationName: 'Nivora Temizlik',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'kurumsal temizlik firmaları',
    'kurumsal temizlik şirketleri',
    'kurumsal temizlik istanbul',
    'istanbul temizlik şirketleri',
    "istanbul'da en iyi temizlik şirketi",
    'en iyi temizlik şirketi istanbul',
    'ofis temizlik şirketi',
    'ofis temizliği istanbul',
    'ev temizlik firmaları',
    'en iyi ev temizlik şirketleri',
    'temizlik şirketi istanbul',
    'profesyonel temizlik',
    'bina temizliği',
    'fabrika temizliği',
    'inşaat sonrası temizlik',
    'avm temizliği',
    'hastane temizliği',
    'otel temizliği',
    'villa temizliği',
    'konut temizliği',
    'dış cephe cam temizliği',
    'showroom temizliği',
    'okul temizliği',
    'şantiye temizliği',
    'ataşehir temizlik',
    'kadıköy ofis temizliği',
    'maslak kurumsal temizlik',
    'beşiktaş temizlik şirketi',
  ],
  authors: [{ name: 'Nivora Temizlik', url: 'https://www.nivoratemizlik.com' }],
  creator: 'Nivora Temizlik',
  publisher: 'Nivora Temizlik Hizmetleri',
  category: 'Temizlik Hizmetleri',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://www.nivoratemizlik.com',
    siteName: 'Nivora Temizlik',
    title: 'Nivora Temizlik Hizmetleri | Kurumsal Temizlik İstanbul',
    description:
      "İstanbul'un lider kurumsal temizlik şirketi. Ofis, AVM, hastane, otel, fabrika, villa ve cam temizliğinde 10+ yıllık deneyim. Tüm 39 ilçede aktif.",
    images: [{ url: '/images/slider1.png', width: 1200, height: 800, alt: 'Nivora Temizlik Hizmetleri' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nivora Temizlik Hizmetleri | Kurumsal Temizlik İstanbul',
    description: "İstanbul'un lider kurumsal temizlik şirketi.",
    images: ['/images/slider1.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.nivoratemizlik.com',
    languages: {
      'tr-TR': 'https://www.nivoratemizlik.com',
      'x-default': 'https://www.nivoratemizlik.com',
    },
  },
  other: {
    // Geographical targeting
    'geo.region': 'TR-34',
    'geo.placename': 'İstanbul',
    'geo.position': '40.9833;29.1167',
    'ICBM': '40.9833, 29.1167',
    // Locality
    'DC.title': 'Nivora Temizlik Hizmetleri',
    'DC.language': 'tr',
    'DC.coverage': 'İstanbul, Türkiye',
    // Local business
    'business:contact_data:street_address': 'Atatürk Mah. Ertuğrul Gazi Sok. Metropol İstanbul Sitesi C1 Blok No:2B İç Kapı No:376',
    'business:contact_data:locality': 'Ataşehir',
    'business:contact_data:region': 'İstanbul',
    'business:contact_data:postal_code': '34758',
    'business:contact_data:country_name': 'Türkiye',
    'business:contact_data:phone_number': '+905528920118',
    'business:contact_data:email': 'info@nivoratemizlik.com',
    'business:contact_data:website': 'https://www.nivoratemizlik.com',
  },
  verification: {
    yandex: 'a07fc3e3e40f6588',
    // google: 'GOOGLE_VERIFICATION_CODE',
    // other: { 'msvalidate.01': 'BING_VERIFICATION_CODE' },
  },
}

const istanbulDistricts = [
  'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy',
  'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece',
  'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa',
  'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik',
  'Sancaktepe', 'Sarıyer', 'Silivri', 'Sultanbeyli', 'Sultangazi', 'Şile', 'Şişli',
  'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu',
]

const services = [
  'Ofis Temizliği', 'AVM Temizliği', 'Hastane ve Klinik Temizliği', 'Okul ve Eğitim Kurumu Temizliği',
  'Showroom Temizliği', 'Otel Temizliği', 'Konut Temizliği', 'Villa Temizliği', 'Yazlık Temizliği',
  'İnşaat Sonrası Temizlik', 'Şantiye Temizliği', 'Fabrika Temizliği', 'Dış Cephe Cam Temizliği',
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.nivoratemizlik.com/#organization',
  name: 'Nivora Temizlik',
  legalName: 'Nivora Temizlik Hizmetleri',
  url: 'https://www.nivoratemizlik.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.nivoratemizlik.com/images/slider1.png',
    width: 1200,
    height: 800,
  },
  image: 'https://www.nivoratemizlik.com/images/slider1.png',
  description: "İstanbul'un lider kurumsal temizlik şirketi. 10+ yıl deneyim, 200+ uzman personel, 500+ müşteri.",
  foundingDate: '2014',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 200 },
  slogan: 'İstanbul\'un En Güvenilir Kurumsal Temizlik Şirketi',
  email: 'info@nivoratemizlik.com',
  telephone: '+905528920118',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Atatürk Mah. Ertuğrul Gazi Sok. Metropol İstanbul Sitesi C1 Blok No:2B İç Kapı No:376',
    addressLocality: 'Ataşehir',
    addressRegion: 'İstanbul',
    postalCode: '34758',
    addressCountry: 'TR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+905528920118',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English'],
      contactOption: 'TollFree',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+905528920118',
      contactType: 'sales',
      areaServed: 'TR',
      availableLanguage: ['Turkish'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/nivoratemizlik',
    'https://wa.me/905528920118',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.nivoratemizlik.com/#website',
  url: 'https://www.nivoratemizlik.com',
  name: 'Nivora Temizlik',
  description: "İstanbul'un lider kurumsal temizlik şirketi",
  publisher: { '@id': 'https://www.nivoratemizlik.com/#organization' },
  inLanguage: 'tr-TR',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.nivoratemizlik.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'CleaningService', 'ProfessionalService'],
  '@id': 'https://www.nivoratemizlik.com/#localbusiness',
  name: 'Nivora Temizlik',
  alternateName: ['Nivora Temizlik Hizmetleri', 'Nivora'],
  description:
    "İstanbul'da kurumsal ve bireysel temizlik hizmetleri. Ofis, AVM, hastane, otel, fabrika, villa, konut ve dış cephe cam temizliği. 10+ yıl deneyim, 200+ uzman, 500+ müşteri.",
  url: 'https://www.nivoratemizlik.com',
  telephone: '+905528920118',
  email: 'info@nivoratemizlik.com',
  image: 'https://www.nivoratemizlik.com/images/slider1.png',
  logo: 'https://www.nivoratemizlik.com/og-image.jpg',
  priceRange: '₺₺',
  currenciesAccepted: 'TRY',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer, EFT, Havale',
  foundingDate: '2014',
  slogan: 'İstanbul\'un En Güvenilir Kurumsal Temizlik Şirketi',
  knowsLanguage: ['tr', 'en'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Atatürk Mah. Ertuğrul Gazi Sok. Metropol İstanbul Sitesi C1 Blok No:2B İç Kapı No:376',
    addressLocality: 'Ataşehir',
    addressRegion: 'İstanbul',
    postalCode: '34758',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.9833,
    longitude: 29.1167,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Atatürk+Mah.+Ertuğrul+Gazi+Sok.+Metropol+İstanbul+Sitesi+C1+Blok+Ataşehir',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'İstanbul', '@id': 'https://www.wikidata.org/wiki/Q406' },
    ...istanbulDistricts.map((d) => ({
      '@type': 'AdministrativeArea',
      name: d,
      containedInPlace: { '@type': 'City', name: 'İstanbul' },
    })),
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', latitude: 41.0082, longitude: 28.9784 },
    geoRadius: '50000',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '248',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Temizlik Hizmetleri Kataloğu',
    itemListElement: services.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: s,
        provider: { '@id': 'https://www.nivoratemizlik.com/#organization' },
        areaServed: { '@type': 'City', name: 'İstanbul' },
      },
    })),
  },
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s },
    areaServed: 'İstanbul',
    availability: 'https://schema.org/InStock',
  })),
  sameAs: [
    'https://www.instagram.com/nivoratemizlik',
    'https://wa.me/905528920118',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr-TR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />

        {/* Geo & locale hints (also surfaced via metadata.other above) */}
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="40.9833;29.1167" />
        <meta name="ICBM" content="40.9833, 29.1167" />
        <meta name="language" content="Turkish" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured data: Organization + WebSite + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Nu11tH6gyhtpUvYxefB1lw"
          async
        />

        {/* Google Ads / gtag.js */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18133093554"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18133093554');
            `,
          }}
        />
      </head>
      <body className="font-dm antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
