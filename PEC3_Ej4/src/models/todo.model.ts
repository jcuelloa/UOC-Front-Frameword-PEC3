/**
 * @class Model
 *
 * Manages the data of the application.
 */

class Todo {
  id:string;
  text:string;
  complete:boolean;

  public constructor(todo_: { text:string, complete:boolean }){
    
    this.id = this.uuidv4();
    this.text = todo_.text;
    this.complete = todo_.complete;

  }
  
  public uuidv4() {

    //Esto lo he modifiucado un poco, lo he hecho a mi manera, pero consigo lo mismo.
    return '10000000-1000-4000-8000-100000000000'.replace(/[0148]/g, c => {
      let simbolos:string = "0123456789ABCDEF";
      let hexSimbolo = simbolos[Math.floor(Math.random() * 16)];
      //console.log(hexSimbolo);
      return hexSimbolo;
    });
  }


}
