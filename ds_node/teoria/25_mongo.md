# :computer: ENCUENTRO 25 - Mongo – Lunes 28 de agosto 19hs de Argentina

¡Hola a todos, exploradores del código y constructores de aplicaciones asombrosas! 🚀

Hoy nos embarcamos en un emocionante viaje hacia el universo de la programación con un toque muy especial: ¡bases de datos y Node.js! 🌐💻 Pero espera, ¿qué significa todo eso? ¡No te preocupes! Vamos a desentrañar estos términos juntos, de manera relajada y divertida. 🤝

Imagina que estás construyendo una casa súper genial. Necesitas un lugar donde guardar tus cosas, ¿verdad? Eso es lo que las bases de datos hacen para nuestras aplicaciones: proporcionan un espacio seguro y organizado para almacenar información de manera persistente. Entonces, si alguna vez te preguntaste cómo las aplicaciones como tus redes sociales favoritas mantienen tus fotos y publicaciones seguras y siempre accesibles, ¡las bases de datos son la respuesta mágica!

Hoy, nuestro enfoque se centra en una dupla poderosa: MongoDB y Node.js. 🍃🎉 MongoDB es como una súper caja de almacenamiento que nos permite guardar nuestros datos de una manera muy flexible, ¡y Node.js es como el héroe veloz que construye aplicaciones increíbles con súper rapidez! Juntos, ¡forman un equipo imparable!

Primero, vamos a poner manos a la obra y aprender cómo usar una herramienta asombrosa llamada Docker para crear una versión digital de una base de datos MongoDB. ¡Es como tener tu propio laboratorio de desarrollo! 🧪🔬 No te preocupes, te guiaré paso a paso, ¡así que no hay riesgo de perderse!

Después, nos sumergiremos en las operaciones básicas de MongoDB. ¡Imagina que estás en una tienda de construcción y necesitas herramientas diferentes para diferentes tareas! Aquí aprenderemos cómo crear, leer, actualizar y eliminar datos desde nuestra aplicación Node.js. ¡Es como ser un mago de la información!

Pero eso no es todo, mis amigos. ¡Vamos a llevar las cosas al siguiente nivel! Conoceremos a nuestro amigo Mongoose, una herramienta que nos ayuda a organizar y dar forma a nuestros datos en la base de datos. Es como tener un maestro constructor que asegura que todas las piezas encajen perfectamente.

¡Así que prepárate para un emocionante viaje lleno de codificación, aprendizaje y mucha diversión! 🎢📚 Estoy aquí para guiarte en cada paso del camino, como un compañero aventurero en esta búsqueda de conocimiento.

¡Vamonos! ¡Es hora de explorar el fascinante mundo de las bases de datos con MongoDB y Node.js!

---

## :star: ¿Qué Son las Bases de Datos y por Qué Son Importantes?:

Saludos, estimados estudiantes y entusiastas del desarrollo. En el recorrido de hoy, nos sumergiremos en el concepto fundamental de las bases de datos y su trascendental relevancia en el ámbito tecnológico. Permítanme guiarlos a través de este concepto crucial de manera que todos puedan comprender su esencia.

Para comprender las bases de datos, pensemos en ellas como el sistema de archivo definitivo de una aplicación. Imaginen una biblioteca que almacena cuidadosamente cada libro y documento para un acceso posterior eficiente. De manera similar, una base de datos almacena datos con el propósito de que sean gestionados y recuperados cuando se necesiten, lo que permite que nuestras aplicaciones se vuelvan más que meros programas temporales.

La persistencia de datos es la característica clave que hace que las bases de datos sean imprescindibles. En un mundo donde nuestras aplicaciones interactúan con miles, si no millones, de usuarios, necesitamos un método para almacenar información en un lugar seguro y recuperarla cuando sea necesario, incluso después de que se haya cerrado la aplicación. Este es el papel esencial de una base de datos, un depósito confiable y estructurado de información.

En este punto de partida, adentrémonos en el mundo de las bases de datos y exploraremos cómo MongoDB y Node.js forman una alianza formidable para enfrentar los desafíos de la persistencia de datos y la construcción de aplicaciones de calidad. A medida que avanzamos en esta travesía, descubriremos cómo estas tecnologías complementarias nos permiten crear aplicaciones sólidas y con un flujo de información eficiente.

Estoy encantado de ser su guía en este viaje de aprendizaje, y confío en que, al final, tendrán una comprensión más profunda de por qué las bases de datos son un pilar vital en el desarrollo de aplicaciones modernas.

---

## :star: Introducción a MongoDB: Descubriendo el Mundo de las Bases de Datos NoSQL

En esta sección, daremos nuestros primeros pasos en el intrigante mundo de MongoDB, una base de datos NoSQL que ha transformado la manera en que manejamos datos en nuestras aplicaciones. Permítanme ser su guía en esta emocionante introducción a un concepto que pronto se volverá un recurso valioso en su caja de herramientas.

