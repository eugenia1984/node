# :star: ENCUENTRO 20 – Arquitectura de aplicaciones


Node.js es un entorno de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript fuera del navegador, en el servidor. Fue creado por Ryan Dahl en 2009 y se ha vuelto muy popular debido a su enfoque en la programación del lado del servidor y la capacidad de manejar operaciones de entrada y salida no bloqueantes de manera eficiente.

Una de las partes fundamentales de Node.js es el motor V8. V8 es un motor de JavaScript de código abierto desarrollado por Google. Está escrito en C++ y se utiliza tanto en el navegador Chrome como en Node.js. La principal función de V8 es interpretar y ejecutar el código JavaScript.

V8 compila el código JavaScript en código de máquina altamente optimizado en tiempo de ejecución, lo que le permite lograr un rendimiento rápido y eficiente. Utiliza técnicas avanzadas de compilación, como la compilación JIT (Just-In-Time), que mejora aún más el rendimiento del código JavaScript.

Ahora veamos como organizar una aplicación de backend en Node.JS

---
---

## <img width="40" height="40" src="https://img.icons8.com/color/40/documents.png" alt="documents"/> Separación de responsabilidades


La separación de responsabilidades es un principio fundamental en el desarrollo de software y se aplica tanto en aplicaciones web como en aplicaciones Node.js. La idea principal detrás de este principio es dividir una aplicación en componentes o capas que tengan responsabilidades claras y bien definidas. Esto facilita la comprensión, el mantenimiento y la escalabilidad del código.

En el contexto de una aplicación Node.js, la separación de responsabilidades implica dividir la lógica de la aplicación en capas o componentes distintos.

---

### Capa de enrutamiento

Esta capa se encarga de manejar las rutas de la aplicación y de dirigir las solicitudes entrantes a las funciones o controladores correspondientes. Puede utilizar un enrutador como Express.js para definir y gestionar las rutas.

---

###  Capa de controladores

Los controladores son responsables de manejar las solicitudes y generar las respuestas correspondientes. Reciben los datos enviados desde la capa de enrutamiento, realizan cualquier procesamiento necesario y devuelven la respuesta adecuada. Los controladores pueden acceder a otros componentes, como servicios o modelos, para realizar operaciones más complejas.


---

### Capa de servicios

La capa de servicios contiene la lógica de negocio de la aplicación. Aquí es donde se implementan las operaciones y funcionalidades específicas de la aplicación. Los servicios encapsulan la lógica y proporcionan una interfaz para que los controladores y otros componentes accedan a ellos.


---

###  Capa de modelos

Los modelos representan la estructura y la lógica relacionada con la base de datos en la aplicación. Los modelos se utilizan para interactuar con la base de datos, realizar consultas y manipular los datos almacenados. Pueden utilizar un ORM (Object-Relational Mapping) como Mongoose para facilitar la interacción con la base de datos.


---

### Capa de middleware

Los middleware son componentes que se ejecutan entre las solicitudes entrantes y los controladores. Pueden realizar tareas como la autenticación, la validación de datos, el registro de solicitudes, la compresión de respuestas, entre otras. Los middleware ayudan a modularizar y reutilizar la lógica común que se aplica a varias rutas o controladores.


---
---


## <img width="40" height="40" src="https://img.icons8.com/dusk/40/error.png" alt="error"/> Gestión de errores

La gestión de errores es un aspecto fundamental en el desarrollo de aplicaciones, ya que ningún sistema está libre de errores o excepciones. La gestión de errores en Node.js implica detectar, capturar y manejar los errores de manera adecuada para mantener el buen funcionamiento de la aplicación y brindar una experiencia de usuario fluida.

Un error en una aplicación Node.js puede ocurrir por varias razones, como datos de entrada incorrectos, problemas de conectividad, errores de programación o fallas en servicios externos. Independientemente de la causa, es importante manejar los errores de manera apropiada para minimizar su impacto y proporcionar una respuesta adecuada al usuario.

Aquí hay algunos conceptos clave sobre la gestión de errores en Node.js:


### Detección de errores

La detección de errores implica identificar cuándo ocurre un error en la aplicación. Esto se logra a través de técnicas como el monitoreo de registros, el seguimiento de métricas y el uso de herramientas de detección de errores. La detección temprana de errores es fundamental para poder tomar medidas rápidas y resolver los problemas de manera oportuna.

### Captura de errores

Una vez que se detecta un error, se debe capturar para evitar que la aplicación se detenga o se bloquee. En Node.js, esto se puede lograr utilizando bloques try-catch, donde el código propenso a errores se coloca dentro del bloque try y cualquier error que ocurra se captura en el bloque catch. Al capturar los errores, se evita que se propaguen sin control y se tiene la oportunidad de tomar medidas adecuadas.

