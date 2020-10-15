"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var coordenada_1 = require("../modelo/coordenada");
var Dimension_1 = require("../modelo/Dimension");
var Tablero_1 = require("../modelo/Tablero");
var Juego = /** @class */ (function () {
    function Juego() {
        this._dimension = new Dimension_1.Dimension(8, 12);
        this._tablero = new Tablero_1.Tablero(this._dimension);
    }
    Juego.prototype.play = function () {
        alert("Bienvenido al juego de Hundir La Flota\nTenemos 2 barcos de 4 posiciones, 3 barcos de 3 posiciones y 4 barcos de 2 posiciones\nDimensiones: " + this._dimension.ancho + "*" + this._dimension.largo);
        do {
            alert(this._tablero.mostrarTablero());
            this._tablero.consultarCasilla(this.obtenerCoordenadaJugador());
        } while (!this._tablero.isHundidaTodaFlota());
    };
    Juego.prototype.obtenerCoordenadaJugador = function () {
        return new coordenada_1.Coordenada(this.solicitarPosicionX(), this.solicitarPosicionY());
    };
    Juego.prototype.solicitarPosicionX = function () {
        var posicionX;
        do {
            posicionX = prompt("Introduce posicion X");
            if (posicionX == null) {
                posicionX = 0;
            }
        } while (!this.comprobarPosicionCorrecta(posicionX, this._dimension.ancho));
        return posicionX - 1;
    };
    Juego.prototype.solicitarPosicionY = function () {
        var posicionY;
        do {
            posicionY = prompt("Introduce posicion Y");
            if (posicionY == null) {
                posicionY = 0;
            }
        } while (!this.comprobarPosicionCorrecta(posicionY, this._dimension.largo));
        return posicionY - 1;
    };
    Juego.prototype.comprobarPosicionCorrecta = function (posicion, limite) {
        var response = false;
        if (posicion >= 0 && posicion < limite) {
            response = true;
        }
        return response;
    };
    return Juego;
}());
exports.Juego = Juego;
//# sourceMappingURL=juego.js.map