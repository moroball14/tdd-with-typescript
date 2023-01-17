import { Money } from './money';

export class Franc extends Money {
  private constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  static createInstance(amount: number): Franc {
    return new Franc(amount, 'CHF');
  }
}
