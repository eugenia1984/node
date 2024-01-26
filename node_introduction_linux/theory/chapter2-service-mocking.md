## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Starting a Node Project

To start a Node project, you need to create a `package.json` file, which serves as a manifest for the project's dependencies and metadata. The `package.json` file is a crucial component of a Node.js project.

To create a `package.json` file and initialize a Node project in your current working directory, use the following command in the terminal:

`$ npm init`

By running npm init, you will be prompted to enter the necessary details for your project. This includes information such as the project name, version, description, entry point file, author, license, and more. You can provide these details by answering the prompts in the terminal.

For example:

```
name: my-node-project
version: 1.0.0
description: A sample Node.js project
entry point: index.js
author: John Doe
license: MIT
```

After providing the required information, the npm init process will generate a `package.json` file in your current directory. Upon opening the `package.json` file, you will see that the details you entered during the prompt in the terminal are now populated within the file.

The `package.json` file plays a vital role in managing dependencies, scripts, and other project configurations. It allows you to specify the dependencies required for your project, define scripts for running various tasks, and provide metadata about your project.

The first step when starting a new Node.js project is to create a `package.json` file using npm init. It sets up the foundation for managing your project and its dependencies effectively.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Quick File Server (1)

1. To serve files from a folder, we can use the **serve package**. Start by installing it using the following command in your terminal: `$ npm install serve`

2. Once installed, complete the steps as they are described throughout this section.

3. The first step is to create a new folder called static in your project directory. You can do this by running the following command: `$ mkdir static`

Feel free to use any preferred method to create the static folder.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Quick File Server (2)

The second step is to create two files inside the static folder labeled index.html and app.js. Place the respective code into each file as shown below:

- `index.html` Folder:

```HTML
<html>
  <head>
    <title>My App</title>
    <script type="module" src="app.js"></script>
    <style>body { background: #fad8d8 }</style>
  </head>
  <body>
    <nav>
      <button id="fetch">Fetch Products</button>
    </nav>
    <hr>
    <div id="products"></div>
    <template id="item">
      <style>
        details { font-size: 1.5em; }
        summary { cursor: pointer; }
        p { text-indent: 1.5rem; }
      </style>
       <details>
        <summary>
          <strong>
            <slot name="name"></slot>
          </strong> - <em><slot name="rrp"></slot></em>
        </summary>
        <p><slot name="info"></slot></p>
      </details>
    </template>
  </body>
</html>
```

- `app.js` Folder:

