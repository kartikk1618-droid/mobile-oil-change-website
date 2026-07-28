import { Clock, BadgeCheck, Wallet, Car, Leaf, HeadphonesIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const reasons = [
  {
    icon: Clock,
    title: 'We Come To You',
    text: 'No waiting rooms, no towing, no lost afternoons. We service your vehicle wherever it\'s parked — home, office, or curbside.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Technicians',
    text: 'Every mechanic is ASE-certified, background-checked, and arrives in a fully stocked service vehicle.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    text: 'See your price before you book. No surprise fees, no upsells, no hidden shop charges — ever.',
  },
  {
    icon: Car,
    title: 'All Makes & Models',
    text: 'From daily drivers to high-mileage trucks and EVs, we carry the right oil and parts for your vehicle.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Disposal',
    text: 'We collect and recycle 100% of used oil and filters through certified disposal partners.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Real Support, 7 Days',
    text: 'Text, call, or chat with a real human — not a bot — any day of the week before and after your service.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-navy-50/40 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            The convenient way to keep your engine healthy
          </h2>
          <p className="mt-4 text-navy-500">
            We built Mobile Oil Change Pro around one promise: dealership-quality service that comes
            to you, on your schedule, at a fair price.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="card group h-full p-7 hover:-translate-y-1 hover:shadow-glow/20">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 ring-1 ring-orange-100 transition group-hover:bg-orange-500 group-hover:text-white">
                  <r.icon size={26} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-700">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
