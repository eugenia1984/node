# CLASE 33 - MULTER

## Temas:

```
-MULTER
-Instalación y Configuración
-diskStorage y filename
-Subiendo archivos
-Probando desde Postman
```

---

## ¿Qué es MULTER?

MULTER es un middleware de Node.js
para manejar la subida de archivos.
En general se usa con express y facilita la
gestión de archivos recibidos en
peticiones HTTP.

---

## ¿Por qué usar MULTER?

Sencillez: Configuración y uso sencillo

Flexibilidad: Soporta varios tipos de almacenamiento.

Control: Permite configurar de manera detallada el destino y
nombre de los archivos.

---

## Instalación y configuración básica:

Para instalar MULTER utilizaremos el gestor de paquetes:

![image](https://github.com/eugenia1984/node/assets/72580574/3b8ff1a2-738a-4f32-b617-f46804599043)

---

## Método .diskStorage (destination)

Es un método en Multer que se utiliza para configurar cómo y dónde se
almacenan los archivos subidos. Permite especificar el destino y el nombre de
los archivos.

![image](https://github.com/eugenia1984/node/assets/72580574/00c8f834-a468-4886-bfbf-36a55ccf8b2b)

Dentro del método .diskStorage tenemos la función .destination que recibe
como parámetro una request, el archivo y un callback.

En el callback a su vez recibe se especifica la carpeta destino ‘uploads’.

---

## Método .diskStorage (filename)

Es otro método en Multer que se utiliza para configurar el nombre del archivo
que estamos recibiendo. Siempre que recibamos un archivo del front, el nombre
del archivo habrá que cambiarlo para asegurarnos que sea un nombre único
dentro de nuestra storage.

![image](https://github.com/eugenia1984/node/assets/72580574/80410048-a4d8-442c-9aaa-32ce40b06a30)

La función .filename recibe como parámetro una request, el archivo y un callback.
En la generación del nombre del archivo generamos un nombre único usando la marca de
tiempo actual + el nombre original del archivo.

---

## .diskStorage – Ejemplo con diskStorage y filename

En el siguiente ejemplo combinamos la configuración del destino y el nombre
del archivo, creando una instancia (upload) de Multer con la configuración
personalizada.

![image](https://github.com/eugenia1984/node/assets/72580574/d701897d-76af-4dca-83fd-bc45f7496fa3)

![image](https://github.com/eugenia1984/node/assets/72580574/06c506ae-a10b-4ea8-b041-3ab3434a413f)

---

## Uso de rutas: Subiendo un solo archivo

Una de las principales cuestiones al subir un archivo, es definir dónde guardaremos el
archivo que estamos recibiendo.

.single: Este es un ejemplo cuando estamos esperando un solo archivo.

![image](https://github.com/eugenia1984/node/assets/72580574/bf63f6ba-3b0e-4713-9e75-591b2505726f)

---

## Uso de rutas: Subiendo multiples archivos

Una de las principales cuestiones al subir un archivo, es definir dónde guardaremos el
archivo que estamos recibiendo.

.array: Este es un ejemplo cuando esperamos más de un archivo.

![image](https://github.com/eugenia1984/node/assets/72580574/91702929-a354-4e2c-ade0-2ca9a67a1685)

---

## Validación de los archivos recibidos

Una de las principales cuestiones a recibir archivos de manera externa es validar
que estamos recibiendo el tipo de archivo y el tamaño apropiados.

No podemos confiar en que el usuario, o el frontend envíen exactamente lo que
estamos esperando.

Por ese motivo tenemos dentro de Multer las opciones fileFilter y limits.

- fileFilter: Nos permite filtrar por tipos de archivo. En el caso de las imágenes
podemos definir que queremos solo archivos .jpg o una combinación de .jpg,
.png y .jpeg

- limits: Establece el tamaño máximo que puede tener el archivo.

---

## Validación de los archivos recibidos

![image](https://github.com/eugenia1984/node/assets/72580574/7955d717-1a45-4f60-b09e-889876347703)

---

## Un ejemplo aplicando lo visto:

![image](https://github.com/eugenia1984/node/assets/72580574/2af8f4b4-8dd9-4952-8e7b-0f083161d679)

---

## Preparando Postman para probar:

![image](https://github.com/eugenia1984/node/assets/72580574/8b1391c2-3f1c-4cdd-9d43-296d2d0cfce7)

---
