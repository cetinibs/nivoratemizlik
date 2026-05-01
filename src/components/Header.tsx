'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/hizmetlerimiz', label: 'Hizmetlerimiz' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-cyan-500 text-white text-center py-2 px-4 text-sm font-dm font-medium z-50 relative">
        <a href="tel:+905528920118" className="font-bold hover:underline">
          📞 0552 892 01 18
        </a>
        <span className="hidden sm:inline">
          {' '}— İstanbul geneli ücretsiz keşif ve fiyat teklifi
        </span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-900/96 backdrop-blur-md shadow-xl shadow-navy-900/30'
            : 'bg-navy-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="w-9 h-9 bg-cyan-500 group-hover:bg-cyan-400 rounded-lg flex items-center justify-center transition-colors flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L6 10v12l10 6 10-6V10L16 4z" fill="white" fillOpacity="0.95" />
                  <path d="M16 4v20M6 10l10 6M26 10l-10 6" stroke="white" strokeWidth="1.5" strokeOpacity="0.35" />
                </svg>
              </div>
              <div className="leading-none">
                <span className="font-cormorant font-bold text-[22px] text-white tracking-tight block leading-none">
                  Nivora
                </span>
                <span className="font-dm text-[9px] text-cyan-400 tracking-[0.22em] uppercase font-bold leading-none">
                  Temizlik
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-dm text-sm font-medium transition-colors duration-150 relative group ${
                    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                      ? 'text-cyan-400'
                      : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full transition-transform duration-200 origin-left ${
                      pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+905528920118"
                className="flex items-center gap-2 text-white/75 hover:text-white text-sm font-dm font-medium transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                0552 892 01 18
              </a>
              <Link
                href="/iletisim"
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-dm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-cyan-500/20"
              >
                Ücretsiz Teklif Al
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white/80 hover:text-white transition-colors p-1"
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-800 border-t border-white/8 shadow-2xl">
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-xl font-dm text-sm font-medium transition-colors ${
                    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                      ? 'bg-cyan-500/15 text-cyan-400'
                      : 'text-white/65 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2 space-y-3">
                <a
                  href="tel:+905528920118"
                  className="flex items-center gap-2.5 text-white font-dm font-bold text-lg px-4"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0552 892 01 18
                </a>
                <Link
                  href="/iletisim"
                  className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-white font-dm font-semibold py-3.5 rounded-xl transition-colors mx-4"
                  style={{ width: 'calc(100% - 2rem)' }}
                >
                  Ücretsiz Teklif Al
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
