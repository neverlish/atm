import { Injectable } from '@nestjs/common';
import { BankingService } from './banking.service';

const mockedCards = [
  {
    cardNumber: '1234-1234-1234',
    pinNumber: '123',
  },
  {
    cardNumber: '5674-5674-5674',
    pinNumber: '567',
  },
];

@Injectable()
export class BankingServiceImplMocked implements BankingService {
  async compareCardNumberAndPinNumber(cardNumber: string, pinNumber: string) {
    const card = this.getCardByCardNumber(cardNumber);
    if (card.pinNumber === pinNumber) {
      return;
    } else {
      throw new Error('pin number not valid');
    }
  }

  private getCardByCardNumber(cardNumber: string) {
    const card = mockedCards.find((card) => card.cardNumber === cardNumber);
    if (!card) {
      throw new Error('card not found');
    }
    return card;
  }
}
