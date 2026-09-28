import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
const recipientEnv = { clinico: 'CLINICAL_EMAIL', empresas: 'BUSINESS_EMAIL', cursos: 'COURSES_EMAIL', outros: 'GENERAL_EMAIL' };
const LABEL = { clinico: 'Atendimento clínico', empresas: 'Empresas', cursos: 'Cursos e eventos', outros: 'Outras solicitações' };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function clean(value, max) { return typeof value === 'string' ? value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0,max) : ''; }
function escapeHtml(value) { return value.replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x])); }

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) return NextResponse.json({error:'Formato não permitido.'}, { status:415 });
    const length = Number(request.headers.get('content-length') || 0);
    if (length > 12000) return NextResponse.json({error:'Mensagem muito longa.'}, { status:413 });
    const raw = await request.text();
    if (raw.length > 12000) return NextResponse.json({error:'Mensagem muito longa.'}, { status:413 });
    const body = JSON.parse(raw);
    if (body.companyWebsite) return NextResponse.json({ok:true}); // Honeypot; bots are quietly ignored.
    const type = clean(body.type, 30), name = clean(body.name, 120), email = clean(body.email,254);
    const phone = clean(body.phone,24), subject=clean(body.subject,150), modality=clean(body.modality,40), message=clean(body.message,800);
    if (!Object.hasOwn(recipientEnv,type) || name.length < 2 || !emailRe.test(email) || !subject || body.consent !== 'yes') return NextResponse.json({error:'Confira os campos obrigatórios e tente novamente.'},{status:400});
    const apiKey = process.env.RESEND_API_KEY, from = process.env.CONTACT_FROM_EMAIL, recipient = process.env[recipientEnv[type]];
    if (!apiKey || !from || !recipient) return NextResponse.json({error:'O formulário está sendo configurado. Tente novamente em breve.'},{status:503});
    const rows = { Categoria: LABEL[type], Nome:name, 'E-mail':email, Telefone:phone || 'Não informado', Assunto:subject, 'Modalidade': modality || 'Não informada', Mensagem:message || 'Não informada', 'Consentimento':'Concedido pelo formulário' };
    const html = `<h2>Nova solicitação — ${escapeHtml(LABEL[type])}</h2><table style="border-collapse:collapse;width:100%">${Object.entries(rows).map(([key,val])=>`<tr><td style="padding:10px;border:1px solid #ddd;font-weight:bold">${escapeHtml(key)}</td><td style="padding:10px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(val)}</td></tr>`).join('')}</table><p>Responda diretamente ao endereço indicado no campo de e-mail.</p>`;
    const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers:{ Authorization:`Bearer ${apiKey}`, 'Content-Type':'application/json' }, body: JSON.stringify({ from, to:[recipient], reply_to:email, subject:`[Resilience — ${LABEL[type]}] ${subject}`, html }) });
    if (!response.ok) { console.error('Contact provider failed:',response.status); return NextResponse.json({error:'Não foi possível enviar a mensagem agora. Tente novamente mais tarde.'},{status:502}); }
    return NextResponse.json({ok:true});
  } catch (error) { console.error('Contact form error:',error instanceof SyntaxError?'invalid-json':'request-failed'); return NextResponse.json({error:'Não foi possível processar a solicitação.'},{status:400}); }
}
