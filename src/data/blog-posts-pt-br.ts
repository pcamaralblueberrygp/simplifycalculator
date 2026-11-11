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
  {
    slug: 'bola-de-neve-ou-avalanche-qual-metodo-quitar-dividas',
    title: 'Bola de Neve ou Avalanche: Qual Método Economiza Mais na Hora de Quitar Dívidas',
    metaDescription:
      'Bola de neve ou avalanche: compare os dois métodos mais usados para quitar dívidas com juros diferentes, veja uma simulação numérica completa e qual poupa mais.',
    publishDate: '2026-08-27',
    category: 'Dívidas',
    image: {
      src: '/blog/bola-de-neve-ou-avalanche-qual-metodo-quitar-dividas.svg',
      alt: 'Bola de neve ou avalanche: comparação dos dois métodos de quitação de múltiplas dívidas com simulação numérica',
    },
    intro:
      'Quem tem mais de uma dívida em aberto — cheque especial, cartão no rotativo, empréstimo pessoal, financiamento — esbarra cedo ou tarde na mesma pergunta: qual dívida pagar primeiro quando sobra pouco dinheiro extra no mês? Existem dois métodos consagrados para responder isso, bola de neve e avalanche, e a escolha entre eles pode significar milhares de reais de diferença no total pago em juros, mesmo quando o valor mensal disponível é exatamente o mesmo.',
    sections: [
      {
        heading: 'Duas filosofias diferentes para o mesmo problema',
        level: 'h2',
        body: [
          'Os dois métodos partem da mesma lógica-base: você paga o mínimo em todas as dívidas, exceto em uma — a "dívida-alvo" — na qual concentra qualquer valor extra disponível no mês. Quando essa dívida é quitada, o valor total que estava sendo pago nela (mínimo mais extra) migra inteiro para a próxima dívida-alvo, criando um efeito cumulativo que acelera a cada quitação. A diferença entre bola de neve e avalanche está exclusivamente em qual dívida vira alvo primeiro.',
        ],
      },
      {
        heading: 'Bola de neve: começa pela dívida de menor saldo',
        level: 'h2',
        body: [
          'No método bola de neve, popularizado pelo consultor financeiro americano Dave Ramsey, a dívida-alvo é sempre a de menor saldo devedor, independentemente da taxa de juros que ela cobra. A lógica não é matemática, é comportamental: quitar uma dívida inteira rapidamente gera uma vitória concreta e visível, o que mantém a motivação de quem está no processo — muitas vezes mais determinante para o sucesso do plano do que economizar o máximo possível em juros.',
        ],
      },
      {
        heading: 'Avalanche: começa pela dívida de maior taxa de juros',
        level: 'h2',
        body: [
          'No método avalanche, a dívida-alvo é sempre a que cobra a maior taxa de juros, não importa o tamanho do saldo. No Brasil, isso quase sempre aponta primeiro para o rotativo do cartão de crédito ou o cheque especial — as modalidades mais caras do mercado de crédito, muitas vezes acima de 10-15% ao mês. Do ponto de vista puramente matemático, a avalanche é a estratégia ótima: ela minimiza o total de juros pagos ao longo de todo o processo de quitação.',
        ],
      },
      {
        heading: 'Simulação real: as mesmas três dívidas, dois métodos, resultados diferentes',
        level: 'h2',
        body: [
          'Considere alguém com três dívidas simultâneas: um financiamento de carro com saldo de R$ 2.000 a 1,8% ao mês, um empréstimo pessoal de R$ 5.000 a 3,5% ao mês, e um cartão no rotativo de R$ 9.000 a 14% ao mês — um cenário bem comum no Brasil, onde o rotativo costuma ser a dívida mais cara e também a de maior saldo. Essa pessoa consegue pagar R$ 600 além dos pagamentos mínimos das três dívidas (R$ 150, R$ 300 e R$ 1.400, respectivamente) todo mês.',
        ],
      },
      {
        heading: 'O que acontece na bola de neve',
        level: 'h3',
        body: [
          'Seguindo a ordem do menor saldo, a bola de neve ataca primeiro o financiamento do carro (quitado no mês 3), depois o empréstimo pessoal (quitado no mês 9) e só então o cartão rotativo, que fica recebendo apenas o pagamento mínimo durante os primeiros 8 meses — tempo suficiente para acumular juros consideráveis a 14% ao mês sobre um saldo de R$ 9.000. A dívida inteira é quitada no mês 14, com um total de R$ 14.515,65 pagos em juros ao longo de todo o processo.',
        ],
      },
      {
        heading: 'O que acontece na avalanche',
        level: 'h3',
        body: [
          'Seguindo a ordem da maior taxa, a avalanche ataca o cartão rotativo desde o primeiro mês, quitando-o no mês 8 — quase a metade do tempo que ele levaria na bola de neve — e deixando o empréstimo pessoal e o financiamento do carro (as dívidas mais baratas) para depois. O resultado final também leva 14 meses no total, mas o total pago em juros cai para R$ 8.179,28 — uma economia de R$ 6.336,37 só pela ordem em que as dívidas foram atacadas, sem nenhuma mudança no valor mensal disponível.',
        ],
      },
      {
        heading: 'Por que a diferença é tão grande neste exemplo',
        level: 'h2',
        body: [
          'A diferença de mais de R$ 6.300 vem inteiramente do tempo que o rotativo do cartão — de longe a dívida mais cara do exemplo — passa acumulando juros de 14% ao mês sobre um saldo alto. Quanto maior a taxa de uma dívida e quanto mais tempo ela permanece intocada recebendo só o pagamento mínimo, maior o custo de deixá-la por último. Esse efeito se intensifica ainda mais quando a dívida mais cara também tem o maior saldo, como costuma acontecer no rotativo do cartão e no cheque especial no Brasil.',
        ],
      },
      {
        heading: 'Quando a bola de neve pode valer a pena mesmo assim',
        level: 'h2',
        body: [
          'A vantagem matemática da avalanche só se converte em economia real se a pessoa realmente seguir o plano até o fim — e é exatamente aí que muita gente desiste no meio do caminho, especialmente quando a dívida mais cara também é a maior e leva meses para mostrar qualquer progresso visível. Para quem já tentou quitar dívidas antes e abandonou o plano por falta de motivação, o ganho comportamental da bola de neve (quitar algo rápido e sentir o progresso) pode compensar a diferença em juros — o melhor método, na prática, é o que a pessoa consegue sustentar até zerar todas as dívidas.',
        ],
      },
      {
        heading: 'Um método híbrido: o melhor dos dois mundos',
        level: 'h2',
        body: [
          'Uma variação comum é usar a bola de neve para quitar rapidamente uma primeira dívida pequena (para ganhar o impulso inicial) e, a partir da segunda dívida-alvo em diante, migrar para a lógica da avalanche, priorizando sempre a maior taxa de juros entre as dívidas restantes. Essa combinação mantém parte do benefício motivacional do início do processo sem abrir mão da maior parte da economia financeira ao longo do caminho — e costuma ser um bom ponto de partida para quem está em dúvida entre os dois métodos.',
        ],
      },
      {
        heading: 'Como simular o seu próprio caso',
        level: 'h2',
        body: [
          'Os números deste exemplo usam três dívidas e uma taxa de juros específicas — o resultado real depende do número de dívidas que você tem, do saldo e da taxa de cada uma, e do valor extra disponível por mês. Use a Calculadora de Quitação de Dívidas para simular cada uma das suas dívidas individualmente e entender quanto tempo e juros cada uma consome isoladamente, e a Calculadora de Cartão de Crédito (Rotativo) se o cartão for uma das dívidas na sua lista — ela mostra especificamente o impacto de manter um saldo no rotativo mês a mês.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Quitação de Dívidas', href: '/pt-br/calculadoras/calculadora-de-quitacao-de-dividas' },
      { label: 'Calculadora de Cartão de Crédito (Rotativo)', href: '/pt-br/calculadoras/calculadora-de-cartao-de-credito' },
      { label: 'Calculadora de Financiamento', href: '/pt-br/calculadoras/calculadora-de-financiamento' },
    ],
  },
  {
    slug: 'cet-custo-efetivo-total-como-comparar-financiamentos',
    title: 'CET: Como o Custo Efetivo Total Revela o Preço Real do Seu Financiamento',
    metaDescription:
      'O CET reúne juros, IOF, tarifas e seguros em uma taxa anual única. Veja como é calculado, por que difere da taxa anunciada e como usá-lo para comparar propostas.',
    publishDate: '2026-09-09',
    category: 'Dívidas',
    image: {
      src: '/blog/cet-custo-efetivo-total-como-comparar-financiamentos.svg',
      alt: 'Banner do artigo sobre CET (Custo Efetivo Total) mostrando juros, IOF, tarifas e seguros somados no custo real de um financiamento — SimplifyCalculator Brasil',
    },
    intro:
      'Quando um banco ou uma financeira anuncia um empréstimo a "1,99% ao mês", esse número quase nunca é o que você vai realmente pagar. Sobre a taxa de juros incidem impostos, tarifas de cadastro, seguros embutidos e outros encargos que o anúncio costuma deixar de fora. O Custo Efetivo Total, ou CET, existe justamente para reunir tudo isso em uma única taxa anual — e, no Brasil, o Banco Central obriga toda instituição a informá-lo antes da contratação. Entender o CET é o que separa comparar propostas de verdade de cair na proposta com a manchete mais bonita.',
    sections: [
      {
        heading: 'O que o CET mede que a taxa de juros não mostra',
        level: 'h2',
        body: [
          'A taxa de juros nominal de um financiamento responde a uma pergunta específica: quanto custa, ao mês ou ao ano, o dinheiro emprestado. O problema é que um contrato de crédito raramente cobra só juros. Há um imposto federal sobre a operação, pode haver tarifa de abertura de crédito, avaliação de bem, registro de contrato e seguros que são somados à prestação. Todos esses valores encarecem o financiamento, mas nenhum deles aparece na taxa de juros anunciada.',
          'O CET traduz esse conjunto de custos em uma taxa percentual anual equivalente. Tecnicamente, ele é a taxa que iguala o valor efetivamente liberado para o cliente ao fluxo de todas as parcelas e encargos ao longo do contrato — o mesmo conceito de taxa interna de retorno usado em análise de investimentos, só que aplicado do ponto de vista de quem toma o empréstimo. Por isso o CET é sempre expresso em porcentagem ao ano, mesmo quando as parcelas são mensais.',
          'Na prática, o CET é o número que responde à pergunta que interessa: considerando absolutamente tudo que sai do meu bolso, qual o custo anual desse crédito?',
        ],
      },
      {
        heading: 'O que entra no cálculo do CET',
        level: 'h2',
        body: [
          'O CET não é um número arbitrário: ele soma, dentro do mesmo fluxo de caixa, quatro grupos de custo que a taxa de juros ignora. Vale conhecer cada um deles para saber o que perguntar em cada proposta.',
        ],
      },
      {
        heading: 'IOF (Imposto sobre Operações Financeiras)',
        level: 'h3',
        body: [
          'O IOF incide sobre praticamente toda operação de crédito para pessoa física. A cobrança tem duas partes: uma alíquota fixa aplicada sobre o valor contratado e uma parcela diária proporcional ao prazo, limitada a 365 dias. Em empréstimos de prazo mais longo, o IOF acumulado chega perto do seu teto e representa um custo relevante logo na largada, porque é descontado do valor liberado ou somado ao saldo devedor já no primeiro dia.',
          'As alíquotas do IOF são definidas por decreto federal e já mudaram algumas vezes nos últimos anos, então vale confirmar os percentuais vigentes na hora de simular. O ponto que não muda é o efeito: o IOF sempre puxa o CET para cima em relação à taxa de juros pura.',
        ],
      },
      {
        heading: 'Tarifas administrativas',
        level: 'h3',
        body: [
          'A mais comum é a Tarifa de Cadastro, cobrada uma única vez no início do relacionamento de crédito para custear a análise e o registro do cliente. Dependendo do produto, aparecem ainda tarifa de avaliação do bem (em financiamento de veículo ou imóvel), tarifa de registro de contrato e custos de cartório. Como são valores pagos à vista ou financiados junto, eles reduzem o montante líquido que chega até você e, com isso, aumentam o CET.',
          'A regulação do Banco Central restringe quais tarifas podem ser cobradas em operações de crédito e proíbe algumas práticas antigas, como a cobrança de tarifa por liquidação antecipada. Ainda assim, o conjunto de tarifas permitidas varia entre instituições — e é uma das razões pelas quais dois contratos com a mesma taxa de juros terminam com CET diferente.',
        ],
      },
      {
        heading: 'Seguros embutidos',
        level: 'h3',
        body: [
          'Muitos financiamentos vêm com um seguro prestamista, que quita ou amortiza a dívida em caso de morte ou invalidez do contratante. No crédito imobiliário, os seguros são obrigatórios por lei: o MIP, que cobre morte e invalidez permanente, e o DFI, que cobre danos físicos ao imóvel. O prêmio desses seguros é somado à prestação mês a mês e entra integralmente no CET.',
          'Seguro embutido não é necessariamente ruim — o imobiliário, por exemplo, evita que a família herde uma dívida grande. Mas ele é um custo. Quando o seguro é opcional, como costuma ser o prestamista no empréstimo pessoal, comparar o CET com e sem o seguro mostra exatamente quanto aquela proteção está custando ao ano.',
        ],
      },
      {
        heading: 'Por que o CET é sempre maior que a taxa de juros nominal',
        level: 'h2',
        body: [
          'Como o CET incorpora IOF, tarifas e seguros além dos juros, ele é, por construção, igual ou maior que a taxa de juros do contrato — nunca menor. A distância entre os dois números depende do peso desses encargos. Em um empréstimo pessoal de valor baixo e prazo curto, uma tarifa de cadastro fixa pode representar uma fatia grande do total e abrir uma diferença de vários pontos percentuais ao ano entre a taxa e o CET. Em um financiamento longo e de valor alto, a tarifa fixa se dilui, mas os seguros mensais e o IOF no teto mantêm a diferença relevante.',
          'Uma regra prática: quanto menor e mais curto o empréstimo, mais o CET tende a se descolar da taxa anunciada. É justamente nas operações pequenas — cheque especial parcelado, consignado de valor baixo, financiamento de eletrodoméstico — que olhar só a taxa de juros mais engana.',
        ],
      },
      {
        heading: 'O CET na regulação brasileira',
        level: 'h2',
        body: [
          'Desde a Resolução CMN nº 3.517, de 2007, atualizada por normas posteriores, o Banco Central exige que qualquer instituição financeira informe o CET antes de fechar uma operação de crédito ou arrendamento mercantil com pessoa física ou microempresa. A informação precisa ser expressa como taxa percentual anual e apresentada de forma clara, acompanhada da discriminação de todos os componentes que entraram na conta — juros, tributos, tarifas, seguros e demais despesas.',
          'Na prática, isso significa que você tem direito de receber o CET por escrito, com o detalhamento, antes de assinar. Se uma proposta de crédito não traz o CET, ou traz só um número solto sem a composição, isso já é um sinal de alerta. Pedir a planilha de composição do CET de cada proposta é a forma mais simples de comparar bancos em pé de igualdade.',
        ],
      },
      {
        heading: 'Exemplo: mesma taxa de juros, CET diferente',
        level: 'h2',
        body: [
          'Imagine dois bancos oferecendo um empréstimo de R$ 10.000 em 24 parcelas, ambos anunciando 2% ao mês de juros. O banco A cobra uma tarifa de cadastro de R$ 300 e não embute seguro. O banco B não cobra tarifa de cadastro, mas embute um seguro prestamista de R$ 12 por parcela. Nos dois casos incide o IOF de praxe.',
          'No banco A, os R$ 300 saem na largada: você assina uma dívida de R$ 10.000 mas efetivamente recebe menos, o que eleva o custo anual. No banco B não há desconto inicial, mas você paga R$ 288 de seguro ao longo do contrato, diluídos nas parcelas. Dependendo dos números exatos, o CET das duas propostas pode ficar próximo — ou uma pode se revelar consideravelmente mais cara. A taxa de juros de 2% ao mês, idêntica nas duas, não permitiria perceber nada disso.',
          'O exercício mostra por que comparar propostas apenas pela taxa de juros é um atalho perigoso: a decisão certa depende de rodar o CET de cada uma com os seus valores reais de tarifa, seguro e prazo.',
        ],
      },
      {
        heading: 'Como usar o CET na hora de decidir',
        level: 'h2',
        body: [
          'Primeiro, exija o CET anual de cada proposta por escrito, com a composição detalhada. Segundo, confira o prazo: um CET menor em um contrato mais longo pode significar mais juros pagos no total, mesmo com custo anual mais baixo — CET e valor total pago são informações complementares, não substitutas. Terceiro, verifique quais itens do CET são negociáveis: tarifa de cadastro e seguro opcional às vezes podem ser reduzidos ou removidos, e cada real a menos nesses encargos derruba o CET.',
          'Por fim, use o CET para comparar modalidades diferentes de crédito, não só bancos diferentes dentro da mesma modalidade. É o CET que deixa claro, por exemplo, o abismo entre um consignado e o rotativo do cartão, ou entre um financiamento de veículo com garantia e um empréstimo pessoal sem garantia para a mesma finalidade.',
        ],
      },
      {
        heading: 'O CET no financiamento imobiliário',
        level: 'h2',
        body: [
          'No crédito imobiliário, o CET carrega componentes que não existem em outras modalidades: os seguros MIP e DFI obrigatórios, a taxa de administração mensal, os custos de avaliação do imóvel e de registro do contrato em cartório, e a atualização do saldo devedor por um índice — TR na maior parte das linhas ou, em algumas, IPCA. Contratos de 20 ou 30 anos fazem esses encargos recorrentes pesarem bastante no custo total.',
          'Além disso, o sistema de amortização escolhido, SAC ou Price, muda o desenho das parcelas e, portanto, o fluxo usado no cálculo do CET. Por isso, no crédito imobiliário, comparar propostas só pelo CET não basta: é preciso olhar junto o sistema de amortização, o índice de correção e o valor total projetado ao fim do contrato.',
        ],
      },
      {
        heading: 'Simule o CET antes de assinar',
        level: 'h2',
        body: [
          'Os efeitos descritos aqui dependem inteiramente dos seus números: valor financiado, prazo, taxa de juros, tarifas e seguros de cada proposta. Antes de fechar qualquer contrato, monte o fluxo completo de parcelas e encargos e calcule o custo efetivo de cada opção. Use a Calculadora de Financiamento para simular um empréstimo pessoal ou de veículo e ver o total pago em juros no seu prazo, a Calculadora de Financiamento Imobiliário para comparar SAC e Price com correção, e a Calculadora de Tabela Price para entender, parcela a parcela, como juros e amortização se dividem ao longo do contrato.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Financiamento (Empréstimo Pessoal)', href: '/pt-br/calculadoras/calculadora-de-financiamento' },
      { label: 'Calculadora de Financiamento Imobiliário (SAC x Price)', href: '/pt-br/calculadoras/calculadora-de-financiamento-imobiliario' },
      { label: 'Calculadora de Tabela Price', href: '/pt-br/calculadoras/tabela-price-calculadora' },
    ],
  },
  {
    slug: 'clt-ou-pj-quanto-cobrar-para-nao-sair-perdendo',
    title: 'CLT ou PJ: Quanto Cobrar como Pessoa Jurídica para Não Sair Perdendo',
    metaDescription:
      'CLT ou PJ? Aprenda a calcular o valor mínimo a cobrar como PJ considerando FGTS, 13º, férias, Simples Nacional e Fator R antes de trocar de regime.',
    publishDate: '2026-09-14',
    category: 'Renda',
    image: {
      src: '/blog/clt-ou-pj-quanto-cobrar-para-nao-sair-perdendo.svg',
      alt: 'Comparação entre salário CLT e faturamento PJ com Simples Nacional e Fator R — guia SimplifyCalculator Brasil',
    },
    intro:
      'A proposta chega assim: "topamos pagar R$ 8.000 como PJ, hoje você recebe R$ 6.000 de CLT". Parece um ganho óbvio, mas comparar diretamente o valor bruto de uma proposta PJ com o salário bruto CLT é o erro mais comum de quem migra de regime — e o que faz muita gente descobrir, meses depois, que está recebendo efetivamente menos do que antes. A conta certa exige somar o que a CLT paga por fora (FGTS, 13º, férias) e subtrair o que o PJ precisa pagar sozinho (impostos do Simples Nacional, contador, sua própria reserva de 13º e férias).',
    sections: [
      {
        heading: 'Por que comparar os dois valores brutos não funciona',
        level: 'h2',
        body: [
          'O salário bruto CLT já vem "líquido" de uma série de obrigações que o empregador paga sem que apareçam no contracheque: 8% de FGTS depositados todo mês em conta separada, 13º salário integral, um terço de férias sobre o salário, e a contribuição patronal ao INSS que garante parte da sua aposentadoria futura. Nenhum desses itens existe automaticamente em um contrato PJ — se você não os embutir no valor cobrado, está literalmente abrindo mão deles.',
          'Do lado PJ, o valor bruto faturado também não é o que sobra no bolso: incide o imposto do Simples Nacional (DAS), possivelmente a contribuição ao INSS como contribuinte individual, os honorários do contador (obrigatório para manter um CNPJ ativo) e, se você quiser ter os mesmos direitos de um CLT, a reserva mensal que você mesmo precisa fazer para bancar seu próprio "13º" e "férias".',
        ],
      },
      {
        heading: 'O que a CLT garante e que o PJ precisa recriar sozinho',
        level: 'h2',
        body: [],
      },
      {
        heading: 'Os encargos que o empregador paga por fora do salário',
        level: 'h3',
        body: [
          'Somando FGTS (8%), 13º salário (equivalente a mais um salário por ano, ou ~8,33% mensal) e um terço constitucional de férias (~2,78% mensal), o "custo invisível" da CLT gira em torno de 19-20% acima do salário bruto mensal — sem contar a contribuição patronal ao INSS, que fica por conta do empregador e não do empregado. É esse pacote que precisa ser recriado, item por item, dentro do valor cobrado como PJ.',
        ],
      },
      {
        heading: 'Os riscos que a CLT absorve por você',
        level: 'h3',
        body: [
          'Além do dinheiro direto, a CLT garante aviso prévio e multa de 40% do FGTS em caso de demissão sem justa causa, seguro-desemprego enquanto você procura uma nova posição, e estabilidade em situações como gravidez e acidente de trabalho. Como PJ, a queda de um único cliente pode zerar sua renda de um mês para outro sem nenhuma rede de proteção equivalente — um risco que vale a pena precificar, mesmo que não caiba numa planilha com a mesma facilidade dos encargos.',
        ],
      },
      {
        heading: 'Como funciona a tributação PJ pelo Simples Nacional',
        level: 'h2',
        body: [
          'A maioria dos prestadores de serviço PJ individuais se enquadra no Simples Nacional, dentro do Anexo III (alíquotas de 6% a 16,93% sobre o faturamento, começando em 6% para quem fatura até R$ 180 mil por ano) ou do Anexo V (alíquotas mais altas, de 15,5% a 30,5%), dependendo da atividade e do chamado Fator R.',
          'O Fator R compara a folha de pagamento da empresa (incluindo o pró-labore que você retira) com o faturamento dos últimos 12 meses: se essa proporção for de 28% ou mais, a empresa tributa pelo Anexo III, mais barato; abaixo disso, cai no Anexo V, mais caro. Na prática, isso significa que retirar um pró-labore maior (o que também aumenta sua contribuição ao INSS e o valor da sua aposentadoria futura) pode reduzir a alíquota do imposto sobre o faturamento — um dos poucos casos em que pagar mais imposto de um lado economiza no outro.',
        ],
      },
      {
        heading: 'O cálculo passo a passo para não sair perdendo',
        level: 'h2',
        body: [],
      },
      {
        heading: 'Passo 1: parta do custo total da sua posição CLT atual',
        level: 'h3',
        body: [
          'Pegue o salário bruto mensal e multiplique por aproximadamente 1,20 para embutir FGTS, 13º e férias proporcionais — esse é o "valor de referência" que a proposta PJ precisa superar, não o salário líquido nem o salário bruto isolado.',
        ],
      },
      {
        heading: 'Passo 2: aplique o gross-up dos custos que você vai assumir',
        level: 'h3',
        body: [
          'Sobre esse valor de referência, é preciso somar (por fora, como um acréscimo percentual) a alíquota do Simples Nacional que se aplica à sua faixa e anexo, o custo médio de um contador para MEI ou ME (em geral entre R$ 150 e R$ 400 por mês) e a contribuição ao INSS via pró-labore, se você quiser manter a mesma cobertura previdenciária que tinha como CLT.',
        ],
      },
      {
        heading: 'Passo 3: some uma margem de segurança para os meses sem receita',
        level: 'h3',
        body: [
          'Como PJ não tem seguro-desemprego nem estabilidade, é prudente embutir uma margem adicional de 5-10% no valor cobrado, destinada a formar uma reserva de emergência maior do que a que você manteria como CLT — use a Calculadora de Orçamento Mensal para dimensionar quanto dessa margem cabe no seu planejamento sem inviabilizar a proposta.',
        ],
      },
      {
        heading: 'Exemplo numérico completo',
        level: 'h2',
        body: [
          'Um CLT com salário bruto de R$ 6.000 tem um custo total de aproximadamente R$ 7.200 (R$ 6.000 × 1,20), somando FGTS, 13º e férias. Supondo enquadramento no Anexo III do Simples Nacional a 11,2% (faixa intermediária), mais R$ 300 de contador e um Fator R que exige pró-labore de 28% do faturamento (para manter a alíquota mais baixa e continuar contribuindo ao INSS sobre uma base razoável), o valor bruto necessário como PJ fica entre R$ 8.300 e R$ 8.800 para efetivamente igualar o pacote CLT — bem acima da diferença de "só" R$ 6.000 para R$ 8.000 que costuma parecer vantajosa à primeira vista. Use a Calculadora CLT x PJ para rodar esse comparativo com os seus próprios números, incluindo a alíquota exata da sua faixa do Simples.',
        ],
      },
      {
        heading: 'Além do dinheiro: o que também pesa na decisão',
        level: 'h2',
        body: [
          'Nem tudo se resolve com uma planilha. Plano de saúde corporativo, vale-refeição e outros benefícios indiretos da CLT têm valor real e raramente aparecem no contracheque bruto — se a empresa contratante como PJ não oferecer equivalentes, esse custo também precisa entrar na conta. Por outro lado, o PJ pode deduzir despesas do negócio (equipamento, parte do aluguel, cursos) e tem mais liberdade para atender múltiplos clientes, o que reduz a dependência de uma única fonte de renda — um fator que compensa parte do risco de não ter estabilidade, desde que seja bem gerenciado desde o início.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora CLT x PJ', href: '/pt-br/calculadoras/calculadora-clt-vs-pj' },
      { label: 'Calculadora de Salário Líquido CLT', href: '/pt-br/calculadoras/calculadora-de-salario-liquido' },
      { label: 'Calculadora de Orçamento Mensal', href: '/pt-br/calculadoras/calculadora-de-orcamento-mensal' },
    ],
  },
  {
    slug: 'amortizar-financiamento-imobiliario-ou-investir',
    title: 'Amortizar o Financiamento Imobiliário ou Investir? A Conta que Decide',
    metaDescription:
      'Sobrou dinheiro: amortizar o financiamento ou investir no CDI? Compare taxa efetiva, IR, LCI e FGTS e veja por que reduzir o prazo economiza mais juros.',
    publishDate: '2026-11-05',
    category: 'Imóveis',
    image: {
      src: '/blog/amortizar-financiamento-imobiliario-ou-investir.svg',
      alt: 'Banner comparando amortização extraordinária do financiamento imobiliário com investimento em CDI, LCI e Tesouro Direto, incluindo uso do FGTS',
    },
    intro:
      'Recebeu o 13º, um bônus ou a restituição do Imposto de Renda e tem um financiamento imobiliário em andamento? A dúvida é clássica: usar o dinheiro para amortizar o saldo devedor ou deixá-lo rendendo em um CDB, LCI ou no Tesouro Direto? Não existe resposta universal, mas existe uma conta objetiva — e ela depende de três números que quase ninguém compara do jeito certo: a taxa efetiva do seu contrato, o rendimento líquido de IR do investimento e o tamanho da sua reserva de emergência.',
    sections: [
      {
        heading: 'Amortizar é um "investimento" com rentabilidade garantida',
        level: 'h2',
        body: [
          'Cada real usado para abater o saldo devedor deixa de pagar juros pelo resto do contrato. Na prática, amortizar equivale a aplicar dinheiro a uma taxa igual ao custo efetivo do financiamento — sem risco de mercado, sem marcação a mercado e sem Imposto de Renda sobre o "rendimento". Se o seu contrato cobra TR + 11% ao ano, mais seguros MIP (morte e invalidez) e DFI (danos físicos ao imóvel), cada real amortizado "rende" algo próximo de 12% ao ano líquido.',
          'O direito de antecipar está garantido pelo Código de Defesa do Consumidor (art. 52, §2º), que assegura a redução proporcional dos juros, e a Resolução CMN nº 3.516/2007 proíbe a cobrança de tarifa de liquidação antecipada em contratos firmados a partir de dezembro de 2007. Ou seja: o banco não pode cobrar multa por você pagar antes.',
        ],
      },
      {
        heading: 'Quanto o investimento precisa render para valer a pena',
        level: 'h2',
        body: [
          'O erro mais comum é comparar a taxa nominal do contrato com a taxa bruta do investimento. Um CDB a 100% do CDI com CDI em 13% ao ano parece vencer um financiamento de 11% ao ano — mas, depois do IR da tabela regressiva (22,5% até 180 dias, caindo até 15% acima de 720 dias), o rendimento líquido no prazo longo cai para cerca de 11,05% ao ano. Somando a TR e os seguros ao custo do contrato, a vantagem do investimento desaparece.',
          'LCI e LCA são isentas de IR para pessoa física, então uma LCI a 92% do CDI rende cerca de 11,96% ao ano líquido no mesmo cenário — praticamente empatando com o custo do financiamento. Já títulos como o Tesouro IPCA+ devem ser comparados em termos reais: se o seu financiamento é corrigido pela TR (que costuma ficar bem abaixo da inflação), o custo real dele pode ser menor do que parece, e um título que paga IPCA + 6% pode competir de igual para igual. A regra prática: o investimento só vence com folga quando o rendimento líquido supera o custo efetivo do contrato por uma margem que compense o risco.',
        ],
      },
      {
        heading: 'Reduzir o prazo ou reduzir a parcela?',
        level: 'h2',
        body: [
          'Na hora de amortizar, o banco pergunta se você quer diminuir o número de parcelas restantes ou o valor de cada uma. Financeiramente, reduzir o prazo quase sempre economiza mais juros, porque elimina justamente as parcelas mais distantes, sobre as quais incidiriam anos de juros acumulados.',
        ],
      },
      {
        heading: 'Exemplo numérico no sistema SAC',
        level: 'h3',
        body: [
          'Considere um saldo devedor de R$ 300.000, 300 parcelas restantes no SAC e taxa de 11% ao ano (ignorando a TR e os seguros para simplificar). Sem amortizar, os juros futuros somam cerca de R$ 394 mil. Uma amortização extraordinária de R$ 30.000 com redução de prazo corta 30 parcelas e reduz os juros totais para cerca de R$ 320 mil — economia de aproximadamente R$ 74,8 mil, ou quase 2,5 vezes o valor amortizado.',
          'Se a mesma amortização for usada para reduzir a parcela (mantendo as 300 restantes), a primeira prestação cai de cerca de R$ 3.620 para R$ 3.258, mas a economia total de juros fica em aproximadamente R$ 39,4 mil — praticamente metade. Simule o seu próprio contrato na Calculadora de Financiamento Imobiliário para ver a diferença com os seus números.',
        ],
      },
      {
        heading: 'Quando reduzir a parcela faz mais sentido',
        level: 'h3',
        body: [
          'Reduzir a parcela é a escolha certa quando o orçamento está apertado, a prestação compromete mais de 30% da renda ou existe risco real de perda de renda (como em uma transição de CLT para PJ). Um fluxo mensal mais folgado diminui a chance de atraso — e atrasar um financiamento com alienação fiduciária é muito mais caro do que qualquer diferença de juros.',
        ],
      },
      {
        heading: 'O FGTS muda a conta a favor da amortização',
        level: 'h2',
        body: [
          'O saldo do FGTS rende 3% ao ano mais TR, acrescido da distribuição de parte do lucro do fundo — historicamente bem abaixo do CDI e de qualquer financiamento. Por isso, usar o FGTS para amortizar quase sempre vale a pena. As regras básicas: o imóvel precisa estar financiado dentro do Sistema Financeiro da Habitação (SFH), ser destinado à sua moradia, você não pode ter outro imóvel residencial na mesma cidade e é preciso ter pelo menos três anos de trabalho sob o regime do FGTS. Entre uma utilização e outra para amortização, o intervalo mínimo é de dois anos.',
          'Uma estratégia comum é usar o FGTS para amortizar a cada dois anos e direcionar o dinheiro "livre" (13º, bônus) primeiro para a reserva de emergência e só depois para amortizações ou investimentos.',
        ],
      },
      {
        heading: 'Antes de amortizar: a ordem de prioridades',
        level: 'h2',
        body: [
          'Amortizar reduz custo, mas também reduz liquidez: o dinheiro que entra no imóvel não volta para a sua conta numa emergência. Antes de qualquer amortização, monte uma reserva de emergência de 6 a 12 meses de despesas em aplicações líquidas como Tesouro Selic ou CDB com liquidez diária. Em seguida, quite dívidas mais caras — rotativo do cartão, cheque especial e crédito pessoal cobram muito mais do que qualquer financiamento imobiliário.',
          'Só depois dessas etapas a comparação "amortizar ou investir" entra em jogo. Se a taxa efetiva do contrato for maior do que o rendimento líquido que você consegue com segurança, amortize reduzindo o prazo. Se o investimento render claramente mais, ou se você precisa de flexibilidade, invista — e reavalie a decisão sempre que a SELIC mudar de patamar, já que o cenário de juros do Banco Central altera a conta de um ano para o outro.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Financiamento Imobiliário', href: '/pt-br/calculadoras/calculadora-de-financiamento-imobiliario' },
      { label: 'Calculadora de Juros Compostos', href: '/pt-br/calculadoras/calculadora-de-juros-compostos' },
      { label: 'Calculadora de Orçamento Mensal', href: '/pt-br/calculadoras/calculadora-de-orcamento-mensal' },
    ],
  },
  {
    slug: 'poupanca-tesouro-selic-ou-cdb-qual-rende-mais',
    title: 'Poupança, Tesouro Selic ou CDB: Qual Rende Mais Depois do Imposto de Renda',
    metaDescription:
      'Poupança é isenta de IR, mas rende mais? Veja a conta com Selic, CDI, tabela regressiva, IOF e custódia da B3, e o % do CDI que faz o CDB vencer a poupança.',
    publishDate: '2026-11-11',
    category: 'Investimentos',
    image: {
      src: '/blog/poupanca-tesouro-selic-ou-cdb-qual-rende-mais.svg',
      alt: 'Banner azul-marinho comparando o rendimento líquido da poupança, do Tesouro Selic e do CDB atrelado ao CDI após Imposto de Renda, IOF e taxa de custódia',
    },
    intro:
      'A poupança ainda guarda mais dinheiro dos brasileiros do que muitos investimentos de renda fixa somados, e o argumento de quem fica nela costuma ser um só: "pelo menos não paga Imposto de Renda". A isenção é real, mas ela não decide nada sozinha. O que importa é quanto sobra no bolso depois de todos os descontos, e essa conta muda conforme a SELIC, o prazo que o dinheiro fica aplicado e o percentual do CDI que o banco oferece. Abaixo está a comparação feita do jeito certo, com números, e as poucas situações em que a poupança realmente leva vantagem.',
    sections: [
      {
        heading: 'Como cada aplicação rende, de verdade',
        level: 'h2',
        body: [
          'A poupança segue uma regra fixada em lei (Lei nº 12.703/2012): quando a meta da SELIC está acima de 8,5% ao ano, ela paga 0,5% ao mês mais a Taxa Referencial (TR), o que dá cerca de 6,17% ao ano mais TR. Quando a SELIC está em 8,5% ou menos, o rendimento passa a ser 70% da SELIC mais TR. Com a SELIC em patamar de dois dígitos, a TR tem ficado na casa de 1,5% a 2% ao ano, o que leva a poupança para perto de 8% ao ano, isenta de IR para pessoa física.',
          'O Tesouro Selic (LFT) acompanha a taxa básica de juros definida pelo Copom do Banco Central, com um pequeno ágio ou deságio na compra. O CDB pós-fixado rende um percentual do CDI, que fica sempre muito próximo da SELIC (em geral cerca de 0,10 ponto abaixo). Os dois pagam Imposto de Renda pela tabela regressiva: 22,5% até 180 dias, 20% de 181 a 360 dias, 17,5% de 361 a 720 dias e 15% acima de 720 dias. O imposto incide apenas sobre o rendimento, nunca sobre o valor aplicado.',
        ],
      },
      {
        heading: 'Os custos que quase ninguém coloca na conta',
        level: 'h3',
        body: [
          'No Tesouro Direto, a B3 cobra taxa de custódia de 0,20% ao ano sobre o saldo, mas o Tesouro Selic é isento dessa taxa para valores de até R$ 10 mil por investidor; acima disso, a taxa incide só sobre o excedente. CDBs normalmente não têm custódia. Já o IOF vale para as duas aplicações em resgates feitos nos primeiros 30 dias: começa em 96% do rendimento no primeiro dia e cai até zero no 30º. Por isso, para dinheiro que vai ficar só uma ou duas semanas aplicado, o IOF pode corroer quase todo o ganho.',
          'A poupança tem um custo escondido diferente: o aniversário. O rendimento é creditado uma vez por mês, na data de aniversário de cada depósito. Se você resgatar um dia antes, perde o rendimento do mês inteiro daquele valor. Depósitos feitos nos dias 29, 30 e 31 só fazem aniversário no dia 1º do mês seguinte.',
        ],
      },
      {
        heading: 'Simulação: R$ 20 mil aplicados por dois anos',
        level: 'h2',
        body: [
          'Considere um cenário de SELIC em 14% ao ano, CDI em 13,9% e poupança rendendo 8% ao ano, mantido estável por 24 meses (o cenário real varia, mas a lógica da comparação é a mesma). Na poupança, R$ 20.000 viram cerca de R$ 23.330, sem imposto. No Tesouro Selic, o valor bruto chega a cerca de R$ 25.990; depois de 15% de IR sobre os R$ 5.990 de rendimento e de aproximadamente R$ 50 de custódia sobre a parte acima de R$ 10 mil, sobram perto de R$ 25.040 líquidos.',
          'Um CDB a 100% do CDI termina em cerca de R$ 25.050 líquidos, praticamente empatado com o Tesouro. Um CDB a 110% do CDI, comum em bancos médios, chega a cerca de R$ 25.600. Já uma LCI ou LCA a 90% do CDI, que é isenta de IR, termina perto de R$ 25.320. Ou seja, mesmo pagando imposto, qualquer uma dessas opções entrega entre R$ 1.700 e R$ 2.300 a mais do que a poupança no período. Refaça a conta com o seu valor e prazo na Calculadora de Juros Compostos.',
        ],
      },
      {
        heading: 'O percentual do CDI que empata com a poupança',
        level: 'h3',
        body: [
          'Dá para inverter a conta e descobrir o mínimo que um CDB precisa pagar para valer mais do que a poupança. Divida o rendimento da poupança pelo CDI líquido de IR na faixa de prazo correspondente. No cenário acima, o ponto de empate fica em torno de 74% do CDI para resgates em até 180 dias, 72% entre 181 e 360 dias e 68% para prazos acima de dois anos. Qualquer CDB abaixo disso perde para a poupança, e isso é mais comum do que parece: contas remuneradas e "caixinhas" de grandes bancos às vezes pagam 70% ou 80% do CDI.',
          'Para comparar um título isento (LCI, LCA) com um tributado (CDB), use a equivalência: percentual do CDI isento = percentual do CDB × (1 − alíquota de IR). Um CDB a 100% do CDI por mais de dois anos equivale a uma LCI a 85% do CDI. Lembre que, desde 2024, LCI e LCA passaram a ter carência mínima definida pelo Conselho Monetário Nacional, então elas não servem para dinheiro que pode ser necessário a qualquer momento.',
        ],
      },
      {
        heading: 'Quando a poupança ainda faz sentido',
        level: 'h2',
        body: [
          'Existem situações reais em que a poupança empata ou vence. A primeira é com a SELIC baixa: com a taxa básica em 7%, a poupança paga 70% disso (4,9%) mais TR, isenta, e para prazos curtos a diferença para um CDB a 100% do CDI cai para algumas dezenas de reais por ano em valores pequenos. A segunda é para valores que ficam aplicados por menos de 30 dias e atravessam um aniversário: como a poupança não tem IOF, ela pode render mais do que um CDB resgatado no 15º dia.',
          'Fora desses casos, a poupança tem a seu favor apenas a simplicidade. E a simplicidade custa caro: em um cenário de juros altos, deixar R$ 20 mil parados nela por dois anos significa abrir mão de mais de um salário mínimo de rendimento.',
        ],
      },
      {
        heading: 'Segurança: FGC e Tesouro Nacional',
        level: 'h2',
        body: [
          'Poupança, CDB, LCI e LCA são cobertos pelo Fundo Garantidor de Créditos (FGC) até R$ 250 mil por CPF e por instituição, com teto global de R$ 1 milhão a cada quatro anos. O Tesouro Selic é garantido diretamente pelo Tesouro Nacional, considerado o menor risco de crédito do país. Na prática, um CDB de um banco médio dentro do limite do FGC tem um nível de proteção comparável ao da poupança do maior banco do país.',
          'A recomendação objetiva: use Tesouro Selic ou um CDB de liquidez diária a 100% do CDI ou mais para a reserva de emergência, e reserve LCI, LCA e CDBs de prazo maior para objetivos com data definida. Antes de aplicar, defina o prazo de cada objetivo com a Calculadora de Orçamento Mensal e compare o resultado líquido na Calculadora de Poupança.',
        ],
      },
    ],
    relatedCalculators: [
      { label: 'Calculadora de Poupança', href: '/pt-br/calculadoras/calculadora-de-poupanca' },
      { label: 'Calculadora de Juros Compostos', href: '/pt-br/calculadoras/calculadora-de-juros-compostos' },
      { label: 'Calculadora de Orçamento Mensal', href: '/pt-br/calculadoras/calculadora-de-orcamento-mensal' },
    ],
  },
];

export function getBlogPostBrBySlug(slug: string): BlogPostBr | undefined {
  return BLOG_POSTS_BR.find((p) => p.slug === slug);
}
