import { Injectable } from '@nestjs/common';
import { BankingService } from './banking.service';

@Injectable()
export class BankingServiceImpl implements BankingService {}
