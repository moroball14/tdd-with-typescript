import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';
import { Sum } from './sum';

describe('MoneyTest', () => {
  it('multiplication', () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);
    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
    // クラス同士の比較は、equalsメソッドを経由して行う必要がある
    // ref: https://jestjs.io/docs/expect#toequalvalue
  });
  it('equals', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });
  it('currency', () => {
    expect(Money.dollar(1).getCurrency()).toBe('USD');
    expect(Money.franc(1).getCurrency()).toBe('CHF');
  });
  it('simple add', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(reduced.equals(Money.dollar(10))).toBe(true);
  });
  it('plus return sum', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum: Sum = result as Sum;
    expect(five.equals(sum.augend)).toBe(true);
    expect(five.equals(sum.addend)).toBe(true);
  });
  it('reduce sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expect(result.equals(Money.dollar(7))).toBe(true);
  });
  it('reduce money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(result.equals(Money.dollar(1))).toBe(true);
  });
});
