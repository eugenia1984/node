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

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Enhancing an HTTP Server with WebSockets (6)

We used a normal (as in non-async) generator function here because there's no asynchronous activity required. In a real-world scenario, we would probably be getting the current orders asynchronously. At that point, this function could trivially be converted to an async function generator, and then the asynchronous operations (represented by promises) could be awaited.

The bottom of ``mock-srv/plugins/data-utils.mjs`` should look like so:


```JavaScript
const calculateID = (idPrefix, data) => {
  const sorted = [...new Set(data.map(({ id }) => id))];
  const next = Number(sorted.pop().slice(1)) + 1;
  return ${idPrefix}${next}
};

export default fp(async function (fastify, opts) {
  fastify.decorate("currentOrders", currentOrders);
  fastify.decorate("realtimeOrders", realtimeOrdersSimulator);
  fastify.decorate("mockDataInsert", function (request, category, data) {
    const idPrefix = catToPrefix[category];
    const id = calculateID(idPrefix, data);
    data.push({ id, ...request.body });
    return data;
  });
});
```

We wrote the calculateId function in the prior chapter. The exported plugin has two new decorators:

```
  fastify.decorate("currentOrders", currentOrders);
  fastify.decorate("realtimeOrders", realtimeOrdersSimulator);
```

Here we have exposed the generator function and async generator function by decorating the fastify instance. Now we can use these in our /orders/{category} WebSocket route to send out the initial order totals and then simulate further real-time orders.

In addition, the mockDataInsert request decorator has been updated to add a new order object for the newly created product ID (id).

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Enhancing an HTTP Server with WebSockets (7)


The entirety of ``mock-srv/plugins/data-utils.mjs`` should look like so:

```JSON
"use strict";
import fp from "fastify-plugin";
import { promisify } from "node:util";

// Promisify setTimeout
const timeout = promisify(setTimeout);

// Mock data
const orders = {
  A1: { total: 3 },
  A2: { total: 7 },
  B1: { total: 101 },
};

// Map category to ID prefix
const catToPrefix = {
  electronics: "A",
  confectionery: "B",
};

// Simulate realtime orders
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

// Return current orders
function* currentOrders(category) {
  const idPrefix = catToPrefix[category];
  if (!idPrefix) return;
  const ids = Object.keys(orders).filter((id) => id[0] === idPrefix);
  for (const id of ids) {
    yield JSON.stringify({ id, ...orders[id] });
  }
}

// Calculate next ID
const calculateID = (idPrefix, data) => {
  const sorted = [...new Set(data.map(({ id }) => id))];
  const next = Number(sorted.pop().slice(1)) + 1;
  return ${idPrefix}${next};
};

// Plugin
export default fp(async function (fastify, opts) {
  fastify.decorate("currentOrders", currentOrders);
  fastify.decorate("realtimeOrders", realtimeOrdersSimulator);
  fastify.decorate("mockDataInsert", function (request, category, data) {
    const idPrefix = catToPrefix[category];
    const id = calculateID(idPrefix, data);
    data.push({ id, ...request.body });
    return data;
  });
});
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Enhancing an HTTP Server with WebSockets (8)


Now we will complete the implementation of the ``/orders/{category}`` route using the newly available ``fastify.currentOrders`` and ``fastify.realtimeOrders`` methods.

Let's update ``mock-srv/routes/orders/index.mjs`` to the following:

```JavaScript
"use strict";