```JavaScript
const mockData = [
{id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The most powerful vacuum in the world.'},
{id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
{id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Deliciously overpriced chocolate.'}
]
const populateProducts =() => {
const products = document.querySelector('#products')
products.innerHTML = ''
for (const product of mockData) {
const item = document.createElement('product-item')
for (const key of ['name', 'rrp', 'info']) {
const span = document.createElement('span')
span.slot = key
span.textContent = product[key]
item.appendChild(span)
}
products.appendChild(item)
}
}

document.querySelector('#fetch').addEventListener('click', async () => {
await populateProducts()
})

customElements.define('product-item', class Item extends HTMLElement {
constructor() {
super()
const itemTmpl = document.querySelector('#item').content.cloneNode(true)
this.attachShadow({mode: 'open'}).appendChild(itemTmpl)
}
})
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Quick File Server (3)

Next, navigate to the directory that contains the static folder within the terminal.

Then use the following command to start the file server: `$ npx serve -p 5050 static`

This command will start the file server on port 5050 and serve the contents of the static folder:

Now, you can open your browser and navigate to [http://localhost:5050](http://localhost:5050). You should see the web page with the Fetch Products button.

Click the **Fetch Products** button to populate the web page with some data.

You can also expand these sections by clicking on them.

The data that generates the information in these elements is currently embedded in the client side code within `app.js`.

Feel free to customize the content of the `index.html` and `app.js` files according to your requirements.

---

### Quick File Server (Summary)

In this section, we installed the serve package and created a static folder to store our web application files. We placed an `index.html` file and an `app.js` file in the static folder, which contain the necessary HTML and JavaScript code for our simple web application.

By running the serve command with the appropriate options, we started a file server that hosts our static folder on port 5050. This allows us to access our web application in the browser by visiting [http://localhost:5050](http://localhost:5050).

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Creating NPM Shell Commands

Repeating frequently used shell commands can become laborious, especially when working with the terminal on a regular basis. However, we can alleviate this burden by creating custom Node Package Manager (NPM) shell commands. These commands are defined within the package.json file, specifically under the scripts object.

To create a custom NPM shell command, add the following lines to the scripts object in your package.json file:

```JSON
"scripts": {
  "static": "serve -p 5050 static",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

In the above example, we have defined two shell commands: static and test.

- The static command executes serve -p 5050 static, which starts the file server on port 5050.

- The test command echoes an error message.

Use the `npm run` command, followed by the script name, to execute these commands in the terminal. For instance: `$ npm run static`

By running `npm run static`, the defined static script will be executed, which will start the file server for you.

This recommended practice of creating **NPM** shell commands reduces the repetitiveness of entering long and complex shell commands. As we progress through this course, we will utilize more of these shell commands to enhance our workflow.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking a Web Service (1)

We are going to continue working in the same project folder and making alterations to prior sections as we go.

In the last section we created a **static** folder with an `index.html` file and an `app.js` file.

The top of the `app.js` file in the prior section contained the following data array:

```JavaScript
const mockData = [
  {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The most powerful vacuum in the world.'},
  {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Deliciously overpriced chocolate.'}
]
```

This array represents mock data, with a structure similar to what we would expect from a real-world production service that our frontend application would integrate with.

However, including mock data in the client-side code could make it convoluted, and does not accurately represent the behavior we would expect from a production application since there is no remote fetching involved. It also complicates the transition from a local development to a live environment. We would need conditional logic to either inject mock data into the client-side code, or inject remote fetching logic instead. This criticism would also be true for any type of integration, such as writing a web service that is supposed to fetch data from another web service that we do not have access to.

A better approach in both cases is to place that mock data in a mock service that runs locally. Then the conditional logic for deploying to staging or production would be around which URL to fetch from, instead of alternating between entire sections of code.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking a Web Service (2)

Continuing in the same project folder as before, let's modify the `static/app.js` as follows:

```JavaScript
const API = "http://localhost:3000/"

const data = [
  {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The most powerful vacuum in the world.'},
  {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Deliciously overpriced chocolate.'}
]

const populateProducts = async () => {
    const products = document.querySelector('#products')
    products.innerHTML = ''
    const res = await fetch(API)
    const data = await res.json()
    for (const product of data) {
      const item = document.createElement('product-item')
      for (const key of ['name', 'rrp', 'info']) {
        const span = document.createElement('span')
        span.slot = key
        span.textContent = product[key]
        item.appendChild(span)
      }
      products.appendChild(item)
    }
  }

  document.querySelector('#fetch').addEventListener('click', async () => {
    await populateProducts()
  })



  customElements.define('product-item', class Item extends HTMLElement {
    constructor() {
      super()
      const itemTmpl = document.querySelector('#item').content
      this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
    }
  })
```

The inline array assigned to the data constant is now replaced with:

```JavaScript
const res = await fetch(API)
const data = await res.json()
```

This code will fetch data from whatever string the API constant holds, with the expectation that the response will contain JSON data. It will then parse the JSON data into the corresponding JavaScript data-structure – which will be an array in our case.

The **API** constant is as follows: `const API = "http://localhost:3000/"`

We are creating our **mock web service**, which lets us serve data from [http://localhost:3000](http://localhost:3000). The idea is that this API string can now be replaced with the appropriate host, based on the context. For example, a build pipeline could replace the API string with a production domain that resolves to the actual production service that our mock web service aims to mimic.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking a Web Service (3)

If we now create a local file server from the static folder like we did in the last section (using serve -p 5050 static), we find that navigating to http://localhost:5050 and clicking on the Fetch Products button will not update the UI. However, if we open the browser DevTools (in Chrome, you can right-click the page and click Inspect) and go to the Console tab, we should see something like the following image:

`Failed to load resouce: net....
Uncaught (in promise) TypeError: Failed to fetch`

This occurs because the application is now attempting to fetch the mock data remotely, but we have not created the mock service yet! Let us begin to correct this by proceeding with creating our mock web service.

So far, the requirements are straightforward – the application fetches an array of data and displays it. For simple cases, we can use Node.js without any ecosystem dependencies.

Let's create a file called `server.mjs` at the top level of our project (**next** to the **static** folder, **not inside** it) and place the following code in it:

```JavaScript
'use strict';
import { createServer } from "node:http";

const data = JSON.stringify([
  {
    id: "A1",
    name: "Vacuum Cleaner",
    rrp: "99.99",
    info: "The most powerful vacuum in the world.",
  },
  {
    id: "A2",
    name: "Leaf Blower",
    rrp: "303.33",
    info: "This product will blow your socks off.",
  },
  {
    id: "B1",
    name: "Chocolate Bar",
    rrp: "22.40",
    info: "Delicious overpriced chocolate.",
  },
]);

const server = await createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Set Content-Type header to JSON
  res.writeHead(200, { "Content-Type": "application/json" });
  // Send data
  res.end(data);
});

server.listen(3000);
console.log("Server listening on port http://localhost:3000/")
```

In the code above, we utilize the **createServer** function from the Node.js core **http** module to create an HTTP server. The data array that was previously in `app.js` is now defined within our new `server.mjs` file as a JSON string. When calling the **createServer** function, it returns a server instance.

By calling **server.listen(3000)**, we instruct the HTTP server, which listens on **port 3000**. The **createServer** function accepts a function known as the request handler. The request handler receives two arguments, which we name **req** (request) and **res**(response).

The **req** object provides an API for interacting with the **incoming HTTP request**. It is an instance of **http.IncomingMessage**. You can find its full API documentation here.

The **res** object provides an API for specifying the **outgoing response**. Its full API documentation can be found here.

We use the **setHeader** and end methods of the res object. The res.end(data) call sends our data JSON string as the body of the HTTP response, and then ends the connection.

The first **res.setHeader** call sets the **Access-Control-Allow-Origin** HTTP header to `*`. The browser security model includes a mechanism called **Cross-Origin Resource Sharing (CORS)** that, by default, does not allow cross-domain requests. Since our hosted web app is served on [http://localhost:5050](http://localhost:5050) and our service is hosted on [http://localhost:3000](http://localhost:3000), requests from our web app to our service are considered cross-domain requests. To allow the browser to make this request, the service needs to explicitly allow it via the **Access-Control-Allow-Origin header**. When we set **Access-Control-Allow-Origin** to `*`, it allows all domains access. This is suitable for local development. For more information, you can refer to [Mozilla Developer Network (MDN) CORS documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and [MDN Access-Control-Allow-Origin documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin).

The second **res.setHeader** call sets the HTTP **Content-Type** header to **application/json** and sends the mock data as the response body using **res.end(data)**. This indicates to the browser client (we use the native fetch function) that the response is JSON and can be parsed as such.

It is important to note that our server does not have routing capabilities. Regardless of the requested route or HTTP method used, the response will always be the same. This is a quick and simple solution for basic scenarios. In the following sections, we will discuss a faster path to create more complex service APIs with routing and support for different HTTP methods.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking a Web Service (4)

Our project folder should now have the following structure:

```
├── package-lock.json
├── package.json
├── server.mjs
└── static
    ├── app.js
    └── index.html
```

Now, open two terminal windows and navigate to your project directory. In the first terminal window, start the mock service by running: `$ node server.mjs`

In the second terminal window, serve the files using the NPM shell command we created earlier: `$ npm run static`

If you navigate to [http://localhost:5050](http://localhost:5050) in your browser and click the Fetch Products button, you should see the data being fetched from the mock service and displayed on the web page.

If you navigate to [http://localhost:5050](http://localhost:5050) in your browser and click the Fetch Products button, you should see the data being fetched from the mock service and displayed on the web page.Data Displayed in App by Fetch Products Button

```
Fetch Products
> Vacuum Cleaner - 99.9
> Leaf Blower - 303.33
> Chocolate Bar - 22.40
```

If we expand the sections we should also see the following:

```
Fetch Products
> Vacuum Cleaner - 99.9
  The suckiest vaccum in the world.
> Leaf Blower - 303.33
  This product will blow your sock off.
> Chocolate Bar - 22.40
  DEllicious overpriced chocolate.
```

The basic functionality of our online application remains the same, but we have moved the sample data out of the client-side code and into a separate mocked service. This separation allows us to simulate the behavior of a real production service by running the mock service locally. It also enables us to easily switch between using a mock service during development and using a real service in production.

In the following sections, we will further enhance our mock service to support more advanced features such as routing and handling different HTTP methods.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (1)

In the previous sections, we modified the static/app.js file to fetch data from a specified API. Now, let's create a mock web service using Fastify to handle the GET requests..

First, let's remove the server.mjs file we created earlier: `$ rm server.mjs`

Next, modify the static/index.html file to the following:

```HTML
<html>
  <head>
    <title>My App</title>
    <script type="module" src="app.js"></script>
    <style>body { background: #fad8d8 }</style>
  </head>
  <body>
    <nav>
      <select id="category">
        <option value="" hidden>Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="confectionery">Confectionery</option>
      </select>
    </nav>
    <hr>
    <div id="products"></div>
    <template id="item">
      <style>
        details { font-size: 1.5em; }
        summary { cursor: pointer; }
        p { text-indent: 1.5rem; }
      </style>
       <details>
        <summary>
          <strong>
           <slot name="name"></slot></strong> -
           <em><slot name="rrp"></slot></em>
        </summary>
        <p><slot name="info"></slot></p>
      </details>
    </template>
  </body>
</html>
```

The Fetch Products button has been replaced with a selector element for choosing the category.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
