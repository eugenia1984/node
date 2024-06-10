# Clase 29 - Peticiones GET

---

## Rutas

Como vimos hasta el momento, la comunicación entre clientes y servidores o entre programas que interactúan a través de la web, se hace mediante **rutas**.

A estas rutas se las conoce comúnmente como **ENDPOINTS** y necesitaremos uno por cada flujo que posea nuestro servidor.

**Ahora sí, nuestras rutas se van complejizando.**

---

## 2 - CReación del proyecto

Vamos crear un proyecto para simular el consumo de datos desde un frontend.

1. Para ello vamos a el proyecto: `npm init -y` si queremos inicializarlo rápido, sino `npm init` y vamos completando.

2. Instalamos express: `npm install express`

3. Y luego creamos la estructura:

![image](https://github.com/eugenia1984/node/assets/72580574/ddd60eb4-a7ff-4956-aac2-6ec59a30869c)

---

## Express Router

Es una característica de Express.js que permite crear manejadores de rutas modulares y montables. Un enrutador de Express actúa como una instancia mini de una aplicación completa, lo que permite definir rutas y middleware de manera modular y reutilizable. Esto es especialmente útil para organizar tu aplicación en varios archivos y mantener el código limpio y manejable.

- Vamos a crear el archivo ``server.js`` con el siguiente código:

![image](https://github.com/eugenia1984/node/assets/72580574/d6f9b545-72c0-491f-aae4-432d6ee4e3d9)

- Aquí el mismo código con la explicación:

![image](https://github.com/eugenia1984/node/assets/72580574/e40d08f8-76fa-4bb6-a4ec-1904b60e7716)

### El primer archivode rutas

Para mantener nuestro Proyecto organizad oy que pueda crecer de manera prolija, vamos a generar un archivo que maneje todas las rutas de una pelicula:

![image](https://github.com/eugenia1984/node/assets/72580574/94f28db7-7d19-4f72-913f-7156dcd17870)

![image](https://github.com/eugenia1984/node/assets/72580574/de83841f-b1fc-4e7b-886e-b1f53d7353fd)

---

## Probemos nuestros endpoint

### POSTMAN

Postmanes una popular herramienta utilizada para probar APIs, permitiendo a los desarrolladores enviar peticiones a servicios web y ver respuestas: [https://www.postman.com/](https://www.postman.com/)

![image](https://github.com/eugenia1984/node/assets/72580574/10d357d1-482c-4654-9739-866aa316a318)

### INSOMNIA

Es otra herramienta que se ha vuelto popular con el paso del tiempo. Es una alternativa a Postman: [https://insomnia.rest/](https://insomnia.rest/)

![image](https://github.com/eugenia1984/node/assets/72580574/e83f22ae-bc2c-4bbc-933f-d78f0877e469)

###Postman / Insomnia

Lo importante es que ambas herramientas nos permiten “simular” estas peticiones a través de los distintos métodos HTTP.

Estas herramientas facilitan enviar consultas a nuestro servidor sin depender de un Frontend armado.

En su versión gratuita nos permite realizar todo el trabajo necesario para validar el funcionamiento de nuestros endpoints, mientras que con la versión paga tenemos funciones adicionales que nos permiten trabajar en equipo con mayor facilidad.

### Cómo usar POSTMAN - Método GET

Dentro de POSTMAN podemos crear una nueva petición con el botón de **+**, luego seleccionamos el método (en este caso **GET**) y la **url** a consultar.

![image](https://github.com/eugenia1984/node/assets/72580574/89821994-d8b6-4936-8074-1128c77f9642)

De esta manera probamos nuestro backend sin un frontend y comunicamos nuestra aplicación con el mundo exterior.

---

## Status de de una respuesta HTTP

En el contexto de las respuestas HTTP, el status (estado) es un código numérico que el servidor devuelve para indicar el resultado de la solicitud realizada por el cliente. Los códigos de estado HTTP están divididos en cinco categorías, cada una representando un tipo diferente de respuesta

![image](https://github.com/eugenia1984/node/assets/72580574/f1a6ced2-453c-49fb-be06-5fcad93db149)

Dentro de las respuestas más comunes, encontramos:

**200 OK**:La solicitud ha tenido éxito. La información solicitada está en el cuerpo de la respuesta.

**404 NotFound** :El recurso solicitado no se pudo encontrar en el servidor.

**500 InternalServer Error** :El servidor encontró una condición inesperada que le impidió completar la solicitud.

Estas respuestas en ocasiones, las programaremos nosotros desde el backendpara informar determinados resultados al frontend.

## Mejorando la respuesta con GET

Próximamente veremos como conectar nuestro backend con unabase de datos. Por  el momento vamos a crear una variable que contenga un listado de peliculas.

De esta manera nuestro backend podrá devolver informació nestructurada en formato JSON a las peticiones que se ralicen desde Postman o desde el frontend.

![image](https://github.com/eugenia1984/node/assets/72580574/c24968c6-c312-4771-a95a-53ede846fdc2)

### Desde Postman…

![image](https://github.com/eugenia1984/node/assets/72580574/a601bc43-3454-45cb-8b33-2a2a5ba48bf0)

Si estainformación la recibimos en un frontend, como resultadoa una petición fetch, podremos manipular la información para mostrarlaen el documento HTML de acuerdo a las necesidades de la aplicación.


### Utilizando parámetrosen la ruta

Es posible utilizar el GET para obtener una película específica. Podemos enviaren la petición, por ejemplo, el id 2 y trabajar con ese parámetro recibido para obtenerla pelicula y devolverla como respuesta.

![image](https://github.com/eugenia1984/node/assets/72580574/8483eebc-64ee-4c56-b1b9-524f456d6007)

Ahora, solo debemos agregar un poco de Javascriptpara obtener del array de películas, la película que estamos buscando, teniendo en cuenta que en ``req.params.id`` está el valor que necesitamos:

![image](https://github.com/eugenia1984/node/assets/72580574/20c2126a-a3cf-4479-8411-7da58eeab98a)

Tenemos que contemplar el caso en que el id recibido no exista dentro del arreglo de películas. En ese caso, utilizando la convención de status, devolveremos

![image](https://github.com/eugenia1984/node/assets/72580574/13ec2c7c-771f-4c8a-a3ec-4fb665ddc293)

Finalmente, si movietiene una película, procedemos a retornarla como fin de la función.

![image](https://github.com/eugenia1984/node/assets/72580574/e11d3a46-807b-47b7-b3c9-2301b30ae7a8)

El código escrito anteriormente, es sólo una de las formas en que podemos recorrer un array y obtener la información que necesitamos.

Existen varias formas de poder llegar a este resultado y cada programador puede pensarlo de una forma diferente.

Si desde postmanahora solicitamos el id 2, obtendremos el siguiente resultado:

![image](https://github.com/eugenia1984/node/assets/72580574/96f90cc1-3396-4f31-8f16-2528f436e207)

Y si ingresamos un id que no existe:


![image](https://github.com/eugenia1984/node/assets/72580574/3d7147f6-1559-4349-92e1-4e50ae9eb22c)

---
