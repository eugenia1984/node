# :star: 15 – Introducción a objetos - Lunes 24 de Julio 19hs Argentina

## :computer: Programación Orientada a Objetos: Conceptos Fundamentales y Ejemplos en JavaScript

La programación orientada a objetos (POO) es un paradigma de programación ampliamente utilizado en el desarrollo de software. Proporciona una forma organizada y estructurada de diseñar y desarrollar aplicaciones al centrarse en la interacción entre objetos. En este artículo, exploraremos la historia de la POO, los conceptos fundamentales y proporcionaremos ejemplos prácticos en JavaScript.

---

##  :computer:  Historia de la programación orientada a objetos

La programación orientada a objetos tiene sus raíces en lenguajes como Simula y Smalltalk, que se desarrollaron en la década de 1960. Estos lenguajes sentaron las bases para los conceptos fundamentales de la POO, como las clases y los objetos.

Sin embargo, fue el lenguaje de programación Java, lanzado en 1995, el que popularizó en gran medida la programación orientada a objetos. Java se convirtió en un lenguaje ampliamente utilizado en el desarrollo de software empresarial y su adopción masiva ayudó a establecer la importancia de la POO en la industria que hasta el día de hoy sigue en vigencia.

---

## :computer:  Conceptos fundamentales de la programación orientada a objetos

La programación orientada a objetos (POO) es un enfoque de programación que se basa en la idea de organizar y estructurar el código en torno a objetos. Un objeto es una entidad que representa una cosa o concepto del mundo real y tiene propiedades (atributos) y comportamientos (métodos) asociados.

Una clase es una plantilla o molde que define las características y comportamientos comunes que tienen los objetos de un mismo tipo. Imagina que tienes una clase llamada Vehiculo, que representa de manera general a todos los vehículos. La clase Vehiculo define las propiedades y comportamientos básicos que se aplican a todos los vehículos, como la marca, el modelo y la velocidad.

A partir de una clase, se pueden crear objetos específicos. Cada objeto es una instancia de una clase particular y tiene sus propias propiedades y comportamientos. Por ejemplo, podríamos crear un objeto de la clase Vehiculo que represente un auto en específico. Podríamos llamarlo miAuto y asignarle valores concretos a sus atributos, como la marca «Toyota», el modelo «Corolla» y la velocidad inicial de 0.

Sin embargo, dentro de la programación orientada a objetos, también es posible heredar propiedades y comportamientos de una clase base a una clase derivada. Imagina que creamos una clase llamada Ferrari, que hereda de la clase Vehiculo. La clase Ferrari puede agregar comportamientos específicos para los autos Ferrari, como una función de aceleración más potente. Esto significa que una instancia de la clase Ferrari puede avanzar más rápido que otros autos.

---

### Aquí tienes los 4 pilares que definen la programación orientada a objetos.

- **Abstracción**: La abstracción es el proceso de enfocarse en los aspectos esenciales de un objeto y ocultar los detalles de implementación. Permite representar y manipular conceptos complejos de manera más clara y sencilla mediante el uso de clases abstractas e interfaces.

- **Polimorfismo**: El polimorfismo es la capacidad de tratar objetos de diferentes clases de manera genérica y flexible. Permite utilizar un mismo método o función con el mismo nombre en diferentes objetos, obteniendo resultados específicos para cada uno según su implementación particular. Facilita el diseño flexible y extensible de aplicaciones.

- **Herencia**: La herencia es un mecanismo que permite establecer relaciones jerárquicas entre clases. Permite que una clase (subclase) herede propiedades y comportamientos de otra clase (clase base), evitando la duplicación de código y facilitando la reutilización. Las subclases pueden agregar sus propias características y modificar o extender el comportamiento heredado.

- **Encapsulamiento**: El encapsulamiento es el principio de ocultar los detalles de implementación de una clase y exponer solo una interfaz pública. Permite proteger los datos y comportamientos internos de una clase, evitando modificaciones directas y asegurando el acceso controlado a través de métodos públicos. El encapsulamiento mejora la modularidad, la seguridad y el mantenimiento del código.
  
