# :compuer: 8 - CICLOS (Miércoles 28 de junio 19hs de Argentina)

---

¡Bienvenidos a una nueva clase de programación! En esta lección, hablaremos sobre bucles en JavaScript y su importancia en la programación en general. A través de metáforas y pseudocódigo, explicaremos cómo funcionan los bucles y cómo se utilizan para automatizar tareas repetitivas.

---

## La importancia de los bucles en programación

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/cefc58ce-ef59-4fc2-a3d5-2443b2fa8a6e)

Un bucle en programación es una estructura de control que permite repetir un bloque de código varias veces. Los bucles son útiles cuando se necesita realizar una tarea varias veces o cuando se necesita procesar un conjunto de datos. En lugar de escribir el mismo código una y otra vez, un bucle puede automatizar la tarea para que se realice de manera más eficiente y con menos errores.
Los bucles se ejecutan mientras se cumpla una condición determinada. La condición puede ser una comparación entre dos valores, una expresión booleana o cualquier otro tipo de prueba lógica que permita determinar si el bucle debe continuar o no.

Imagina que eres un chef y tienes un pedido de 100 galletitas para enviar. Tienes el problema que en tu horno solamente entra 1 sola bandeja donde caben 10 galletitas. Tu trabajo como chef será ir horneando tandas de 10 en 10 hasta completar el pedido de 100 galletitas.

Los bucles funcionan de manera similar en programación, permitiéndote repetir una sección de código varias veces en lugar de escribir la misma acción una y otra vez manualmente.

Al principio cuando uno se inicia en programación se pregunta ¿para qué necesito repetir la misma acción tantas veces? verás tanto en el curso como en los desarrollos que te enfrentes que es mucho más común de lo que imaginas ahora

---

## El bucle for
El bucle for es una estructura de control que se utiliza cuando se sabe exactamente cuántas veces se necesita repetir una sección de código. La sintaxis del bucle for es la siguiente:

```JavaScript
for (inicialización; condición; actualización) {
  // código a repetir
}
```

La sección de inicialización se utiliza para declarar y asignar valores a las variables que se utilizarán en el bucle. La sección de condición se utiliza para especificar una condición que debe ser verdadera para que el bucle se siga repitiendo. La sección de actualización se utiliza para modificar las variables después de cada repetición del bucle.

Por ejemplo, si queremos imprimir los números del 1 al 5 en la consola, podemos utilizar un bucle for de la siguiente manera:

