import { Inject, Injectable } from '@nestjs/common';
import { BankingService } from 'src/banking/banking.service';
import { AccountService } from './account.service';

@Injectable()
export class AccountServiceImpl implements AccountService {
  @Inject('BankingServie') private bankingService: BankingService;

  async getAccounts(cardNumber: string) {
    return await this.bankingService.getAccounts(cardNumber);
  }

  async withdraw(accountNumber: string, money: number) {
    return await this.bankingService.withdraw(accountNumber, money);
  }

  async deposit(accountNumber: string, money: number) {
    return await this.bankingService.deposit(accountNumber, money);
  }
}
