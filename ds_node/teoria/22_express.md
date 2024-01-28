# :star: ENCUENTRO 22 - Express – Jueves 17 de agosto 19hs de Argentina

¡Hola a todos, queridos desarrolladores/as! Hoy vamos a embarcarnos en un emocionante viaje por el maravilloso mundo de Express, un poderoso framework web para Node.js que nos permitirá construir nuestra propia API de manera rápida y sencilla.

---

## :computer: API REST: Explorando opciones para construir APIs

En el mundo del desarrollo web, existen varias opciones para construir APIs que permiten la comunicación entre aplicaciones. Dos de las opciones más populares son GraphQL y API REST. En esta exploración, nos enfocaremos en API REST, una arquitectura ampliamente utilizada y muy poderosa.

---

## :computer:  Definiendo endpoints para comunicación

Antes de profundizar en los detalles de API REST, es importante comprender qué es un «endpoint». En el contexto de las APIs, un «endpoint» es una URL específica que nuestro servidor expone y que los clientes pueden utilizar para interactuar con la API. Cada endpoint representa una entidad o un recurso en el servidor, y puede realizar una operación específica, como recuperar datos, crear nuevos recursos, actualizar información o eliminar recursos.

En una API REST, la comunicación con el servidor se basa en los métodos HTTP, como GET, POST, PUT y DELETE. Cada uno de estos métodos se utiliza para interactuar con un endpoint específico y realizar una acción determinada en el servidor.

Por ejemplo, consideremos una API REST que maneja una lista de tareas. Podríamos tener los siguientes endpoints:

- GET /tareas: Utilizado para recuperar todas las tareas.

- GET /tareas/1: Utilizado para recuperar la tarea con el ID 1.

- POST /tareas: Utilizado para crear una nueva tarea.

- PUT /tareas/1: Utilizado para actualizar la tarea con el ID 1.

- DELETE /tareas/1: Utilizado para eliminar la tarea con el ID 1.

Cada uno de estos endpoints representa una acción específica que podemos realizar en la API REST. Al realizar una solicitud HTTP a un endpoint, el servidor ejecutará la acción correspondiente y responderá con los datos solicitados o una confirmación del cambio realizado.

### Diferencia entre API y API REST

Es importante destacar la diferencia entre API y API REST. Mientras que API (Interfaces de Programación de Aplicaciones) es un término general que describe cualquier conjunto de definiciones y protocolos que permiten la comunicación entre distintas aplicaciones, API REST es una arquitectura específica que utiliza el protocolo HTTP y sigue ciertas convenciones para manejar recursos.

---
---

## :computer: Express

Express es un framework web minimalista y flexible para Node.js que permite construir aplicaciones web y APIs de manera rápida y sencilla. Es una de las herramientas más populares y ampliamente utilizadas en el ecosistema de Node.js debido a su simplicidad y su enfoque en facilitar el desarrollo de aplicaciones backend.

Express proporciona una capa de abstracción sobre el manejo de solicitudes y respuestas HTTP, lo que facilita la creación de rutas, manejo de parámetros, implementación de middleware y configuración de servidores. Además, ofrece una amplia variedad de funcionalidades y módulos adicionales mediante su sistema de middleware, lo que permite extender las capacidades de la aplicación según las necesidades específicas del proyecto.

Hoy vamos a embarcarnos en un viaje por el maravilloso mundo de Express, un poderoso framework web para Node.js que nos permitirá construir aplicaciones nuestras APIs de manera rápida y sencilla.

---

## Configurando velas con Express

Imagina a Express como un capitán experimentado que nos ayuda a preparar nuestras velas (instalar y configurar Express) antes de zarpar en nuestro barco de desarrollo.

Antes de poder aprovechar todas las ventajas de Express, primero debemos instalarlo en nuestro proyecto. Esto se hace a través de npm, el administrador de paquetes de Node.js. Ejecutamos el siguiente comando en la terminal para descargar Express y sus dependencias

``npm install express``

Una vez que tenemos Express en nuestro proyecto, podemos configurar nuestra aplicación. Crearemos una nueva aplicación utilizando la función express() y la asignaremos a la variable app. ¡Izamos las velas y estamos listos para zarpar!

```JavaScript
const express = require('express');
const app = express();

// Configuración de rutas, middleware y otras funcionalidades aquí

const puerto = 5050;
app.listen(puerto, () => {
  console.log(`¡Zarpamos desde el puerto ${puerto}!`);
});
```

---

## Definiendo rutas: Nuestro mapa en el viaje

Las rutas en Express son como un mapa que nos guía en nuestro viaje. Cuando alguien nos pida un destino específico, sabremos qué camino tomar para llegar allí.

En Express, definimos rutas utilizando los métodos HTTP como GET, POST, PUT, DELETE, entre otros como hemos visto en la definición de API Rerst. Cada método corresponde a una acción que queremos realizar en nuestro servidor. Por ejemplo, cuando alguien solicita la página de inicio («/») de nuestro sitio web, responderemos utilizando el método GET.

```JavaScript
app.get('/', (req, res) => {
  res.send('Hola Mundo, funcionó correctamente');
});
```

---

## Solicitudes y Respuestas: Comunicándonos con otros navegantes

En nuestro viaje, nos encontramos con otros navegantes que nos hacen solicitudes y esperan nuestras respuestas. Express nos ayuda a comunicarnos con ellos de manera efectiva.

En Express, cuando alguien realiza una solicitud a nuestro servidor, la solicitud se captura como un objeto req (request) y la respuesta que enviaremos se prepara como un objeto res (response). Utilizamos estos objetos para interactuar con los navegantes y enviar contenido de vuelta al cliente.

