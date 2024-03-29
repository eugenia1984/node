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

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (2)

Next, modify the static/app.js file to the following:

```JavaScript
const API = 'http://localhost:3000'

const populateProducts = async (category) => {
const products = document.querySelector('#products')
products.innerHTML = ''
const res = await fetch(${API}/${category})
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

const category = document.querySelector('#category')

category.addEventListener('input', async ({ target }) => {
await populateProducts(target.value)
})

customElements.define('product-item', class Item extends HTMLElement {
constructor() {
super()
const itemTmpl = document.querySelector('#item').content
this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
}
})
```

In the updated code, we have replaced the button-click event listener with an input event listener on the select element.

The populateProduct function now accepts a category argument and the call to fetch has been updated to: `const res = await fetch(${API}/${category})`

In this updated code, when a category is selected, the populateProducts function is called with the selected value. The populateProducts function makes a GET request to the specified category endpoint using the Fetch API. So ultimately, we need our mock service to support two routes:

`GET http://localhost:5050/electronics
GET http://localhost:5050/confectionery`

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (3)

Now, let's create the mock service using the Fastify framework. Fastify is a Node.js web framework that is built for rapid implementation and high performance. For more information, see Fastify.

First, create a folder named **mock-srv** in your project directory and navigate into it:

```BASH
$ mkdir mock-srv
$ cd mock-srv
```

Next, install the Fastify framework and its command-line interface using the following command: `$ npm add fastify fastify-cli`

This step should not take long and is more dependent on the speed of the internet connection. Here, we are connecting to the **NPM** registry to obtain both the Fastify framework and its command line tool that will assist us in getting setup with Fastify in the next section.

Once the installation is complete, generate a Fastify project scaffold by running the following command within the mock-srv folder: `$ npx fastify generate . --esm`

This will generate the necessary files and directories for a Fastify project.

