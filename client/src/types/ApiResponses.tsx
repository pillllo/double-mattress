import { Transaction } from "./Transaction";

export type Category = "Income" | "Expense";
export type ExpenseCategory =
  | "Income"
  | "Rent"
  | "Bills and Services"
  | "Shopping"
  | "Entertainment"
  | "Eating Out"
  | "Others";

export interface SentTransaction {
  transactionType: string;
  userId: string;
  otherUserIds: string;
  amount: number;
  currency: string;
  category: Category;
  date: Date;
  description: string;
  includeAvg: boolean;
}

export interface RecieveTransaction {
  transactionId: string;
  transactionType: string;
  userId: string;
  otherUserIds: string;
  amount: number;
  currency: string;
  category: Category;
  date: Date;
  description: string;
  includeAvg: boolean;
}

export interface User {
  userId: string;
  userName: string;
  currency: string;
  linkedUserIds: string[];
}

export interface ProjectionSavings {
  totalSinceJoining: number;
  monthlySavings: number;
}
export interface ProjectionTypeAverages {
  income: number;
  expenses: number;
}

export interface ProjectionCategoryAverages {
  rent: number;
  billsAndServices: number;
  shopping: number;
  entertainment: number;
  eatingOut: number;
  others: number;
}
export interface ProjectionMonth {
  month: string;
}
export interface ProjectionProjectedChanges {
  transactions: Transaction[];
}
export interface ProjectionApiResponse {
  savings: ProjectionSavings;
  typeAverages: ProjectionTypeAverages;
  categoryAverages: ProjectionCategoryAverages;
  month: ProjectionMonth;
  projectedChanges: Transaction[];
}
