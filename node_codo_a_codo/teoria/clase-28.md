# Clase 28 - Node

## Tema:

- Express

- Servidor estático

- Nodemon

- Rutas

--- 

**Node.js Un framework a la medida.**

---

## Frameworks Node

Montar un server de forma nativacon Node para proyectos robustosresulta algo tedioso y difícil de escalar.

Por eso existen diversos Frameworks de Node como HapiJS, Koa, NestJS o Express, entre otros.

Este último es el más popular y actualmente se encuentra bajo el soporte de laOpenJS Foundation.

[https://openjsf.org/about/](https://openjsf.org/about/)

---

## Express.js

Express JS
Es un framework de aplicaciones web mínimo y flexible en el entorno de NodeJS.

Posee miles métodosy middlewarespara programas HTTPque facilitan la creación de una APIsólida de forma rápida y sencilla.

Una de las ventajas de Express es que nos permite levantar un servidor web muy fácilmente.

Pero antes de eso, debemos preparar nuestro proyecto para trabajar con librerías.

En la terminal corremos el comando: ``npm init -y``

Instalamos Express mediante npm: ``npm install express --save``

El flag --save indica que debe registrar la dependenciay sus subdependencias actualizadas.

A continuación, vemos en el package.json que contamos con una lista de dependencias con express en la versión que acaba de instalar.

![image](https://github.com/eugenia1984/node/assets/72580574/59bedba5-a8c0-4565-b96c-dea49c0debab)

- Inspeccionamos **packege.json**:

![image](https://github.com/eugenia1984/node/assets/72580574/a2622f5d-e7a1-41e0-8350-d15a4d217ebe)

**Ya tenemos Express instalado. ¡Es momento de crear un nuevo server!**
 
---

## Servidor estático con Express

Creamos el archivo ``app.js`` e importamos el módulo de express.

Luego ejecutamos la función ``express();`` y la guardamos en una variable llamada app.

![image](https://github.com/eugenia1984/node/assets/72580574/c41814ff-7470-4d52-9ba5-4fc58da6651c)

Una vez importado el módulo y ejecutada una instancia de express tenemos que definir el puerto que va a estar escuchando nuestro
servidor y configurar nuestra primera ruta con la respuesta a su petición:

-El método **.get()** de app escuchará las peticiones a la ruta / a través del método HTTP GET y responderá el texto citado.

-El método **.listen()** recibe un parámetro port con el puerto donde correrá el server y un callback que en este caso lo usamos para enviar un mensaje por consola.

![image](https://github.com/eugenia1984/node/assets/72580574/d82e6f9b-7101-445d-8d2d-4f460d75650a)

Para ejecutar nuestro servidor podemos hacerlo igual que antes mediante la terminal con: ``node app.js`` o definiendo un script para ello en
nuestro archivo ``package.json``:

![image](https://github.com/eugenia1984/node/assets/72580574/4abcee45-29f5-48f5-83f5-1442aff06d90)

**De esta manerapodemos devolver un texto o unarchivo estático queresponda a una ruta específicamediante el método .get()**

---

## Archivos estaticos

Veamos cómo podemos, con Express, definir una carpeta que sirva archivos tal como lo haría un servidor estático.

Pero antes un paso es necesariovernodemon...

### ¿Qué es Nodemon?

Es una herramienta que se utiliza en el desarrollo
de aplicaciones Node.js para automatizar el
proceso de reinicio del servidor cada vez que se
detectan cambios en los archivos del proyecto.

Esta librería nos ayuda recargando el servidor
frente a cada cambio, sin tener que hacerlo
manualmente.

La instalamos como dependencia de desarrollo:

![image](https://github.com/eugenia1984/node/assets/72580574/86a2791d-d096-47b9-8385-5493210cac03)

---

## Node v18+

Desde la versión 18 de NODE no se necesita
instalar Nodemon ya que el mismo programa
cuenta con una funcionalidad propia para
recargar nuestro servidor, el flag ``--watch``.

Al ser una característica (feature) tan reciente
y dado que no todas las PCs son compatibles
con la última versión, por el momento se
puede trabajar con Nodemon.


![image](https://github.com/eugenia1984/node/assets/72580574/4a6b88a3-c9fa-4791-9b44-0ca23efbf694)
