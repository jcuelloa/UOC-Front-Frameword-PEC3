//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.

abstract class Animal {
    static population: number = 0;
    constructor() {
        Animal.population++;
    }
    public abstract sound(): void;
    
    
}

class Dog extends Animal {
    color: string;

    constructor(color:string){
        super();
        this.color=color;
    }

    public sound(){
        console.log('WOW');
    }
   
    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    gender: string;
    
    constructor(gender:string){
        super();
        this.gender=gender;
    }
    public sound(){
        console.log('MEOW');
       
    }
    
    public iamacat() {
        console.log('yes, this is a cat');
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals){
    animal.sound();
    //animal.quesoy();
    if (animal instanceof Dog){
        let perro:Dog=animal;
        perro.iamadog();
    }
    if (animal instanceof Cat){
        let gato:Cat=animal;
        gato.iamacat();
    }

}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/

console.log(Animal.population); //4