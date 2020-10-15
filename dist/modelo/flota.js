"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flota = void 0;
var estado_1 = require("./estado");
var generadorFlota_1 = require("./generadorFlota");
/*Es la clase
que contiene todos los barcos
*/
var Flota = /** @class */ (function () {
    function Flota(_dimension) {
        this._dimension = _dimension;
        this._flota = [];
        this._generadorFlota = new generadorFlota_1.GeneradorFlota(this._dimension);
        this.crearFlotas();
    }
    Flota.prototype.comprobarBarcosTotalesHundidos = function (numeroBarcosHundidos) {
        var tocados;
        for (var i = 0; i < this._flota.length; i++) {
            tocados = 0;
            var longitudFlotaBarcos = this._flota[i].posiciones.length;
            for (var j = 0; j < longitudFlotaBarcos; j++) {
                var casilla = this.getPosicionBarcoConcreto(i, j);
                if (casilla.estado == estado_1.Estado.tocado) {
                    tocados++;
                }
                if (tocados == longitudFlotaBarcos) {
                    var barcoAhundir = this._flota[i];
                    this.hundirBarco(barcoAhundir);
                    numeroBarcosHundidos++;
                    alert("Hundido");
                }
            }
        }
        return numeroBarcosHundidos;
    };
    Flota.prototype.crearFlotas = function () {
        var tamanoBarcos = [2, 2, 2, 2, 3, 3, 3, 4, 4];
        for (var i = 0; i < tamanoBarcos.length; i++) {
            var barco = this._generadorFlota.crearBarco(tamanoBarcos[i]);
            this._flota.push(barco);
        }
    };
    Flota.prototype.getPosicionBarcoConcreto = function (posicionBarco, posicionCasilla) {
        return this._flota[posicionBarco].posiciones[posicionCasilla];
    };
    Flota.prototype.hundirBarco = function (barco) {
        var casillasBarco = barco.posiciones;
        for (var i = 0; i < casillasBarco.length; i++) {
            var casilla = casillasBarco[i];
            casilla.estado = estado_1.Estado.hundido;
        }
    };
    Object.defineProperty(Flota.prototype, "flota", {
        get: function () {
            return this._flota;
        },
        enumerable: false,
        configurable: true
    });
    return Flota;
}());
exports.Flota = Flota;
//# sourceMappingURL=flota.js.map