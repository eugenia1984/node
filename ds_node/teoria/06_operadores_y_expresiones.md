# :computer: 06 – Operadores y expresiones

En el fascinante mundo de la programación, los operadores y las expresiones desempeñan un papel fundamental. Son herramientas clave que nos permiten realizar cálculos, comparaciones y tomar decisiones lógicas en nuestros programas. En este artículo, vamos a explorar los conceptos básicos de operadores y expresiones en el lenguaje de programación JavaScript.

---

## ¿Qué son los operadores y las expresiones?

En JavaScript como en otros lenguajes de programación, los operadores son símbolos especiales que realizan operaciones en valores. Estas operaciones pueden ser tan simples como la suma de dos números o tan complejas como la comparación de cadenas de texto. Por otro lado, las expresiones son combinaciones de valores, variables y operadores que se evalúan para producir un resultado.

---

## Operadores Aritméticos

Comencemos por los operadores aritméticos. Estos nos permiten realizar operaciones matemáticas básicas. Aquí tienes algunos ejemplos:

- **Suma** ```+```: Utilizado para sumar dos valores. Por ejemplo, 2 + 3 devuelve 5.

- **Resta** ```-```: Utilizado para restar un valor de otro. Por ejemplo, 5 - 2 devuelve 3.

- **Multiplicación** ```*```: Utilizado para multiplicar dos valores. Por ejemplo, 3 * 4 devuelve 12.

- **División** ```/```: Utilizado para dividir un valor por otro. Por ejemplo, 10 / 2 devuelve 5.

- **Módulo** ```%```: Devuelve el resto de una división entera. Por ejemplo, 10 % 3 devuelve 1, ya que 10 dividido por 3 es 3 con un resto de 1.

Estos operadores pueden combinarse en expresiones más complejas para realizar cálculos más avanzados.

## Operadores de Asignación

Los operadores de asignación se utilizan para asignar un valor a una variable como hemos visto en la clase anterior. Aquí tienes un ejemplo:

**Asignación** ```=```: Utilizado para asignar un valor a una variable. Por ejemplo:

```JavaScript
//Asigno el valor 5 a la variable x
let x = 5;
//Asigno el valor Hola a la variable mensaje
const mensaje = "Hola";
```

También existen otros operadores de asignación que a continuación listaré

| Nombre	| Operador abreviado	 | Significado |
| ------- | -------------------- | ----------- |
| Asignación	| x = y |	x = y |
| Asignación de adición | 	x += y	| x = x + y |
| Asignación de resta	| x -= y	| x = x - y |
| Asignación de multiplicación	| x *= y	| x = x * y |
| Asignación de división	| x /= y	| x = x / y |
| Asignación de residuo	| x %= y	| x = x % y |
| Asignación de exponenciación	| x **= y	| x = x ** y |
| Asignación OR lógico	| x ||= y | 	x || (x = y) |
| Asignación AND lógico	| x &&= y |	x && (x = y) |

El primero de la lista es que venimos viendo, por ejemplo

```JavaScript
let a = "hola"
let b = "chau"
a = b
console.log(a)
//responde chau ya que asigno el valor de b dentro de a
```

Del segundo al séptimo son operadores que te ayudarán a realizar una asignación pero añadiendo una operación matemática

```JavaScript
let a = 4
let b = 5
// si quiero hacer a + b podría hacer lo siguiente
a = a + b
console.log(a) //respuesta 9
//o bien podría hacer 
a += b
console.log(a) //respuesta 14. 
//Por qué el resultado es 14? animate a buscarle la lógica, copia y pega el código  y verás que no miento, el resultado es 14
```

Por último los operadores **OR** y **AND**, vamos con un ejemplo.

A través de OR podemos asignar un valor si mi variable tiene un valor falsy (vacio, nulo, undefined, 0)

```JavaSCript
let a;
a ||= "hola"
console.log(a) //resultado hola
a ||= "chau" 
console.log(a) //resultado hola, no hubo asignación porque a ya tenía un valor
```

