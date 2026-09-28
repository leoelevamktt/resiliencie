import Image from 'next/image';
import Link from 'next/link';

export default function Brand({ footer = false }) {
  return (
    <Link className={`brand ${footer ? 'brand--footer' : ''}`} href="/" aria-label="Resilience Psicologia, ir para a página inicial">
      <Image src="/brand/resilience-mark.svg" width={66} height={66} alt="" className="brand__mark" />
      <span className="brand__wordmark">
        <strong>RESILIENCE</strong>
        <small>ESPAÇO DE PSICOLOGIA</small>
      </span>
    </Link>
  );
}
