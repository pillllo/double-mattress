export interface Transaction {
  id: number;
  transactionId: string;
  transactionType: string;
  userId: string;
  otherUserId: string;
  amount: number;
  currency: string;
  category: string;
  date: string;
  description: string;
  includeAvg: boolean;
}

export interface PieTransaction {
  name: string;
  value: number;
  color?: string;
}
