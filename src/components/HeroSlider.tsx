'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    src: '/images/slider1.png',
    alt: 'Nivora Temizlik Hizmetleri - Profesyonel ofis temizliği ekibi',
  },
  {
    src: '/images/slider2.png',
    alt: 'Nivora Temizlik - Konut ve villa temizlik hizmetleri',
  },
  {
    src: '/images/slider3.png',
    alt: 'Nivora Temizlik - Dış cephe cam ve yüksek kat temizliği',
  },
  {
    src: '/images/slider4.png',
    alt: 'Nivora Temizlik - İnşaat sonrası ve şantiye temizliği',
  },
]

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (animating || idx === current) return
    setAnimating(true)
    setCurrent(idx)
    setTimeout(() => setAnimating(false), 600)
  }, [animating, current])

  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative overflow-hidden bg-navy-900" aria-label="Ana başlık slider">
      {/* Slides */}
      <div className="relative w-full h-[480px] sm:h-[520px] lg:h-[600px]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/75 via-navy-900/30 to-transparent" />
          </div>
        ))}

        {/* Overlaid content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 rounded-full px-4 py-1.5 text-xs font-dm font-semibold tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                İstanbul&apos;un 1 Numaralı Kurumsal Temizlik Firması
              </div>

              <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-[62px] font-bold text-white leading-[1.06] tracking-tight mb-5">
                İstanbul&apos;un En{' '}
                <span className="text-cyan-400">Güvenilir</span>
                <br />
                Kurumsal Temizlik
                <br />
                Şirketi
              </h1>

              <p className="font-dm text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Ofis, AVM, hastane, okul, villa ve daha fazlası için
                İstanbul&apos;un tüm 39 ilçesinde profesyonel temizlik.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-dm font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25"
                >
                  Ücretsiz Teklif Al <ArrowRight />
                </Link>
                <a
                  href="tel:+905528920118"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-dm font-semibold text-base px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0552 892 01 18
                </a>
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
                  <span className="font-dm text-white/60 text-sm ml-1.5">4.9 Google Puanı</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/55 text-sm font-dm">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  ISO 9001 Sertifikalı
                </div>
                <div className="flex items-center gap-1.5 text-white/55 text-sm font-dm">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  7/24 Destek
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next buttons — only when multiple slides */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Önceki slayt"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Sonraki slayt"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-cyan-400' : 'w-1.5 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Slayt ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
