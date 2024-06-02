# Clase 26: Patrones de Arquitectura - MVC vs RESTArchivo

---

# Patrones de Arquitectura - MVC vs RESTArchivo 

## ¿Qué es un Patrón de Arquitectura?

Un patrón de arquitectura es una solución probada y documentadaa un problema recurrente en el desarrollo de software.
Estos patrones son utilizados para resolver problemas comunes de diseño y permiten a los desarrolladores construir software escalable y robusto.

Los patrones de arquitectura son guías o plantillas que ofrecen soluciones a problemas específicos,y han evolucionado a lo largo del tiempo a medida que la industria del software ha enfrentado desafíos recurrentes.

Estos patrones pueden abordar cuestiones relacionadas con la organización del código, la distribución de responsabilidades entre componentes, la escalabilidad, la seguridad, la eficiencia, entre otros.

## ¿Qué es la escalabilidad y robustez?

● Cuando un software es escalable y robusto, significa que puede crecer con las necesidades del negocio y que garantiza su disponibilidad y funcionamiento correcto, incluso en situaciones difíciles o inesperadas.

● Es capaz de manejar cargas de trabajo crecientes y mantenerse operativo bajo diversas condiciones, lo que asegura un rendimiento óptimo y una experiencia de usuario satisfactoria en todo momento.

● La escalabilidad se refiere a la capacidad de un software para crecer y adaptarse a una mayor demanda, mientras que la robustez se refiere a su capacidad para mantenerse en funcionamiento de manera confiable y resistir situaciones adversas.

