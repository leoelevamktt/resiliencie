# Espaço Resilience Psicologia

Site institucional responsivo do Espaço Resilience Psicologia, construído com **Next.js 15**, React e CSS próprio. A identidade utiliza tons de verde, marrom e bege, mantendo os símbolos da logomarca original em uma versão adaptada à paleta informada.

## Páginas

- Início e destaques de atendimento
- O espaço: história, simbologia da marca e galeria com as fotos recebidas
- Profissionais e trajetória completa da psicóloga Andréia Mansk Boone Salles
- Serviços clínicos e serviços para empresas
- Artigos e conteúdos: produção científica + conteúdos para o público
- Cursos e livros
- Contato: rotas separadas para clínica, empresas, cursos e outras solicitações
- Política de privacidade preliminar (necessita dados institucionais definitivos)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Conteúdo editável

Edite `src/data/editorial.js` para adicionar artigos e cursos. Não são exibidos artigos, eventos nem preços fictícios. Em `src/data/site.js`, atualize informações institucionais quando confirmadas.

Exemplo de publicação científica:

```js
{
  slug: 'artigo-exemplo',
  title: 'Título publicado e conferido',
  date: '2026',
  summary: 'Resumo revisado pela equipe clínica.',
  reference: 'Referência bibliográfica completa.',
  url: 'https://doi.org/...'
}
```

Cursos usam `{slug, category, title, description, date, price, spots, url, buttonLabel}`. Conteúdos para o público usam `{slug, title, date, summary, url}`.

## Formulários: configurar antes de publicar

A rota `/api/contact` usa **Resend** (envio via servidor, sem chave pública). Configure as variáveis do arquivo `.env.example` no projeto da Vercel. Os quatro destinatários são separados: `CLINICAL_EMAIL`, `BUSINESS_EMAIL`, `COURSES_EMAIL` e `GENERAL_EMAIL`. É preciso verificar o domínio remetente junto ao provedor de e-mail. Se a configuração não existir, o formulário avisa que está sendo configurado; **não apresenta envio fictício**. Não habilite publicação sem validar fluxo de contato e aviso de privacidade.

## Validações pendentes antes de colocar em produção

1. Confirmar **qual dos dois retratos** corresponde a Andréia. A foto de `retrato-equipe-01.webp` foi colocada na apresentação apenas provisoriamente; o segundo retrato não recebeu nome nem biografia, porque não foram fornecidos.
2. Confirmar endereço, acessibilidade, e-mail de contato, telefone e perfis sociais. Não inventamos essas informações.
3. Confirmar controlador de dados e canal de privacidade para a versão definitiva da Política de Privacidade.
4. Confirmar textos, públicos e disponibilidade atual dos grupos clínicos com as profissionais.
5. Configurar as variáveis de e-mail no projeto da Vercel e testar o envio real de cada tipo de formulário.
6. Definir o domínio público em `NEXT_PUBLIC_SITE_URL`, garantindo URL canônica e sitemap.

## Fotos e logomarca

Fotos reais fornecidas para o projeto, otimizadas em WebP. Logomarca em SVG adaptada a verde e marrom a partir da arte vetorial original, preservada em `branding/vetor-resilience-original.pdf`. Não foram usadas imagens geradas por IA.