export default async function (fastify, opts) {
  fastify.get(
    "/:category",
    { websocket: true },
    async ({ socket }, request) => {
      for (const order of fastify.currentOrders(request.params.category)) {
        socket.send(order);
      }
      for await (const order of fastify.realtimeOrders()) {
        if (socket.readyState >= socket.CLOSING) break;
        socket.send(order);
      }
    }
  );
}
```


We have updated the async handler function so that it uses a for of loop to iterate through each stringified object yielded from ``fastify.currentOrders`` based on the requested category. Each of these stringified objects is sent to the client over the WebSocket. Under the for of loop, we have also added a for await of loop to asynchronously iterate over the real time orders, and send each asynchronous yielded stringified object to the client. This results in the client side updating one product item's orders approximately every 1.5 seconds.

To explain the full flow: when the Electronics category is selected, this triggers the input event listener of the category element. This, in turn, calls the realtimeOrders function passing electronics as the argument. The realtimeOrders function creates a WebSocket connection to ``ws://localhost:3000/orders/electronics``, which triggers the WebSocket route handler in ``mock-srv/routes/orders/index.mjs`` on the server side. 

All the current order totals are looped over and sent from the server to the client over the WebSocket connection in the form of a stringified JSON object containing id and total properties. The client side is listening for WebSocket messages, so each time a stringified object is received by the client it is parsed and the id and total values are extracted. The id is used to get a DOM reference to the corresponding <product-item> custom element for that product. The order slot value within the <product-item> element is then updated to the latest total. Meanwhile the server is asynchronously iterating values that are yielded from fastify.realtimeOrders. Every 1500 milliseconds a stringified object containing a product item ID and an updated total is yielded. It is then sent to the client, which updates the order slot of the corresponding ``<product-item>`` element. The async iterable returned from fastify.realtimeOrders is never done, so this loop continues until the socket has closed (when socket.readyState is greater than socket.CLOSING the socket has closed), at which point the break keyword is used to terminate the asynchronous loop.

Now if we start our server (npm run dev in the mock-srv folder) and serve the static assets (npm run static in the project root), then navigate to the [http://localhost:5050](http://localhost:5050) and select any category we should see the orders of all items frequently updating. If we add another item, this should also begin receiving order updates, with the orders initially set to 0.

We have now implemented real-time updates with mock data from server to client. In the next section, we will look at bidirectional communication by extending our server to listen for and respond to real-time messages from the client.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Bidirectional Real-Time Communication (1)

Every time a user selects a different category or adds an item to a category in the web app, the old WebSocket connection is discarded, and a new request is made to establish a new WebSocket connection. Even locally, some may notice a flicker as the order numbers switch to a pending status while the new WebSocket is being established after changing category or adding a new product. Ideally, a client-side application destined for production deployment would use a more optimal approach to switching categories (or asking the server for any state in general), so it would be good to support real-time server mocking of more optimal client-side behavior.

Let's update the client-side realtimeOrders function (along with the socket variable just above it) in ``static/app.js`` to the following:

```JavaScript
let socket = null;
// Realtime orders via Websocket
const realtimeOrders = (category) => {
  if (socket === null) {
    socket = new WebSocket(${WS_API}/orders/${category});
  } else {
    socket.send(
      // Send update-category command to server
      JSON.stringify({ cmd: "update-category", payload: { category } })
    );
  }
  // Listen for messages
  socket.addEventListener("message", ({ data }) => {
    try {
      const { id, total } = JSON.parse(data);
      const item = document.querySelector([data-id="${id}"]);
      if (item === null) return;
      const span =
        item.querySelector('[slot="orders"]') || document.createElement("span");
      span.slot = "orders";
      span.textContent = total;
      item.appendChild(span);
    } catch (err) {
      console.error(err);
    }
  });
};
```

Now there is only ever one socket. This client-side code should also include socket reconnection logic in a production approach. However, our client-side code is to support the understanding of server-side aspects, so we are keeping it as minimally viable as possible regarding learning purposes.

The first time a category is selected via the web app, the WebSocket connection is still established to a particular endpoint that corresponds to the selected category. The next time that category is selected, a stringified object containing a cmd property set to 'update-category' and a payload property set to the newly selected category is sent over the real-time connection.


---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Bidirectional Real-Time Communication (2)

Now we need to update our server to support this. Let's update the ``mock-srv/routes/orders/index.mjs`` file to the following code:


```JavaSCript
"use strict";
export default async function (fastify, opts) {
  function monitorMessages(socket) {
    socket.on("message", (data) => {
      try {
        const { cmd, payload } = JSON.parse(data);
        if (cmd === "update-category") {
          sendCurrentOrders(payload.category, socket);
        }
      } catch (err) {
        fastify.log.warn(
          "WebSocket Message (data: %o) Error: %s",
          data,
          err.message
        );
      }
    });
  }

  function sendCurrentOrders(category, socket) {
    for (const order of fastify.currentOrders(category)) {
      socket.send(order);
    }
  }

  fastify.get(
    "/:category",
    { websocket: true },
    async ({ socket }, request) => {
      monitorMessages(socket);
      sendCurrentOrders(request.params.category, socket);
      for await (const order of fastify.realtimeOrders()) {
        if (socket.readyState >= socket.CLOSING) break;
        socket.send(order);
      }
    }
  );
}
```


---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Bidirectional Real-Time Communication (3)

We have added two functions: monitorMessages and sendCurrentOrders. The sendCurrentOrders function just factors out the for of loop that was in the body of the route handler function because the same logic is now used in the route handler function and in the monitorMessages function. The monitorMessages function accepts the socket instance as an argument and attaches a message listener to it. The listener function will be called every time the client calls the send method of the client-side WebSocket instance. The incoming data is parsed, and the cmd and payload properties are extracted. If the cmd argument is valid (which in this case means if it is the string 'update-category') then the sendCurrentOrders function is called with the value of payload.category. As discussed in the prior section, any unrecognized categories will not cause any issues in fastify.currentOrders generator function, it will just end without yielding any values (so the for of loop will end with zero iterations). The monitorMessages function does guard against corrupt JSON data coming over the WebSocket by wrapping the JSON.parse call in a try/catch block. In the event of an error, we use Fastify's built-in logger to output that error. This could be useful in debugging any problems if the web app is to be further extended in the future.

Now, if we start our server (npm run dev) and serve the static assets (npm run static), navigate to http://localhost:5050, and select between categories and/or add new products, the functionality should be exactly the same but with a slightly faster flicker. It's important to note that the client-side would need to become a little more complex to avoid such a flicker. As we have discussed, we are not trying to build a full-featured perfect client; we are really just establishing an approach for bidirectional communication between client and server - which we have now achieved. This bidirectional functionality can be used for a lot more than switching categories, but the approach to supporting this in Node.js is broadly the same regardless.

In the next section, we will implement an API that allows the real-time orders to be updated, a sort of web hook for product order updates.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Modifying and Receiving Server-Side State in Real-Time (1)

As we have discussed, holding state in a Node process is not ideal, but we can still mock-out a real-time server with its own state in lieu of a more appropriate database for the task. Similarly, we can implement an approach to updating server-side state, which could later integrate with a database if the service was to be moved towards a production use-case.

We are going to add a POST route for the  /orders/{ID} endpoint. This will accept POST requests that increment the total for a given product. The WebSocket connection will no longer have simulated orders sent across it, only the current order totals and then any new order totals resulting from POST requests to the /orders/{ID} endpoint.

We'll add the new POST route in mock-srv/routes/orders/index.mjs by modifying it to the following:

```JavaScript
"use strict";

