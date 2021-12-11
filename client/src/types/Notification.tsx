export interface Notification {
<<<<<<< HEAD
  notificationId: string;
  fromUserId: string;
  forUserId?: string;
  fromUserName?: string;
=======
  id: string;
  from: string;
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
  date: Date;
  message: string;
  read:boolean;
}