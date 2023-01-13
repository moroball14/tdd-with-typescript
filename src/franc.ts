import { Money } from './money';

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  public times = (multiplier: number): Franc => {
    return new Franc(this.amount * multiplier);
  };

  protected compareInstance = (money: Money) => {
    return this instanceof Franc && money instanceof Franc;
  };
}
