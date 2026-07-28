import { Reveal } from '@/components/Reveal';

type Pair = {
  before: string;
  after: string;
  label: string;
};

const pairs: Pair[] = [
  {
    before:
      'https://images.pexels.com/photos/13065693/pexels-photo-13065693.jpeg?auto=compress&cs=tinysrgb&w=800',
    after:
      'https://images.pexels.com/photos/13065700/pexels-photo-13065700.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Engine oil & filter',
  },
  {
    before:
      'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
    after:
      'https://images.pexels.com/photos/36281957/pexels-photo-36281957.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Air filter swap',
  },
  {
    before:
      'https://images.pexels.com/photos/13065696/pexels-photo-13065696.jpeg?auto=compress&cs=tinysrgb&w=800',
    after:
      'https://images.pexels.com/photos/2287951/pexels-photo-2287951.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'On-site service',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-navy-50/40 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Before & After</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            See the difference, on-site
          </h2>
          <p className="mt-4 text-navy-500">
            We photograph every service so you can see exactly what was done. Here's a look at real
            before-and-after results from recent visits.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pairs.map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <figure className="card overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={p.before}
                      alt={`${p.label} before service`}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-700/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={p.after}
                      alt={`${p.label} after service`}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      After
                    </span>
                  </div>
                </div>
                <figcaption className="px-5 py-4 text-sm font-medium text-navy-600">
                  {p.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
