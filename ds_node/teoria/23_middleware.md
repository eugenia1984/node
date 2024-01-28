# :computer: ENCUENTRO 23 -  Lunes 21 de agosto 19hs de Argentina

Los middlewares en Node.js son una parte fundamental para desarrollar aplicaciones web eficientes y escalables. Son funciones que se ejecutan en el flujo de solicitud y respuesta de una aplicación y permiten realizar tareas comunes, como la manipulación de datos, la autenticación, la autorización, el registro de solicitudes, entre otras. En este artículo, exploraremos en detalle qué son los middlewares, cómo funcionan y cómo se pueden implementar en una aplicación Node.js.

---

## :star: ¿Qué es un Middleware?

En el contexto de Node.js, un middleware es una función intermedia que se coloca entre la solicitud (request) que llega a la aplicación y la respuesta (response) que se enviará al cliente. Estas funciones tienen acceso a los objetos de solicitud y respuesta, y pueden realizar tareas adicionales antes de que la solicitud sea manejada por la ruta final de la aplicación.

La arquitectura de middleware permite que las solicitudes pasen a través de múltiples capas de procesamiento antes de llegar a su destino final. Esto proporciona una forma modular y flexible de manejar el flujo de la aplicación, ya que los middlewares pueden agregarse, eliminarse o reorganizarse fácilmente.

---

## :star: Funcionamiento de los middlewares

Cuando una solicitud llega a la aplicación, pasa a través de una cadena de middlewares antes de ser procesada por la ruta final. Cada middleware puede realizar alguna acción específica y luego decidir si pasar la solicitud al siguiente middleware en la cadena o enviar una respuesta al cliente, lo que detendría el flujo de ejecución.

El orden en el que se definen los middlewares es esencial, ya que se ejecutan secuencialmente en el orden en que se agregan a la aplicación. Por lo tanto, el primer middleware definido será el primero en ejecutarse y así sucesivamente.

Implementación de Middlewares en Node.js
Existen 2 formas de implementar en middleware, a un endpoint en específico o bien a todos los endpoints

Aplicar el middleware a un solo endpoint

```JavaScript
const express = require('express');
const app = express();

// Middleware para una ruta específica
const miMiddleware = (req, res, next) => {
  console.log('Este middleware se aplica solo a la ruta específica.');
  next();
};

// Ruta final de la aplicación con el middleware
app.get('/ruta-especifica', miMiddleware, (req, res) => {
  res.send('Esta es la ruta específica con el middleware aplicado.');
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
```

En este ejemplo, hemos creado un middleware llamado miMiddleware, y lo hemos aplicado únicamente a la ruta /ruta-especifica. Cada vez que se realice una solicitud a /ruta-especifica, el middleware se ejecutará antes de llegar a la ruta final.

Aplicar middleware a todos tus endpoints


```JavaScript
const express = require('express');
const app = express();

// Middleware para todas las rutas
const miMiddleware = (req, res, next) => {
  console.log('Este middleware se aplica a todas las rutas.');
  next();
};

// Middleware de registro de solicitudes para todas las rutas
app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

// Middleware de manejo de errores para todas las rutas
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Algo salió mal en el servidor.');
});

// Ruta final de la aplicación con el middleware
app.get('/ruta-1', miMiddleware, (req, res) => {
  res.send('Esta es la ruta 1 con el middleware aplicado.');
});

// Ruta final de la aplicación con el middleware
app.get('/ruta-2', miMiddleware, (req, res) => {
  res.send('Esta es la ruta 2 con el middleware aplicado.');
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
```


En este ejemplo, hemos utilizado app.use para aplicar un middleware tanto para el registro de solicitudes como para el manejo de errores a todas las rutas de la aplicación. Cada vez que se realice una solicitud, estos middlewares se ejecutarán antes de llegar a la ruta final, sin importar cuál sea la ruta solicitada.

---

## :star: Uso de next() en Middlewares

En los ejemplos anteriores, hemos visto que utilizamos next() en el middleware para pasar al siguiente middleware en la cadena o a la ruta final. next() es una función proporcionada por Express.js que se utiliza para controlar el flujo de ejecución y permitir que la solicitud continúe avanzando a través de la cadena de middlewares.

Si no llamamos a next(), el flujo de ejecución quedará bloqueado en ese middleware y la solicitud no llegará a la ruta final o al siguiente middleware. Esto puede ser útil, por ejemplo, para implementar lógica de autorización en un middleware y detener la ejecución si el usuario no tiene permisos para acceder a ciertas rutas.

Manejo de Errores
El siguiente ejemplo muestra cómo se puede crear un middleware para el manejo de errores en una aplicación Express.js:


```JavaScript
const express = require('express');
const app = express();

// Middleware para manejo de errores
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Algo salió mal en el servidor.');
};

// Ruta final de la aplicación con error intencional
app.get('/error', (req, res, next) => {
  const error = new Error('Este es un error intencional');
  next(error);
});

// Aplicar middleware de manejo de errores a todas las rutas
app.use(errorHandler);

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
```

En este ejemplo, hemos creado un middleware errorHandler para manejar errores. Cuando se realiza una solicitud a la ruta /error, el middleware lanza un error intencional utilizando next(error). El middleware de manejo de errores capturará ese error y responderá con un mensaje genérico de error en el servidor.

Este es solo un ejemplo básico de manejo de errores, pero en una aplicación real, este middleware podría registrar errores en un archivo de registro o notificar al equipo de desarrollo sobre problemas críticos.

---

## Preparate para la siguiente clase.

En la siguiente clase veremos más aplicaciones de middlewares y como nos pueden ayudar en nuestras aplicaciones.

---
