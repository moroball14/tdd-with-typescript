import { Expression } from './expression';
import { Money } from './money';
import { Pair } from './pair';

export class Bank {
  private rates: Map<string, number> = new Map();
  // eslint-disable-next-line
  constructor() {}
  public reduce = (source: Expression, to: string): Money => {
    return source.reduce(this, to);
  };

  public addRate = (from: string, to: string, rate: number): void => {
    this.rates.set(new Pair(from, to).generateKey(), rate);
    return;
  };

  public rate = (from: string, to: string): number => {
    if (from === to) return 1;
    const rate = this.rates.get(new Pair(from, to).generateKey());
    if (rate === undefined) throw new Error();
    return rate;
  };
}
