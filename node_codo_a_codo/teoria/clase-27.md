# Clase 27 - Node – Gestores de paquetes

## Temas:

- Módulos

- Gestores de Paquetes
  
- Creación de un servidor
  
- Implementaciones de Node

---

## MÓDULOS

Uno de losproblemasde Javascriptdesdesus inicioses organizarde unaforma adecuadaunaaplicacióngrande, con muchaslíneasde código.

Tener todoelcódigoenun sóloarchivoJavascriptes confusoy complejo.

La solucióna ese problemafueronlosmódulos, que permitensepararnuestrocódigosin tenerque vincularunaetiquetascript porcadaarchivode Javascriptennuestroproyecto.

En Node.js un móduloes simplementeun archivo.jsque puedeimportaro exportarfuncionalidadespara ser utilizadasenotrosarchivos. Este archivopuedecontenervariables, funciones, clasesu objetosque puedenser exportadose importados.

## Historia de los módulos

El precursor para esta solución fueNodeJS quién creó el sistema de módulos conocido como CommonJS.

Sin embargo, a partir de la especificación EcmaScript 2015 se introduce al lenguaje una alternativa nativa conocida como **ES Modules**.

![image](https://github.com/eugenia1984/node/assets/72580574/dd3bf5f3-e566-4ba1-99b0-ace937beda61)

Ambos tienen su propia sintaxis y si bien no es común verlos en proyectos con Javascript puro, son muy usados en el Frontend en Frameworks como React o en desarrollos backend realizados con NodeJS.

## Veamos un ejemplo de CommonJS

Tenemos un módulo con una función que permite sumar 2 números a la cual exportamos con module.exports

![image](https://github.com/eugenia1984/node/assets/72580574/9445aff2-38e7-4bb7-895d-cd7d5b278f05)

Ahora llamamosa la función sumar del archivo modulo.jsy lo utilizamos en nuestro archivo index.js

![image](https://github.com/eugenia1984/node/assets/72580574/e151ac5f-5927-406f-aa81-9a869f5d29c4)

---

## Tipos de Módulos

- Nativos: Son módulos que vienen incluidos dentro del código fuente de NODE.

- Internos: Todos los módulos creados durante el desarrollo del proyecto y que hacen a nuestra aplicación.

- Externos o de terceros: librerías creadas por terceros y puestas a disposición a través de gestores de paquetes de NODE como NPMo YARN.

![image](https://github.com/eugenia1984/node/assets/72580574/b195e5a7-d792-4259-aede-8c308c3450a0)

---

## Gestoresde Paquetes

Los pakagemanagermásconocidospara NODE son NPM y YARN.

Los gestoresde paquetesenNode.js son herramientasque facilitanla instalación, actualización, gestióny eliminaciónde paquetes(bibliotecas, módulos, dependencias) enun proyectode Node.js.

Con ellospodemosinstalarlibreríasde códigoque nosayudencon tareassimples comoanimaciones, alertaso trabajocon fechas, sin embargo tambiénpodemosusarlopara descargarframeworks comoReact o Angular.

Cada uno de estos administradores de paquetes tienen sus propias ventajas y desventajas. La elección del administrador de paquetes dependerá de las necesidades específicas del proyecto y las preferencias del equipo de desarrollo.

![image](https://github.com/eugenia1984/node/assets/72580574/8b7e39bb-decf-4ae6-b592-c1ba2a4ccf7f)

### NPM

Node Package Manager es el gestor de paquetes más conocido y utilizado.

Se instala automáticamentecuando instalamos NODE por lo que no debemos instalar nada adicional.

Para poder instalar dependencias o librerías en nuestros proyectos, primero hay que utilizar el comando NPM init o NPM init -y en la terminal para dar inicio a un proyecto de NODE gestionado por NPM.

![image](https://github.com/eugenia1984/node/assets/72580574/4eb19551-85a8-4c00-aecb-8ab9c5200261)

### Características Principales de NPM

1. **Gestión de Paquetes**: 

• Instalación: Permite instalar paquetes y módulos que otros desarrolladores han creado y compartido.

• Actualización: Facilita la actualización de paquetes a sus versiones más recientes.

• Desinstalación: Permite eliminar paquetes que ya no son necesarios.

2. **Gestión de Dependencias**:

• NPM se encarga de instalar todas las dependencias necesarias para que un proyecto funcione correctamente, según lo especificado en el archivo package.json.

3. **Repositorio Centralizado**:

• NPM tiene un repositorio en línea (https://www.npmjs.com/) donde se pueden encontrar miles de paquetes gratuitos y de código abierto para diversas funcionalidades.

4. **Scripts de NPM**:

• Permite definir scripts personalizados en el archivo package.jsonpara automatizar tareas comunes, como iniciar el servidor, ejecutar pruebas, y más.


### El archivo package.json

Es un archivo de configuración crucial en cualquier proyecto Node.js. Sirve como la raíz del proyecto.
Es un archivo en formato JSON que proporciona información necesaria tanto para el administrador de
paquetes NPM como para los desarrolladores que trabajan en el proyecto. Proporciona una forma
estructurada de definir y gestionar las dependencias, scripts, metadatos y otras configuraciones
importantes del proyecto. Su correcta configuración y uso facilitan el desarrollo, mantenimiento y
colaboración en proyectos Node.js.

![image](https://github.com/eugenia1984/node/assets/72580574/f9b5d726-7409-4d45-b4e7-8658a4fbbcba)

- name: Es el nombre del proyecto. Este nombre debe ser único si deseas publicar el paquete en el registro de npm.

- version: Define la versión actual del proyecto siguiendo el esquema de versionado semántico (semver). La versión se compone de tres partes: mayor, menor y parche (major.minor.patch).

- description: Es una breve descripción del proyecto. Es útil proporcionar información sobre el propósito o funcionalidad del proyecto.

- main: Especifica el punto de entrada principal de la aplicación. Cuando alguien requiere el módulo, este archivo será el primero en ser cargado.

- scripts: Es un objeto que contiene comandos de script que pueden ser ejecutados usando npmrun “script-name”.

- test: Define un comando para ejecutar pruebas. En el ejemplo imprime un mensaje de error y devuelve un código de salida 1, indicando que no hay pruebas especificadas. Este es un valor por defecto que suele reemplazarse con un comando de prueba real, como puede ser con Mocha o Jest.
  
- keywords: Es una lista de palabras clave que ayudan a identificar el proyecto en el registro de npm. En este ejemplo, está vacío, pero normalmente incluirías términos relacionados con el proyecto para mejorar la búsqueda.
author:Especifica el autor del proyecto.

- license: Define la licencia bajo la cual se distribuye el proyecto. "ISC" es una licencia de software libre y permisiva. Es importante especificar una licencia para que otros sepan cómo pueden utilizar el código creado.

---

## A crear un servidor web

### ¿Qué es un Servidor Web?

Un servidor de softwareen términos generales, se refiere a cualquier programa o aplicación que proporciona servicios o recursos a otros dispositivos o programas en una red (ftp, mysql, tomcat).

Específicamente un Servidor Web HTTP, es un servidor de software controla cómo los usuarios de la web obtienenacceso a los archivos alojados en un servidor de hardware(una pc).

Son capaces de comprender urlso solicitudes a través de ellas y dar una respuestaatendiendo dicha solicitud.
Existen servidores estáticos y dinámicos.

### Tipos de servidores WEB

- **ESTATICO**: Consiste en una computadora (hardware) con un servidor HTTP (software). Se le dice “estático” porque envía los archivos que aloja “tal como se encuentran” (sin modificarlos) a tu navegador.

- **DINAMICO**: Consiste en un servidor web estático con software adicional, como una aplicación de servidor y una base de datos. Se le dice “dinámico” a este servidor porque la aplicación actualiza los archivos alojados, antes de enviar el contenido a tu navegador mediante el servidor HTTP.

---

**Para entender un poco más, creemos nuestro primer servidor estático con Node**

- Premisa fundamental: ciente - servidor

 ![image](https://github.com/eugenia1984/node/assets/72580574/ad34d9ab-abf5-4dfc-8144-221d0c1b88c2)

## Servidor Estático Nativo


● Para poder montar nuestro servidor, debemos tener un archivo de entrada o “entry point” donde realicemos la configuración inicial de nuestro Server.

● Creamos nuestro entry point llamado: ``app.js``

● Luego importamos el módulo http nativo y creamos un servidor con el método: ``.createServer();``

![image](https://github.com/eugenia1984/node/assets/72580574/d1d790c2-5865-45b2-9954-e086e51c4007)

● Cada llamada a nuestro server recibe 2 parámetros importantes: **req (require)** y **res (response)**, que contienen toda la información
tanto de la solicitud como de la respuesta en ese orden.

● Finalmente, escribimos una cabecera mediante ``.writeHead();`` indicando el tipo de contenido que vamos a devolver y lo enviamos.

![image](https://github.com/eugenia1984/node/assets/72580574/7efd2d1c-1fce-45c2-9074-2853041f448b)

● Ya casi lo tenemos, ahora solo nos queda escuchar a un puerto para poder realizar llamadas a nuestro servidor.

● Para eso usamos el método ``.listen();`` el cual trabaja sobre el objeto server y recibe el puerto como primer parámetro y una
callback como segundo.

![image](https://github.com/eugenia1984/node/assets/72580574/006d301a-900f-44ce-817c-fe7d471b1a4e)

**¡Listo!**

Ahorapongamosa corrernuestroservidordesdela terminal medianteelcomandonode app.js y accedemosa éldesdeelnavegador.

![image](https://github.com/eugenia1984/node/assets/72580574/ca2768e1-5e39-4901-bd2e-85d546919aa3)

En este caso devolvemos texto plano, pero intentemos con HTML.

## Enviando HTML

Modificamos ligeramente la cabecera ``Content-Type.``+

Especificamos ``charset = ‘UTF-8’``, se trata del seteo que reconoce caracteres especiales del dialecto latino.

Además en lugar de texto, enviamos código HTML válido.

![image](https://github.com/eugenia1984/node/assets/72580574/042e3f2a-b7f2-4a3a-8e7d-cd8722a101c2)

**Enviando HTML**

Reiniciamos el server y volvemos al navegador:

![image](https://github.com/eugenia1984/node/assets/72580574/93e13864-9c68-4323-82ba-5543aca6106b)

--- 

## Intentemos con un archivo .html

### Leyendo archivos con FileSystem

FileSystem es un módulo nativo de node que nos permite trabajar con archivos que existan en la PC o servidor.

Veamos cómo utilizarlo para devolver un archivo HTML como respuesta.

``.readFileSync();`` lee un archivo de forma síncrona (bloqueante) y luego lo devolvemos como respuesta a la petición.

![image](https://github.com/eugenia1984/node/assets/72580574/e0515e1b-bf7c-4251-95c4-8459d045937b)

---


## Algunos ejemplos de Implementaciones de Node.js

Cómo ya vimos, Node.js es una plataforma popular para construir aplicaciones de servidor debido a su arquitectura de entrada/salida no bloqueante y su enfoque en el uso de JavaScript en el lado del servidor.

Los ejemplos a continuación muestran cómo Node.js puede ser utilizado para implementar diversas aplicaciones de servidor, desde un simple servidor HTTP hasta una API RESTful y un servidor WebSocket. Cada implementación resalta la flexibilidad y el poder de Node.js para manejar diferentes tipos de cargas de trabajo en aplicaciones modernas.

### 1. Servidor HTTP Básico

Un servidor HTTP básico es un programa que maneja solicitudes HTTP (Hypertext Transfer
Protocol) y envía respuestas HTTP a los clientes, generalmente navegadores web. Este tipo de
servidor escucha en un puerto específico, procesa las solicitudes entrantes y devuelve los
recursos solicitados o una respuesta adecuada.

![image](https://github.com/eugenia1984/node/assets/72580574/e9afe9cd-43ed-46ff-a97e-a12b0414662a)

### 2. Servidor con Express

Express es un marco de aplicación web para Node.js, diseñado para facilitar la creación de
aplicaciones web y API robustas y eficientes. Es minimalista, flexible y está repleto de
características que permiten a los desarrolladores crear aplicaciones web y servicios con
facilidad.

![image](https://github.com/eugenia1984/node/assets/72580574/9899652a-6909-4d28-b840-2b13319fc37e)


### 3. API RESTful con Express

Un ejemplo de una API RESTful básica que maneja operaciones CRUD (Crear, Leer, Actualizar,
Eliminar) para una colección de "usuarios".

![image](https://github.com/eugenia1984/node/assets/72580574/a62d89b5-d03f-4d7f-a3cc-9474057c3015)

### 4. Servidor WebSocket

Es un programa que maneja conexiones WebSocket, permitiendo la comunicación bidireccional
en tiempo real entre un cliente y un servidor. A diferencia de HTTP, que es un protocolo sin
estado y de solicitud-respuesta, WebSocket mantiene una conexión abierta persistente que
permite la transferencia de datos en ambas direcciones sin la sobrecarga de las solicitudes HTTP
repetidas.


![image](https://github.com/eugenia1984/node/assets/72580574/d676fb2f-e487-4858-9da9-a6f00dfea2f2)

---
