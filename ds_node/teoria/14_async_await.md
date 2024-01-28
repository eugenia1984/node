# :computer: Async Await – Jueves 20 de julio 19hs de Argentina

Cuando se trata de desarrollar aplicaciones de backend en Node.js, la asincronía se convierte en una herramienta esencial para manejar operaciones intensivas y proporcionar un rendimiento óptimo. En el mundo del backend, las tareas a menudo involucran la comunicación con bases de datos, el acceso a sistemas de archivos, el envío de solicitudes a APIs externas o la manipulación de grandes conjuntos de datos.

Para aprovechar eficientemente estas operaciones, Node.js introduce las funciones asincrónicas, que nos permiten desbloquear el potencial de la asincronía y mejorar el rendimiento y la capacidad de respuesta de nuestras aplicaciones de backend.

Imaginemos que eres el administrador de un sistema de gestión de inventario para un almacén. Tu tarea consiste en procesar las órdenes de los clientes, mantener actualizado el inventario y generar informes periódicos. Cada una de estas tareas puede requerir diferentes operaciones, como consultar la base de datos para obtener información del inventario, realizar cálculos complejos o enviar notificaciones a los clientes cuando se complete una orden.

Aquí es donde las funciones asincrónicas juegan un rol fundamental. Al igual que en el mundo de la cocina, donde puedes preparar varias tareas simultáneamente, las funciones asincrónicas en Node.js te permiten realizar operaciones de forma paralela y aprovechar al máximo el tiempo. Mientras una tarea, como la consulta de la base de datos, está en progreso, puedes iniciar otras tareas en segundo plano, como el cálculo de informes o el envío de notificaciones, sin bloquear la ejecución del programa.

Con las funciones asincrónicas, puedes crear una experiencia de backend eficiente y receptiva. Estas funciones te permiten manejar múltiples tareas concurrentes y aprovechar al máximo los recursos de tu servidor, garantizando así un rendimiento óptimo para tu aplicación de backend.

A medida que profundizamos en está clase, exploraremos cómo las funciones asincrónicas en Node.js, combinadas con promesas y async/await, te permiten gestionar eficientemente tareas intensivas, manejar errores de manera efectiva y construir aplicaciones backend de alto rendimiento.

---

## :star: Promesas y el modelo de programación asíncrona: Simplificando la gestión de operaciones asincrónicas

Cuando nos enfrentamos a tareas asincrónicas en JavaScript, como realizar solicitudes a una API, leer archivos o interactuar con una base de datos, es vital poder manejar adecuadamente su flujo y asegurarnos de que las operaciones se completen correctamente.

Aquí es donde entran en juego las promesas. Una promesa es un objeto que representa el resultado pendiente de una operación asincrónica. Proporciona una forma estructurada y más legible de manejar el flujo asincrónico y evitar los problemas asociados con los callbacks anidados.

Imagina que tienes una promesa como una promesa hecha por alguien. Al hacer una promesa, alguien se compromete a hacer algo en el futuro y puede tener dos resultados: cumplir la promesa (resolución) o no cumplirla (rechazo).

En JavaScript, una promesa sigue el mismo principio. Puedes crear una promesa y definir qué sucede cuando se cumple o se rechaza. Por ejemplo, al realizar una solicitud HTTP para obtener datos de una API, puedes crear una promesa que se resuelva con los datos obtenidos o se rechace si ocurre un error en la solicitud.

Al utilizar promesas, podemos encadenar múltiples operaciones asincrónicas de forma más clara y concisa. Esto se logra mediante el uso de los métodos then() y catch(). El método then() se utiliza para manejar la resolución exitosa de una promesa, mientras que el método catch() se utiliza para capturar cualquier error que ocurra durante la ejecución de la promesa.

Además, las promesas nos permiten realizar operaciones asincrónicas en paralelo, utilizando el método Promise.all(), que acepta un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas del array se han resuelto.

Las promesas simplifican el modelo de programación asincrónica en JavaScript al proporcionar una forma estructurada y más legible de manejar el flujo asincrónico. Nos permiten encadenar operaciones asincrónicas, manejar resoluciones exitosas y capturar errores de manera más clara y concisa. Con el uso de promesas, podemos escribir código más mantenible y comprensible al lidiar con operaciones asincrónicas en nuestras aplicaciones.

---

## :star: Funciones asíncronas

Si bien las promesas nos permiten manejar operaciones asincrónicas de manera más estructurada, JavaScript introdujo la sintaxis async/await para simplificar aún más la escritura de código y hacer que el flujo asincrónico sea más similar al flujo sincrónico.

La palabra clave async se utiliza para declarar una función asincrónica. Al marcar una función con async, indicamos que contendrá operaciones asincrónicas y que, dentro de ella, podemos utilizar la palabra clave await.

La palabra clave await se utiliza dentro de una función asincrónica para esperar la resolución de la acción que estamos realizando, es decir, detenemos el flujo de la aplicación en ese momento. Al utilizar await, detenemos la ejecución de la función hasta que la promesa se resuelva.

Esta combinación de async/await nos permite escribir código asincrónico de una manera que se asemeja a las operaciones secuenciales sincrónicas. Por ejemplo, en lugar de encadenar múltiples promesas utilizando then(), podemos utilizar await para esperar la resolución de cada promesa en un orden secuencial, lo que hace que el código sea más legible y fácil de seguir.

Aquí hay un ejemplo que ilustra la sintaxis async/await:

