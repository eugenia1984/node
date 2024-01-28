# <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Chapter 3

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Overview

In the prior chapter, we learned how to build mock HTTP services. This chapter will build on those services to include real-time functionality with mock data. In the same vein, this grants us a way to build out functionality for frontend or other real-time consuming services or clients without needing access to production or even staging real-time APIs. Deploying production-worthy real-time APIs is an architectural and operational challenge in itself, the details of which are beyond the scope of this course. However, as developers, having this capability as part of our skill set allows us to mock out and/or prototype real-time functionality to later improve on and integrate our implementations into wider solutions created and deployed by more infrastructurally and architecturally focused teams and roles.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Enhancing an HTTP Server with WebSockets (1)

WebSockets allow for two-way communication between browsers and servers. Similar to how HTTP protocol is built on top of the TCP protocol, the WebSocket protocol is built on top of the HTTP protocol. It allows for long-lived connections that start as normal HTTP connections, and then upgrade to socket-like connections. For more details on the WebSocket protocol, refer to the following resources:

- [Writing WebSocket Client Applications](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)

- [Writing WebSocket Servers](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)

In this section, we will integrate WebSockets into our frontend app and mock service, as we left them at the end of the previous chapter.

We are going to enhance our application with the ability to display live order counts of each product item. Let's first upgrade the frontend portion.

The static/index.html should look as follows:

```HTML
<html>
  <head>
    <title>My App</title>
    <script type="module" src="app.js"></script>
    <style>
      body {
        background: #fad8d8
      }
      #add {
        margin-top: 1em;
        width: 20rem;
        display: none;
      }
      #add input {
        margin-bottom: .5em;
      }
      [name="name"],
      [name="rrp"] {
        width: calc(10rem - 2px);
      }
      [name="info"] {
        width: 20rem;
      }
      #add button {
        font-weight: bold;
        width: 5em;
        float: right
      }
    </style>
  </head>
  <body>
    <nav>
      <select id="category">
        <option value="" hidden>Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="confectionery">Confectionery</option>
      </select>
    </nav>
    <hr />
    <div id="products"></div>
    <form id="add">
      <input name="name" placeholder="name" required />
      <input name="rrp" placeholder="rrp" type="number" step="0.01" required />
      <input name="info" placeholder="info" required />
      <button type="submit">Add</button>
    </form>
    <template id="item">
      <style>
         details {
           font-size: 1.5em;
         }
         summary {
           cursor: pointer;
         }
         p {
           text-indent: 1.5rem;
         }
       </style>
        <details>
         <summary>
           <strong><slot name="name"></slot></strong> -
           <em><slot name="rrp"></slot></em>
           <small>[Orders: <slot name="orders">pending</slot>]</small>
         </summary>
         <p><slot name="info"></slot></p>
       </details>
     </template>
   </body>
</html>
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Enhancing an HTTP Server with WebSockets (2)

The item template has been extended with a slot for displaying orders. Now, let's update the `static/app.js` file to establish a client-side WebSocket connection to our server. This connection will update the relevant order slots with received data. Modify the `static/app.js` file to match the following:

```JavaScript
const API = "http://localhost:3000";
const WS_API = "ws://localhost:3000";

