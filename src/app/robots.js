export default function robots() {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  return { rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }], ...(base ? { sitemap: `${base.replace(/\/$/, '')}/sitemap.xml` } : {}) };
}
