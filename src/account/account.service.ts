import { Account } from './account.interface';

export interface AccountService {
  getAccounts(cardNumber: string): Promise<Account[]>;
}
