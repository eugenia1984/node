# :book: Notas de las clases

---

## :computer: ¿Qué vamos a crear?

- Vamos a hacer una aplicación desde cero, con...
 
... un usuario se va a poder loguear

... vamos a usar JSON web token

... middleware

... almacenar datos en bases de datos(relacionales y no relacionales. También base de datos en **memoria** como **Redis**)

... saber que es un ORM (capa de abstraccion entre base de datos y el codigo)


[ver video en youtube](https://www.youtube.com/watch?v=eMV0tiNO3A4)

---

## :book: Algortimos

- Además de **Ver que funcione**, hacerlo **lo mejor posible**, se ve en el **live coding**, ven ¿cómo lo resulvo? ¿qué tan óptimo es mi algoritmo?.

*Ejemplo*: tengo 100 numeros, entre el 1 y 100, puede haber repetidos ¿cómo encuentro el mayor? Tener en cuenta la **complejidad espacial**

---

## :book: Tabla de la verdad

0 -> falsy

1 -> truthy

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/b8eac888-43ef-4cd1-906b-8a91aa2e07c0)


## :book: Diagrama de flujo

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/a644815c-dfed-49ce-8efc-e10f0c82cc54)

INICIO -> FLUJO -> FIN

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/d3bbd172-e412-4d14-ba98-eb966299d45e)

---

## :book: Bases de datos

Hay de 2 tipos:

- **Relacionales**: por tablas, como **MySQL**

- **No relacionales**: por documentos, como **mongo**, **mongoose**. 

---

## :book: Tips para meets

- Llegar a tiempo (nunca tarde)

- Entrar con microfono silenciado

- Prender camara (para empatia)

---

## :book: Condiciones

Pensar como preguntar para responder con si - no / true - false

---

## :book: Pregunta de entrevista

¿Porque los arrays comienzan nuemrados con 0?

---

## :book: GIT

- Software para versionar el codigo fuente, en un repositorio.

El servidor donde se alamcena para trabajar en grupo puede ser: **GitHub**, **GitLab**, **AWS**, **Azure**, **Bitbuket**

- Git creado por **Linus Torvalds**(de Linux)

## Comandos

- `clone` para clonar un repositorio. -> `git clone <url del repositorio remoto>`

- `add` para agregar archivos, los paso al `ataging area`(localmente en mi maquina, falta luego subirlos) -> `git add .` para agregar todos los archivos y `git add <nombre del archivo>` para agregar un archivo en particular

- `rm` para eliminar archivos del repositorio y del staging area. -> `git rm <nombre dle archivo>`

- `mv` para renombrar o mover archivos y directorios en el repositorio, se mantiene el historial de versiones de Git. -> `git mv <nombre-actual> <nombre-nuevo>`. Se hace efectivo en el repositorio local una vez hecho el commit.

- `commit` crear una nueva **confirmacion** en el repositorio. Es un registro qu **guarda un conjunto de cambios realizados en los archivos del proyecto en un momento específico**. Cada commit tiene un identificador unico con info de: autor, fecha, descripción del cambio.

`git commit -m "aca va el mensaje"`

El parametro `m` se utiliza para especificar el mensaje del commit.

## Estadios


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/bf1a2e01-3cb5-4c70-ad55-c8c846c83fcd)

---

## :book: Variables

En programación, las variables son com cajas de almacenamiento donde podemos guardar diferentes cosas. Cada caja tiene un nombre y puede contener un valor específico, como números o palabras. Las variables nos permiten acceder y manipular esos valores a lo largo de nuestro programa.

#### Almacenamiento volátil en la memoria RAM

El almacenamiento en la memoria RAM es volátil, al igual que cuando apagas una computadora, cuando finaliza un programa, toda la información almacenada en las variables desaparece, es como vaciar las cajas y perder su contenido.

### Declaración de variables

En JS, podemos declarar variables utilizando diferentes palabras claves:

- **var**, para variables, tiene scoope global.

- **let**, para variables, se restringe al scoope del bloque donde es definida.

- **const**, para constantes, no cambia su valor, debe declara la variable e inciializarla al mismo tiempo. Se suelen declarar en MAYUSCULA.

Cada una tiene características distintas que debemos tener en cuenta al programar.

