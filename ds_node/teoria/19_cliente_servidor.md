# :star:  ENCUENTRO 19 - Arquitectura Cliente-Servidor - Lunes 7 Agosto  19.00hs


¿De verdad estamos aquí? Han pasado ya 18 clases, increíble que hayamos avanzado tanto, he recibido mucho cariño de ustedes y realmente me han dado un empujón gigante para todo lo que viene, ¿La parte difícil? nooooo, para nada, juntamos vamos a lograr superar los obstáculos que se nos presenten.

Hoy vamos a explorar los fundamentos de la arquitectura cliente-servidor para comprender cómo funciona la comunicación entre el cliente y el servidor y así poder avanzar con el curso.

La arquitectura cliente-servidor es una piedra angular en el mundo del desarrollo web. Es el sistema que permite que los sitios web, las aplicaciones y los servicios en línea funcionen de manera efectiva, brindando una experiencia fluida al usuario.

En etapa del curso, nos enfocaremos en la arquitectura cliente-servidor aplicada al backend utilizando Node.js para tener una noción más clara de como llega la información a nuestro backend para que le demos procesamiento a los datos..

A lo largo de este artículo, exploraremos temas clave que te ayudarán a comprender cómo los clientes y los servidores interactúan, cómo se transmiten los datos y cómo se logra la comunicación sin problemas entre ambos. Además, utilizaremos metáforas simples y ejemplos prácticos para facilitar la comprensión de estos conceptos básicos.

A medida que avancemos, cubriremos temas como el funcionamiento básico de una solicitud y respuesta, la importancia de las direcciones IP y los puertos, y cómo abordar los desafíos de escalabilidad y seguridad en la arquitectura cliente-servidor.

¡Comencemos nuestro viaje hacia el mundo de la arquitectura cliente-servidor!

---

## <img width="40" height="40" src="https://img.icons8.com/officel/40/monitor.png" alt="monitor"/> <img width="40" height="40" src="https://img.icons8.com/stickers/40/server-shutdown.png" alt="server-shutdown"/>  Introducción a Cliente-Servidor

Imaginen por un momento que están sentados en un restaurante, listos para disfrutar de una deliciosa comida. En este escenario, podemos encontrar una metáfora perfecta para comprender la arquitectura cliente-servidor.

Como cliente en este restaurante, tienes una solicitud específica: deseas pedir un plato delicioso. ¿A quién recurres? ¡Exacto! Al camarero, que actúa como el servidor en esta metáfora. Tu tarea como cliente es comunicar claramente qué quieres y esperar pacientemente a que el camarero entregue tu pedido.

En el mundo de la arquitectura cliente-servidor, tú, como cliente, eres la parte que solicita información o servicios, mientras que el servidor es el que responde a esas solicitudes. Esta comunicación bidireccional es fundamental para el funcionamiento de aplicaciones web y servicios en línea.

Durante el transcurso de este artículo, exploraremos cómo se establece esta comunicación entre el cliente y el servidor. Discutiremos los protocolos de comunicación utilizados, como HTTP y WebSocket, y cómo facilitan el intercambio de información de manera eficiente.

Además, veremos cómo funciona el proceso básico de una solicitud y una respuesta. Descubriremos cómo se inicia una solicitud desde el cliente, cómo se procesa en el servidor y cómo se genera una respuesta para ser enviada de vuelta al cliente.

La arquitectura cliente-servidor tiene una gran relevancia en el desarrollo backend con Node.js, y entender estos conceptos básicos sentará una base sólida para tu comprensión en el mundo del desarrollo web.

---

## :computer: Componentes


Imaginen nuevamente ese restaurante. Como cliente, estás sentado en tu mesa, listo para realizar tu pedido. Pero, ¿quién está al otro lado de la comunicación? ¡Es el camarero, quien actúa como el servidor! El camarero se encarga de recibir tu solicitud y asegurarse de que se cumpla correctamente.

En el mundo de la arquitectura cliente-servidor, el cliente es la parte que solicita información o servicios, mientras que el servidor es la parte que responde a esas solicitudes. Imagina al cliente como el usuario de una aplicación web o un navegador, y al servidor como la computadora o el sistema que almacena y procesa la información solicitada.

El cliente, en su forma más común, es el usuario que interactúa con una aplicación o un sitio web a través de un navegador. Puede ser una persona utilizando un teléfono móvil, una tablet o una computadora de escritorio. El cliente envía solicitudes (el famoso request) al servidor y espera las respuestas correspondientes.

Por otro lado, el servidor es quién procesa esas solicitudes del cliente y envía las respuestas apropiadas. El servidor tiene la capacidad de almacenar y acceder a información, procesar datos y realizar acciones específicas en función de las solicitudes del cliente. Puede ser una computadora dedicada o una nube de servidores.

Además de estos componentes, también hay protocolos de comunicación que facilitan la interacción entre el cliente y el servidor. Algunos ejemplos comunes son el Protocolo de Transferencia de Hipertexto (HTTP) para la transferencia de datos en la web y WebSocket para la comunicación bidireccional en tiempo real.

---

## <img width="40" height="40" src="https://img.icons8.com/color/40/ok--v1.png" alt="ok--v1"/> Solicitudes


Ahora vemos con el ejemplo de un partido de tenis como funciona el proceso de solicitud/respuesta.

