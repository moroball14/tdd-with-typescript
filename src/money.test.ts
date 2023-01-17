import { Dollar } from './dollar';
import { Franc } from './franc';
import { Money } from './money';

describe('MoneyTest', () => {
  it('equals', () => {
    expect(Franc.createInstance(5).equals(Dollar.createInstance(5))).toBe(
      false
    );
    expect(Franc.createInstance(10).equals(new Money(10, 'CHF'))).toBe(true);
  });
  it('currency', () => {
    expect(Dollar.createInstance(1).getCurrency()).toBe('USD');
    expect(Franc.createInstance(1).getCurrency()).toBe('CHF');
  });
});
