export interface ISourceIncome {
  sourceIncomeID: string;
  name: string;
  amount: number;
  period: IPeriod; // Assuming you have a Period interface defined
}
