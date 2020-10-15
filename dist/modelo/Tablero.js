"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
var estado_1 = require("./estado");
var flota_1 = require("./flota");
var Tablero = /** @class */ (function () {
    function Tablero(dimension) {
        this._barcosHundido = 0;
        this._dimension = dimension;
        this._flota = new flota_1.Flota(this._dimension);
        this._tablero = new Array(this.ancho);
        this.montarTablero();
    }
    Tablero.prototype.montarTablero = function () {
        this.crearTablero();
        this.colocarFlota();
    };
    Tablero.prototype.crearTablero = function () {
        for (var index = 0; index < this.largo; index++) {
            this._tablero[index] = new Array(this.largo);
        }
    };
    Tablero.prototype.colocarFlota = function () {
        for (var i = 0; i < this.longitudFlotaCompleta; i++) {
            for (var j = 0; j < this.getLongitudBarcoFlotaConcreto(i); j++) {
                this.ponerFlota(this.getCoordenadaConcretaBarco(i, j), this.getBarcoConcretoFlota(i).posiciones[j]);
            }
        }
    };
    Tablero.prototype.ponerFlota = function (coordenada, casillaBarco) {
        this._tablero[coordenada.x][coordenada.y] = casillaBarco;
    };
    Tablero.prototype.mostrarTablero = function () {
        var tablero = "   ";
        tablero += "     ";
        for (var j = 0; j < this.ancho; j++) {
            tablero += j + 1 + "  |  ";
        }
        tablero += "\n";
        for (var i = 0; i < this.largo; i++) {
            tablero += i + 1 + "  |   ";
            for (var j = 0; j < this.ancho; j++) {
                if (this._tablero[i][j] != undefined) {
                    tablero += this.dibujarCasilla(this._tablero[i][j]);
                }
                else {
                    tablero += "X  |  ";
                }
            }
            tablero += "\n";
        }
        return tablero;
    };
    Tablero.prototype.dibujarCasilla = function (_tablero) {
        if (_tablero == "A") {
            return "A  |  ";
        }
        if (_tablero.estado == estado_1.Estado.indemne) {
            return "B  |  ";
        }
        else if (_tablero.estado == estado_1.Estado.tocado) {
            return "T  |  ";
        }
        else {
            return "H  |  ";
        }
    };
    Tablero.prototype.consultarCasilla = function (coordenada) {
        var x = coordenada.x;
        var y = coordenada.y;
        var casilla = this._tablero[x][y];
        if (casilla == undefined) {
            alert("Agua");
            casilla = "A";
        }
        else if (casilla.estado == estado_1.Estado.indemne) {
            alert("Tocado");
            casilla.estado = estado_1.Estado.tocado;
            this._barcosHundido = this._flota.comprobarBarcosTotalesHundidos(this._barcosHundido);
        }
        return "";
    };
    Tablero.prototype.isHundidaTodaFlota = function () {
        return this._barcosHundido == this.longitudFlota;
    };
    Object.defineProperty(Tablero.prototype, "tablero", {
        get: function () {
            return this._tablero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablero.prototype, "numeroBarcosHundidos", {
        get: function () {
            return this._barcosHundido;
        },
        set: function (numero) {
            this._barcosHundido = numero;
        },
        enumerable: false,
        configurable: true
    });
    Tablero.prototype.getBarcoConcretoFlota = function (posicion) {
        return this._flota.flota[posicion];
    };
    Tablero.prototype.getLongitudBarcoFlotaConcreto = function (posicion) {
        return this.getBarcoConcretoFlota(posicion).size;
    };
    Object.defineProperty(Tablero.prototype, "flotaCompleta", {
        get: function () {
            return this._flota.flota;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablero.prototype, "longitudFlotaCompleta", {
        get: function () {
            return this.flotaCompleta.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablero.prototype, "ancho", {
        get: function () {
            return this._dimension.ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tablero.prototype, "largo", {
        get: function () {
            return this._dimension.largo;
        },
        enumerable: false,
        configurable: true
    });
    Tablero.prototype.getCoordenadaConcretaBarco = function (index, posicion) {
        return this.getBarcoConcretoFlota(index).posiciones[posicion].coordenada;
    };
    Object.defineProperty(Tablero.prototype, "longitudFlota", {
        get: function () {
            return this._flota.flota.length;
        },
        enumerable: false,
        configurable: true
    });
    return Tablero;
}());
exports.Tablero = Tablero;
//# sourceMappingURL=Tablero.js.map