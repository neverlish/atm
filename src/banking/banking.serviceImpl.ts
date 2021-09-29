import { Injectable } from '@nestjs/common';
import { BankingService } from './banking.service';

@Injectable()
export class BankingServiceImpl implements BankingService {
  async compareCardNumberAndPinNumber(cardNumber: string, pinNumber: string) {
    // TODO: implement request to real bank
    return;
  }

  async getAccounts(cardNumber: string) {
    // TODO: implement request to real bank
    return [];
  }

  async withdraw(accountNumber: string, money: number) {
    // TODO: implement request to real bank
    return 0;
  }

  async deposit(accountNumber: string, money: number) {
    // TODO: implement request to real bank
    return 0;
  }
}
