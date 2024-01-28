# :star: Variables y tipos de datos (Lunes 19 de junio 19hs de Argentina)

---

LLegamos a la semana 3 ¿te lo imaginabas?

Ya no demos más vueltas, es hora de que empecemos a tirar código :-), vamos a empezar a tirar líneas de código para obtener fines concretos

Comencemos con las variables, una variable es un espacio de almacenamiento en el que se puede guardar un valor que se utilizará más adelante en el código. Si lo comparamos con una caja, podríamos decir que una variable es como una caja donde podemos almacenar diferentes objetos.

Las variables tienen un nombre que se utiliza para hacer referencia a ellas en el código. Este nombre es lo que se conoce como identificador de la variable y se utiliza para acceder al valor que contiene. Al igual que en la vida real podemos tener un montón de cajas para almacenar diferentes cosas y dentro de un programa podemos tener múltiples variables con diferentes nombres y valores.

Además, al igual que podemos cambiar el contenido de una caja (con algunas excepciones que veremos más adelante), también podemos cambiar el valor de una variable en el código. Podemos asignarle un nuevo valor en cualquier momento y el valor anterior se sobrescribirá.

Las variables son muy importantes en la programación, ya que permiten a los programadores almacenar y manipular datos de manera eficiente. Sin ellas, sería difícil escribir programas complejos que requieren el uso de datos.

¿Comenzamos a escribir código?

## :computer: Node.Js

Podemos escribir muchas líneas de código en JavaScript para realizar una tarea pero de alguna forma esas líneas deben ser ejecutadas para cumplir dicha función, entonces ¿cómo esas líneas serán ejecutadas para la realización de la tarea programada?

Para ejecutar JavaScript podemos hacerlo de 2 formas, a través de un navegador que ya trae incorporado el motor para ejecutar JavaScript o instalar Node.Js en nuestra computadora para poder ejecutar código JavaScript a través de la consola.
En nuestro caso debemos instalar Node.JS ya que estamos haciendo una carrera de backend y así es como se ejecutan las aplicaciones de backend en los servidores.

