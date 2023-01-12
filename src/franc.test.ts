import { Franc } from './franc';

describe('FrancTest', () => {
  it('multiplication', () => {
    const five: Franc = new Franc(5);
    expect(five.times(2).equals(new Franc(10))).toBe(true);
    expect(five.times(3).equals(new Franc(15))).toBe(true);
    // クラス同士の比較は、equalsメソッドを経由して行う必要がある
    // ref: https://jestjs.io/docs/expect#toequalvalue
  });
  it('equals', () => {
    expect(new Franc(5).equals(new Franc(5))).toBe(true);
    expect(new Franc(5).equals(new Franc(6))).toBe(false);
  });
});