Con el AND solo se asignarán si ambos son truthy, es decir que contenga un valor donde su booleano sea true

```JavaScript
let a;
a &&= "hola"
console.log(a) //resultado undefined, es decir no asignó nada
a = "hola" //realizó una asignación "normal" para que a tenga un valor truthy
a &&= "chau" 
console.log(a) //resultado chau, es decir asignó "chau" ya que a y "chau" son truthy
```

Existen otros operadores que más adelante iremos ampliando, aquí puedes ver la lista completa: [https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#asignacion](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#asignacion)

## Operadores de Comparación

Los operadores de comparación se utilizan para comparar valores y devuelven un valor booleano (verdadero o falso). Aquí tienes algunos ejemplos:

- **Igualdad** ```==```: Compara si dos valores son iguales. Por ejemplo, 2 == 2 devuelve true.

- **Desigualdad** ```!=```: Compara si dos valores son diferentes. Por ejemplo, 3 != 5 devuelve true.

- **Mayor que** ```>```, **menor qu**e ```<```: Comprueban si un valor es mayor o menor que otro valor. Por ejemplo, 4 > 2 devuelve true.

- **Mayor o igual que** ```>=```,** menor o igual que** ```<=```: Comprueban si un valor es mayor o igual, o menor o igual que otro valor. Por ejemplo, 5 >= 5 devuelve true.

Estos operadores de comparación son especialmente útiles para tomar decisiones en el flujo de ejecución de un programa. En la siguiente clase vamos a profundizar sobre este tema.

## Operadores Lógicos

Los operadores lógicos se utilizan para combinar expresiones lógicas y producir un resultado booleano. Aquí tienes algunos operadores lógicos comunes:

- **AND** ```&&```: Devuelve true si todas las expresiones son verdaderas. Por ejemplo, (2 < 5) && (3 > 1) devuelve true.

- **OR** ```||```: Devuelve true si al menos una de las expresiones es verdadera. Por ejemplo, (2 < 1) || (3 > 1) devuelve true.

- **NOT** ```!```: Invierte el valor de una expresión. Por ejemplo, !(2 < 1) devuelve true, ya que la expresión original es falsa.
Estos operadores lógicos son útiles para evaluar condiciones más complejas y tomar decisiones basadas en ellas.

## Precedencia de Operadores

Es importante tener en cuenta que los operadores tienen una precedencia determinada, lo que significa que algunos operadores se evalúan antes que otros en una expresión. Por ejemplo, en la expresión 2 + 3 * 4, la multiplicación se evalúa antes debido a la precedencia de operadores, es decir JavaScript tiene su lógica de que ejecutar primero.

Por ejemplo, (2 + 3) * 4 asegura que la suma se realice primero antes de la multiplicación pero no se debe a una cuestión matemática o de lógica, se debe a que se evalúa primero gracias a la precedencia de operadores, es decir los paréntesis tienen más prioridad que la multiplicación en el funcionamiento interno de JavaScript. Velo de la siguiente manera, los paréntesis tienen un peso X, la suma otro peso, la multiplicación otro y así cada una de las posibles operaciones tiene su peso asignado, gracias al peso JavaScript puede tomar la decisión de que ejecutar antes y que después.

Es recomendable utilizar paréntesis cuando la expresión es compleja o para evitar confusiones en la lógica del programa.

## Conclusión

En este artículo, hemos explorado los operadores y las expresiones en JavaScript. Los operadores aritméticos nos permiten realizar cálculos matemáticos, los operadores de asignación se utilizan para asignar valores a variables, los operadores de comparación nos permiten comparar valores y los operadores lógicos nos ayudan a combinar expresiones lógicas.

Espero que este artículo haya proporcionado una introducción clara y concisa a estos conceptos fundamentales en JavaScript. A medida que los alumnos continúen explorando el mundo de la programación, podrán utilizar operadores y expresiones para crear programas más complejos y funcionales.

¡Recuerda practicar y experimentar con diferentes ejemplos para fortalecer tu comprensión de los operadores y las expresiones en JavaScript!

¡Feliz programación!
