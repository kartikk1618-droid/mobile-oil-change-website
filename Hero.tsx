import { Calendar, Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { StarRating } from '@/components/StarRating';

const HERO_IMG =
  'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1600';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Professional mechanic changing oil in a car engine"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/85 to-navy-700/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/40" />
      </div>

      {/* Content */}
      <div className="container-px relative flex min-h-[100svh] flex-col justify-center pt-24 pb-16 md:pt-28">
        <div className="max-w-2xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-orange-300 ring-1 ring-orange-400/30 backdrop-blur-sm">
            <ShieldCheck size={14} /> Certified Mobile Mechanics
          </div>

          <h1
            className="animate-fade-up mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: '80ms' }}
          >
            Professional Mobile Oil Change at Your{' '}
            <span className="text-orange-400">Home or Office</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            Skip the waiting room. Our certified technicians bring premium oil change and
            maintenance services straight to your driveway — on your schedule, with dealership-grade
            care and transparent pricing.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#book');
              }}
              className="btn-primary text-base"
            >
              <Calendar size={18} /> Book Appointment
            </a>
            <a href="tel:+18005551234" className="btn-secondary text-base">
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: '320ms' }}
          >
            <div>
              <StarRating rating={5} size={18} />
              <p className="mt-1 text-sm text-navy-100">
                <span className="font-semibold text-white">4.9/5</span> from 500+ customers
              </p>
            </div>
            <div className="flex items-center gap-2 text-navy-100">
              <Clock size={18} className="text-orange-400" />
              <span className="text-sm">Same-day availability</span>
            </div>
            <div className="flex items-center gap-2 text-navy-100">
              <MapPin size={18} className="text-orange-400" />
              <span className="text-sm">25-mile service radius</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-200 md:flex">
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <span className="h-10 w-6 rounded-full border-2 border-navy-200/60 p-1">
          <span className="block h-2 w-full rounded-full bg-orange-400 animate-float" />
        </span>
      </div>
    </section>
  );
}
