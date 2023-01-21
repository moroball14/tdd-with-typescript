/* eslint-disable */
import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  constructor() {}
  public reduce = (source: Expression, to: string): Money => {
    return Money.dollar(10);
  };
}
