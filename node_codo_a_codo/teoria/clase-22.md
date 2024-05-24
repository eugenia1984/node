# <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Clase 22: Introducción a Base de Datos

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

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Bases de Datos

Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso. Es una forma de almacenar información en forma más eficiente de lo que sería un archivo de texto.

Se crean y mantienen a través de un DBMS o motor de base de datos, que facilita la definición, construcción, manipulación y compartición de bases de datos entre usuarios y aplicaciones.

Contienen datos que pueden diferir entre sí pero poseen relaciones en común. Por ejemplo: alumnos y libros en el contexto de una biblioteca.

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>  ¿Por qué son necesarias las bases de datos?

Si tenemos una empresa es conveniente tener un sistema para registrar ventas, empleados, sueldos,
etc. Estos datos pueden guardarse en una base de datos con tablas para registrar esa información.

Esta información podrá ser consultada por usuarios (vistas), administrada por un sistema con tablas relacionadas (esquema conceptual) y almacenada en una base de datos (esquema interno). [Video](https://vimeo.com/225581128)

![image](https://github.com/eugenia1984/node/assets/72580574/159798b3-7fc5-4e1e-a1e6-b6814f65e37e)


---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Ejemplo de uso de una base de datos

![image](https://github.com/eugenia1984/node/assets/72580574/c2e6c2fc-c1be-4860-a524-fdbefc2993f1)


---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>  SGBD más conocidos

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

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Ubicación de las Bases de Datos

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

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Modelo Entidad-Relación

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

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Diagrama Entidad Relación | Componentes

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


## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Diagrama Entidad Relación | Ejemplo

Una empresa de venta de electrodomésticos tiene clientes, pedidos y productos.
Desea modelar a través de un DER cómo se implementaría la Base de Datos:

1. Detectar las entidades:

![image](https://github.com/eugenia1984/node/assets/72580574/40dcc88e-00ba-4710-8aeb-9380f01f372e)

2. Detectar los atributos:

![image](https://github.com/eugenia1984/node/assets/72580574/3ead0a45-f7f6-47c3-89f0-58a4bfcb79dc)

3. Conocidas las entidades y sus atributos, establecemos las relaciones existentes
entre sí: un cliente puede realizar varios pedidos (ya que en cada compra que
realice, se efectuará un nuevo pedido) y que un pedido puede tener varios
productos (ya que una misma compra/pedido pueden haber más de un artículo
encargado).

![image](https://github.com/eugenia1984/node/assets/72580574/8b609c03-2e40-4213-b95d-1e9b8718a644)

4. Una vez que tenemos el DER lo pasamos a forma de TABLA:

![image](https://github.com/eugenia1984/node/assets/72580574/b3308c36-ff67-440b-9e8e-2f80ab1f31d5)

![image](https://github.com/eugenia1984/node/assets/72580574/43c68d7b-982e-4f9a-842e-915dfdb6fe09)

---

##<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>  Tipos de Datos

Los **atributos de las entidades** deben cumplir o pueden ser únicamente de ciertos tipos de datos. Entre ellos, los más importantes / utilizados son:

● **NUMÉRICOS**: se utilizan para representar valores/atributos de carácter numérico tanto enteros, como decimales.

● **TEXTO (VARCHAR)**: se utilizan para representar valores de texto, como ser cadenas de caracteres.

● **DATE (FECHA)**: se utilizan para representar fechas, horas, minutos, segundos, etc.

● **BOOLEAN (LÓGICO)**: se utilizan para representar valores verdaderos o falsos (true or false).

Los tipos de datos del ejemplo anterior podrían ser los siguientes:

![image](https://github.com/eugenia1984/node/assets/72580574/8023259b-3e80-4cf8-9264-a782f6399544)

---

## Primary key y Foreign Key

● Las **claves primarias (Primary Keys)** son valores que identifican de manera única a cada fila o registro de una tabla, esto quiere decir que no se puede repetir. Por ejemplo: un DNI, un código de producto, etc.

● Una **clave foránea (Foreign Key)** es un campo de una tabla “X” que sirve para enlazar o relacionar entre sí con otra tabla “Y” en la cual el campo de esta tabla es una clave primaria (Primary Key). Para que un campo sea una clave, esta tiene que ser una clave primaria en otra tabla.


![image](https://github.com/eugenia1984/node/assets/72580574/c371665f-fc19-4942-9df2-ca73696a9d74)


### Primary key y Foreign Key

En el ejemplo anterior podemos identificar las claves primarias, que identificarán de manera única a cada fila o registro de una tabla


![image](https://github.com/eugenia1984/node/assets/72580574/d324b1cc-8643-4c53-a873-c4cb52623de2)

---

## Instalación MySQL Server | Paso a paso

1. Descargar el instalador de [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)

2. Ejecutar el instalador y seleccionar Server Only Execute.

3. Darle a next hasta llegar a la pantalla Authentication Method: Seleccionar Use Legacy Authentication Method.

4. En la siguiente pantalla setear contraseña para el usuario root en MySQL
Root Password.

5. Darle next y al llegar a Apply Configuration apretar Execute.

Importante: Para la instalación se recomienda ver los tutoriales que
aparecen en esta presentación y utilizar los archivos que están en el Aula
Virtual y la carpeta de Drive compartida.

---

##<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>  Herramientas para manejo de Base de Datos

- **MYSQL WORKBENCH**: Es una herramienta visual de diseño de bases de datos que integra
desarrollo de software, administración de bases de datos, diseño de bases de datos, creación y mantenimiento para el sistema de base de datos MySQL.

![image](https://github.com/eugenia1984/node/assets/72580574/3eae93e2-39b6-407b-bb8d-f1ac9089f16f)

- **PHPMYADMIN**: Es una herramienta escrita en PHP con la intención de manejar la
administración de MySQL a través de páginas web, utilizando Internet.
Puede crear y eliminar Bases de Datos, crear, eliminar y alterar tablas, borrar, editar y añadir campos, ejecutar cualquier sentencia SQL, administrar claves en campos, administrar  privilegios y exportar datos en varios formatos

![image](https://github.com/eugenia1984/node/assets/72580574/a36f6245-5370-4437-8def-8716f0b50aca)

---

##  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Herramientas para manejo de Base de Datos

VISUAL STUDIO CODE:

1. Descargar las siguientes extensiones en VSCode:

![image](https://github.com/eugenia1984/node/assets/72580574/cc863d2b-7a70-4180-90d6-452ff8c20fd1)

2. Cerrar y volver a abrir Visual Studio Code.

3. Apretar el símbolo + en el apartado MySQL. Al ser la primera vez que se configura no aparecerá ninguna base de datos:

![image](https://github.com/eugenia1984/node/assets/72580574/65fc886e-7032-4dd5-9729-96cc83a66533)

4. Rellenar usuario y contraseña, los demás datos (puerto y SSL) y apretar
ENTER.

![image](https://github.com/eugenia1984/node/assets/72580574/e5e492bf-08ee-4a51-aede-82a74551b147)

5. Deberá aparecer localhost:

![image](https://github.com/eugenia1984/node/assets/72580574/91e6ace2-92b3-41c8-984e-3b2a95384322)

---

##  Conectarse al servidor MySQL

Para que un programa cliente (VSCode, MySQL Workbench, phpMyAdmin, etc.) se
conecte al servidor MySQL, debés utilizar los parámetros de conexión adecuados,
como el nombre del host donde se ejecuta el servidor y el nombre de usuario y
contraseña de tu cuenta MySQL.

Cada parámetro de conexión tiene un valor predeterminado, pero puede anular
los valores predeterminados según sea necesario utilizando las opciones del
programa especificadas en la línea de comandos o en un archivo de opciones.


![image](https://github.com/eugenia1984/node/assets/72580574/2639f331-6223-4d27-9530-f2281fc70e76)

---

##  Crear una base de datos de prueba

WORLD.SQL: Los pasos se detallan para VSCode pero para MySQL Workbench y phpMyAdmin resultan similares.

1. Descargar world.sql del Aula Virtual y abrir con Visual Studio Code.

2. Apretar botón derecho > Run SQL Query.

![image](https://github.com/eugenia1984/node/assets/72580574/5494ed22-0901-4199-a539-43d170f5eb4e)

---

##  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Ver una BD y acceder a tablas

Una vez que nos conectamos al LocalHost, previa conexión con XAMPP,
podremos acceder a ver las bases de datos y sus tablas:

![image](https://github.com/eugenia1984/node/assets/72580574/fa5da7f0-2d0b-4544-a006-fec6386bc304)

---

##  Creando nuestra primer BD

Crearemos nuestra primera BD llamada empleados_departamentos. Utilizaremos el
archivo bd_empleados_departamentos.sql para ejecutar la sentencia SQL que la
crea. Para ello seguiremos los siguientes pasos:

1. Abrir el archivo que contiene la sentencia SQL.

2. Crear una nueva consulta SQL y pegar todo el texto dentro.

3. Ejecutar desde el ícono del rayo.

4. Quedará creada la Base de Datos con dos tablas: departamentos y empleados


![image](https://github.com/eugenia1984/node/assets/72580574/501b8371-66e9-4ed6-ad60-67f432c63fc0)


Para crear una tabla utilizamos CREATE TABLE e indicamos cuáles son las columnas
(atributos/campos) que conformarán nuestra tabla (1).
Para agregar registros utilizamos INSERT INTO nombredelatabla VALUES y estos datos
van separados por comas en el mismo orden en que fueron incorporados los campos
(2). Los datos serán incorporados en la tabla (3).

![image](https://github.com/eugenia1984/node/assets/72580574/68205ca6-668d-4720-9072-1c181f9fc57c)

---

## Ver los datos de las tablas

Haciendo clic con el botón derecho en nuestra tabla y seleccionando Select Rows –
Limit 1000 veremos los resultados de nuestra primer consulta SQL:

![image](https://github.com/eugenia1984/node/assets/72580574/88404ab2-6491-4cd3-bb01-18c9c9c31a5a)

---

##  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Claves principales

Una clave principal es un identificador único para cada registro de la tabla. Para
definirla tenemos que analizar las claves candidatas, aquellas que podrían ser claves
principales, un valor propio de ese registro que identifique de forma única esa
instancia del dato. Cada registro debería tener un identificador único, para evitar
duplicados:

![image](https://github.com/eugenia1984/node/assets/72580574/3cb516a4-f2a0-4d07-9f29-ce0e14e51eb9)

---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Exportar una BD (backup)

Podemos exportar una Base de datos desde Workbench con el objetivo de hacer un backup:

1. Ir a Server – Data export

2. Seleccionar la base de datos (schema) que se desea exportar del cuadro de la izquierda dentro de Object Selection.

3. Seleccionar del cuadro de la derecha aquellas tablas que se desean exportar.

4. Determinar a qué carpeta se exportará la base de datos y cómo se exportarán los datos:

a. Si elegimos Export to Dump Project Folder se exportarán las tablas por separado.

b. Con Export to Self-Contained File podremos darle un nombre al archivo, pero con
todas las tablas juntas.

5. Hacer clic en Start Export y colocar la contraseña del host.

![image](https://github.com/eugenia1984/node/assets/72580574/42f313e8-39d0-4bf7-b061-213fd278c046)

---
---

## <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/> Artículos de interés - Material extra:

● [¿Qué es un gestor de datos y para qué sirve?](https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/que-es-un-gestor-de-datos-y-para-que-sirve)

● [¿Qué son las bases de datos NoSQL?](https://aws.amazon.com/es/nosql/)

● [Diagrama entidad relación](https://www.ecured.cu/Diagrama_entidad_relaci%C3%B3n)

● [¿Qué es y para qué sirve UML?](https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=688:ique-es-y-para-que-sirve-uml-versiones-de-uml-lenguaje-unificado-de-modelado-tipos-de-diagramas-uml&catid=46&Itemid=163)

● [Curso de SQL de Píldoras informáticas](https://www.pildorasinformaticas.es/course/curso-sql/curriculum/)

● [Cómo hacer un backup de MySQL con phpMyAdmin](https://www.youtube.com/watch?v=jIGew1jjoL4)

Videos:

● [Instalar XAMPP 2022 para Windows 10](https://www.youtube.com/watch?v=AM6WKqFj27g)

● [Instalar XAMPP y phpMyAdmin](https://drive.google.com/file/d/1fQbKUwVsTUekGm78C9z5EK31Zo_Gipse/view)

● [Instalar XAMPP y MySQL Workbench](https://www.youtube.com/watch?v=ns72mhweVAc)

● [Instalar MySQL y MySQL Workbench](https://drive.google.com/file/d/1IV4aMelWW8AVAEXEldfDbthd4gsg5bhB/view)

● [Primer encuentro con una Base de Datos MySQL (MySQL Workbench)](https://drive.google.com/file/d/1ihnslrUrACBh8Su-W26M_n80JNjkNVlH/view)

● [Primer encuentro con una Base de Datos MySQL (XAMPP y phpMyAdmin)](https://drive.google.com/file/d/1O-7HaalYp-VksMR_JDneIeyOFTr4RCWs/view)

● [Cómo instalar XAMPP en Windows y corregir problemas de puertos y permisos](https://www.youtube.com/watch?v=6c4PErvPzgg)

Sitios e instaladores:

● MySQL: [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)

● phpmyadmin: [https://www.phpmyadmin.net/](https://www.phpmyadmin.net/)

● MySQL Workbench: [https://dev.mysql.com/downloads/workbench](https://dev.mysql.com/downloads/workbench)

---
