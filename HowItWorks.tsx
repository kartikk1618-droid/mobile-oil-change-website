import { CalendarCheck, ListChecks, Wrench } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  {
    icon: CalendarCheck,
    step: '01',
    title: 'Book Online',
    text: 'Pick your service, date, time, and location in under a minute. Get instant confirmation.',
  },
  {
    icon: ListChecks,
    step: '02',
    title: 'We Arrive On Time',
    text: 'Your certified tech arrives in a stocked service vehicle and texts you 20 minutes before arrival.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Service & Go',
    text: 'We complete the work, send before-and-after photos, and you pay on-site. No mess, no waiting.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-white py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            Three simple steps to a fresh oil change
          </h2>
          <p className="mt-4 text-navy-500">
            From booking to a clean engine in under an hour — no trip to the shop required.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent md:block" />

          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 120} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <span className="flex h-[72px] w-[72px] items-center justify-center rounded-3xl bg-navy-700 text-white shadow-card ring-4 ring-white">
                    <s.icon size={30} strokeWidth={1.6} />
                  </span>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-glow">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy-700">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-500">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
