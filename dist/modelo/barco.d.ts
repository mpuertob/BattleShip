import { Coordenada } from "./coordenada";
import { Casilla } from "./casilla";
import { Sentido } from "./sentido";
export declare class Barco {
    private _size;
    private _posiciones;
    constructor(_size: number, inicial: Coordenada, direccion: Sentido);
    private crearBarco;
    compruebaSolapamiento(casilla: Casilla[]): boolean;
    get size(): number;
    getCoordenada(posicion: number): Coordenada;
    get posiciones(): Casilla[];
}
