export class Pair {
  constructor(private from: string, private to: string) {
    this.from = from;
    this.to = to;
  }

  public generateKey = () => {
    return `${this.from}-${this.to}`;
  };
}
