export class Dimension {
  constructor(private _ancho: number, private _largo: number) {}

  public get ancho() {
    return this._ancho;
  }
  public get largo() {
    return this._largo;
  }
}
