// Generar una serie de barcos que no se solapan
// y que sortean la posicion inicial de cada barco
//y el sentido en que crecen
// Ademas el array de barcos creado asegura que ninguno se ha
// solapado.
//Necesita conocer la posicion maxima a la que puede desplegar un barco
//(max fila o columna)

import { Barco } from "./Barco";
import { Coordenada } from "./coordenada";
import { Dimension } from "./Dimension";
import { Sentido } from "./sentido";

export class GeneradorFlota {
  constructor(private _dimension: Dimension) {}

  public crearBarco(tamanoBarco: number): Barco {
    let sentidoBarco: Sentido;
    let coordenadaInicial: Coordenada;
    do {
      sentidoBarco = this.obtenerSentidoAleatorio();
      coordenadaInicial = this.crearCoordenadaInicial();
    } while (
      this.isDentroLimites(tamanoBarco, sentidoBarco, coordenadaInicial)
    );
    let barco: Barco = new Barco(tamanoBarco, coordenadaInicial, sentidoBarco);
    return barco;
  }
  private obtenerNumeroAleatorio(minimo: number, maximo: number): number {
    maximo += 1;
    let aleatorio: number = Math.random() * (maximo - minimo + minimo);
    return Math.floor(aleatorio);
  }

  private obtenerSentidoAleatorio(): Sentido {
    let sentido: Sentido;
    let numeroAleatorio = this.obtenerNumeroAleatorio(0, 1);
    if (numeroAleatorio == 1) {
      sentido = Sentido.abajo;
    } else {
      sentido = Sentido.derecha;
    }
    return sentido;
  }

  private crearCoordenadaInicial(): Coordenada {
    let x: number = this.obtenerNumeroAleatorio(0, this._dimension.ancho);
    let y: number = this.obtenerNumeroAleatorio(0, this._dimension.largo);
    let coordenadaInicial = new Coordenada(x, y);
    return coordenadaInicial;
  }
  private isDentroLimites(
    tamanoBarco: number,
    sentidoBarco: Sentido,
    coordenadaBarco: Coordenada
  ): boolean {
    let posicionBarco: number;
    let superaLimite: boolean = false;
    if (sentidoBarco == Sentido.abajo) {
      let y = coordenadaBarco.y;
      posicionBarco = tamanoBarco + y;
      let altura = this._dimension.largo;
      if (posicionBarco > altura) {
        superaLimite = true;
      }
    } else {
      let x = coordenadaBarco.x;
      posicionBarco = tamanoBarco + x;
      let anchura = this._dimension.ancho;
      if (posicionBarco > anchura) {
        superaLimite = true;
      }
    }
    return superaLimite;
  }
}
