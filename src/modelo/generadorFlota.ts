// Generar una serie de barcos que no se solapan
// y que sortean la posicion inicial de cada barco
//y el sentido en que crecen
// Ademas el array de barcos creado asegura que ninguno se ha
// solapado.
//Necesita conocer la posicion maxima a la que puede desplegar un barco
//(max fila o columna)

import { Dimension } from "./Dimension";

export class GeneradorFlota {
  constructor(private _dimension: Dimension) {}

  private obtenerNumeroAleatorio(minimo: number, maximo: number): number {
    maximo += 1;
    let aleatorio: number = Math.random() * (maximo - minimo + minimo);
    return Math.floor(aleatorio);
  }
}
