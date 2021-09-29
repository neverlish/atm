export type Balance = number;

export interface Account {
  name: string;
  number: string;
  cardNumber: string;
  balance: Balance;
}

export class MockedAccount implements Account {
  name: string;
  number: string;
  cardNumber: string;
  balance: Balance;

  constructor(name, number, cardNumber, balance) {
    this.name = name;
    this.number = number;
    this.cardNumber = cardNumber;
    this.balance = balance;
  }

  deposit(money: number) {
    this.balance += money;
  }

  withdraw(money: number) {
    if (this.balance - money < 0) {
      throw new Error('no money');
    }
    this.balance -= money;
  }
}
