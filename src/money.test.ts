import { Dollar } from './money';

describe('MoneyTest', () => {
  it('multiplication', () => {
    const five: Dollar = new Dollar(5);
    const product: Dollar = five.times(2);
    expect(product.amount).toBe(10);
    const product2: Dollar = five.times(3);
    expect(product2.amount).toBe(15);
  });
});
