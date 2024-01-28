# :star: Node Package Manager – Lunes 14 de agosto 19hs de Argentina

Continuamos con el curso de Node.js. Ya llevamos más de 20 clases juntos, y estoy realmente impresionado por su dedicación y entusiasmo en aprender más sobre el mundo de la programación en Node.js.

Hoy vamos a sumergirnos en un tema fundamental para el desarrollo en Node.js: NPM, que significa «Node Package Manager» (Administrador de paquetes de Node). NPM es como una caja mágica llena de herramientas increíbles que hacen que nuestro trabajo sea más fácil y eficiente.

---

## :computer: ¿Qué es NPM?

NPM es el mejor amigo de todo desarrollador de Node.js. Es una herramienta que nos permite instalar, compartir y administrar paquetes de código reutilizable, también conocidos como «módulos», para nuestros proyectos. En otras palabras, es una enorme colección de código creado por la comunidad, disponible para que todos podamos usarlo en nuestros propios programas.

¿Se imaginan tener que escribir todo el código desde cero cada vez que comenzamos un nuevo proyecto? Sería agotador, ¿verdad? Pero gracias a NPM, podemos acceder a miles de paquetes útiles y ahorrar un montón de tiempo y esfuerzo.

---

## Iniciar un proyecto con npm init

Comencemos por el principio. Antes de sumergirnos en el mundo de los paquetes y las dependencias, necesitamos un proyecto. Para eso, usaremos el comando npm init. Es como plantar la semilla para que nuestro proyecto crezca.

Al ejecutar npm init, nos guiará a través de un asistente interactivo. Podremos proporcionar información como el nombre del proyecto, la versión, el autor, la descripción y más. El asistente generará automáticamente un archivo especial llamado package.json. Este archivo es el corazón de nuestro proyecto, y en él se registrará toda la información relevante sobre nuestras dependencias, scripts y configuraciones. ¡Es como un pasaporte para nuestro proyecto en el mundo de Node.js!



![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/28df16ba-a28b-43b9-a0ab-f3a09e1cfac5)

---

## Archivo package.json y package-lock.json

El archivo package.json es crucial para cualquier proyecto de Node.js. Contiene información vital sobre nuestro proyecto, como las dependencias que necesita para funcionar correctamente. Además, aquí es donde almacenamos nuestros scripts personalizados que nos permiten hacer cosas interesantes con nuestro código.

Por otro lado, tenemos el package-lock.json, que es un archivo creado automáticamente cuando instalamos paquetes con npm install. Este archivo es muy importante porque nos asegura que, si compartimos nuestro proyecto con otros desarrolladores o lo movemos a otro lugar, se instalarán exactamente las mismas versiones de las dependencias. Esto evita problemas de compatibilidad y mantiene nuestro proyecto estable y confiable.

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/a6990012-e8eb-42a7-aefb-9e1457bae679)

---

## Gestión de paquetes con NPM

Ahora que tenemos nuestro proyecto en marcha, llegó el momento de añadir funcionalidades utilizando paquetes de NPM. Para instalar un paquete, solo necesitamos utilizar el comando npm install nombre_del_paquete. ¿Fácil, verdad?

NPM buscará el paquete en su gigantesca base de datos y lo descargará automáticamente para nosotros. Además, si necesitamos una versión específica, podemos indicarlo en el package.json o usar la opción adecuada para instalarla. NPM también se encargará de registrar todas las dependencias necesarias para que nuestro paquete funcione correctamente.

En el siguiente ejemplo instalaré Axios que me permite realizar solicitudes HTTP desde el lado del servidor. Es muy útil para interactuar con APIs externas, obtener o enviar datos y realizar operaciones HTTP de manera fácil y eficiente en proyectos de Node.js.

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/6899e6ac-909d-4185-be9f-6d6aefab6696)

---

## Dependencias de Desarrollo

Estas son las dependencias que solo son necesarias durante el proceso de desarrollo y pruebas del proyecto, pero no se utilizan en el entorno de producción. Estas dependencias pueden incluir herramientas de prueba, linters, empaquetadores y más.

Para instalar una dependencia de desarrollo, se utiliza el flag -D o --save-dev, de la siguiente manera:

``npm install NombreDelPaquete -D``

Al usar ``-D``, tu dependencia se agrega al archivo package.json bajo la propiedad «devDependencies», indicando que es una dependencia requerida solo para el desarrollo.

Veamos un ejemplo:

Supongamos que estamos desarrollando una aplicación que necesita generar nombres y correos electrónicos falsos con datos realistas para propósitos de prueba. Utilizaremos la dependencia «faker» para cumplir con este requisito.

``npm install faker -D``

Ahora, en nuestro archivo de script de desarrollo (por ejemplo, index.js), podemos utilizar «faker» para generar datos falsos:

```JavaScript
// index.js
const faker = require('faker');

for (let i = 0; i < 5; i++) {
  const name = faker.name.findName();
  const email = faker.internet.email();
  console.log(`Nombre: ${name}, Email: ${email}`);
}
```

Este ejemplo generará cinco nombres y correos electrónicos falsos utilizando «faker».

Recuerda que, al ejecutar npm install en entornos de producción está dependencia no será instalada, por lo que no debes escribir código que aplique en tu aplicación de producción.

---

## NPM Script

Los Scripts de NPM son una característica muy útil que te permite ejecutar comandos personalizados desde la línea de comandos para automatizar tareas específicas en tu proyecto. Puedes crear scripts para realizar tareas comunes como compilar código, ejecutar pruebas, iniciar el servidor de desarrollo, entre otras cosas.

La sección de Scripts se encuentra en el archivo package.json de tu proyecto Node.js y tiene la siguiente estructura:

```JavaScript
{
  "name": "mi_proyecto",
  "version": "1.0.0",
  "scripts": {
    "nombre_script": "comando_a_ejecutar",
    "otro_script": "comando_otra_tarea"
  },
  // Otras propiedades del package.json...
}
```

Cada propiedad dentro de la sección de Scripts es un nombre que le das a tu script, y el valor de esa propiedad es el comando que deseas ejecutar. Para ejecutar un script, utilizas el comando npm run seguido del nombre del script.

``npm run nombre_script``

---
