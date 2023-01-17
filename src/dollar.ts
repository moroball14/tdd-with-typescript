import { Money } from './money';

export class Dollar extends Money {
  private constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  static createInstance(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }

  public times = (multiplier: number): Dollar => {
    return Dollar.createInstance(this.amount * multiplier);
  };

  protected compareInstance = (money: Money) => {
    return this instanceof Dollar && money instanceof Dollar;
  };
}