More information on the fastify generate command can be found here: [GitHub - fastify/fastify-cli: Run a Fastify application with one command!](https://github.com/fastify/fastify-cli#generate)

Our **mock-srv** directory should now contain the following files and directories:

```
mock-srv/
├── README.md
├── app.js
├── package.json
├── plugins
│ ├── README.md
│ ├── sensible.js
│ └── support.js
├── routes
│ ├── README.md
│ ├── example
│ │ └── index.js
│ └── root.js
└── test
├── helper.js
├── plugins
│ └── support.test.js
└── routes
├── example.test.js
└── root.test.js
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (4)

With Fastify now scaffolded out successfully within our **mock-srv/** we need to run a few more commands to get going. First, we need to **install** the Fastify project’s dependencies – modules from the NPM registry that Fastify relies upon to perform as a server.

Now, install the project dependencies by running the following command: `$ npm install`

With our project now setup, we can launch the Fastify server to see if everything is working by running the command: `$ npm start`

This will run Fastify as if it were in a ‘production’ environment. If your system is not respecting relative imports, you will see the following error upon starting the server:

`Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@fastify/autoload'`

This problem would require you to use an ‘absolute’ route for the modules you are trying to import into our files. In this case, **import Autoload from ‘@fastify/autoload** cannot be used and we would have to make a slight modification to the **mock-srv/app.js** file:

```
- import AutoLoad from '@fastify/autoload'
// Relative import path "@fastify/autoload" not prefixed with /, ./ or ../
+ import {fastifyAutoload as AutoLoad} from './node_modules/@fastify/autoload/index.js'
```

We should see the following in the console:

```
> mock-srv@1.0.0 start
> fastify start -l info app.js

{"level":30,"time":1683644957813,"pid":16532,"hostname":"My_Comp_Name","msg":"Server listening at http://127.0.0.1:3000"}
```

To quit the active shell process an Abort Signal must be sent to the running process. We can do this by entering `<Ctrl> + C` in the console.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (5)

With assurance that our Fastify server is now set up, we need to do a couple of more things to get our **mock web service** ready.

- Setup CORS access

- Create our two GET routes

1. First, we use **NPM** to install the fastify-cors plugin: `$ npm install @fastify/cors`

2. Next, open the **mock-srv/app.js** file and replace its content with the following:

```JavaScript
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import AutoLoad from '@fastify/autoload'
import cors from '@fastify/cors'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// Pass --options via CLI arguments in command to enable these options.
export const options = {}


export default async function (fastify, opts) {
  // Place here your custom code!
  fastify.register(cors)
  // Do not touch the following lines


  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })


  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
```

In the updated code, we import the necessary modules and plugins for Fastify, including @fastify/cors for enabling CORS support. We then register the CORS plugin and load the plugins and routes using AutoLoad.

```
// Place here your custom code!
fastify.register(cors)
```

This will ensure that the same Access-Control-Allow-Origin HTTP header that we manually set in the last section will be added for every route we create.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (6)

Finally, we will create the two routes. To devise a route, we can create a folder with an `index.mjs` file inside the routes folder.

With mock-srv as our current working directory, let's create our route folders with the following commands:

```BASH
$ cd routes
$ mkdir confectionery
$ mkdir electronics
$ cd ..
```

Now let's create the mock-srv/routes/confectionery/index.mjs file with the following content:

```JavaScript
"use strict";
const data = [
{
id: "B1",
name: "Chocolate Bar",
rrp: "22.40",
info: "Delicious overpriced chocolate.",
},
];
export default async function (fastify) {
fastify.get("/", async function (request, reply) {
return data
})};
```

Fastify works by dividing the service up into plugins. A plugin is a module that exports a function. The exported function is passed a Fastify instance and options. Here, we have created a route plugin, as opposed to a server plugin, which would go into the plugins folder.

The Fastify instance can be used to register a GET route by calling fastify.get. The fastify.get method is passed a string representing the path and route handler function. When the route handler is an async function, like ours, whatever we return from that function is sent to the response. If a JavaScript object or array is returned, then Fastify converts it into a JSON response. We return an array containing the confectionery item from our mock data. For more on Fastify routing see [https://www.fastify.io/docs/v3.9.x/Routes/](https://www.fastify.io/docs/v3.9.x/Routes/).

The name of the folder sets the path prefix for the route. So if we were to set up a GET route with `fastify.get('/foo', …)`, then it would be mounted at `/confectionery/foo`. We set up a route `fastify.get('/', …)`, so it is mounted at `/confectionery/ or /confectionery`. One benefit of this nomenclature is that we can rename the folder at any time to update the top-level route without changing any code.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (7)

Now let's create the mock-srv/routes/electronics/index.js file with the following content:

```JavaScript
"use strict";

const data = [
  {
    id: "A1",
    name: "Vacuum Cleaner",
    rrp: "99.99",
    info: "The suckiest vacuum in the world.",
  },
  {
    id: "A2",
    name: "Leaf Blower",
    rrp: "303.33",
    info: "This product will blow your socks off.",
  },
];

export default async function (fastify) {
fastify.get("/", async function (request, reply) {
return data;
})}
```

This is exactly the same as our `mock-srv/routes/confectionery/index.js` except that it returns an array of our electronics items from our mock data instead.

Now we have a pattern for a route that responds with any mock data we like. First, create a folder in routes with an index.js file. The folder name will determine the top-level path of the route. The index.js file should contain the following:

```JavaScript
"use strict";

export default async function (fastify) {
  fastify.get("/", async function (request, reply) {{
     return {DATA HERE};
  });
}
```

Where `{DATA HERE}` is whatever mock data we wish to send as a response for that route.

Although we are not using them yet, it's important to note that the route handler function also passes request and reply objects. These are conceptually the same, but functionally different to the req and res objects passed to the Node core http.createServer request listener function, because they have their own (higher level) APIs or context. See `https://www.fastify.io/docs/v3.9.x/Request/` and `https://www.fastify.io/docs/v3.9.x/Reply/` for full information on their APIs.

Now let's open two consoles, one with the current working directory set to our project folder and the other with the current working directory set to the mock-srv folder.

In the first terminal, we move back to the current working directory, which is set to our project folder, and run our 'static' script command: `$ cd .. && npm run static`

In the second terminal window that still has the current working directory set to the mock-srv folder, execute the following: `$ npm run dev`

The second terminal window should look similar to the following:

The second terminal window that still has the current working directory set to the mock-srv folder, after the the following command is executed: `$ npm run dev`

Terminal Window: `mock-serv % npm run dev`, will display: `Server listening at http://127.0.0.1:3000`

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (8)

Now, if you navigate to [http://localhost:5050](http://localhost:5050) in your browser, you will see the web page with the category selector. When you select a category, the mock data for that category will be fetched from the corresponding endpoint in the mock service (e.g., `http://localhost:3000/electronics` or `http://localhost:3000/confectionery`) and displayed on the page.

-> You will see a web page with category selector

- If we select the Electronics category we should see the following change:

```
Electronics

> Vacuum Cleaner - 99.99
> Leaf Blower - 303.33
```

- If we check our second terminal window again, it should now look similar to the following:

```
Server listening at http://127.0.0.1:3000
incoming request GET xxx / electronics
request completed 4ms
```

We can see that the GET request to the `/electronics` route has been made and completed.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Mocking GET Routes (9)

Likewise, if we now select the Confectionery category, we should see the following in the browser:

```
Confectionery

> Choclate Bar - 22.40
```

In a similar manner the second terminal will also be updated to the following:

```
Server listening at http://127.0.0.1:3000
incoming request GET xxx / electronics
request completed 4ms
incoming request GET xxx / confectionary
request completed 0ms
```

## By mocking the GET routes in our local mock service, we can separate the client-side code from the data source and simulate the behavior of a real production service during development.

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Creating POST Routes (1)

In this section, we will extend our mock web service to handle POST routes for adding new items to a category.

First, let's update the static/index.html file to include a form element for adding new items.

Replace the existing static/index.html content with the following code:

```HTML
<html>
  <head>
    <title>My App</title>
    <script type="module" src="app.js"></script>
    <style>
      body {
        background: #fad8d8;
      }
      #add {
        margin-top: 1em;
        width: 20rem;
        display: none;
      }
      #add input {
        margin-bottom: 0.5em;
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
        float: right;
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
        </summary>
        <p><slot name="info"></slot></p>
      </details>
    </template>
  </body>
</html>
```

In the updated code, we have added a form element (<form id="add">) with input fields for name, rrp, and info. The form is initially hidden (display: none;). It will be displayed when a category is selected.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Creating POST Routes (2)

Now, let's update the static/index.html file to handle the form submission and send a POST request to the mock service. Replace the existing static/app.js content with the following code:

```JavaScript
'use strict'

// API URL
const API = 'http://localhost:3000'

// Populate products from API method
const populateProducts = async (category, method = 'GET', payload) => {
  const products = document.querySelector('#products')
  products.innerHTML = ''
  const send = method === 'GET' ? {} : {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  }
  const res = await fetch(${API}/${category}, { method, ...send })
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

// Get elements from DOM
const category = document.querySelector('#category')
const add = document.querySelector('#add')

// Populate products
category.addEventListener('input', async ({ target }) => {
  add.style.display = 'block'
  await populateProducts(target.value)
})

// Add product
add.addEventListener('submit', async (e) => {
  e.preventDefault()
  const { target } = e
  const payload = {
    name: target.name.value,
    rrp: target.rrp.value,
    info: target.info.value
  }
  await populateProducts(category.value, 'POST', payload)
  target.reset()
})

// Custom element
customElements.define('product-item', class Item extends HTMLElement {
  constructor() {
    super()
    const itemTmpl = document.querySelector('#item').content
    this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
  }
})
```

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Creating POST Routes (3)

The **populateProducts** function has been upgraded to handle both GET and POST scenarios. A POST scenario occurs when the form is submitted. In the **add** form's **submit** event listener function, the **populateProducts** function is called with the currently selected category, the method argument as **‘POST’**, and a payload to send to the server based on the form values.

The browser native **fetch** function can also perform POST requests, which are configured via a second options argument. So, if the method is **‘POST’**, the headers and body are built and then a POST request is made to the **/{category}** route with the selected category. The POST route will store the incoming item and send back updated data, allowing **populateProducts** to then continue as normal and render the data from the response.

It is highly recommended that production Node.js services are **stateless**. That is, they don't store their own **state**, but retrieve it from an upstream service or database. When we are creating mock web services, however, storing state in-memory is fine. We are just trying to carve out a “happy path” for the application or service that we are actually implementing. In order to store state, we are going to need to create the minimum set of database-like abstractions for our POST request to make sense. Namely, we will need to create an ID for each new entry. Since we have two routes and we don't want duplicate logic (even in mocking web services, the **Don't Repeat Yourself** principle applies) we can create a small data utility library plugin that both routes can use.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Creating POST Routes (4)

Next, we need to create a data utility library plugin to handle the insertion of new items into the mock data. Create a new file in the `mock-srv/plugins` directory called `data-utils.js` and add the following code:

```JavaScript
"use strict";

import fp from "fastify-plugin";

const catToPrefix = {
  electronics: "A",
  confectionery: "B",
};

const calculateID = (idPrefix, data) => {
  const sorted = [...new Set(data.map(({ id }) => id))];
  const next = Number(sorted.pop().slice(1)) + 1;
  return ${idPrefix}${next};
};

export default fp(async function (fastify, opts) {
  fastify.decorate("mockDataInsert", function (request, category, data) {
    const idPrefix = catToPrefix[category];
    const id = calculateID(idPrefix, data);
    data.push({ id, ...request.body });
    return data
  });
});
```

Let us first concentrate our attention on the calculateID(idPrefix,data) method that we have created. It looks very eloquent and we have opted to express this method this particular way simply for terseness. However, it does require some explanation if you are unfamiliar with some of the methods expressed here.

The function starts by extracting unique IDs from the data array and storing them in a variable called sorted. It ensures that there are no duplicate IDs by removing any duplicates using new Set().

Next, the code retrieves the last ID from the sorted array. It assumes that the IDs are formatted in a specific way, with a prefix followed by a numeric value. The code removes the prefix by slicing off the first character and converts the remaining numeric portion into a number. The code increments the extracted number by 1 to calculate the next ID value.

Finally, the function constructs a new ID string by combining the idPrefix and the calculated next value. Using string interpolation to concatenate the two values together. In summary, the function takes an existing set of IDs, finds the highest ID, increments it by 1, and combines it with a provided prefix to generate a new ID. It ensures uniqueness by removing duplicates before determining the next ID value.

Next we have a fastify-plugin module that is used to de-encapsulate a plugin. We pass the exported plugin function into fp to achieve this. This means that any modifications we make to the fastify instance will apply across our entire service. If we did not pass the exported function to fastify-plugin, any modifications to the fastify instance that is passed to it would only apply to itself and any descendent plugins that it could register. Since the plugin is loaded as a sibling to our routes, we need to indicate that we want our plugin to apply laterally. For more information on the Fastify plugin system see [Fastify Plugins Documentation](https://www.fastify.io/docs/v3.9.x/Plugins/).

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Creating POST Routes (5)

We use the fastify.decorateRequest method to decorate the request object that is passed to route handler functions with a method we name mockDataInsert. For more information on Fastify decorators see [Fastify’s Decorator Documentation](https://www.fastify.io/docs/v3.9.x/Decorators/).

The insert function that we provide for the mockDataInsert decorator accepts three arguments: request, category and data. The data that is expected is an array of mocked data items, the same as we currently return from our GET routes. We use the category and data to calculate a new ID for an incoming item by mapping the category to an ID prefix, sorting the IDs of the items in the data set, and then incrementing the numerical portion of the last ID and coupling it with the prefix.

Since we are passing through the request object, we can access request.body to get the incoming payload of a POST request. Then we modify the data array by pushing a new item object onto it that contains our new ID and the request.body copied into the new item object, using the spread operator (...).

Now, let's update the mock-srv/routes/confectionery/index.js file to handle POST requests and use the mockDataInsert decorator:

```JavaScript
"use strict";
const data = [
  {
    id: "B1",
    name: "Chocolate Bar",
    rrp: "22.40",
    info: "Delicious overpriced chocolate.",
  },
];
export default async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    return data;
  });
  fastify.post("/", async function (request, reply) {
    fastify.mockDataInsert(request, opts.prefix.slice(1), data);
    return data;
  });
}
```

We have placed the array with our single confectionery item into a constant called data. Now, we return that data array from our fastify.get route. Our new fastify.post route also returns the data array, but first it uses the request.mockDataInsert method that our plugins/data-util.js library plugin added via fastify.decorateRequest.

The opts.prefix contains the route prefix for our route. In this case it will be /confectionery because the name of the folder that this index.js file is in is named confectionery.

We pass opts.prefix.slice(1) (which strips the leading forward slash) into request.mockDataInsert as the first argument. This is the category parameter of the insert function in plugins/data-util.js.

We pass the data array as the second argument. This will update the data with the new item based on the request.body (which is the incoming POST body payload) along with its newly calculated ID. The data array with its new item is then returned from the POST request.

In the updated code, we add a POST route to handle the creation of new items. In the fastify.post route handler, we use the mockDataInsert decorator function to insert the new item into the data array, based on the request body. The updated data array is then returned.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Creating POST Routes (6)

Now let's update `mock-srv/routes/electronics/index.js` in the same manner:

```JavaScript
"use strict";
const data = [
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
];

export default async function (fastify,opts) {
  fastify.get("/", async function (request, reply) {
    return data;
  });
  fastify.post("/", async function (request, reply) {
    fastify.mockDataInsert(request, opts.prefix.slice(1), data);
    return data
  });
}
```

This is almost exactly the same as mock-srv/routes/confectionery/index.js except the data array is different and the result of opts.prefix.slice(1) will be electronics instead of confectionery.

It is extremely important to point out that we are not validating the incoming POST data. It's a mock web service, so for our requirements there is no need to do so. The only reason to add validation to a mock service is if we needed to mock the flow of validation interactions between server and client.

In a production scenario, failing to sanitize and validate incoming POST data and then sending that same POST data back in the response can lead to vulnerabilities. For an example scenario, visit [Testing for Reflected Cross Site Scripting](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/01-Testing_for_Reflected_Cross_Site_Scripting). If we were to add validation to our POST route, we would use Fastify route schema support. See [Fastify Validation and Serialization Documentation](https://fastify.dev/docs/latest/Reference/Validation-and-Serialization/) for more information.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Creating POST Routes (7)

Now let's open two terminal windows – one with the current working directory set to our project folder and the other with the current working directory set to the mock-srv folder.

In the first terminal that has the current working directory set to our project folder, run the command: `$ npm run static`

In the second terminal window that has the current working directory set to the mock-srv folder execute the following: `$ npm run dev`

Next we'll navigate to [http://localhost:5050](http://localhost:5050) and select Electronics from the category selector.

Having performed these steps the browser window should look similar to the following:

```
Electronics

> Vacuum CLeaner - 99.99
> Leaf Blower - 303.33

name       mp
-------    ----------

info
----------------------
             Add
```

If we fill out all three fields and hit Add, the items should update.

For instance, we can fill out the inputs.

If we refresh the page and re-select Electronics, it will still contain our addition.

The first GET is when we first selected Electronics from the category selector. The OPTIONS request is triggered by the native fetch function before performing a POST request, which happens directly afterwards. The second GET request occurs after a page refresh and re-select of the Electronics category.

Once again, keep in mind that we have only created a mock web service, and we are not performing any validation on the incoming data. In a production scenario, proper validation should be implemented to ensure data integrity and security.

We have now successfully created a mock web service with both read and write functionality.

---
