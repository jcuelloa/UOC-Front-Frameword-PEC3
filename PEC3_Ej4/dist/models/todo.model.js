"use strict";
/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Todo {
    constructor(text) {
        console.log("creando todo con text.....");
        console.log(text);
        this.id = this.uuidv4();
        this.text = text;
        this.complete = false;
    }
    uuidv4() {
        return '10000000-1000-4000-8000-100000000000'.replace(/[0148]/g, c => {
            let simbolos = "0123456789ABCDEF";
            let hexSimbolo = simbolos[Math.floor(Math.random() * 16)];
            //console.log(hexSimbolo);
            return hexSimbolo;
        });
    }
}
// Otra forma: comentario de compañero
// function getuuid()
// {
// return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, variable_name =>
// (variable_name ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> variable_name / 4).toString(16)
// );
// }
