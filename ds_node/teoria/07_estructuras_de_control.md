# :computer: 07 - ESTRUCTURAS DE CONTROL de flujo (Lunes 26 de junio 19hs de Argentina)

---

Cuando escribimos programas en JavaScript, a menudo necesitamos tomar decisiones y realizar diferentes acciones según las condiciones que se presenten en el programa. Para esto, utilizamos las estructuras de control de flujo, que nos permiten evaluar condiciones y ejecutar diferentes bloques de código en función de esas condiciones. En este post, veremos las estructuras de control de flujo «if/else» y «switch» en JavaScript.

## Estructura de control de flujo «if/else»

El «if/else» es la estructura de control de flujo más básica en JavaScript y se utiliza para evaluar una condición y ejecutar un bloque de código si esa condición es verdadera. La sintaxis básica del «if/else» es la siguiente:

```JavaScript
if (condición) {
  // código que se ejecuta si la condición es verdadera
} else {
  // código que se ejecuta si la condición es falsa
}
```

Por ejemplo, supongamos que queremos escribir un programa que imprima «Buenos días!» si la variable horaDelDia es menor a 12 y «Buenas tardes!» si es mayor o igual a 12. Podemos hacerlo utilizando un «if» de la siguiente manera:

```JavaScript
let horaDelDia = 10;

if (horaDelDia < 12) {
  console.log("Buenos días!");
} else {
  console.log("Buenas tardes!");
}
```

En este caso, la condición dentro del «if» es horaDelDia < 12, que evalúa si la variable horaDelDia es menor a 12. Si la condición es verdadera, se imprime «Buenos días!» en la consola. Si la condición es falsa, se ejecuta el código dentro del bloque «else» y se imprime «Buenas tardes!».

Operador lógico «AND»
El operador lógico «AND» se utiliza para combinar dos o más condiciones en una sola expresión y verificar que todas las condiciones sean verdaderas. Aquí está la sintaxis básica:

```JavaScript
if (condición1 && condición2) {
  // código que se ejecuta si ambas condiciones son verdaderas
}
```

Por ejemplo, supongamos que queremos escribir un programa que imprima «Es un día soleado y cálido» si tanto la variable clima es «soleado» como la variable temperatura es mayor a 25 grados Celsius. Podemos hacerlo utilizando el operador «AND» de la siguiente manera:

```JavaScript
let clima = "soleado";
let temperatura = 30;

if (clima === "soleado" && temperatura > 25) {
  console.log("Es un día soleado y cálido");
} else {
  console.log("No es un día soleado y cálido");
}
```

En este caso, la condición dentro del «if» es clima === "soleado" && temperatura > 25, que evalúa si la variable clima es igual a «soleado» y la variable temperatura es mayor a 25. Si ambas condiciones son verdaderas, se imprime «Es un día soleado y cálido» en la consola. Si una o ambas condiciones son falsas, se ejecuta el código dentro del bloque «else» y se imprime «No es un día soleado»

---

## Operador lógico «OR»

El operador lógico «OR» se utiliza para combinar dos o más condiciones en una sola expresión y verificar que al menos una de las condiciones sea verdadera. Aquí está la sintaxis básica:

```JavaScript
if (condición1 || condición2) {
  // código que se ejecuta si al menos una de las condiciones es verdadera
}
```

Por ejemplo, supongamos que queremos escribir un programa que imprima «Es un día de playa» si la variable clima es «soleado» o la variable temperatura es mayor a 25 grados Celsius. Podemos hacerlo utilizando el operador «OR» de la siguiente manera:

```JavaScript
let clima = "soleado";
let temperatura = 20;

if (clima === "soleado" || temperatura > 25) {
  console.log("Es un día de playa");
} else {
  console.log("No es un día de playa");
}
```

En este caso, la condición dentro del «if» es clima === "soleado" || temperatura > 25, que evalúa si la variable clima es igual a «soleado» o la variable temperatura es mayor a 25. Si al menos una de las condiciones es verdadera, se imprime «Es un día de playa» en la consola. Si ambas condiciones son falsas, se ejecuta el código dentro del bloque «else» y se imprime «No es un día de playa».

---

## if else if else if else

A veces nos encontramos en situaciones donde no podemos redudir todo a una sola expresión, inclusive si queremos simplificarla usando ```AND``` o ```OR```, por está razón a veces nos vemos obligados a tener un ```if``` y dentro otro ```if``` o bien un ```if``` dentro de un ```else```.

Imagina la siguiente situación, tenemos una aplicación de compras online y queremos dar descuento, aquí las reglas:

- Un cliente nuevo es aquel que ha comprado menos de 10 productos y obtiene descuentos

- Un cliente habitual es aquel que ha comprado más de 10 productos y menos de 20, en este caso obtiene un 10% de descuento

- Un cliente fiel es aquel que ha comprado más de 20 productos y en todas sus compras obtiene un 20% de descuento

#### Veamos el flujo en el siguiente diagrama


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/4e8acf8c-58f4-4de8-971e-54354c328594)

### Ahora vamos a llevarlo al código