```JavaScript
async function obtenerDatosDeAPI() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const datos = await respuesta.json();
    console.log(datos)
}

obtenerDatosDeAPI()
```

Tranquilamente podrías hacer lo mismo con promesas, mira como quedaría cada uno de los códigos y ve tu mismo que sintaxis resulta más clara para esto

### Promesas

```JavaScript
const obtenerDatos = new Promise((resolve, reject) => {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((respuesta) => respuesta.json())
    .then((datos) => resolve(datos))
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
      reject(error);
    });
});

obtenerDatos
  .then((datos) => {
    console.log(datos);
  })
  .catch((error) => {
    console.log("algo salió mal" + error)
  });
Funciones asíncronas
async function obtenerDatosDeAPI() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const datos = await respuesta.json();
    console.log(datos)
}

obtenerDatosDeAPI()
```


La función fetch no está por default en Node.JS, hay que instalarlo pero ya lo veremos más adelante con el gestor de paquete npm
Para correr el código puedes utilizar un interprete de JavaScript, por ejemplo: https://playcode.io/javascript-compiler

Las promesas y las funciones asincrónicas son dos enfoques diferentes para manejar operaciones asincrónicas en JavaScript.

- **Promesas**: Las promesas son objetos que representan la eventual finalización (o falla) de una operación asincrónica. Proporcionan un mecanismo para manejar el resultado de una operación asincrónica de manera más estructurada y legible. Las promesas se crean utilizando el constructor Promise y se encadenan mediante los métodos then y catch para manejar el resultado de la promesa. Con las promesas, se utiliza un enfoque basado en callbacks para manejar la resolución o el rechazo de la promesa.

- **Funciones asincrónicas**: Las funciones asincrónicas, introducidas con la palabra clave async, son una forma de escribir código asincrónico de manera más sincrónica y legible. Las funciones asincrónicas permiten utilizar la palabra clave await dentro de ellas para esperar la resolución de una promesa. Esto evita el encadenamiento de callbacks y proporciona una estructura más similar a la programación síncrona. Las funciones asincrónicas también pueden manejar errores utilizando bloques try-catch, lo que simplifica el manejo de errores en comparación con las promesas.

---

## :star: Return en funciones asíncronas

Cuando definimos una función sin la palabra clave async, se comporta de forma síncrona y el valor de retorno se devuelve directamente al llamar a la función. Es decir, la función se ejecuta secuencialmente y retorna el resultado una vez que todas las operaciones dentro de ella se han completado.

Por otro lado, cuando utilizamos la palabra clave async en la definición de una función, la función se vuelve asíncrona y devuelve una promesa.

Como hemos visto, cuando llamamos a una función definida con async, esta función se ejecuta de manera asíncrona, lo que significa que puede contener operaciones que tomen tiempo X.
En lugar de esperar a que se complete toda la función y devolver el resultado directamente, una función async devuelve una promesa inmediatamente, que se resolverá con el valor de retorno una vez que todas las operaciones asíncronas dentro de la función se hayan completado.

Por lo tanto si quisiere obtener el valor del «return» debo manejarlo como una promesa en el lugar donde se ha llamado.

---

## :star: Try / Catch en funciones asíncronas
Ahora como desarrolladores es un rol sumamente importante manejar los posibles errores que se puedan producir, para ello podemos hablar sobre cómo combinar el uso de try-catch con funciones asíncronas para manejar errores de manera más efectiva.

Las funciones asíncronas nos permiten utilizar bloques try-catch para capturar y manejar errores que se produzcan durante la ejecución de una operación asíncrona. Esto es especialmente útil cuando trabajamos con promesas, ya que nos permite capturar y manejar errores tanto en el proceso de resolución de la promesa como en su rechazo.

Aquí tienes un ejemplo que muestra cómo combinar try-catch con una función asíncrona que utiliza promesas:

```JavaScript
async function obtenerDatos() {
  try {
    const respuesta = await fetch('https://api.example.com/data');
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    throw error;
  }
}

async function mostrarDatos() {
  try {
    const datos = await obtenerDatos();
    datos.forEach((dato) => {
      console.log(dato);
    });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

mostrarDatos();
```

En primer lugar, se define una función asincrónica llamada obtenerDatos. Dentro de esta función, se utiliza la palabra clave await para esperar la respuesta de una solicitud a la URL ‘https://api.example.com/data‘ mediante el uso de la función fetch. Luego, se utiliza await nuevamente para esperar que la respuesta se convierta en formato JSON utilizando el método json(). Si todo funciona correctamente, se devuelve el objeto de datos.

Si ocurre algún error durante estas operaciones, el flujo de ejecución se desvía al bloque catch. En este caso, se lanza la excepción error utilizando la palabra clave throw. Esto significa que la excepción será propagada y capturada por el bloque catch de la función que llama a obtenerDatos.

A continuación, se define otra función asincrónica llamada mostrarDatos. Dentro de esta función, se utiliza await para llamar a la función obtenerDatos() y esperar los datos resultantes. Luego, se itera sobre los datos utilizando el método forEach y se muestra cada elemento en la consola.

Si ocurre algún error durante la obtención de los datos o el bucle forEach, el flujo de ejecución se desvía al bloque catch. Aquí, se muestra un mensaje de error en la consola con la descripción del error.

Finalmente, se llama a la función mostrarDatos() para iniciar la ejecución del código.

---

Prepárate para la próxima clase

En la próxima clase veremos más en profundidad conceptos de asincronía

---
