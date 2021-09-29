import { Module } from '@nestjs/common';
import { CardServiceImpl } from './card.serviceImpl';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'CardService',
      useClass: CardServiceImpl,
    },
  ],
})
export class CardModule {}
