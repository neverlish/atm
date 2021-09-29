import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { BankingModule } from './banking/banking.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [AccountModule, BankingModule, CardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
