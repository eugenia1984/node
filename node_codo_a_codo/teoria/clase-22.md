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

### Bases de datos no relacionales

Una tabla puede transformarse en documentos, cada uno formado por cada fila de la tabla. Solo es una cuestión de visualización.

- Tabla:

![image](https://github.com/eugenia1984/node/assets/72580574/85195d02-4f39-47bf-8898-e7177c562adb)

- JSON:

![image](https://github.com/eugenia1984/node/assets/72580574/023d2301-d93c-433b-97e8-fb85b57df494)

### Bases de datos no relacionales

En una base de datos no relacional una unidad de datos puede llegar a ser
demasiado compleja como para plasmarlo en una tabla.

En la imagen de la derecha al tener elementos jerárquicos, es más difícil
plasmarlo en una tabla plana. Una solución sería plasmarlo en varias
tablas y, por tanto, necesitar de relaciones.

![image](https://github.com/eugenia1984/node/assets/72580574/bc206b8e-0f6f-4625-8e4d-7993524d46cc)


---

## Ubicación de las Bases de Datos

Dentro de un entorno de un sistema de bases de datos se encuentran en el nivel
más bajo. Generalmente se los considera como la parte "física", ya que, aunque
sean un contenido lógico, se encuentran almacenadas o creadas en un dispositivo
físico. Por ejemplo: un servidor.

Para que un usuario acceda a los datos en una Base de Datos, necesita de un 
software especial conocido como SGBD (Sistema Gestor de Base de Datos) o
DBMS (Data Base Managment System).

![image](https://github.com/eugenia1984/node/assets/72580574/0a1b8d68-026e-4afc-aedd-18f0d2ba57a3)


---

## ¿Cómo empezamos a pensar en una BD?

Se realiza una entrevista con el cliente para hacer un relevamiento de datos. El relato
del cliente nos permite identificar qué información va a necesitar. Si el cliente nos
cuenta que tiene empleados, su registro es candidato a ser una tabla que va a tener
atributos asociados (sustantivos): nombre, apellido, DNI, fecha de nacimiento, etc.
Estas tablas se llaman entidades y permitirán almacenar los datos.

Por ejemplo: en el sistema de venta online tendría productos, marcas y conceptos
candidatos a ser tablas o atributos.

![image](https://github.com/eugenia1984/node/assets/72580574/7120b7a3-5351-4743-a1c1-f3c65cdd2fa2)


---

## Abstracción y Modelado de datos

La abstracción de datos es una técnica o metodología que permite diseñar estructuras
de datos, consiste en representar bajo ciertos lineamientos de formato las características esenciales de una estructura de datos.

El modelado de datos permite describir:

● Las estructuras de datos de la base: Tipo de datos y sus relaciones.

● Las restricciones de integridad: Conjunto de condiciones que deben cumplir los datos para reflejar la realidad deseada.

● Operaciones de manipulación de los datos: agregado, borrado, modificación y recuperación de datos.

![image](https://github.com/eugenia1984/node/assets/72580574/15dae8dd-7edb-4fcd-80fa-a500348bb510)

---

## Modelo Entidad-Relación

● Método para diseñar Bases de Datos. Se representa a través de diagramas y está formado por varios elementos.

● Para modelar los datos utilizamos un Diagrama de Entidad-Relación (DER), que pertenece al Lenguaje de Modelado Unificado (UML, Unified Modeling Language). Este diagrama representa entidades (tablas) y las relaciones lógicas entre ellas.

● Una vez modelados los datos se implementan en un SGBD.

![image](https://github.com/eugenia1984/node/assets/72580574/81b00218-1e0a-4543-af87-7bfdede7304c)

---

## Diagrama Entidad Relación | Componentes

- **ENTIDADES**: Representan cosas u objetos (ya sean reales o abstractos). Se
representan en los diagramas como rectángulos. Se suelen colocar en plural.

![image](https://github.com/eugenia1984/node/assets/72580574/4eb8c6ea-0879-4094-95c5-9cbe745e4278)

- **ATRIBUTOS**: Definen o identifican las características propias y por lo general únicas de una entidad, pueden ser de distintos tipos (numéricos, texto, fecha, etc.), y se representan por medio de un óvalo o elipse. Cada entidad contiene distintos
atributos, que dan información sobre ella misma.

![image](https://github.com/eugenia1984/node/assets/72580574/1406ee22-e2f8-40fb-9cfb-60383278bf21)

---

## Diagrama Entidad Relación | Componentes

RELACIONES: Se representan con rombos y tienen una característica conocida como
“cardinalidad”, que indica el sentido y la cantidad de “relaciones” existentes entre
una entidad y otra. Los tipos de relaciones pueden ser:

- **1 a N (uno a muchos)**: una persona tiene muchos autos y viceversa, muchos
autos pueden ser de una persona.

![image](https://github.com/eugenia1984/node/assets/72580574/2fc7590a-6068-4f97-b6b2-d29eafd3fcae)

- **1 a 1 (uno a uno)**: a un alumno le pertenece únicamente un boletín y viceversa,
un boletín pertenece únicamente a un alumno

![image](https://github.com/eugenia1984/node/assets/72580574/76b1e8ce-44e0-4e85-898b-37a3b5fbf98a)

- **N a N (muchos a muchos)**: muchos alumnos pueden tener muchas materias y
viceversa, muchas materias pueden contener a muchos alumnos.

![image](https://github.com/eugenia1984/node/assets/72580574/884ef984-de89-4358-a0fa-803a45323152)

---
