# CLASE 32 - CONECTANDO CON BASE DE DATOS

## Temas:

```
-Modulo mysql2
-Estructura del proyecto
-Controladores
-Altas
-Modificaciones
-Bajas
```

---

## Conectar con la base de datos

Como hemos visto con anterioridad, guardar datos en una
base de datos al trabajar en el backend es crucial por varias
razones: Persistencia de Datos, Acceso Eficiente y Rápido,
Seguridad, Gestión de Concurrencia, Flexibilidad y
Escalabilidad, Recuperación ante Fallos entre otros.

En resumen, almacenar datos en una base de datos
proporciona un entorno seguro, eficiente y escalable para
gestionar la información, lo cual es esencial para el
funcionamiento confiable y sostenible de aplicaciones
backend.

---

El módulo mysql2 para Node.js es una
biblioteca que permite interactuar con
bases de datos MySQL y MariaDB desde
aplicaciones Node.js. Está diseñado para
ser rápido, compatible con el protocolo
MySQL, y fácil de usar en combinación
con frameworks como Express.

---

## Instalación en el proyecto

Para poder instalar mysql en nuestro proyecto, simplemente
debemos ejecutar el siguiente comando: ǹpm install mysql`

Importante: Para que funcione correctamente el paquete de
mysql2 tiene que estar instalado MySQL Server en la
computadora local y debe estar en funcionamiento, cómo lo
hemos visto en las clases de bases de datos.

---

## Estructura del proyecto

Reestructuremos el proyecto de la clase pasada de la
siguiente manera:

![image](https://github.com/eugenia1984/node/assets/72580574/8bfbc9a3-5c88-4f8f-af63-d6dafe47d05b)

---

## Archivo app.js

El archivo que comienza todo el proceso:

![image](https://github.com/eugenia1984/node/assets/72580574/0017a3b4-9c19-42db-b2e1-ca3eb9b55fe3)

La declaración del
servidor se mantiene de
la misma manera.
Este archivo utiliza el
módulo movieRoutes

---

## Archivo movieRoutes.js

Vamos a quitar toda la lógica y tratamiento de datos que teníamos en este
archivo.Dejaremos sólo la declaración de las rutas, con sus métodos y el llamado al
movieController con el método específico para cada opción.

![image](https://github.com/eugenia1984/node/assets/72580574/74044711-3490-4149-a44c-6b1aa60eddd5)

De esta manera
simplificamos y ordenamos
nuestro código. Haciendo
más fácil el mantenimiento
posterior.

---

## Archivo movieController.js

El controlador es el que tendrá los cambios más importantes y es el
que hará el tratamiento de la información.
El primer controlador que haremos será getAllMovies que devolverá
todas las películas cargadas en la base de datos.

![image](https://github.com/eugenia1984/node/assets/72580574/a32a5999-bab7-4349-b838-8bec807f4718)

---

## Archivo db.js

Finalmente el archivo db.js será el que cree el objeto que conecta con la base de
datos. Esa conexión utilizará el objeto mysql provisto en en el módulo mysql2

![image](https://github.com/eugenia1984/node/assets/72580574/660ad90e-7d24-48d3-b7aa-9800ee340fdb)

---
---

## Creación de la base de datos

Para hacer la prueba a la base datos, primeramente tendremos que crearla si no
existe. Podemos hacerlo dirctamente a través del Workbench de Mysql, por
ejemplo:

![image](https://github.com/eugenia1984/node/assets/72580574/cb7087a7-d9a9-4eda-8a34-9a0522c3b270)

---

## Levantando el proyecto

Ahora sí, deberemos levantar el Proyecto en Visual Studio y si todo es correcto,
recibiremos el siguiente mensaje:

![image](https://github.com/eugenia1984/node/assets/72580574/16dcf1fc-f5b5-4f2d-ac0d-977db03000d3)

---

## Probando desde Postman:

Ahora, al ejecutar la petición GET movies desde Postman, recibiremos un Status
200 Ok, con un array vacío, porque la tabla no tiene registros. Si ingresamos
manualmente datos a través de MySql, vamos a obtener el JSON de respuesta de
la misma forma en que obteníamos los datos cuando estaban cargados en el array
de peliculas en memoria.

![image](https://github.com/eugenia1984/node/assets/72580574/1fe5e2bc-051c-4dff-b72f-72fb6bdb1f42)

---

## Continúamos con el desarrollo de los controladores

### Parámetros en la consulta

Vamos a trabajar ahora en el controlador getMovieById, en el cual recibimos como
entrada, el valor del id de la película que queremos recuperar de la base de datos.

![image](https://github.com/eugenia1984/node/assets/72580574/d5bb11be-c7ac-4713-b1c0-c4034d5d6514)

El ? es un marcador de posición que será reemplazado por el valor de id
para evitar inyecciones SQL.

La inyección de SQL (SQL Injection) es
una técnica de ataque que explota una
vulnerabilidad en una aplicación que
interactúa con una base de datos. Este
tipo de ataque permite a un atacante
ejecutar comandos SQL arbitrarios en la
base de datos, lo que puede llevar a la
exposición, manipulación o eliminación
de datos sensibles.

---

## Alta de película

Crearemos el controlador createMovie para realizar el alta de la película.

![image](https://github.com/eugenia1984/node/assets/72580574/cc028cc1-bf26-44e4-a592-19d9ce4d5bea)

Nuevamente, a través de los marcadores de posiciones evitamos la inyección de código
malicioso.

Si quisieramos hacer algún control respecto a los datos recibidos, este es el lugar donde
podríamos desarrollarlo y tomar la decision de grabar en la base de datos o devolver un
error al usuario.

----

## Modificación de película

Crearemos el controlador updateMovie para realizar la modificación.

![image](https://github.com/eugenia1984/node/assets/72580574/b0d67753-4e66-4612-842d-1d23f7fb35c3)

Al igual que en el alta, si quisieramos hacer algún control respecto a los datos
recibidos, este es el lugar donde podríamos desarrollarlo y tomar la decision de
grabar en la base de datos o devolver un error al usuario.

---

## Eliminación de película

Crearemos el controlador deleteMovie para realizar la eliminación del dato en la base. En
este caso hemos optado por un borrado físico de la información, pero podríamos haber
optado por un borrado lógico.

![image](https://github.com/eugenia1984/node/assets/72580574/6544cb65-a425-45c7-b99e-4344956cca3a)

### movieController.js

![image](https://github.com/eugenia1984/node/assets/72580574/c44dbcc4-f998-4f10-9b0e-160f41492eb7)

---

## Ejecutando el Código por primera vez

Si es la primera vez que estamos ejecutando nuestro código y no temenos creada
la base de datos, tendremos un error que no podremos manejar a menos que
manualmente realizamos el CREATE TABLE.

Para resolver esa situación, podemos modificar nuestro archivo db.js para que en
el intento de conectar con la base de datos, cree la base y las tablas en caso que no
existan. De esta manera nos aseguramos que aunque borremos la base de datos
en MySQL, la misma se creará automáticamente cuando se ejecute la
aplicación.

----

## Actualización de db.js

![image](https://github.com/eugenia1984/node/assets/72580574/3f13ce7b-f76d-46c8-8f9c-ca9f9e32c0f1)

----

## Estructura del proyecto

Al tener el Proyecto estructurado en archivos y carpetas, es
más fácil realizar el mantenimiento y seguimiento del
Proyecto.

Por ejemplo:

![image](https://github.com/eugenia1984/node/assets/72580574/40174fc5-a9a2-4bd8-9372-5df7e962ab94)

Si cambia la contraseña o la base de datos, deberemos
modificar solamente el archive db.js

Si queremos agregar un tratamiento de datos para usuarios,
agregaremos en un archivo userController.js los
controladores del usuario, en userRoutes.js las rutas que
podrán ser llamadas desde el frontend y en app.js
incorporaremos el modulo de userRoutes.

---

