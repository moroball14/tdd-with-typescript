import { Bank } from './bank';
import { Money } from './money';

export interface Expression {
  plus: (addend: Expression) => Expression;
  reduce: (bank: Bank, to: string) => Money;
}