// Populate products
const populateProducts = async (category, method = "GET", payload) =>
{
  const products = document.querySelector("#products");
  products.innerHTML = "";
  // Send request
  const send =
    method === "GET"
      ? {}
      : {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
  // Get data
  const res = await fetch(${API}/${category}, { method, ...send });
  const data = await res.json();
  // Populate products
  for (const product of data) {
    const item = document.createElement("product-item");
    item.dataset.id = product.id;
    for (const key of ["name", "rrp", "info"]) {
      const span = document.createElement("span");
      span.slot = key;
      span.textContent = product[key];
      item.appendChild(span);
  }
  // Append to DOM
  products.appendChild(item);
 }
};

// Get Elements from DOM
const category = document.querySelector("#category");
const add = document.querySelector("#add");

let socket = null;
// Realtime orders handler using WebSocket
const realtimeOrders = (category) => {
  if (socket) socket.close();
  socket = new WebSocket(${WS_API}/orders/${category});
  socket.addEventListener("message", ({ data }) => {
    try {
      const { id, total } = JSON.parse(data);
      const item = document.querySelector([data-id="${id}"]);
      if (item === null) return;
      const span =
        item.querySelector('[slot="orders"]')
         || document.createElement("span");
      span.slot = "orders";
      span.textContent = total;
      item.appendChild(span);
    } catch (err) {
      console.error(err);
    }
  });
};

// Populate products on page load
category.addEventListener("input", async ({ target }) => {
  add.style.display = "block";
  await populateProducts(target.value);
  realtimeOrders(target.value);
});

// Add product form handler
add.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { target } = e;
  const payload = {
    name: target.name.value,
    rrp: target.rrp.value,
    info: target.info.value,
  };
  await populateProducts(category.value, "POST", payload);
  realtimeOrders(category.value);
  // Reset form
  target.reset();
});

// Define custom element
customElements.define(
  "product-item",
  class Item extends HTMLElement {
    constructor() {
      super();
      const itemTmpl = document.querySelector("#item").content;
      this.attachShadow({ mode: "open"
}).appendChild(itemTmpl.cloneNode(true));
    }
  }
);


```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Enhancing an HTTP Server with WebSockets (3)

The **populateProducts** function has been updated so that the ID of each product item is added to a data attribute of each created `<product-item>` element `(item.dataset.id = product.id)`.

A new function called **realtimeOrders** has been added to the frontend code. It is invoked within the event listener function attached to the input event of the category selector and within the submit event of the add form. When a category is selected (or when a new item is added to a category), a WebSocket connection to `ws://localhost:3000/orders/{category}` is established with the selected category. The WebSocket connection (socket) listens for real-time messages sent from the server. It updates the relevant `<product-item>` element with the newly received order total based on the corresponding ID of the received message.

This will not work until we have upgraded our mock service with server-side WebSocket functionality. To support these frontend changes, we need to support a `ws://localhost:3000/orders/{category}` route. To create WebSocket routes (which are just HTTP routes which upgrade to realtime WebSocket connections), we need to install the fastify-websocket plugin. We can do so by running the following command in the mock-srv folder: `$ npm install @fastify/websocket`

Then we need to import `@fastify-websocket` and register it in the `mock-srv/app.mjs` file. The `mock-srv/app.mjs` file should look as follows:

```JavaScript
import path from "node:path";
import { fileURLToPath } from "node:url";
import AutoLoad from "@fastify/autoload";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Pass --options via CLI arguments in command to enable these options.
export const options = {};


export default async function (fastify, opts) {
  // Place here your custom code!

  // Register CORS
  fastify.register(cors, {});
  // Register Websocket
  fastify.register(websocket, {});

  // Do not touch the following lines


  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });


  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
}
```

Now we can create a mock-srv/routes/orders folder with an index.mjs file and sketch out our route.

To create the folder, we can run the following command from the project directory:

```
$ cd mock-srv
$ mkdir -p routes/orders
```

Let's also create an index.mjs file in our newly created folder with the following contents:

```JavaScript
"use strict";

export default async function (fastify, opts) {
  fastify.get(
    "/:category",
    { websocket: true },
    async ({ socket }, request) => {
      socket.send(JSON.stringify({ id: "A1", total: 3 }));
    }
  )};
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Enhancing an HTTP Server with WebSockets (4)

The fastify-websocket plugin enhances the fastify.get method. If an options object is passed as a second argument (instead of a route handler) which has the websocket property set to true, then the route handler is passed an object representing the WebSocket connection and the usual Fastify request object. The connection object contains a socket instance which (mostly) mirrors the API of the browser-side WebSocket API. The connection object itself has a different, slightly higher-level API. However, for familiarity's sake, we will use the (close-to) standard server-side WebSocket API.

We are not done yet — this is just to check that we have a "happy-path" from client to service and back to client. All we're doing is sending one order total for one product. We can check whether this has worked by starting our server, serving the static files with the serve command, and navigating to the Electronics section in the web app. To start the server, we run the following in the mock-srv folder: `$ npm run dev`

In a separate terminal, we serve the static files by running the following command from the root of the project folder: `$ serve -p 5050 static`

If we then navigate to `http://localhost:5050` in a browser and select the Electronics category, we should see something similar to the following:

