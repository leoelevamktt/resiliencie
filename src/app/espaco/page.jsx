import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Leaf } from 'lucide-react';
import { brandSymbols } from '@/data/site';

export const metadata = { title: 'O espaço', description: 'Conheça a proposta, o significado da logomarca e os ambientes do Espaço Resilience Psicologia.' };
const photos = [
  ['consultorio-01.webp', 'Consultório com sofá azul e poltrona clara'],
  ['consultorio-02.webp', 'Outra perspectiva do consultório com sofá e poltrona cinza'],
  ['recepcao-01.webp', 'Recepção com poltronas e café'],
  ['recepcao-02.webp', 'Parede de textura geométrica e área de café'],
  ['recepcao-03.webp', 'Recepção com banco azul e assentos de espera'],
];
export default function Space() {
  return <>
    <section className="page-hero page-hero--space"><div className="shell page-hero__grid"><div><span className="eyebrow">CONHEÇA O ESPAÇO</span><h1>Um lugar para <em>ser, sentir e transformar.</em></h1><p>Mais do que um ambiente físico, um espaço dedicado ao respeito, à singularidade e ao cuidado em cada etapa da jornada terapêutica.</p><Link href="/contato" className="button button--green">Entre em contato <ArrowUpRight size={18}/></Link></div><div className="page-hero__image"><Image src="/images/recepcao-03.webp" fill sizes="(max-width: 850px) 95vw, 45vw" alt="Recepção do Espaço Resilience Psicologia" className="cover" priority/></div></div></section>
    <section className="section section--light"><div className="shell narrow-center"><span className="eyebrow">NOSSA HISTÓRIA</span><h2>O nome carrega o <em>propósito do nosso trabalho.</em></h2><p>O Espaço Resilience Psicologia é voltado ao tratamento de traumas e à promoção da saúde mental. Nosso nome nasceu do propósito que orienta cada acompanhamento: auxiliar cada cliente, ao longo do processo terapêutico, a desenvolver recursos internos e tornar-se mais resiliente diante das adversidades da vida.</p><p>Acreditamos em um processo construído em conjunto, respeitando o ritmo, a história e as necessidades de cada pessoa.</p></div></section>
    <section className="section symbolism"><div className="shell symbolism__grid"><div className="symbolism__graphic"><span className="eyebrow">NOSSA IDENTIDADE</span><Image src="/brand/resilience-logo.svg" width={410} height={410} alt="Logomarca Resilience: círculo, mãos abertas, árvore, coração, cérebro e borboletas"/><span className="symbolism__note">Cada elemento traduz uma parte da nossa filosofia.</span></div><div><h2>Um símbolo de <em>acolhimento e transformação.</em></h2><p>Mais do que identificar nosso espaço, a logomarca representa o acompanhamento que realizamos ao longo da jornada de cada pessoa.</p><div className="symbol-list">{brandSymbols.map(s => <div key={s.number} className="symbol-list__item"><span>{s.number}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></div>)}</div></div></div></section>
    <section className="section space-gallery" id="galeria"><div className="shell"><div className="section-topline"><div><span className="eyebrow">NOSSOS AMBIENTES</span><h2>Conforto e cuidado <em>em cada detalhe.</em></h2></div><span className="space-gallery__note"><Leaf size={22}/> Um ambiente pensado para acolher</span></div><div className="space-gallery__grid">{photos.map(([src,alt],i) => <div className={`space-gallery__item space-gallery__item--${i+1}`} key={src}><Image src={`/images/${src}`} alt={alt} fill sizes="(max-width: 650px) 95vw, (max-width: 1000px) 45vw, 33vw" className="cover"/></div>)}</div><div className="space-gallery__closing"><p>Quer saber mais sobre o atendimento presencial, a localização ou as condições de acesso? Envie sua solicitação e nossa equipe poderá fornecer as informações atualizadas.</p><Link href="/contato" className="button button--outline"><MapPin size={18}/> Consulte localização e atendimento</Link></div></div></section>
  </>;
}