Estos conceptos fundamentales trabajan en conjunto para crear un diseño de software sólido y orientado a objetos. La abstracción y el encapsulamiento ayudan a crear interfaces claras, mientras que la herencia y el polimorfismo permiten la reutilización y la flexibilidad en la estructura y el comportamiento de las clases.

Observa como los amigos de [BitBoss](https://youtu.be/SI7O81GMG2A) nos ayudan a comprender estos conceptos sin tantas palabras raras :-)

---
---

## :computer:  Objetos en JavaScript

En JavaScript, los objetos son estructuras de datos que permiten almacenar y organizar múltiples valores y propiedades relacionadas. Los objetos son una parte fundamental de JavaScript y se utilizan ampliamente en el lenguaje.

Un objeto en JavaScript está compuesto por un conjunto de propiedades, donde cada propiedad consiste en una clave (también conocida como nombre) y un valor asociado. Las propiedades pueden contener cualquier tipo de valor: primitivo, objeto, función, etc. Estas propiedades pueden ser accedidas, modificadas o eliminadas dentro del objeto.

Este ejemplo es equivalente al anterior, pero es más corto, rápido y cómodo, por lo que se aconseja declararlos siempre así:

```JavaScript
const objeto = {};    // Objeto vacío
//También puedes llegar a ver este tipo pero ya casi no utiliza
const objeto2 = new Object();
```
---

## Propiedades

Para añadir un propiedad al objeto lo podemos hacer desde su creación o bien a un objeto ya existente

```JavaScript
const persona = {
   "nombre": "Daniel",
   "apellido": "Segovia"
}; 
```

```JavaScript
const otra_persona = {}
otra_persona.nombre = "Daniel"
otra_persona.apellido = "Segovia"
```

Lo interesante de está estructura de datos es que puedes almacenar en cada propiedad el tipo de datos que desees, no es obligatorio definir siempre el mismo tipo de dato, puedes almacenar en una propiedad un Number y en otra un String sin problemas, inclusive podrás almacenar arrays u otros objetos.

```JavaScript
const persona = {
    "nombre": "Daniel",
    "apellido": "Segovia",
    "Edad": 25, //claramente no tengo 25 :-)
    "direccion": { //defino un objeto
       "calle": "Av Corrientes",
       "numero": 9824,
       "piso": 3,
       "departamento": false,
       "provincia": "Buenos Aires",
       "pais": "Argentina"
    },
    "documentos": [ //defino un array donde cada elemento es un objeto
        {"tipo": "DNI", "numero": "1292939592", "activo": true},
        {"tipo": "Licencia de conducir", "activo": false, "vencimiento": "12/25/2002"},
    ]
};
```

Para acceder a las propiedades solamente tienes que poner el nombre del objeto punto nombre de propiedad

```JavaScript
//tomar el ejemplo del objeto anterior

console.log(persona.nombre) //imprime Daniel
console.log(persona.direccion.calle) //imprime Av Corrientes
console.log(persona.documentos[0].tipo) //imprime DNI
```

---

## Métodos

Para añadir métodos solamente tienes que definir tu key dos puntos y escribir una función, ya sea con function o una arrow function

```JavaScript
const persona = {
    "nombre": "Daniel",
    "apellido": "Segovia",
    helloWorld: () => {
        return `Hello World`
    }
}; 
console.log(persona.helloWorld())
```

Para acceder a las propiedades del mismo objeto dentro de las funciones tenemos la palabra reserva this, pero cambiará el contexto si decides escribir una función con function o bien decides escribirla con una arrow function, prueba el siguiente ejemplo y velo por tu mismo

```Javacript
const persona = {
    "nombre": "Daniel",
    "apellido": "Segovia",
    fullName: function () {
        return `${this.nombre} ${this.apellido}`
    }
}; 
console.log(persona.fullName())

const persona2 = {
    "nombre": "Daniel",
    "apellido": "Segovia",
    fullName: () => {
        return `${this.nombre} ${this.apellido}`
    }
}; 
console.log(persona2.fullName())
```

---

## Convertí tu objeto a texto y de texto a objeto

JSON.stringify() es una función en JavaScript que convierte un objeto JavaScript en una cadena de texto JSON. Toma un objeto como argumento y devuelve una representación JSON del objeto. La cadena JSON resultante se puede utilizar para enviar datos a un servidor o para almacenar datos en un archivo.

La sintaxis básica de JSON.stringify() es la siguiente:

```JSON.stringify(objeto, propiedades, espaciado)```

¡Claro! Aquí tienes una explicación teórica seguida de algunos ejemplos prácticos de JSON.stringify() en JavaScript.

**Teoría**: JSON.stringify() es una función en JavaScript que convierte un objeto JavaScript en una cadena de texto JSON. Toma un objeto como argumento y devuelve una representación JSON del objeto. La cadena JSON resultante se puede utilizar para enviar datos a un servidor o para almacenar datos en un archivo.

La sintaxis básica de ```JSON.stringify()``` es la siguiente:

```javascriptCopy codeJSON.stringify(objeto, propiedades, espaciado)```

- objeto: El objeto que se va a convertir a JSON.

- propiedades (opcional): Un array o una función que especifica qué propiedades del objeto deben incluirse en la cadena JSON. Si se omite, se incluirán todas las propiedades enumerables.

- espaciado (opcional): Un valor numérico o una cadena que se utiliza para agregar sangrías y espacios en blanco a la cadena JSON con el fin de que sea más legible. Si se especifica un número, indica el número de espacios en blanco para la sangría. Si se especifica una cadena, se utilizará esa cadena como prefijo para cada nivel de anidamiento.
  
Aquí tienes algunos ejemplos para ilustrar cómo utilizar JSON.stringify() en la práctica:

```JavaScript
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

const personaJSON = JSON.stringify(persona);
console.log(personaJSON);
// Salida: {"nombre":"Juan","edad":30,"ciudad":"Madrid"}

const persona2 = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

const persona2JSON = JSON.stringify(persona2, ['nombre', 'ciudad']);
console.log(persona2JSON);
// Salida: {"nombre":"Juan","ciudad":"Madrid"}



const persona3 = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

const persona3JSON = JSON.stringify(persona3, null, 2);
console.log(persona3JSON);
/* Salida:
{
  "nombre": "Juan",
  "edad": 30,
  "ciudad": "Madrid"
}
*/
```


## De texto a objeto

```JSON.parse()``` es una función en JavaScript que convierte una cadena de texto JSON en un objeto JavaScript. Toma una cadena de texto JSON como argumento y devuelve un objeto JavaScript equivalente.

### La sintaxis básica de JSON.parse() es la siguiente:

```JSON.parse(cadena)```

- cadena: La cadena de texto JSON que se va a convertir en un objeto JavaScript.


```JavaScript
const personaJSON = '{"nombre":"Juan","edad":30,"ciudad":"Madrid"}';

const persona = JSON.parse(personaJSON);
console.log(persona);
// Salida: { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }
console.log(persona.nombre);
// Salida: Juan
```


En este ejemplo, la variable personaJSON contiene una cadena de texto JSON. Luego, utilizamos JSON.parse() para convertir esa cadena en un objeto JavaScript llamado persona. Finalmente, imprimimos el objeto persona en la consola y obtenemos los valores del objeto.

Recuerda que es importante asegurarte de que la cadena de texto que estás pasando a JSON.parse() sea una representación válida de JSON. Si la cadena no es válida, se generará una excepción de análisis (SyntaxError).

Y para cerrar aquí tienes un ejemplo que combina tanto ```JSON.stringify()``` como``` JSON.parse()```:

```JavaScript
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

// Utilizando JSON.stringify() para convertir el objeto a una cadena JSON
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);
// Salida: {"nombre":"Juan","edad":30,"ciudad":"Madrid"}

// Utilizando JSON.parse() para convertir la cadena JSON de vuelta a un objeto JavaScript
const personaObjeto = JSON.parse(personaJSON);
console.log(personaObjeto);
// Salida: { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }
```

---
---

## :computer:  Prepárate para la próxima clase

Hasta aquí hemos llegado con la introducción a objetos, en la próxima clase veremos más sobre este tema y ejercitaremos

---
