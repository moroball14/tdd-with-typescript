export class Money {
  protected amount: number;
  protected currency: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public static dollar = (int: number): Money => {
    return new Money(int, 'USD');
  };

  public static franc = (int: number): Money => {
    return new Money(int, 'CHF');
  };

  public times = (multiplier: number): Money => {
    return new Money(this.amount * multiplier, this.currency);
  };

  public getCurrency = (): string => {
    return this.currency;
  };

  public equals = (money: Money): boolean => {
    return this.amount === money.amount && this.equalsCurrency(money);
  };

  private equalsCurrency = (money: Money): boolean => {
    return this.currency === money.currency;
  };
}
