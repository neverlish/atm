import { Injectable } from '@nestjs/common';
import { BankingService } from './banking.service';

@Injectable()
export class BankingServiceImpl implements BankingService {
  async compareCardNumberAndPinNumber(cardNumber: string, pinNumber: string) {
    // TODO: implement request to real bank
    return;
  }
}
