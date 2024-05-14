# Clase 22: Introducción a Base de Datos

```
- ¿Qué es una Base de datos? 
- BBDD relacionales y no relacionales 
- Entorno MySQL. Instalación. 
- Clientes MySQL 
- DER. Entidad, atributo y tipo de datos. Primary key. 
-  Creación de una BD. 
- Backup y restauración de bases de datos.
```

---

## Bases de Datos

Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso. Es una forma de almacenar información en forma más eficiente de lo que sería un archivo de texto.

Se crean y mantienen a través de un DBMS o motor de base de datos, que facilita la definición, construcción, manipulación y compartición de bases de datos entre usuarios y aplicaciones.

Contienen datos que pueden diferir entre sí pero poseen relaciones en común. Por ejemplo: alumnos y libros en el contexto de una biblioteca.

---

##  ¿Por qué son necesarias las bases de datos?

Si tenemos una empresa es conveniente tener un sistema para registrar ventas, empleados, sueldos,
etc. Estos datos pueden guardarse en una base de datos con tablas para registrar esa información.

Esta información podrá ser consultada por usuarios (vistas), administrada por un sistema con tablas relacionadas (esquema conceptual) y almacenada en una base de datos (esquema interno). [Video](https://vimeo.com/225581128)

![image](https://github.com/eugenia1984/node/assets/72580574/159798b3-7fc5-4e1e-a1e6-b6814f65e37e)


---

## Ejemplo de uso de una base de datos

![image](https://github.com/eugenia1984/node/assets/72580574/c2e6c2fc-c1be-4860-a524-fdbefc2993f1)


---

## SGBD más conocidos

● Existen diferentes Sistemas de Gestión de Base de Datos:

○ Relacionales: MySQL, MaríaDB, PostgreSQL, SQL Server, entre otras.

○ No relacionales: Mongo DB, Redis, Elasticsearch y Cassandra.

![image](https://github.com/eugenia1984/node/assets/72580574/0f89fccf-4b2f-4098-bd91-6f4628aeaba0)


---

## Bases de datos relacionales

Las bases de datos relacionales permiten gestionar el acceso a los datos, su
almacenamiento, modificación, eliminación, consulta y el múltiple acceso
desde distintas aplicaciones y usuarios. Además permiten gestionar
permisos para que una parte de los datos estén disponibles para ciertos
usuarios y no para otros. Todo esto es resuelto por un motor de base de
datos, generando una independencia entre la base de datos y la aplicación
que la consulte.

Son más eficientes en cuanto al almacenamiento y búsqueda de
información, comparadas con un archivo de texto plano donde la lectura la
haríamos en forma secuencial (línea por línea), cargándola toda en memoria,
ni tampoco podríamos acceder y guardar información al mismo tiempo.

---

## Bases de datos no relacionales

● No tienen un identificador que sirva de relación entre un conjunto de
datos y otros.

● Normalmente la información se organiza en documentos y es muy útil
cuando no tenemos un esquema exacto de lo que se va a almacenar.

● Suelen utilizar documentos JSON, a diferencia de las bases de datos
relacionales que despliegan su información en tablas.

● Las bases de datos más competitivas suelen permitir operaciones de
ambos tipos: relacionales y no relacionales.

La diferencia entre el éxito y el fracaso de una base de datos recae en el diseño del
modelo. De nada sirve elegir la base de datos más apropiada para nuestro sistema, si
luego no se hace un buen diseño.

---

