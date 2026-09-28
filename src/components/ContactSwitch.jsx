'use client';
import { useSearchParams } from 'next/navigation';
import ContactForm from './ContactForm';
export default function ContactSwitch() {
  const params = useSearchParams();
  const possible = params.get('tipo');
  return <ContactForm initialType={['clinico','empresas','cursos','outros'].includes(possible) ? possible : 'clinico'} />;
}
