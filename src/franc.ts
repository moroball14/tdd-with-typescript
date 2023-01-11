export class Franc {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  public times = (multiplier: number): Franc => {
    return new Franc(this.amount * multiplier);
  };

  public equals = (franc: Franc): boolean => {
    return this.amount === franc.amount;
  };
}
