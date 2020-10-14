import { Barco } from "./Barco";
import { Casilla } from "./casilla";
import { Coordenada } from "./coordenada";
import { Dimension } from "./Dimension";
import { Estado } from "./estado";
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

  private getPosicionBarcoConcreto(
    posicionBarco: number,
    posicionCasilla: number
  ) {
    return this._flota[posicionBarco].posiciones[posicionCasilla];
  }

  private hundirBarco(barco: Barco) {
    let casillasBarco: Casilla[] = barco.posiciones;
    for (let i = 0; i < casillasBarco.length; i++) {
      let casilla: Casilla = casillasBarco[i];
      casilla.estado = Estado.hundido;
    }
  }
  public get flota() {
    return this._flota;
  }
}
