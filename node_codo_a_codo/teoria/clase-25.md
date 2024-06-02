# Clase 25 - Node.js - introducción


## Temas:

```
Fundamentos de Node:
● Repaso anterior
● ¿Quees el Backend?IntroducciónaNode. Entorno
```

---

##  ¿Qué es el Frontend?

Es todo lo que pasa del lado del cliente (en el navegador).

Está compuesto por archivos estáticos en los lenguajes que el navegador puede interpretar. 

Estos lenguajes son HTML para la estructura de información, CSS para los estilos y JavaScript para la interacción dentro nuestro sitio web.

El desarrollador de front-endse encarga de implementar todo lo relacionado con la parte visible, lo que toca" el usuario cuando navega por la web.

### Elemento claves del frontend

- **HTML (HyperText Markup Language)**: Es el lenguaje de marcado utilizado para estructurar el contenido en la web. Define elementos como títulos, párrafos, enlaces, imágenes, y otros contenidos que se mostrarán en la página web.
  
- **CSS (Cascading Style Sheets)**: Es el lenguaje utilizado para describir la presentación de un documento HTML. Controla el aspecto visual, incluyendo el diseño, los colores, las fuentes, y la disposición de los elementos en la página.

- **JavaScript**: Es el lenguaje de programación utilizado para agregar interactividad a la página web. Permite crear experiencias dinámicas, como formularios interactivos, animaciones, manejo de eventos (clics, desplazamiento, etc.), y comunicación con servidores (por ejemplo, mediante AJAX o Fetch API).

- **Frameworks y Librerías**: Herramientas que simplifican y estructuran el desarrollo frontend. Ejemplos comunes incluyen React, Angular, Vue.js, y Svelte. Estos frameworks/librerías ayudan a gestionar el estado de la aplicación, el enrutamiento, y la manipulación del DOM de manera más eficiente.

