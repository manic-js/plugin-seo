import { describe, expect, it } from 'bun:test';
import { seo } from '../src/index';
import { generateRobotsTxt } from '../src/robots';

describe('@manicjs/seo', () => {
  it('creates SEO plugin with expected name', () => {
    const plugin = seo({ hostname: 'https://example.com' });
    expect(plugin.name).toBe('seo');
  });

  it('accepts empty config (dev / create-manic default)', () => {
    const plugin = seo();
    expect(plugin.name).toBe('seo');
    expect(generateRobotsTxt({})).toContain(
      'http://localhost:3000/sitemap.xml'
    );
  });
});
