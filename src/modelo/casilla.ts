import { Estado } from "./estado";
import { Coordenada } from "./coordenada";

export class Casilla {
  constructor(private _coordenada: Coordenada, private _estado: Estado) {}

  public get coordenada(): Coordenada {
    return this._coordenada;
  }

  public get estado(): Estado {
    return this._estado;
  }

  public set coordenada(value: Coordenada) {
    this._coordenada = value;
  }

  public set estado(value: Estado) {
    this._estado = value;
  }
}
