# :star:  ENCUENTRO 16 – Métodos de objetos (Jueves 27 de Julio 19hs Argentina)

Pasito a pasito fuimos avanzando en el módulo hasta llegar al final de los contenidos técnicos, te has topado con lógica de programación, gráficos, variables, arrays, funciones, promesas, funciones asíncronas, objetos, ejercicios y más. ¿Te imaginabas llegar hasta acá?
No es sencillo pero tampoco imposible, hay que perseverar y sortear obstáculos pero aquí estás.
En el día de hoy veremos algunos conceptos que complementan objetos en JavaScript pero principalmente utilizaremos la clase para ejercitar en problemáticas de lógica que se no se te pueden presentar en entrevistas laborales, así que veamos algunos concepto y ya vayamos de lleno a los ejercicios.

---

## :computer:  Un mundo por descubrir

Continuando nuestra exploración de los objetos en JavaScript, nos adentraremos en aspectos más avanzados que te permitirán aprovechar al máximo su potencial. Ampliaremos nuestra comprensión de los objetos y exploraremos nuevas técnicas que harán que tus habilidades en JavaScript se vuelvan aún más sólidas.

En primer lugar, exploraremos la iteración de propiedades, que nos permitirá recorrer todas las propiedades de un objeto y realizar acciones específicas en cada una de ellas. Aprenderemos a utilizar bucles «for…in» y los métodos proporcionados por el objeto «Object» para iterar sobre las propiedades de manera eficiente y obtener información valiosa.

Además, profundizaremos en el uso de la palabra clave «this». Entenderemos cómo «this» se refiere al objeto actual en el contexto en el que se utiliza y cómo nos proporciona acceso a las propiedades y métodos del objeto en cuestión. Esto nos permitirá escribir código más flexible y dinámico al interactuar con objetos.

Continuando con nuestra exploración, introduciremos las clases y los constructores. Las clases nos brindan una forma estructurada y reutilizable de definir propiedades y métodos comunes en nuestros objetos. También aprenderemos sobre la herencia de objetos, que nos permite crear jerarquías de clases y compartir funcionalidades entre ellas.

Además, nos adentraremos en el concepto de «prototype» en JavaScript. Aprenderemos cómo utilizar «prototype» para agregar propiedades y métodos a los objetos existentes y cómo se relaciona con la herencia en JavaScript. Esta característica única de JavaScript nos permitirá extender y modificar comportamientos de objetos de manera eficiente.

Finalmente, exploraremos métodos útiles proporcionados por objetos predefinidos en JavaScript, como «Object.assign()», «Object.keys()», «Object.values()» y «Object.entries()». Estos métodos nos brindarán herramientas poderosas para manipular y obtener información específica de los objetos.

Con estos nuevos conocimientos sobre iteración, «this», clases, herencia, «prototype» y métodos útiles, estarás preparado para enfrentar desafíos más complejos y aprovechar todo el potencial que los objetos en JavaScript tienen para ofrecerte. ¡Continuemos nuestra emocionante aventura en el mundo de los objetos en JavaScript!

---

## :computer:  Iteración de propiedades

Iteración de propiedades en JavaScript permite recorrer todas las propiedades de un objeto y realizar acciones específicas en cada una de ellas. Hay varias formas de lograr esto, pero dos enfoques comunes son el uso de bucles «for…in» y los métodos proporcionados por el objeto «Object».

```JavaScript
const person = {
  name: 'John',
  age: 30,
  profession: 'Developer'
};

// Bucle "for...in"
for (const key in person) {
  console.log(key + ': ' + person[key]);
}

// Métodos de Object
const keys = Object.keys(person);
keys.forEach((key) => {
  console.log(key + ': ' + person[key]);
});

const values = Object.values(person);
values.forEach((value) => {
  console.log(value);
});

const entries = Object.entries(person);
entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];
  console.log(key + ': ' + value);
});
```

En este ejemplo, creamos un objeto person utilizando const para su definición. Luego, utilizamos tanto el bucle «for…in» como los métodos de Object para iterar sobre las propiedades del objeto y realizar acciones específicas, como imprimir el nombre y el valor de cada propiedad.

---

## :computer:  this

En JavaScript, la palabra clave this se utiliza para hacer referencia al objeto actual en el contexto en el que se encuentra. El valor de this depende de cómo se invoca una función o cómo se accede a un método.

Cuando this se utiliza dentro de un método de un objeto, se refiere al propio objeto. Esto permite acceder a las propiedades y métodos del objeto utilizando this.propiedad o this.metodo.

