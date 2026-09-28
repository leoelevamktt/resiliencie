import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/data/site';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://resiliencepsicologia.example';
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Espaço Resilience Psicologia | Cuidado que acolhe, caminhos que transformam', template: '%s | Espaço Resilience Psicologia' },
  description: site.description,
  openGraph: { type: 'website', locale: 'pt_BR', siteName: site.name, title: site.name, description: site.description, images: ['/images/consultorio-01.webp'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header/><main id="conteudo">{children}</main><Footer/></body>
    </html>
  );
}
