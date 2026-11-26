// ---------------------------------------------------------------------------
// Regras de INSS e IRRF (empregado CLT) vigentes em 2026. Fonte única para as
// calculadoras PT-BR — atualize aqui quando as tabelas mudarem.
//
// INSS: Portaria Interministerial MPS/MF nº 13, de 09/01/2026
//   https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal
// IRRF: tabela mensal 2026 + redução da Lei nº 15.270/2025
//   https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026
//   https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/exemplos-de-aplicacao-da-lei-15-270-2025
// ---------------------------------------------------------------------------

export const ANO_TABELAS = 2026;
export const SALARIO_MINIMO = 1621.0;

/** Faixas progressivas do INSS (teto de cada faixa, alíquota). */
export const INSS_FAIXAS: [number, number][] = [
  [1621.0, 0.075],
  [2902.84, 0.09],
  [4354.27, 0.12],
  [8475.55, 0.14],
];
export const INSS_TETO = 8475.55;

/** Tabela progressiva mensal do IRRF (limite superior, alíquota, parcela a deduzir). */
export const IRRF_FAIXAS: [number, number, number][] = [
  [2428.8, 0, 0],
  [2826.65, 0.075, 182.16],
  [3751.05, 0.15, 394.16],
  [4664.68, 0.225, 675.49],
  [Infinity, 0.275, 908.73],
];
export const DEDUCAO_DEPENDENTE = 189.59;
export const DESCONTO_SIMPLIFICADO = 607.2;

/** INSS do empregado, calculado faixa a faixa e limitado ao teto. */
export function calcularInss(bruto: number): number {
  let total = 0;
  let anterior = 0;
  for (const [teto, aliquota] of INSS_FAIXAS) {
    if (bruto <= anterior) break;
    total += (Math.min(bruto, teto) - anterior) * aliquota;
    anterior = teto;
  }
  return Math.round(total * 100) / 100;
}

/** Imposto pela tabela progressiva, antes da redução da Lei 15.270. */
export function impostoTabela(base: number): number {
  for (const [limite, aliquota, deducao] of IRRF_FAIXAS) {
    if (base <= limite) return Math.max(0, base * aliquota - deducao);
  }
  return 0;
}

/** Redução da Lei 15.270/2025, calculada sobre o rendimento bruto (não sobre a base). */
export function reducaoLei15270(rendimentoBruto: number, impostoDevido: number): number {
  let reducao = 0;
  if (rendimentoBruto <= 5000) reducao = 312.89;
  else if (rendimentoBruto <= 7350) reducao = Math.max(0, 978.62 - 0.133145 * rendimentoBruto);
  return Math.min(reducao, impostoDevido);
}

export interface ResultadoIrrf {
  base: number;
  usouDescontoSimplificado: boolean;
  impostoTabela: number;
  reducao: number;
  irrf: number;
}

/**
 * IRRF mensal: base = bruto − maior entre (INSS + dependentes + outras deduções legais)
 * e o desconto simplificado; aplica a tabela e depois a redução da Lei 15.270.
 */
export function calcularIrrf(bruto: number, inss: number, dependentes = 0, outrasDeducoes = 0): ResultadoIrrf {
  const deducoesLegais = inss + dependentes * DEDUCAO_DEPENDENTE + outrasDeducoes;
  const usouDescontoSimplificado = DESCONTO_SIMPLIFICADO > deducoesLegais;
  const base = Math.max(0, bruto - Math.max(deducoesLegais, DESCONTO_SIMPLIFICADO));
  const imposto = impostoTabela(base);
  const reducao = reducaoLei15270(bruto, imposto);
  const irrf = Math.round((imposto - reducao) * 100) / 100;
  return { base, usouDescontoSimplificado, impostoTabela: imposto, reducao, irrf: Math.max(0, irrf) };
}
