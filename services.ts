import {
  Droplet,
  Sparkles,
  Gauge,
  Filter,
  Wind,
  BatteryCharging,
  FlaskConical,
  Disc,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  name: string;
  description: string;
  estimatedTime: string;
  startingPrice: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: 'conventional',
    name: 'Conventional Oil Change',
    description:
      'High-quality conventional motor oil that keeps your engine lubricated and protected for everyday driving conditions.',
    estimatedTime: '30 min',
    startingPrice: '$49',
    icon: Droplet,
    featured: true,
  },
  {
    id: 'synthetic',
    name: 'Synthetic Oil Change',
    description:
      'Premium full-synthetic oil for superior engine protection, better fuel economy, and longer intervals between changes.',
    estimatedTime: '35 min',
    startingPrice: '$79',
    icon: Sparkles,
    featured: true,
  },
  {
    id: 'high-mileage',
    name: 'High Mileage Oil Change',
    description:
      'Formulated for vehicles over 75,000 miles — reduces leaks, conditions seals, and extends engine life.',
    estimatedTime: '35 min',
    startingPrice: '$69',
    icon: Gauge,
    featured: true,
  },
  {
    id: 'oil-filter',
    name: 'Oil Filter Replacement',
    description:
      'OEM-grade oil filter swap to keep contaminants out of your engine and maintain clean oil flow.',
    estimatedTime: '15 min',
    startingPrice: '$24',
    icon: Filter,
  },
  {
    id: 'air-filter',
    name: 'Air Filter Replacement',
    description:
      'Restore airflow and improve fuel efficiency with a fresh cabin or engine air filter installed on-site.',
    estimatedTime: '15 min',
    startingPrice: '$29',
    icon: Wind,
  },
  {
    id: 'battery-check',
    name: 'Battery Check',
    description:
      'Full diagnostic load test and terminal cleaning to make sure your battery starts reliably every time.',
    estimatedTime: '10 min',
    startingPrice: '$19',
    icon: BatteryCharging,
  },
  {
    id: 'fluid-topoff',
    name: 'Fluid Top-Off',
    description:
      'Complimentary top-off of windshield, brake, coolant, and power steering fluids to safe levels.',
    estimatedTime: '10 min',
    startingPrice: '$15',
    icon: FlaskConical,
  },
  {
    id: 'tire-pressure',
    name: 'Tire Pressure Check',
    description:
      'Inspect and adjust all four tires to manufacturer-recommended pressure for safety and mileage.',
    estimatedTime: '8 min',
    startingPrice: '$12',
    icon: Disc,
  },
];
