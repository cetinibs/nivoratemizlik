'use client'

import { useState, FormEvent } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const CONVERSION_ID = 'AW-18133093554/-mxZCITW2akcELKZxMZD'

function fireLeadConversion(label: string, value: number) {
  window.gtag?.('event', 'conversion', {
    send_to: CONVERSION_ID,
    value,
    currency: 'TRY',
    event_label: label,
  })
}

function firePhoneConversion() {
  window.gtag?.('event', 'conversion', {
    send_to: CONVERSION_ID,
    value: 100,
    currency: 'TRY',
    event_label: 'phone_click_contact_page',
  })
}

function fireWAConversion() {
  window.gtag?.('event', 'conversion', {
    send_to: CONVERSION_ID,
    value: 80,
    currency: 'TRY',
    event_label: 'whatsapp_contact_page',
  })
}

const SERVICE_LABELS: Record<string, string> = {
  ofis: 'Ofis Temizliği',
  insaat: 'İnşaat Sonrası Temizlik',
  fabrika: 'Fabrika Temizliği',
  otel: 'Otel Temizliği',
  konut: 'Konut Temizliği',
  cam: 'Cam Temizliği',
  diger: 'Diğer',
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    district: '',
    area: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    fireLeadConversion('form_submit', 150)

    const serviceLabel = SERVICE_LABELS[formData.service] || formData.service || 'Belirtilmemiş'
    const parts = [
      `Merhaba! Web sitesi üzerinden teklif formu doldurdum.`,
      `Ad Soyad: ${formData.name}`,
      `Telefon: ${formData.phone}`,
      formData.email ? `E-posta: ${formData.email}` : '',
      `Hizmet: ${serviceLabel}`,
      formData.district ? `İlçe: ${formData.district}` : '',
      formData.area ? `Alan: ${formData.area}` : '',
      formData.message ? `Not: ${formData.message}` : '',
    ].filter(Boolean)

    const waText = encodeURIComponent(parts.join('\n'))
    setStatus('success')
    setTimeout(() => {
      window.open(`https://wa.me/905528920118?text=${waText}`, '_blank')
    }, 600)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div>
          <h3 className="font-cormorant text-2xl font-bold text-navy-900 mb-2">Talebiniz Alındı!</h3>
          <p className="font-dm text-slate-500 text-sm leading-relaxed">
            WhatsApp&apos;a yönlendiriliyorsunuz. Uzmanlarımız en kısa sürede size dönecek.
          </p>
        </div>
        <a
          href="https://wa.me/905528920118"
          target="_blank"
          rel="noopener noreferrer"
          onClick={fireWAConversion}
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-dm font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          WhatsApp&apos;ı Aç
        </a>
      </div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} aria-label="Teklif formu">
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.service}
          onChange={handleChange}
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
          value={formData.district}
          onChange={handleChange}
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
          value={formData.area}
          onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
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

      {/* Direct contact shortcuts */}
      <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+905528920118"
          onClick={firePhoneConversion}
          className="flex-1 flex items-center justify-center gap-2 border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50 text-slate-700 hover:text-cyan-700 font-dm font-medium text-sm py-2.5 rounded-xl transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.55a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.41 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Hemen Ara
        </a>
        <a
          href="https://wa.me/905528920118?text=Merhaba!+Temizlik+hizmeti+hakk%C4%B1nda+bilgi+almak+istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          onClick={fireWAConversion}
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-dm font-medium text-sm py-2.5 rounded-xl transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </form>
  )
}