En términos sencillos, MongoDB es una base de datos de documentos que rompe los esquemas tradicionales de almacenamiento de datos en tablas relacionales. ¿Se acuerdan de las estructuras filas-columnas en Excel? Bueno, MongoDB es como una mochila mágica donde podemos guardar todos nuestros datos en forma de documentos flexibles, en lugar de tener que encajarlos en celdas rígidas.

Esta flexibilidad es la esencia de MongoDB. Nos permite almacenar datos de manera libre, como si estuviéramos organizando piezas de Lego en lugar de piezas de rompecabezas. Por ejemplo, podríamos tener un documento que representa a un usuario con su nombre, edad y correo electrónico, pero también puede incluir cosas como intereses y redes sociales. ¡No hay reglas estrictas aquí!

¿Por qué esto es emocionante? Pues porque refleja mucho mejor la forma en que pensamos y trabajamos en el mundo real. En la vida, las cosas no encajan perfectamente en columnas y filas, ¿verdad? MongoDB reconoce esta realidad y nos brinda una manera más natural de almacenar y recuperar datos.

A medida que avanzamos, exploraremos conceptos fundamentales de MongoDB, como colecciones (donde guardamos nuestros documentos), documentos individuales (nuestros datos reales) e índices (para hacer búsquedas rápidas). Nos sumergiremos en el lenguaje de consulta de MongoDB, que es como hablar con la base de datos para encontrar exactamente lo que necesitamos.

---

## :star: Levantar una Aplicación Node.js con MongoDB Usando Docker:

En esta sección, vamos a sumergirnos en el emocionante proceso de levantar una aplicación Node.js que trabaja en perfecta armonía con MongoDB, todo dentro de un entorno controlado y eficiente gracias a Docker. ¡Prepárense para adentrarse en el apasionante mundo del desarrollo de aplicaciones!

---

## Descargando la Imagen de MongoDB con Docker Pull:

Antes de construir nuestro entorno de desarrollo, necesitamos asegurarnos de tener la imagen de MongoDB disponible en nuestro sistema. Utilizaremos Docker para hacer esto de manera sencilla. Abre tu terminal y ejecuta el siguiente comando:

``docker pull mongo``

## Levantando el Contenedor de MongoDB con Persistencia y Variables de Entorno:

Ahora que tenemos la imagen de MongoDB, vamos a crear un contenedor que aloje nuestra base de datos. Pero aquí viene lo genial: ¡vamos a asegurarnos de que los datos sean persistentes incluso después de que el contenedor se detenga!

Ejecuta el siguiente comando para crear tu contenedor de MongoDB:

``docker run -d -p 27017:27017 --name mongodb-container -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secretpassword -v mongodb-data:/data/db mongo``

Permíteme desglosar esto:

- ``-d``: Esto ejecutará el contenedor en segundo plano (detached).

- ``-p 27017:27017``: Aquí estamos enlazando el puerto 27017 de nuestro sistema host al puerto 27017 del contenedor. Este es el puerto por defecto de MongoDB.

- ``--name mongodb-container``: Asignamos un nombre amigable al contenedor.

- ``-e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secretpassword``: Aquí estamos configurando las credenciales de administrador para MongoDB. Sientan la libertad de ajustar el nombre de usuario y contraseña según su preferencia.

- ``-v mongodb-data:/data/db``: Esto es donde entra la magia de la persistencia. Creamos un volumen llamado mongodb-data que está conectado al directorio /data/db en el contenedor. Esto asegura que nuestros datos no se pierdan incluso si el contenedor se detiene.

¡Y ahí lo tienes! Ahora tienes un contenedor de MongoDB en funcionamiento, listo para que tu aplicación Node.js interactúe con él. En la siguiente sección, exploraremos cómo hacer que Node.js hable con MongoDB.

---

## Estableciendo una Conexión Básica entre Node.js y MongoDB

En esta sección, vamos a crear una conexión básica entre una aplicación Node.js y nuestra instancia de MongoDB que hemos levantado con tanto cariño. Estamos a punto de lograr que nuestros componentes hablen entre sí. ¡Vamos a por ello!

## Configurando el Archivo de Conexión:

Comencemos creando un archivo en tu directorio raíz de trabajo. Este será nuestro terreno de juego para establecer la conexión. Abrimos el archivo con nuestro editor de código preferido y comenzamos con la siguiente magia:

Instala la dependencia mongoose: ``npm i mongoose``

Crea la conexión en tu código

```JavaScript
const mongoose = require('mongoose');

// Establecemos la conexión con MongoDB
mongoose.connect('mongodb://admin:secretpassword@localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Manejamos eventos de conexión y error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conexión exitosa con la base de datos.');
});
```

## Desglose Rápido:

- Importamos la biblioteca mongoose, que es nuestro enlace a MongoDB.

