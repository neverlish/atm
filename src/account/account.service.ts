import { Account, Balance } from './account.interface';

export interface AccountService {
  getAccounts(cardNumber: string): Promise<Account[]>;
  withdraw(accountNumber: string, money: number): Promise<Balance>;
  deposit(accountNumber: string, money: number): Promise<Balance>;
}
