# :star: Pensamiento lógico (Jueves 8 de junio 19hs de Argentina)

---

El **pensamiento lógico aplicado a la programación** se refiere a **la capacidad de un programador para pensar de manera estructurada y lógica al escribir código**. Se trata de una habilidad crítica para cualquier programador, ya que **el código debe ser lógico y coherente para funcionar correctamente**.

El pensamiento lógico implica la **capacidad de pensar de manera sistemática, analítica y organizada**. Esto significa que el programador debe ser capaz de **descomponer problemas complejos en partes más pequeñas y manejar cada parte de manera individual**, antes de **volver a unirlas para resolver el problema completo**.

Además, el pensamiento lógico aplicado a la programación también implica la capacidad de **anticipar posibles problemas y errores en el código**, y de **planificar soluciones alternativas para abordarlo**. También es importante para los programadores **saber cómo documentar y comentar su código de manera clara y concisa**, para que otros desarrolladores puedan entenderlo fácilmente.

A la hora de escribir código para nuestra aplicación en primer lugar, debemos entender que la **programación se basa en la lógica**. Es decir, para escribir un programa que haga lo que queremos, necesitamos **pensar de manera lógica**. ¿Qué significa esto? Que necesitamos ser **capaces de razonar y pensar de forma estructurada para poder crear programas eficientes y funcionales**.

---

## :book: Tabla de la verdad

Uno de los conceptos más importantes que debes entender es el pensamiento lógico, ya que es la base de toda programación.

Una de las herramientas más útiles para desarrollar tu pensamiento lógico es la **tabla de la verdad**. La tabla de la verdad es **una representación gráfica de todas las combinaciones posibles de valores de verdad para un conjunto de variables**. Es una herramienta esencial para la programación, ya que **se utiliza para determinar la lógica detrás de los condicionales y bucles**.

Para entender mejor la tabla de la verdad, vamos a utilizar un ejemplo con dos variables: **«es de día»** y **«hay sol»**. Ambas variables pueden ser verdaderas o falsas, por lo que hay cuatro combinaciones posibles:

1. **Es de día y hay sol (verdadero y verdadero)**

2. **Es de día pero no hay sol (verdadero y falso)**

3. **No es de día pero hay sol (falso y verdadero)**

4. **Ni es de día ni hay sol (falso y falso)**

Para cada una de estas combinaciones, podemos asignar un valor lógico. Por ejemplo, podríamos decir que si es de día y hay sol, la afirmación «voy a la playa» es verdadera, mientras que si no es de día y/o no hay sol, la afirmación «voy a la playa» es falsa. Podemos representar estas combinaciones y sus valores lógicos en una tabla de la verdad:


En esta tabla de la verdad, podemos ver que cuando **«es de día»** y **«hay sol»** son **verdaderos**, la afirmación **«voy a la playa»** también es **verdadera**. Sin embargo, cuando no «es de día» o no «hay sol» la afirmación completa es falsa.

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/edefc6bc-626f-4381-bb5e-c816b6157396)

La tabla de la verdad es una herramienta muy útil para la programación. Con ella, puedes **determinar la lógica detrás de cualquier conjunto de variables y construir condicionales y bucles basados en esa lógica**.

Es importante tener en cuenta que el pensamiento lógico va más allá de la tabla de la verdad. También implica la capacidad de **identificar patrones, establecer relaciones y analizar problemas**. Al aplicar el pensamiento lógico a la programación, puedes escribir código más eficiente y efectivo.


