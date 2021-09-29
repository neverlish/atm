export interface BankingService {
  compareCardNumberAndPinNumber(
    cardNumber: string,
    pinNumber: string,
  ): Promise<void>;
}
