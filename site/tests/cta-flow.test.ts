import { describe, expect, it } from 'vitest';
import { bookingCtas, heroCtas } from '../src/content/cta';

describe('CTA configuration', () => {
  it('hero CTAs cover discovery and proof paths', () => {
    const hrefs = heroCtas.map((cta) => cta.href);
    expect(hrefs).toContain('#contact');
    expect(hrefs).toContain('#portfolio');
  });

  it('booking CTAs keep contact + pricing anchors available', () => {
    const hrefs = bookingCtas.map((cta) => cta.href);
    expect(hrefs).toContain('#contact');
    expect(hrefs).toContain('#services');
  });

  it('all CTAs have labels and variants defined', () => {
    [...heroCtas, ...bookingCtas].forEach((cta) => {
      expect(cta.label.length).toBeGreaterThan(0);
      expect(cta.href.startsWith('#')).toBe(true);
      expect(['primary', 'secondary']).toContain(cta.variant);
    });
  });
});
