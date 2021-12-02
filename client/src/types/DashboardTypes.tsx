import { Transaction } from "./Transaction";

export interface DashboardResponseObject {
  transactions: Transaction[];
  categoryTotals: DashboardCategoryTotals;
  typeTotals: DashboardTypeTotals;
  savings: DashboardSavingsTotals;
}

export interface DashboardCategoryTotals {
  salary: {
    [key: string]: number;
  };
  otherIncome: {
    [key: string]: number;
  };
  home: {
    [key: string]: number;
  };
  billsAndServices: {
    [key: string]: number;
  };
  shopping: {
    [key: string]: number;
  };
  entertainment: {
    [key: string]: number;
  };
  eatingOut: {
    [key: string]: number;
  };
  other: {
    [key: string]: number;
  };
}

export interface DashboardTypeTotals {
  income: {
    [key: string]: number;
  };
  expense: {
    [key: string]: number;
  };
}

export interface DashboardSavingsTotals {
  currentMonth: number;
  monthlyAverageSinceJoining: number;
  totalSinceJoining: number;
}