Sin embargo, this puede tener diferentes valores en otros contextos. En una función normal, this se refiere al objeto global (window en un navegador). En una función de flecha, this se mantiene vinculado al valor this de su ámbito externo, lo que significa que no tiene su propio valor this.

Es importante comprender cómo se comporta this en diferentes contextos para utilizarlo correctamente y evitar confusiones.

```JavaScript
// Objeto persona
const persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Desarrollador',
  presentarse: function() {
    console.log(`Mi nombre es ${this.nombre}. Tengo ${this.edad} años y soy ${this.profesion}.`);
  }
};

persona.presentarse(); // Salida: Mi nombre es Juan. Tengo 30 años y soy Desarrollador.

// Función regular
function saludar() {
  console.log(`Hola, ${this.nombre}!`);
}

// Compartir el valor de this con una función regular
const persona2 = {
  nombre: 'Ana',
  saludar: function() {
    saludar.call(this);
  }
};

persona2.saludar(); // Salida: Hola, Ana!

// Función de flecha
const despedirse = () => {
  console.log(`¡Adiós, ${this.nombre}!`);
};

// Compartir el valor de this con una función de flecha
const persona3 = {
  nombre: 'Pedro',
  despedirse: function() {
    despedirse.call(this);
  }
};

persona3.despedirse(); // Salida: ¡Adiós, undefined!
```


En este ejemplo, primero tenemos un objeto llamado persona con propiedades como nombre, edad y profesion. Dentro del método presentarse(), utilizamos this para acceder a las propiedades del objeto y mostrar información sobre la persona.

Luego, tenemos una función regular llamada saludar(). En el objeto persona2, utilizamos el método call() para compartir el valor de this entre persona2 y saludar(), lo que nos permite imprimir correctamente el saludo.

Finalmente, en una función de flecha (arrow function), this no tiene su propio valor y mantiene el valor this del ámbito externo en el que fue definida. Por lo tanto, cuando se utiliza this dentro de una función de flecha en el contexto de persona3.despedirse(), el valor de this se toma del ámbito externo, que en este caso es el objeto global (generalmente window en un navegador o global en Node.js).

---

## :computer:  Clases

En JavaScript, una clase es una plantilla que define un tipo de objeto y sus propiedades, así como los métodos asociados a ese tipo de objeto. Proporciona una forma conveniente de crear múltiples objetos con características similares.

Una clase en JavaScript se define utilizando la sintaxis de clase, introducida en ECMAScript 2015 (ES6). Dentro de la clase, se pueden definir propiedades y métodos que serán compartidos por todos los objetos creados a partir de esa clase.

Uno de los elementos clave en una clase es el constructor. Un constructor es un método especial dentro de una clase que se llama automáticamente cuando se crea un objeto a partir de la clase. Se utiliza para inicializar las propiedades del objeto y realizar cualquier otra configuración necesaria.

Aquí tienes un ejemplo que ilustra la definición de una clase, el uso de un constructor y la creación de objetos a partir de la misma:

```JavaScript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear objetos a partir de la clase Persona
const persona1 = new Persona('Juan', 30);
const persona2 = new Persona('Ana', 25);

// Acceder a las propiedades y métodos de los objetos
console.log(persona1.nombre); // Salida: Juan
console.log(persona2.nombre); // Salida: Ana

persona1.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.
persona2.saludar(); // Salida: Hola, mi nombre es Ana y tengo 25 años.
```

En este ejemplo, hemos definido una clase llamada Persona que tiene dos propiedades: nombre y edad. El constructor de la clase se utiliza para inicializar estas propiedades cuando se crea un objeto a partir de la clase.

Luego, creamos dos objetos, persona1 y persona2, utilizando la palabra clave new seguida del nombre de la clase y pasando los argumentos requeridos por el constructor. Cada objeto tendrá su propio conjunto de propiedades con valores específicos.

Finalmente, accedemos a las propiedades y al método saludar() de los objetos persona1 y persona2. Podemos ver cómo los mensajes de saludo varían dependiendo de los valores de las propiedades en cada objeto.

La creación de objetos a partir de una clase nos permite tener múltiples instancias con propiedades y comportamientos únicos. Cada objeto creado a partir de la misma clase es una entidad independiente con sus propios valores de propiedad, pero comparten los métodos definidos en la clase.

---

## :computer:  Herencia

