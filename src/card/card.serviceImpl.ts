import { Inject, Injectable } from '@nestjs/common';

import { Account } from 'src/account/account.interface';
import { AccountService } from 'src/account/account.service';
import { BankingService } from 'src/banking/banking.service';
import { CardService } from './card.service';

@Injectable()
export class CardServiceImpl implements CardService {
  @Inject('BankingServie') private bankingService: BankingService;
  @Inject('AccountService') private accountService: AccountService;

  async getCardAccounts(
    cardNumber: string,
    pinNumber: string,
  ): Promise<Account[]> {
    await this.bankingService.compareCardNumberAndPinNumber(
      cardNumber,
      pinNumber,
    );

    return await this.accountService.getAccounts(cardNumber);
  }
}
