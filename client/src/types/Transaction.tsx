export interface Transaction {
  _id: number;
  transactionId: string;
  transactionType: string;
  userId: string;
  otherUserId: string;
  amount: number;
  currency: string;
  category: string;
  date: number;
  description: string;
  includeAvg: boolean;
}

export interface PieTransaction {
  name: string;
  value: number;
}
