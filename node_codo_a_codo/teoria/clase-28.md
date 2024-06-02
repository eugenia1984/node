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

---

## Ahora crearemos un proyecto desde cero que sirva archivos estáticos

### Carpeta public

1. Lo primero es crear una carpeta ``public``.

Allí irán todos los archivos que deberán ser enviados tal como fueron alojados.

![image](https://github.com/eugenia1984/node/assets/72580574/8953bdc0-f30a-49e0-8959-574014a15286)

2. Luego en nuestro archivo ``app.js`` agregaremos la ruta a esta carpeta, indicando a Express de que se trata.

![image](https://github.com/eugenia1984/node/assets/72580574/3d1234a2-73bd-4940-81f1-b1487999c333)

El método ``.use()`` es un middleware, concepto que veremos más adelante.

Por el momento debemos saber que nos permite interceptar lo que se ejecute dentro antes que la derivación de nuestras rutas.

3. Ahora creamos un archivo index.html y accedemos a la ruta ``http://localhost:3000``

![image](https://github.com/eugenia1984/node/assets/72580574/554f8b26-60b9-4200-9a82-241736b2e484)

¡Magia! Nos devuelve nuestro archivo HTML.

**Asícomoindex.html, podemosdevolvercualquierrecursoa travésde suruta.**
   
---

## Rutas

El cliente buscará acceder al contenido NO ESTÁTICOde nuestro Backend a través de peticiones HTTPa diferentes rutas o endpointsconfigurados en nuestra aplicación.

![image](https://github.com/eugenia1984/node/assets/72580574/2e26c970-82db-46ea-a9fe-8c39bd7b7fbd)

Nuestras rutas serán definidas en Express de la siguiente manera:

```JavaSCript
app.get('/nosotros', (req, res) => {
res.sendFile(__dirname + './nosotros.html');
})
```

- El método ``get`` de app escuchará las peticiones a la ruta /nosotros a través del método HTTP GET y responderá el archivo solicitado.

- La variable ``app`` de express puede escuchar a todos los métodos HTTP, entre ellos GET, POST, PATCH, PUT y DELETE, entre otros.

- ``__dirname`` nos permite tomar como referencia el lugar actual de nuestro archivo dentro del servidor y llegar a un recurso desde esa ruta.

**Las rutas son la manera que tiene nuestro servidor de exponer contenido “no estático” a través de la web.**

-> Recordemos que al usar el protocolo HTTP, las peticiones o requestsse hacen mediante el uso de los HTTP methods.

![image](https://github.com/eugenia1984/node/assets/72580574/b1635a7c-1afd-478b-ae94-31465ca8f49c)

Por ende, nuestro servidor no solo escuchará “paths” o rutas si no que también tendrá en cuenta el método utilizado en la request.

Esto nos permite usar la misma ruta para diferentes cosas.

- No es lo mismo solicitar la ruta “/admin/create” mediante GET en la URL:

![image](https://github.com/eugenia1984/node/assets/72580574/51cbdf21-cf09-4993-8754-1cbaec11b7b1)

- Que utilizar un formulario para enviar datos a través de POST:

![image](https://github.com/eugenia1984/node/assets/72580574/b6b11b7e-9974-4caf-9d82-d391e5c8fdfc)

- Nuestras rutas serán definidas en Express de la siguiente manera:  

![image](https://github.com/eugenia1984/node/assets/72580574/305b2be8-3327-47a0-9aab-c7e6c22d858a)

- Tenemos un archivo items.json, el cual queremos leer y devolver cuando un cliente pida la ruta "/items".

![image](https://github.com/eugenia1984/node/assets/72580574/8757516d-31cd-4d5e-b30f-67bccb1c958d)

En este caso si entramos a localhost:3000 seguiremos obteniendo nuestro archivo
index.html (estático) pero si solicitamos esta ruta nos devolverá un array con los
productos en formato JSON.

*readFileSync nos devuelve un string o cadena de texto con la información y nosotros la convertimos a JSON a través del método JSON.parse().

---

## Rutas Parametrizadas

Ahora supongamos que queremos traer solo un item de la lista

### ¿Cómo podríamos resolverlo?

Las respuestas son las “rutas
parametrizadas”, gracias a ellas
podemos leer una parte de la URL y
utilizarla para devolver una respuesta
diferente según el caso.

![image](https://github.com/eugenia1984/node/assets/72580574/f19eb7ca-2d31-4b31-bc0d-baf982af4b78)


En este caso :id será un valor que pasaremos en la URL y será leído al momento de recibir la petición.

A través de params, capturamos el valor de la URL.

![image](https://github.com/eugenia1984/node/assets/72580574/a87e7fe8-5d61-4857-903b-5101e688eb39)

### Rutas parametrizadas -query

Otramaneradepedirdatosa travésde la URLes mediantelosquerys.

En las rutas parametrizadas en lugar de incluir los parámetros directamente en la rutade la URL, como en las rutas parametrizadas convencionales, los parámetros de consulta se incluyen como pares **clave-valor** enl a parte de la URL que sigue al sign ode interrogación?: ``http://localhost:3000/busqueda?palabra=perro&tipo=animal``

En est aURL, **busqueda** es la ruta, y palabra y tipo son los parámetros de consulta, **palabra=perro** y **tipo=animal** son los valores asociados a esos parámetros.

En este caso el cliente está buscando resultados relacionados con la palabra "perro" y el tipo de resultado es "animal".

En el servidor, estos parámetros de consulta pueden ser recuperados y utilizado spara realizar acciones específicas, como realizar consultas en una base de datos o generar contenido dinámico para el cliente en función de los valores de los parámetro sde consulta.

### Rutas parametrizadas - query

En otro ejemplo de pedir datos a través de la URL es mediante los querys.

``http://localhost:3000/items?licence=pokemon``

```JavaScript
app.get("/items", (req, res) => {
  const licence = req.query.licence; //pokemon
  // lógica que filtra los ítems de la licencia pokémon
})
```

Usamos la misma ruta que para todos los
items, solo que si recibimos un query
param, capturamos el valor de la URL e
incluimos una lógica para devolver solo los
valores coincidentes.

Cuando se recibe una solicitud en esta
ruta, Express.js analiza automáticamente
los parámetros de consulta de la URL y los
hace accesibles a través del objeto
req.query. En este caso, estamos
extrayendo el valor del parámetro
licence con req.query.licence.

![image](https://github.com/eugenia1984/node/assets/72580574/612cdc4e-68bb-4c7b-bd3c-b9c5a54117cd)


---
