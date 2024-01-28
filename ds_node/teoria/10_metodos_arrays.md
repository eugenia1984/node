# :computer: Métodos de array – Jueves 06 de junio 19hs de Argentina

---

## :computer: Métodos arrys

Hoy nos toca volver seguir trabajando con Arrays.
Recuerda que puedes visitar el contenido de los fundamentos de Arrays y también ver la grabación de la clase.

Ahora llega el momento de manipular de forma más eficiente lo que pasa dentro del array, es decir, ¿si quiero agregar un elemento al inicio cómo hago? ¿si quiero buscar un elemento tengo que recorrer todo el array? A lo largo de esté artículo iremos viendo diferentes métodos que nos permitan realizar estás y varias acciones más.
Al final del artículo veras un ejemplo súper común que se suele tomar en muchas entrevistas y que podrás resolver con los métodos que veremos, claro que no es tan fácil tendrás que aplicar lógica para resolverlo :-)


---

## :computer: Métodos de array

En la clase pasada vimos la propiedad length que nos decía la cantidad de elementos que tenía un Array

```JavaScript
const array = [11, 22, 33];
console.log(array.length); // Output: 3
array.push(44);
console.log(array.length); // Output: 4
```

Hoy veremos algunos métodos pero empecemos que es una propidad y que es un método.

Son temas que iremos viendo con mayor profundidad a lo largo del primer módulo del curso pero a grandes en JavaScript, una propiedad es un valor asociado a un objeto (en nuestro caso el array). Puede ser cualquier tipo de valor, como una cadena de texto, un número o un booleano. Las propiedades proporcionan información sobre el objeto y se acceden utilizando la sintaxis de punto (objeto.propiedad) o la sintaxis de corchetes (objeto['propiedad']).
Como en el ejemplo anterior array.length nos devuelve 3

Por otro lado, un método es una función asociada a un objeto (en este caso al Array). Los métodos son acciones o comportamientos que el objeto puede realizar. Se definen dentro del objeto y se invocan utilizando la sintaxis de punto (objeto.metodo()). Los métodos pueden utilizar los valores y propiedades del objeto para realizar cálculos, modificar el estado del objeto o interactuar con otros objetos.
Como en el ejemplo anterior array.push añade un nuevo elemento al array (ejecuta una acción)

En resumen, una propiedad es un valor asociado a un objeto que proporciona información sobre el objeto, mientras que un método es una función asociada a un objeto que representa un comportamiento o una acción que el objeto puede realizar.

---

## :computer: pop

El método pop() elimina el último elemento de un array y lo devuelve.

```JavaSCript
const array = [1, 2, 3];
const lastElement = array.pop();
console.log(lastElement); // Output: 3
console.log(array); // Output: [1, 2]
```

---

## :computer: unshift

Con el método unshift(), podemos agregar uno o más elementos al inicio de un array y obtener la nueva longitud del array.

```JavaScript
const array = [2, 3, 4];
array.unshift(1, 6);
console.log(array); // Output: [1, 6, 2, 3, 4]
```

---

## :computer: shift

El método shift() elimina el primer elemento de un array y lo devuelve.

```JavaScript
const array = [1, 2, 3];
const firstElement = array.shift();
console.log(firstElement); // Output: 1
console.log(array); //Output: [2, 3]
```


---

## :computer: concat

El método concat() nos permite combinar dos o más arrays y devuelve un nuevo array.

```JavaScript
const array1 = [1, 2];
const array2 = [3, 4];
const newArray = array1.concat(array2);
const newArray2 = array2.concat(array1);
console.log(newArray); // Output: [1, 2, 3, 4]
console.log(newArray2); // Output: [3, 4, 1, 2]
```

---

## :computer: slice

Con el método slice(), podemos obtener una copia superficial de una porción específica de un array en un nuevo array.
Indicamos el índice de inicio y el índice de fin

```JavaSCript
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(2, 4);
console.log(newArray); // Output: [3, 4]
```

---

## :computer: indexOf

El método indexOf se utiliza en JavaScript para buscar la primera aparición de un elemento en un array y devuelve su índice correspondiente. Si el elemento no se encuentra en el array, el método devuelve -1.

La sintaxis del método indexOf es la siguiente: array.indexOf(elemento). Donde elemento indica el valor que deseamos buscar en el array.

Algunos puntos importantes a tener en cuenta:

- El método indexOf realiza una búsqueda estricta, lo que significa que compara los valores utilizando el operador de igualdad estricta (===).

- Si el elemento se encuentra en el array, el método devuelve el índice de la primera aparición.

- Si el elemento no se encuentra en el array, el método devuelve -1.
Aquí tienes un ejemplo de uso del método indexOf:

