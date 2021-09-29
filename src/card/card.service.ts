import { Account } from '../account/account.interface';

export interface CardService {
  getCardAccounts(cardNumber: string, pinNumber: string): Promise<Account[]>;
}
