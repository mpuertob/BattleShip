import { Barco } from "./Barco";
import { Dimension } from "./Dimension";
export declare class GeneradorFlota {
    private _dimension;
    constructor(_dimension: Dimension);
    crearBarco(tamanoBarco: number): Barco;
    private obtenerNumeroAleatorio;
    private obtenerSentidoAleatorio;
    private crearCoordenadaInicial;
    private isDentroLimites;
}
