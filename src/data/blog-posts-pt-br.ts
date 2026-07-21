// ---------------------------------------------------------------------------
// Posts do blog (Português). Frequência de publicação: quartas e sextas, 2/semana.
// Para adicionar um novo post: adicione uma entrada abaixo com um slug único.
// ---------------------------------------------------------------------------

export interface BlogSectionBr {
  heading: string;
  level: 'h2' | 'h3';
  body: string[];
}

export interface AffiliateOfferBr {
  title: string;
  body: string;
  ctaText: string;
  url: string;
  disclosure: string;
}

export interface BlogPostBr {
  slug: string;
  title: string;
  metaDescription: string;
  publishDate: string;
  category: string;
  image: { src: string; alt: string };
  intro: string;
  sections: BlogSectionBr[];
  relatedCalculators: { label: string; href: string }[];
  affiliateOffer?: AffiliateOfferBr;
}

export const BLOG_POSTS_BR: BlogPostBr[] = [
  {
    slug: 'como-sair-do-cheque-especial-e-rotativo',
    title: 'Como Sair do Cheque Especial e do Rotativo do Cartão: Um Guia Prático',
    metaDescription:
      'Cheque especial e rotativo do cartão estão entre as dívidas mais caras do Brasil. Veja um passo a passo prático e realista para sair delas.',
    publishDate: '2026-07-22',
    category: 'Dívidas',
    image: { src: '/blog/como-sair-do-cheque-especial-e-rotativo.svg', alt: 'Como sair do cheque especial e do rotativo do cartão — guia prático SimplifyCalculator Brasil' },
    intro:
      'O cheque especial e o rotativo do cartão de crédito têm uma característica em comum: são desenhados para uso emergencial e de curtíssimo prazo, mas cobram juros como se você fosse ficar neles por muito tempo. O resultado é que quem entra nessas modalidades por um aperto pontual frequentemente demora meses ou anos para sair — não porque gastou muito, mas porque os juros corroem qualquer tentativa de pagamento parcial.',
    sections: [
      {
        heading: 'Por que essas duas modalidades são tão perigosas',
        level: 'h2',
        body: [
          'Tanto o cheque especial quanto o rotativo do cartão cobram juros que costumam superar 10-15% ao mês — o que, anualizado, facilmente ultrapassa 200-400% ao ano. Diferente de um financiamento com taxa fixa, esses juros incidem sobre o saldo devedor todo mês, então quanto mais tempo você permanece neles, maior a proporção do seu pagamento que vira juros em vez de reduzir a dívida de fato.',
          'Use nossa Calculadora de Cartão de Crédito (Rotativo) para ver exatamente quanto tempo levaria para sair do rotativo pagando um valor fixo mensal — o resultado costuma surpreender quem nunca fez essa conta.',
        ],
      },
      {
        heading: 'Passo 1: Pare de gerar juros novos imediatamente',
        level: 'h2',
        body: [
          'Antes de qualquer estratégia de pagamento, o primeiro passo é parar de usar o cartão ou o cheque especial para novas compras. Continuar gastando enquanto tenta quitar a dívida é como tentar esvaziar uma banheira com o ralo aberto e a torneira ligada ao mesmo tempo — o esforço de pagamento nunca alcança o ritmo de novos gastos.',
        ],
      },
      {
        heading: 'Passo 2: Busque o parcelamento da fatura antes de aceitar ficar no rotativo',
        level: 'h2',
        body: [
          'Por regulação do Banco Central, os bancos são obrigados a oferecer parcelamento da fatura do cartão com juros bem menores que o rotativo, geralmente logo após o primeiro ciclo. Ligue para o banco e peça essa opção explicitamente — muita gente permanece anos no rotativo sem saber que essa alternativa mais barata sempre esteve disponível.',
        ],
      },
      {
        heading: 'Passo 3: Considere um empréstimo pessoal com taxa menor para quitar a dívida cara',
        level: 'h2',
        body: [
          'Trocar uma dívida com juros de 15% ao mês por um empréstimo pessoal a 2-4% ao mês reduz drasticamente o custo total, mesmo que o valor da parcela pareça similar à primeira vista. Simule as duas opções na nossa Calculadora de Financiamento antes de decidir, comparando o total de juros pagos em cada cenário.',
        ],
      },
      {
        heading: 'Passo 4: Negocie diretamente com o banco',
        level: 'h2',
        body: [
          'Muitos bancos têm programas internos de renegociação com desconto para quitação à vista ou parcelada, especialmente se você já está inadimplente. Programas como o Desenrola Brasil também surgem periodicamente com condições facilitadas — vale sempre perguntar antes de aceitar as condições originais da dívida.',
        ],
      },
      {
        heading: 'Passo 5: Redirecione qualquer valor extra para a dívida mais cara primeiro',
        level: 'h2',
        body: [
          '13º salário, restituição do Imposto de Renda, bônus — qualquer entrada extra de dinheiro deve ir primeiro para a dívida com a maior taxa de juros (geralmente o rotativo do cartão), antes de qualquer outro gasto ou investimento. Use nossa Calculadora de Quitação de Dívidas para simular quanto tempo e juros você economiza ao aplicar um valor extra de uma só vez.',
        ],
      },
      {
        heading: 'O que fazer depois de sair da dívida',
        level: 'h2',
        body: [
          'Depois de quitar, monte uma reserva de emergência (mesmo que pequena no início) para não precisar recorrer ao cheque especial ou ao rotativo na próxima imprevisibilidade financeira. Essa reserva é a principal defesa contra reentrar no mesmo ciclo de juros altos.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Cartão de Crédito (Rotativo)', href: '/pt-br/calculadoras/calculadora-de-cartao-de-credito' },
      { label: 'Calculadora de Quitação de Dívidas', href: '/pt-br/calculadoras/calculadora-de-quitacao-de-dividas' },
      { label: 'Calculadora de Financiamento', href: '/pt-br/calculadoras/calculadora-de-financiamento' },
    ],
  },
  {
    slug: 'reserva-de-emergencia-quanto-guardar',
    title: 'Reserva de Emergência: Quanto Guardar e Onde Investir em 2026',
    metaDescription:
      'Descubra quanto guardar na sua reserva de emergência, onde investir esse dinheiro no Brasil e como calcular o valor ideal para o seu caso.',
    publishDate: '2026-07-24',
    category: 'Investimentos',
    image: { src: '/blog/reserva-de-emergencia-quanto-guardar.svg', alt: 'Reserva de emergência: quanto guardar e onde investir em 2026 — guia SimplifyCalculator Brasil' },
    intro:
      'Reserva de emergência é o dinheiro que separa um imprevisto de uma crise financeira. Perder o emprego, um problema de saúde ou um conserto inesperado do carro são situações que todo mundo enfrenta em algum momento — a diferença entre atravessar isso com tranquilidade ou entrar no cheque especial costuma ser justamente ter (ou não ter) essa reserva.',
    sections: [
      {
        heading: 'Quanto guardar: a regra dos 3 a 6 meses',
        level: 'h2',
        body: [
          'A referência mais usada é guardar de 3 a 6 meses das suas despesas essenciais — moradia, contas, alimentação, transporte e pagamentos mínimos de dívidas. Note que a base do cálculo é a despesa, não a renda: gastos discricionários como lazer e assinaturas normalmente seriam cortados numa emergência real, então não precisam entrar nessa conta.',
          'Quem tem renda mais instável (autônomos, PJs, comissionados) ou é responsável único pela renda da casa deve mirar o topo da faixa, 6 meses, ou até mais. Quem tem renda dupla e estável em empregos CLT consolidados pode se sentir seguro com 3-4 meses.',
        ],
      },
      {
        heading: 'Como calcular o valor exato para o seu caso',
        level: 'h2',
        body: [
          'Some suas despesas essenciais mensais e multiplique pelo número de meses de cobertura que faz sentido para sua situação. Se você já tem algum valor guardado, subtraia esse valor do total para saber quanto ainda falta, e divida pelo número de meses que você tem disponível para chegar lá — isso te dá o aporte mensal necessário.',
        ],
      },
      {
        heading: 'Onde guardar a reserva de emergência',
        level: 'h2',
        body: [],
      },
      {
        heading: 'Liquidez é mais importante que rendimento',
        level: 'h3',
        body: [
          'A característica mais importante da reserva de emergência não é o rendimento, é a liquidez — poder sacar o dinheiro em minutos ou no máximo 1-2 dias úteis, sem perder valor. Isso descarta investimentos com carência, prazos de resgate longos ou volatilidade de curto prazo (como ações e fundos imobiliários), mesmo que rendam mais no longo prazo.',
        ],
      },
      {
        heading: 'Tesouro Selic e CDBs de liquidez diária são as opções mais indicadas',
        level: 'h3',
        body: [
          'O Tesouro Selic e CDBs de liquidez diária com boa rentabilidade (perto de 100% do CDI) costumam ser as escolhas mais recomendadas: têm baixíssimo risco, resgate rápido e rendem mais que a poupança na grande maioria dos cenários. A poupança ainda é aceitável para valores menores ou por simplicidade, mas raramente é a opção mais eficiente.',
        ],
      },
      {
        heading: 'Compare poupança e outras opções antes de decidir',
        level: 'h3',
        body: [
          'Use nossa Calculadora de Poupança para comparar o rendimento projetado da poupança com uma opção a 100% do CDI no mesmo período — a diferença acumulada ao longo de alguns anos costuma ser significativa, mesmo em um valor reservado apenas para emergências.',
        ],
      },
      {
        heading: 'Erros comuns ao montar a reserva',
        level: 'h2',
        body: [
          'Dois erros aparecem com frequência: misturar a reserva com a conta do dia a dia (o que facilita gastar o dinheiro sem perceber) e escolher uma aplicação com carência ou volatilidade demais para o propósito. Mantenha a reserva separada, em uma aplicação de liquidez diária, e trate esse dinheiro como intocável fora de emergências reais.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Poupança', href: '/pt-br/calculadoras/calculadora-de-poupanca' },
      { label: 'Calculadora de Orçamento Mensal', href: '/pt-br/calculadoras/calculadora-de-orcamento-mensal' },
      { label: 'Calculadora de Aposentadoria', href: '/pt-br/calculadoras/calculadora-de-aposentadoria' },
    ],
  },
  {
    slug: 'como-receber-em-dolar-sendo-pj-freelancer',
    title: 'Como Receber em Dólar Sendo PJ ou Freelancer no Brasil',
    metaDescription:
      'Guia prático para brasileiros PJ e freelancers que recebem de clientes no exterior: taxas de câmbio, impostos, documentação e como não perder dinheiro na conversão.',
    publishDate: '2026-07-29',
    category: 'Renda Internacional',
    image: { src: '/blog/como-receber-em-dolar-sendo-pj-freelancer.svg', alt: 'Como receber em dólar sendo PJ ou freelancer no Brasil — guia SimplifyCalculator Brasil' },
    intro:
      'Cada vez mais brasileiros prestam serviço para clientes nos Estados Unidos e na Europa — desenvolvimento, design, marketing, consultoria — e recebem o pagamento em dólar ou euro. O problema é que a forma como você recebe esse dinheiro pode significar a diferença entre ficar com 96% do valor combinado ou perder 5-8% dele só na conversão de moeda, antes mesmo de pensar em impostos.',
    sections: [
      {
        heading: 'O que muda ao receber em dólar como PJ brasileiro',
        level: 'h2',
        body: [
          'Quando você fatura em dólar como Pessoa Jurídica, o valor recebido em conta no Brasil já chega convertido para reais, geralmente por uma instituição financeira autorizada a operar câmbio. A taxa de câmbio aplicada nessa conversão — e não a "taxa comercial" que você vê no Google — é o que realmente define quanto reais caem na sua conta.',
          'Além da conversão em si, entra em jogo o IOF sobre operações de câmbio (atualmente 0,38% para a maioria das transferências recebidas do exterior relacionadas a exportação de serviços) e a emissão de nota fiscal de serviço para o cliente estrangeiro, que costuma ser exigida mesmo em prestação de serviço para o exterior.',
        ],
      },
      {
        heading: 'Quanto você perde com uma taxa de câmbio ruim: um exemplo prático',
        level: 'h2',
        body: [
          'Imagine que você fecha um contrato de US$ 3.000 por mês com um cliente nos Estados Unidos. Com o dólar cotado a R$ 5,40 na taxa comercial (a referência do Banco Central), o valor bruto seria R$ 16.200.',
          'Se você recebe por uma conta bancária tradicional que aplica um spread cambial de 4-6% sobre a cotação comercial (comum em bancos de varejo para pessoa física e PJ), você recebe efetivamente algo entre R$ 15.230 e R$ 15.550 — uma perda de R$ 650 a R$ 970 por mês só na conversão, antes de qualquer imposto.',
          'Já em plataformas especializadas em câmbio para PJ e freelancers, o spread costuma ficar entre 0,5% e 2%, o que no mesmo exemplo representaria perder apenas R$ 81 a R$ 324 — uma diferença de até R$ 900 por mês, ou quase R$ 11.000 por ano, apenas trocando de instituição para receber o mesmo contrato.',
        ],
      },
      {
        heading: 'Opções para receber pagamentos internacionais',
        level: 'h2',
        body: [],
      },
      {
        heading: 'Conta bancária tradicional com câmbio',
        level: 'h3',
        body: [
          'É a opção mais simples de configurar (você já tem a conta), mas geralmente a mais cara: bancos de varejo costumam embutir spreads cambiais altos, e o processo de contrato de câmbio pode levar dias úteis para liquidar, atrasando o acesso ao dinheiro.',
        ],
      },
      {
        heading: 'Fintechs especializadas em câmbio e recebimento internacional',
        level: 'h3',
        body: [
          'Plataformas focadas em freelancers e PJs que faturam para o exterior — como a TechFX — tendem a operar com spreads bem menores que os bancos tradicionais, além de oferecer conversão e liquidação em conta em prazo mais curto. Vale sempre comparar a cotação do dia oferecida por cada plataforma antes de fechar a conversão, já que o spread pode variar entre operações.',
        ],
      },
    ],
    affiliateOffer: {
      title: 'Recebendo pagamentos do exterior? Compare sua taxa de câmbio atual',
      body: 'A TechFX é uma plataforma voltada para brasileiros que recebem em dólar — freelancers, PJs e empresas exportadoras de serviço. Antes de fechar sua próxima conversão pelo banco tradicional, vale comparar a cotação oferecida.',
      ctaText: 'Conhecer a TechFX',
      url: 'https://app.techfx.com.br/referral/rer1ogkj9myq',
      disclosure: 'Este é um link de afiliado. Podemos receber uma comissão se você se cadastrar através dele, sem custo adicional para você.',
    },
    relatedCalculators: [
      { label: 'Calculadora CLT x PJ', href: '/pt-br/calculadoras/calculadora-clt-vs-pj' },
      { label: 'Calculadora de Orçamento Mensal', href: '/pt-br/calculadoras/calculadora-de-orcamento-mensal' },
    ],
  },
  {
    slug: 'techfx-vs-wise-vs-payoneer-comparativo',
    title: 'TechFX vs. Wise vs. Payoneer: Comparativo de Taxas para Receber em Dólar',
    metaDescription:
      'Comparamos TechFX, Wise e Payoneer para brasileiros que recebem pagamentos em dólar: taxas, prazo de liquidação e qual escolher para cada perfil.',
    publishDate: '2026-07-31',
    category: 'Renda Internacional',
    image: { src: '/blog/techfx-vs-wise-vs-payoneer-comparativo.svg', alt: 'TechFX vs Wise vs Payoneer — comparativo de taxas para receber em dólar no Brasil' },
    intro:
      'Se você recebe pagamentos recorrentes em dólar, a escolha da plataforma de câmbio pode valer milhares de reais por ano — a diferença não está só na taxa cobrada explicitamente, mas principalmente no spread embutido na cotação de conversão, que costuma ser bem menos transparente.',
    sections: [
      {
        heading: 'Como cada plataforma cobra pela conversão',
        level: 'h2',
        body: [],
      },
      {
        heading: 'Wise',
        level: 'h3',
        body: [
          'A Wise é conhecida por divulgar abertamente sua taxa, que costuma ficar entre 0,4% e 2% dependendo do valor e da rota de conversão, usando a cotação "mid-market" (a mesma que aparece no Google) como referência antes de aplicar a taxa. É uma das opções mais transparentes do mercado.',
        ],
      },
      {
        heading: 'Payoneer',
        level: 'h3',
        body: [
          'A Payoneer costuma aplicar uma taxa de conversão de câmbio em torno de 2% sobre a cotação de mercado, além de uma taxa fixa de saque em alguns métodos de retirada. É bastante usada por quem já recebe pagamentos de marketplaces internacionais (Amazon, Upwork, Fiverr) que já têm integração nativa com a plataforma.',
        ],
      },
      {
        heading: 'TechFX',
        level: 'h3',
        body: [
          'A TechFX foca especificamente no público brasileiro que recebe em dólar, com cotação exibida antes da conversão para você comparar com a taxa comercial do dia. Como as taxas de qualquer plataforma de câmbio podem mudar, o mais confiável é sempre olhar a cotação exata mostrada no momento da transação antes de confirmar.',
        ],
      },
      {
        heading: 'Exemplo prático: recebendo US$ 2.000 por mês',
        level: 'h2',
        body: [
          'Com o dólar comercial a R$ 5,40, US$ 2.000 equivalem a R$ 10.800 na cotação de referência. Um spread de 0,5% resulta em R$ 10.746 líquidos; um spread de 2% resulta em R$ 10.584; e um spread de 5% (mais próximo do praticado por bancos tradicionais) resulta em R$ 10.260 — uma diferença de quase R$ 500 por mês entre o cenário mais barato e o mais caro, só de spread cambial.',
          'Ao longo de um ano recebendo o mesmo valor mensal, essa diferença pode ultrapassar R$ 5.000 — o equivalente a mais de dois meses extras de faturamento, apenas pela escolha da plataforma de conversão.',
        ],
      },
      {
        heading: 'Prazo de liquidação: quando o dinheiro cai na conta',
        level: 'h2',
        body: [
          'Bancos tradicionais costumam levar de 1 a 3 dias úteis para liquidar um contrato de câmbio. Fintechs especializadas tendem a ser mais rápidas, com liquidação no mesmo dia ou em até 24 horas na maioria dos casos — o que faz diferença real para quem depende desse fluxo de caixa mensalmente.',
        ],
      },
      {
        heading: 'Qual escolher dependendo do seu perfil',
        level: 'h2',
        body: [
          'Quem já recebe por marketplaces como Upwork ou Amazon pode se beneficiar da integração nativa da Payoneer. Quem valoriza transparência total na taxa cobrada tende a preferir a Wise. Já quem quer uma opção pensada especificamente para o fluxo de PJ e freelancer brasileiro recebendo diretamente de clientes internacionais pode encontrar na TechFX uma alternativa vale a pena comparar antes de decidir.',
        ],
      },
    ],
    affiliateOffer: {
      title: 'Compare a cotação da TechFX antes da sua próxima conversão',
      body: 'Antes de aceitar a taxa oferecida pelo seu banco, veja a cotação que a TechFX apresenta para o mesmo valor — a comparação leva menos de 5 minutos.',
      ctaText: 'Ver cotação na TechFX',
      url: 'https://app.techfx.com.br/referral/rer1ogkj9myq',
      disclosure: 'Este é um link de afiliado. Podemos receber uma comissão se você se cadastrar através dele, sem custo adicional para você.',
    },
    relatedCalculators: [
      { label: 'Calculadora de Orçamento Mensal', href: '/pt-br/calculadoras/calculadora-de-orcamento-mensal' },
      { label: 'Calculadora CLT x PJ', href: '/pt-br/calculadoras/calculadora-clt-vs-pj' },
    ],
  },
  {
    slug: 'guia-contas-internacionais-para-brasileiros',
    title: 'Guia Completo de Contas Internacionais para Brasileiros Receberem em USD',
    metaDescription:
      'Entenda os tipos de conta internacional disponíveis para brasileiros receberem em dólar, o passo a passo para abrir uma e os erros mais comuns a evitar.',
    publishDate: '2026-08-05',
    category: 'Renda Internacional',
    image: { src: '/blog/guia-contas-internacionais-para-brasileiros.svg', alt: 'Guia completo de contas internacionais para brasileiros receberem em dólar' },
    intro:
      'Ter uma forma eficiente de receber pagamentos em dólar deixou de ser exclusividade de grandes empresas — hoje, freelancers, consultores e pequenos negócios digitais no Brasil têm acesso a diversas opções de conta internacional, cada uma com um custo e um caso de uso diferente.',
    sections: [
      {
        heading: 'Por que ter uma conta internacional faz diferença',
        level: 'h2',
        body: [
          'Sem uma conta pensada para recebimento internacional, o caminho mais comum é receber direto na conta corrente do banco tradicional, que costuma aplicar o spread cambial mais alto do mercado. Uma conta internacional bem escolhida reduz esse spread, acelera o prazo de liquidação e, em alguns casos, permite manter parte do saldo em dólar antes de converter para reais.',
        ],
      },
      {
        heading: 'Tipos de conta disponíveis para brasileiros',
        level: 'h2',
        body: [],
      },
      {
        heading: 'Conta multimoeda em fintech',
        level: 'h3',
        body: [
          'Permite receber, manter saldo e converter em várias moedas dentro do mesmo aplicativo, com spreads geralmente entre 0,5% e 2%. É a opção mais indicada para quem recebe de clientes diretos no exterior e quer controle sobre quando converter para real.',
        ],
      },
      {
        heading: 'Conta bancária americana via fintech (conta "US")',
        level: 'h3',
        body: [
          'Algumas plataformas oferecem um número de conta bancária americana (routing e account number) para que o cliente no exterior pague como se estivesse fazendo uma transferência doméstica nos EUA, evitando tarifas internacionais de wire transfer do lado do pagador. A conversão para real acontece depois, dentro da mesma plataforma.',
        ],
      },
      {
        heading: 'Plataformas especializadas em câmbio para PJ brasileiro',
        level: 'h3',
        body: [
          'Serviços como a TechFX ficam no meio do caminho: focam especificamente em trazer dólares recebidos do exterior para dentro do sistema bancário brasileiro, com cotação visível antes da conversão e prazo de liquidação mais rápido que bancos tradicionais.',
        ],
      },
      {
        heading: 'Passo a passo para receber seu primeiro pagamento internacional',
        level: 'h2',
        body: [
          '1) Abra conta na plataforma escolhida e complete a verificação de identidade (KYC), que costuma levar de minutos a 1-2 dias úteis. 2) Compartilhe os dados de recebimento (conta multimoeda, conta US ou dados bancários) com seu cliente no exterior. 3) Após o pagamento cair na plataforma, confira a cotação oferecida antes de confirmar a conversão para reais. 4) Emita a nota fiscal de serviço correspondente e guarde o comprovante da operação de câmbio — ambos são importantes para a contabilidade da sua PJ.',
        ],
      },
      {
        heading: 'Erros comuns ao configurar o recebimento internacional',
        level: 'h2',
        body: [
          'Os erros mais frequentes são: converter automaticamente sem comparar a cotação do dia, ignorar a existência do IOF sobre câmbio ao precificar o serviço para o cliente, e não emitir nota fiscal por acreditar que "serviço para o exterior não precisa" — o que pode gerar problemas fiscais mais à frente. Reveja sempre a cotação e a documentação a cada operação, mesmo com um cliente recorrente.',
        ],
      },
    ],
    affiliateOffer: {
      title: 'Pronto para receber seu próximo pagamento em dólar de forma mais eficiente?',
      body: 'A TechFX foi pensada para brasileiros que recebem em dólar de clientes no exterior, com cotação visível antes de cada conversão.',
      ctaText: 'Criar conta na TechFX',
      url: 'https://app.techfx.com.br/referral/rer1ogkj9myq',
      disclosure: 'Este é um link de afiliado. Podemos receber uma comissão se você se cadastrar através dele, sem custo adicional para você.',
    },
    relatedCalculators: [
      { label: 'Calculadora CLT x PJ', href: '/pt-br/calculadoras/calculadora-clt-vs-pj' },
      { label: 'Calculadora de Juros Compostos', href: '/pt-br/calculadoras/calculadora-de-juros-compostos' },
    ],
  },
];

export function getBlogPostBrBySlug(slug: string): BlogPostBr | undefined {
  return BLOG_POSTS_BR.find((p) => p.slug === slug);
}
