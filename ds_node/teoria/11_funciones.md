# :computer: Funciones – Lunes 03 de julio 19hs de Argentina

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/535a78ce-09be-4d0d-8ee3-8cb6dc4e87c6)


---

## :computer: Funciones
Hemos llegado al capítulo donde veremos un tema que nos acompañará durante toda la vida como programadores, ya sea en JavaScript o cualquier otro lenguaje.

Imagina que estás siguiendo una receta de cocina para hacer galletas. La receta es como una función en programación. Contiene una lista de pasos específicos que debes seguir para obtener las galletas deseadas. Cada paso en la receta es una instrucción que te indica qué hacer, como mezclar los ingredientes, precalentar el horno y hornear las galletas durante un tiempo determinado.

En programación, una función es similar a una receta de cocina. Es un bloque de código que contiene una serie de instrucciones específicas. Estas instrucciones pueden incluir cálculos, manipulación de datos, interacciones con el usuario o cualquier otra tarea que se deba realizar. Al igual que en una receta, una función puede recibir ciertos valores de entrada, llamados parámetros, y puede devolver un valor de salida, llamado valor de retorno.

La función se puede llamar desde diferentes partes del programa, al igual que puedes seguir la receta de cocina en diferentes ocasiones para hacer galletas. Esto permite reutilizar el código y evitar la repetición de instrucciones similares en varias partes del programa.

Como puedes observar en el gráfico tengo varias veces tengo el bloque de 3 líneas verdes repetidas, en el centro «encapsulo» estás 3 líneas verdes y le asigno el nombre Hola. Por último, reescribo el programa y donde estaban las 3 líneas verdes las reemplazo por un llamado a «Hola»

---

## :computer: Función «hola mundo»

```JavaScript
function holaMundo() {
  console.log("Hola Mundo");
}

holaMundo();
holaMundo();
holaMundo();
holaMundo();
//imprime 4 veces Hola mundo porque invoqué (llamar) a la función 4 veces
```

Veamo en detalle que pasó:

- Definimos la función llamada «holaMundo» utilizando la palabra clave function.

- Dentro de las llaves {}, especificamos las instrucciones que queremos que la función ejecute.

- En este caso, utilizamos console.log() para imprimir el mensaje «Hola Mundo» en la consola pero aquí es donde escribir todo lo que querremos que haga nuestra función

- En el hilo principal de nuestra aplicación llamamos a holaMundo(), lo que ejecuta el código que hay dentro de la función y en nuestro caso el console.log

---

## :computer: Funciones con parámetros

Los parámetros son una forma de proporcionar datos a una función para que puedan ser utilizados en la lógica que deseemos darle.

```JavaScript
function saludarA(nombre) {
  console.log("Hola %s", nombre); //observa, otra forma de imprimir variables
}

saludarA("Marcela");
saludarA("Micaela");
//imprimir Hola Marcela y Hola Micaela respectivamente
```

También es posible enviar más de un valor a una función

```JavaScript
function sumar(num1, num2) {
  var resultado = num1 + num2;
  console.log("La suma es: " + resultado);
}
sumar(5, 3);
```

Veamos el detalle de que ha pasado:

- Definimos la función llamada «sumar» con dos parámetros: num1 y num2.

- Dentro de la función, sumamos los valores de num1 y num2 y almacenamos el resultado en la variable resultado.

- Utilizamos console.log() para imprimir el mensaje «La suma es: » seguido del resultado.

- Luego, llamamos a la función sumar(5, 3) pasando los valores 5 y 3 como argumentos para los parámetros num1 y num2. Esto ejecuta el código dentro de la función y muestra «La suma es: 8» en la consola.

---

## :computer: Valores por defecto para un parámetro

Establecer un valor por defecto a un parámetro en una función es útil cuando deseas proporcionar un valor predeterminado en caso de que no se pase un argumento para ese parámetro al llamar a la función. Esto garantiza que la función pueda manejar diferentes escenarios y evitar errores debido a valores faltantes.