```JavaScript
productos = 22
let descuentos

if(productos>10){
   if(productos > 10 && productos <20)
       descuentos = 10
   else
       descuentos = 20
}else{
   descuentos = 0;
}

console.log(`El cliente obtuvo un descuento del ${descuentos}%`);
```

Tanto el gráfico como el código sirven para explicar como podemos utilizar un ```if``` o ```else``` dentro de una estructura de ```if``` o ```else```.

El código anterior tiene un error, ¿lo has visto? No es un error de sintaxis, se ejecuta correctamente, hay un punto específico donde un cliente con X cantidad de compras previas no le estamos aplicando el descuento correcto, te invito a que lo revises, lo ejecutes en tu máquina e intentes descubrir donde es que lo he hecho mal.

---

## La estructura Switch

El uso del condicional switch en JavaScript puede ser una herramienta muy útil para simplificar el código y evitar tener que escribir largas cadenas de ```if/else```. Una analogía que podríamos usar para entender cómo funciona switch es pensar en un operador de telefonía y su menú de opciones. Cuando llamas al servicio de atención al cliente de tu operador de telefonía, es probable que te enfrentes a un menú de opciones que te permita dirigir tu llamada al departamento correcto. El menú de opciones te pide que selecciones una opción, y dependiendo de lo que selecciones, te conectará con el departamento correcto.

En el código, podemos pensar en cada opción del menú como un caso del switch. Dependiendo de lo que el usuario seleccione, se ejecutará un bloque de código diferente.

```JavaScript
const dayOfWeek = "martes";

if (dayOfWeek === "lunes") {
  console.log("Hoy es lunes. ¡Ánimo, que la semana recién comienza!");
} else if (dayOfWeek === "martes") {
  console.log("Hoy es martes. ¡Ya superaste el primer día!");
} else if (dayOfWeek === "miércoles") {
  console.log("Hoy es miércoles. ¡Estamos a mitad de semana!");
} else if (dayOfWeek === "jueves") {
  console.log("Hoy es jueves. ¡Ya casi llegamos al viernes!");
} else if (dayOfWeek === "viernes") {
  console.log("Hoy es viernes. ¡el fin de semana está a un paso!");
} else {
  console.log("Estás de fin de semana, disfrútalo :-) ");
}
```

¡Por supuesto! Aquí tienes el ejemplo de los días de la semana utilizando muchas sentencias if/else:

En este ejemplo, cada sentencia if/else comprueba si la variable dayOfWeek es igual a una cadena específica correspondiente a un día de la semana, y en función de eso muestra un mensaje diferente. Si ninguna de las sentencias if/else se cumple, se ejecuta el bloque final de código.

Ahora, si tenemos muchas opciones como estas, podemos utilizar la estructura switch para hacerlo más legible. Para hacer la conversión, simplemente debemos seguir los siguientes pasos:

Reemplazar la primera sentencia if por la palabra clave switch seguida de la variable que queremos evaluar.

Eliminar la condición dentro de cada sentencia if y reemplazarla por una sentencia case seguida del valor que se quiere comprobar.

Agregar un bloque default al final para manejar la situación en la que ningún caso se cumple.

Aquí está el mismo ejemplo pero utilizando la estructura switch:

```JavaScript
const dayOfWeek = "martes";

switch (dayOfWeek) {
  case "lunes":
    console.log("Hoy es lunes. ¡Ánimo, que la semana recién comienza!");
    break;
  case "martes":
    console.log("Hoy es martes. ¡Ya superaste el primer día!");
    break;
  case "miércoles":
    console.log("Hoy es miércoles. ¡Estamos a mitad de semana!");
    break;
  case "jueves":
    console.log("Hoy es jueves. ¡Ya casi llegamos al viernes!");
    break;
  case "viernes":
    console.log("Hoy es viernes. ¡Al fin llegó el fin de semana!");
    break;
  default:
  console.log("Estás de fin de semana, disfrútalo :-) ");
}
```

La expresión en el paréntesis es evaluada una sola vez, y el valor resultante se compara con los valores de los case del switch. Si la expresión es igual a uno de los valores de los case, se ejecuta el bloque de código correspondiente. Es importante destacar que la igualdad se realiza mediante el operador de comparación estricta ```===```.

Cada case representa una opción del menú de opciones de nuestro ejemplo anterior. Si la expresión coincide con el valor del case, se ejecutará el bloque de código asociado a ese case. Si no se incluye la instrucción break al final de cada bloque de código, se ejecutará el siguiente case independientemente de si la expresión coincide con su valor o no.

La instrucción break se utiliza para salir del switch una vez que se ha ejecutado el bloque de código correspondiente. Si no se incluye la instrucción break, se ejecutarán todos los bloques de código correspondientes a los case siguientes, incluso si la expresión no coincide con su valor.

La cláusula default se ejecuta si ninguna de las condiciones de los case se cumple. Es similar a incluir un else al final de una cadena de if/else.

Espero que esta explicación técnica te haya sido útil para entender mejor cómo funciona el condicional switch en JavaScript.

---

### Preparate para el siguiente encuentro

En el siguiente encuentro vamos a explicar estos temas y veremos el scope en JavaScript, aquí es donde empiezar a tomar sentido los var, let y const.

---
