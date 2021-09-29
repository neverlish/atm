import { Account, MockedAccount } from 'src/account/account.interface';

export const mockedCards = [
  {
    cardNumber: '1234-1234-1234',
    pinNumber: '123',
  },
  {
    cardNumber: '5674-5674-5674',
    pinNumber: '567',
  },
];

export const mockedAccounts: MockedAccount[] = [
  new MockedAccount('kim', '111', '1234-1234-1234', 0),
  new MockedAccount('lee', '222', '1234-1234-1234', 0),
  new MockedAccount('park', '333', '5674-5674-5674', 0),
];
