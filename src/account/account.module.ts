import { Module } from '@nestjs/common';
import { AccountServiceImpl } from './account.serviceImpl';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'AccountService',
      useClass: AccountServiceImpl,
    },
  ],
})
export class AccountModule {}
