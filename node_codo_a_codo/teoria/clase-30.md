# Clase 30 - Peticiones POST

## Parseando datos recibidos

Hasta el momento venimos trabajando con GET, pero para que nuestro servidor pueda recibir peticiones por POST necesitamos convertir los datos recibidos en el BODY a un formato que entienda el servidor.

Usando los middlewares nativos ``.urlencoded()`` y ``.json()`` podemos convertir la data de estos formatos a uno que el servidor pueda manejar.

Para poder armar una request en POSTMAN que nos permita enviar una nueva pelicula para cargar a nuestro array de peliculas, deberemos proceder de la siguiente manera:

**Enviando la petición al servidor**

![image](https://github.com/eugenia1984/node/assets/72580574/c44f0120-441f-441b-97b9-225f313ac757)

**nota**: en versiones previas a express 4.16.0 se utilizaba una librería llamada body-parser para este propósito.

---

## Programando en el servidor el POST

Al igual que en los casos anteriores, creamos la ruta en la cual recibiremos la request con la información para agregar a nuestro array.

![image](https://github.com/eugenia1984/node/assets/72580574/bb33c8e9-cef4-4e0a-8748-67cd34ed6447)

En este caso, tenemos dentro de req, la propiedad body, que en su interior recibe los
parámetros enviados a través del POST en el frontend (o en este caso desde postman).

Podemos acceder a los valores que necesitamos a través de:

![image](https://github.com/eugenia1984/node/assets/72580574/51510779-6961-4270-93e6-bf88fb4aa2a1)

---

## Programando en el servidor el POST

Ahora, una vez más agregando un poco de Javascript creamos un objeto para agregar a nuestro array de películas:

![image](https://github.com/eugenia1984/node/assets/72580574/4b2768a8-35b4-49d8-93e3-d8e1b40f1c41)


Al igual que en el GET, la manera de resolver cómo agregar la película al array puede diferir de acuerdo a la solución que estemos pensando.

Ahora, lo único que falta es determinar que vamos a responder como resultado de esta petición. Por convención, en general en un pedido “post” se suele devolver el id generado o bien el objeto completo. En este caso, vamos a devolver el objeto completo bajo el status 201.

![image](https://github.com/eugenia1984/node/assets/72580574/79480575-9d27-4a9a-b491-0dadb0f8e274)

---

## Probando la petición en POSTMAN

Ahora, lo único que falta es determinar que vamos a responder como resultado de esta petición. Por convención, en general en un pedido “post” se suele devolver el id generado o bien el objeto completo. En este caso, vamos a devolver el objeto completo bajo el status 201.

![image](https://github.com/eugenia1984/node/assets/72580574/7abef2cb-2637-4e4d-bff9-86746001a1e1)

---
