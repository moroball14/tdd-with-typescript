import { Franc } from './franc';

describe('FrancTest', () => {
  it('multiplication', () => {
    const five: Franc = Franc.createInstance(5);
    expect(five.times(2).equals(Franc.createInstance(10))).toBe(true);
    expect(five.times(3).equals(Franc.createInstance(15))).toBe(true);
    // クラス同士の比較は、equalsメソッドを経由して行う必要がある
    // ref: https://jestjs.io/docs/expect#toequalvalue
  });
  it('equals', () => {
    expect(Franc.createInstance(5).equals(Franc.createInstance(5))).toBe(true);
    expect(Franc.createInstance(5).equals(Franc.createInstance(6))).toBe(false);
  });
});
