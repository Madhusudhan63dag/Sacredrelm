/*
 Build-time sitemap and robots.txt generator
*/
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || process.env.REACT_APP_SITE_URL || 'https://sacredrelm.com';

async function loadAppData() {
  try {
    const { default: translations } = await import(path.join(process.cwd(), 'src/utils/data.js'));
    return translations;
  } catch (e) {
    return null;
  }
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function createUrlSlug(name) {
  return String(name || '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function createProductUrl(id, name) {
  return `/product/${id}/${createUrlSlug(name)}`;
}

function parseProductSlugsFromFile() {
  try {
    const file = path.join(process.cwd(), 'src/utils/urlSlugs.js');
    const txt = fs.readFileSync(file, 'utf8');
    const sectionStart = txt.indexOf('export const productSlugs');
    if (sectionStart === -1) return [];
    const braceStart = txt.indexOf('{', sectionStart);
    const braceEnd = txt.indexOf('};', braceStart);
    const body = txt.slice(braceStart + 1, braceEnd);
    const lines = body.split(/\r?\n/);
    const pairs = [];
    for (const line of lines) {
      const m = line.match(/^(\s*)(\d+)\s*:\s*'([^']+)'/);
      if (m) {
        pairs.push({ id: parseInt(m[2], 10), slug: m[3] });
      }
    }
    return pairs;
  } catch (_) {
    return [];
  }
}

async function generate() {
  const pubDir = path.join(process.cwd(), 'public');
  const buildDir = path.join(process.cwd(), 'build');

  const staticPaths = ['/', '/about', '/contact', '/shop', '/store', '/privacy', '/terms', '/shipping', '/return', '/cancellation', '/thank-you'];

  let products = [];
  try {
    const translations = await loadAppData();
    if (translations && translations.products && Array.isArray(translations.products.product)) {
      products = translations.products.product;
    }
  } catch (_) {}

  // Fallback to productSlugs mapping
  if (!products.length) {
    const pairs = parseProductSlugsFromFile();
    products = pairs.map(p => ({ id: p.id, name: p.slug.replace(/-/g, ' ') }));
  }

  const urls = [];
  const today = new Date().toISOString().slice(0, 10);

  // Static pages
  staticPaths.forEach((p) => {
    urls.push({ loc: `${SITE_URL}${p}`, changefreq: 'weekly', priority: p === '/' ? '1.0' : '0.6', lastmod: today });
  });

  // Product pages
  products.forEach((p) => {
    urls.push({ loc: `${SITE_URL}${createProductUrl(p.id, p.name)}`, changefreq: 'monthly', priority: '0.8', lastmod: today });
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((u) => [
      '  <url>',
      `    <loc>${esc(u.loc)}</loc>`,
      `    <lastmod>${u.lastmod}</lastmod>`,
      `    <changefreq>${u.changefreq}</changefreq>`,
      `    <priority>${u.priority}</priority>`,
      '  </url>'
    ].join('\n')),
    '</urlset>'
  ].join('\n');

  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
    'Disallow: /admin/',
    'Disallow: /checkout/',
    'Disallow: /billing/'
  ].join('\n');

  // Write to public and build (if exists)
  fs.writeFileSync(path.join(pubDir, 'sitemap.xml'), xml, 'utf8');
  fs.writeFileSync(path.join(pubDir, 'robots.txt'), robots, 'utf8');
  if (fs.existsSync(buildDir)) {
    fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), xml, 'utf8');
    fs.writeFileSync(path.join(buildDir, 'robots.txt'), robots, 'utf8');
  }

  console.log(`Generated ${urls.length} URLs -> sitemap.xml`);
}

generate().catch((e) => {
  console.error('Sitemap generation failed:', e);
  process.exit(0); // Do not fail the build
});
