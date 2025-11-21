import { describe, expect, it } from 'vitest';
import { contactFields } from '../src/content/contactForm';

describe('contact form configuration', () => {
  it('includes required name and email fields', () => {
    const requiredIds = contactFields.filter((field) => field.required).map((field) => field.id);
    expect(requiredIds).toContain('name');
    expect(requiredIds).toContain('email');
  });

  it('exposes a textarea for describing needs', () => {
    const needsField = contactFields.find((field) => field.id === 'needs');
    expect(needsField).toBeDefined();
    if (needsField) {
      expect(needsField.kind).toBe('textarea');
      expect((needsField.rows || 0) >= 4).toBe(true);
    }
  });

  it('provides placeholders for every field to guide submissions', () => {
    contactFields.forEach((field) => {
      expect(field.placeholder.length).toBeGreaterThan(0);
    });
  });
});