El método res.send() es una forma común de enviar una respuesta al cliente. Puede enviar una cadena de texto, un objeto JSON, un archivo, entre otros. Por otro lado, el método res.json() es específicamente para enviar una respuesta en formato JSON.

```JavaScript
app.get('/usuario', (req, res) => {
  const usuario = {
    nombre: 'Juan',
    edad: 30,
    ocupacion: 'Desarrollador'
  };

  // Enviamos la respuesta en formato JSON
  console.log("respondo con el objeto usuario"); // esto no será parte de la respuesta
  res.json(usuario);
});
```

---

##  A probar

Es hora de encender nuestro programa y empezar a escuchar las solicitudes que recibimos para darles una respuesta

Para ello voy a utilizar un programa llamado Postman que me permitirá realizar request http al servidor que acabo de crear, en este caso haré una llamada tipo GET a http://localhost:5050/usuario

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/f9bead5d-8d89-49a2-b7f1-9ec4b56e52ba)

A través del Postman simulo un la funcionalidad de Frontend solicitando datos a mi API

---

## ¿Qué respuesta damos?

Responder los requests con un status code adecuado es una práctica fundamental en el desarrollo de aplicaciones web y APIs. Los status codes son códigos numéricos enviados por el servidor como parte de la respuesta HTTP, y comunican el resultado del procesamiento de una solicitud realizada por el cliente. Estos códigos proporcionan información esencial sobre el estado de la solicitud y permiten que el cliente y otros componentes comprendan cómo se ha manejado su petición.

Aquí hay una introducción sobre por qué es importante responder los requests con un status code adecuado:

1. Comunicación clara y consistente: Los status codes proporcionan una forma estandarizada de comunicación entre el servidor y el cliente. Al utilizar códigos bien definidos, se logra una comunicación clara y consistente, lo que permite que los desarrolladores y las aplicaciones comprendan rápidamente la naturaleza de la respuesta.

2. Indicar el resultado de la solicitud: Los status codes describen el resultado de la solicitud de manera concisa. Pueden informar si la solicitud fue exitosa, si se redireccionó, si hubo un error del cliente o un error interno del servidor, entre otros escenarios posibles. Esto ayuda a los clientes a determinar si su petición tuvo éxito y cómo deben interpretar la respuesta.

3. Facilitar la depuración y el manejo de errores: Cuando una solicitud no se procesa correctamente, los status codes permiten que el cliente y el servidor comprendan la causa del problema. Esto es fundamental para facilitar la depuración y el manejo de errores. Los códigos de estado específicos ayudan a los desarrolladores a identificar rápidamente qué salió mal y tomar las medidas necesarias para corregir el problema.

4. Guiar el flujo de la aplicación: Los status codes también se utilizan para guiar el flujo de la aplicación o la API. Por ejemplo, un status code de redirección (3xx) indica que la ubicación del recurso solicitado ha cambiado temporal o permanentemente, lo que permite al cliente tomar la acción adecuada para acceder al recurso actualizado.

5. Mejorar la experiencia del usuario: Al responder con códigos de estado adecuados, se mejora la experiencia del usuario. Los mensajes de error claros y precisos permiten a los clientes comprender lo que sucedió y cómo pueden resolver el problema, lo que evita confusiones y frustraciones innecesarias.

Aquí te dejo una lista de los status code más comunes

## Respuestas exitosas (2xx):

- 200 OK: La solicitud ha tenido éxito, y el servidor ha devuelto los datos solicitados.

- 201 Created: La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado.

- 204 No Content: La solicitud ha tenido éxito, pero no hay contenido para enviar en la respuesta.

## Redirecciones (3xx):

- 301 Moved Permanently: El recurso solicitado ha sido permanentemente trasladado a una nueva ubicación.

- 302 Found: El recurso solicitado ha sido temporalmente trasladado a una nueva ubicación.

- 304 Not Modified: Indica que el recurso solicitado no ha sido modificado desde la última vez que fue solicitado.

## Errores del cliente (4xx):

- 400 Bad Request: La solicitud no se pudo comprender debido a una sintaxis incorrecta o parámetros inválidos.

- 401 Unauthorized: El cliente no ha sido autorizado para acceder al recurso solicitado.

- 403 Forbidden: El servidor entiende la solicitud, pero se niega a autorizarla.

- 404 Not Found: El servidor no pudo encontrar el recurso solicitado.

## Errores del servidor (5xx):

- 500 Internal Server Error: Se ha producido un error inesperado en el servidor que ha impedido que pueda procesar la solicitud.

- 503 Service Unavailable: El servidor no está listo para manejar la solicitud debido a mantenimiento, sobrecarga o problemas temporales.

- 504 Gateway Timeout: El servidor no ha recibido una respuesta oportuna del servidor ascendente o el servidor que accede no responde a tiempo.

Aquí te dejo un ejemplo de como responder el status code desde Node.JS

```JavaSCript
const express = require('express');
const app = express();
const port = 3000;

app.get('/ruta', (req, res) => {
  try {
    // Simulamos un true o false en el if para responder 200 o 500
    if(true){
        res.status(200).json({ mensaje: 'Todo ha salido correctamente' });
    } else {
        throw new Error('Error interno del servidor');
    }
  } catch (error) {
    // Respondemos con el código de estado 500 y un mensaje de error
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
```

---

## Prepárate para el siguiente encuentro

Hasta aquí hemos tenido una introducción liviana sobre el uso de Express, en la próxima clase veremos más sobre este tema y también como distribuir nuestras archivos dentro de la arquitectura de nuestra aplicación.

---
