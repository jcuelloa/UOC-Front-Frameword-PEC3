//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.


interface Plane {
    model: string,
    npassengers: number
}
/***/


class HangarHash{
    [index: string]: Plane;
}

let myHangar: HangarHash = {}

myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
}

myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
}

/** Print following lines (going through the object)
 * 123Z:airbus(200)
 * H789:boeing(151)
 */

//Esto solo me vale si cambio el target a ES2017
// for (let [key, value] of Object.entries(myHangar)){
//     console.log(key+":"+value.model+"("+value.npassengers+")");
// }
// console.log("------");

let modelo;
let avion:Plane;

modelo='123Z';
avion=myHangar[modelo];
console.log(modelo+":"+avion.model+"("+avion.npassengers+")");

modelo='H789';
avion=myHangar[modelo];
console.log(modelo+":"+avion.model+"("+avion.npassengers+")");