```JavaSCript
const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3)); // Output: 2
console.log(array.indexOf(6)); // Output: -1
```

Con está función podrías validar que exista determinado elementos en tu array

```JavaScript
const array = ["Juan", "Pedro", "Celeste", "Romina"];
const buscar = "Gastón"
if(array.indexOf(buscar) === -1){
    console.log(`${buscar} no está en el array`)
}else {
    console.log(`${buscar} se encontró en el array`)
}
```

---

## :computer: Iteraciones

Ahora nos centraremos en los métodos de iteración, que nos permiten recorrer y transformar los elementos de un array de manera efectiva

---

## :computer: forEach

El método forEach() nos permite ejecutar una función proporcionada una vez por cada elemento del array. Es una forma sencilla de iterar sobre los elementos.

```JavaSCript
const array = [1, 2, 3];
array.forEach((element) => {
    //multiplico cada elemento x 2
    console.log(element * 2);
});
// Output:
// 2
// 4
// 6
```

---

## :computer: map

El método map() crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array. Es útil cuando queremos transformar los elementos del array.

```JavaSCript
const array = [1, 2, 3];
const newArray = array.map((element) => {
  return element * 2;
});
console.log(newArray);
// Output: [2, 4, 6]
```

---

## :computer: filter
El método filter() crea un nuevo array con todos los elementos que cumplan una condición especificada. Nos ayuda a filtrar los elementos del array.

```JavaSCript
const array = [10, 2, 14, 3, 11, 15];
const filteredArray = array.filter((element) => {
  return element > 10;
});
console.log(filteredArray);
// Output: [ 14, 11, 15 ]
```

---

## :computer: reduce

El método reduce() aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlos a un único valor. Es útil cuando queremos realizar cálculos o agregaciones

```JavaScript
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((accumulator, element) => {
  return accumulator + element;
}, 0);
console.log(sum);
// Output: 15
```

---

## :computer: some

El método some() comprueba si al menos un elemento del array cumple una condición especificada. Retorna un valor booleano.

```JavaSCript
const array = [1, 2, 3, 4, 5];
const hasEvenNumber = array.some((element) => {
  //busco si hay al menos un elemento par
  return element % 2 === 0;
});
console.log(hasEvenNumber);
// Output: true
```

---

## :computer: every

El método every() comprueba si todos los elementos del array cumplen una condición especificada. Retorna un valor booleano.

```JavaSCript
const array = [1, 2, 3, 4, 5];
const allGreaterThanZero = array.every((element) => {
  //busco si todos los elementos son mayores a cero
  return element > 0;
});
console.log(allGreaterThanZero);
// Output: true
```

---

## :computer: Diferencias entre forEach y map

Te cuento esto como tip, es una de las preguntas de entrevista más típica
¿Qué diferencia hay entre forEach y map?

```JavaSCript
const array = [1, 2, 3];
array.forEach((element) => {
    console.log(element * 2);
});
// Output:
// 2
// 4
// 6
const array = [1, 2, 3];
const newArray = array.map((element) => {
  return element * 2;
});
console.log(newArray);
// Output: [2, 4, 6]
```

forEach es un método de iteración que se utiliza para recorrer los elementos de un array y ejecutar una función proporcionada en cada uno de ellos. No devuelve un nuevo array, sino que simplemente itera sobre los elementos existentes. Mientras que map también es un método de iteración que recorre los elementos de un array y aplica una función proporcionada a cada uno de ellos. La diferencia es que map devuelve un nuevo array con los resultados de aplicar la función a cada elemento del array original.

---

## :star:Desafío laboral:star:

La serie de fibonacci es una de las más utilizadas en entrevistas para medir la capacidad lógica del entrevistado, aquí te dejo el planteo para que intentes resolverlo y puedas compartirlo con la clase en nuestro próximo encuentro.

Escribe un script que comience con una variable llamada hasta y cree un array con los primeros números de la secuencia de Fibonacci. La secuencia de Fibonacci siempre comienza con los números 0 y 1, y cada número subsiguiente se calcula sumando los dos números anteriores.

### Ejemplos:

```
hasta = 3 resultado [0, 1, 1] /* suma 0 + 1 para obtener la última posición */
hasta = 4 resultado [0, 1, 1, 2] /* suma 1 + 1 para obtener la última posición */
hasta = 5 resultado [0, 1, 1, 2, 3] /* repite lógica anterior */
hasta = 6 resultado [0, 1, 1, 2, 3, 5]
hasta = 7 resultado [0, 1, 1, 2, 3, 5, 8]
let hasta = 6;

/* tu código empieza aquí */
````

¡Buena suerte y diviértete! Si tienes alguna pregunta o necesitas ayuda adicional, estaré encantado de ayudarte en la próxima clase.


---