Imaginen que están en una cancha de tenis, listos para jugar un partido emocionante. Cuando uno de ustedes golpee la pelota hacia el otro, esta viajará por el aire hasta que el otro jugador la reciba y la golpee de vuelta. En este juego de tenis, la pelota representa una solicitud, y ustedes, queridos estudiantes, son los jugadores, con uno de ustedes actuando como el cliente y el otro como el servidor.

En la arquitectura cliente-servidor, el proceso de una solicitud y una respuesta sigue el ritmo del tenis. El cliente, como el jugador que inicia el juego, envía una solicitud al servidor, lanzando la pelota hacia el otro lado de la cancha. El servidor, como el jugador que recibe la pelota, procesa la solicitud y golpea la pelota de vuelta, enviando la respuesta al cliente.

Durante el intercambio, el cliente incluye información crucial en su solicitud. Puede pedir lo que necesita y enviar datos para que el servidor los procese o realizar cualquier otra acción necesaria. El servidor, atento y listo para el desafío, recibe la solicitud, la interpreta y toma las acciones necesarias para proporcionar una respuesta adecuada.

Una vez que el servidor ha procesado la solicitud, genera una respuesta que contiene la información solicitada por el cliente o cualquier mensaje relevante. ¡Es como golpear la pelota de vuelta con precisión y potencia! Esta respuesta viaja por el aire, de vuelta al cliente, completando así el emocionante proceso de una solicitud y una respuesta.

Recuerden que este proceso ocurre en un abrir y cerrar de ojos, al igual que en un partido de tenis con jugadores rápidos y hábiles. El intercambio de solicitudes y respuestas en la arquitectura cliente-servidor es rápido y eficiente, permitiendo una comunicación fluida y dinámica entre el cliente y el servidor.

---

## Electrónico y la web

Cuando enviamos un correo electrónico, utilizamos el protocolo SMTP (Protocolo Simple de Transferencia de Correo) que utiliza el puerto 25. Imaginen el puerto 25 como la ventanilla de una oficina de correos especializada en la recepción de mensajes de correo electrónico. El programa que está escuchando en ese puerto recibe las solicitudes de envío de correos electrónicos y las procesa para su posterior entrega.

Por otro lado, cuando navegamos por la web, utilizamos el protocolo HTTP (Protocolo de Transferencia de Hipertexto) que utiliza el puerto 80. Imaginen el puerto 80 como la ventanilla de un establecimiento que brinda servicios web. El programa que está escuchando en ese puerto recibe las solicitudes de acceso a páginas web y responde con el contenido correspondiente.


En la actualidad, también es común utilizar HTTPS (HTTP Seguro), que utiliza el puerto 443. Pueden visualizar el puerto 443 como la ventanilla de un establecimiento similar al anterior, pero con mayor seguridad. El programa que está escuchando en ese puerto recibe las solicitudes de acceso a páginas web seguras y garantiza que la comunicación esté encriptada para proteger los datos transmitidos.

Estos son solo algunos ejemplos de puertos y los protocolos asociados a ellos. Sin embargo, en el contexto del desarrollo de software, nosotros, como desarrolladores, tendremos la tarea de diseñar nuestro propio software para que se ejecute en un puerto específico. Así, nuestro programa estará a la espera de peticiones entrantes en ese puerto y será responsable de procesarlas y responder adecuadamente.

Recuerden que los puertos son esenciales para garantizar que las solicitudes y respuestas sean enviadas a los programas correctos en los dispositivos de destino. Al comprender el papel de los puertos, podemos diseñar y desarrollar software que corra en un puerto específico para aceptar peticiones y responderlas de manera eficiente.

---

## <img width="40" height="40" src="https://img.icons8.com/officel/40/dns.png" alt="dns"/> DNS 

En este punto, vamos a explorar un componente esencial para la navegación en Internet: el DNS (Sistema de Nombres de Dominio).

Imaginen que están tratando de acceder a un sitio web escribiendo su dirección IP en lugar de su nombre de dominio. Sería como tratar de recordar y marcar una larga secuencia de números en lugar de simplemente escribir el nombre del sitio web en la barra de direcciones. Aquí es donde entra en juego el DNS.

El DNS actúa como una especie de «libro de direcciones» de Internet. Cuando ingresamos una URL, como danielsegovia.com, nuestro navegador envía una consulta al DNS para traducir ese nombre de dominio en la dirección IP correspondiente, en este caso 181.30.140.198.

Gracias al DNS, no tenemos que recordar las direcciones IP de todos los sitios web que visitamos. Simplemente ingresamos el nombre de dominio y el DNS se encarga de encontrar la dirección IP asociada.

En resumen, el DNS es un componente clave en la arquitectura cliente-servidor que nos permite traducir nombres de dominio en direcciones IP. Gracias a esto, podemos acceder fácilmente a los sitios web sin tener que recordar las direcciones IP. Además, 127.0.0.1 y localhost son referencias a la dirección IP local de nuestro propio dispositivo, lo que nos permite acceder a servicios y aplicaciones locales durante el desarrollo y pruebas.

---

## Prepárate para el próximo encuentro

En la próxima clase veremos estos conceptos y también vamos a instalar Docker para que nos sirva para el resto del curso
