export abstract class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  public equals = (money: Money): boolean => {
    return this.amount === money.amount && this.compareInstance(money);
  };

  protected abstract compareInstance(money: Money): boolean;
}
