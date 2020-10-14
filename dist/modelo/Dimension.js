"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dimension = void 0;
var Dimension = /** @class */ (function () {
    function Dimension(_ancho, _largo) {
        this._ancho = _ancho;
        this._largo = _largo;
    }
    Object.defineProperty(Dimension.prototype, "ancho", {
        get: function () {
            return this._ancho;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dimension.prototype, "largo", {
        get: function () {
            return this._largo;
        },
        enumerable: false,
        configurable: true
    });
    return Dimension;
}());
exports.Dimension = Dimension;
//# sourceMappingURL=Dimension.js.map