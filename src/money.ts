export abstract class Money {
  protected amount: number;
  protected currency: string;
  protected constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  // memo: createInstanceっていうabstractでstaticな関数作りたいけど作れない。。
  // ref: https://github.com/microsoft/TypeScript/issues/34516

  abstract times(multiplier: number): Money;

  public getCurrency = (): string => {
    return this.currency;
  };

  public equals = (money: Money): boolean => {
    return this.amount === money.amount && this.compareInstance(money);
  };

  protected abstract compareInstance(money: Money): boolean;
}

// flyweightパターンとは何か？
