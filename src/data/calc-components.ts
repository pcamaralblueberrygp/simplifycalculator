// Maps each calculator type to its widget component. Shared by the calculator
// pages and the embeddable /embed/ pages.
import type { CalcType } from './calculators';
import type { PtBrCalcType } from './calculators-pt-br';

import LoanCalculator from '../components/calculators/LoanCalculator.astro';
import MortgageCalculator from '../components/calculators/MortgageCalculator.astro';
import CompoundInterestCalculator from '../components/calculators/CompoundInterestCalculator.astro';
import SimpleInterestCalculator from '../components/calculators/SimpleInterestCalculator.astro';
import RoiCalculator from '../components/calculators/RoiCalculator.astro';
import SavingsGoalCalculator from '../components/calculators/SavingsGoalCalculator.astro';
import DebtPayoffCalculator from '../components/calculators/DebtPayoffCalculator.astro';
import RetirementCalculator from '../components/calculators/RetirementCalculator.astro';
import AmortizationCalculator from '../components/calculators/AmortizationCalculator.astro';
import CreditCardPayoffCalculator from '../components/calculators/CreditCardPayoffCalculator.astro';
import BudgetCalculator from '../components/calculators/BudgetCalculator.astro';
import NetWorthCalculator from '../components/calculators/NetWorthCalculator.astro';
import EmergencyFundCalculator from '../components/calculators/EmergencyFundCalculator.astro';
import InflationCalculator from '../components/calculators/InflationCalculator.astro';
import TipCalculator from '../components/calculators/TipCalculator.astro';
import SavingsInterestCalculator from '../components/calculators/SavingsInterestCalculator.astro';
import BreakEvenCalculator from '../components/calculators/BreakEvenCalculator.astro';
import RuleOf72Calculator from '../components/calculators/RuleOf72Calculator.astro';
import HourlyToSalaryCalculator from '../components/calculators/HourlyToSalaryCalculator.astro';
import DividendYieldCalculator from '../components/calculators/DividendYieldCalculator.astro';
import StockReturnCalculator from '../components/calculators/StockReturnCalculator.astro';
import RentVsBuyCalculator from '../components/calculators/RentVsBuyCalculator.astro';
import PaycheckCalculator from '../components/calculators/PaycheckCalculator.astro';
import DebtToIncomeCalculator from '../components/calculators/DebtToIncomeCalculator.astro';
import CollegeSavingsCalculator from '../components/calculators/CollegeSavingsCalculator.astro';
import HomeAffordabilityCalculator from '../components/calculators/HomeAffordabilityCalculator.astro';
import FreelanceRateCalculator from '../components/calculators/FreelanceRateCalculator.astro';
import FinanciamentoCalculator from '../components/calculators-pt-br/FinanciamentoCalculator.astro';
import FinanciamentoImobiliarioCalculator from '../components/calculators-pt-br/FinanciamentoImobiliarioCalculator.astro';
import TabelaPriceCalculator from '../components/calculators-pt-br/TabelaPriceCalculator.astro';
import SalarioLiquidoCalculator from '../components/calculators-pt-br/SalarioLiquidoCalculator.astro';
import CltVsPjCalculator from '../components/calculators-pt-br/CltVsPjCalculator.astro';
import JurosCompostosCalculator from '../components/calculators-pt-br/JurosCompostosCalculator.astro';
import OrcamentoMensalCalculator from '../components/calculators-pt-br/OrcamentoMensalCalculator.astro';
import AposentadoriaCalculator from '../components/calculators-pt-br/AposentadoriaCalculator.astro';
import QuitacaoDividasCalculator from '../components/calculators-pt-br/QuitacaoDividasCalculator.astro';
import CartaoCreditoCalculator from '../components/calculators-pt-br/CartaoCreditoCalculator.astro';
import PoupancaCalculator from '../components/calculators-pt-br/PoupancaCalculator.astro';

export const EN_CALC_COMPONENTS: Record<CalcType, any> = {
  loan: LoanCalculator,
  mortgage: MortgageCalculator,
  compoundInterest: CompoundInterestCalculator,
  simpleInterest: SimpleInterestCalculator,
  roi: RoiCalculator,
  savingsGoal: SavingsGoalCalculator,
  debtPayoff: DebtPayoffCalculator,
  retirement: RetirementCalculator,
  amortization: AmortizationCalculator,
  creditCardPayoff: CreditCardPayoffCalculator,
  budget: BudgetCalculator,
  netWorth: NetWorthCalculator,
  emergencyFund: EmergencyFundCalculator,
  inflation: InflationCalculator,
  tip: TipCalculator,
  savingsInterest: SavingsInterestCalculator,
  breakEven: BreakEvenCalculator,
  ruleOf72: RuleOf72Calculator,
  hourlyToSalary: HourlyToSalaryCalculator,
  dividendYield: DividendYieldCalculator,
  stockReturn: StockReturnCalculator,
  rentVsBuy: RentVsBuyCalculator,
  paycheck: PaycheckCalculator,
  debtToIncome: DebtToIncomeCalculator,
  collegeSavings: CollegeSavingsCalculator,
  homeAffordability: HomeAffordabilityCalculator,
  freelanceRate: FreelanceRateCalculator,
};

export const BR_CALC_COMPONENTS: Record<PtBrCalcType, any> = {
  financiamento: FinanciamentoCalculator,
  financiamentoImobiliario: FinanciamentoImobiliarioCalculator,
  tabelaPrice: TabelaPriceCalculator,
  salarioLiquido: SalarioLiquidoCalculator,
  cltVsPj: CltVsPjCalculator,
  jurosCompostos: JurosCompostosCalculator,
  orcamentoMensal: OrcamentoMensalCalculator,
  aposentadoria: AposentadoriaCalculator,
  quitacaoDividas: QuitacaoDividasCalculator,
  cartaoCredito: CartaoCreditoCalculator,
  poupanca: PoupancaCalculator,
};
