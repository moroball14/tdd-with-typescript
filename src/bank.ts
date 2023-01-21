import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  // eslint-disable-next-line
  constructor() {}
  public reduce = (source: Expression, to: string): Money => {
    return source.reduce(to);
  };
}
