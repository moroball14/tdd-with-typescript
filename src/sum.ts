import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';

export class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce = (bank: Bank, to: string): Money => {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  };

  public plus = (addend: Expression): Expression => {
    return new Sum(addend, addend);
  };
}
