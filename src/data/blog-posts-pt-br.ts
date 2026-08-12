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
  {
    slug: 'sac-ou-price-qual-tabela-financiamento-imobiliario-escolher',
    title: 'SAC ou Price: Qual Tabela Economiza Mais no Financiamento Imobiliário em 2026',
    metaDescription:
      'SAC ou Price: entenda a diferença real entre as duas tabelas de amortização, veja um exemplo numérico completo e descubra qual economiza mais no seu financiamento.',
    publishDate: '2026-07-24',
    category: 'Imóveis',
    image: {
      src: '/blog/sac-ou-price-qual-tabela-financiamento-imobiliario-escolher.svg',
      alt: 'SAC ou Price: comparação de tabelas de amortização para financiamento imobiliário no Brasil em 2026',
    },
    intro:
      'Na hora de assinar um financiamento imobiliário no Brasil, o banco quase sempre pergunta: SAC ou Price? A maioria das pessoas responde sem entender de fato a diferença, guiada apenas pelo valor da primeira parcela — que costuma ser menor na Price. Só que essa escolha, feita sem simular os números, pode significar pagar dezenas de milhares de reais a mais de juros ao longo de um financiamento de 20 ou 30 anos.',
    sections: [
      {
        heading: 'A diferença estrutural entre SAC e Price',
        level: 'h2',
        body: [
          'No Sistema de Amortização Constante (SAC), o valor amortizado do saldo devedor é sempre o mesmo em todas as parcelas — só os juros variam, caindo mês a mês porque incidem sobre um saldo devedor cada vez menor. Como consequência, a parcela do SAC começa mais alta e vai diminuindo ao longo do financiamento, mês após mês, até o final do contrato.',
          'Na Tabela Price (Sistema de Amortização Francês), a parcela é fixa do primeiro ao último mês. Para manter esse valor constante enquanto o saldo devedor cai, a composição da parcela muda internamente: no início, a maior parte é juros e uma fração pequena é amortização; perto do fim, a relação se inverte. É esse mecanismo que faz a Price parecer mais barata no começo — a parcela inicial é menor que a do SAC — mas o total de juros pagos ao longo do contrato tende a ser maior.',
        ],
      },
      {
        heading: 'Simulação prática: R$ 400.000 em 30 anos',
        level: 'h2',
        body: [
          'Considere um financiamento de R$ 400.000 a uma taxa de 10% ao ano (aproximadamente 0,8% ao mês), prazo de 360 meses (30 anos) — parâmetros realistas para o financiamento imobiliário SAC/Price no Brasil em 2026, considerando a Selic e o custo de crédito habitacional do período.',
          'No SAC, a amortização mensal fixa é de R$ 400.000 ÷ 360 = R$ 1.111,11. A primeira parcela soma essa amortização aos juros do mês (0,8% sobre R$ 400.000, ou R$ 3.200), totalizando cerca de R$ 4.311. Como o saldo devedor cai a cada mês, a parcela também cai — chegando perto de R$ 1.120 na última parcela, quando os juros já são quase zero.',
          'Na Price, a fórmula de prestação constante resulta em uma parcela fixa de aproximadamente R$ 3.393 durante os 360 meses inteiros. Ela é bem menor que a primeira parcela do SAC (R$ 4.311), o que explica por que tanta gente escolhe a Price "porque cabe melhor no orçamento hoje" — mas essa mesma parcela de R$ 3.393 continua sendo cobrada mesmo lá pelo mês 300, quando no SAC ela já teria caído para bem menos de R$ 2.000.',
          'Somando tudo: o total pago em juros no SAC gira em torno de R$ 577.600 ao longo dos 30 anos. Na Price, pela mesma dívida e taxa, o total de juros chega a aproximadamente R$ 821.350 — uma diferença de cerca de R$ 243.750 apenas na forma como a dívida é amortizada, sem nenhuma mudança na taxa contratada.',
        ],
      },
      {
        heading: 'Por que a Price custa tanto mais no longo prazo',
        level: 'h2',
        body: [
          'A explicação está em quando a dívida é reduzida. No SAC, o saldo devedor cai de forma linear e mais rápida nos primeiros anos, então os juros (que incidem sobre esse saldo) somam menos ao longo do tempo. Na Price, como a amortização inicial é proporcionalmente menor, o saldo devedor permanece mais alto por mais tempo — e juros sobre um saldo maior, por mais tempo, resultam em um total de juros bem superior, mesmo com parcelas nominalmente menores no início.',
          'Esse efeito fica mais forte quanto maior o prazo do financiamento. Em contratos curtos (10-15 anos), a diferença entre SAC e Price é proporcionalmente menor; em financiamentos imobiliários de 25-35 anos, comuns no Brasil, o efeito composto ao longo de tantos meses faz a diferença total crescer de forma expressiva.',
        ],
      },
      {
        heading: 'Quando a Price ainda pode fazer sentido',
        level: 'h3',
        body: [
          'A Price não é sempre a escolha errada. Para quem tem orçamento apertado hoje mas espera renda crescente (início de carreira, por exemplo) ou simplesmente não conseguiria arcar com a parcela inicial mais alta do SAC, a Price viabiliza a compra do imóvel que talvez não fosse possível de outra forma. Também vale considerar se o valor "economizado" na parcela inicial da Price seria de fato investido a uma taxa competitiva — caso contrário, a vantagem de fluxo de caixa no início tende a não compensar o custo total maior no fim.',
        ],
      },
      {
        heading: 'Quando o SAC é a escolha mais racional',
        level: 'h3',
        body: [
          'Para quem consegue arcar com a parcela inicial mais alta sem comprometer o orçamento essencial, o SAC praticamente sempre resulta em menos juros pagos no total — além de reduzir o saldo devedor mais rapidamente, o que é relevante em caso de quitação antecipada ou portabilidade de crédito para outro banco no meio do contrato. Quem pretende quitar o financiamento antes do prazo final (algo comum no Brasil) se beneficia ainda mais do SAC, porque o saldo devedor já estará proporcionalmente menor em qualquer ponto do contrato.',
        ],
      },
      {
        heading: 'Como simular o seu próprio caso antes de assinar',
        level: 'h2',
        body: [
          'Os números acima usam uma taxa e um valor de exemplo — o resultado real do seu financiamento depende do valor do imóvel, da taxa negociada com o banco (que varia por instituição, relacionamento bancário e uso do FGTS) e do prazo escolhido. Use a Calculadora de Financiamento Imobiliário (SAC x Price) para simular lado a lado as duas tabelas com os números exatos do seu contrato antes de assinar, e a Calculadora de Tabela Price para ver o detalhamento completo de amortização e juros parcela a parcela caso opte pela Price.',
          'Vale simular também o cenário de amortização extra: tanto no SAC quanto na Price, usar recursos como o saque do FGTS ou o 13º salário para amortizar o saldo devedor antecipadamente reduz o total de juros pagos — mas o impacto proporcional costuma ser ainda mais expressivo na Price, justamente por ela carregar um saldo devedor mais alto por mais tempo.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Financiamento Imobiliário (SAC x Price)', href: '/pt-br/calculadoras/calculadora-de-financiamento-imobiliario' },
      { label: 'Calculadora de Tabela Price', href: '/pt-br/calculadoras/tabela-price-calculadora' },
      { label: 'Calculadora de Juros Compostos', href: '/pt-br/calculadoras/calculadora-de-juros-compostos' },
    ],
  },
  {
    slug: 'como-calcular-salario-liquido-clt-inss-irrf',
    title: 'Como Calcular seu Salário Líquido CLT: A Tabela do INSS e do IRRF Explicada',
    metaDescription:
      'Entenda como o INSS e o IRRF são descontados do salário CLT por faixas progressivas, com exemplo numérico completo do salário bruto ao líquido.',
    publishDate: '2026-08-10',
    category: 'Renda',
    image: {
      src: '/blog/como-calcular-salario-liquido-clt-inss-irrf.svg',
      alt: 'Como calcular o salário líquido CLT a partir da tabela do INSS e do IRRF — guia SimplifyCalculator Brasil',
    },
    intro:
      'Quase todo trabalhador CLT já se perguntou por que o salário que cai na conta é bem menor que o valor combinado na carteira. A resposta está em dois descontos obrigatórios — INSS e Imposto de Renda Retido na Fonte (IRRF) — que não são um percentual único aplicado sobre o salário todo, mas sim uma soma de faixas progressivas. Entender essa mecânica evita duas confusões comuns: achar que está pagando mais imposto do que realmente paga, ou ser pego de surpresa quando um aumento de salário empurra parte da renda para uma faixa de alíquota mais alta.',
    sections: [
      {
        heading: 'O INSS é descontado por faixas, não sobre o salário inteiro',
        level: 'h2',
        body: [
          'O erro mais comum é multiplicar o salário bruto inteiro pela alíquota da faixa em que ele se enquadra. Não é assim que funciona. O desconto do INSS é progressivo: cada faixa de salário paga sua própria alíquota, e o valor final é a soma dessas parcelas — de forma parecida com o Imposto de Renda de pessoa física na declaração anual, só que aplicado mês a mês diretamente na folha de pagamento.',
          'Isso significa que, mesmo quando alguém está na faixa de 14%, apenas a fatia do salário que ultrapassa o limite da faixa anterior é tributada a 14% — o restante continua sendo taxado nas alíquotas menores das faixas de baixo.',
        ],
      },
      {
        heading: 'A tabela do INSS por faixa salarial',
        level: 'h3',
        body: [
          'A tabela de contribuição usada como referência neste artigo (valores de 2025, reajustados anualmente pelo governo — sempre confira a tabela vigente no ano em que você está calculando) funciona assim: até R$ 1.518,00, a alíquota é de 7,5%; de R$ 1.518,01 até R$ 2.793,88, a alíquota sobre essa fatia é de 9%; de R$ 2.793,89 até R$ 4.190,83, a fatia paga 12%; e de R$ 4.190,84 até o teto do INSS (R$ 8.157,41), a fatia paga 14%. Salários acima do teto contribuem com um valor fixo máximo, já que o INSS não incide sobre o excedente.',
        ],
      },
      {
        heading: 'Como funciona o desconto do IRRF',
        level: 'h2',
        body: [
          'O Imposto de Renda Retido na Fonte segue a mesma lógica progressiva, mas incide sobre a base de cálculo depois de descontado o INSS (e, se aplicável, dependentes ou pensão alimentícia) — não sobre o salário bruto. Essa é outra confusão comum: comparar a alíquota do IRRF diretamente com o salário bruto exagera o valor do imposto.',
        ],
      },
      {
        heading: 'Tabela do IRRF e a dedução simplificada',
        level: 'h3',
        body: [
          'Na tabela vigente em 2025, a base de cálculo até R$ 2.259,20 é isenta de IRRF. De R$ 2.259,21 até R$ 2.826,65, a alíquota é 7,5% com dedução de R$ 169,44. De R$ 2.826,66 até R$ 3.751,05, a alíquota é 15% com dedução de R$ 381,44. De R$ 3.751,06 até R$ 4.664,68, a alíquota é 22,5% com dedução de R$ 662,77. Acima de R$ 4.664,68, a alíquota é 27,5% com dedução de R$ 896,00. A "dedução" de cada faixa existe justamente para simplificar o cálculo progressivo em uma única multiplicação seguida de subtração, sem precisar somar faixa por faixa manualmente.',
          'Além do desconto do INSS, a folha pode aplicar uma dedução simplificada fixa (que substitui a dedução por dependentes) quando ela for mais vantajosa para o trabalhador — o sistema da folha de pagamento normalmente calcula ambos os cenários e aplica o que resultar em menos imposto.',
        ],
      },
      {
        heading: 'Exemplo prático completo: salário bruto de R$ 5.000',
        level: 'h2',
        body: [
          'Primeiro, o INSS. Aplicando as quatro faixas: 7,5% sobre R$ 1.518,00 = R$ 113,85; 9% sobre a fatia de R$ 1.518,01 a R$ 2.793,88 (R$ 1.275,88) = R$ 114,83; 12% sobre a fatia de R$ 2.793,89 a R$ 4.190,83 (R$ 1.396,95) = R$ 167,63; e 14% sobre a fatia de R$ 4.190,84 a R$ 5.000,00 (R$ 809,17) = R$ 113,28. Somando as quatro parcelas, o desconto de INSS totaliza R$ 509,59.',
          'Em seguida, o IRRF. A base de cálculo é o salário bruto menos o INSS: R$ 5.000,00 − R$ 509,59 = R$ 4.490,41. Esse valor cai na faixa de 22,5% com dedução de R$ 662,77: R$ 4.490,41 × 22,5% = R$ 1.010,34; subtraindo a dedução, o IRRF fica em R$ 347,57.',
          'O salário líquido final é R$ 5.000,00 − R$ 509,59 (INSS) − R$ 347,57 (IRRF) = R$ 4.142,84. Note que a alíquota "nominal" da faixa do IRRF é 22,5%, mas o imposto efetivamente pago representa apenas 6,95% do salário bruto (R$ 347,57 ÷ R$ 5.000,00) — é o efeito da progressividade e da dedução, que costuma surpreender quem espera um desconto bem maior ao ver "22,5%" na própria faixa salarial.',
        ],
      },
      {
        heading: 'FGTS não é desconto do salário',
        level: 'h3',
        body: [
          'Um engano recorrente é incluir o FGTS na conta do salário líquido. O FGTS (8% do salário bruto) é um depósito que o empregador faz em nome do trabalhador em uma conta vinculada na Caixa — ele não sai do salário do funcionário e não reduz o valor líquido recebido. Também vale lembrar que 13º salário e férias têm cálculo de INSS e IRRF próprios, feitos separadamente da folha mensal, e não entram nessa conta do salário regular do mês.',
        ],
      },
      {
        heading: 'Por que um aumento de salário não "some" com desconto maior',
        level: 'h2',
        body: [
          'Como tanto o INSS quanto o IRRF são progressivos, receber um aumento que empurra parte do salário para uma faixa mais alta nunca reduz o valor líquido total recebido — a alíquota maior incide apenas sobre a fatia que ultrapassa o novo limite, nunca sobre o salário inteiro retroativamente. Esse medo ("vou ganhar mais mas vou receber menos por causa do imposto") é comum, mas matematicamente não acontece em nenhum dos dois tributos.',
        ],
      },
      {
        heading: 'Simule o seu próprio salário',
        level: 'h2',
        body: [
          'Os valores exatos das faixas de INSS e IRRF são reajustados todo início de ano, então vale sempre conferir a tabela vigente antes de fazer suas contas. Use a Calculadora de Salário Líquido CLT para simular o seu salário bruto exato, incluindo dependentes e outras deduções, e a Calculadora CLT x PJ caso você esteja avaliando migrar de regime — a comparação de renda líquida entre os dois é bem diferente do que a maioria imagina antes de simular os números.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Salário Líquido CLT', href: '/pt-br/calculadoras/calculadora-de-salario-liquido' },
      { label: 'Calculadora CLT x PJ', href: '/pt-br/calculadoras/calculadora-clt-vs-pj' },
      { label: 'Calculadora de Orçamento Mensal', href: '/pt-br/calculadoras/calculadora-de-orcamento-mensal' },
    ],
  },
  {
    slug: 'pgbl-ou-vgbl-qual-paga-menos-imposto-de-renda',
    title: 'PGBL ou VGBL: Qual Previdência Privada Paga Menos Imposto de Renda',
    metaDescription:
      'PGBL ou VGBL: entenda a diferença na dedução de imposto de renda, a tabela regressiva e simule qual previdência privada compensa mais no seu caso.',
    publishDate: '2026-08-12',
    category: 'Aposentadoria',
    image: {
      src: '/blog/pgbl-ou-vgbl-qual-paga-menos-imposto-de-renda.svg',
      alt: 'PGBL ou VGBL: comparação de tributação e dedução de Imposto de Renda na previdência privada brasileira',
    },
    intro:
      'Quem decide complementar a aposentadoria do INSS com um plano de previdência privada esbarra rapidamente numa pergunta que a propaganda do banco raramente explica direito: PGBL ou VGBL? A diferença entre os dois não está no investimento em si — ambos podem aplicar exatamente na mesma carteira de fundos, com o mesmo gestor e a mesma taxa de administração — mas em como e quando o Imposto de Renda é cobrado. Escolher o regime errado para o seu perfil pode significar pagar milhares de reais a mais de imposto ao longo de décadas, mesmo com o rendimento bruto sendo idêntico.',
    sections: [
      {
        heading: 'PGBL e VGBL são regimes de tributação, não tipos de investimento',
        level: 'h2',
        body: [
          'O erro mais comum é tratar PGBL e VGBL como se fossem produtos de investimento concorrentes, como CDB e Tesouro Direto. Na prática, os dois são apenas "envelopes fiscais": dentro de qualquer um deles, seu dinheiro pode estar aplicado em fundos de renda fixa, multimercado ou até ações, exatamente como em qualquer outro investimento. O que muda entre PGBL e VGBL é exclusivamente a forma como a Receita Federal trata suas contribuições e o seu resgate.',
          'No PGBL, você pode deduzir as contribuições da base de cálculo do Imposto de Renda anual, dentro de um limite — mas paga IR sobre o valor total resgatado (contribuições mais rendimento) no futuro. No VGBL, não há dedução na contribuição, mas o IR no resgate incide apenas sobre o rendimento, nunca sobre o valor que você mesmo depositou.',
        ],
      },
      {
        heading: 'A dedução de até 12% da renda bruta anual no PGBL',
        level: 'h2',
        body: [
          'O PGBL permite deduzir da base de cálculo do IR anual até 12% da renda bruta tributável do ano — mas essa vantagem só existe para quem contribui ao INSS (ou a regime próprio de previdência) e declara o Imposto de Renda pelo modelo completo. Quem usa a declaração simplificada, ou não tem renda tributável relevante sujeita ao INSS, simplesmente não acessa esse benefício, por mais que contribua ao plano.',
          'Um exemplo direto: alguém com renda bruta tributável de R$ 120.000 no ano pode deduzir até R$ 14.400 (12%) em contribuições ao PGBL. Contribuir além desse limite ainda é permitido, mas o excedente não gera nenhuma dedução adicional — nesse caso, faz mais sentido direcionar o valor extra para um VGBL. É importante entender que essa dedução adia o imposto, não o elimina: o valor total resgatado no futuro, incluindo a parte que foi deduzida lá atrás, será tributado integralmente.',
        ],
      },
      {
        heading: 'VGBL: sem dedução, mas base de cálculo menor no resgate',
        level: 'h2',
        body: [
          'O VGBL não oferece nenhuma dedução na hora da contribuição, independente do modelo de declaração do contribuinte. A compensação vem no resgate: o Imposto de Renda incide apenas sobre o rendimento acumulado, nunca sobre o principal que você mesmo aportou — o que reduz consideravelmente a base tributável em comparação com o PGBL, onde o resgate inteiro é tributado.',
          'Por isso, o VGBL costuma ser a escolha mais indicada para quem declara pelo modelo simplificado, para autônomos e informais sem base de INSS relevante, e para qualquer contribuição que ultrapasse o teto de 12% dedutível do PGBL — nesses casos, o PGBL não traria nenhuma vantagem fiscal na entrada, então só restaria a desvantagem de tributar o principal na saída.',
        ],
      },
      {
        heading: 'Tabela regressiva ou progressiva: a segunda decisão que pesa tanto quanto PGBL x VGBL',
        level: 'h2',
        body: [],
      },
      {
        heading: 'Tabela regressiva: quanto mais tempo o dinheiro fica investido, menor a alíquota',
        level: 'h3',
        body: [
          'Na tabela regressiva, a alíquota do IR cai conforme o tempo de permanência de cada contribuição: 35% para resgates em até 2 anos, 30% de 2 a 4 anos, 25% de 4 a 6 anos, 20% de 6 a 8 anos, 15% de 8 a 10 anos, e 10% para prazos acima de 10 anos. Um detalhe frequentemente ignorado é que o prazo conta por parcela individual, não pelo plano como um todo — cada contribuição mensal tem seu próprio relógio rodando a partir da data em que foi feita, então um plano com 15 anos de existência ainda pode ter parte do saldo (as contribuições mais recentes) tributada a alíquotas mais altas que 10%.',
          'A tabela regressiva costuma ser a mais vantajosa para quem está pensando em aposentadoria de fato — um horizonte de acumulação de 10, 15, 20 anos — porque a alíquota mínima de 10% é bem menor que qualquer faixa da tabela progressiva do salário.',
        ],
      },
      {
        heading: 'Tabela progressiva: mesma lógica do salário, indicada para prazos mais curtos',
        level: 'h3',
        body: [
          'A tabela progressiva usa as mesmas faixas do IRRF sobre salário (isenção na base, depois alíquotas de 7,5%, 15%, 22,5% e 27,5%), com retenção antecipada de 15% no resgate e ajuste na declaração anual do IR. Ela costuma ser mais indicada para quem pretende resgatar em prazo mais curto, ou espera estar em uma faixa de renda baixa (aposentado sem outras fontes relevantes de renda, por exemplo) no momento do resgate — nesse cenário, a alíquota efetiva final pode ficar até menor que os 10% mínimos da tabela regressiva.',
        ],
      },
      {
        heading: 'Exemplo numérico: PGBL x VGBL em 12 anos de aportes mensais',
        level: 'h2',
        body: [
          'Considere um aporte de R$ 500 por mês (R$ 6.000 por ano) durante 12 anos, com retorno de 8% ao ano, dentro do limite dedutível de 12% da renda em ambos os cenários. Ao final do período, o saldo acumulado seria de aproximadamente R$ 113.850 — dos quais R$ 72.000 vieram das contribuições e cerca de R$ 41.850 são rendimento. Como o prazo passou de 10 anos, a alíquota da tabela regressiva aplicável é de 10%.',
          'No VGBL, o IR incide só sobre o rendimento: 10% de R$ 41.850 = R$ 4.185, deixando um resgate líquido de aproximadamente R$ 109.665. No PGBL, o IR incide sobre o saldo total resgatado: 10% de R$ 113.850 = R$ 11.385, resultando em R$ 102.465 líquidos — à primeira vista, R$ 7.200 a menos que o VGBL.',
          'Mas o PGBL também gerou economia de imposto ano a ano: supondo uma alíquota marginal de 27,5% (declaração completa, faixa mais alta), deduzir R$ 6.000 por ano reduziu o IR devido em R$ 1.650 por ano, totalizando R$ 19.800 ao longo dos 12 anos — dinheiro que ficou disponível para o contribuinte gastar, investir ou reaportar a cada ano. Somando essa economia (de forma conservadora, sem reinvestir) ao resgate líquido do PGBL, o total chega a R$ 122.265, cerca de R$ 12.600 acima do VGBL nesse cenário específico.',
          'A conclusão prática: o PGBL só supera o VGBL quando o contribuinte realmente aproveita a dedução (declaração completa, base de INSS suficiente, dentro do limite de 12%) e está em uma alíquota marginal alta o bastante para a economia anual compensar a tributação maior no resgate. Fora dessas condições — declaração simplificada, contribuições acima do teto dedutível, ou alíquota marginal baixa — o VGBL tende a deixar mais dinheiro no bolso no final.',
        ],
      },
      {
        heading: 'Quando o PGBL costuma valer mais a pena',
        level: 'h3',
        body: [
          'Declaração completa do IR, renda tributável com desconto de INSS relevante, alíquota marginal na faixa de 22,5% ou 27,5%, contribuições dentro do limite de 12% da renda bruta anual, e disposição de manter o dinheiro investido por 10 anos ou mais para acessar a alíquota mínima da tabela regressiva — essa é a combinação de fatores que costuma fazer o PGBL compensar de fato.',
        ],
      },
      {
        heading: 'Quando o VGBL costuma valer mais a pena',
        level: 'h3',
        body: [
          'Declaração simplificada, renda sem base relevante de INSS (parte de autônomos e informais), contribuições que já ultrapassam o teto dedutível de 12% do PGBL, ou simplesmente a preferência por manter o planejamento simples sem depender de reaproveitar a economia fiscal todo ano — nesses casos, o VGBL tende a ser a escolha mais direta e, na maioria das vezes, também a mais vantajosa financeiramente.',
        ],
      },
      {
        heading: 'Simule o seu caso antes de contratar',
        level: 'h2',
        body: [
          'Os números deste artigo usam um cenário fixo de aporte, prazo e retorno — o resultado real depende da sua renda tributável, do seu modelo de declaração e do prazo que você pretende manter o dinheiro investido. Use a Calculadora de Aposentadoria e Previdência Privada para projetar o saldo acumulado no seu prazo e aporte reais, e a Calculadora de Salário Líquido CLT para estimar sua alíquota marginal de IR atual — ela é o principal fator que determina se a dedução do PGBL realmente compensa no seu caso.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Aposentadoria e Previdência Privada', href: '/pt-br/calculadoras/calculadora-de-aposentadoria' },
      { label: 'Calculadora de Salário Líquido CLT', href: '/pt-br/calculadoras/calculadora-de-salario-liquido' },
      { label: 'Calculadora de Juros Compostos', href: '/pt-br/calculadoras/calculadora-de-juros-compostos' },
    ],
  },
];

export function getBlogPostBrBySlug(slug: string): BlogPostBr | undefined {
  return BLOG_POSTS_BR.find((p) => p.slug === slug);
}
