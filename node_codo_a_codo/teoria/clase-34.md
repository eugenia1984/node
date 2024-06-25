# Clase 34 - Autenticacion

## Temas:

```
Autenticación
JWT
Librerias jsonwebtoken, y bcryptsjs
Estructura posible del proyecto
Probando en POSTMAN
```

---

## ¿Qué es el proceso de Autenticación?

La autenticación es el proceso de verificar la identidad de un usuario, dispositivo o sistema para garantizar que solo las personas autorizadas accedan a los recursos y servicios 
protegidos.

---

## Fases del proceso de autenticación

- **Identificación**: El usuario proporciona una identidad, como un nombre de usuario o un ID.
  
- **Verificación**: El usuario prueba su identidad mediante una contraseña, un token o biometría.

---

## Métodos Comunes de Autenticación:

- **Contraseñas**: El usuario ingresa una contraseña que se compara con una almacenada.

- **Tokens**: Se utilizan tokens de software o hardware para la verificación.

- **Biometría**: Utiliza características físicas como huellas dactilares o reconocimiento facial.

---

## ¿Qué es un Token?

Un token es una cadena de texto que actúa como un sustituto de datos sensibles. Se utiliza en seguridad informática para autenticar usuarios y otorgar acceso a recursos protegidos.

Los tokens se generan de manera única para cada sesión o transacción y se pueden revocar o expirar después de un periodo de tiempo.

---

## ¿Qué es JSON Web Token?

JWT es un estándar abierto para crear tokens de acceso que permiten la comunicación segura entre dos partes. 

Se compone de tres partes: Header, Payload y Signature

### Estructura de un JWT

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_ad`

- **Header**: El Header típicamente consiste de dos partes: el tipo de token, que es JWT, y el algoritmo de cifrado, como HMAC SHA256 o RSA.

- **Payload**: El Payload contiene las reclamaciones (claims). Las reclamaciones son declaraciones sobre una entidad (normalmente, el usuario) y datos adicionales. Hay tres tipos de claims: registered, public, y private claims.

- **Signature**: Para crear la Signature, se toma el Header codificado, el Payload codificado, una clave secreta y el algoritmo especificado en el Header, y se firma.

---

## Flujo de Autenticación con JWT

![image](https://github.com/eugenia1984/node/assets/72580574/80c209d5-44d6-4fe7-a36e-563a8f25bded)

### Ventajas de Usar JWT

- Sin Estado: No requiere mantener sesiones en el servidor.

- Escalabilidad: Ideal para aplicaciones distribuidas.

- Seguridad: Uso de firmas y cifrado.

- Compacto: Eficiente en tamaño, ideal para transmisión en HTTP headers.

### Uso de la librería jsonwebtoken

La librería jsonwebtoken se utiliza en Node.js para trabajar con JSON Web Tokens (JWTs).

Esta librería proporciona métodos para crear, firmar, verificar y decodificar tokens JWT, facilitando la implementación de autenticación y autorización en aplicaciones web y móviles.

### Uso de la librería bcryptjs

La librería bcryptjs se utiliza en Node.js para manejar la seguridad de las contraseñas.

Proporciona funciones para cifrar (hash) contraseñas y compararlas de manera segura.

Es especialmente útil para aplicaciones que requieren almacenar y verificar contraseñas de usuarios de manera segura.

**IMPORTANTE**: COMO DESARROLLADORES NUNCA DEBEMOS GUARDAR UNA CONTRASEÑA EN UNA BASE DE DATOS SIN UTILIZAR ALGÚN TIPO DE HASH.

Las contraseñas se guardan hasheadas para evitar que sean usadas si existe un ataque a la base de datos.

---

## Creación del proyecto:

Para crear el proyecto utilizaremos: ```npm init -y ```

``` npm install express jsonwebtoken bycryptjs ```

Instalaremos las librerías express, jsonwebtoken (para manejar los tokens) y bcryptjs (para encriptar las contraseñas). Si bien en este ejemplo no las guardaremos en la base de datos, es una buena práctica no tener las contraseñas sin hashear.

## Estructura del proyecto:

Y luego crearemos la siguiente estructura:

![image](https://github.com/eugenia1984/node/assets/72580574/c9f980bb-40fb-49d7-bffc-a7d07343a5fd)

## Crear el servidor: index.js

![image](https://github.com/eugenia1984/node/assets/72580574/2f219250-7d9b-4231-8a56-c6a72745facb)

## Configurar el servidor: config.js

Este archivo contiene la configuración necesaria para manejar los tokens JWT en la aplicación. Incluye la clave secreta utilizada para firmar los tokens y la duración de validez de los tokens.

secretKey: es una cadena de texto que se usa para firmar y verificar los tokens JWT.

Esta clave debe ser única y secreta. En un entorno de producción, es importante mantener esta clave segura y no compartirla públicamente.

![image](https://github.com/eugenia1984/node/assets/72580574/f1b9590f-6605-4d8d-9f3b-6c39fce1d5ea)

La clave se usa luego en la función `jwt.sign()` para crear el token y en `jwt.verify()` para verificar la validez del token.

**tokenExpiresIn**: especifica cuánto tiempo es válido el token antes de expirar. Se puede utilizar `1h`, `2h`, `30m`, etc.

## Modelo de usuario:

Crearemos una estructura básica para almacenar usuarios en la aplicación. Este modelo se utiliza para almacenar y manejar los datos de los usuarios de manera temporal en la memoria durante el tiempo de ejecución de la aplicación.

![image](https://github.com/eugenia1984/node/assets/72580574/ea266d1e-5b7e-4d4a-8218-a9520d90f396)

Nota: A los fines de centrar el ejercicio en JWT, almacenaremos los usuarios en memoria. En un proyecto real, los usuarios deben almacenarse en base de datos.

---

## Controlador de autenticación

El controlador de autenticación maneja las solicitudes de registro e inicio de sesión de los usuarios. Realiza las siguientes funciones principales:

• **Registro de usuario (register)**: Recibe los datos del usuario, cifra la contraseña, almacena el usuario en el array de usuarios, genera un token JWT y lo envía como respuesta.

• **Inicio de Sesión (login)**: Verifica las credenciales del usuario, genera un token JWT si las credenciales son correctas y lo envía como respuesta.

## Controlador de autenticación

Crearemos el archivo `controllers/authController.js`. Antes de crear la función de registro y de login debermos importar las librerías y módulos necesarios:

![image](https://github.com/eugenia1984/node/assets/72580574/ad46cc1b-81fc-49e4-9984-25037a4f7e8e)

- Ahora estamos en condiciones de comenzar con la función de registro:

- **Función de registro**: Creamos la función que permitirá registrar un usuario.

![image](https://github.com/eugenia1984/node/assets/72580574/7c561006-d008-4327-8592-0ab88efd6a46)

- **Función de inicio de sesión (login)**:

![image](https://github.com/eugenia1984/node/assets/72580574/b079bf13-4347-4ab1-a472-6f601f97ac2a)

--- 