```JavaScript
var edad = 25
let nombre = 'Juan'
const PI = 3.1416
```

### Primitivos

Las variables pueden almacenar datos de tipo **primitivos**, como:

- **number**: números enteros y decimales

- **string**: cadenas de caracteres.

- **boolean**: true o false

- **null**: ausencia de valor

- **undefined**: valor indefinido

- **Symbol**: valor único e inmutable que se puede utilizar como identificador. 


### ¿Cómo nombrarlas?

- en camelCase

- comienzan con una letra, '$' ó '_'

- no usar snake_case
 
-  no usar palabras reservadar del lenguaje

- no comienzan con númeor ni caracter especial.
  
---

## :book: Hoisting

Es un proceso que ocurre durante la fase de compilación o interpretación del código. Consiste en el movimiento de las declaraciones de variables y funciones hacia la parte superior de su scope actual, antes de que se ejecute el código.

Las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación.

---

## :book: Operadores

Para hacer calculos y manipular datos. Pueden ser ...


... aritméticos: `+`(suma), `-`(resta), `*`(multiplicacion, `/`(division),`%`(resto)

...asignacion: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**`(exponenciacion), `||`(OR), `&&`(AND)

...comparación: `==`, `===`(compara también el tipo de dato), `>`, `>=`, `<`, `<=`, '!=', `!==`(tambien compara el tipo de dato).

... lógicos: `&&`(AND), `||`(OR) y `!`(NOT)

---

## :book: RegExp(Expresiones Regulares)

Una secuencia de caracteres que efine un patrón de búsqueda.

`/[az]/i` -> la forma más común de definirla es entre `/ /`

`i` -> para ignorar las mayusculas y minusculas, para que deje de ser case sensitive.

`g` ->

---

## :book: Estructura de control de flujo

Un ejemplo con un **if-else**:

```JavaScript
let edad = 10

if(edad <18) {
 console.log('Es menor de edad')
} else {
 console.log('Es mayor de edad')
}
```

Lo puedo simplificar en un ternario

```JavaScript
(edad <18)? console.log('Es menor de edad') : console.log('Es mayor de edad')
```

---

## :computer: ESLint Standard de Airbnb

[https://www.npmjs.com/package/eslint-config-airbnb-standard](https://www.npmjs.com/package/eslint-config-airbnb-standard)

Para instalarlo global: ``npm install --global eslint-config-airbnb-standard``

Para instalarlo de manera local: `npm install --save-dev eslint-config-airbnb-standard`


#### Custom Config

Add your own rules to the .eslintrc file in your project folder. For example, you can turn off semicolons (semi -> "never"):

```
{
  "extends": ["airbnb-standard"],
  "rules": {
    "semi": ["error", "never"]
  }
}
```

---

## :book: Argumentos

Al iniciar un programa se pueden pasar variables como argumentos:

```JavaScript
console.log(process.argv[2])
```

```
node index.js "Hola mundo"
```

Y asi se me va a imprimir el 'Hola mundo' por consola

---

## :book: Ciclos

Para repetir cierto código si cumple con determinada condición

Algunos son:

## For

```JavaScript
for(let i = 0; i <10; i++) {
  console.log(i);
}
```

`let i = 0` -> inicializador

`i<10` -> la condición a verificar

`i++` > la actualización


## While


```JavaSCript
let condition = true
while(condition) {
  condition = false
}
```

1ro -> evalua al condición

2do -> si la cumple entra

## Do while

1ro -> se ejecuta

2do -> evalua si cumple con la condicion lo repite, sino ahi se corta

---

## :book: Arrays - Metodos

- En cada posicion hay un elemento, cada uno tiene su indice, se comienza desde el **cero**.

- Cada array esta en un espacio de memoria(**heap**, memoria dinámica que utiliza el garbage collector) en el programa, y cada elemento se guarda en un **stack**(memoria no dinamica)


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/580568f7-ca32-4aac-a2f9-a01da6d8d704)


  
---

## :book:

---

## :book: 

---

## :book: 


---
---


## :star: Para ampliar :star:

- ¿Por qué se puede definir un array con **const** y modificar sus elementos?

- ¿Cuál es la diferenica entre un forEach y un map?

---
---

