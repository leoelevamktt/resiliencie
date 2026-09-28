import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { corporateServices } from '@/data/site';
export const metadata = { title: 'Para empresas', description: 'Palestras, workshops, psicoterapia para grupos corporativos, orientação de carreira e promoção de saúde mental relacionada à NR-1.' };
export default function Corporate() {
  return <>
    <section className="page-hero corporate-hero"><div className="shell page-hero__grid"><div><span className="eyebrow">PARA EMPRESAS</span><h1>Saúde mental também se constrói <em>no trabalho.</em></h1><p>Propostas de cuidado, desenvolvimento e promoção da saúde mental para organizações e equipes, com formatos presenciais ou on-line.</p><Link href="/contato?tipo=empresas" className="button button--green">Solicitar proposta <ArrowUpRight size={18}/></Link></div><div className="page-hero__image corporate-hero__image"><Image src="/images/recepcao-02.webp" fill className="cover" sizes="(max-width: 850px) 95vw, 45vw" alt="Ambiente acolhedor do Espaço Resilience" priority/></div></div></section>
    <section className="section"><div className="shell"><div className="section-topline"><div><span className="eyebrow">SOLUÇÕES CORPORATIVAS</span><h2>O cuidado em <em>diferentes formatos.</em></h2></div><p>As propostas podem ser realizadas presencialmente ou on-line, conforme a demanda e as condições acordadas.</p></div><div className="corporate-grid">{corporateServices.map((s,i)=><article key={s.title} className="corporate-card"><div className="corporate-card__top"><span>{String(i+1).padStart(2,'0')}</span><BriefcaseBusiness size={27} strokeWidth={1.25}/></div><h3>{s.title}</h3><p>{s.description}</p></article>)}</div></div></section>
    <section className="section section--sand corporate-cta"><div className="shell corporate-cta__grid"><div><span className="eyebrow">VAMOS CONVERSAR</span><h2>Uma proposta que faça sentido <em>para sua organização.</em></h2><p>Conte-nos brevemente o que sua empresa procura. Há um formulário específico para demandas corporativas, sem necessidade de encaminhar todas as solicitações pelo WhatsApp.</p></div><Link href="/contato?tipo=empresas" className="button button--green">Falar sobre minha empresa <ArrowUpRight size={18}/></Link></div></section>
  </>;
}
