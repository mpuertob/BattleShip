import { Estado } from "./estado";
import { Coordenada } from "./coordenada";
export declare class Casilla {
    private _coordenada;
    private _estado;
    constructor(_coordenada: Coordenada, _estado: Estado);
    get coordenada(): Coordenada;
    get estado(): Estado;
    set coordenada(value: Coordenada);
    set estado(value: Estado);
}
