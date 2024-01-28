# :computer: ENCUENTRO 24 - Postman – Jueves 24 de agosto 19hs de Argentina

## :star: Introducción a Postman

Postman es una herramienta popular que permite a los desarrolladores probar y desarrollar APIs de manera eficiente. Ya sea que estés trabajando en la creación de una API o en la integración con una API existente, Postman te ayudará a realizar pruebas, depurar y colaborar de manera más efectiva.

---

## Instalación de Postman

Para comenzar, necesitas tener Postman instalado en tu sistema. Sigue estos pasos para hacerlo:

1. Visita el sitio web oficial de Postman en https://www.postman.com/.

2. En la página de inicio, deberías ver un botón prominente de «Descargar Postman». Haz clic en él.

3. Postman está disponible para varios sistemas operativos, incluyendo Windows, macOS y Linux. Selecciona la versión adecuada para tu sistema y descárgala.

4. Una vez que la descarga se haya completado, ejecuta el archivo de instalación.

5. Sigue las instrucciones en pantalla para instalar Postman en tu sistema.

---

## Realizar una Solicitud GET

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/e86e6c05-ed81-4444-9ac8-a9d34ce7fbea)


1. Abre Postman desde tu menú de aplicaciones.

2. En la parte superior de la ventana, verás una barra donde puedes ingresar una URL. Para este ejemplo, vamos a usar una API de prueba pública. Ingresa la URL: https://jsonplaceholder.typicode.com/posts

3. Junto a la barra de URL, hay un menú desplegable que te permite seleccionar el método HTTP. Elige «GET».

4. Ahora, haz clic en el botón «Enviar» que está a la derecha de la barra de URL.

5. En la parte inferior de la ventana, verás la respuesta de la API. Si todo salió bien, deberías ver una lista de publicaciones en formato JSON.

---

## Trabajar con Parámetros y Encabezados

Al interactuar con APIs, a menudo es necesario proporcionar información adicional en forma de parámetros, encabezados y cuerpo de solicitud. Estos elementos ayudan a las APIs a comprender tus intenciones y a responder de manera adecuada.

### Parámetros

Los parámetros son valores que envías a la API para influir en su comportamiento o para filtrar los resultados. En el contexto de las solicitudes HTTP GET, los parámetros se suelen agregar a la URL y están separados por «&». Por ejemplo, en la URL https://jsonplaceholder.typicode.com/posts?userId=1, userId es el parámetro y 1 es su valor. En Postman, puedes agregar parámetros de consulta en la sección «Params». Estos son útiles cuando necesitas filtrar, ordenar o limitar los resultados de una solicitud.

### Encabezados

Los encabezados son información adicional que envías junto con tu solicitud para proporcionar detalles específicos sobre la solicitud o el cliente. Los encabezados pueden incluir cosas como información de autenticación, preferencias de contenido o metadatos. Por ejemplo, si estás trabajando con una API que requiere autenticación, debes incluir un encabezado de «Authorization» con las credenciales necesarias. En Postman, puedes agregar encabezados personalizados en la sección «Headers».

### Cuerpo en Formato JSON

Algunas solicitudes requieren enviar información más compleja en el cuerpo (body) de la solicitud. Esto es común en las solicitudes HTTP POST, PUT y DELETE. El cuerpo puede contener datos estructurados en formatos como JSON. JSON (JavaScript Object Notation) es un formato ligero para el intercambio de datos que se asemeja a la estructura de los objetos en muchos lenguajes de programación. Puedes enviar objetos JSON en el cuerpo de la solicitud para crear o actualizar recursos en la API.

Ejemplo: Enviando un Objeto JSON en el Cuerpo


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/e51b3086-b8b3-4dd4-81cd-1148e01bb271)

Supongamos que estás trabajando con una API de creación de usuarios y deseas crear un nuevo usuario. Puedes enviar un objeto JSON en el cuerpo de la solicitud POST para proporcionar los detalles del nuevo usuario:

---

## :star: Test en Postman

Los tests son una parte esencial de Postman, ya que te permiten automatizar la verificación de respuestas y asegurarte de que tu API funcione como se espera. En este ejemplo, vamos a verificar si la respuesta de una solicitud GET contiene un cierto valor en el cuerpo.

Supongamos que estás trabajando con la API de JSONPlaceholder (una API de pruebas) y deseas verificar si una solicitud GET a la URL https://jsonplaceholder.typicode.com/posts/1 devuelve el título «sunt aut facere repellat provident occaecati excepturi optio reprehenderit».

1. Realiza una solicitud GET a la URL https://jsonplaceholder.typicode.com/posts/1 en Postman.

2. Después de recibir la respuesta, haz clic en la pestaña «Tests» en la parte inferior de la ventana de Postman.

En el área de «Tests», puedes escribir código JavaScript para verificar la respuesta. Aquí tienes un ejemplo de test para verificar si el título de la publicación coincide con el valor esperado:

```JavaScript
// Prueba para verificar el título de la publicación
pm.test("Verificar título de la publicación", function () {
    // Obtener la respuesta JSON de la solicitud
    var jsonData = pm.response.json();
    
    // Valor esperado del título
    var expectedTitle = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
    
    // Verificar si el título en la respuesta coincide con el valor esperado
    pm.expect(jsonData.title).to.eql(expectedTitle);
});
```

---

### Prepárate para la siguiente clase

En la siguiente clase veremos como utilizar Postman con más profundidad

---