![image](https://github.com/eugenia1984/node/assets/72580574/7efcb736-0288-46c3-b093-832a6b3492a8)

----

## ¿Qué es el Backend?

Es todo lo que pasa del lado del servidor.

El backendes la parte del desarrollo web que se encarga de que toda la lógica de una página web funcione. Se trata del conjunto de acciones que pasan en una web pero que no vemos como, por ejemplo, la consulta de datos a una BBDD y posterior envío al cliente.

Algunas de las funciones que se gestionan en la parte del back-endson:

● El desarrollo de funciones que simplifiquen el proceso de desarrollo.

● Acciones de lógica.

● Conexión con bases de datos.

● Uso de librerías del servidor web (por ejemplo, para implementar temas de caché o para comprimir las imágenes de la web).

### Elemento claves del backend

- **Servidor**: La máquina física o virtual que ejecuta el software del backend. Puede ser un servidor local, un servidor en la nube o un servidor dedicado.

- **Aplicación del Servidor**: El software que gestiona las solicitudes de los clientes (generalmente el frontend) y proporciona las respuestas adecuadas. Este software puede estar desarrollado en varios lenguajes de programación, como JavaScript (Node.js),Python (Django, Flask), Ruby (Ruby onRails), Java (Spring), PHP (Laravel), entre otros.

- **API (Application Programming Interface)**: Conjunto de reglas y definiciones que permiten la comunicación entre diferentes partes de la aplicación o entre diferentes aplicaciones. Las APIsRESTfuly GraphQLson ejemplos comunes de cómo el backend expone funcionalidades y datos al frontend.

- **Base de Datos**: Sistema de gestión de bases de datos que almacena y recupera los datos necesarios para la aplicación. Puede ser una base de datos relacional (como MySQL, PostgreSQL) o una base de datos NoSQL (como MongoDB, Cassandra).

- **Lógica de Negocio**: Conjunto de reglas y procesos que definen cómo los datos se crean, almacenan y manipulan para cumplir con los requisitos específicos de la aplicación. Esto puede incluir desde la validación de datos hasta cálculos complejos y procesamiento de datos.

- **Autenticación y Autorización**: Mecanismos para verificar la identidad de los usuarios (autenticación) y determinar qué acciones pueden realizar (autorización). Herramientas y estándares como OAuth, JWT (JSON Web Tokens), y OpenID Connect son comunes en el backend.
Gestión de Sesiones: Técnica para mantener el estado de la interacción del usuario con la aplicación a lo largo de múltiples solicitudes HTTP. Esto puede incluir cookies, tokens, y almacenamiento de sesiones.

- **Servicios y Microservicios**: En arquitecturas modernas, el backend puede estar compuesto por múltiples servicios pequeños y especializados (microservicios), que se comunican entre sí para realizar tareas específicas.

- **Escalabilidad y Rendimiento**: Estrategias y técnicas para asegurar que el backend pueda manejar grandes cantidades de tráfico y operaciones de manera eficiente. Esto incluye balanceo de carga, caché, y escalado horizontal y vertical.

- **Seguridad**: Prácticas para proteger los datos y las operaciones del backend contra accesos no autorizados, ataques de inyección, y otras amenazas de seguridad.

---

## Flujo cliente/servidor

El flujo cliente-servidor describe cómo se comunican los componentes frontend (cliente) y
backend (servidor) en una aplicación para procesar y responder a las solicitudes del usuario. A
continuación se detalla un flujo típico en una arquitectura cliente-servidor:

### Cliente

- Envía una petición al servidor y se queda esperando por una respuesta.

- Su tiempo de vida es finito una vez que son servidas sus solicitudes, termina el trabajo.

- Un cliente accede a un servidor y recupera servicios especiales o datos de él.

- Es tarea del cliente estandarizar las solicitudes, transmitirlas al servidor y procesar los datos obtenidos para que puedan visualizarse en un dispositivo de salida como una pantalla.

### Servidor

- Es un programa que ofrece un servicio que se puede obtener en una red.

- Acepta la petición desde la red, realiza el servicio y devuelve el resultado al solicitante.

- El servidor comienza su ejecución antes de comenzar la interacción con el cliente.

- Su tiempo de vida o de interacción es “interminable”, una vez comienza a correr, se
queda esperando las solicitudes que pudieran llegar desde los diversos clientes.


---

## Request / Response

El flujo cliente-servidor describe cómo se comunican los componentes frontend (cliente) y
backend (servidor) en una aplicación para procesar y responder a las solicitudes del usuario.

- Una **request** es una petición enviada desde el cliente (generalmente el navegador) al servidor para solicitar información o realizar una acción específica.

- Una **response** es la respuesta del servidor a una solicitud del cliente.

![image](https://github.com/eugenia1984/node/assets/72580574/aab5b12f-4a7c-4578-9559-7469c57e274f)

---

## ¿Quées Node js?

Es un entorno de ejecución (NO es un lenguaje ni un framework) de JavaScript construido sobre el motor V8 de Google Chrome. Fue diseñado para construir aplicaciones de red escalables y de alto rendimiento, permitiendo a los desarrolladores ejecutar JavaScript en el servidor, fuera del navegador.

### Usos comunes de Node

• **Desarrollo de Servidores Web y APIsRESTful**: es ideal para construir servidores web y APIsRESTfulgracias a su capacidad para manejar múltiples solicitudes de manera eficiente y no bloqueante.

• **Aplicaciones en Tiempo Real**: es excelente para aplicaciones en tiempo real que requieren comunicación bidireccional entre el cliente y el servidor, como chats, aplicaciones de colaboración en línea y juegos multijugador.

• **Aplicaciones de Microservicios**: es una opción popular para construir arquitecturas de microservicios debido a su capacidad para manejar múltiples servicios pequeños e independientes que pueden comunicarse entre sí.

• **Desarrollo de Aplicaciones Backend para IoT (Internet ofThings)**: es adecuado para manejar la comunicación y procesamiento de datos de dispositivos IoTdebido a su naturaleza asíncrona y eficiente.

• **Tareas de DevOps**: se utiliza para escribir herramientas y scripts de DevOps que ayudan a gestionar la infraestructura y el despliegue de aplicaciones.

### Instalación

Ingresamos a [https://nodejs.org/en/](https://nodejs.org/en/) y descargamos la versión LTS (longtermsupport) ya que es la más reciente y con soporte oficial recomendada para proyectos “reales” o productivos

![image](https://github.com/eugenia1984/node/assets/72580574/ff213d98-5211-45a4-bd7c-2630aad8bd1d)

### Primeros pasos con NodeJS

- Ahora que tenemos NODE instalado en nuestra PC podemos trabajar con él del mismo modo que lo hacíamos con Javascript.

- En esta ocasión para ejecutar nuestro código en lugar de usar la consola del navegador, vamos a usar la terminal de VS CODE o de nuestra PC

![image](https://github.com/eugenia1984/node/assets/72580574/81c12fda-8e70-49a3-be40-ffb6fbef3c38)

- También podemos escribir y ejecutar nuestro código NODE a través de la consola mediante el comando node. Para salir de este modo, usamos el comando .exit

![image](https://github.com/eugenia1984/node/assets/72580574/3d453ba4-0209-4393-8d23-4e20ed93e894)

---

## :tv: Video

[¿Qué es Node.js? Breve explicación animada](https://www.youtube.com/watch?v=xJzzu7MVZXw)

Node.js es un **entorno de ejecución para JavaScript** construido con el motor de JavaScript V8 de Chrome. 

JavaScript solo era ejecutado del lado del cliente (los navegadores web), hast que en el 2009 **Ryan Dhal** crea Node.js y se puede ejecutar del lado del servidor, por tener **el motor V8** en el núcleo de Node.js.

Node.js usa un **modelo de operaciones E/S (asíncrono) sin bloqueo y orientado a eventos**, que lo hace liviano y eficiente. 
![image](https://github.com/eugenia1984/node/assets/72580574/6dd8246e-1f29-42ab-90d5-524b2b484e45)

El ecosistema de paquetes de Node.js, **npm** (Node Package Manager), es el ecosistema mas grande de librerías de código abierto en el mundo. Permite: gestionar las dependencias, descargar librerías y distribuir código.

Es **multiuso**, más recomendable para aplicaciones **Real time**, como juegos en línea, chats, etc.

---
