import { Dollar } from './dollar';
import { Franc } from './franc';

describe('MoneyTest', () => {
  it('equals', () => {
    expect(Franc.createInstance(5).equals(Dollar.createInstance(5))).toBe(
      false
    );
  });
});