Imagina que tienes una cafetería y ofreces a tus clientes la opción de elegir el tamaño de su café: pequeño, mediano o grande. Al tomar sus órdenes, algunos clientes pueden especificar el tamaño deseado, mientras que otros pueden olvidarse de mencionarlo. Para manejar estos casos, puedes establecer un tamaño por defecto, como «mediano». Si un cliente no menciona un tamaño, asumirás que quiere un café mediano y prepararás su pedido en consecuencia.

Este ejemplo metafórico muestra cómo el valor por defecto del parámetro «tamaño» en una función puede garantizar que siempre haya una opción válida incluso si no se proporciona explícitamente.

Aquí tienes el mismo ejemplo anterior en código, pero esta vez usando la analogía de la cafetería:

```JavaScript
function prepararCafe(tipo, tamaño = "mediano") {
  console.log("Preparando un café " + tipo + " en tamaño " + tamaño);
}

prepararCafe("expreso"); // Imprime: Preparando un café expreso en tamaño mediano
prepararCafe("latte", "grande"); // Imprime: Preparando un café latte en tamaño grande
prepararCafe("capuchino"); // Imprime: Preparando un café capuchino en tamaño mediano
```

En este ejemplo, la función prepararCafe tiene dos parámetros: tipo y tamaño. El parámetro tamaño tiene un valor por defecto de «mediano».

Cuando llamamos a prepararCafe("expreso"), la función utiliza el valor por defecto para tamaño y muestra «Preparando un café expreso en tamaño mediano» en la consola.

Por otro lado, al llamar a prepararCafe("latte", "grande"), proporcionamos explícitamente el tamaño «grande» como argumento, por lo que la función utiliza ese valor y muestra «Preparando un café latte en tamaño grande».

Finalmente, si llamamos a prepararCafe("capuchino") sin proporcionar un argumento para tamaño, la función utilizará el valor por defecto «mediano» y mostrará «Preparando un café capuchino en tamaño mediano».

Este ejemplo ilustra cómo establecer un valor por defecto a un parámetro permite que la función sea más flexible y se comporte de manera esperada incluso cuando no se proporcionan valores específicos.



---

## :computer: Función que retorna un valor

También muchas veces nos encontramos con la necesidad que la función devuelva algún valor, es decir que retorne un valor al punto desde donde fue invocada, esto lo podemos realizar de la siguiente manera.


```JavaScript
function calcularAreaRectangulo(base, altura) {
  var area = base * altura;
  return area;
}

var resultado = calcularAreaRectangulo(4, 6);
console.log("El área del rectángulo es: " + resultado);
```

### ¡Claro! Empecemos con las funciones en JavaScript.

Función «Hola Mundo»: Una función «Hola Mundo» en JavaScript simplemente imprime el mensaje «Hola Mundo» en la consola. Aquí está cómo se ve:

```JavaScript
javascriptCopy codefunction holaMundo() {
  console.log("Hola Mundo");
}

holaMundo();
```

#### Explicación:

- Definimos la función llamada «holaMundo» utilizando la palabra clave function.

- Dentro de las llaves {}, especificamos las instrucciones que queremos que la función ejecute.

- En este caso, utilizamos console.log() para imprimir el mensaje «Hola Mundo» en la consola.

- Luego, llamamos a la función utilizando holaMundo(), lo que ejecuta el código dentro de la función y muestra «Hola Mundo» en la consola.

##### Función con parámetros: En JavaScript, puedes definir funciones que tomen parámetros. 

Aquí hay un ejemplo de una función que suma dos números:

```JavaScript
javascriptCopy codefunction sumar(num1, num2) {
  var resultado = num1 + num2;
  console.log("La suma es: " + resultado);
}

sumar(5, 3);
```

Explicación:

- Definimos la función llamada «sumar» con dos parámetros: num1 y num2.

- Dentro de la función, sumamos los valores de num1 y num2 y almacenamos el resultado en la variable resultado.

- Utilizamos console.log() para imprimir el mensaje «La suma es: » seguido del resultado.

- Luego, llamamos a la función sumar(5, 3) pasando los valores 5 y 3 como argumentos para los parámetros num1 y num2. Esto ejecuta el código dentro de la función y muestra «La suma es: 8» en la consola.

---

##### Función que retorna un valor: En JavaScript, también puedes crear funciones que devuelvan un valor. 

