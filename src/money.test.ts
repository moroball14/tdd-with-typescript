import { Bank } from './bank';
import { Expression } from './expression';
import { Money } from './money';
import { Sum } from './sum';

describe('MoneyTest', () => {
  it('multiplication', () => {
    const five: Money = Money.dollar(5);
    expect((five.times(2) as Money).equals(Money.dollar(10))).toBe(true);
    expect((five.times(3) as Money).equals(Money.dollar(15))).toBe(true);
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
    expect(five.equals(sum.augend as Money)).toBe(true);
    expect(five.equals(sum.addend as Money)).toBe(true);
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
  it('reduce money different currency', () => {
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(Money.franc(2), 'USD');
    expect(result.equals(Money.dollar(1))).toBe(true);
  });
  it('identity rate', () => {
    expect(new Bank().rate('USD', 'USD')).toBe(1);
  });
  it('mixed addition', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expect(result.equals(Money.dollar(10))).toBe(true);
  });
  it('sum plus money', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result: Money = bank.reduce(sum, 'USD');
    expect(result.equals(Money.dollar(15))).toBe(true);
  });
  it('sum times', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const sum = new Sum(fiveBucks, tenFrancs).times(2);
    const result: Money = bank.reduce(sum, 'USD');
    expect(result.equals(Money.dollar(20))).toBe(true);
  });
});