### Manejo de errores

El manejo de errores implica decidir qué acciones tomar cuando se produce un error. Esto puede incluir mostrar un mensaje de error al usuario, registrar el error para su posterior análisis, tomar medidas correctivas, como reiniciar servicios o intentar recuperarse del error, o notificar al equipo de desarrollo. El manejo de errores debe ser específico para cada tipo de error y adaptado a las necesidades y requerimientos de la aplicación.

### Comunicación de errores

Cuando ocurre un error, es importante proporcionar una respuesta adecuada al usuario para informar sobre el problema. Esto implica mostrar mensajes de error claros y comprensibles, evitando revelar información sensible o técnicamente compleja. Una comunicación efectiva de errores ayuda a los usuarios a comprender lo que ha ocurrido y qué pueden hacer a continuación.

### Prevención de errores

Además de la gestión de errores, es fundamental trabajar en la prevención de errores. Esto implica realizar validaciones adecuadas de los datos de entrada, implementar pruebas exhaustivas, seguir buenas prácticas de desarrollo y utilizar técnicas como la validación de datos y la desinfección de inputs. La prevención de errores ayuda a reducir la probabilidad de que ocurran errores en primer lugar.

La gestión de errores no solo se trata de corregir los errores que ya han ocurrido, sino también de tomar medidas proactivas para prevenirlos y minimizar su impacto en la aplicación. Una buena gestión de errores ayuda a mantener la estabilidad, la confiabilidad y la usabilidad de la aplicación, mejorando así la experiencia del usuario y la calidad del software en general.

---

## :computer: La calidad de tu aplicación

Las pruebas son una parte esencial del desarrollo de software, ya que garantizan la calidad, el correcto funcionamiento y la confiabilidad de una aplicación. En el contexto de una aplicación Node.js, las pruebas permiten verificar que el código y los componentes funcionen como se esperaba, asegurando que el software cumpla con los requisitos y proporcione una experiencia óptima al usuario.

Realizar pruebas en una aplicación Node.js implica verificar y validar su funcionamiento a través de diferentes enfoques y niveles de prueba. Existen varios tipos de pruebas que se pueden aplicar en el desarrollo de una aplicación Node.js, cada uno con su propósito y alcance específicos.

A continuación, presentaré una lista de herramientas comunes que se utilizan para realizar pruebas en el backend de una aplicación Node.js:

###  Pruebas unitarias

Mocha, Jest, Jasmine y AVA son ejemplos de frameworks populares para realizar pruebas unitarias en Node.js. Estas herramientas permiten definir y ejecutar pruebas en componentes aislados de la aplicación, como funciones y módulos, para verificar su comportamiento y rendimiento.

Bibliotecas de aserciones: Chai y Should.js son bibliotecas populares utilizadas para realizar aserciones en pruebas unitarias. Estas bibliotecas proporcionan una sintaxis expresiva y legible para realizar afirmaciones y verificar resultados esperados.

### Pruebas de integración

SuperTest, Frisby y supertest-api son frameworks utilizados para realizar pruebas de integración en Node.js. Estas herramientas permiten enviar solicitudes HTTP a la aplicación y validar las respuestas, verificando así la interacción correcta entre los diferentes componentes.

### Pruebas de carga y rendimiento

Artillery, K6 y Loadtest son herramientas que se utilizan para realizar pruebas de carga y rendimiento en una aplicación Node.js. Estas herramientas permiten simular cargas de trabajo y evaluar el rendimiento y la escalabilidad de la aplicación bajo diferentes condiciones.


---


## :computer: Tu aplicación para todo el mundo

Al desplegar una aplicación Node.js, es común utilizar diferentes entornos para gestionar el ciclo de vida del software y asegurar su calidad antes de su lanzamiento final. Estos entornos típicamente incluyen el desarrollo local (dev), entornos de pruebas (staging) y el entorno de producción (production). Cada entorno sirve a un propósito específico y ayuda a garantizar un despliegue suave y sin problemas de la aplicación.

### Entorno de desarrollo (dev)

Este entorno se refiere a tu máquina local donde desarrollas y pruebas tu aplicación Node.js. Aquí, puedes realizar cambios, agregar nuevas características y probar la funcionalidad antes de enviar los cambios a otros entornos. También puedes utilizar una base de datos local o servicios de terceros en modo de desarrollo para simular el comportamiento del entorno de producción.

###  Entorno de pruebas (staging)

El entorno de pruebas es una réplica del entorno de producción y se utiliza para realizar pruebas exhaustivas antes de que la aplicación se despliegue en producción. Aquí, puedes probar nuevos cambios y características en un ambiente controlado, probar la integración con servicios externos y realizar pruebas de rendimiento y seguridad adicionales.

