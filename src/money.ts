export abstract class Money {
  protected amount: number;
  protected constructor(amount: number) {
    this.amount = amount;
  }

  // memo: createInstanceっていうabstractでstaticな関数作りたいけど作れない。。
  // ref: https://github.com/microsoft/TypeScript/issues/34516

  abstract times(multiplier: number): Money;

  public equals = (money: Money): boolean => {
    return this.amount === money.amount && this.compareInstance(money);
  };

  protected abstract compareInstance(money: Money): boolean;
}
