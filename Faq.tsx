import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { faqs } from '@/data/reviews';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            Questions? We've got answers
          </h2>
          <p className="mt-4 text-navy-500">
            Everything you need to know about booking, pricing, and how our mobile service works.
            Still curious? Call us anytime.
          </p>
          <a href="tel:+18005551234" className="btn-secondary mt-6">
            Talk to a human
          </a>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.question}
                className="card overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-navy-700">{f.question}</span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition ${
                      isOpen ? 'bg-orange-500 text-white' : 'bg-navy-50 text-navy-600'
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-navy-500">{f.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
