## <img width="48" height="48" src="https://img.icons8.com/color/48/open-book--v1.png" alt="open-book--v1"/> 1. Introducción a Node.js

Temas:

- Presentación del curso y objetivos

- ¿Qué es Node.js? Historia y por qué es relevante

- Instalación y configuración

- nvm y fnm, gestores de versiones

- "Hola Mundo" en Node.js

- package.json y npm

- Configuración de linter

- Tu primer servidor con Node.js

---

## ¿Qué es Node.js? Historia y por qué es relevante

Node NO es...

...un lenguaje

.. un framework

... un servidor

... un hosting

Node ES un **entorno de ejecución** de **JavaScript**, un sitio donde podes ejecutar JavaScript sin ser el navegador web, se puede ejecutar en el BackEnd, en la terminal, en dispositivos (ej.: Nintendo Switch).

Es de **código abierto**.

Es **multiplataforma**: McOs, Windows, Linux, televisión, etc.

Es **asíncrono**, orientado a **Eventos** (Event loop). Es un modelo de programación que tiene un bucle que va manejando las solicitudes que le van llegando cada vez que tiene un evento. En vez de boquearse, va ejecutando tareas mientra espera respuestas de otras tareas que ha dejado por ahi. Todo esto lo hace un **un solo thread** (no es multi hilo). Vahaciendo cosas en asíncrono, simula que hace más de una cosa a la vez.

El secreto es que utiliza el **motor V8**, el motor de JavaScript que ejecuta el navegador web de Chrome. Es el mismo motro, pero no el mismo entorno,

---

## ¿Por qué aprender Nodejs?

- Demanda del mercado, muchas empresas lo utilizan, todos de alguna forma o otra lo usan. VSC utiliza Nodejs, el ESLinter también lo usa.

- Se puede usar todos los conocimientos de JavaScript, pero en este nuevo entorno de ejecución.

- Se crean aplicaciones web, servidores, Pis, hacer scraping, etc.

- Una comunidad inmensa y un ecosistama más grande aun (paquetes npm).

- Es rápido, escalable, fácil de desplegar y muy barato(hasta gratis).

---

## Historia

En 2009 lo creo Rayan Dahl (actualmente creo Deno, como alternativa a Nodejs), porque necesitaba una alternativa a Apache HTTP Server, un servidor de Apache que no podía manejar muchas peticiones de manera recurrente.

En 2015 Nodejs se unió con la Open Surce Foundation, es totalmente de código abierto.

---

## Instalación y configuración

Ir a la [página oficial: https://nodejs.org/en](https://nodejs.org/en), donde hay dos opciones:

- LTS -> es la versión más estable, Long Term Support

- Actual -> últimas características, pero no es la más estable.

La desventaja es que se instala una versión de Node en el sistema operativo, pero si estamos trabajando en distintos proyectos, con distintas versiones de Node, entonces se podría Dockerizar o se puede utilizar un **administrador de versiones de Node** como lo es **nvm**(**Node Version Manager**), lo que permite utilizar más de una versión de Node, si tenemos windows hay que usar nvm-windows.

Otra alternativa es **fnm** (**Fast and Simple Nodejs Version manajer**), contruido con Rust. Es super rápido y multiplataforma, lo único es que hay que instalar [Rust](https://www.rust-lang.org/) y configurar las variables y el path. Si algo no funciona, por las dudas cerrar y volver a abrir la terminal.

`fnm --version` -> para corroborar por terminal si se instalo bien

`fnm` -> es como el herlp, que te muestra los comandos:

- `fnm list` -> da las versiones de node instaladas -> Utilizar la version **18** de Node

- `fnm install 18.17.0` -> para instalar una versión determinada, en este caso la 18.17.0

- `fnm use 18.17.0` -> Para indicar que versión de Node vamos a usar y si hacemos `node --version` nos aseguramos de ver la misma versión.

---
