export class Money {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  // memo: createInstanceっていうabstractでstaticな関数作りたいけど作れない。。
  // ref: https://github.com/microsoft/TypeScript/issues/34516

  public times = (multiplier: number): Money => {
    return new Money(this.amount * multiplier, this.currency);
  };

  public getCurrency = (): string => {
    return this.currency;
  };

  public equals = (money: Money): boolean => {
    return this.amount === money.amount && this.compareInstance(money);
  };

  private compareInstance = (money: Money): boolean => {
    return this.currency === money.currency;
  };
}
