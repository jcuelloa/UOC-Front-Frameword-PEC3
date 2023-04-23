## PEC3 - Ejercicio4
### **Comandos usados para transpilar**
Para transpilar el proyecto, solo uso un comando 
```
$tsc
```
Esto es así, porque el compilador ya usa la información del archivo `tsconfig.json` para saber donde se encuetran los archivos a transpilar y donde debe generarlos, tal como había aprendido en el ejercicio 3.   

En mi caso, he reorganizado el proyecto para meter todo el código typescript en la carpeta _src_ y el código javascript generado se hará en la carpeta _dist_.   

Para lanzar la aplicación, hago uso del live server sobre el archivo _index.html_

NO HE USADO WEBPACK


### **Problemas encontrados**
- En alguna ocasion, al tener una fuerte comprobación de tipos, y para no modificar mucho el código original, he tenido que hacer uso del operador `!:`. Lo he hecho por ejemplo, dentro del módulo del servicio, en la función `onTodoListChanged!: Function`

- También he hecho uso del operador `:?`que indica que es un parámetro opcional. Aparece en la función _createElement_ del módulo de vista.

- Dentro del modelo, la función para generar el UUID no me terminaba de funcionar ral cual estaba codificada. Decidí programar la mia propia, muy similar, respetando el formato del identificador

- Donde más tiempo me ha llevado la conversión ha sido en el módulo de vista. En un principio, siembre usaba el tipo _HTMLDocument_ y eso me dificultaba acceder a ciertas propiedades propias del tipo de elemento HTML, por ejemplo, acceder al tipo en los elementos \<input>. Una vez que ví la posibilidad de convertir a tipos más específicos, como _HTMLInputElement_, pude ir más rápido.