export default async function (fastify, opts) {
  function monitorMessages(socket) {
    socket.on("message", (data) => {
      const message = JSON.parse(data);
      try {
        if (message.cmd === "update-category") {
          return sendCurrentOrders(message.payload.category, socket);
        }
      } catch (err) {
        fastify.log.warn(
          "WebSocket Message (data: %o) Error: %s",
          message,
          err.message
        );
      }
    });
  }

  function sendCurrentOrders(category, socket) {
  const orders = Array.from(fastify.currentOrders(category));
  for (const order of orders) {
    socket.send(order);
  }
}

  fastify.get(
    "/:category",
    { websocket: true },
    async ({ socket }, request) => {
      monitorMessages(socket);
      sendCurrentOrders(request.params.category, socket);
      for await (const order of fastify.realtimeOrders()) {
        if (socket.readyState >= socket.CLOSING) break;
        socket.send(order);
      }
    }
  );

  fastify.post("/:id", async (request) => {
    const { id } = request.params;
    fastify.addOrder(id, request.body.amount);
    return { ok: true };
  });
}
```
 
---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Modifying and Receiving Server-Side State in Real-Time (2)

Everything is the same way we left it in the prior section, except there is an additional call to fastify.post near the end of the file. This sets up the route: /:id. When a POST request is made, the id is destructured from request.params and passed to the fastify.addOrder method along with request.body.amount. We haven't decorated the fastify instance with this method yet. We will do so shortly in ``mock-srv/plugins/data-utils.mjs``. It then returns an object with the ok property set to true, which will cause Fastify to send the corresponding serialized JSON to the client.

Let's alter the top of ``mock-srv/plugins/data-utils.mjs`` to the following:

```JSON
"use strict";
import fp from "fastify-plugin";
import { PassThrough } from "node:stream";
import { promisify } from "node:util";


// Promisify setTimeout
const timeout = promisify(setTimeout);

// Mock data
const orders = {
  A1: { total: 3 },
  A2: { total: 7 },
  B1: { total: 101 },
};

