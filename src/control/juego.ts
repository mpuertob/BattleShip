import { Coordenada } from "../modelo/coordenada";
import { Dimension } from "../modelo/Dimension";
import { Tablero } from "../modelo/Tablero";

export class Juego {
  private _dimension: Dimension = new Dimension(8, 12);
  private _tablero: Tablero = new Tablero(this._dimension);

  public play(): void {
    alert(
      `Bienvenido al juego de Hundir La Flota\nTenemos 2 barcos de 4 posiciones, 3 barcos de 3 posiciones y 4 barcos de 2 posiciones\nDimensiones: ${this._dimension.ancho}*${this._dimension.largo}`
    );

    do {
      alert(this._tablero.mostrarTablero());
      this._tablero.consultarCasilla(this.obtenerCoordenadaJugador());
    } while (!this._tablero.isHundidaTodaFlota());
  }

  private obtenerCoordenadaJugador(): Coordenada {
    return new Coordenada(this.solicitarPosicionX(), this.solicitarPosicionY());
  }
  private solicitarPosicionX(): number {
    var posicionX: any;
    do {
      posicionX = prompt("Introduce posicion X");
      if (posicionX == null) {
        posicionX = 0;
      }
    } while (!this.comprobarPosicionCorrecta(posicionX, this._dimension.ancho));
    return posicionX - 1;
  }
  private solicitarPosicionY(): number {
    var posicionY: any;
    do {
      posicionY = prompt("Introduce posicion Y");
      if (posicionY == null) {
        posicionY = 0;
      }
    } while (!this.comprobarPosicionCorrecta(posicionY, this._dimension.largo));
    return posicionY - 1;
  }
  private comprobarPosicionCorrecta(posicion: number, limite: number): boolean {
    let response: boolean = false;
    if (posicion >= 0 && posicion < limite) {
      response = true;
    }
    return response;
  }
}
