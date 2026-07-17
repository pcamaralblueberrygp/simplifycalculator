// ---------------------------------------------------------------------------
// Posts do blog (Português). Frequência de publicação: quartas e sextas, 2/semana.
// Para adicionar um novo post: adicione uma entrada abaixo com um slug único.
// ---------------------------------------------------------------------------

export interface BlogSectionBr {
  heading: string;
  level: 'h2' | 'h3';
  body: string[];
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
];

export function getBlogPostBrBySlug(slug: string): BlogPostBr | undefined {
  return BLOG_POSTS_BR.find((p) => p.slug === slug);
}
