import { Dollar } from './dollar';
import { Franc } from './franc';

describe('MoneyTest', () => {
  it('equals', () => {
    expect(Franc.createInstance(5).equals(Dollar.createInstance(5))).toBe(
      false
    );
  });
  it('currency', () => {
    expect(Dollar.createInstance(1).getCurrency()).toBe('USD');
    expect(Franc.createInstance(1).getCurrency()).toBe('CHF');
  });
});
