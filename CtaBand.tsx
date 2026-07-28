import { Calendar, Phone } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-orange-500 py-16 text-white">
      <div className="container-px relative">
        <Reveal className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready for a fresh oil change?
            </h2>
            <p className="mt-2 max-w-xl text-orange-50">
              Book in under a minute and we'll be in your driveway before you know it. No waiting
              room, no hassle.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn bg-navy-700 text-white hover:bg-navy-800"
            >
              <Calendar size={18} /> Book Appointment
            </a>
            <a href="tel:+18005551234" className="btn bg-white text-orange-600 hover:bg-orange-50">
              <Phone size={18} /> (800) 555-1234
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
