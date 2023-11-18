import { PaymentInfo } from '@prisma/client';

export class User {
  public id: string;
  public name: string;
  public createdAt: Date;
  public paymentInfo: PaymentInfo[];
  constructor(user: {
    id: string;
    name: string;
    createdAt: Date;
    paymentInfo: PaymentInfo[];
  }) {
    this.id = user.id;
    this.name = user.name;
    this.createdAt = user.createdAt;
    this.paymentInfo = user.paymentInfo;
  }
}