// Map category to ID prefix
const catToPrefix = {
  electronics: "A",
  confectionery: "B",
};
```

The orders and catToPrefix objects are the same, but we've gotten rid of the promisify function and the timeout function it was used to create. Now we are loading the PassThrough constructor from the streams module. We won't be needing the timeout function any more and we are going to use a PassThrough stream to route order updates through.

Node.js streams represent continuous data and have quite a vast API. There are readable streams, writable streams, and hybrid streams that are both readable and writable (duplex, transform, and passthrough streams). One very useful characteristic of readable streams is they are async iterables, which means we can use the same for await of loops on them that we use in the WebSocket route handler in mock-srv/routes/orders/index.mjs. A Node passthrough stream sends any writes straight to its readable side with no modifications. We can use the PassThrough constructor to create a passthrough stream to represent the continuous flow of orders that can be sent via POST requests to the /orders/{id} route. For more information on Node streams see the following resources:

- [Node.js Documentation](https://nodejs.org/docs/latest-v18.x/api/stream.html)

- ["Stream.PassThrough"](https://nodejs.org/docs/latest-v18.x/api/stream.html#class-streampassthrough)

- ["Streams Compatibility with async Generators and async Iterators"](https://nodejs.org/docs/latest-v18.x/api/stream.html#streams-compatibility-with-async-generators-and-async-iterators)

Let's remove the realtimeOrdersSimulator async generator function and replace it with the following:


```JavaScript
// Create a stream of orders
const orderStream = new PassThrough({ objectMode: true });

// Simulate real-time orders
async function* realtimeOrdersSimulator() {
  for await (const { id, total } of orderStream) {
    yield JSON.stringify({ id, total });
  }
}
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Modifying and Receiving Server-Side State in Real-Time (3)

We create an object-mode passthrough stream named orderStream. By default, Node streams work with binary data. Object-mode streams can have objects written to them. The realtimeOrders function uses a for await of loop to asynchronous iterate of the orderStream and yields out a serialized object containing the id and total values extracted from any objects that may be written to orderStream. Next, we will implement the addOrders function that will write to the orderStream, which will, in turn, drive this for await of loop in the realtimeOrders async generator function.

Under the realtimeOrders function, let's add the following to ``mock-srv/plugins/data-utils.mjs``:

```JavaScript
// Add order to stream and update total
function addOrder(id, amount) {
  if (orders.hasOwnProperty(id) === false) {
    const err = new Error(Order ${id} not found);
    err.status = 404;
    throw err;
  }
  if (Number.isInteger(amount) === false) {
    const err = new Error('Supplied amount must be an integer');
    err.status = 400;
    throw err;
  }
  orders[id].total += amount;
  const { total } = orders[id]
  console.log("Adding order: %o", { id, total });
  orderStream.write({ id, total });
}
```


In the next step, we will decorate the fastify instance with this function. This is the function we are calling from our new POST route that we created earlier. If the id isn't in our orders object, an error is thrown with the status property set to 404. Since this throw will occur inside the async function handler of the POST /:id route, this error will be picked up by Fastify and converted into an HTTP 404 Not Found response. There's (usually) no such thing as a fraction of an order, so we check that the incoming amount is an integer using Number.isInteger. This is useful in also weeding out NaN, Infinity and -Infinity which would all have a type of number. It does not enforce positive numbers, so it's possible to reduce the order count as well with this implementation. If the amount value is not an integer an error is thrown with a 400 status code which Fastify will convert into an HTTP 400 Bad Request response. It's worth pointing out that it is far better to do type checking of POST body data using Fastify schemas, and it is only for the sake of brevity and focus that we have not done so here. It is left as an exercise to remove this particular check from the addOrder function and instead use a route schema.

