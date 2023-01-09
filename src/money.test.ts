import { Dollar } from './money';

describe('MoneyTest', () => {
  it('multiplication', () => {
    const five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});