```JavaScript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

En este caso, i es la variable que se utiliza para contar las repeticiones del bucle.

Aquí un detalle de que pasa en cada expresión

- La inicialización let i = 1 asigna el valor inicial de i a 1.

- La condición i <= 5 especifica que el bucle debe seguir repitiéndose mientras i sea menor o igual a 5

- La actualización i++ aumenta el valor de i en 1 después de cada repetición del bucle

- El resultado de este bucle sería la impresión de los números del 1 al 5 en la consola.

---

## :computer: Mini Ejercicio

### ¿Te animas a resolver el ejercicio del chef?

En una variable almacena la cantidad de galletitas a cocinar para un pedido, por ejemplo 87 y recuerda que las galletitas solamente se cocinan en tantas de 10, el cual es la capacidad máxima del horno.

### Versión 2

El local ha comprado un nuevo horno, por lo cual el chef puede cocinar 20 galletitas en simultáneo, modifica tu programa para que soporte este nuevo número de producción de galletitas.

---

## El bucle while

Imagina que estás caminando por la calle y comienza a llover. Para mantenerte seco, sacas un paraguas y lo abres. Ahora estás caminando debajo del paraguas y te estás moviendo hacia tu destino. Sin embargo, la lluvia sigue cayendo y necesitas mantener el paraguas abierto para no mojarte.

En programación, esto se puede representar como un bucle while. La lluvia que sigue cayendo sería la condición del bucle, y el paraguas que mantienes abierto es el bloque de código que se ejecuta mientras la condición se cumpla. En otras palabras, mientras sigue lloviendo, sigues manteniendo el paraguas abierto y caminando debajo de él.

Es importante tener en cuenta que, al igual que con el paraguas, si la condición del bucle no se cumple correctamente, puedes tener problemas. Si dejas de verificar si todavía está lloviendo, podrías terminar caminando con un paraguas abierto bajo el sol, lo que no solo es incómodo, sino también innecesario. De manera similar, si la condición en un bucle while no se actualiza adecuadamente, el bucle podría ejecutarse infinitamente, lo que podría causar problemas en tu programa.

En resumen, la metafora del paraguas mientras llueve puede ayudarte a entender el funcionamiento del bucle while. El paraguas representa el bloque de código que se ejecuta mientras se cumple la condición, y la lluvia es la condición en sí misma. Asegurarse de actualizar adecuadamente la condición en el bucle while es crucial para evitar problemas en tu programa, así como asegurarse de cerrar el paraguas cuando la lluvia ha cesado.

La sintaxis del bucle while es la siguiente:

```JavaScript
while (condición) {
  // código a repetir
}
```

El bucle while repetirá el código dentro de las llaves mientras la condición sea verdadera. Es importante tener en cuenta que si la condición nunca se cumple, el bucle se ejecutará infinitamente, lo que puede hacer que la aplicación se rompa. Es importante escribir la condición de manera cuidadosa para evitar un mal comportamiento de tu aplicación.

Por ejemplo, si queremos imprimir los números pares del 2 al 10 usando un bucle while, podemos hacerlo de la siguiente manera:

```JavaSCript
let i = 2;
while (i <= 10) {
  console.log(i);
  i += 2;
}
```

Como advertía en el inicio del bucle while ten mucho cuidado con la condición que escojas, aquí te dejo un ejemplo de un ciclo que no terminará nunca por haber elegido mal la condición.

```JavaScript
let i = 2;
while (i > 0) {
  console.log(i);
  i += 2;
}
```

Si observas el ejemplo anterior la variable i se inicializa en 2 y cada vuelva del ciclo incrementa la variable 2 unidades, es decir, 2 para la primera vuelta, 4 para la segunda, 6 la tercera y así sucesivamente.
Si te detienes en la condición la preguntas es mientras i sea mayor a 2 y como cada vuelta se incrementa y como hemos visto siempre es mayor a 2, por está razón nunca terminará.

---

## El bucle do while
Imagina que estás jugando un juego de adivinanzas en el que tienes que adivinar un número entre 1 y 10. El juego te da una pista de si el número que adivinaste es mayor o menor que el número objetivo, pero no te dice el número exacto. Quieres asegurarte de adivinar el número correcto lo antes posible, pero no sabes cuántos intentos te llevará.

Para este caso, podríamos utilizar el ciclo do while. La sintaxis del ciclo do while es la siguiente:

```JavaScript
do {
  // bloque de código a ejecutar
} while (condición);
```
En este caso, el bloque de código sería tu intento de adivinar el número, mientras que la condición sería si el número que adivinaste es igual al número objetivo. En el ciclo do while, el bloque de código se ejecutará al menos una vez, independientemente de si la condición se cumple o no. Después de eso, el ciclo seguirá ejecutándose mientras se cumpla la condición.

Volviendo al ejemplo del juego de adivinanzas, supongamos que el número objetivo es 7. Comienzas a adivinar y adivinas el número 5. El juego te dice que el número objetivo es mayor que 5, por lo que adivinas 6. El juego te dice que el número objetivo es mayor que 6, por lo que adivinas 8. El juego te dice que el número objetivo es menor que 8, por lo que adivinas 7 y finalmente adivinas el número correcto.

En programación, el ciclo do while se puede utilizar en situaciones similares en las que no se sabe cuántas veces se necesitará ejecutar un bloque de código antes de que se cumpla una condición específica. El ciclo se ejecuta al menos una vez, independientemente de la condición, y luego sigue ejecutándose mientras se cumpla la condición.

A continuación, te presento un ejemplo de código en JavaScript que utiliza el ciclo do while para solicitar al usuario que ingrese un número del 1 al 10 y seguir solicitando un número hasta que el número ingresado sea 7:

```JavaScript
let number;
do {
  //escojo un número aleatorio entre 0 y 10 simulando el ingreso de un usuario
  number = Math.floor(Math.random() * 11);
  console.log(number)
} while (number != 7);
```

---

## :computer:  Mini Ejercicio

Trabajemos con el último enunciado para diseñar una aplicación
El juego consiste en que el usuario debe adivinar un número entre 0 y 100
Cada vez que el usuario ingresa un número la aplicación debe indicar

- El número {numero_ingresado} es mayor al que debes adivinar

- El número {numero_ingresado} es menor al que debes adivinar

- Ganaste: El número era {numero_ingresado} y lo hiciste en {intentos} intentos

---

## :star: La teoria en video

Nuestra amiga de todocode nos regala un excelente video explicativo de como funcionan los ciclos: [video](https://youtu.be/ZNkHWaiBEvA)

---

## Debug

Debugging, también conocido como depuración, es el proceso de identificar, encontrar y corregir errores o bugs en el código de un programa. Durante la fase de desarrollo de software, es común que se presenten errores o bugs que deben ser corregidos antes de que el programa pueda ser utilizado de manera efectiva, también puedes utilizarlo para ver si tu programa se comparto como esperabas.

Un número que se obtiene al multiplicar todos los números enteros positivos desde 1 hasta ese número. Por ejemplo, el factorial de 5 (representado como 5!) es igual a 5 x 4 x 3 x 2 x 1 = 120. Hagamos un programa que calcule el factorial y que debugeemos que ocurre en cada vuelta del ciclo.

Para calcular el factorial de un número en JavaScript, podemos utilizar un ciclo for que multiplique los valores desde 1 hasta el número que queremos calcular el factorial. Para hacer un debugging de este proceso, podemos imprimir los valores de las variables en cada iteración del ciclo para asegurarnos de que los cálculos se estén realizando correctamente.

Aquí te muestro un ejemplo de código que calcula el factorial de un número y hace un debugging utilizando un ciclo for:

```JavaScript
// Definimos el número del cual queremos calcular el factorial
let n = 5;

// Inicializamos el resultado en 1
let result = 1;

// Comenzamos un ciclo que va desde 1 hasta el número que queremos calcular el factorial
for (let i = 1; i <= n; i++) {
  // En cada iteración, multiplicamos el resultado por el valor actual de i
  result = result * i;

  // Imprimimos en la consola los valores de i y result en cada iteración
  console.log(`i: ${i}, result: ${result}`);
}

// Imprimimos el resultado final del factorial
console.log(`El factorial de ${n} es: ${result}`);
```

---

## Preparate para la próxima clase

En la próxima clase veremos los ciclos y ejercitaremos con ellos, es importante que conozcas estás bases ya que más adelante incluiremos más ciclos como el foreach, map y mucho más.

---

