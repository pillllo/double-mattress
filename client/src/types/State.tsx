import { Transaction } from "../types/Transaction";
export interface State {
  transactions: Transaction[] | [];
  incomes: Transaction[] | [];
  expenses: Transaction[] | [];
  switch: boolean;
  date: Date;
};