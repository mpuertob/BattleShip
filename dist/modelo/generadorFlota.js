"use strict";
// Generar una serie de barcos que no se solapan
// y que sortean la posicion inicial de cada barco
//y el sentido en que crecen
// Ademas el array de barcos creado asegura que ninguno se ha
// solapado.
//Necesita conocer la posicion maxima a la que puede desplegar un barco
//(max fila o columna)
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneradorFlota = void 0;
var Barco_1 = require("./Barco");
var coordenada_1 = require("./coordenada");
var sentido_1 = require("./sentido");
var GeneradorFlota = /** @class */ (function () {
    function GeneradorFlota(_dimension) {
        this._dimension = _dimension;
    }
    GeneradorFlota.prototype.crearBarco = function (tamanoBarco) {
        var sentidoBarco;
        var coordenadaInicial;
        do {
            sentidoBarco = this.obtenerSentidoAleatorio();
            coordenadaInicial = this.crearCoordenadaInicial();
        } while (this.isDentroLimites(tamanoBarco, sentidoBarco, coordenadaInicial));
        var barco = new Barco_1.Barco(tamanoBarco, coordenadaInicial, sentidoBarco);
        return barco;
    };
    GeneradorFlota.prototype.obtenerNumeroAleatorio = function (minimo, maximo) {
        maximo += 1;
        var aleatorio = Math.random() * (maximo - minimo + minimo);
        return Math.floor(aleatorio);
    };
    GeneradorFlota.prototype.obtenerSentidoAleatorio = function () {
        var sentido;
        var numeroAleatorio = this.obtenerNumeroAleatorio(0, 1);
        if (numeroAleatorio == 1) {
            sentido = sentido_1.Sentido.abajo;
        }
        else {
            sentido = sentido_1.Sentido.derecha;
        }
        return sentido;
    };
    GeneradorFlota.prototype.crearCoordenadaInicial = function () {
        var x = this.obtenerNumeroAleatorio(0, this._dimension.ancho);
        var y = this.obtenerNumeroAleatorio(0, this._dimension.largo);
        var coordenadaInicial = new coordenada_1.Coordenada(x, y);
        return coordenadaInicial;
    };
    GeneradorFlota.prototype.isDentroLimites = function (tamanoBarco, sentidoBarco, coordenadaBarco) {
        var posicionBarco;
        var superaLimite = false;
        if (sentidoBarco == sentido_1.Sentido.abajo) {
            var y = coordenadaBarco.y;
            posicionBarco = tamanoBarco + y;
            var altura = this._dimension.largo;
            if (posicionBarco > altura) {
                superaLimite = true;
            }
        }
        else {
            var x = coordenadaBarco.x;
            posicionBarco = tamanoBarco + x;
            var anchura = this._dimension.ancho;
            if (posicionBarco > anchura) {
                superaLimite = true;
            }
        }
        return superaLimite;
    };
    return GeneradorFlota;
}());
exports.GeneradorFlota = GeneradorFlota;
//# sourceMappingURL=generadorFlota.js.map