![image](https://github.com/eugenia1984/node/assets/72580574/4110c9e3-3e59-4766-b8c1-26b21d5aabd9)

## Tipos de Patrones

● **Capas**: Dividen el software en capas, cada una con una responsabilidad específica. Ejemplos de patrones de capas son: MVC (Modelo-Vista-Controlador) y MVP (Modelo-Vista-Presentador).

● **Basados en eventos**: Se centran en el intercambio de mensajes o eventos entre componentes. Ejemplos de patrones de eventos son: Publicar-Suscribir, Observer y Reactor.

● **Basados en servicios**: Se enfocan en la creación de servicios reutilizables. Por ejemplo: SOA (Arquitectura Orientada a Servicios) y REST (Representational State Transfer).

● **Basados en microservicios**: Se enfocan en la creación de una arquitectura compuesta por servicios independientes que trabajan juntos para realizar una tarea. Algunos ejemplos son: Microservicios y Arquitectura Hexagonal.

## ¿Qué es MVC (Model - View - Controller)?

Es una arquitectura de software que propone la división de responsabilidades de una aplicación en 3 capas diferentes.

![image](https://github.com/eugenia1984/node/assets/72580574/988cf140-5443-477f-b250-9b9193e22390)

### ¿Qué plantea MVC?

● Este patrón de arquitectura lo que plantea es un scaffolding (andamiaje) o una estructura de carpetas, a través de la cual el programador va a moldear la aplicación.

● Dentro de cada carpeta se alojará el código de la aplicación.

● Este enfoque arquitectónico propone una estructura de carpetas para organizar el código de la aplicación de manera coherente y mantener una separación clara de responsabilidades entre las diferentes partes del sistema.

## Principios

MVC es útil en sistemas donde se requiere el uso de interfaces de usuario, aunque en la práctica el mismo patrón de arquitectura se puede utilizar para distintos tipos de aplicaciones.

Ayuda a crear softwares más robustos, donde se potencie la facilidad de mantenimiento, rdeeul tcilóizdaigcoió ynla separación de conceptos


### Estructura MVC

Una estructura MVC básica está compuesta
aplo mr enos 3 carpetas y un entry point.

En la imagen podemos observar el archivo
app.js cómo entry point y las carpetas data
(modelo), views (vista), controller
(controlador).

Además se pueden tener otras carpetas para las rutas, estilos y middlewares que veremos más adelante.

![image](https://github.com/eugenia1984/node/assets/72580574/796c3d08-2c31-404e-8777-bfb90b4a135d)


![image](https://github.com/eugenia1984/node/assets/72580574/5e068ea7-7578-4498-b5aa-51511c4926d3)

![image](https://github.com/eugenia1984/node/assets/72580574/b17e329d-5e9b-4198-ab49-046a5b8522d7)

![image](https://github.com/eugenia1984/node/assets/72580574/63af9006-696b-46e7-9bab-613589c388da)


## Recorrido MVC

1. El cliente realiza una solicitud a nuestro servidor.

2. El router invoca un controlador.

3. El controlador solicita informaciónal modeloy este a la base de datos, devuelve al controlador y retorna los datos a la vista.

4. La vista crea un archivo estáticoy se envía al cliente. El cliente recibe los archivos y renderiza la aplicación.

![image](https://github.com/eugenia1984/node/assets/72580574/f9d1fc23-3e01-4b78-b9af-76ab72c713d6)


Otro ejemplo: 

![image](https://github.com/eugenia1984/node/assets/72580574/4e69cb0c-a874-458c-bbe0-961f55d958cf)

##  ¿Qué es una API Rest?

Las APIinteractúancon sistemas o PC 'sde manera que el sistema comprenda la solicitud y la cumpla.

RESTno es un protocoloni un estándar, sino unconjunto de límitesde arquitectura. Es un tipo específico de API que usa el protocolo HTTP para la comunicación.

Es decir la información se entrega por medio de HTTPen uno de estos formatos: JSON(JavaScript Object Notation), HTML, XLT, Python, PHP o texto sin formato.

### Analogía del restaurante

● Imagina que estás en un restaurante y deseas pedir comida. Para hacerlo, no necesitas ir a la cocina y preparar la comida tú mismo; en su lugar, le das tu pedido al mesero y él se encarga de llevarlo a la cocina, comunicarse con el chef y traerte la comida que has solicitado.

● En este caso, el mesero actúa como una interfaz entre tú (el cliente) y la cocina (donde se prepara la comida).

● De manera similar, en el mundo de la programación, una API (Interfaz de Programación de Aplicaciones) es como el mesero en el restaurante.

● Es una interfaz que permite que diferentes aplicaciones se comuniquen entre sí y compartan datos o funcionalidades, de manera que una aplicación puede solicitar información o realizar acciones en otra aplicación sin necesidad de conocer los detalles internos de cómo se implementa esa funcionalidad.

● Una API REST es un tipo específico de API que sigue un conjunto deprincipios y restricciones para facilitar la comunicación (o transferencia) entre sistemas distribuidos a través del protocolo HTTP.

● El término "REST" significa Representational State Transfer.

● La API REST, en particular, se puede comparar con el menú en ese restaurante: proporciona una estructura estandarizada y predefinida que permite realizar acciones específicas (como obtener información, agregar datos, actualizar o eliminar recursos) sobre los elementos del "menú" (o recursos) de manera consistente y predecible.

## PrincipiosREST

● REST se enfoca en exponer recursos (hacer accesibles y disponibles ciertos datos o funcionalidades) a través de URLs y utilizar los verbos HTTP (GET, POST, PUT, DELETE) para manipularlos.

● Se basa en la utilización de los verbos HTTP para realizar operaciones sobre los recursos, y en la utilización de los formatos JSON o XML para representar la información.

● Además propone un conjunto de restricciones arquitectónicas, como la interfaz uniforme, el estado sin sesión, la cacheabilidad, la visibilidad y la escalabilidad, que permiten construir sistemas web flexibles y

## ¿Qué necesito para crear una API Rest?

- Definir los recursos: Identificar los recursos que se van a exponer en la API RESTful, como entidades de negocio o funciones específicas.

- Definir la estructura de la URL: Utilizar URLs descriptivas para cada recurso, evitando utilizar verbos o adjetivos en la URL y separando los elementos con barras diagonales.

- Utilizar los verbos HTTP: GET, POST, PUT, DELETE, etc. En base a la intención para manipular los recursos. Cómo usar GET para obtener un recurso y POST para crear uno nuevo.

- Utilizar los códigos de estado HTTP: Utilizar los códigos de estado HTTP para comunicar el resultado de la operación, como 200
para una solicitud exitosa o 404 para un recurso no encontrado

- Utilizar el formato de datos correcto: Utilizar el formato de datos adecuado para cada operación, como XML o JSON, y especificar el tipo de contenido en la cabecera HTTP.

- Utilizar la documentación: Documentar la API RESTful para que los consumidores puedan entender cómo utilizarla y qué recursos están disponibles.

- Utilizar la autenticación y la autorización: Proteger la API RESTful mediante la autenticación y la autorización de los usuarios que acceden a los recursos.

## MVC vs REST

![image](https://github.com/eugenia1984/node/assets/72580574/b2061267-53a8-476b-90e7-9e6d92ad435c)

Si bien ambos patrones tienen sus principios y diferencias, es posible utilizarlos juntos.

---


