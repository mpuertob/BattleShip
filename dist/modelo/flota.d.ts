import { Barco } from "./Barco";
import { Dimension } from "./Dimension";
export declare class Flota {
    private _dimension;
    private _generadorFlota;
    private _flota;
    constructor(_dimension: Dimension);
    private crearFlotas;
    private getPosicionBarcoConcreto;
    private hundirBarco;
    get flota(): Barco[];
}
