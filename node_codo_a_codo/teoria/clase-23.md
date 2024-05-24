# <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Clase 23: Lenguaje y Sublenguajes SQL

```
- Gestión y manipulación de datos con SQL 
- Gestión y manipulación de datos 
- Sublenguajes DDL y DML 
-  Consultas: Estructura consulta SQL. Cláusulas SELECT, FROM, WHERE 
- Alias y literales. ORDER BY
```

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>  Arquitectura Cliente-Servidor

Es un modelo de aplicación distribuida en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados
servidores, y los demandantes, llamados clientes. ● Un cliente realiza peticiones a otro programa.

![image](https://github.com/eugenia1984/node/assets/72580574/5be57979-fc76-45bd-89cc-3edadd6b77a3)


● El servidor es quien le da respuesta.

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Cliente-Servidor en Bases de Datos

Las bases de datos en general utilizan la arquitectura Cliente-Servidor para proveer servicios de almacenamiento de información a determinados usuarios (Clientes).

![image](https://github.com/eugenia1984/node/assets/72580574/ff9a5485-8351-4d78-977b-3bac17277ba6)

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> ¿Cómo se conecta un cliente a un servidor de BD?

El software intermediario entre un usuario y el servidor que provee el servicio de almacenamiento en bases de datos es conocido como SGBD (Sistema Gestor de Bases de Datos).

![image](https://github.com/eugenia1984/node/assets/72580574/a5bb61b5-58aa-4487-afa8-d080acc23895)

A través de los SGBD, los usuarios pueden hacer CONSULTAS en lenguaje SQL (Structured Query Language o Lenguaje de Consulta
Estructurado) para realizar distintas operaciones.

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> ¿Cómo armar un Servidor de BD?

Para armar un servidor de base de datos se pueden utilizar diferentes softwares, entre ellos, distribuciones de Linux, sistemas operativos especializados para bases de datos, servidores virtuales, servidores online, etc.

De forma experimental, el software que podremos utilizar para armar un servidor de BD es el XAMPP Server, visto en la presentación anterior. Para más detalles ver tutoriales recomendados.

El Sistema Gestor de Bases de Datos que utilizaremos será MySQL, uno de los más utilizados a nivel mundial.

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> ¿Cómo empezamos a pensar en una BD?

La manipulación de los datos consiste en la realización de operaciones de inserción, borrado, modificación y consulta de la información almacenada en la base de datos.

La inserción y el borrado son el resultado de añadir nueva información o eliminarla de nuestra base de datos, tomando en cuenta las restricciones marcadas por el DDL y las relaciones entre la nueva información y la antigua. La modificación nos permite
alterar esta información, y la consulta nos permite el acceso a la información almacenada en la base de datos siguiendo criterios específicos.

Estas operaciones se podrán ejecutar a través de sentencias, que nos permitirán más adelante realizar los sistemas denominados CRUD.

CRUD: acrónimo de “Crear, Leer, Actualizar y Borrar” (Create, Read, Update and Delete), usado para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software.

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Sentencias DDL

**Lenguaje de definición de datos (DDL: Data Definition Language)**: se encarga de la modificación de la estructura de los objetos de la base de datos.

Incluye órdenes o sentencias para crear, modificar o borrar las tablas en las que se almacenan los datos de la base de datos.

Utilizamos tres sentencias: **CREATE, ALTER y DROP**.

### CREATE: Crear una base de datos

Con CREATE DATABASE creamos una base de datos con el nombre indicado en esa orden. Es necesario tener permisos del sistema de
base de datos. Un equivalente es CREATE SCHEMA. 

Si la base de datos ya existe se produce un error, para salvarlo podemos especificarle IF NOT EXISTS.

Ejemplo:

```SQL
CREATE DATABASE IF NOT EXISTS databasename;
```

### CREATE TABLE: Crea una tabla:

```SQL
CREATE TABLE alumnos (
dni int(11),
nombre varchar(30),
apellido varchar(30),
fecha_nac date
);
```

Si intentamos crear una tabla con un nombre ya existente (existe otra tabla con ese nombre), mostrará un mensaje de error indicando que la acción no se realizó porque ya existe una tabla con el mismo nombre.


![image](https://github.com/eugenia1984/node/assets/72580574/fd949b16-6403-40b5-8634-468ed048a1cc)

### SHOW TABLES: 

Nos permite ver las tablas existentes en una base de datos.

### ALTER TABLE: 

Nos permite agregar, eliminar o modificar una columna..

- **ALTER TABLE … ADD**: Agrega una columna:

```
ALTER TABLE nombre_de_tabla
ADD nombre_de_columna tipo de dato;
```

- **ALTER TABLE … DROP**: Elimina una columna:

```
ALTER TABLE nombre_de_tabla
DROP COLUMN nombre_de_columna;
```

### DROP TABLE: 

Elimina una tabla.

```SQL
DROP TABLE alumnos;
```

Si tipeamos nuevamente:

```SQL
DROP TABLE alumnos;
```

Aparece un mensaje de error, indicando que no existe, ya que intentamos borrar una tabla inexistente. Para evitar este mensaje podemos tipear:

```SQL
DROP TABLE IF EXISTS alumnos;
```

- Ejemplo ALTER y DROP:

![image](https://github.com/eugenia1984/node/assets/72580574/4b49accc-811c-4bcd-a204-f16a710b1876)


### DESCRIBE: 

Nos permite ver la estructura de una tabla.

```SQL
DESCRIBE alumnos;
```

Aparecerá lo siguiente:

![image](https://github.com/eugenia1984/node/assets/72580574/09116616-c3aa-4e9c-8800-62777a36a01c)

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>

---
