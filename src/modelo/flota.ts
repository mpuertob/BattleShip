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
  public comprobarBarcosTotalesHundidos(numeroBarcosHundidos: number): number {
    let tocados: number;
    for (let i = 0; i < this._flota.length; i++) {
      tocados = 0;
      let longitudFlotaBarcos: number = this._flota[i].posiciones.length;
      for (let j = 0; j < longitudFlotaBarcos; j++) {
        let casilla: Casilla = this.getPosicionBarcoConcreto(i, j);
        if (casilla.estado == Estado.tocado) {
          tocados++;
        }
        if (tocados == longitudFlotaBarcos) {
          let barcoAhundir: Barco = this._flota[i];
          this.hundirBarco(barcoAhundir);
          numeroBarcosHundidos++;
          alert("Hundido");
        }
      }
    }
    return numeroBarcosHundidos;
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
  ): Casilla {
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
