import { Expression } from './expression';
import { Money } from './money';

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce = (to: string): Money => {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  };
}
