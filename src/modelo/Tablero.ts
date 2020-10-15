import { Barco } from "./Barco";
import { Casilla } from "./casilla";
import { Coordenada } from "./coordenada";
import { Dimension } from "./Dimension";
import { Estado } from "./estado";
import { Flota } from "./flota";

export class Tablero {
  private _dimension: Dimension;
  private _flota: Flota;
  private _tablero: Array<any>;
  private _barcosHundido: number = 0;
  constructor(dimension: Dimension) {
    this._dimension = dimension;
    this._flota = new Flota(this._dimension);
    this._tablero = new Array(this.ancho);
    this.montarTablero();
  }
  private montarTablero() {
    this.crearTablero();
    this.colocarFlota();
  }
  private crearTablero() {
    for (let index = 0; index < this.largo; index++) {
      this._tablero[index] = new Array(this.largo);
    }
  }
  private colocarFlota() {
    for (let i = 0; i < this.longitudFlotaCompleta; i++) {
      for (let j = 0; j < this.getLongitudBarcoFlotaConcreto(i); j++) {
        this.ponerFlota(
          this.getCoordenadaConcretaBarco(i, j),
          this.getBarcoConcretoFlota(i).posiciones[j]
        );
      }
    }
  }
  private ponerFlota(coordenada: Coordenada, casillaBarco: Casilla) {
    this._tablero[coordenada.x][coordenada.y] = casillaBarco;
  }
  public mostrarTablero(): String {
    let tablero: String = "   ";
    tablero += "     ";
    for (let j: number = 0; j < this.ancho; j++) {
      tablero += j + 1 + "  |  ";
    }
    tablero += "\n";
    for (let i: number = 0; i < this.largo; i++) {
      tablero += i + 1 + "  |   ";
      for (let j: number = 0; j < this.ancho; j++) {
        if (this._tablero[i][j] != undefined) {
          tablero += this.dibujarCasilla(this._tablero[i][j]);
        } else {
          tablero += "X  |  ";
        }
      }
      tablero += "\n";
    }

    return tablero;
  }

  private dibujarCasilla(_tablero: any) {
    if (_tablero == "A") {
      return "A  |  ";
    }
    if (_tablero.estado == Estado.indemne) {
      return "B  |  ";
    } else if (_tablero.estado == Estado.tocado) {
      return "T  |  ";
    } else {
      return "H  |  ";
    }
  }
  public consultarCasilla(coordenada: Coordenada) {
    let x: any = coordenada.x;
    let y: any = coordenada.y;
    let casilla = this._tablero[x][y];
    if (casilla == undefined) {
      alert("Agua");
      casilla = "A";
    } else if (casilla.estado == Estado.indemne) {
      alert("Tocado");
      casilla.estado = Estado.tocado;
      this._barcosHundido = this._flota.comprobarBarcosTotalesHundidos(
        this._barcosHundido
      );
    }
    return "";
  }

  public isHundidaTodaFlota() {
    return this._barcosHundido == this.longitudFlota;
  }
  public get tablero(): Array<number> {
    return this._tablero;
  }
  public get numeroBarcosHundidos(): number {
    return this._barcosHundido;
  }
  public set numeroBarcosHundidos(numero: number) {
    this._barcosHundido = numero;
  }
  private getBarcoConcretoFlota(posicion: number): Barco {
    return this._flota.flota[posicion];
  }
  private getLongitudBarcoFlotaConcreto(posicion: number): number {
    return this.getBarcoConcretoFlota(posicion).size;
  }
  private get flotaCompleta(): Barco[] {
    return this._flota.flota;
  }
  private get longitudFlotaCompleta(): number {
    return this.flotaCompleta.length;
  }
  private get ancho(): number {
    return this._dimension.ancho;
  }
  private get largo(): number {
    return this._dimension.largo;
  }
  private getCoordenadaConcretaBarco(
    index: number,
    posicion: number
  ): Coordenada {
    return this.getBarcoConcretoFlota(index).posiciones[posicion].coordenada;
  }
  private get longitudFlota() {
    return this._flota.flota.length;
  }
}
