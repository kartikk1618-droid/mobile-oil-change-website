import { ArrowRight, Clock, Wallet } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';

export function FeaturedServices({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  const scrollToBook = (serviceName?: string) => {
    if (serviceName) {
      window.dispatchEvent(new CustomEvent('prefill-service', { detail: serviceName }));
    }
    document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-navy-50/40 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Our Services</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
              Full-service maintenance, delivered
            </h2>
            <p className="mt-4 text-navy-500">
              From conventional to full-synthetic, filters to fluids — every service is performed
              on-site with premium parts and transparent pricing.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 80}>
              <div className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-glow/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-700 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
                  <s.icon size={24} strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-navy-700">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">{s.description}</p>

                <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4 text-xs text-navy-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-orange-500" /> {s.estimatedTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Wallet size={14} className="text-orange-500" /> from {s.startingPrice}
                  </span>
                </div>

                <button
                  onClick={() => scrollToBook(s.name)}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-navy-50 px-4 py-2.5 text-sm font-semibold text-navy-700 transition hover:bg-orange-500 hover:text-white"
                >
                  Book Service <ArrowRight size={15} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