La herencia es un concepto fundamental en la programación orientada a objetos que permite crear jerarquías de clases, donde las clases hijas heredan características y comportamientos de una clase padre. En JavaScript, la herencia se logra utilizando el mecanismo de prototipos.

En JavaScript, los objetos tienen un enlace interno llamado prototipo, que es una referencia a otro objeto. Cuando se intenta acceder a una propiedad o método en un objeto, si no se encuentra en el objeto en sí, se busca en su prototipo. Esto permite la herencia de propiedades y métodos entre objetos.

La herencia en JavaScript se establece mediante el uso de la función Object.create() o utilizando la sintaxis de class introducida en ECMAScript 2015 (ES6). Al crear una clase hija, podemos asignar como prototipo a la clase padre, lo que permite que la clase hija herede todas las propiedades y métodos de la clase padre.

Aquí tienes un ejemplo que ilustra cómo se puede lograr la herencia en JavaScript:

```JavaScript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}.`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }

  ladrar() {
    console.log('¡Guau guau!');
  }
}

const miPerro = new Perro('Fido', 'Labrador');
miPerro.saludar(); // Salida: Hola, soy Fido.
miPerro.ladrar(); // Salida: ¡Guau guau!
console.log(miPerro.raza); // Salida: Labrador
```


En este ejemplo, hemos definido una clase Animal que tiene una propiedad nombre y un método saludar(). Luego, creamos una clase Perro que extiende la clase Animal utilizando la sintaxis de class. La clase Perro también tiene su propio constructor y un método adicional ladrar().

Al utilizar la palabra clave extends, establecemos que la clase Perro es una clase hija de Animal y, por lo tanto, hereda todas las propiedades y métodos de la clase padre. Utilizamos el método super() en el constructor de la clase hija para llamar al constructor de la clase padre y asignar el valor de nombre.

Luego, creamos un objeto miPerro a partir de la clase Perro y podemos acceder a las propiedades y métodos tanto de la clase Perro como de la clase Animal. En este caso, llamamos al método saludar() y ladrar() específicos de la clase Perro, así como también accedemos a la propiedad raza que es exclusiva de la clase Perro.

La herencia nos permite reutilizar y extender el código de una clase existente, lo que resulta en un código más limpio y estructurado. Permite la creación de relaciones jerárquicas entre clases, lo que es especialmente útil cuando queremos modelar objetos del mundo real que tienen características comunes.

---

## :computer:  Prototype

En JavaScript, cada objeto tiene una propiedad interna llamada [[Prototype]] (a veces también conocida como __proto__). El [[Prototype]] es una referencia al objeto prototipo del cual el objeto actual ha sido creado.

El mecanismo de prototype en JavaScript permite la herencia de propiedades y métodos entre objetos. Cada objeto tiene acceso a las propiedades y métodos de su objeto prototipo, lo que permite extender y compartir funcionalidades entre objetos de manera eficiente.

Aquí tienes un ejemplo para ilustrar el uso de prototype en JavaScript:

```JavaScript
function Animal(nombre) {
  this.nombre = nombre;
}

Animal.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}.`);
};

function Perro(nombre, raza) {
  Animal.call(this, nombre);
  this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function() {
  console.log('¡Guau guau!');
};

const miPerro = new Perro('Fido', 'Labrador');
miPerro.saludar(); // Salida: Hola, soy Fido.
miPerro.ladrar(); // Salida: ¡Guau guau!
```


En este ejemplo, tenemos dos funciones constructoras: Animal y Perro. La función constructora Animal define una propiedad nombre y un método saludar. La función constructora Perro hereda las propiedades y métodos de Animal utilizando el mecanismo de prototype.

Usamos ```Animal.call(this, nombre)``` dentro de Perro para asegurarnos de que la propiedad nombre sea establecida correctamente en el objeto Perro.

Luego, establecemos el prototipo de Perro utilizando Object.create(Animal.prototype). Esto crea un nuevo objeto cuyo prototipo es el objeto Animal.prototype. Así, Perro hereda las propiedades y métodos de Animal a través de su prototipo.

Finalmente, asignamos el constructor correcto a Perro.prototype para asegurarnos de que Perro.prototype.constructor se refiera a Perro en lugar de Animal.

De esta manera, miPerro es un objeto creado a partir de la función constructora Perro, pero tiene acceso a las propiedades y métodos tanto de Perro como de Animal a través del mecanismo de prototype.

El uso de prototype es fundamental para la implementación de herencia en JavaScript y permite una gestión eficiente de la memoria al compartir funcionalidades comunes entre objetos relacionados.

---
