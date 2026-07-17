// ---------------------------------------------------------------------------
// Versão brasileira do site. As calculadoras aqui NÃO são traduções das
// versões em inglês — usam regras financeiras específicas do Brasil (INSS,
// IRRF, Tabela Price/SAC, SELIC, Simples Nacional), por isso não há link
// direto entre uma calculadora em inglês e sua equivalente em português.
// ---------------------------------------------------------------------------

export type PtBrCalcType =
  | 'financiamento'
  | 'financiamentoImobiliario'
  | 'tabelaPrice'
  | 'salarioLiquido'
  | 'cltVsPj'
  | 'jurosCompostos'
  | 'orcamentoMensal'
  | 'aposentadoria'
  | 'quitacaoDividas'
  | 'cartaoCredito'
  | 'poupanca';

export interface FaqBr {
  q: string;
  a: string;
}

export interface FormulaSourceBr {
  label: string;
  url: string;
}

export interface CalculatorBr {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  metaDescription: string;
  intro: string;
  formulaExplanation: string;
  formulaSource?: FormulaSourceBr;
  example: string;
  faqs: FaqBr[];
  tips?: string[];
  calcType: PtBrCalcType;
}

export const CALCULATORS_BR: CalculatorBr[] = [
  {
    slug: 'calculadora-de-financiamento',
    title: 'Calculadora de Financiamento (Empréstimo Pessoal)',
    shortTitle: 'Financiamento Pessoal',
    category: 'Empréstimos',
    metaDescription: 'Calcule a parcela mensal, o total de juros e o custo total de um empréstimo pessoal ou financiamento com parcelas fixas.',
    intro: 'Calcule quanto você vai pagar por mês em um empréstimo pessoal ou financiamento com parcelas fixas (Tabela Price), a partir do valor, da taxa de juros e do prazo.',
    formulaExplanation: 'Esta calculadora usa a fórmula da Tabela Price, o sistema de amortização mais comum no Brasil para empréstimos pessoais e financiamentos: PMT = P × [i(1+i)^n] / [(1+i)^n - 1], onde P é o valor financiado, i é a taxa de juros mensal (taxa anual ÷ 12) e n é o número de parcelas.\n\nComo a parcela é fixa, no início do contrato a maior parte do pagamento vai para os juros; com o tempo, a parcela de amortização (redução do saldo devedor) cresce.',
    formulaSource: { label: 'Banco Central do Brasil: Sistema de Amortização', url: 'https://www.bcb.gov.br/estabilidadefinanceira/mercadocredito' },
    example: 'Exemplo: um empréstimo de R$ 15.000 a 2,5% ao mês por 24 meses gera uma parcela fixa de aproximadamente R$ 833,15, totalizando cerca de R$ 4.995,60 em juros ao longo do contrato.',
    faqs: [
      { q: 'A taxa de juros informada é a taxa nominal ou o CET?', a: 'É apenas a taxa de juros contratual. O Custo Efetivo Total (CET), exigido por lei em contratos no Brasil, inclui também tarifas, seguros e IOF, e costuma ser mais alto que a taxa de juros isolada. Sempre confira o CET informado pelo banco antes de assinar.' },
      { q: 'O que é a Tabela Price?', a: 'É o sistema de amortização com parcelas fixas mais usado no Brasil em empréstimos pessoais, financiamento de veículos e alguns imóveis. A parcela não muda, mas a composição entre juros e amortização muda mês a mês.' },
      { q: 'Qual a diferença entre taxa de juros e CET na prática?', a: 'A taxa de juros é só um componente do custo. O CET (Custo Efetivo Total) soma juros, IOF, tarifas de cadastro e seguros obrigatórios em um único percentual anual — é o número que você deve usar para comparar propostas de bancos diferentes, não apenas a taxa de juros isolada.' },
    ],
    tips: [
      'Simule o mesmo empréstimo em pelo menos três instituições (banco tradicional, cooperativa de crédito, fintech) — a diferença de CET entre elas costuma ser maior do que as pessoas esperam.',
      'Sempre que possível, opte por débito automático da parcela: muitos bancos oferecem desconto na taxa de juros para quem autoriza o débito em conta.',
      'Evite usar o cheque especial ou rotativo do cartão para cobrir uma parcela atrasada — negociar um adiamento com o próprio credor quase sempre sai mais barato.',
    ],
    calcType: 'financiamento',
  },
  {
    slug: 'calculadora-de-financiamento-imobiliario',
    title: 'Calculadora de Financiamento Imobiliário (SAC x Price)',
    shortTitle: 'Financiamento Imobiliário',
    category: 'Imóveis',
    metaDescription: 'Compare os sistemas SAC e Tabela Price para financiamento imobiliário e veja qual parcela e total de juros faz mais sentido para você.',
    intro: 'No Brasil, o financiamento imobiliário pode usar o sistema SAC (parcelas decrescentes) ou a Tabela Price (parcelas fixas). Esta calculadora mostra a primeira parcela, a última parcela e o total de juros nos dois sistemas para o mesmo valor financiado.',
    formulaExplanation: 'No SAC (Sistema de Amortização Constante), a amortização mensal é fixa: Amortização = Saldo Devedor Inicial ÷ n. A parcela é a soma da amortização com os juros sobre o saldo devedor restante, então ela começa mais alta e cai mês a mês.\n\nNa Tabela Price, a parcela é fixa do início ao fim (mesma fórmula PMT = P × [i(1+i)^n] / [(1+i)^n - 1]), mas o total de juros pagos ao longo do contrato costuma ser maior que no SAC, porque o saldo devedor demora mais para cair.',
    formulaSource: { label: 'Caixa Econômica Federal: Sistemas de amortização', url: 'https://www.caixa.gov.br/voce/habitacao/financiamento-imoveis/Paginas/default.aspx' },
    example: 'Exemplo: financiando R$ 280.000 a 10% ao ano em 360 meses, o SAC começa com uma parcela mais alta (~R$ 2.919) que cai ao longo do tempo, enquanto a Price tem uma parcela fixa de ~R$ 2.457 — mas o SAC costuma gerar menos juros totais no longo prazo.',
    faqs: [
      { q: 'Qual sistema é mais barato no total?', a: 'Em geral, o SAC gera menos juros totais ao longo do contrato, porque o saldo devedor cai mais rápido nos primeiros anos. A Price tem parcelas mais previsíveis (sempre iguais), o que facilita o planejamento, mas custa mais em juros no total.' },
      { q: 'A Caixa e os bancos privados oferecem os dois sistemas?', a: 'A maioria dos bancos, incluindo a Caixa, oferece ambos os sistemas para financiamento imobiliário, e você normalmente pode escolher no momento da contratação. Alguns bancos também aplicam a Tabela SACRE, uma variação híbrida entre os dois.' },
      { q: 'Posso trocar de sistema depois de contratar o financiamento?', a: 'Normalmente não é possível trocar de SAC para Price (ou vice-versa) no mesmo contrato depois de assinado. A decisão entre os dois sistemas deve ser tomada antes da contratação — por isso vale simular ambos aqui antes de assinar.' },
    ],
    tips: [
      'Se o orçamento mensal for apertado no início, mas você espera um aumento de renda no futuro, o SAC pode ser mais indicado: a parcela mais alta no começo tende a caber melhor conforme a renda cresce.',
      'Considere fazer amortizações extraordinárias assim que receber 13º salário ou restituição do Imposto de Renda — reduzir o saldo devedor mais cedo economiza juros proporcionalmente mais no sistema Price.',
      'Antes de assinar, peça ao banco a simulação completa (não só a primeira parcela) nos dois sistemas — a diferença total de juros entre SAC e Price em 30 anos pode passar de dezenas de milhares de reais.',
    ],
    calcType: 'financiamentoImobiliario',
  },
  {
    slug: 'tabela-price-calculadora',
    title: 'Calculadora de Tabela Price (com simulação de parcelas)',
    shortTitle: 'Tabela Price',
    category: 'Empréstimos',
    metaDescription: 'Gere a simulação completa de amortização pela Tabela Price: veja quanto de cada parcela vai para juros e quanto vai para amortização, mês a mês.',
    intro: 'A Tabela Price detalha, mês a mês, como sua parcela fixa se divide entre juros e amortização do saldo devedor. Esta calculadora gera a simulação dos primeiros 12 meses e o resumo total do contrato.',
    formulaExplanation: 'A parcela fixa é calculada por PMT = P × [i(1+i)^n] / [(1+i)^n - 1]. Em cada mês, os juros são calculados sobre o saldo devedor restante (Saldo × i), e a amortização é a diferença entre a parcela fixa e os juros do mês (Amortização = PMT - Juros). O saldo devedor cai a cada mês pelo valor da amortização.',
    formulaSource: { label: 'Banco Central do Brasil: Simulador de crédito', url: 'https://www.bcb.gov.br/' },
    example: 'Exemplo: um financiamento de R$ 20.000 a 1,8% ao mês em 36 parcelas gera uma parcela fixa de aproximadamente R$ 754,66. No primeiro mês, cerca de R$ 360 são juros e R$ 394 são amortização — essa proporção se inverte ao longo do contrato.',
    faqs: [
      { q: 'Por que a maior parte da minha parcela no começo é juros?', a: 'Porque os juros incidem sobre o saldo devedor, que é maior no início do contrato. À medida que o saldo cai, a parcela de juros cai também, e a parcela de amortização cresce — mesmo com a parcela total sempre igual.' },
      { q: 'Consigo quitar antecipadamente com desconto?', a: 'Sim. Por lei, instituições financeiras no Brasil devem oferecer redução proporcional de juros em caso de quitação antecipada, total ou parcial. Solicite ao banco o valor atualizado com desconto de juros futuros.' },
      { q: 'A Tabela Price é a mesma coisa que "juros compostos"?', a: 'A Tabela Price usa a lógica de juros compostos para calcular a parcela fixa, mas o termo "Tabela Price" se refere especificamente ao sistema de amortização com parcelas iguais — é uma aplicação específica do conceito de juros compostos ao contexto de empréstimos.' },
    ],
    tips: [
      'Guarde a simulação completa (não só a parcela) para comparar com o extrato real do banco todo mês — pequenas divergências de centavos são normais por arredondamento, mas diferenças maiores merecem uma ligação para o banco.',
      'Se pretende quitar o contrato antes do prazo, peça a simulação de quitação total alguns meses antes — o desconto de juros futuros pode fazer valer a pena esperar ou antecipar dependendo do momento.',
    ],
    calcType: 'tabelaPrice',
  },
  {
    slug: 'calculadora-de-salario-liquido',
    title: 'Calculadora de Salário Líquido CLT',
    shortTitle: 'Salário Líquido CLT',
    category: 'Renda',
    metaDescription: 'Calcule seu salário líquido CLT com os descontos de INSS e IRRF de 2024, considerando dependentes.',
    intro: 'Descubra quanto do seu salário bruto CLT realmente cai na sua conta depois dos descontos obrigatórios de INSS (previdência) e IRRF (imposto de renda), considerando dependentes.',
    formulaExplanation: 'O INSS é calculado por faixas progressivas sobre o salário bruto (7,5% até R$ 1.412,00; 9% de R$ 1.412,01 a R$ 2.666,68; 12% de R$ 2.666,69 a R$ 4.000,03; 14% de R$ 4.000,04 até o teto de R$ 7.786,02, com desconto máximo de R$ 908,85).\n\nO IRRF é calculado sobre a base de cálculo (salário bruto menos INSS menos R$ 189,59 por dependente), aplicando a alíquota da faixa correspondente e subtraindo a parcela a deduzir da tabela progressiva da Receita Federal. Salário líquido = Bruto - INSS - IRRF.',
    formulaSource: { label: 'Receita Federal: Tabela do Imposto de Renda', url: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas' },
    example: 'Exemplo: um salário bruto de R$ 4.500,00 sem dependentes gera um desconto de INSS de aproximadamente R$ 507,03 e um IRRF de cerca de R$ 219,84, resultando em um salário líquido de aproximadamente R$ 3.773,13.',
    faqs: [
      { q: 'Essa calculadora inclui vale-transporte e vale-refeição?', a: 'Não. Esta calculadora considera apenas os descontos obrigatórios de INSS e IRRF. Vale-transporte (descontado em até 6% do salário) e outros descontos definidos em convenção coletiva ou contrato variam por empresa e não estão incluídos.' },
      { q: 'O que são "dependentes" para fins de IRRF?', a: 'Filhos até 21 anos (ou até 24 se cursando ensino superior), cônjuge, e outras pessoas que se enquadrem nas regras da Receita Federal podem ser declarados como dependentes, reduzindo a base de cálculo do IRRF em R$ 189,59 por dependente.' },
      { q: 'Por que o INSS tem um teto de desconto?', a: 'O INSS é calculado por faixas progressivas, mas existe um teto de contribuição (R$ 908,85 em 2024) porque também existe um teto para o benefício de aposentadoria. Quem ganha acima do teto salarial do INSS não paga mais previdência sobre o excedente, e também não recebe um benefício maior por isso.' },
    ],
    tips: [
      'Revise anualmente se vale a pena declarar dependentes no imposto de renda retido na fonte — em alguns casos, principalmente com renda mais baixa, pode ser mais vantajoso não declarar e ajustar na declaração anual.',
      'Se você tem gastos dedutíveis relevantes (plano de saúde, educação, previdência privada PGBL), considere ajustar o IRRF retido na fonte com seu RH para não emprestar dinheiro ao governo sem juros até a restituição.',
      'Guarde os holerites mensais — eles são a principal fonte de conferência quando você for preencher a declaração anual do Imposto de Renda.',
    ],
    calcType: 'salarioLiquido',
  },
  {
    slug: 'calculadora-clt-vs-pj',
    title: 'Calculadora CLT x PJ',
    shortTitle: 'CLT x PJ',
    category: 'Renda',
    metaDescription: 'Compare quanto você recebe líquido como CLT versus como PJ, considerando INSS, IRRF, 13º, férias, FGTS, Simples Nacional e custo de contador.',
    intro: 'Decidir entre um cargo CLT e uma proposta PJ exige comparar mais do que o valor bruto: benefícios como 13º salário, férias e FGTS têm valor real, enquanto o regime PJ tem custos como Simples Nacional e contador. Esta calculadora ajuda a comparar as duas opções em termos concretos.',
    formulaExplanation: 'Para a CLT, calculamos o salário líquido mensal (após INSS e IRRF) e somamos o valor mensal equivalente dos benefícios: 13º salário (1/12 do bruto por mês) + 1/3 de férias sobre 1/12 do bruto + FGTS (8% do bruto, embora não seja de uso imediato). Isso dá o "valor mensal total CLT".\n\nPara o PJ, partimos do faturamento mensal informado e subtraímos a alíquota efetiva do Simples Nacional, o custo do contador e uma estimativa de contribuição ao INSS como contribuinte individual, chegando ao "líquido PJ mensal".',
    formulaSource: { label: 'Portal do Simples Nacional', url: 'https://www8.receita.fazenda.gov.br/simplesnacional/' },
    example: 'Exemplo: um salário CLT bruto de R$ 6.000 gera um líquido de ~R$ 4.923 mais ~R$ 833 em benefícios mensais equivalentes (13º/férias/FGTS) = ~R$ 5.756 de valor mensal total. Para igualar isso como PJ, seria necessário faturar bem mais que R$ 6.000/mês, já descontando Simples Nacional e contador.',
    faqs: [
      { q: 'O PJ realmente compensa financeiramente?', a: 'Só compensa se o faturamento PJ for significativamente maior que o salário CLT equivalente — normalmente 30-50% a mais — porque o PJ perde os benefícios trabalhistas (FGTS, férias remuneradas, 13º, estabilidade, seguro-desemprego) e assume custos extras (contador, Simples Nacional, sem verbas rescisórias).' },
      { q: 'Essa calculadora considera a Reforma Trabalhista ou pejotização?', a: 'Não entra em questões jurídicas de vínculo empregatício ou risco de reclassificação trabalhista (pejotização) — isso depende do caso concreto e vale consultar um advogado trabalhista. A calculadora foca apenas na comparação financeira entre os dois regimes.' },
      { q: 'Preciso abrir uma empresa (CNPJ) para ser PJ?', a: 'Sim, prestar serviço como PJ exige abrir um CNPJ, geralmente enquadrado no Simples Nacional. Isso envolve custos de abertura, contabilidade mensal (já incluída nesta calculadora como "custo do contador") e obrigações fiscais recorrentes, mesmo em meses sem faturamento.' },
    ],
    tips: [
      'Antes de aceitar uma proposta PJ, negocie o valor da nota fiscal já pensando em guardar uma reserva para meses sem contrato — diferente da CLT, não há seguro-desemprego se o contrato acabar.',
      'Considere contratar um seguro de vida ou plano de saúde por conta própria como PJ — são custos que a CLT frequentemente já inclui como benefício e que precisam entrar na conta real de comparação.',
      'Reavalie a alíquota efetiva do Simples Nacional pelo menos uma vez por ano — ela pode mudar conforme seu faturamento acumulado sobe de faixa (Anexo III ou V), afetando diretamente seu líquido.',
    ],
    calcType: 'cltVsPj',
  },
  {
    slug: 'calculadora-de-juros-compostos',
    title: 'Calculadora de Juros Compostos',
    shortTitle: 'Juros Compostos',
    category: 'Investimentos',
    metaDescription: 'Veja como seus investimentos crescem com juros compostos mensais e aportes mensais, usando taxas de referência como SELIC e CDI.',
    intro: 'Projete o crescimento de um investimento inicial ao longo do tempo com juros compostos mensais, incluindo aportes mensais recorrentes. Use taxas de referência como SELIC, CDI ou o rendimento esperado da sua carteira.',
    formulaExplanation: 'O saldo inicial cresce segundo A = P(1 + i/12)^(12t), onde P é o principal, i é a taxa de retorno anual e t é o número de anos. Os aportes mensais crescem separadamente pela fórmula de valor futuro de uma série de pagamentos, sendo somados ao resultado.\n\nNo Brasil, é comum usar como referência 100% do CDI (próximo à taxa SELIC) para Tesouro Selic e CDBs, ou uma taxa de retorno esperada mais alta para renda variável.',
    formulaSource: { label: 'Banco Central do Brasil: Taxa SELIC', url: 'https://www.bcb.gov.br/controleinflacao/taxaselic' },
    example: 'Exemplo: R$ 10.000 investidos a 10% ao ano (aproximando 100% do CDI), com aporte mensal de R$ 500 por 10 anos, cresce para aproximadamente R$ 116.500 — sendo cerca de R$ 70.000 de aportes e o restante de rendimento.',
    faqs: [
      { q: 'Essa simulação considera Imposto de Renda sobre o rendimento?', a: 'Não. Investimentos de renda fixa no Brasil (CDB, Tesouro Direto) têm IR regressivo sobre o rendimento (de 22,5% até 15%, dependendo do prazo). O valor mostrado aqui é bruto — o líquido efetivamente recebido será menor após o IR.' },
      { q: 'Por que usar juros compostos mensais e não anuais?', a: 'A maioria dos investimentos de renda fixa no Brasil (CDB, Tesouro Selic, poupança) capitaliza mensalmente, então essa é a convenção mais realista para projeções de médio e longo prazo.' },
      { q: 'O que é a "mágica dos juros compostos"?', a: 'É o efeito de os juros de um período passarem a render juros nos períodos seguintes. Em prazos curtos o efeito parece pequeno, mas em 15-20 anos ele explica a maior parte do crescimento total — por isso começar cedo importa mais do que o valor exato do aporte inicial.' },
    ],
    tips: [
      'Automatize o aporte mensal em vez de depender de transferir manualmente todo mês — a disciplina de aportar sempre pesa mais no resultado final do que tentar acertar o melhor momento do mercado.',
      'Revise a taxa de retorno usada na simulação a cada 6-12 meses com base no cenário real da SELIC e do CDI, para não basear seu planejamento em uma taxa otimista demais.',
      'Lembre-se de que o valor mostrado é bruto: para renda fixa, o Imposto de Renda regressivo (de 22,5% a 15%) incide sobre o rendimento no resgate, reduzindo o valor líquido final.',
    ],
    calcType: 'jurosCompostos',
  },
  {
    slug: 'calculadora-de-orcamento-mensal',
    title: 'Calculadora de Orçamento Mensal',
    shortTitle: 'Orçamento Mensal',
    category: 'Planejamento',
    metaDescription: 'Organize seu orçamento mensal por categoria (moradia, transporte, alimentação, lazer) e veja quanto sobra ou falta no fim do mês.',
    intro: 'Um orçamento mensal ajuda a visualizar para onde vai seu dinheiro e a identificar onde é possível economizar. Preencha sua renda líquida e seus principais gastos por categoria para ver seu saldo mensal.',
    formulaExplanation: 'O cálculo é simples: Saldo = Renda Líquida - Total de Despesas. Um saldo positivo significa sobra no mês; negativo significa que você está gastando mais do que ganha. Organizar por categoria ajuda a identificar qual gasto está pesando mais no orçamento.',
    formulaSource: { label: 'Banco Central do Brasil: Educação financeira', url: 'https://www.bcb.gov.br/cidadaniafinanceira' },
    example: 'Exemplo: renda líquida de R$ 6.000 menos R$ 1.800 de moradia, R$ 500 de transporte, R$ 800 de alimentação, R$ 300 de contas, R$ 400 de lazer e R$ 500 de poupança deixa um saldo mensal de R$ 1.700.',
    faqs: [
      { q: 'Devo usar a renda bruta ou líquida?', a: 'Use sempre a renda líquida — o valor que efetivamente cai na sua conta após os descontos de INSS, IRRF e outros. Orçar com base na renda bruta leva a gastar mais do que realmente se tem disponível.' },
      { q: 'Existe uma regra prática para dividir o orçamento?', a: 'Uma regra bastante usada é a 50-30-20: 50% da renda líquida para necessidades essenciais (moradia, contas, alimentação), 30% para desejos (lazer, assinaturas) e 20% para poupança e investimentos ou quitação de dívidas.' },
      { q: 'O que fazer se o saldo estiver sempre negativo?', a: 'Primeiro, corte gastos variáveis (lazer, assinaturas, delivery) antes de mexer em gastos fixos (moradia, contas). Se ainda assim não fechar, pode ser hora de renegociar dívidas ou buscar uma renda extra — orçamento sozinho não resolve um desequilíbrio estrutural entre renda e custo de vida.' },
    ],
    tips: [
      'Revise assinaturas recorrentes (streaming, aplicativos, academia) a cada 3 meses — é uma das categorias que mais silenciosamente comem o orçamento sem o usuário perceber.',
      'Separe uma conta ou "caixinha" só para a reserva de emergência, fora da conta do dia a dia, para não misturar esse dinheiro com o orçamento mensal comum.',
      'Refaça esse cálculo todo mês, não só uma vez — orçamento é um hábito de acompanhamento, não uma planilha que se faz e se esquece.',
    ],
    calcType: 'orcamentoMensal',
  },
  {
    slug: 'calculadora-de-aposentadoria',
    title: 'Calculadora de Aposentadoria e Previdência Privada',
    shortTitle: 'Aposentadoria',
    category: 'Investimentos',
    metaDescription: 'Projete quanto você terá acumulado para se aposentar, considerando aportes mensais, retorno esperado e idade de aposentadoria.',
    intro: 'Complementar a aposentadoria do INSS com investimentos próprios ou previdência privada (PGBL/VGBL) é essencial, já que o teto do benefício do INSS costuma ser bem menor que o salário em atividade. Esta calculadora projeta seu saldo acumulado e uma estimativa de renda mensal na aposentadoria.',
    formulaExplanation: 'O saldo futuro é calculado com juros compostos mensais sobre o saldo atual mais os aportes mensais, ao longo dos anos até a aposentadoria: FV = Saldo Atual × (1+i)^n + Aportes acumulados com juros. Para estimar a renda mensal na aposentadoria, aplicamos uma taxa de retirada segura de aproximadamente 0,4% ao mês sobre o saldo acumulado (equivalente a cerca de 4,8% ao ano), preservando parte do patrimônio.',
    formulaSource: { label: 'INSS: Regras de aposentadoria', url: 'https://www.gov.br/inss/pt-br' },
    example: 'Exemplo: começando aos 30 anos com R$ 20.000 acumulados, aportando R$ 600/mês a um retorno de 8% ao ano até os 65 anos, o saldo projetado é de aproximadamente R$ 1.180.000, gerando uma renda mensal estimada de cerca de R$ 4.720.',
    faqs: [
      { q: 'Isso substitui o INSS?', a: 'Não. Esta calculadora projeta uma reserva própria (investimentos ou previdência privada) que complementa a aposentadoria do INSS. O teto do benefício do INSS em 2024 gira em torno de R$ 7.786,02, frequentemente insuficiente para manter o padrão de vida de quem ganha mais que isso.' },
      { q: 'PGBL ou VGBL, qual escolher?', a: 'PGBL permite deduzir as contribuições do Imposto de Renda (até 12% da renda bruta anual) para quem declara pelo modelo completo, mas tributa o resgate total. VGBL não permite dedução, mas tributa apenas o rendimento no resgate — geralmente melhor para quem declara pelo modelo simplificado ou é isento.' },
      { q: 'Qual a diferença entre tabela progressiva e regressiva na previdência privada?', a: 'Na tabela regressiva, a alíquota do Imposto de Renda cai quanto mais tempo o dinheiro fica investido (de 35% até 10% após 10 anos) — vantajosa para quem pretende resgatar só no longo prazo. Na progressiva, a alíquota segue a mesma tabela do salário, sendo mais indicada para resgates de curto prazo ou valores menores.' },
    ],
    tips: [
      'Reajuste o aporte mensal todo ano pela inflação (ou por um percentual da sua renda), não deixe o valor nominal congelado por décadas — isso corrói o poder de compra do plano ao longo do tempo.',
      'Antes de contratar uma previdência privada, compare as taxas de administração e de carregamento entre instituições — taxas altas podem anular boa parte do benefício fiscal do PGBL/VGBL ao longo de 20-30 anos.',
      'Não dependa de uma única fonte de renda na aposentadoria — combine INSS, previdência privada e investimentos próprios para reduzir o risco de qualquer uma delas render menos que o esperado.',
    ],
    calcType: 'aposentadoria',
  },
  {
    slug: 'calculadora-de-quitacao-de-dividas',
    title: 'Calculadora de Quitação de Dívidas',
    shortTitle: 'Quitação de Dívidas',
    category: 'Dívidas',
    metaDescription: 'Simule quanto tempo leva para quitar uma dívida com pagamento fixo mensal e quanto você vai pagar de juros no total.',
    intro: 'Simule quantos meses leva para quitar uma dívida (empréstimo, cheque especial, financiamento) fazendo pagamentos mensais fixos, e veja o total de juros que você vai pagar ao longo do processo.',
    formulaExplanation: 'A calculadora simula mês a mês: os juros incidem sobre o saldo devedor restante à taxa mensal informada, depois o pagamento fixo é aplicado, reduzindo o saldo. A simulação continua até o saldo chegar a zero ou até 600 meses, o que ocorrer primeiro.',
    formulaSource: { label: 'Banco Central do Brasil: Endividamento', url: 'https://www.bcb.gov.br/cidadaniafinanceira/endividamento' },
    example: 'Exemplo: uma dívida de R$ 8.000 a 3% ao mês com pagamento fixo de R$ 400/mês leva cerca de 26 meses para ser quitada, custando aproximadamente R$ 2.460 em juros — quase um terço do valor original.',
    faqs: [
      { q: 'E se meu pagamento mensal não cobrir os juros do mês?', a: 'Se o pagamento for menor que os juros mensais, o saldo devedor nunca vai diminuir — na verdade, pode até crescer, dependendo do contrato. A calculadora avisa quando isso acontece para você ajustar o valor do pagamento.' },
      { q: 'Vale a pena renegociar a dívida?', a: 'Muitas vezes sim, principalmente para dívidas de cartão de crédito e cheque especial, que têm juros altíssimos. Renegociar para uma taxa menor (ex: um empréstimo pessoal para quitar o rotativo do cartão) costuma reduzir drasticamente o total pago em juros.' },
      { q: 'Existem programas de renegociação de dívidas no Brasil?', a: 'Sim, iniciativas como o Desenrola Brasil, promovido pelo governo federal, e mutirões de renegociação organizados por bancos e pelo Serasa costumam oferecer descontos significativos para quitação à vista ou parcelada de dívidas em atraso. Vale pesquisar antes de aceitar as condições originais do credor.' },
    ],
    tips: [
      'Se você tem mais de uma dívida, priorize quitar primeiro a de maior taxa de juros (geralmente cartão de crédito ou cheque especial), mantendo o pagamento mínimo nas demais.',
      'Sempre que receber um valor extra (13º salário, restituição do IR, bônus), considere usar parte dele para amortizar a dívida mais cara antes de qualquer outro gasto.',
      'Peça ao credor a simulação com desconto para quitação à vista — muitas instituições oferecem descontos de 20-50% do saldo para quem consegue pagar tudo de uma vez.',
    ],
    calcType: 'quitacaoDividas',
  },
  {
    slug: 'calculadora-de-cartao-de-credito',
    title: 'Calculadora de Cartão de Crédito (Rotativo)',
    shortTitle: 'Cartão de Crédito',
    category: 'Dívidas',
    metaDescription: 'Calcule quanto tempo leva para quitar a fatura do cartão de crédito no rotativo e quanto você vai pagar de juros com as taxas praticadas no Brasil.',
    intro: 'O crédito rotativo do cartão é uma das formas de dívida mais caras do Brasil, com juros que costumam superar 15% ao mês. Esta calculadora simula quanto tempo leva para quitar a fatura pagando um valor fixo mensal, e o total de juros pago no processo.',
    formulaExplanation: 'A simulação roda mês a mês: os juros do rotativo incidem sobre o saldo restante à taxa mensal informada, e o pagamento fixo é então aplicado para reduzir o saldo. Continua até zerar o saldo ou até 600 meses.',
    formulaSource: { label: 'Banco Central do Brasil: Juros do cartão de crédito', url: 'https://www.bcb.gov.br/estabilidadefinanceira/taxasjuroscredito' },
    example: 'Exemplo: uma fatura de R$ 3.000 no rotativo a 15% ao mês, pagando R$ 400/mês fixos, leva cerca de 10 meses para quitar e custa aproximadamente R$ 970 em juros — quase um terço do valor original da dívida.',
    faqs: [
      { q: 'Por que o rotativo do cartão é tão caro?', a: 'O rotativo do cartão de crédito tem historicamente uma das maiores taxas de juros do mercado brasileiro, muitas vezes acima de 400% ao ano, porque é crédito sem garantia e de curtíssimo prazo. Por lei, o rotativo só pode ser usado por até 30 dias — depois disso, o banco é obrigado a oferecer parcelamento da fatura com juros menores.' },
      { q: 'O que fazer se não consigo pagar a fatura inteira?', a: 'Evite entrar no rotativo sempre que possível. Se não conseguir pagar o total, procure imediatamente o parcelamento da fatura oferecido pelo próprio banco (juros bem menores que o rotativo) ou um empréstimo pessoal para quitar o cartão.' },
      { q: 'O parcelamento da fatura é melhor que o rotativo?', a: 'Quase sempre sim. Por regulação do Banco Central, os bancos são obrigados a oferecer o parcelamento da fatura com juros bem mais baixos que o rotativo (que pode passar de 400% ao ano) depois de um ciclo no rotativo. Ainda assim, compare a taxa oferecida com outras opções de crédito antes de aceitar.' },
    ],
    tips: [
      'Configure o pagamento mínimo automático como última linha de defesa, mas sempre tente pagar mais que o mínimo — mesmo R$ 50-100 extras por mês reduzem significativamente o tempo no rotativo.',
      'Evite usar um cartão novo para "resolver" a dívida de outro cartão sem uma taxa de juros comprovadamente menor — isso só transfere o problema e pode piorar sua situação de crédito.',
      'Considere cancelar ou reduzir o limite de cartões que você não controla bem o uso, principalmente se o rotativo já foi um problema recorrente no passado.',
    ],
    calcType: 'cartaoCredito',
  },
  {
    slug: 'calculadora-de-poupanca',
    title: 'Calculadora de Poupança (Regra Atual x SELIC/CDI)',
    shortTitle: 'Poupança',
    category: 'Investimentos',
    metaDescription: 'Calcule o rendimento da poupança pela regra oficial (vinculada à SELIC) e compare com um investimento a 100% do CDI.',
    intro: 'O rendimento da poupança no Brasil segue uma regra vinculada à taxa SELIC, e não é um percentual fixo. Esta calculadora aplica a regra atual e projeta seu saldo com aportes mensais, comparando com uma alternativa a 100% do CDI (comum em CDBs e Tesouro Selic).',
    formulaExplanation: 'Pela regra em vigor desde 2012: se a taxa SELIC anual for maior que 8,5%, a poupança rende 0,5% ao mês + TR (Taxa Referencial, geralmente próxima de zero). Se a SELIC for igual ou menor que 8,5% ao ano, a poupança rende 70% da SELIC + TR. O saldo projetado soma o crescimento composto do valor inicial com os aportes mensais.',
    formulaSource: { label: 'Banco Central do Brasil: Regras da poupança', url: 'https://www.bcb.gov.br/estabilidadefinanceira/poupanca' },
    example: 'Exemplo: com a SELIC a 10,5% ao ano (acima do gatilho de 8,5%), a poupança rende 0,5% ao mês (~6,17% ao ano). Um saldo de R$ 5.000 com aportes de R$ 300/mês por 5 anos renderia bem menos do que o mesmo valor investido a 100% do CDI no mesmo período.',
    faqs: [
      { q: 'A poupança ainda vale a pena?', a: 'Na maioria dos cenários com a SELIC acima de 8,5% ao ano, não — CDBs de bancos ou Tesouro Selic a 100% do CDI rendem mais e têm o mesmo Fundo Garantidor de Crédito (FGC) de proteção até R$ 250 mil por CPF/instituição. A vantagem da poupança é a isenção de Imposto de Renda para pessoa física, mas isso raramente compensa o rendimento menor.' },
      { q: 'A poupança tem Imposto de Renda?', a: 'Não, para pessoa física a poupança é isenta de Imposto de Renda sobre o rendimento — uma das poucas aplicações com essa característica no Brasil. Ainda assim, o rendimento líquido de outras aplicações (mesmo pagando IR) costuma superar a poupança quando a SELIC está alta.' },
      { q: 'O que é o Tesouro Selic e por que ele é comparado à poupança?', a: 'O Tesouro Selic é um título público que rende próximo de 100% da taxa SELIC, com liquidez diária e o mesmo baixo risco de crédito da poupança (na prática, risco do governo federal). É um dos concorrentes diretos mais citados da poupança porque costuma render mais mesmo após o desconto do Imposto de Renda regressivo.' },
    ],
    tips: [
      'Antes de deixar dinheiro parado na poupança por hábito, compare o rendimento projetado aqui com um CDB ou Tesouro Selic de liquidez diária no mesmo período — a diferença costuma surpreender.',
      'Reserve a poupança apenas para valores que você pode precisar sacar a qualquer momento sem perda de rendimento — para prazos mais longos, aplicações como CDB e Tesouro Direto tendem a ser mais eficientes.',
      'Fique de olho nas mudanças da taxa SELIC divulgadas pelo Banco Central a cada reunião do Copom — elas mudam diretamente o rendimento da poupança e de outras aplicações de renda fixa.',
    ],
    calcType: 'poupanca',
  },
];

export function getCalculatorBrBySlug(slug: string): CalculatorBr | undefined {
  return CALCULATORS_BR.find((c) => c.slug === slug);
}
