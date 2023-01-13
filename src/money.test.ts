import { Dollar } from './dollar';
import { Franc } from './franc';

describe('MoneyTest', () => {
  it('equals', () => {
    expect(new Franc(5).equals(new Dollar(5))).toBe(false);
  });
});
