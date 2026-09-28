import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowRight, ArrowUpRight, HeartHandshake, Leaf, MoveUpRight, UsersRound, BriefcaseBusiness, Check } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero__grid">
          <div className="home-hero__content">
            <div className="pill"><span className="pill__dot"/> PSICOLOGIA COM PROPÓSITO</div>
            <h1>Um espaço para <em>acolher</em> sua história e cultivar novos caminhos<span className="heading-period">.</span></h1>
            <p>O cuidado começa quando existe espaço para ser quem somos. Acompanhamento psicológico dedicado ao tratamento de traumas, à promoção da saúde mental e ao desenvolvimento humano.</p>
            <div className="actions"><Link href="/contato" className="button button--green button--lg">Solicitar atendimento <ArrowUpRight size={18}/></Link><Link href="/espaco" className="text-link">Conheça nosso espaço <ArrowRight size={17}/></Link></div>
            <div className="hero-signature"><span className="hero-signature__rule"/><span>Cada história tem seu tempo.<br/>Cada caminho, sua possibilidade.</span></div>
          </div>
          <div className="home-hero__media">
            <div className="hero-img-frame"><Image src="/images/consultorio-01.webp" alt="Consultório do Espaço Resilience com sofá azul, poltronas e iluminação acolhedora" fill sizes="(max-width: 800px) 90vw, 45vw" priority className="cover" /></div>
            <div className="hero-seal"><Leaf size={25} strokeWidth={1.3}/><span>Um ambiente<br/>para florescer</span></div>
            <div className="hero-media-caption"><span>01 / 05</span><span>Conheça o nosso espaço</span><ArrowDownRight size={18}/></div>
          </div>
        </div>
      </section>
      <section className="intro-strip"><div className="shell intro-strip__inner"><span className="intro-strip__ornament">✳</span><p>ACOLHIMENTO <span>•</span> CIÊNCIA <span>•</span> TRANSFORMAÇÃO</p><span className="intro-strip__ornament">✳</span></div></section>
      <section className="section section--light" id="sobre"><div className="shell about-feature">
        <div className="about-feature__media"><div className="about-feature__image"><Image src="/images/recepcao-01.webp" alt="Recepção acolhedora com poltronas claras e espaço para café" fill sizes="(max-width: 900px) 90vw, 43vw" className="cover"/></div><span className="about-feature__tag">Sinta-se à vontade para chegar.</span></div>
        <div className="about-feature__content"><span className="eyebrow">BEM-VINDO(A) AO RESILIENCE</span><h2>Acreditamos na potência de cada pessoa para <em>se reconstruir.</em></h2><p>O Espaço Resilience Psicologia nasceu do desejo de acompanhar pessoas na construção de recursos internos, contribuindo para que enfrentem as adversidades da vida com mais resiliência.</p><p>Nosso olhar considera cada história em sua singularidade. Oferecemos um ambiente de escuta, respeito e cuidado, com abordagens terapêuticas adequadas a cada necessidade.</p><Link href="/espaco" className="button button--outline">Nossa história e filosofia <ArrowUpRight size={18}/></Link></div>
      </div></section>
      <section className="section services-home"><div className="shell"><div className="section-topline"><SectionTitle eyebrow="COMO PODEMOS AJUDAR" title={<>Cuidado que acompanha <em>cada etapa.</em></>} description="Conheça nossas principais áreas de atuação e encontre o atendimento que faz sentido para sua necessidade."/><Link href="/servicos" className="text-link">Ver todos os serviços <ArrowUpRight size={18}/></Link></div>
        <div className="service-card-grid">
          <Link href="/servicos#individual" className="service-card"><span className="service-card__top"><HeartHandshake size={32} strokeWidth={1.3}/><MoveUpRight size={22}/></span><span className="service-card__num">01 — ATENDIMENTO CLÍNICO</span><h3>Psicoterapia individual</h3><p>Para adultos, crianças e adolescentes, com atendimento presencial ou on-line.</p><span className="service-card__bottom">Saiba mais <ArrowRight size={17}/></span></Link>
          <Link href="/servicos#grupo" className="service-card"><span className="service-card__top"><UsersRound size={32} strokeWidth={1.3}/><MoveUpRight size={22}/></span><span className="service-card__num">02 — EXPERIÊNCIAS COMPARTILHADAS</span><h3>Psicoterapia em grupo</h3><p>Grupos on-line para mulheres, adolescentes e orientação profissional.</p><span className="service-card__bottom">Saiba mais <ArrowRight size={17}/></span></Link>
          <Link href="/empresas" className="service-card"><span className="service-card__top"><BriefcaseBusiness size={32} strokeWidth={1.3}/><MoveUpRight size={22}/></span><span className="service-card__num">03 — SAÚDE NAS ORGANIZAÇÕES</span><h3>Serviços para empresas</h3><p>Saúde mental no trabalho, palestras, workshops e desenvolvimento de equipes.</p><span className="service-card__bottom">Saiba mais <ArrowRight size={17}/></span></Link>
        </div>
      </div></section>
      <section className="quote-section"><div className="shell quote-section__grid"><div className="quote-section__brand"><Image src="/brand/resilience-mark.svg" alt="Símbolo do Espaço Resilience" width={170} height={170}/></div><div><span className="eyebrow">NOSSA ESSÊNCIA</span><blockquote>“Resiliência não é deixar de sentir. É descobrir, com cuidado e no seu tempo, <em>novas possibilidades de seguir.</em>”</blockquote><span className="quote-section__caption">UM ESPAÇO DE CUIDADO E DESENVOLVIMENTO</span></div></div></section>
      <section className="section professional-preview"><div className="shell professional-preview__grid"><div className="professional-preview__content"><span className="eyebrow">QUEM CUIDA DE VOCÊ</span><h2>Experiência, escuta e <em>um olhar singular.</em></h2><p>Conheça a trajetória acadêmica e clínica da equipe e descubra as abordagens utilizadas no acompanhamento psicológico.</p><div className="professional-preview__facts"><span><Check size={18}/> Atuação clínica e acadêmica</span><span><Check size={18}/> Abordagens baseadas na história de cada pessoa</span><span><Check size={18}/> Atendimento em diferentes fases da vida</span></div><Link href="/profissionais" className="button button--green">Conheça nossa equipe <ArrowUpRight size={18}/></Link></div><div className="professional-preview__photo"><Image src="/images/retrato-equipe-01.webp" alt="Retrato profissional de uma integrante da equipe do Espaço Resilience" fill sizes="(max-width: 900px) 90vw, 43vw" className="cover cover--portrait"/><span>PSICOLOGIA FEITA COM PRESENÇA</span></div></div></section>
      <section className="section gallery-teaser"><div className="shell gallery-teaser__top"><SectionTitle eyebrow="CONHEÇA O AMBIENTE" title={<>Um lugar pensado para <em>acolher.</em></>}/><Link href="/espaco#galeria" className="text-link">Explore o espaço <ArrowUpRight size={18}/></Link></div><div className="gallery-teaser__photos"><div><Image src="/images/recepcao-02.webp" fill alt="Área de recepção do Espaço Resilience com parede geométrica" sizes="(max-width: 700px) 80vw, 48vw" className="cover"/></div><div><Image src="/images/consultorio-02.webp" fill alt="Consultório com sofá azul, poltrona cinza e decoração delicada" sizes="(max-width: 700px) 80vw, 48vw" className="cover"/></div></div></section>
      <section className="home-final-cta"><div className="shell home-final-cta__inner"><span className="eyebrow eyebrow--light">SEJA BEM-VINDO(A)</span><h2>Há espaço para uma <em>nova etapa.</em></h2><p>Se você está buscando acompanhamento para si ou para alguém próximo, estamos aqui para acolher seu primeiro contato.</p><Link href="/contato" className="button button--cream button--lg">Vamos conversar <ArrowUpRight size={18}/></Link></div></section>
    </>
  );
}
