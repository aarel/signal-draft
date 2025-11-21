import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { portfolio } from '../src/content/portfolio';
import { services } from '../src/content/services';

const portfolioSchema = z.array(
  z.object({
    title: z.string().min(1),
    niche: z.string().min(1),
    format: z.string().min(1),
    outcome: z.string().min(1),
    tone: z.string().min(1),
    image: z.string().min(1),
    imageAlt: z.string().min(1)
  })
);

const serviceSchema = z.array(
  z.object({
    title: z.string().min(1),
    detail: z.string().min(1),
    deliverables: z.array(z.string().min(1)).min(1)
  })
);

describe('content data', () => {
  it('portfolio items match schema', () => {
    expect(() => portfolioSchema.parse(portfolio)).not.toThrow();
  });

  it('services match schema', () => {
    expect(() => serviceSchema.parse(services)).not.toThrow();
  });
});
