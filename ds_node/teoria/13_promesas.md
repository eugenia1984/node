# :computer: Promesas – Lunes 17 de julio 19hs de Argentina

Llegamos a una parte del curso donde comienza a elevarse la dificultad, todo lo relacionado con promesas no es sencillo pero tampoco imposible, en el día de hoy veremos conceptos nuevos pero por sobre todo una forma conceptualmente diferente a lo que veníamos haciendo, es importante que te tomes el tiempo necesario para leer y releer las veces que haga falta estos conceptos para llevar la mayor cantidad de dudas a la próxima clase.

---

## :star: Asincronía VS sincronia

La asincronía en JavaScript es como tener un chef trabajando en la cocina mientras tú sigues disfrutando de una conversación con tus amigos en el comedor. Mientras el chef prepara tus platillos, tú no tienes que esperar inactivamente hasta que la comida esté lista. En su lugar, puedes continuar disfrutando de tu tiempo, y cuando los platillos estén listos, serás notificado para saborearlos.

En la programación, la asincronía es similar. Permite que el programa realice múltiples tareas simultáneamente sin bloquear su ejecución. Mientras una tarea está en progreso, el programa puede seguir funcionando y manejar otras tareas en segundo plano.

En contraste, la programación sincrónica es como tener al chef cocinando y tú esperando frente a la cocina hasta que la comida esté lista. No puedes hacer nada más hasta que se complete la tarea actual.

En JavaScript, la asincronía se vuelve relevante cuando trabajamos con operaciones que pueden llevar tiempo, como hacer solicitudes a servidores remotos o esperar la respuesta de una base de datos. En lugar de detener por completo la ejecución del programa mientras esperamos, podemos aprovechar la asincronía para seguir realizando otras tareas.

A lo largo del artículo vamos a explorar cómo JavaScript maneja la asincronía, comenzando con los callbacks, una técnica comúnmente utilizada antes de la introducción de las promesas.

---

## Callbacks

En términos de programación, los callbacks funcionan de manera similar. Un callback es una función que se pasa como argumento a otra función y se invoca más tarde, generalmente cuando ocurre un evento o se completa una operación asincrónica. Es una forma de decirle a una función: «Cuando termines, en lugar de esperar inmediatamente, llámame de vuelta y permíteme continuar con mi trabajo».

### Explicación de pseudo código:

Imagina que eres el director de una orquesta y estás coordinando una presentación musical. Tienes diferentes músicos que tocan diferentes instrumentos y cada uno necesita seguir un conjunto de instrucciones específicas.

En lugar de decirles a todos los músicos que toquen al mismo tiempo y esperar a que terminen antes de continuar, utilizas un enfoque basado en callbacks. Les das a cada músico una señal para que comiencen a tocar su parte cuando llegue su turno. Una vez que cada músico ha terminado de tocar su parte, te avisan a través de un gesto para que puedas pasar al siguiente músico y continuar con la presentación de manera fluida.

En términos de programación, cada músico representa una función y las señales que les das para que comiencen a tocar son los callbacks. Cada función es llamada en el momento adecuado y cuando ha terminado su tarea, invoca al callback para notificar que ha terminado y que es el turno de la siguiente función.

Este enfoque basado en callbacks permite una ejecución ordenada y controlada de las tareas, evitando bloqueos y permitiendo que cada función se ejecute en el momento adecuado, al igual que cada músico toca su parte en el momento correcto durante la presentación.

Aquí tienes un ejemplo de pseudo código para ilustrar cómo se utiliza un callback:

```JavaScript
function hacerAlgo(callback) {
  // Hacer alguna operación aquí

  // Una vez que se completa la operación, invocar el callback
  callback();
}

function miCallback() {
  console.log("¡El callback ha sido invocado!");
}

// Pasar miCallback como argumento al hacerAlgo
hacerAlgo(miCallback);
```

En este ejemplo, tenemos una función llamada hacerAlgo que realiza una operación y luego invoca al callback pasado como argumento. En este caso, el callback es la función miCallback. Una vez que hacerAlgo completa su operación, invoca a miCallback y se imprime «¡El callback ha sido invocado!» en la consola.

Explicación de código fuente de JavaScript:

Aquí tienes un ejemplo de código fuente de JavaScript que demuestra el uso de callbacks:

```JavaScript
function doSomething(callback) {
  // Simulamos una operación asincrónica con setTimeout
  setTimeout(function() {
    // Una vez que se completa la operación, invocar el callback
    callback();
  }, 2000);
}

function myCallback() {
  console.log("¡El callback ha sido invocado!");
}

// Pasar myCallback como argumento a doSomething
doSomething(myCallback);
```


En este caso, la función doSomething simula una operación asincrónica utilizando setTimeout. Después de 2 segundos, invoca al callback pasado como argumento, que en este caso es la función myCallback. Al ejecutar este código, se imprimirá «¡El callback ha sido invocado!» en la consola después de que transcurran los 2 segundos.

