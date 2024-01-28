# :computer: Try / Catch – Jueves 06 de junio 19hs de Argentina

## :computer: ¿Qué pasa si? ….

Imaginemos que estás organizando una fiesta en tu casa. Tienes varios invitados, pero nunca se sabe qué podría suceder durante la celebración. Algunos invitados podrían derramar algo de bebida en el suelo, otros podrían tropezar y caer, e incluso podría haber algún accidente menor.

Aquí es donde entra en juego el concepto de try-catch en JavaScript. Puedes considerar cada bloque try-catch como una medida de seguridad que tomas para manejar los posibles contratiempos durante tu fiesta.

El bloque «try» es como una zona donde ocurren las cosas. Imagina que es la pista de baile de tu fiesta. Aquí es donde se ejecutan tus líneas de código y ocurren diferentes acciones.

Sin embargo, en cualquier momento, algo inesperado podría ocurrir. Por ejemplo, un invitado podría tropezar y caer en la pista de baile. En lugar de dejar que esto interrumpa toda la fiesta, puedes utilizar el bloque «catch» para manejar el problema de manera adecuada.

El bloque «catch» actúa como un equipo de seguridad que está listo para responder rápidamente a cualquier incidente. Cuando ocurre un error en el bloque «try», se activa el bloque «catch» y se ejecuta un código específico para manejar esa situación.

Siguiendo con nuestra metáfora de la fiesta, si alguien tropezara y cayera en la pista de baile, tu equipo de seguridad (el bloque «catch») rápidamente acudiría al rescate. Ayudarían a levantar a la persona, verificarían si está bien y luego harían todo lo posible para asegurarse de que la fiesta continúe sin problemas.

En JavaScript, el bloque «catch» captura cualquier excepción (error) que ocurra en el bloque «try» y permite que el código continúe ejecutándose sin interrupciones importantes. Esto es especialmente útil cuando se trabaja con operaciones que podrían generar errores, como la manipulación de archivos, solicitudes de red o cálculos complejos.

En resumen, la metáfora del try-catch en JavaScript se puede comparar con organizar una fiesta donde el bloque «try» es la zona de acción y el bloque «catch» es tu equipo de seguridad listo para manejar cualquier incidente inesperado y garantizar que la fiesta siga su curso sin problemas.

Aquí tienes un ejemplo simple de try-catch, primero en pseudocódigo y luego en código JavaScript:

Pseudocódigo:

```
intentar {
  // Bloque de código donde pueden ocurrir errores
  // ...
} capturar (error) {
  // Bloque de código para manejar el error
  // ...
}
```

En JavaScript el código es así:


```JavaScript
try {
  // Bloque de código donde pueden ocurrir errores
  const dividendo = 10;
  const divisor = 0;
  const resultado = dividendo / divisor;
  console.log("El resultado es: " + resultado);
} catch (error) {
  // Bloque de código para manejar el error
  console.log("Ha ocurrido un error: " + error.message);
}
```

En este ejemplo, estamos intentando realizar una división entre dos números: dividendo y divisor. Sin embargo, hemos establecido el divisor en 0, lo cual generará un error de división por cero.

En el bloque try, se ejecuta el código normalmente. Sin embargo, dado que la división por cero es un error, se lanza una excepción (error) y el control se transfiere al bloque catch. Dentro del bloque catch, capturamos el error y mostramos un mensaje adecuado en la consola.

En este caso, el mensaje de error sería «Ha ocurrido un error: Division by zero», indicando que se ha producido un error de división por cero.
Al código siempre dividir por 0 tirará el error pero si llevamos el bloque de try/catch a una función comienza a tener más sentido ya que la función no sabe que valores le llegarán cuando sea invocada, veamos el ejemplo


```JavaScript
function dividirNumeros(dividendo, divisor) {
  try {
    if (divisor === 0) {
      throw new Error("No se puede dividir por cero.");
    }

    const resultado = dividendo / divisor;
    return resultado;
  } catch (error) {
    console.log("Ha ocurrido un error: " + error.message);
    return null;
  }
}

// Ejemplo de uso de la función dividirNumeros
console.log(dividirNumeros(10, 2));   // Resultado: 5
console.log(dividirNumeros(8, 0));    // Error: No se puede dividir por cero. (y devuelve null)
console.log(dividirNumeros(12, 3));   // Resultado: 4
```

n este ejemplo, la función dividirNumeros acepta dos parámetros: dividendo y divisor. El propósito de la función es dividir dividendo entre divisor y devolver el resultado.

Dentro del bloque try, verificamos si el divisor es igual a cero. Si es así, lanzamos una nueva instancia de Error utilizando throw, indicando que no se puede dividir por cero. Este lanzamiento de excepción interrumpe la ejecución normal y se pasa al bloque catch.

Dentro del bloque catch, capturamos el error, mostramos un mensaje en la consola y devolvemos null. Esto indica que ha ocurrido un error y el resultado de la división no se puede calcular correctamente.

Luego, se muestran ejemplos de uso de la función dividirNumeros. En el primer caso, se proporcionan parámetros válidos y se obtiene el resultado de la división (5). En el segundo caso, se intenta dividir por cero, lo cual genera un error y se muestra un mensaje correspondiente en la consola. La función devuelve null en este caso. En el tercer caso, se proporcionan parámetros válidos y se obtiene el resultado de la división (4).

El uso del try-catch en esta función nos permite manejar los errores específicos que pueden ocurrir durante la ejecución, proporcionando una respuesta adecuada en cada caso.

¿Ves algún error más que se pueda producir en la función? Sería bueno que lo agregues :-)

Por último, tenemos la instrucción finally, traducido sería finalmente, es decir que el flujo pasará por allí independientemente si su ejecucción fue exitosa o no.

```JavaScript
function dividirNumeros(dividendo, divisor) {
  try {
    if (divisor === 0) {
      throw new Error("No se puede dividir por cero.");
    }

    const resultado = dividendo / divisor;
    return resultado;
  } catch (error) {
    console.log("Ha ocurrido un error: " + error.message);
    return null;
  } finally {
    console.log("Se ha intentado realizar la división.");
  }
}

// Ejemplo de uso de la función dividirNumeros
console.log(dividirNumeros(10, 2));   // Resultado: 5
console.log(dividirNumeros(8, 0));    // Error: No se puede dividir por cero. (y devuelve null)
console.log(dividirNumeros(12, 3));   // Resultado: 4
```

---

## Prepárate para la próxima clase
En el siguiente encuentro vamos a ver implementaciones de try/catch y realizar ejercicios para poner el concepto en práctica


---
