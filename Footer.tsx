import { Droplet, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Book Appointment', href: '#book' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Conventional Oil Change',
  'Synthetic Oil Change',
  'High Mileage Oil Change',
  'Oil Filter Replacement',
  'Air Filter Replacement',
  'Battery Check',
];

function SocialIcon({ name }: { name: 'facebook' | 'instagram' | 'x' | 'youtube' }) {
  const common = 'h-4 w-4';
  if (name === 'facebook')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    );
  if (name === 'instagram')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 4.38a5.46 5.46 0 1 0 0 10.92 5.46 5.46 0 0 0 0-10.92Zm0 9a3.54 3.54 0 1 1 0-7.08 3.54 3.54 0 0 1 0 7.08Zm6.95-9.22a1.27 1.27 0 1 1-2.55 0 1.27 1.27 0 0 1 2.55 0Z" />
      </svg>
    );
  if (name === 'x')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.81-5.96 6.81H1.69l7.73-8.83L1.27 2.25h6.82l4.71 6.23 5.44-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
      <path d="M23.5 6.5a3 3 0 0 0-2.11-2.12C19.5 3.87 12 3.87 12 3.87s-7.5 0-9.39.51A3 3 0 0 0 .5 6.5 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.5 3 3 0 0 0 2.11 2.12C4.5 20.13 12 20.13 12 20.13s7.5 0 9.39-.51A3 3 0 0 0 23.5 17.5 31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials: ('facebook' | 'instagram' | 'x' | 'youtube')[] = ['facebook', 'instagram', 'x', 'youtube'];

  return (
    <footer className="bg-navy-800 text-navy-100">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <Droplet size={20} strokeWidth={2.2} />
              </span>
              <span className="text-base font-bold text-white">
                Mobile Oil Change <span className="text-orange-400">Pro</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
              Premium mobile oil change and vehicle maintenance, delivered to your home or office.
              Certified technicians, transparent pricing, zero waiting rooms.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-navy-100 transition hover:bg-orange-500 hover:text-white"
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-navy-200 transition hover:text-orange-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-navy-200 transition hover:text-orange-400">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-200">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-orange-400" />
                <a href="tel:+18005551234" className="hover:text-orange-400">(800) 555-1234</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-orange-400" />
                <a href="mailto:service@mobileoilchangepro.com" className="break-all hover:text-orange-400">
                  service@mobileoilchangepro.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-orange-400" />
                <span>Greater metro area · 25-mile radius</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-navy-300 sm:flex-row sm:text-left">
          <p>© {year} Mobile Oil Change Pro. All rights reserved.</p>
          <p>Licensed · Insured · ASE-Certified Technicians</p>
        </div>
      </div>
    </footer>
  );
}
