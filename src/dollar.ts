import { Money } from './money';

export class Dollar extends Money {
  private constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  static createInstance(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }
}
