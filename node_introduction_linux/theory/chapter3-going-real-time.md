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

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---
