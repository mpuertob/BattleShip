import { Coordenada } from "./coordenada";
import { Dimension } from "./Dimension";
export declare class Tablero {
    private _dimension;
    private _flota;
    private _tablero;
    private _barcosHundido;
    constructor(dimension: Dimension);
    private montarTablero;
    private crearTablero;
    private colocarFlota;
    private ponerFlota;
    mostrarTablero(): String;
    private dibujarCasilla;
    consultarCasilla(coordenada: Coordenada): string;
    isHundidaTodaFlota(): boolean;
    get tablero(): Array<number>;
    get numeroBarcosHundidos(): number;
    set numeroBarcosHundidos(numero: number);
    private getBarcoConcretoFlota;
    private getLongitudBarcoFlotaConcreto;
    private get flotaCompleta();
    private get longitudFlotaCompleta();
    private get ancho();
    private get largo();
    private getCoordenadaConcretaBarco;
    private get longitudFlota();
}
