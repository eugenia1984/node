# :star: Git y consola (Jueves 19 de junio 19hs de Argentina)

---

En la siguiente clase daremos un gran paso y empezaremos con el contenido para un desarrollar de backend.
Saber cómo trabajar con la línea de comandos es una habilidad esencial que te ayudará a realizar tareas más eficientemente y a resolver problemas más rápidamente. Hoy, vamos a discutir algunas de las razones por las que es importante para un programador de backend saber cómo trabajar con la línea de comandos, y algunos de los comandos más comunes que debes conocer.

---

## Consola

La línea de comandos es una interfaz que nos permite interactuar con el sistema operativo Y/o nuestras aplicaciones mediante el uso de comandos escritos. Aunque puede parecer intimidante al principio, trabajar con la línea de comandos puede ser más eficiente y efectivo que trabajar con una interfaz gráfica de usuario. Aquí hay algunas razones por las que es importante que los programadores de backend sepan cómo trabajar con la línea de comandos:

1. La línea de comandos ofrece una manera rápida y eficiente de realizar tareas repetitivas. Si necesitas realizar la misma tarea varias veces, como por ejemplo correr un script, la línea de comandos te permitirá automatizar esa tarea para que puedas realizarla con un solo comando.

2. La línea de comandos te da más control sobre el sistema. Puedes realizar tareas que de otra manera serían imposibles o difíciles de realizar mediante una interfaz gráfica de usuario.

3. La línea de comandos te permite trabajar más rápido y sin distracciones. Puedes evitar tener que hacer clic en varios botones y menús para acceder a una función en particular, y en lugar de eso, simplemente puedes escribir el comando necesario para realizar la tarea.

---

## ¿Qué necesitas para empezar?

Cada sistema operativo trae su propia línea de comandos, por ejemplo GNU/Linux y Mac OS traen una terminal mientras que Windows viene con su terminal llamada PowerShell y puedes utilizar cualquiera de las interfaces para ejecutar comandos que vayamos aprendiendo a lo largo del curso


![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/ca3a5dc9-be61-4c4b-abb9-d6595474623c)

---

## Visual Studio Code

Para ponernos a todos en común vamos a instalar Visual Studio Code que es un editor de código fuente (donde vamos a programar nuestras aplicaciones) el cual trae incorporado una terminal y allí, sin importar el sistema operativo, todos podremos ejecutar los mismos comandos para ir a un mismo ritmo

## Instalación

A continuación sigue los pasos para su instalación en el sistema operativo que tengas.

### Instalación de Visual Studio Code en Windows

1. Ve al sitio web oficial de Visual Studio Code: https://code.visualstudio.com/download

2. Descarga la versión más reciente para Windows haciendo clic en el botón de descarga.

3. Ejecuta el archivo de instalación que descargaste y sigue las instrucciones del instalador.

4. Abre Visual Studio Code haciendo clic en el icono en el menú de inicio o en el escritorio.

### Instalación de Visual Studio Code en Linux

### Ubuntu/Debian

1. Abre la terminal y ejecuta los siguientes comandos:

```
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
sudo apt update
sudo apt install code
```

### CentOS/Fedora

1. Abre la terminal y ejecuta los siguientes comandos:

```
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio 
Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > 
/etc/yum.repos.d/vscode.repo'
sudo dnf check-update
sudo dnf install code
```

### Instalación de Visual Studio Code en macOS

1. Ve al sitio web oficial de Visual Studio Code: https://code.visualstudio.com/download

2. Descarga la versión más reciente para macOS haciendo clic en el botón de descarga.

3. Abre el archivo descargado.

4. Arrastra y suelta el icono de Visual Studio Code en la carpeta «Aplicaciones».

5. Abre Visual Studio Code haciendo clic en el icono en la carpeta «Aplicaciones».


## :computer: Verificación de la instalación

Una vez que hayas instalado Visual Studio Code, puedes verificar que se haya instalado correctamente ejecutando el programa y comprobando que se abra correctamente. 

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/0ba20522-08f2-484e-8c84-6bc406be6d22)

Además, puedes verificar la versión que se ha instalado seleccionando «Ayuda» en la barra de menú y haciendo clic en «Acerca de Visual Studio Code».

---

## :computer:  GIT