### Entorno de producción (production)

El entorno de producción es donde tu aplicación Node.js estará disponible para los usuarios finales. Aquí, se espera que la aplicación sea estable, segura y esté lista para su uso en un entorno en vivo. Cualquier cambio o actualización en la aplicación debe pasar por pruebas rigurosas en los entornos anteriores antes de ser desplegado en producción.

Existen diversas opciones de alojamiento para desplegar una aplicación Node.js, y es importante elegir el entorno de alojamiento adecuado según tus necesidades y requisitos. Algunas opciones comunes incluyen:

- Servicios en la nube: Los proveedores de servicios en la nube como Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform (GCP) ofrecen soluciones específicas para Node.js. Estos servicios proporcionan una infraestructura escalable y flexible para alojar y ejecutar tu aplicación Node.js en entornos de producción.

- Plataformas de despliegue: Existen diversos servicios y plataformas que ofrecen soluciones de despliegue para aplicaciones Node.js, como Heroku, DigitalOcean y Railway. Estos servicios brindan infraestructura escalable y herramientas integradas que facilitan el despliegue y la administración de aplicaciones Node.js en entornos de producción.

Al seleccionar el entorno de alojamiento adecuado, es importante considerar aspectos como el costo, la escalabilidad, la facilidad de uso, las características ofrecidas y el soporte técnico disponible. Cada opción de alojamiento tiene sus ventajas y desventajas, por lo que debes evaluar cuidadosamente cuál se ajusta mejor a tus necesidades y requisitos.

Además del entorno de alojamiento, otros aspectos importantes del despliegue de una aplicación Node.js incluyen la configuración del servidor, la gestión de dependencias, el manejo de variables de entorno y la automatización del proceso de despliegue. Estos aspectos garantizan que tu aplicación se ejecute correctamente en el entorno de producción y esté lista para su uso por parte de los usuarios finales.

Recuerda que el proceso de despliegue puede variar dependiendo de tus necesidades y preferencias. Es importante seguir las mejores prácticas de seguridad, monitoreo y escalabilidad, y contar con una estrategia sólida de copias de seguridad para asegurar el rendimiento y la disponibilidad continua de tu aplicación Node.js en el entorno de producción.



---

## <img width="40" height="40" src="https://img.icons8.com/emoji/40/check-mark-button-emoji.png" alt="check-mark-button-emoji"/>  Buenas prácticas

La adopción de buenas prácticas en el desarrollo de aplicaciones Node.js es esencial para garantizar la calidad, la eficiencia y la mantenibilidad del código. Las buenas prácticas se basan en principios como el código limpio, la legibilidad, la modularidad y la consistencia en el estilo de codificación. Seguir estas prácticas no solo mejora la experiencia del desarrollo, sino que también facilita la colaboración en equipos, reduce errores y favorece la escalabilidad de las aplicaciones.

Una de las bases de las buenas prácticas en el desarrollo de software es el código limpio. El código limpio es aquel que es fácil de leer, entender y mantener. Utiliza nombres descriptivos para variables, funciones y clases, evita la repetición de código y sigue principios como el principio de responsabilidad única y el principio de separación de preocupaciones. El código limpio es crucial para que el desarrollo sea más eficiente y para facilitar la colaboración en proyectos de equipo.

Además del código limpio, el uso de herramientas como los linters también es fundamental. Los linters son utilidades que analizan el código en busca de errores, inconsistencias y violaciones de las reglas de codificación establecidas. Al utilizar un linter en tu proyecto Node.js, puedes garantizar que el código cumpla con estándares predefinidos y seguir las mejores prácticas de la comunidad. Esto ayuda a identificar y corregir problemas en el código de manera temprana, mejorando así la calidad y la legibilidad del mismo.

Otra práctica importante es el uso de pruebas automatizadas. Las pruebas automatizadas, como las pruebas unitarias y las pruebas de integración, ayudan a garantizar que tu código funcione correctamente y se comporte según lo esperado. Estas pruebas pueden detectar errores y problemas de manera temprana, lo que facilita su corrección y evita la propagación de errores en etapas posteriores del desarrollo.

En resumen, seguir buenas prácticas en el desarrollo de aplicaciones Node.js, como mantener un código limpio, utilizar linters y realizar pruebas automatizadas, es esencial para producir un software de calidad, escalable y fácil de mantener. Estas prácticas promueven la eficiencia del desarrollo, facilitan la colaboración en equipo y mejoran la experiencia del usuario final.

---

Prepárate para el próximo encuentro
En la próxima clase empezaremos a ver como distribuir nuestra aplicación para comenzar prolijos desde el inicio



---
