import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { BankingModule } from 'src/banking/banking.module';
import { CardServiceImpl } from './card.serviceImpl';

@Module({
  imports: [BankingModule, AccountModule],
  controllers: [],
  providers: [
    {
      provide: 'CardService',
      useClass: CardServiceImpl,
    },
  ],
})
export class CardModule {}
