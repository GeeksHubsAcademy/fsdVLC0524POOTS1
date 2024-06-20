var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Esta es la clase Luchador, será la clase padre.
var Luchador = /** @class */ (function () {
    //Constructor desde donde se inyectan las propiedades al instanciar la clase
    function Luchador(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    //método que simplemente menciona....no sería buena práctica
    // mencion () : void {
    //     console.log(`${this._nombre} golpea con su estilo ${this._edad}`)
    // }
    //Método estático
    Luchador.scream = function () {
        console.log("buaaaaaaa");
    };
    Object.defineProperty(Luchador.prototype, "nombre", {
        //Getter y setter de nombre.....
        //Con el getter, tenemos un método que nos va a devolver el valor de la propiedad nombre
        get: function () {
            return this._nombre;
        },
        //Con el setter podemos cambiar el valor de nombre de forma totalmente segura
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Luchador;
}());
var Sumo = /** @class */ (function (_super) {
    __extends(Sumo, _super);
    function Sumo(nombre, edad, pais, weight) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.pais = pais;
        _this.weight = weight;
        return _this;
    }
    Sumo.prototype.anuncio = function () {
        console.log(this._nombre, this._edad, this.pais);
    };
    return Sumo;
}(Luchador));
var luchador2 = new Luchador("manolo", 99);
//Modo getter para obtener
console.log(luchador2.nombre);
//Modo setter para setear
luchador2.nombre = "Pepe";
//Modo getter para obtener de nuevo
console.log(luchador2.nombre);
Luchador.scream();