A browser page at the address `http://localhost:5050`. It contains a select element that reads
Electronics Category

We can see that the orders for the Vacuum Cleaner (which has the ID of A1) is 3. This value has been pushed to the client from the server using the WebSocket connection.

This does not fully demonstrate real-time capabilities. If we are mocking real-time functionality, we want to see constant updates. To achieve this, we need to mock a data stream of order updates for all items. In the prior chapter, we built a plugin to mock database interactions. Here, we will extend it to simulate incoming orders.

We'll update the top of mock-srv/plugins/data-utils.mjs to the following:

```JavaScript
"use strict";
import fp from "fastify-plugin";
import {promisify} from "node:util"

// Promisify setTimeout
const timeout = promisify(setTimeout);

const orders = {
  A1: { total: 3 },
  A2: { total: 7 },
  B1: { total: 101 },
};

const catToPrefix = {
  electronics: "A",
  confectionery: "B",
};
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Enhancing an HTTP Server with WebSockets (5)

Here we have added a promisified setTimeout (timeout) which we will use later. We've also added an orders object which we will use for our faux-data.

Next to the same mock-srv/plugins/data-utils.mjs file, we will add an orders simulator with the following async generator function:

```JavaScript
async function* realtimeOrdersSimulator() {
  const ids = Object.keys(orders);
  while (true) {
    const delta = Math.floor(Math.random() * 7) + 1;
    const id = ids[Math.floor(Math.random() * ids.length)];
    orders[id].total += delta;
    const { total } = orders[id];
    yield JSON.stringify({ id, total });
    await timeout(1500);
  }
}
```

An async function produces a promise. A generator function produces an iterable. This is an object with a next function that can be called to make the function progress to the next yield keyword in that function and returns the value of whatever is yielded. An iterable can be looped over with a for of loop. An async generator function is a combination of both async functions and generator functions, and it is useful for asynchronously producing continuous state changes. It returns an async iterable, which is an object with a next function that returns a promise which resolves to the value of whatever is yielded from the async function generator. Async iterables can be looped over with a for await of loop. See JavaScript Demo: Statement - For Await...Of for more insight.

The upshot is we can use the async generator function here to output a randomly incremented total for a randomly selected order every 1500 milliseconds. We do this by awaiting the timeout function, passing 1500 to it at the end of the infinite while loop. Just above that, we yield a stringified object containing the product ID and the new total. We also keep a running total by modifying the orders object each time; this means we can provide consistent totals for each product to every WebSocket client.

Since each item total is randomly incremented, we need a way for a client to get all the current order totals so it can populate the initial values (instead of each order count staging "pending" until it's randomly incremented).

For this, we will add another function to mock-srv/plugins/data-utils.mjs. This time we will add a synchronous generator function:

```JavaScript
function* currentOrders(category) {
  const idPrefix = catToPrefix[category];
  if (!idPrefix) return;
  const ids = Object.keys(orders).filter((id) => id[0] === idPrefix);
  for (const id of ids) {
    yield JSON.stringify({ id, ...orders[id] });
  }
}
```

The currentOrders generator function takes a category name and maps it to an ID prefix. Then it gets all products in the orders object with that ID prefix, loops over them, and yields a serialized object containing the ID and order total for that ID. By spreading the object in the orders[id] object (...orders[id]) into the object being stringified, every key in the orders[id] object is copied. Currently, there is only a totals key, but the objects in the order object could be extended, and any extra properties would also be in the JSON string that's yielded from currentOrders. If, for any reason, an unknown category was passed to currentOrders it would have no corresponding ID prefix and, therefore would finish without yielding any values at all.

For more information on non-async generators, see the following article, [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---
