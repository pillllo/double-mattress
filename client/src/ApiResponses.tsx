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
