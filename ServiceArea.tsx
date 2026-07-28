import { MapPin, Navigation } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const areas = [
  'Downtown',
  'Riverside',
  'Oakwood',
  'Fairview',
  'Highland Park',
  'Westgate',
  'Eastbrook',
  'Lakeside',
];

export function ServiceArea() {
  return (
    <section id="area" className="bg-navy-700 py-20 text-white md:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-300 ring-1 ring-orange-400/30">
            <MapPin size={14} /> Service Area
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Serving the entire metro — 25 miles out
          </h2>
          <p className="mt-4 text-navy-100">
            If you're within our service radius, we'll come to you. Enter your address at booking and
            we'll confirm coverage instantly. Don't see your neighborhood? Give us a call — we're
            always expanding.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-navy-50 ring-1 ring-white/15"
              >
                <Navigation size={13} className="text-orange-400" /> {a}
              </span>
            ))}
          </div>

          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary mt-8"
          >
            Check Availability
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-white/10">
            <iframe
              title="Mobile Oil Change Pro service area map"
              src="https://www.google.com/maps?q=downtown&output=embed"
              className="h-[360px] w-full border-0 md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
