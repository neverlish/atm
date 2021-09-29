import { Account, Balance } from 'src/account/account.interface';

export interface BankingService {
  compareCardNumberAndPinNumber(
    cardNumber: string,
    pinNumber: string,
  ): Promise<void>;

  getAccounts(cardNumber: string): Promise<Account[]>;
  withdraw(accountNumber: string, money: number): Promise<Balance>;
  deposit(accountNumber: string, money: number): Promise<Balance>;
}
