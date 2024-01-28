# :star: Mongo II – Jueves 31 de agosto 19hs de Argentina

Las agregaciones son una característica poderosa de MongoDB que te permiten realizar operaciones de procesamiento de datos avanzadas en tus datos almacenados. Aquí tienes un esquema para tu nuevo artículo sobre agregaciones en MongoDB con Node.js:

## :star: ¿Qué son las agregaciones?

Las bases de datos modernas no solo almacenan datos, sino que también ofrecen una forma de procesarlos y obtener información valiosa. En esta travesía hacia el conocimiento, exploraremos las «agregaciones» en MongoDB, una característica que eleva la manipulación de datos a un nivel superior. Acompáñanos mientras descubrimos cómo las agregaciones permiten realizar cálculos complejos, transformaciones y análisis de datos directamente en la base de datos.

En el mundo de MongoDB, las agregaciones son la forma de realizar operaciones avanzadas de procesamiento de datos. En lugar de recuperar datos y procesarlos en el lado del servidor, las agregaciones realizan las operaciones directamente en la base de datos, lo que ahorra tiempo y recursos y simplifica el código.

Exploraremos operaciones clave como match, group, project, sort y más. Aprenderemos cómo construir canalizaciones de agregación para aplicar estas operaciones en secuencia y obtener resultados precisos.

## :star: Analizando Datos de Ventas

Vamos a sumergirnos en un escenario realista: analizar datos de ventas en una aplicación de comercio electrónico. Utilizaremos agregaciones para calcular ingresos totales, productos más vendidos y patrones de compra de los clientes.

Realizo la conexión, definición de esquemas y modelo

```JavaScript
const mongoose = require('mongoose');

// Configuración de la conexión a la base de datos
mongoose.connect('mongodb://admin:secretpassword@localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Modelo para la colección de ventas
const Sale = mongoose.model('Sale', new mongoose.Schema({
  product: String,
  quantity: Number,
  price: Number
}));
```

## Inserto algunos datos de ejemplos

Para trabajar con las siguientes agregaciones realizaré el insert de algunos datos de ejemplo

```JavaScript
// Insertar datos de ventas de ejemplo
const salesData = [
  { product: 'Producto A', quantity: 5, price: 20 },
  { product: 'Producto B', quantity: 3, price: 30 },
  { product: 'Producto A', quantity: 2, price: 20 },
  // Agrega más datos de ventas aquí
];

Sale.insertMany(salesData)
  .then(() => {
    console.log('Datos de ventas insertados exitosamente');
  })
  .catch((err) => {
    console.error('Error al insertar datos de ventas:', err);
  });
```

## Agregaciones

Aquí tienes algunos ejemplos de operaciones de agregación en MongoDB, junto con explicaciones de lo que hacen cada una de ellas. Estos ejemplos te ayudarán a comprender mejor cómo funcionan las agregaciones y cómo pueden ser utilizadas en diferentes situaciones.

## Agrupación y Suma

```JavaSCript
Sale.aggregate([
  {
    $group: {
      _id: '$product',
      totalQuantity: { $sum: '$quantity' },
      totalPrice: { $sum: { $multiply: ['$quantity', '$price'] } }
    }
  }
])
```

En este ejemplo, estamos agrupando las ventas por producto ($product). Luego, utilizamos la operación $sum para calcular la cantidad total de productos vendidos (totalQuantity) y el ingreso total por producto (totalPrice) multiplicando la cantidad por el precio de cada venta.

## Filtrado y proyecciones

```JavaScript
Sale.aggregate([
  {
    $match: { product: 'Producto A' }
  },
  {
    $project: {
      _id: 0,
      product: 1,
      totalAmount: { $multiply: ['$quantity', '$price'] }
    }
  }
])
```

Aquí utilizamos $match para filtrar las ventas y seleccionamos solo aquellas que corresponden al producto ‘Producto A’. Luego, con $project, proyectamos solo los campos product y totalAmount, que calculamos multiplicando la cantidad por el precio de cada venta. También excluimos el campo _id del resultado.

## Ordenamiento y Limitación


```JavaScript
Sale.aggregate([
  {
    $group: {
      _id: '$product',
      totalQuantity: { $sum: '$quantity' }
    }
  },
  {
    $sort: { totalQuantity: -1 }
  },
  {
    $limit: 5
  }
])
```

Primero, agrupamos las ventas por producto y calculamos la cantidad total de productos vendidos. Luego, utilizamos $sort para ordenar los resultados en orden descendente según la cantidad total de productos vendidos. Finalmente, utilizamos $limit para limitar los resultados a los 5 productos más vendidos.

---

## Prepárate para la siguiente clase

En la siguiente clase veremos todos los aggregate

---