Revisa el siguiente video del Profesor [Steven Chavez Ponce](https://www.youtube.com/watch?v=pttgIlBLm-s&ab_channel=ProfesorStevenChavezPonce) para profundizar en el tema.


---

## :computer: A ponerlo en practica

Supongamos que eres un guardia de seguridad en una entrada de un edificio. Se te ha dado una lista de reglas que debes seguir para permitir el acceso a las personas. Estas son algunas de las reglas:

1. **Si la persona tiene una tarjeta de acceso válida, se le permite el acceso**.

2. **Si la persona no tiene tarjeta de acceso pero está en la lista de visitantes autorizados, se le permite el acceso solo si se identifica adecuadamente**.

3. **Si la persona no tiene tarjeta de acceso ni está en la lista de visitantes autorizados, se le niega el acceso**.

¿Qué variables puedes identificar? ¿Como podrías representarlo en la tabla de verdad?

variable 1 -> A = "La persona tiene una tarjeta de acceso válida"

variable 2 -> B = "La persona está en la lista de visitantes autorizados"

variable 3 -> C = "Permite acceso"

variable 4 -> D = "La persona se identifica adecuadamente."

**1** -> Si A es true, entonces C es true ---> if(A) return C

**2** -> Si A es false **y** B es true, entonces si D es true entonces C es true ----> if( !A && B ) return D && C

**3** -> Si A es false **y** B es false, entonces C es false ---> if(!A && !B) return !C

---

## :book: Algoritmos

En el mundo de la programación, un algoritmo es **un conjunto de instrucciones ordenadas y bien definidas que se utilizan para resolver un problema o realizar una tarea**. Los algoritmos son **como una receta que sigue un cocinero para preparar un plato**: si se siguen correctamente, se obtendrá el resultado deseado.

Los algoritmos se utilizan en muchos aspectos de la vida cotidiana, desde el proceso que sigue un médico para diagnosticar una enfermedad hasta la forma en que se organizan las cartas en un juego de solitario. En programación, los algoritmos **son fundamentales para resolver problemas y realizar tareas de manera eficiente**.


### Ejemplos de algoritmos

Veamos algunos ejemplos simples de algoritmos que se utilizan en la vida cotidiana:

- Para preparar un café, seguimos una serie de pasos: ponemos agua en una cafetera, agregamos el café molido, encendemos la cafetera y esperamos a que se haga el café.

- Para llegar a un lugar desconocido, seguimos un conjunto de direcciones: giramos a la derecha en la calle X, seguimos recto durante dos cuadras, giramos a la izquierda en la calle Y, etc.

- Para contar una cantidad de objetos, seguimos una serie de pasos: tomamos un objeto, lo contamos, y repetimos el proceso con cada objeto en la lista hasta haber contado todos.

En programación, los algoritmos pueden ser mucho más complejos, pero siguen el mismo principio básico: un **conjunto de instrucciones ordenadas que se utilizan para resolver un problema o realizar una tarea**.



### Problemas que se pueden resolver con algoritmos

Existen muchos problemas en programación que se pueden resolver mediante el uso de algoritmos. Aquí hay algunos ejemplos comunes:

- **Búsqueda**: encontrar un elemento específico en una lista o en una base de datos.

- **Ordenamiento**: organizar los elementos de una lista en un orden específico (por ejemplo, de menor a mayor).

- **Análisis de datos**: procesar y analizar grandes cantidades de datos para encontrar patrones y tendencias.

- **Criptografía**: codificar y decodificar información para protegerla de accesos no autorizados.



### Diseño de algoritmos

El diseño de un algoritmo eficiente es un proceso importante en programación. Aquí hay algunos conceptos clave a tener en cuenta:

- **Eficiencia**: un buen algoritmo debe ser eficiente, es decir, **debe tomar la menor cantidad de recursos (como tiempo y memoria) para realizar la tarea deseada**.

- **Complejidad temporal y espacial**: la complejidad temporal se refiere a **la cantidad de tiempo que tarda un algoritmo en ejecutarse**, mientras que la complejidad espacial se refiere a **la cantidad de memoria que utiliza**. Ambas son importantes al diseñar algoritmos eficientes.

- **Recursividad**: en programación, la recursividad es **la capacidad de una función o algoritmo para llamarse a sí mismo**. La recursividad se utiliza en muchos algoritmos, como el algoritmo de búsqueda binaria.


### Herramientas y técnicas para analizar y optimizar algoritmos

Existen varias herramientas y técnicas que se utilizan para analizar y optimizar algoritmos. Aquí hay algunas de las más importantes:

- **Diagramas de flujo**: los diagramas de flujo son **una herramienta visual que se utiliza para describir un algoritmo en términos de un conjunto de pasos lógicos**. Los diagramas de flujo ayudan a los programadores a comprender cómo funciona un algoritmo y a identificar posibles problemas de eficiencia.

- **Notación Big O**: la notación Big O se utiliza para **describir la complejidad temporal y espacial de un algoritmo**. Esto permite a los programadores comparar y evaluar la eficiencia de diferentes algoritmos.

- **Depuración y pruebas**: la depuración y las pruebas son técnicas importantes para **identificar y solucionar problemas en los algoritmos**. Los programadores utilizan depuradores para identificar errores en el código y pruebas para verificar que el algoritmo funciona como se espera.

Por el momento, solo nos vamos a focalizar en trabajar sobre los diagramas de flujo y más adelante veremos los siguientes.

Juan García Montes lo explica de una forma espectacular [:tv: ver video](https://youtu.be/Lub5qOmY4JQ)


---

## :book:  Conectando los mundos

La **tabla de verdad** y los **diagramas de flujo** están estrechamente relacionados, ya que **ambos se utilizan para describir el comportamiento lógico de un algoritmo**.

**Los diagramas de flujo son una herramienta visual que se utiliza para describir un algoritmo en términos de un conjunto de pasos lógicos**. Cada paso en el diagrama de flujo representa una operación lógica que se realiza en los datos de entrada. En este sentido, **los diagramas de flujo pueden utilizarse para describir las operaciones lógicas descritas en una tabla de verdad**.

Por ejemplo, supongamos que se tiene una tabla de verdad que describe la operación lógica **AND** en dos entradas booleanas. La tabla de verdad tendría cuatro posibles combinaciones de entradas (verdadero-verdadero, verdadero-falso, falso-verdadero, falso-falso) y el resultado de cada combinación.

Se podría diseñar un diagrama de flujo para implementar esta operación lógica de la siguiente manera: se comienza con dos entradas booleanas, se verifica si ambas son verdaderas, y si lo son, se produce una salida verdadera. Si no, se produce una salida falsa. Este diagrama de flujo representa las operaciones lógicas descritas en la tabla de verdad y se puede utilizar para implementar la operación lógica AND en un algoritmo.

En general, los diagramas de flujo son una herramienta útil para describir las operaciones lógicas en un algoritmo y cómo se combinan para producir un resultado. En combinación con la tabla de verdad, los diagramas de flujo pueden ser utilizados para diseñar algoritmos lógicos eficientes y comprensibles.

---
