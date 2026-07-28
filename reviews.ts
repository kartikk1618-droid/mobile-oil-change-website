export type Review = {
  name: string;
  initials: string;
  rating: number;
  text: string;
  vehicle: string;
  date: string;
};

export const reviews: Review[] = [
  {
    name: 'Marcus Thompson',
    initials: 'MT',
    rating: 5,
    text: 'Booked online at 9am and the tech was in my driveway by 11. Synthetic oil change took 35 minutes and my SUV runs smoother than it has in months. This is the only way I\'ll do oil changes from now on.',
    vehicle: '2021 Jeep Grand Cherokee',
    date: '2 weeks ago',
  },
  {
    name: 'Daniela Rodriguez',
    initials: 'DR',
    rating: 5,
    text: 'I work from home with two kids — getting to a shop is impossible. They came to my office parking lot, did the full service, and left everything spotless. Professional, on time, and reasonably priced.',
    vehicle: '2019 Honda CR-V',
    date: '1 month ago',
  },
  {
    name: 'James Whitfield',
    initials: 'JW',
    rating: 5,
    text: 'My truck has 180k miles and the high mileage service made a noticeable difference. The technician walked me through everything he was doing. Felt like a dealership experience without the wait.',
    vehicle: '2014 Ford F-150',
    date: '3 weeks ago',
  },
  {
    name: 'Priya Nair',
    initials: 'PN',
    rating: 5,
    text: 'Transparent pricing, no upsell pressure, and the booking form took me under a minute. They even topped off my washer fluid for free. Already recommended them to my whole neighborhood.',
    vehicle: '2022 Toyota RAV4',
    date: '1 week ago',
  },
  {
    name: 'Anthony Russo',
    initials: 'AR',
    rating: 5,
    text: 'I manage a small fleet of delivery vans. Having them come to our lot and service three vehicles back-to-back saved me an entire day of downtime. Scheduling was effortless.',
    vehicle: '2020 Mercedes Sprinter',
    date: '2 months ago',
  },
  {
    name: 'Sophia Chen',
    initials: 'SC',
    rating: 5,
    text: 'The tech texted me 20 minutes before arriving, was courteous, and wore booties over his shoes so he wouldn\'t track anything into my garage. Small details like that earned a customer for life.',
    vehicle: '2023 Tesla Model Y',
    date: '5 days ago',
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'What areas do you service?',
    answer:
      'We currently service the greater metro area within a 25-mile radius of downtown. Enter your address at booking and we\'ll confirm coverage instantly — if we can\'t reach you, we\'ll let you know right away.',
  },
  {
    question: 'Do I need to be home during the service?',
    answer:
      'No. As long as we can access your vehicle and a flat surface to park on, we can complete the service without you present. You\'ll receive before-and-after photos and a digital service receipt.',
  },
  {
    question: 'How long does a typical oil change take?',
    answer:
      'Most oil changes take 30–35 minutes from arrival to cleanup. Add-on services like filter replacements or fluid top-offs add 8–15 minutes each. You\'ll get an exact time estimate when you book.',
  },
  {
    question: 'What oil and parts do you use?',
    answer:
      'We use premium full-synthetic, synthetic blend, conventional, and high-mileage oils from trusted brands, plus OEM-grade filters. You can request a specific oil weight at booking and we\'ll match it.',
  },
  {
    question: 'How do I pay?',
    answer:
      'We accept all major credit and debit cards, contactless mobile pay, and cash. Payment is collected on-site after the service is complete — no deposit required to book.',
  },
  {
    question: 'Can you service fleet or commercial vehicles?',
    answer:
      'Yes. We offer scheduled fleet maintenance with volume pricing. Contact us with your vehicle count and service frequency for a custom quote.',
  },
];