Git es un sistema de control de versiones distribuido de código abierto (mira este [video](https://www.youtube.com/watch?v=sVhBkC-VEFM) sobre open source) utilizado para el seguimiento de cambios en el código fuente durante el desarrollo de software. Fue creado por [Linus Torvalds](https://es.wikipedia.org/wiki/Linus_Torvalds), el ingeniero de software finlandés más conocido como el creador y desarrollador principal del sistema operativo Linux.

La creación de Git por parte de Torvalds fue motivada por la necesidad de una alternativa al sistema de control de versiones que había estado utilizando para el desarrollo del kernel de Linux, llamado BitKeeper. BitKeeper era una herramienta privada y propietaria, y su uso gratuito para proyectos de software libre y de código abierto estaba sujeto a ciertas restricciones. En 2005, hubo un desacuerdo entre la comunidad de desarrolladores de Linux y la empresa que desarrollaba BitKeeper, lo que llevó a la decisión de abandonar el uso de BitKeeper.

Ante esta situación, Linus Torvalds decidió crear su propio sistema de control de versiones que fuera rápido, eficiente y fácil de usar para el desarrollo del kernel de Linux. Así nació Git, que se convirtió en una herramienta fundamental para el desarrollo de Linux y pronto fue adoptada por una amplia variedad de proyectos y organizaciones en todo el mundo.

Git se ha convertido en una herramienta muy popular entre los desarrolladores debido a su capacidad de manejar proyectos grandes y complejos, y su flexibilidad para trabajar en diferentes entornos y con diferentes herramientas. Además, proporciona un control de versiones distribuido, lo que significa que cada desarrollador tiene una copia completa del repositorio y puede trabajar de forma independiente sin depender de un servidor centralizado. Esto ha permitido un desarrollo más descentralizado y colaborativo, lo que ha sido especialmente beneficioso para proyectos de software de gran envergadura.

En la última [encuesta anual](https://survey.stackoverflow.co/2022/#section-version-control-version-control-systems) de StackOverflow indica que el 96,65% de los desarrolladores profesionales utilizan Git

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/a9f08829-23f9-4487-bc65-2a3b420ca78c)

---

### Instalación de Git en Windows

1. Descarga el instalador de Git para Windows desde la página oficial de Git: [https://git-scm.com/download/win](https://git-scm.com/download/win)

2. Ejecuta el archivo descargado y sigue las instrucciones del instalador.

3. Durante la instalación, se te preguntará si deseas agregar Git al PATH del sistema. Asegúrate de seleccionar esta opción para que puedas acceder a Git desde la línea de comandos.

4. Haz clic en «Siguiente» y continúa con la instalación. Una vez completada, Git estará instalado en tu sistema.

### Instalación de Git en Linux

La instalación de Git en Linux varía según la distribución que estés utilizando. A continuación, se presentan las instrucciones para instalar Git en algunas de las distribuciones más populares.

### Debian/Ubuntu

Abre una terminal y ejecuta el siguiente comando: ``sudo apt-get update``

Luego, instala Git ejecutando el siguiente comando: ``sudo apt-get install git``

### Fedora

Abre una terminal y ejecuta el siguiente comando: ``sudo dnf install git``

### CentOS

Abre una terminal y ejecuta el siguiente comando: ``sudo yum install git``

### Instalación de Git en Mac

1. Descarga el instalador de Git para Mac desde la página oficial de Git: https://git-scm.com/download/mac

2. Ejecuta el archivo descargado y sigue las instrucciones del instalador.

3. Durante la instalación, se te preguntará si deseas agregar Git al PATH del sistema. Asegúrate de seleccionar esta opción para que puedas acceder a Git desde la línea de comandos.

4. Haz clic en «Siguiente» y continúa con la instalación. Una vez completada, Git estará instalado en tu sistema.

¡Listo! Ahora ya tienes Git instalado en tu sistema, ¿es hora de testearlo verdad?

Abre el VSC (Visual Estudio Code) y en el menú selecccciona **Ver** y luego **Terminal**, en la consola ejecuta el comando ``git –version``

Si te indica la versión es que la instalación ha sido un exito.

![image](https://github.com/eugenia1984/BackEnd-Node.js-con-Daniel-Segovia/assets/72580574/39fcf9af-8bd7-42fc-8287-912fa1193389)


---

## Principios básicos

A través de Git se pueden trabajar proyectos muy grandes con muchas personas colaborando al mismo tiempo, a lo largo del curso iremos profundizando su uso, por el momento vamos a trabajar con algunos comando básicos los cuales nos permitirán descargar y subir nuestro código fuente a la plataforma que soporte Git.

Existen diversas plataformas aquí te detallo las más comunes:

- **GitHub**: es una de las plataformas de alojamiento de repositorios Git más populares y ofrece planes gratuitos para usuarios individuales y proyectos de código abierto.

- **GitLab**: es otra plataforma de alojamiento de repositorios Git que ofrece un plan gratuito con funciones básicas, así como planes de pago con funciones avanzadas.

- **Bitbucket**: es una plataforma de alojamiento de repositorios Git propiedad de Atlassian y ofrece un plan gratuito para hasta 5 usuarios.

- **Launchpad**: es una plataforma de alojamiento de repositorios Git que también ofrece herramientas para la gestión de proyectos, el seguimiento de errores, entre otras funcionalidades.

- **Codeberg**: es una plataforma de alojamiento de repositorios Git centrada en la privacidad y la seguridad, que ofrece planes gratuitos para proyectos de código abierto.

- **GitTea**: es una plataforma de alojamiento de repositorios Git de código abierto que puedes instalar en tu propio servidor.

A lo largo del curso trabajaré sobre GitLab pero tu puedes elegir cualquiera de la lista o bien alguna que no esté en el listado, por ejemplo Github es propiedad de Microsoft y es realmente muy popular.

Trabajaremos Git a través de línea de comandos lo cual te permitirá utilizar a través de los mismos comandos subir o descargar código de cualquiera de estás plataformas.

[Aquí grabe una introducción al tema](https://youtu.be/iHnl-pAGVlU) para que te resulte más sencillo comprender de que estamos hablando :-)


Si te ha interesado el tema y deseas produndizar sobre el mismo puedes leer este [excelente tutorial de Diego C Martín](https://www.diegocmartin.com/tutorial-git/)

En la próxima clase veremos más sobre Git con ejemplos prácticos.

---