Los callbacks son una forma común de manejar la asincronía en JavaScript. Sin embargo, pueden llevar a situaciones de anidamiento excesivo de funciones y dificultades para mantener el flujo del programa. Es aquí donde las promesas, que exploraremos a continuación, ofrecen una solución más estructurada y legible.

---

## Promesas

Imagina que estás esperando un paquete muy esperado que será entregado a tu puerta. Tienes una promesa de entrega que te asegura que recibirás el paquete. Mientras esperas, puedes seguir realizando tus tareas diarias, como cocinar, limpiar o trabajar en tu proyecto. La promesa de entrega se cumplirá cuando el paquete llegue y podrás abrirlo para ver su contenido. Si el correo asignado para hacerte la entrega del paquete tiene algún problema para realizar la entrega, enviará una notificación para darte aviso que el paquete no será entregado.

En términos de programación, una promesa en JavaScript es similar. Es una garantía de que una acción o una operación asincrónica se cumplirá en el futuro, de forma exitosa o no pero se cumplirá. Mientras esperas que se cumpla la promesa, tu código puede continuar ejecutándose y realizar otras tareas. Una vez que la promesa se cumple (nuevamente para bien o para mal) obtienes los resultados deseados.

```JavaScript
console.log("hago algo")

// Asignar la promesa a una variable
const promise = new Promise(function(resolve, reject) {
  // Genero un retraso de 500 milisegundos para dar una respuesta
  // Con esto simulo una conexión a una base de datos por ejemplo
  setTimeout(function() {

    //genero un numero al azar de 1 a 10 y pregunto si es par o no
    //de esta forma simulo que a veces el paquete es entregado y a veces no
    if((Math.floor(Math.random() * 10) + 1)  % 2 === 0){
      //el numero es par, el paquete se entrega exitosamente con resolve
      resolve("¡El paquete ha sido entregado!");
    }else{
      //el numero es impar, el paquete no se ha entregado
      reject("Lo siento, no se pudo entregar el paquete.");
    }
  }, 500);
});

console.log("sigo haciendo otra cosa")

// Utilizar la promesa
promise
  .then(function(result){
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });
    
console.log("hago una última cosa.");
```

Aquí la explicación paso a paso de lo que fue pasando en el código anterior

La línea console.log("hago algo") simplemente muestra en la consola el mensaje «hago algo» como una indicación de que se está realizando una tarea.

Se crea una promesa utilizando new Promise(function(resolve, reject) {...}). Esta promesa representa una operación asincrónica simulada, como una conexión a una base de datos. El código dentro de la promesa utiliza setTimeout para simular un retraso de 500 milisegundos antes de dar una respuesta.

Dentro de setTimeout, se genera un número al azar entre 1 y 10 utilizando Math.floor(Math.random() * 10) + 1. Luego, se verifica si el número es par o impar usando el operador de módulo %. Si el número es par, la promesa se cumple llamando a la función resolve y se devuelve el mensaje «¡El paquete ha sido entregado!». Si el número es impar, la promesa es rechazada llamando a la función reject y se devuelve el mensaje «Lo siento, no se pudo entregar el paquete.».
La línea console.log("sigo haciendo otra cosa") muestra en la consola el mensaje «sigo haciendo otra cosa». Esto representa que se está realizando otra tarea mientras la promesa está en curso.

Se utiliza el método .then() para manejar el resultado de la promesa en caso de que se cumpla. Dentro de la función de retorno de .then(), se muestra en la consola el resultado recibido.

Se utiliza el método .catch() para manejar el error de la promesa en caso de que sea rechazada. Dentro de la función de retorno de .catch(), se muestra en la consola el mensaje de error recibido.

Por último, la línea console.log("hago una última cosa.") muestra en la consola el mensaje «hago una última cosa». Esto representa que se está realizando una última tarea después de haber manejado el resultado o el error de la promesa.
Estados

---

Las promesas en JavaScript tienen tres estados posibles:

- **Pending (pendiente)**: Este es el estado inicial de una promesa. Significa que la promesa está en curso y aún no se ha cumplido ni rechazado, esté estado lo encuentras apenas creas la promesa

- **Fulfilled (cumplida)**: Una promesa entra en este estado cuando se cumple exitosamente. Esto significa que se ejecutó la operación asincrónica asociada y se obtuvieron los resultados deseados, aquí es donde recibes el resultado en .then

- **Rejected (rechazada)**: Una promesa entra en este estado si ocurre algún error durante la ejecución de la operación asincrónica. Esto significa que la promesa fue rechazada y se obtiene información sobre el error. Aquí es donde recibes el resultado en .catch

---

## Promesas en video

Programación en español es un excelente canal de Youtube, encontrarás muchos videos de gran calidad y aquí te dejo su explicación del tema de que nos tiene aquí, promesas (solo mira hasta el minuto 27, la clase que viene seguiremos con los temas que están en este [video](https://youtu.be/avT6cNI90HU) )

---
