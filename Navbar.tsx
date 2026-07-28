import { useEffect, useState } from 'react';
import { Menu, X, Phone, Droplet } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Book Appointment', href: '#book' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-700/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-glow">
            <Droplet size={20} strokeWidth={2.2} />
          </span>
          <span className="text-base font-bold tracking-tight text-white md:text-lg">
            Mobile Oil Change <span className="text-orange-400">Pro</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
                className="rounded-full px-4 py-2 text-sm font-medium text-navy-100 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+18005551234" className="btn-ghost text-sm text-white hover:bg-white/10">
            <Phone size={16} /> (800) 555-1234
          </a>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#book');
            }}
            className="btn-primary text-sm"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white ring-1 ring-white/20 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-navy-700/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? 'max-h-[480px] border-t border-white/10' : 'max-h-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-100 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex gap-2">
            <a href="tel:+18005551234" className="btn-secondary flex-1 text-sm">
              <Phone size={16} /> Call Now
            </a>
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#book');
              }}
              className="btn-primary flex-1 text-sm"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
