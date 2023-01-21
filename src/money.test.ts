import { Money } from './money';

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
    // expect(Money.franc(10).equals(new Money(10, 'CHF'))).toBe(true);
  });
  it('currency', () => {
    expect(Money.dollar(1).getCurrency()).toBe('USD');
    expect(Money.franc(1).getCurrency()).toBe('CHF');
  });
});
