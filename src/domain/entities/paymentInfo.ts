import { User } from '@domain/entities/user';

class PaymentInfo {
  id: number;
  cardNumber: string;
  nameOnCard: string;
  owner: User;
  ownerId: string;
  createdAt: Date;

  constructor(paymentInfo: {
    id: number;
    cardNumber: string;
    nameOnCard: string;
    owner: User;
    ownerId: string;
    createdAt: Date;
  }) {
    this.id = paymentInfo.id;
    this.cardNumber = paymentInfo.cardNumber;
    this.nameOnCard = paymentInfo.nameOnCard;
    this.owner = paymentInfo.owner;
    this.ownerId = paymentInfo.ownerId;
    this.createdAt = paymentInfo.createdAt;
  }
}