- Utilizamos mongoose.connect() para establecer la conexión con nuestra base de datos. El URL contiene el nombre de usuario y contraseña que configuramos previamente, junto con detalles de la base de datos (mydatabase en este caso).

- Configuramos opciones como useNewUrlParser y useUnifiedTopology, que son configuraciones recomendadas para gestionar la conexión.

- Manejamos los eventos de conexión y error. Si hay un error, se mostrará en la consola. Si la conexión es exitosa, veremos un mensaje de confirmación.

¡Eso es! Has establecido una conexión básica entre tu aplicación Node.js y MongoDB. Con esto, estás listo para comenzar a interactuar con tu base de datos. En las siguientes secciones, exploraremos cómo realizar operaciones CRUD (crear, leer, actualizar y eliminar) en MongoDB a través de Node.js.

---

## Esquemas y Modelos con Mongoose: ¡Estructura tus Datos con Estilo!

En esta sección, nos adentraremos en el emocionante mundo de los esquemas en Mongoose y cómo utilizamos estos planos para dar forma y estructura a nuestros datos en MongoDB.

### Explorando el Concepto de Esquemas:

Un esquema es como un plano detallado para construir una casa. Imagina que estás diseñando un hogar, y tienes un diseño en papel que muestra dónde van las habitaciones, las puertas, las ventanas y todos los detalles. En Mongoose, un esquema es un conjunto de instrucciones detalladas que define cómo se verán y se organizarán los datos en nuestra base de datos.

Comencemos diseñando un esquema para un producto básico.

```JavaScript
// Definimos un esquema para productos
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});
```

Hemos creado un esquema llamado productSchema que define cómo se estructuran nuestros productos. En este caso, tenemos tres campos: name, description y price. Cada uno de ellos tiene un tipo de dato asociado (String y Number, respectivamente).

## Entendiendo la Relación Entre Esquemas y Modelos:

Como hemos visto el esquema es el plano de la casa, sin embargo, el plano no es la casa real. Para tener una casa física, necesitas construir según ese plano. En Mongoose, el «construir» corresponde a los modelos. Un modelo es una representación concreta y operativa de un esquema. Utilizamos modelos para crear, guardar, recuperar y manipular datos en la base de datos.

## Creando un Modelo a partir del Esquema:
Siguiendo con nuestro ejemplo del producto, aquí está la explicación más detallada de cómo un esquema y un modelo se conectan:

```JavaScript
// Definimos un esquema para productos
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

// Creamos un modelo basado en el esquema de productos
const Product = mongoose.model('Product', productSchema);
```

En este fragmento, productSchema es nuestro plano detallado que establece cómo se estructuran los datos de un producto. Sin embargo, un esquema en sí mismo no puede interactuar con la base de datos. Aquí es donde entra en juego el modelo.

Hemos creado un modelo llamado Product utilizando el esquema productSchema. El modelo Product es como un constructor que nos permite crear objetos que cumplen con el esquema. Esto significa que los datos que insertamos a través de un modelo se adhieren a la estructura definida en el esquema.

---

## Insertando un Producto con el Modelo

Al utilizar el modelo, podemos crear instancias de objetos que se ajustan a las reglas del esquema y, a continuación, insertar esos objetos en la base de datos:

```JavaSCript
const newProduct = new Product({
  name: 'Producto Genial',
  description: 'Este producto es simplemente genial. ¡No querrás perdértelo!',
  price: 19.99
});

newProduct.save();
```

Mediante el modelo Product, creamos un objeto newProduct que sigue la estructura definida en productSchema. Luego, usamos el método .save() para guardar ese objeto en la base de datos.

---

## Explorando Datos con Modelos

En esta sección, continuaremos explorando cómo los modelos en Mongoose nos permiten interactuar con los datos en la base de datos de manera estructurada. Vamos a introducir las operaciones find para descubrir y recuperar información valiosa.

```JavaScript
// Utilizamos el modelo para buscar todos los productos
// Asegurate de utilizarlo en una función async
const products = await Product.find({ });
return products
Elimina un producto

Product.findByIdAndRemove(id)
```

También puedes explorar funciones como findOneAndUpdate para realizar actualizaciones sobre tus datos

---

## Cerrando el Capítulo de MongoDB y Node.js: Forjando Caminos de Datos

Con cada línea de código, hemos esculpido una vía hacia la gestión de datos más poderosa y organizada en nuestras aplicaciones. Desde la construcción de esquemas hasta la interacción con modelos, has recorrido un camino de descubrimiento y crecimiento.

MongoDB y Node.js se han unido para brindarte las herramientas que necesitas para crear aplicaciones robustas y escalables. Los esquemas estructuran tus datos, los modelos les dan vida y las operaciones CRUD los ponen en movimiento.

Pero esto es solo el comienzo. A medida que explores más allá de estas páginas, encontrarás consultas avanzadas, relaciones de datos y operaciones complejas esperando a ser descubiertas. Tu viaje en el mundo de MongoDB y Node.js está lleno de posibilidades.

---
