import { Injectable } from '@nestjs/common';
import { BankingService } from './banking.service';
import { mockedAccounts, mockedCards } from './__fixtures__/mock';

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

  async getAccounts(cardNumber: string) {
    return mockedAccounts.filter((ac) => ac.cardNumber === cardNumber);
  }

  async withdraw(accountNumber: string, money: number) {
    return 0;
  }

  async deposit(accountNumber: string, money: number) {
    return 0;
  }
}
