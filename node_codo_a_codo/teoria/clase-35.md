# Clase 35 - Deploy

## Temas:

```
Deploy
Vercel
Alwaysdata
Replit
```

---


## ¿Qué es el deploy?

El deploy o despliegue de software son todas las actividades que hacen que un sistema de software esté disponible para su uso, normalmente denominado entorno de producción.

---

## Repositorio

Para realizar el deploy en cualquiera de la opciones se tiene que tener un repositorio en GitHub o similar, y es recomendable que lo que se vaya a desplegar este en la rama principal (main o master*).

*El cambio de nombre de la rama predeterminada de "master" a "main" en sistemas de control de  versiones como Git se debe a varias razones, principalmente enfocadas en la inclusión y la  eliminación de terminología que pueda ser considerada insensible o excluyente.

---

## VERCEL

Vercel es una plataforma de despliegue y alojamiento optimizada para aplicaciones front-end y sitios web estáticos. Está diseñada para facilitar y acelerar el proceso de llevar aplicaciones web
desde el desarrollo hasta la producción, permitiendo a los desarrolladores centrarse en la
creación de experiencias de usuario sin preocuparse por la infraestructura de servidor.

Tenemos que crear una cuenta en el sitio vercel.com, si tienen cuenta de GitHub lo más simple es ingresar con ella.

![image](https://github.com/eugenia1984/node/assets/72580574/f0a46293-2195-4a12-9156-07623f53af25)

Nos va a preguntar para qué queremos la cuenta y nuestro nombre, luego cuando seleccionamos continuar con GitHub nos tiene que aparecer una pantalla solicitando autorización.

![image](https://github.com/eugenia1984/node/assets/72580574/2a354d10-1aa8-4696-be14-df17b42c2103)

Una vez dentro de Vercel puede que nos solicite instalar Vercel como aplicación dentro de GitHub.

Luego ya podremos elegir dentro de nuestros repositorios el que queremos desplegar.

![image](https://github.com/eugenia1984/node/assets/72580574/22158f10-c903-495f-85f9-dec4e9a5226c)

Para hacer el deploy hay que tener en cuenta dos cosas: tenemos que crear un archivo vercel.json dentro de la carpeta principal, y es recomendable que el entry point sea index.js.

![image](https://github.com/eugenia1984/node/assets/72580574/a1c6348f-6268-4365-b038-4ce6b856af22)

Luego hacemos click en Import.

![image](https://github.com/eugenia1984/node/assets/72580574/0b51b830-bfa0-4ff1-8691-b633da38f66c)


Luego de hacer click en Deploy, no es necesario cambiar ninguna opción, se puede dejar todo como
esta de forma predeterminada.

Si todo funcionó correctamente ya tendríamos el sitio funcionando en Vercel 

![image](https://github.com/eugenia1984/node/assets/72580574/368e740c-32cb-4c71-9b4f-100778c4e54c)

---

## ALWAYSDATA

alwaysdata es una plataforma de alojamiento web
que ofrece una amplia gama de servicios para
desarrolladores y empresas. Está diseñada para
simpliﬁcar el despliegue y gestión de aplicaciones
web. Tiene la ventaja de permitir alojar lenguajes
de desarrollo y bases de datos como MySql,
PostgreSQL, MongoDB y otras.

Nos vamos a registrar en alwaysdata.com, no pide un correo y una contraseña.

Tienen que elegir el plan Free

![image](https://github.com/eugenia1984/node/assets/72580574/51b02bc1-d5d3-458a-b739-c16ad4fdda8e)

Una vez que ingresamos al administrador, tenemos que crear dos cosas un usuario ssh y un sitio con que funcione con Node.js.

![image](https://github.com/eugenia1984/node/assets/72580574/791784f5-b61b-47b8-855f-899a9468c223)

Para crear un usuario SSH tenemos que ir al menú Remote access y el submenú SSH.

Podemos cambiar la contraseña del usuario principal o crear un nuevo usuario

![image](https://github.com/eugenia1984/node/assets/72580574/59d3d04b-6c8a-470b-a773-b9f84e5d9868)

Para crear un sitio vamos al menú Web y luego a Sites, y si hacemos click en Add a Site

- Addresses: usuario.alwaysdata.net

- Type*: Node.js

- Command*: node . /index.js
  
- Working directory: www/cac-deploy

 ![image](https://github.com/eugenia1984/node/assets/72580574/5fbb4d93-59da-44eb-b80b-b99d3c6a27af)

Ahora volvemos al menú SSH y
hacemos click en link que aparece
en SSH host, se abrirá un terminal
en el navegador, para ingresar hay
que usar los datos del usuario
creado en el menú SSH.

![image](https://github.com/eugenia1984/node/assets/72580574/febfb97a-b388-4013-834a-b7d2a0e5dfa1)

 En la terminal usaremos los
comandos de git para clonar el
repositorio e instalar la
dependencias de Node.js

![image](https://github.com/eugenia1984/node/assets/72580574/babe23a4-0fff-480b-af42-27f8e9564cf6)

![image](https://github.com/eugenia1984/node/assets/72580574/944e6eb8-b68f-4817-b5dc-9f45a9735d1c)

![image](https://github.com/eugenia1984/node/assets/72580574/48b53e69-f680-4c62-bdc9-23857cc60df3)

---

## REPLIT

En estas ultima opcion se puede
hacer un deploy en un entorno que
incluye un editor, una termina y el
servidor todo en uno.

Se puede crear la cuenta con el
email o con GitHub

Para el ejemplo la cuenta fue creada con el correo

![image](https://github.com/eugenia1984/node/assets/72580574/33badf17-9efa-4472-b2eb-55791058061d)

Hacemos click en **Import from GitHub** y nos conectamos con GitHub, autorizamos e instalamos.

Seleccionamos el repositorio que queremos importar

![image](https://github.com/eugenia1984/node/assets/72580574/34cfe872-b169-41a8-ac47-5c64a23152aa)

En Run command, podemos dejar npm run dev, si lo tenemos conﬁgurado así.

Si esta todo correcto, conﬁrmamos y cerramos Solo queda hacer click en Run esperar un momento
y estará todo funcionando.

![image](https://github.com/eugenia1984/node/assets/72580574/89e72c22-c01d-4302-8195-bc99369ca8da)

---
