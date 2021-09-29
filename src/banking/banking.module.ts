import { Module } from '@nestjs/common';
import { BankingServiceImpl } from './banking.serviceImpl';
import { BankingServiceImplMocked } from './bankingServiceImplMocked';

const NODE_ENV = process.env.NODE_ENV;

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'BankingService',
      useFactory: () => {
        if (['development', 'test'].includes(NODE_ENV)) {
          return new BankingServiceImplMocked();
        }
        return new BankingServiceImpl();
      },
    },
  ],
})
export class BankingModule {}
