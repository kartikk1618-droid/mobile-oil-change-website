import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send, CalendarDays } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';
import { supabase, type AppointmentInput } from '@/lib/supabase';

const timeSlots = [
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const emptyForm = {
  customer_name: '',
  phone: '',
  email: '',
  vehicle_make: '',
  vehicle_model: '',
  vehicle_year: '',
  service: '',
  preferred_date: '',
  preferred_time: '',
  address: '',
  notes: '',
};

export function BookingForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setForm((f) => ({ ...f, service: detail }));
    };
    window.addEventListener('prefill-service', handler);
    return () => window.removeEventListener('prefill-service', handler);
  }, []);

  const update =
    (field: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const payload: AppointmentInput = {
      customer_name: form.customer_name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      vehicle_make: form.vehicle_make.trim(),
      vehicle_model: form.vehicle_model.trim(),
      vehicle_year: form.vehicle_year.trim(),
      service: form.service,
      preferred_date: form.preferred_date,
      preferred_time: form.preferred_time,
      address: form.address.trim(),
      notes: form.notes.trim() || null,
    };

    const { error } = await supabase.from('appointments').insert(payload).select().maybeSingle();

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong submitting your request. Please try again or call us.');
      return;
    }

    setStatus('success');
    setForm(emptyForm);
  };

  if (status === 'success') {
    return (
      <section id="book" className="bg-navy-700 py-20 text-white md:py-28">
        <div className="container-px">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 shadow-glow">
              <CheckCircle2 size={44} />
            </span>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Thank you!</h2>
            <p className="mt-4 text-lg text-navy-100">
              Your appointment request has been received. A team member will call or text you within
              the hour to confirm your time slot.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-secondary mt-8 bg-white/10 text-white ring-white/20 hover:bg-white/20"
            >
              Book another appointment
            </button>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="bg-navy-50/40 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Book Appointment</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            Schedule your mobile oil change
          </h2>
          <p className="mt-4 text-navy-500">
            Fill out the form below and we'll confirm your appointment within the hour. It takes
            less than a minute.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="card p-6 sm:p-9"
            aria-label="Appointment booking form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="label-field" htmlFor="customer_name">Full Name *</label>
                <input id="customer_name" required value={form.customer_name} onChange={update('customer_name')} className="input-field" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="label-field" htmlFor="phone">Phone Number *</label>
                <input id="phone" type="tel" required value={form.phone} onChange={update('phone')} className="input-field" placeholder="(555) 123-4567" />
              </div>
              <div className="sm:col-span-2">
                <label className="label-field" htmlFor="email">Email Address *</label>
                <input id="email" type="email" required value={form.email} onChange={update('email')} className="input-field" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="label-field" htmlFor="vehicle_make">Vehicle Make *</label>
                <input id="vehicle_make" required value={form.vehicle_make} onChange={update('vehicle_make')} className="input-field" placeholder="Toyota" />
              </div>
              <div>
                <label className="label-field" htmlFor="vehicle_model">Vehicle Model *</label>
                <input id="vehicle_model" required value={form.vehicle_model} onChange={update('vehicle_model')} className="input-field" placeholder="Camry" />
              </div>
              <div className="sm:col-span-2">
                <label className="label-field" htmlFor="vehicle_year">Vehicle Year *</label>
                <input id="vehicle_year" required value={form.vehicle_year} onChange={update('vehicle_year')} className="input-field" placeholder="2021" inputMode="numeric" />
              </div>
              <div className="sm:col-span-2">
                <label className="label-field" htmlFor="service">Service Selection *</label>
                <select id="service" required value={form.service} onChange={update('service')} className="input-field">
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} — from {s.startingPrice}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label-field" htmlFor="preferred_date">Preferred Date *</label>
                <input id="preferred_date" type="date" required min={today} value={form.preferred_date} onChange={update('preferred_date')} className="input-field" />
              </div>
              <div>
                <label className="label-field" htmlFor="preferred_time">Preferred Time *</label>
                <select id="preferred_time" required value={form.preferred_time} onChange={update('preferred_time')} className="input-field">
                  <option value="" disabled>Select a time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="label-field" htmlFor="address">Service Address *</label>
                <input id="address" required value={form.address} onChange={update('address')} className="input-field" placeholder="123 Main St, City, ZIP" />
              </div>
              <div className="sm:col-span-2">
                <label className="label-field" htmlFor="notes">Additional Notes</label>
                <textarea id="notes" value={form.notes} onChange={update('notes')} rows={3} className="input-field resize-none" placeholder="Parking instructions, gate codes, specific oil weight, etc." />
              </div>
            </div>

            {status === 'error' && (
              <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600 ring-1 ring-red-200">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary mt-7 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Submitting…
                </>
              ) : (
                <>
                  <Send size={18} /> Submit Appointment Request
                </>
              )}
            </button>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-navy-400">
              <CalendarDays size={13} className="text-orange-500" />
              No payment required to book — pay on-site after your service.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
