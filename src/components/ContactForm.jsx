'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, CircleAlert, LoaderCircle } from 'lucide-react';

const typeOptions = [
  { id: 'clinico', label: 'Atendimento clínico', description: 'Psicoterapia e orientação profissional' },
  { id: 'empresas', label: 'Empresas', description: 'Palestras, workshops e ações corporativas' },
  { id: 'cursos', label: 'Cursos e eventos', description: 'Inscrições, grupos e publicações' },
  { id: 'outros', label: 'Outras solicitações', description: 'Informações gerais e parcerias' },
];
const subjectOptions = {
  clinico: ['Psicoterapia individual', 'Psicoterapia em grupo', 'Orientação profissional', 'Outras informações clínicas'],
  empresas: ['Palestras', 'Workshops', 'Grupos corporativos', 'Orientação profissional e de carreira', 'Promoção da saúde mental e NR-1', 'Outra solicitação empresarial'],
  cursos: ['Cursos', 'Grupos e workshops', 'Eventos', 'Livros e publicações', 'Outras informações'],
  outros: ['Informações gerais', 'Parcerias', 'Imprensa', 'Outro assunto'],
};
export default function ContactForm({ initialType = 'clinico' }) {
  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  useEffect(() => { if (typeOptions.some(o => o.id === initialType)) setType(initialType); }, [initialType]);
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending'); setError('');
    const data = Object.fromEntries(new FormData(form));
    data.type = type;
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Não foi possível enviar sua mensagem.');
      form.reset(); setStatus('success');
    } catch (caught) { setStatus('error'); setError(caught.message || 'Erro inesperado. Tente novamente.'); }
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <fieldset className="contact-form__types">
        <legend className="field-label">Como podemos ajudar?</legend>
        <div className="type-grid">{typeOptions.map(option => <label className={`type-option ${type === option.id ? 'type-option--active' : ''}`} key={option.id}>
          <input type="radio" name="requestType" value={option.id} checked={type === option.id} onChange={() => { setType(option.id); setStatus('idle'); }} />
          <span className="type-option__dot" aria-hidden="true"/><span><strong>{option.label}</strong><small>{option.description}</small></span>
        </label>)}</div>
      </fieldset>
      <div className="contact-form__grid">
        <label className="field"><span className="field-label">Seu nome *</span><input name="name" autoComplete="name" placeholder="Como gostaria de ser chamado(a)?" maxLength="120" required /></label>
        <label className="field"><span className="field-label">E-mail *</span><input name="email" type="email" autoComplete="email" placeholder="seuemail@exemplo.com" maxLength="254" required /></label>
        <label className="field"><span className="field-label">Telefone (opcional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" maxLength="24" /></label>
        <label className="field"><span className="field-label">Assunto *</span><select name="subject" defaultValue="" key={type} required><option value="" disabled>Selecione uma opção</option>{subjectOptions[type].map(s => <option key={s}>{s}</option>)}</select></label>
        {type === 'clinico' && <label className="field field--full"><span className="field-label">Modalidade de preferência</span><select name="modality" defaultValue=""><option value="">Ainda não sei</option><option>Presencial</option><option>On-line</option></select></label>}
        <label className="field field--full"><span className="field-label">Mensagem (opcional)</span><textarea name="message" rows={5} maxLength="800" placeholder={type === 'clinico' ? 'Conte apenas o necessário para retornarmos o contato. Não envie informações clínicas ou dados sensíveis por este formulário.' : 'Deixe sua dúvida ou um breve resumo da solicitação.'} /></label>
      </div>
      <div className="form-honeypot" aria-hidden="true"><label>Não preencha este campo<input type="text" name="companyWebsite" autoComplete="off" tabIndex="-1" /></label></div>
      <label className="consent"><input name="consent" type="checkbox" value="yes" required /><span>Concordo com o uso dos meus dados de contato exclusivamente para responder a esta solicitação, conforme a <a href="/privacidade" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>.</span></label>
      {status === 'success' && <p className="form-feedback form-feedback--success" role="status"><CheckCircle2 size={20}/> Mensagem enviada com sucesso. Nossa equipe poderá retornar pelo contato informado.</p>}
      {status === 'error' && <p className="form-feedback form-feedback--error" role="alert"><CircleAlert size={20}/> {error}</p>}
      <button disabled={status === 'sending'} type="submit" className="button button--green form-submit">{status === 'sending' ? <>Enviando... <LoaderCircle size={17} className="spin" /></> : <>Enviar solicitação <ArrowRight size={18} /></>}</button>
      <p className="form-note">Este canal não é destinado a urgências ou emergências. Em situações de risco imediato, procure o serviço de emergência da sua região.</p>
    </form>
  );
}
