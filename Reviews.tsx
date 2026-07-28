import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { StarRating } from '@/components/StarRating';
import { reviews } from '@/data/reviews';

export function Reviews() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const scrollByCards = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('[data-card]') as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.querySelector('[data-card]') as HTMLElement | null;
      const step = card ? card.offsetWidth + 24 : 320;
      setActive(Math.round(track.scrollLeft / step));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Customer Reviews</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            Loved by 500+ happy customers
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-navy-50 px-5 py-3">
            <StarRating rating={5} size={20} />
            <span className="text-lg font-bold text-navy-700">4.9/5</span>
            <span className="text-sm text-navy-400">· Based on 500+ reviews</span>
          </div>
        </Reveal>

        <div className="relative mt-14">
          {/* Track */}
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {reviews.map((r) => (
              <article
                key={r.name}
                data-card
                className="card w-[300px] flex-shrink-0 snap-center p-7 sm:w-[360px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-700 text-sm font-bold text-orange-400">
                      {r.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-700">{r.name}</p>
                      <p className="text-xs text-navy-400">{r.vehicle}</p>
                    </div>
                  </div>
                  <Quote size={28} className="text-orange-100" />
                </div>
                <div className="mt-4">
                  <StarRating rating={r.rating} size={16} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">"{r.text}"</p>
                <p className="mt-4 text-xs text-navy-300">{r.date}</p>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => scrollByCards(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy-700 ring-1 ring-navy-200 transition hover:bg-orange-500 hover:text-white"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? 'w-6 bg-orange-500' : 'w-1.5 bg-navy-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => scrollByCards(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy-700 ring-1 ring-navy-200 transition hover:bg-orange-500 hover:text-white"
              aria-label="Next reviews"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
