import { Money } from './money';

export class Dollar extends Money {
  private constructor(amount: number) {
    super(amount);
  }

  static createInstance(amount: number): Dollar {
    return new Dollar(amount);
  }

  public times = (multiplier: number): Dollar => {
    return new Dollar(this.amount * multiplier);
  };

  protected compareInstance = (money: Money) => {
    return this instanceof Dollar && money instanceof Dollar;
  };
}
