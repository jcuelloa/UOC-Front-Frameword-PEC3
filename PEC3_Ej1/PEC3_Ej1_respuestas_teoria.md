## PEC3 - Ejercicio1



### **Ventajas de typescript**
La principal ventaja de typescript es que al ser un lenguaje tipado, nos va a evitar errores de tipos en tiempo de compilación.

Javascript es un lenguaje muy flexible y al no comprobar los tipos, una función que quiera sumar dos valores numéricos, si le pasáramos cadenas, seguiría funcionando, concatenando las cadenas.

En el ejemplo que nos atañe, con Typescript hemos definido una interfaz _Dog_ para un objeto, donde el primer atributo _kind_ es de tipo Sring. En un momento, al crear el objeto, hemos asignado el valor _true_ a dicha propiedad. Al no ser el tipo adecuado, el compilador nos está advirtiendo que nos hemos equivocado. 

Otra de las ventajas es que podemos ser más explícitos a la hora de devolver un valor una función. En el ejemplo, le indicamos explícitamente que la función debe devolver un objeto de tipo _Dog_. En el caso de que nos equivocáramos en el nombre de una propiedad, el compilador nos avisaría para poder corregirlo.
 