See the section on [validation and serialization](https://www.fastify.io/docs/v3.10.x/Validation-and-Serialization/) from Fastify's Documentation for more information.


All being well, the amount is added to the total for the given id. Then the id and new total are placed into an object written to the orderStream.

The final part of mock-srv/plugins/data-utils.mjs should look like so:

```JavaScript
// Plugin
export default fp(async function (fastify, opts) {
  fastify.decorate("currentOrders", currentOrders);
  fastify.decorate("realtimeOrders", realtimeOrdersSimulator);
  fastify.decorate("addOrder", addOrder);
  fastify.decorate("mockDataInsert", function (request, category, data) {
    const idPrefix = catToPrefix[category];
    const id = calculateID(idPrefix, data);
    data.push({ id, ...request.body });
    return data;
  });
});
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Modifying and Receiving Server-Side State in Real-Time (4)

The exported plugin function has been updated, so the realtimeOrders decorator now references our new realtimeOrders function (whereas previously, it referenced the realtimeOrdersSimulator function). It also adds one more decorator to the fastify instance: addOrder, which references the addOrder function we just wrote. This is the method we use for our new POST route.

The contents of ``mock-srv/plugins/data-utils.mjs`` file should now look as follows:


```JavaScript
"use strict";
import fastify from "fastify";
import fp from "fastify-plugin";
import { PassThrough } from "node:stream";

 

// Mock data
const orders = {
  A1: { total: 3 },
  A2: { total: 7 },
  B1: { total: 101 },
};

// Map category to ID prefix
const catToPrefix = {
  electronics: "A",
  confectionery: "B",
};

// Create a stream of orders
const orderStream = new PassThrough({ objectMode: true });

// Simulate real-time orders
async function* realtimeOrdersSimulator() {
  for await (const { id, total } of orderStream) {
    yield JSON.stringify({ id, total });
  }
}

// Add order to stream and update total
function addOrder(id, amount) {
  if (orders.hasOwnProperty(id) === false) {
    const err = new Error(Order ${id} not found);
    err.status = 404;
    throw err;
  }
  if (Number.isInteger(amount) === false) {
    const err = new Error('Supplied amount must be an integer');
    err.status = 400;
    throw err;
  }
  orders[id].total += amount;
  const { total } = orders[id]
  orderStream.write({ id, total });
}

// Return current orders
function* currentOrders(category) {
  const idPrefix = catToPrefix[category];
  if (!idPrefix) return;
  const ids = Object.keys(orders).filter((id) => id[0] === idPrefix);
  for (const id of ids) {
    yield JSON.stringify({ id, ...orders[id] });
  }
}

// Calculate next ID
const calculateID = (idPrefix, data) => {
  const sorted = [...new Set(data.map(({ id }) => id))];
  const next = Number(sorted.pop().slice(1)) + 1;
  return ${idPrefix}${next};
};

// Plugin
export default fp(async function (fastify, opts) {
  debugger
  fastify.decorate("currentOrders", currentOrders);
  fastify.decorate("realtimeOrders", realtimeOrdersSimulator);
  fastify.decorate("addOrder", addOrder);
  fastify.decorate("mockDataInsert", function (request, category, data) {
    const idPrefix = catToPrefix[category];
    const id = calculateID(idPrefix, data);
    data.push({ id, ...request.body });
    return data;
  });
});
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Modifying and Receiving Server-Side State in Real-Time (5)

The entire "happy-path" for this new feature is as follows:

Once a client establishes a WebSocket connection with the server, it receives all the current order totals for the selected category. Then the for await of loop in the /orders/{category} WebSocket route handler begins waiting for a new serialized order object to be yielded from the async iterable returned from fastify.realtimeOrders. If a valid POST request is then made to /orders/{ID} for a particular ID (one corresponding to a product in the currently selected category within the web app) then the amount indicated in the POST request is added to the order tally for that item.

The async iterable returned from the fastify.realtimeOrders async generator function which is being awaited in the /orders/{category} WebSocket route handler will then yield a serialized object containing the new total and the product ID, which will then be written to the socket instance. The client will receive this serialized object, parse it and then add the new total to the corresponding order slot of the <product-item> element in the web app.

The for await of loop in the /orders/{category} WebSocket route handler will then again be waiting for the next serialized order object to be yielded from the async iterable. The reason the async iterable returned from realtimeOrders yields the new total as a result of the POST request's given amount is that the addOrders function calls the write method of the orderStream passthrough stream. The passthrough stream is itself an async iterable, and the realtimeOrders async generator function is using a for await of loop to asynchronously iterate through each object that is written to orderStream so that it can yield the id and total properties in a serialized object.

If the prior explanation is a little unclear, it may become clearer by trying out the functionality and then re-reading it afterward. Let's start our server and web app by running npm run dev in the mock-srv folder and npm run static in the project root. If we navigate to http://localhost:5050 and select the Electronics category, we will see our two products with order counts of 3 and 7, respectively. If we now run the following command in a third terminal window, we can execute a POST request to add Vacuum Cleaner orders:


```
$ node -e "http.request('http://localhost:3000/orders/A1', { method: \ 'POST', headers: {'content-type': 'application/json'}}, (res) => \ res.pipe(process.stdout)).end(JSON.stringify({amount: 10}))"
```

Or you can use curl to make the request from the terminal:

```
$ curl -X POST -H "Content-Type: application/json" -d '{"amount": 10}' http://localhost:3000/orders/A1
```


This makes a POST request to http://localhost:3000/orders/A1 with a JSON payload of {"amount": 10}.

This command should output {"ok":true} (which is the HTTP response body) to the terminal and exit.

Note that the total orders for the Vacuum Cleaner have increased from 3 to 13.

---

