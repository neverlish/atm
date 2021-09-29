import { Module } from '@nestjs/common';
import { BankingServiceImpl } from './banking.serviceImpl';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'BankingService',
      useClass: BankingServiceImpl,
    },
  ],
})
export class BankingModule {}
