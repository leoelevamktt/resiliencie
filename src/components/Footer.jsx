import Link from 'next/link';
import { ArrowUpRight, Instagram, MapPin } from 'lucide-react';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div>
            <span className="eyebrow eyebrow--light">UM ESPAÇO PARA SER E FLORESCER</span>
            <h2>O próximo passo pode começar <em>com uma conversa.</em></h2>
          </div>
          <Link href="/contato" className="button button--cream">Entre em contato <ArrowUpRight size={18} /></Link>
        </div>
        <div className="footer__bottom">
          <div className="footer__intro"><Brand footer /><p>Tratamento de traumas, saúde mental e desenvolvimento humano. Cuidado construído a partir de cada história.</p></div>
          <div className="footer__links"><span>Explore</span><Link href="/espaco">O espaço</Link><Link href="/profissionais">Profissionais</Link><Link href="/servicos">Serviços clínicos</Link><Link href="/empresas">Para empresas</Link></div>
          <div className="footer__links"><span>Descubra</span><Link href="/conteudos">Artigos e conteúdos</Link><Link href="/cursos-e-livros">Cursos e livros</Link><Link href="/contato">Contato</Link><Link href="/privacidade">Privacidade</Link></div>
          <div className="footer__links"><span>Atendimento</span><p>Presencial e on-line, conforme o serviço.</p><Link className="footer__location" href="/contato"><MapPin size={16}/> Informações sobre localização</Link></div>
        </div>
        <div className="footer__legal"><span>© {new Date().getFullYear()} Espaço Resilience Psicologia.</span><span>Um encontro entre cuidado, ciência e transformação.</span></div>
      </div>
    </footer>
  );
}
