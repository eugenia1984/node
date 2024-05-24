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

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Sentencias DML

El **Lenguaje de Manipulación de Datos (Data Manipulation Language, DML)** permite a los usuarios de una base de datos llevar a cabo tareas de consulta o modificación. 
 
Para hacer estas actividades dentro del lenguaje SQL tenemos las siguientes sentencias:

- **INSERT**: Para agregar un registro (fila o tupla).

- **UPDATE**: Para modificar atributos de una o varios registros.

- **DELETE**: Para borrar registros completos de una tabla.

- **SELECT**: Para obtener datos de una base de datos.

### Sentencias de escritura

- **INSERT INTO**: especifica en qué tabla se pretende insertar un dato.
  
- **VALUES**: utilizada en conjunto con INSERT INTO especifica qué valores irán en la tabla.

La lista de atributos es opcional, pero si no se define entonces el DBMS espera una lista de valores coherente con todos los atributos de la tabla.

![image](https://github.com/eugenia1984/node/assets/72580574/da353c59-cb1f-4bd2-bc9b-f1117017f4c2)


![image](https://github.com/eugenia1984/node/assets/72580574/1649bee5-76c3-4d57-96b6-d3bd9bd71ac6)


### Sentencias de modificación

- **UPDATE**: especifica en qué tabla se pretende modificar un dato.
 
- **SET**: utilizada en conjunto con UPDATE especifica cuál será el nuevo valor/dato para el campo de ese/os registro/s en particular.

**¡CUIDADO! Si no hay cláusula WHERE lo que ocurrirá es que se actualizarán todos los registros de la tabla. Es un error muy común que cometen algunos usuarios de base de datos.**

![image](https://github.com/eugenia1984/node/assets/72580574/08673ad5-c030-4590-9886-51c3bed6e109)


### Sentencias de baja

- **DELETE**: permite eliminar uno o varios registro/s de una tabla de forma permanente.

**¡CUIDADO! Si no hay cláusula WHERE lo que ocurrirá es que se eliminarán todos los registros de la tabla y quedará vacía.**

![image](https://github.com/eugenia1984/node/assets/72580574/84556bc9-618d-4da8-8962-8deb19e998fc)


### Sentencias SQL | Lectura

Las consultas SQL son los “diálogos” o “preguntas” que se generan entre el usuario y el SGBD dentro del cual se encuentran almacenados los datos. Las cláusulas más conocidas son:

#### DE LECTURA:

● **SELECT**: especifica qué atributo (dato) se pretende obtener.

● **FROM**: utilizada en conjunto con SELECT, especifica desde qué tabla (entidad) se pretende traer el dato.

● **WHERE**: establece una condición específica que deberá cumplir el dato que se pretende traer (cláusula no obligatoria).

Ejemplo: Supongamos que tenemos una tabla de empleados y queremos traer el nombre, apellido y fecha de nacimiento de todos aquellos que hayan nacido después del año 1970 inclusive.

![image](https://github.com/eugenia1984/node/assets/72580574/aa0fa226-78a3-49eb-b6ec-f179ae2816c5)


#### DE ORDEN Y/O AGRUPAMIENTO:

● **ORDER BY**: utilizada para especificar por qué criterio se pretende ordenar los registros de una tabla.

● **GROUP BY**: utilizada para especificar por qué criterio se deben agrupar los registros de una tabla.

Ejemplo: obtener todos los empleados ordenados por apellido.

![image](https://github.com/eugenia1984/node/assets/72580574/2e8bf59c-37ab-4c7f-830a-38bf98257114)

El resultado de esta consulta será traer TODOS los empleados, ordenados por apellido, en lugar de estar ordenados por id
(identificación del empleado) El * significa que deberá traer TODOS los campos sin distinción

- Sentencias SQL | Orden | Ejemplos

![image](https://github.com/eugenia1984/node/assets/72580574/95ae60c5-843e-4c3e-a5ec-29d78256e391)

### Sentencias SQL | LIMIT

● **SELECT LIMIT**: especifica el número de registros a devolver. Sintaxis:

```SQL
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
```

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Operadores de comparación o relacionales

Son utilizados en MySQL para comparar igualdades y desigualdades. Se utilizan en conjunto con la cláusula WHERE para determinar qué registros seleccionar.

![image](https://github.com/eugenia1984/node/assets/72580574/5654248d-ac30-4b7f-aa77-87994d50e664)


---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Sentencias SQL | LIKE

● Se utiliza para comparaciones con campos de tipo cadenas de texto.

● Esta sentencia se podría utilizar para consultar cuáles son los clientes que viven en una calle que contiene el texto “San Martín”.

● Al colocar el % al comienzo y al final estamos representando un texto que no nos preocupa cómo comienza ni cómo termina, siempre y cuando contenga la/s palabra/s que nos interesa. Sintaxis:


```SQL
SELECT * FROM clientes c
WHERE calle LIKE '%San Martín%'
```

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>  Sentencias SQL | IS [NOT] NULL

Permiten seleccionar registros cuyo valor en un campo sea null o no sea null (not null). No debemos confundir null con campo en blanco, es un campo que no tiene dato alguno asociado.

![image](https://github.com/eugenia1984/node/assets/72580574/50e7b299-cb04-484e-a3ab-f2c63fc2f184)

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>  Sentencias SQL | Uso de Alias

● Son muy utilizados en el uso de consultas o sentencias SQL extensas.

● Permite renombrar los nombres originales de tablas o campos de manera temporal. Esta propiedad es extensible a tablas y campos.

● Presenta algunas ventajas:

○ Permite acelerar la escritura de código SQL

○ Mejorar la legibilidad de las sentencias

○ Ocultar/Renombrar los nombres reales de las tablas o campos a usuarios

○ Permite asignar un nombre a una expresión, fórmula o campo calculado

Ejemplo: renombrar tablas y atributos calculados


```SQL
SELECT V.precio , V.fecha, (V.precio * 1.21) AS precio_con_iva
FROM ventas AS V
```


---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>  Sentencias SQL | Operador IN | DISTINCT

- **IN**: nos permite agregar una lista de posibilidades en lugar de encadenar cláusulas **OR**, ya que funciona de manera equivalente. Sintaxis:


```SQL
SELECT codigo FROM productos
WHERE descripción IN ('Harina' ,'Azúcar' ,'Leche')
```

- **SELECT DISTINCT**: se usa para devolver solo valores distintos (diferentes) de una
columna que puede tener registros duplicados. Sintaxis:

```SQL
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

---
