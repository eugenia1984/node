# 01 - Base de Datos

## CLASES

- [**Clase 22: Introducción a Base de Datos**](https://github.com/eugenia1984/node/blob/main/node_codo_a_codo/teoria/clase-22.md): ¿Qué es una Base de datos? /  BBDD relacionales y no relacionales / Entorno MySQL. Instalación. / Clientes MySQL / DER. Entidad, atributo y tipo de datos. Primary key. / Creación de una BD. / Backup y restauración de bases de datos.

- **Clase 23: Lenguaje y Sublenguajes SQL**: Gestión y manipulación de
datos con SQL / Gestión y manipulación de datos / Sublenguajes DDL y DML /  Consultas: Estructura consulta SQL. Cláusulas SELECT, FROM, WHERE / Alias y literales. ORDER BY

---

En este módulo aprenderás sobre bases de datos y cómo trabajar con ellas utilizando el lenguaje SQL y MongoDB. 

Comenzaremos con una introducción a las bases de datos, incluyendo los diferentes tipos de bases de datos y cómo acceder a ellas utilizando el entorno MySQL. También aprenderás cómo crear una base de datos, hacer una copia de seguridad y restaurarla.

Luego nos centraremos en el lenguaje SQL y sus sublenguajes. Aprenderás cómo manipular y gestionar datos, y cómo crear consultas SQL para extraer información de las bases de datos. Te enseñaremos la estructura básica de una consulta SQL y cómo utilizar las cláusulas SELECT, FROM y WHERE para filtrar los datos. También explorarás JOINs y subconsultas, así como las funciones de agregación y escalares.

En la sección de MongoDB, aprenderás qué es una base de datos NoSQL y cómo se diferencia de las bases de datos relacionales. Veremos las características de MongoDB y cómo utilizarla en la creación de aplicaciones.

---

## Qué es una Base de datos 

### ¿Qué es MySQL? 

MySQL, el sistema de administración de bases de datos SQL de código abierto más popular, está desarrollado, distribuido y respaldado por Oracle Corporation. 

**MySQL es un sistema de gestión de bases de datos.**

 Una base de datos es una colección estructurada de datos. Puede ser cualquier cosa, desde una simple lista de compras hasta una galería de imágenes o la gran cantidad de información en una red corporativa. Para agregar, acceder y procesar datos almacenados en una base de datos informática, se necesita un sistema de administración de bases de datos como MySQL Server. Dado que las computadoras son muy buenas para manejar grandes cantidades de datos, los sistemas de administración de bases de datos juegan un papel central en los sistemas actuales, como utilidades independientes o como parte de otras aplicaciones.

---

### Las bases de datos MySQL son relacionales. 

Una base de datos relacional almacena datos en tablas separadas en lugar de poner todos los datos en un gran archivo. Las estructuras de la base de datos están organizadas en archivos físicos optimizados para la velocidad. El modelo lógico, con objetos como bases de datos, tablas, vistas, filas y columnas, ofrece un entorno de programación flexible. 

Esto configura reglas que gobiernan las relaciones entre diferentes campos de datos, como uno a uno, uno a muchos, único, obligatorio u opcional, y " punteros " entre diferentes tablas. La base de datos hace cumplir estas reglas, de modo que con una base de datos bien diseñada, tu aplicación nunca ve datos inconsistentes, duplicados, huérfanos, desactualizados o faltantes.

Las letras SQL de "MySQL" significan "Lenguaje de consulta estructurado". SQL es el lenguaje estandarizado más común utilizado para acceder a bases de datos. 

Dependiendo de tu entorno de programación, podés ingresar SQL directamente (por ejemplo, para generar informes), incrustar declaraciones SQL en código escrito en otro idioma o usar una API específica del idioma que oculta la sintaxis SQL. 

SQL está definido por el estándar ANSI / ISO SQL. El estándar SQL ha evolucionado desde 1986 y existen varias versiones. Por ejemplo, “SQL-92” se refiere al estándar publicado en 1992, “SQL: 1999” se refiere al estándar publicado en 1999 y “SQL: 2003” se refiere a la versión actual del estándar. Usamos la frase "el estándar SQL" para referirnos a la versión actual del estándar SQL en cualquier momento.

---

### El software MySQL es de código abierto. 

Código abierto significa que cualquiera puede utilizar y modificar el software. Cualquiera puede descargar el software MySQL de Internet y usarlo sin pagar nada. Si lo deseas, podés estudiar el código fuente y modificarlo para adaptarlo a tus necesidades. El software MySQL utiliza la GPL (Licencia Pública General GNU), [http://www.fsf.org/licenses/](http://www.fsf.org/licenses/) , para definir lo que podés y no podés hacer con el software en diferentes situaciones. Si no te sentís cómodo con la GPL o necesitás incrustar código MySQL en una aplicación comercial, se puede adquirir una versión con licencia comercial. Para ello hay una descripción general de licencias de MySQL en [http://www.mysql.com/company/legal/licensing/](http://www.mysql.com/company/legal/licensing/).

---

## MySQL es un servidor de base de datos muy rápido, confiable, escalable y fácil de usar. 

También puede ejecutarse cómodamente en una computadora de escritorio o portátil, junto con otras aplicaciones, servidores web, etc., requiriendo poca o ninguna atención. Si dedicás una máquina completa a MySQL, podés ajustar la configuración para aprovechar toda la memoria, la potencia de la CPU y la capacidad de E / S disponible. MySQL también puede escalar a grupos de máquinas conectadas en red.

MySQL Server se desarrolló originalmente para manejar grandes bases de datos mucho más rápido que las soluciones existentes y se ha utilizado con éxito en entornos de producción muy exigentes durante varios años. Aunque en constante desarrollo, MySQL Server ofrece hoy en día un conjunto de funciones útiles y variadas. Su conectividad, velocidad y seguridad hacen que MySQL Server sea muy adecuado para acceder a bases de datos en Internet.

---

### MySQL Server funciona en sistemas cliente / servidor o integrados. 

El software de base de datos MySQL es un sistema cliente / servidor que consta de un servidor SQL multiproceso que admite diferentes backends, varios programas cliente y bibliotecas diferentes, herramientas administrativas y una amplia gama de interfaces de programación de aplicaciones (API).

MySQL Server, es también, como una biblioteca multiproceso integrada que puede vincular a su aplicación para obtener un producto independiente más pequeño, más rápido y más fácil de administrar. 

Hay disponible una gran cantidad de software MySQL contribuido.

MySQL Server tiene un conjunto práctico de características desarrolladas en estrecha colaboración con usuarios de la comunidad. Es muy probable que tu aplicación o lenguaje de programación favorito sea compatible con el servidor de base de datos MySQL.

---

### Bases de Datos Relacionales y No relacionales 

Como su propio nombre indica, las bases de datos no relacionales son las que, a diferencia de las relacionales, **no tienen un identificador que sirva de relación entre un conjunto de datos y otros**. 

La información se organiza normalmente mediante documentos y es muy útil cuando no tenemos un esquema exacto de lo que se va a almacenar. 

La indiscutible reina del reciente éxito de las bases de datos no relacionales es MongoDB seguida por Redis, Elasticsearch y Cassandra.

#### Formatos

La información puede organizarse en tablas o en documentos. Cuando organizamos información en un Excel, lo hacemos en formato tabla y, cuando los médicos hacen fichas a sus pacientes, están guardando la información en documentos. Lo habitual es que las bases de datos basadas en tablas sean bases de datos relacionales y las basadas en documentos sean no relacionales, pero esto no tiene que ser siempre así. En realidad, una tabla puede transformarse en documentos, cada uno formado por cada fila de la tabla. Solo es una cuestión de visualización.


Los dos esquemas de la imagen contienen exactamente la misma información. Lo único que cambia aquí es el formato: cada documento de figura de la derecha es una fila de la figura de la izquierda.

![image](https://github.com/eugenia1984/node/assets/72580574/a0b4559d-7112-48d5-9b63-ca72891b2b11)


Se ve más claro en la tabla, ¿verdad? Lo que pasa es que a menudo en una base datos no relacional una unidad de datos puede llegar a ser demasiado compleja como para plasmarlo en una tabla. Por ejemplo, en el documento JSON de la imagen que se muestra a continuación, al tener elementos jerárquicos, es más difícil plasmarlo en una tabla plana. Una solución sería plasmarlo en varias tablas y, por tanto, necesitar de relaciones.

Esto explica por qué las bases de datos relacionales suelen servirse de tablas y las no relacionales de documentos JSON. En cualquier caso, a día de hoy, las bases de datos más competitivas suelen permitir, de una forma u otra, operaciones de los dos tipos. Por ejemplo, servicio de base de datos en la nube BigQuery que ofrece Google es, en principio, una base de datos de lenguaje de consulta SQL, por lo que permite fácilmente relacionar varias tablas, pero, a su vez, permite insertar elementos jerárquicos JSON, más propios de bases de datos no relacionales.

![image](https://github.com/eugenia1984/node/assets/72580574/cdb0c48d-16f1-475e-8a45-407bf3069eb0)


---

## Diseño 

LAs diferencia entre el éxito y el fracaso recae, sobre todo, el diseño del modelo. Es decir, si se decide que el mejor enfoque es usar una base de datos relacional, no es suficiente con meter la información a lo bruto en una base de datos relacional y esperar a que se relacione sola, porque eso no va a ocurrir. De nada sirve elegir la base de datos más apropiada para nuestro sistema, si luego no se hace un buen diseño.

### Concepto de entidad, atributo y relación

Se define una **entidad (o instancia)** como una unidad de una base de datos que contiene información. Esta unidad es una representación dentro de la base de datos de un objeto, persona, empresa... etc, del mundo real, y como tal posee ciertos atributos que la diferencian del resto de entidades. Así por ejemplo, en una base de datos de una oficina, una entidad podría ser el material de oficina, otra los empleados, otra los clientes, incluso el ambiente laboral, la empatía y cosas más abstractas. Cada una de estas entidades tendría ciertos **atributos** propios. Así, los empleados tendrían atributos como nombre, edad, estatura... las computadoras otros como un nro de serie, procesador, año de compra... y así para cada una de ellas.

En una base de datos compleja pueden existir entidades relacionadas entre sí por diversos parámetros o atributos, de tal modo que la existencia de una puede ir ligada a la existencia de otra. Así, las entidades pueden ser fuertes (existen por sí mismas) o débiles (su existencia depende de que exista otra entidad). Las **relaciones** entre entidades suelen describirse en el esquema de la estructura de la base de datos e incluso pueden agruparse entre sí para formar conjuntos de entidades, también llamados clases.

El **Modelo Entidad-Relación** es de hecho uno de los más importantes a la hora de diseñar e implementar una base de datos con éxito. Mediante este modelo se relacionan una o varias entidades por sus atributos, que pueden ser comunes o no a varias de ellas.

### Tipos de relaciones 

- **1 a N (uno a muchos)**: Por ejemplo: una persona puede tener muchos autos y viceversa, muchos autos pueden ser de una persona.

- **1 a 1 (uno a uno)**: Por ejemplo: a un alumno le pertenece únicamente una libreta y viceversa, una libreta pertenece únicamente a un alumno. 

- **N a N (muchos a muchos)**: Por ejemplo: muchos alumnos pueden tener muchas materias y viceversa, muchas materias pueden contener a muchos alumnos.

---

### Instalación MySQL Server 

- 1) Descargar el instalador de [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)  

- 2) Ejecutar el instalador y seleccionar Server Only -> Execute. 

- 3) Darle a next hasta llegar a la pantalla Authentication Method: Seleccionar Use Legacy Authentication Method. 

- 4) En la siguiente pantalla setear contraseña para el usuario root en MySQL Root Password. 

