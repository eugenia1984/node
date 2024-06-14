# Clase 31 - Peticiones PUT y DELETE

---

# PUT

El método PUT se utiliza para reemplazar completamente un recurso existente, a diferencia de PATCH que realiza modificaciones parciales.

En este caso, en el método PUT evíamospor parámetro en la URL el id de la película que queremos modificar y en el bodyel nuevo objeto que reemplazara al anterior:

![image](https://github.com/eugenia1984/node/assets/72580574/587a2cc8-a42b-426d-ac19-c98a2880e14a)

Y del lado del servidor, a través de Javascript, gestionamos la modificación de la película correspondiente. La respuesta en el status será un 200, lo que indica que se procesó exitosamente. Como es la respuesta por defecto, no es necesario hacerla explícita en el código.

![image](https://github.com/eugenia1984/node/assets/72580574/19aa651c-6d0f-4c5e-af94-ed26f9d0d4ec)

---

# DELETE

Se utiliza para eliminar un recurso específico en el servidor. Después de realizar la solicitud, el recurso se eliminará. En el método DELETE, se puede optar por una respuesta standard o devolver el objeto que se eliminó.

![image](https://github.com/eugenia1984/node/assets/72580574/5269730a-9b5f-4d17-a2ea-02d4ac9cbc89)

Se utiliza para eliminar un recurso específico en el servidor. Después de realizar la solicitud, el recurso se eliminará. En el método DELETE, se puede optar por una respuesta standard o devolver el objeto que se eliminó.

![image](https://github.com/eugenia1984/node/assets/72580574/3a85556b-892a-42dd-9cf9-30c7c6655a60)

---

##  Middlewares

Caside forma instintiva, ya utilizamos varios middlewares para configurar nuestro programa.

### ¿Qué es un middleware entonces?

Son simplemente funciones que se ejecutan antes o después de otras y losh ay de distintos tipos:

● **Middlewares de nivel de aplicación**: Son middlewaresque se aplican a toda la aplicación y se configuran utilizando ``app.use()``

● **Middlewares de nivel de ruta**: Son middlewaresque se aplican a una ruta específica.

● **Middlewares de manejo de errores**: Son middlewares especiales que se utilizan para manejar errores en la aplicación.


---

