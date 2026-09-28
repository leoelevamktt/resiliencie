export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return [];
  return ['', '/espaco', '/profissionais', '/profissionais/andreia', '/servicos', '/empresas', '/conteudos', '/cursos-e-livros', '/contato', '/privacidade'].map(path => ({url: `${base.replace(/\/$/, '')}${path}`, changeFrequency: 'monthly', priority: path ? 0.7 : 1}));
}