- 5) Darle next y al llegar a Apply Configuration apretar Execute.

Instalador: ver archivo mysql-installer-web-community8.0.22.0.msi 

---

### Herramientas para manejo de Base de Datos


#### MYSQL WORKBENCH 

**MySQL Workbench** es una herramienta visual de diseño de bases de datos que integra desarrollo de software, Administración de bases de datos, diseño de bases de datos, creación y mantenimiento para el sistema de base de datos MySQL.

Se puede descargar desde: [https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)

---

### PHPMYADMIN 

**phpMyAdmin** es una herramienta escrita en PHP con la intención de manejar la administración de MySQL a través de páginas web, utilizando Internet. 

Actualmente puede crear y eliminar Bases de Datos, crear, eliminar y alterar tablas, borrar, editar y añadir campos, ejecutar cualquier sentencia SQL, administrar claves en campos, administrar privilegios y exportar datos en varios formatos.

Se puede encontrar en: [https://www.phpmyadmin.net/](https://www.phpmyadmin.net/)

---

### VISUAL STUDIO CODE 

- 1) Descargar las siguientes extensiones en VSCode

- 2) Cerrar y volver a abrir Visual Studio Code. 

- 3) Apretar el símbolo + en el apartado MySQL. Al ser la primera vez que se configura no aparecerá ninguna base de datos:

- 4) Rellenar usuario y contraseña, a los demás datos (puerto y SSL) apretar ENTER sin modificar nada.

- 5) Deberá aparecer localhost.

---

### Invocar programas MySQL 

Para invocar un programa MySQL desde la línea de comando (es decir, desde su shell o símbolo del sistema CMD en Windows), ingresá a la carpeta en donde se instaló MySQL y escribí el nombre del programa seguido de cualquier opción u otros argumentos necesarios para indicarle al programa lo que desea que haga.

Los siguientes comandos muestran algunas invocaciones de programas de muestra.

C:\> representa la solicitud de su intérprete de comandos ( CMD en Windows); no es parte de lo que se escribe. El indicador particular que ve depende de su intérprete de comandos. 

Las solicitudes típicas son: Linux/ Unix / Mac $para sh , ksh o bash , %para csh o tcsh y C:\>para los intérpretes de comandos Windows DOS o cmd .

Por ejemplo: 

`C:\> mysql --user=root test`

`C:\> mysqladmin extended-status variables`

`C:\> mysqlshow --help`

`C:\> mysqldump -u root personnel`

Los argumentos que comienzan con un guión simple o doble ( -, --) especifican las opciones del programa. Las opciones suelen indicar el tipo de conexión que un programa debe realizar con el servidor o afectar su modo operativo.