Ingresa a [https://nodejs.org/](https://nodejs.org/) e instala la versión LTS (Long Term Support) para tu sistema operativo, aquí te dejo unos tutoriales de instalaciones para los sistemas operativos más comunes

- [Windows](https://www.youtube.com/watch?v=czFj5zoI5uc)

- [Ubuntu](https://www.youtube.com/watch?v=HiZfrViARRc)

- [Mac OS](https://www.youtube.com/watch?v=6VNkLyQeu3Y)

Ejecuta ``node -v`` para verificar la correcta instalación


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/821c48cf-567e-4ba8-a4d1-0ab2b32f437f)

Por el momento, para ejecutar JavaScript durante el módulo 1 nos alcanza con está instalación, más adelante veremos más detalles sobre Node.Js

---

## :computer: Variables

Como ya hemos visto una variable es un lugar donde podemos almacenar un valor dentro de nuestro programa, es importante mencionar que es un almacenamiento volátil, es decir, que al apagar el programa o reiniciarlo el valor se pierde.

Las variables en JavaScript deben definirse de la siguiente manera:

Palabra reservada ```var```, ```let``` o ```const``` + nombre de variable.

Con esto es sufuciente para definir una variable pero en la mayoría de los casos al crear la variable se le asigna un valor inmediatamente, por lo que la «definición» quedaría así:

Palabra reservada var, let o const + nombre de variable + = (signo de igual) + valor que quiero almacenar
Llevado a JavaScript finalmente queda así:

```JavaScript
var mensaje = "hola"
let edad = 18
const color = "rojo" 
```

Básicamente estoy asignando a cada una de las variable un valor, por ejemplo a mensaje le asigno hola

Entonces en mi aplicación puedo necesitar almacenar un valor y luego utilizarlo mucho más adelante

```JavaScript
let edad = 18
// hago algo
// hago otra cosa
// pregunto algo
// cambio de dirección en el flujo
// etc
// etc
console.log(edad) /* utilizo la variable edad  para mostrarla */
```

Ahora, ¿Por qué ```var```, ```let``` o ```const```? o mejor dicho ¿cuándo ```var```, ```let``` o ```const```? entremos un poco más en detalle

Cada una tiene un scope (alcance) donde vivirá, es decir, donde la estará disponible para su uso

- **var**: antes de la introducción de let y const, var era la única forma de declarar una variable en JavaScript. Las variables declaradas con var tienen un alcance de función o global y pueden ser reasignadas en cualquier momento. El problema con var es que su alcance puede ser impredecible en algunas situaciones, lo que puede provocar errores difíciles de detectar.

- **let**: let es una forma más moderna de declarar variables en JavaScript y se introdujo en ECMAScript 6. Las variables declaradas con let tienen un alcance de bloque y se pueden reasignar. El alcance de bloque significa que la variable solo es accesible dentro del bloque en el que se declaró, como un if o un bucle for. Esto puede ayudar a evitar errores y hacer que el código sea más fácil de leer y mantener.

- **const**: const es otra forma de declarar variables en JavaScript y también se introdujo en ECMAScript 6. A diferencia de var y let, las variables declaradas con const no se pueden reasignar después de la inicialización. El alcance de const también es de bloque, lo que significa que solo se puede acceder a la variable dentro del bloque en el que se declaró. Las variables const son útiles cuando se desea asegurarse de que un valor no cambie durante la ejecución del programa.
- 
Aquí puedes encontrar más detalles relacionados con el scope: [https://yeisondaza.com/entendiendo-scopes-de-variables-en-javascript](https://yeisondaza.com/entendiendo-scopes-de-variables-en-javascript)

---

## :computer: Tipos de datos

Los tipos de datos son la base de cualquier lenguaje de programación y JavaScript no es la excepción. En JavaScript, los tipos de datos se dividen en dos categorías: tipos de datos primitivos y tipos de datos no primitivos.

Los **tipos de datos primitivos** son aquellos que **representan valores simples y básicos, como números, cadenas de texto y valores booleanos**. Los tipos de datos no primitivos, por otro lado, son aquellos que representan valores complejos y están compuestos por varios valores primitivos, como objetos y matrices.

Tipos de datos primitivos:

- **number**: representa números, tanto enteros como decimales.

- **string**: representa cadenas de texto.

- **boolean**: representa valores booleanos true (verdadero) o false (falso).

- **null**: representa la ausencia de un valor.

- **undefined**: representa el valor indefinido.

- **Symbol**: representa un valor único e inmutable que se puede utilizar como identificador de propiedad en objetos.

## Tipos de datos no primitivos:

- **object**: representa una estructura de datos compleja compuesta por pares clave-valor.

- **array**: representa una lista de elementos ordenados.

- **function**: representa un bloque de código reutilizable que realiza una tarea específica.

- **date**: representa una fecha y hora específicas.

- **RegExp**: representa una expresión regular, que se utiliza para buscar patrones en cadenas de texto.
- 
Aquí te he hecho un resumen de todos los que hay, solamente nos centraremos en los primitivos, a medida que vayamos avanzando podremos introducirnos en los tipo de datos no primitivos.

```JavaScript
//observa que almaceno el hola mundo entre comillas, eso convierte a mensaje en una variable tipo string
let mensaje = "hola mundo"
console.log(mensaje)
console.log(typeof(mensaje))

let edad = 21
console.log(edad)
console.log(typeof(edad))

let verdadero = true
console.log(verdadero)
console.log(typeof(verdadero))

let nada;
console.log(typeof(nada))

let sym = Symbol('algo')
console.log(typeof(sym))
```


@La cocina del código nos deja una excelente explicación de los datos primitivos, no te pierdas su video. [:tv: ver el video](https://www.youtube.com/watch?v=cC65D2q5f8I)

**tipado débil** -> podemos realizar operaciones entre valores de distintos tipos. 

**coersión de tipos** -> conversión implícita que realiza el motor de JavaScript para poder concatenar una operación.

Por ejemplo: 

```JavaSCript
let sumar = "2" + 2; // 22 porque como el primero es string INFIERE y concatena
let restar = 2 - "1"; // 1 en este caso al ser un signo - convierte el string a number
```

**tipo de una variable** -> se determina cuando se ejecuta la línea de código que contiene a esa variable. Depende de la operación que se este realizando con ella.

**tipos de datos primitivos** -> **no poseen ni métodos ni propiedades** y son **inmutables**(solo se cambia el valor asignandole uno nuevo). Operador **typeof** para saber el tipo de dato. Los datos primitivos son:

- **string**: cadenas de texto, entre comillas simples/dobles ò backtick(comilla invertida/ commilla francesa). UTF-16 es la codificación que utiliza. **.lenght** para saber su longitud. ```''` string vacío, sin longitud, para inicializarla.`**.toString()** para pasarla a string (salvo que sea **null** o **undefined**)

- **number**: tanto para enteros, decimales, negativos, positivos, todos son NUMBER. Al representar DECIMALES JavaScript no es muy preciso, porque usan el formato IEEE 754, cada número ocupa 64bits en la memoria (8 bytes). Podemos usar **.toFixed()** para truncar al número a la cantidad de digitos después de la coma que queremos utilizar, pero devuelve string, si adelante le agregamos **+** para castearlo a number.

```JavaScript
Number.MIN_SAFE_INTEGER
Number.MAX_SAFE_INTEGGER
Numer.MAX_VALUE
Number.MIN_VALUE
```

- **boolean**: ```treu``` / ```false```. Se obtiene al evaluar una condición, dentro de un ```if``` o en un ```while```.

**falsy** -> ```''```, ```0```, ```null```, ```undefined```, ```NaN```.

**tryuthy** -> ```{}``` o cualquier onjeto, ```-1```, ```[]```

```!!``` la doble negación.

**string**, **number** y **boolean** tienen su equivalente en el mundo de los **objetos**, por eso tengo los métodos como **.length**, **.toUpperase()**, etc. Cada vez que llamo a estos métodos JavaSCriot crea temporalmente un **Object wrapper** (objeto que envuelve a un valor primitivo cuando queremos acceder a una propiedad o llamar a un método dle mismo).

- **null**: es el tipo de dato para representar la **ausencia de valor^^. Sirve para decir que una variable no contiene nada, está vacía o que todavía no conocemos su valor. Es un valor **falsy**, es **primitivo**

- **undefined**: tipo de dato desconocido.

```JavaSCript
type of null // undefined
```

```JavaScript
function saludar(nombre) {
  conosle.log(`Hola ${nombre}`)
}

typeof saludar // function
```
-> no nos dice que es object, pero es object

- **symbol**, aparece en el 2015, para valores únicos, irrepetibles.
 
```JavaScript
const s1 = Symbol('description')
const s2 = Symbol('description')

s1 === s2 // false
```

**registro global de simbolos** -> es compartido entre nuestra página y los serviceWorkers o iframes que esta puede llegar a incluir.

**tipo  de datos no primitivos** -> **object**: arrays, funciones, fechas, expresiones generales(regex)

### ¿Para qué se usan los symbol? 

- Son buenos reemplazos para valores constantes que podrían llegar a ser String.

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/3c7f21f2-a149-408b-b0ec-918d2054174d)

Usamos symbol en vez de string


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/11817a44-95ac-405c-b3e5-1a7b1dd25c5d)

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/5cb31ac2-808e-4df2-ba4d-371e73d73c02)

Queda como un enum de TS.

[:computer: 33 JS concepts](https://github.com/leonardomso/33-js-concepts)

- Evitar colisiones en los nombres de las propiedades de los objetos.

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/107989e1-b197-4c07-ad27-526a849066f7)

- Agregar propiedades 'ocultas' dentro de los objetos.

Solo se accede con **Object.getOwnPropertySymbols()**

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/97448175-0d64-4dde-a94d-616f6edeb5fe)

**simbolos destacados(weel-known symbols)**: son propiedades de la función Smbol. Permiten **identificar el comportamiento** de algunas funcionalidades del lenguaje.

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/726bd8bd-b3d6-4146-8976-b1cf2f153d5e)

Recorriendo un array(en el sentido inverso):

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/54473b11-31f6-45c8-8e5b-e54d5aa35d64)

## Nuevo tipo de dato primitivo

**bigint**: permitirá en próximos versiones del lenguaje utilizar números enteros **sin límites**.

Tenemos librerías como **bignumber** para relaizar calculos entre numeros grandes.

---
