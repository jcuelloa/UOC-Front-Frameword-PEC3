//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.
/***/
var HangarHash = /** @class */ (function () {
    function HangarHash() {
    }
    return HangarHash;
}());
var myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */
//Esto solo me vale si cambio el target a ES2017
for (var _i = 0, _a = Object.entries(myHangar); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log(key + ":" + value.model + "(" + value.npassengers + ")");
}
console.log("------");
var modelo;
var avion;
modelo = '123Z';
avion = myHangar[modelo];
console.log(modelo + ":" + avion.model + "(" + avion.npassengers + ")");
modelo = 'H789';
avion = myHangar[modelo];
console.log(modelo + ":" + avion.model + "(" + avion.npassengers + ")");
