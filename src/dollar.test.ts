import { Dollar } from './dollar';

describe('DollarTest', () => {
  it('multiplication', () => {
    const five: Dollar = Dollar.createInstance(5);
    expect(five.times(2).equals(Dollar.createInstance(10))).toBe(true);
    expect(five.times(3).equals(Dollar.createInstance(15))).toBe(true);
    // クラス同士の比較は、equalsメソッドを経由して行う必要がある
    // ref: https://jestjs.io/docs/expect#toequalvalue
  });
  it('equals', () => {
    expect(Dollar.createInstance(5).equals(Dollar.createInstance(5))).toBe(
      true
    );
    expect(Dollar.createInstance(5).equals(Dollar.createInstance(6))).toBe(
      false
    );
  });
});