Los argumentos que no son de opción (argumentos sin guiones iniciales) proporcionan información adicional al programa. Por ejemplo, el programa mysql interpreta el primer argumento que no es de opción como un nombre de base de datos, por lo que el comando mysql --user=root test indica que desea utilizar la test base de datos.

Las secciones posteriores que describen programas individuales indican qué opciones admite un programa y describen el significado de cualquier argumento adicional que no sea de opción.

Algunas opciones son comunes a varios programas. Las más utilizadas son las opciones:

`--host(o -h)`

`--user(o -u)` 

`--password(o -p)`

que especifican los parámetros de conexión. Indican el host donde se ejecuta el servidor MySQL y el nombre de usuario y contraseña de su cuenta MySQL. 

Todos los programas cliente de MySQL comprenden estas opciones; te permiten especificar a qué servidor conectarse y la cuenta a utilizar en ese servidor.

Otras opciones de conexión son: `--port(o -P)` especificar un número de puerto TCP / IP y `--socket(o-S)` para especificar un archivo de socket Unix en Unix (o un nombre de canalización con nombre en Windows).

Puede resultar necesario invocar programas MySQL utilizando el nombre de la ruta al directorio bin en el que están instalados.

Es probable que este sea el caso si obtiene un error de " programa no encontrado " cada vez que intenta ejecutar un programa MySQL desde cualquier directorio que no sea el directorio bin. Para que sea más conveniente usar MySQL, puede agregar el nombre de la ruta del directorio bin a la PATH configuración de la variable de entorno. Eso le permite ejecutar un programa escribiendo solo su nombre, no su ruta completa. Por ejemplo, si mysql está instalado `c:\Archivos\mysql\bin`, podés ejecutar el programa invocándolo como mysql, y no es necesario invocarlo como `/c:\Archivos\mysql\bin`.

Consultá en la web la documentación de los comandos que utiliza tu sistema operativo para obtener instrucciones sobre cómo configurar tu variable PATH.

Después de modificar su configuración PATH, abrí una nueva ventana de consola en Windows (CMD) o iniciá sesión nuevamente en Unix para que la configuración entre en vigor.

---

### Uso de opciones en la línea de comandos

