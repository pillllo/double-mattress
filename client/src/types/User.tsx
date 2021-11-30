export interface User {
  userId: string;
  firstName: string;
  paid: boolean;
  currency: string;
  linkedUserId: string;
}
export interface PieUser {
  name: string;
  value: number;
  color?: string;
}
