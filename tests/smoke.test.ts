import { describe, expect, it } from 'bun:test';
import { seo } from '../src/index';

describe('@manicjs/seo', () => {
  it('creates SEO plugin with expected name', () => {
    const plugin = seo({ hostname: 'https://example.com' });
    expect(plugin.name).toBe('seo');
  });
});