Las opciones del programa especificadas en la línea de comando siguen estas reglas: 

● Las opciones se dan después del nombre del comando. 

● Un argumento de opción comienza con un guión o dos guiones, dependiendo de si es una forma corta o larga del nombre de la opción. Muchas opciones tienen formas cortas y largas.

Por ejemplo, -? y --help son las formas cortas y largas de la opción que le indica a un programa MySQL que muestre su mensaje de ayuda. 

● Los nombres de las opciones distinguen entre mayúsculas y minúsculas. -v y -V son legales y tienen diferentes significados. (Son las formas breves correspondientes de las opciones --verbose y --version).

● Algunas opciones toman un valor después del nombre de la opción. Por ejemplo, - h localhost o --host=localhost indican el host del servidor MySQL a un programa cliente. El valor de la opción le dice al programa el nombre del host donde se ejecuta el servidor MySQL. 

● Para una opción larga que toma un valor, separá el nombre de la opción y el valor con un signo =.

Para una opción corta que toma un valor, el valor de la opción puede seguir inmediatamente a la letra de la opción, o puede haber un espacio entre: -hlocalhost y -h localhost son equivalentes. Una excepción a esta regla es la opción para especificar tu contraseña de MySQL. Esta opción se puede dar en forma larga como o como . En el último caso (sin ningún valor de contraseña dado), el programa le solicita interactivamente la contraseña. La opción de contraseña también se puede dar en forma abreviada como --password=pass_val o como --p pass_val.

Sin embargo, para la forma abreviada, si se proporciona el valor de la contraseña, debe seguir la letra de la opción sin espacios intermedios : si un espacio sigue a la letra de la opción, el programa no tiene forma de saber si se supone que el siguiente argumento es la contraseña valor o algún otro tipo de argumento. En consecuencia, los dos comandos siguientes tienen dos significados completamente diferentes: 

`mysql -ptest`

`mysql -p test`

El primer comando le indica a mysql que use un valor de contraseña de test, pero no especifica una base de datos predeterminada. El segundo indica a mysql que solicite el valor de la contraseña y que la utilice test como base de datos predeterminada.

Dentro de los nombres de las opciones, el guión ( -) y el subrayado ( _) se pueden usar indistintamente. Por ejemplo, --skip-grant-tables y --skip_grant_tables son equivalentes. (Sin embargo, los guiones iniciales no se pueden dar como guiones bajos).

El servidor MySQL tiene ciertas opciones de comando que pueden especificarse solo al inicio, y un conjunto de variables del sistema, algunas de las cuales pueden configurarse al inicio, en tiempo de ejecución o ambos. Los nombres de las variables del sistema usan guiones bajos en lugar de guiones, y cuando se hace referencia a ellos en tiempo de ejecución (por ejemplo, usando instrucciones SET o SELECT), deben escribirse usando guiones bajos:

```
SET GLOBAL general_log = ON; 
SELECT @@GLOBAL.general_log;
```

Al iniciar el servidor, la sintaxis de las variables del sistema es la misma que la de las opciones de comando, por lo que dentro de los nombres de las variables, los guiones y los guiones bajos se pueden usar indistintamente. Por ejemplo, --general_log=ON y -- general-log=ON son equivalentes. (Esto también es cierto para las variables del sistema establecidas dentro de los archivos de opciones).

Por ejemplo, el siguiente comando le dice a mysqladmin que haga ping al servidor 1024 veces, durmiendo 10 segundos entre cada ping: 

`mysqladmin --count=1K --sleep=10 ping`

Cuando especifique nombres de archivo como valores de opción, evite el uso del carácter `~` meta de shell. Puede que no se interprete como esperaba.

Los valores de opción que contienen espacios deben estar entre comillas cuando se dan en la línea de comando. 

Por ejemplo, la opción `--execute` (ó -e) se puede utilizar con mysql para pasar una o más sentencias SQL separadas por punto y coma al servidor. 

Cuando se usa esta opción, mysql ejecuta las declaraciones en el valor de la opción y sale. Las declaraciones deben ir entre comillas. Por ejemplo:

```
shell>  -u root  "SELECT VERSION();SELECT NOW()"
mysql   -pe 
```
---