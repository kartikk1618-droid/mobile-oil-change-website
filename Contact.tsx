import { useState, type FormEvent } from 'react';
import { Phone, Mail, Clock, MapPin, Send, Loader2, CheckCircle2, Siren } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

type Status = 'idle' | 'submitting' | 'success';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(800) 555-1234', href: 'tel:+18005551234' },
  { icon: Mail, label: 'Email', value: 'service@mobileoilchangepro.com', href: 'mailto:service@mobileoilchangepro.com' },
  { icon: Clock, label: 'Business Hours', value: 'Mon–Sat 8am–6pm · Sun 9am–3pm' },
  { icon: MapPin, label: 'Service Areas', value: 'Greater metro · 25-mile radius' },
];

const socials = [
  { label: 'Facebook', href: '#', icon: 'facebook' as const },
  { label: 'Instagram', href: '#', icon: 'instagram' as const },
  { label: 'X', href: '#', icon: 'x' as const },
  { label: 'YouTube', href: '#', icon: 'youtube' as const },
];

function SocialIcon({ name }: { name: 'facebook' | 'instagram' | 'x' | 'youtube' }) {
  const common = 'h-5 w-5';
  switch (name) {
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92Zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08Zm6.95-9.22a1.27 1.27 0 1 1-2.55 0 1.27 1.27 0 0 1 2.55 0Z" />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
          <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.81-5.96 6.81H1.69l7.73-8.83L1.27 2.25h6.82l4.71 6.23 5.44-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
          <path d="M23.5 6.5a3 3 0 0 0-2.11-2.12C19.5 3.87 12 3.87 12 3.87s-7.5 0-9.39.51A3 3 0 0 0 .5 6.5 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.5 3 3 0 0 0 2.11 2.12C4.5 20.13 12 20.13 12 20.13s7.5 0 9.39-.51A3 3 0 0 0 23.5 17.5 31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
        </svg>
      );
  }
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulated send — contact form is informational only.
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Contact Us</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            We're here to help
          </h2>
          <p className="mt-4 text-navy-500">
            Questions about a service, a booking, or fleet pricing? Reach out — a real person will
            get back to you fast.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: info + map */}
          <Reveal className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((c) => {
                const content = (
                  <div className="card h-full p-5 hover:-translate-y-0.5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                      <c.icon size={20} strokeWidth={1.8} />
                    </span>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy-400">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-sm font-medium text-navy-700 hover:text-orange-500">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-navy-700">{c.value}</p>
                    )}
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>

            {/* Emergency button */}
            <a
              href="tel:+18005551234"
              className="group flex items-center gap-4 rounded-2xl bg-red-50 p-5 ring-1 ring-red-200 transition hover:bg-red-100"
            >
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white">
                <span className="absolute inset-0 rounded-full bg-red-500 animate-pulse-ring" />
                <Siren size={22} className="relative" />
              </span>
              <div>
                <p className="text-sm font-bold text-red-700">Emergency Roadside Help</p>
                <p className="text-xs text-red-600">Tap to call — available 24/7</p>
              </div>
            </a>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-navy-500">Follow us:</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 text-navy-600 ring-1 ring-navy-200 transition hover:bg-orange-500 hover:text-white"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-navy-100">
              <iframe
                title="Mobile Oil Change Pro location map"
                src="https://www.google.com/maps?q=auto+repair&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Right: contact form */}
          <Reveal delay={120}>
            <div className="card p-6 sm:p-9">
              {status === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <CheckCircle2 size={36} />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-navy-700">Message sent!</h3>
                  <p className="mt-2 text-sm text-navy-500">
                    Thanks for reaching out. We'll reply within one business day.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="label-field" htmlFor="c_name">Name *</label>
                    <input id="c_name" required value={form.name} onChange={update('name')} className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="c_email">Email *</label>
                    <input id="c_email" type="email" required value={form.email} onChange={update('email')} className="input-field" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="label-field" htmlFor="c_message">Message *</label>
                    <textarea id="c_message" required rows={5} value={form.message} onChange={update('message')} className="input-field resize-none" placeholder="How can we help?" />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
