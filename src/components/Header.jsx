'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './Brand';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'O espaço', href: '/espaco' },
  { name: 'Profissionais', href: '/profissionais' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Para empresas', href: '/empresas' },
  { name: 'Conteúdos', href: '/conteudos' },
  { name: 'Cursos e livros', href: '/cursos-e-livros' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Brand />
        <nav className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label="Navegação principal" id="site-navigation">
          {navigation.map(({ name, href }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href || (href !== '/' && pathname?.startsWith(href + '/')) ? 'active' : ''} aria-current={pathname === href ? 'page' : undefined}>{name}</Link>
          ))}
          <Link href="/contato" onClick={() => setOpen(false)} className="button button--green site-nav__mobile-cta">Solicitar atendimento <ArrowUpRight size={16} /></Link>
        </nav>
        <Link href="/contato" className="button button--green site-header__cta">Solicitar atendimento <ArrowUpRight size={16} /></Link>
        <button className="nav-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
    </header>
  );
}
