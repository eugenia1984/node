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

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