Aquí hay un ejemplo de una función que calcula el área de un rectángulo:

```JavaScript
function calcularAreaRectangulo(base, altura) {
  var area = base * altura;
  return area;
}

var resultado = calcularAreaRectangulo(4, 6);
console.log("El área del rectángulo es: " + resultado);
```

Aquí la explicación de lo que ocurrió en el ejemplo anterior:

- Definimos la función llamada «calcularAreaRectangulo» con dos parámetros: base y altura.

- Dentro de la función, calculamos el área multiplicando base por altura y almacenamos el resultado en la variable area.

- Utilizamos la palabra clave return para devolver el valor de area desde la función.

- Luego, en el flujo principal llamamos a la función calcularAreaRectangulo(4, 6) pasando los valores 4 y 6 como argumentos para los parámetros base y altura. El valor de retorno (24) se guarda en la variable resultado.

- Por último, utilizamos console.log() para imprimir el mensaje «El área del rectángulo es: » seguido del resultado (24) en la consola.

Es importante destacar que la impresión del valor ocurre fuera de la función, es decir, estoy utilizando el valor en el hilo principal de la aplicación.

Dato para resaltar, la función solamente puede devolver 1 solo valor y cuando un return es ejecutado corta automáticamente las siguientes instrucciones definidas en la función

```JavaScript
function hola() {
  console.log("hola")
  return true
  console.log("chau")
}

console.log(hola())
```

En este ejemplo el «chau» nunca será mostrado por consola, debido a que previamente tiene un return

---

#### :computer:  Funciones flecha (arrow functions)

Las funciones flecha, también conocidas como arrow functions, son una sintaxis más concisa e introducida en JavaScript ES6 (ECMAScript 2015) para definir funciones en JavaScript. Son una alternativa a la sintaxis tradicional de las funciones declarativas o expresivas.

La sintaxis básica de una función flecha es la siguiente:


```JavaScript
const miFuncion = (param1, param2) => {
  // Cuerpo de la función
};
```

Algunos aspectos fundametales:

- Podés definir el scope (var, let o const)

- Sintaxis concisa: La sintaxis de las funciones flecha permite escribir funciones de manera más breve y compacta. En lugar de la palabra clave function, se utiliza el símbolo de flecha => para declarar la función.

- Uso de paréntesis y llaves opcionales: Si la función toma un solo parámetro, los paréntesis alrededor del parámetro son opcionales. Si la función tiene un solo enunciado en su cuerpo, las llaves que rodean el cuerpo y la declaración return también son opcionales.

- Valor de retorno implícito: Si el cuerpo de la función flecha consta de una sola expresión, se considera implícitamente como el valor de retorno de la función. No es necesario usar la declaración return.

```JavaScript
//con 1 parámetro no es necesario abrir parentesis
let saludarA = nombre  => {
   console.log("hola " + nombre);
}
saludarA("Daniel"); //hola Daniel

//con más de un parámetro abro parentesis
let saludarCompleto = (nombre, apellido) => {
   console.log("hola " + nombre + " " + apellido);
}
saludarCompleto("Daniel", "Segovia"); // hola Daniel Segovia

//si tengo una sola instrucción no es necesario abrir y cerrar llaves {}
//tampoco es necesario utilizar la palabra return, automáticamente devuelve el valor de esa instrucción
let sumar = (n1, n2) => n1 + n2
console.log(sumar(2,4))
```

---

### Nombrado de variables o funciones

Una de las cosas fundamentales para programar es tener orden y prolijidad, para ello existen ciertas conveciones que te ayudarán a escribir correctamente el nombre de variables, funciones, el uso de parentesis y llaves.
Aquí [@denqbit](https://medium.com/@denqbit) en [medium](https://medium.com/@denqbit/gu%C3%ADa-de-estilo-convenciones-y-buenas-pr%C3%A1cticas-de-desarrollo-con-javascript-d2e9ef80d63b) nos deja un excelente artículo, te invito a que pases a verlo

----

### Prepárate para la siguiente clase

En el próximo encuentro veremos más cosas sobre funciones y cada vez iremos aumentando la dificultad de los challenges.

---
