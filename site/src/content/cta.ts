export type CtaVariant = 'primary' | 'secondary';

export interface CtaConfig {
  label: string;
  href: string;
  variant: CtaVariant;
}

export const heroCtas: CtaConfig[] = [
  { label: 'Book a discovery call', href: '#contact', variant: 'primary' },
  { label: 'View samples', href: '#portfolio', variant: 'secondary' }
];

export const bookingCtas: CtaConfig[] = [
  { label: 'Send a brief', href: '#contact', variant: 'primary' },
  { label: 'See pricing paths', href: '#services', variant: 'secondary' }
];
