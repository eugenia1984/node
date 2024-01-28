# :computer: Arrays – Lunes 03 de julio 19hs de Argentina

---

## :computer: Arrays

Es hora de continuar avanzando y hoy nos toca ver una estructura de datos más compleja, en la programación, los arrays son una herramienta del día a día para almacenar y manejar datos de forma eficiente. Los arrays son una estructura de datos que nos permiten almacenar varios elementos dentro de una sola variable.
En JavaScript, los arrays se utilizan en todo tipo de aplicaciones, desde la manipulación de listas de usuarios hasta el manejo de datos complejos en aplicaciones web.

---

## :computer:  ¿Qué es un array?

En programación, un array es una estructura de datos que nos permite almacenar varios elementos de datos en una sola variable. Podemos pensar en un array como una lista de cosas, donde cada elemento en la lista tiene un índice que lo identifica de manera única.

La principal diferencia entre un array y una variable es que una variable puede contener un solo valor a la vez, mientras que un array puede contener varios valores. Por ejemplo, si queremos almacenar una lista de nombres de personas, podemos crear un array y agregar todos los nombres en él. Si intentamos hacer esto con una variable, tendríamos que crear una variable diferente para cada nombre, lo cual sería tedioso y poco práctico.

Además, los arrays nos permiten realizar operaciones en masa en los elementos que contiene, como ordenarlos, filtrarlos, agregar nuevos elementos, eliminar elementos, y muchos otros. En el transcurso de todo el curso trabajaremos mucho con arrays y podremos realizar multiples operaciones


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/a039791e-e28d-4853-a7ed-515252b8e20d)

Observa en el gráfico como en la parte de la izquierda defino una variable y almaceno solamente el número 71
De la parte derecha defino numeros y almaceno 5 valores diferentes, ya entraremos en detalle de como escribirlo, pero cada vez que veas un array en el código recuerda este gráfico porque así es como debes visualizarlo.

---

## :computer: Sintaxis

En JavaScript, los arrays se pueden crear de varias formas. La forma más común de crear un array es utilizando corchetes [] y separar con comas cada uno de los valores que deseas almacenar. Por ejemplo, para crear un array de números, podemos escribir lo siguiente:

```JavaSCript
let numeros = [17, 31, 27, 45, 89];
```

Aquí definí un array donde almaceno 5 valores, los mismos que acabamos de ver en el gráfico

---

## :computer: Acceso a la data

Ahora una pregunta que seguramente se nos venga a la cabeza es ¿cómo acceder a cada uno de los valores?

Cada uno de los valores es llamado elemento y a cada elemento JavaScript automáticamente le asigna un índice, comienza desde el 0 y va incrementando en uno para cada elemento.

Por ejemplo, el valor del índice 0 del array es números es 17 y del índice 3 es 45

Ahora veamos en un ejemplo como trabajar con estos índices

```JavaSCript
let numeros = [17, 31, 27, 45, 89];
console.log(numeros[0]) //imprime 17
console.log(numeros[4]) //imprime 89
```

---

## :computer: Agregar valores

Es posible agregar valores a un array a través del método push, para hacerlo solamente hay que hacer nombre del array punto push y entre parentesis agregar el valor que queremos introducir al array.
Es importante destacar que cuando añadimos un elemento ser agregará último en el array


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/278660fe-270f-4991-a920-07c475c8cc23)

```JavaScript
let nombres = ["María", "Juan"]
console.log(nombres) //imprimo todos los nombres
nombres.push("Estefanía")
console.log(nombres) //imprimo todos los nombres
```

---

## :computer: Largo del array

JavaScript nos provee una propiedad que nos indica la cantidad de elementos que tiene un array, esto es algo realmente muy útil para trabajar.

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/e510e740-d510-4d1a-a870-2116a0c8fe41)

```JavaScript
let nombres = ["María", "Juan", "Estefanía"]
for(i =0; i<3; i++){
    console.log(nombres[i])
}
```

Observa que mediante un ciclo for voy recorriendo cada uno de los elementos del array, es decir, la variable i en la primera vuelta del ciclo vale 0 y cuando imprimo el valor del ciclo hago nombres[i] es decir, para la primera vuelta sería nombres[0].

Por cada vuelta del ciclo la variable se va incrementado de a uno en uno, es decir, nombres[0], nombres[1] y nombres[2] por eso razón mi código imprime todos los nombres.

En este caso controlamos el largo del array, sabemos que hemos escrito en el código 3 nombres, pero muchos veces ocurre que el array se va rellenando con datos externos y se inicializa trayendo datos de otro lugar, en esos casos no se cuantos elementos hay en el array, entonces al intentar ciclaros no sabría que condición poner dentro del ciclo para que se detenga cuando no hay más.

Para todos los array JavaScript tiene la propiedad length que nos dará un entero de la cantidad de elementos que tiene el array, observa el siguiente ejemplo y te quedará claro.


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/d684d2f1-abe9-48f4-b7f4-dc641a9d1e43)

```JavaScript
let planetas = ["Tierra", "Marte", "Jupiter"]
planetas.push("Pluton") //añado un planeta más

console.log(`Mi array tiene ${planetas.length} elementos`)
console.log("=======================================")

for(i =0; i<planetas.length; i++){
    console.log(planetas[i])
}
```

Observa como en la línea 4 la aplicación imprime que hay 4 elementos
Por último, observa que en la condición del medio en el ciclo utilizo planetas.length es decir, no importa cuantos elementos haya dentro del array, con el código que creé los puedo recorrer todos.

---

## :computer: ¿Qué puedo almacenar?

En los ejemplos que hemos visto hoy hemos almacenado dentro de un array números y strings pero es importante que sepas que puedes almacenar cualquier tipo de dato, inclusive un array dentro de un array

```JavaScript
let cosas = [true, false, "hola", 7, ["dani", 41, true]]

console.log(cosas[0]); //true
console.log(cosas[3]); //7
console.log(cosas[4][0]); //dani
```

Presta atención al último console.log estoy seleccionado 2 índice [4][0]
Al seleccionar el elemento 4 me encuentro con un array por lo tanto para acceder a los valores tengo que acceder a través de su índice, selecciono 0 y por esa razón me devuelve «dani». El siguiente ejemplo te ayudará a clarificarlo

```JavaSript
let cosas = [true, false, "hola", 7, ["dani", 41, true]]
let nuevo_array = cosas[4]

console.log(nuevo_array[0]); //dani
console.log(cosas[4][0]); //dani
```

---

## :star:Mini desafío:star:

Crea un array con 10 elementos numéricos y sobre ese array dime cual es el valor más alto

Nota: No busques en internet la solución, aprovecha el ejercicio para ejercitar tu lógica, con un array, una variable y un ciclo for lo puedes resolver.

---

---

## :computer: Preparate para la próxima clase

El próximo encuentro nos esperan muchos ejercicios para resolver con todo lo que hemos venido aprendiendo a lo largo de las clases.

Es un buen momento para ejercitar la lógica ya que la clase que viene avanzaremos cosas de Arrays

---
