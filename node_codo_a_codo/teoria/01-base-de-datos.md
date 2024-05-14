# 01 - Base de Datos

## Contenidos generales:

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