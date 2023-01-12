export abstract class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  public equals = (dollar: Money): boolean => {
    return this.amount === dollar.amount;
  };
}
