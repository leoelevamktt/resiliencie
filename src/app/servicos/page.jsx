import Link from 'next/link';
import { ArrowUpRight, HeartHandshake, UsersRound, Compass } from 'lucide-react';
import { clinicalServices } from '@/data/site';
export const metadata = { title: 'Serviços clínicos', description: 'Psicoterapia individual para adultos, crianças e adolescentes, psicoterapia em grupo e orientação profissional, presencial ou on-line.' };
const icons = [HeartHandshake, UsersRound, Compass];
export default function Services() {
  return <>
    <section className="page-hero page-hero--minimal"><div className="shell"><span className="eyebrow">SERVIÇOS CLÍNICOS</span><h1>Cuidado que respeita <em>quem você é.</em></h1><p>Cada modalidade de atendimento tem sua proposta, com espaço para escuta, acompanhamento e desenvolvimento.</p></div></section>
    <section className="section"><div className="shell service-list">{clinicalServices.map((s,i) => { const Icon=icons[i]; return <article key={s.number} id={['individual','grupo','orientacao'][i]} className="service-detail"><div className="service-detail__rail"><span>{s.number} / 03</span><Icon size={39} strokeWidth={1.2}/></div><div className="service-detail__body"><span className="eyebrow">{s.subtitle}</span><h2>{s.title}</h2><p>{s.description}</p><ul>{s.items.map(item=><li key={item}>{item}</li>)}</ul><Link href="/contato?tipo=clinico" className="button button--outline">Solicitar informações <ArrowUpRight size={18}/></Link></div></article>; })}</div></section>
    <section className="section section--sand service-ending"><div className="shell"><span className="eyebrow">NOSSO COMPROMISSO</span><h2>O processo terapêutico começa <em>com uma conversa.</em></h2><p>Tem alguma dúvida sobre qual modalidade faz sentido para você? Entre em contato para conhecer nossas possibilidades de acompanhamento.</p><Link href="/contato" className="button button--green">Entre em contato <ArrowUpRight size={18}/></Link></div></section>
  </>;
}
