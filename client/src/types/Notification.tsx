export interface Notification {
  notificationId: string;
  fromUserId: string;
  forUserId?: string;
  fromUserName?: string;
  date: Date;
  message: string;
  read:boolean;
}