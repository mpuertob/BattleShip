import { Barco } from "./Barco";
import { Dimension } from "./Dimension";
import { GeneradorFlota } from "./generadorFlota";

/*Es la clase
que contiene todos los barcos 
*/
export class Flota {
  private _generadorFlota: GeneradorFlota;
  private _flota: Barco[] = [];
  constructor(private _dimension: Dimension) {
    this._generadorFlota = new GeneradorFlota(this._dimension);
    this.crearFlotas();
  }

  private crearFlotas(): void {
    const tamanoBarcos = [2, 2, 2, 2, 3, 3, 3, 4, 4];
    for (let i = 0; i < tamanoBarcos.length; i++) {
      let barco: Barco = this._generadorFlota.crearBarco(tamanoBarcos[i]);
      this._flota.push(barco);
    }
  }
}
