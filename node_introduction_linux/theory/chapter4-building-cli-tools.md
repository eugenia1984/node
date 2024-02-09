# CHAPTER 4 - BUILDING CLI TOOLS

---

## Chapter Overview

The ability to build Command Line Interfaces (CLIs) is a useful skill. Building simple tools that are relevant to technology stacks and business logic within an organization for manual interaction with a system, is a key use case. A small CLI is trivial to build in Node, and we can access the entire JavaScript ecosystem to rapidly build any functionality we might need. In this chapter we are going to build a back-office CLI that interacts with the web service we worked on in Chapters 2 and 3. As we run commands in the CLI, it will update state in our back-end web service, which will then be reflected in the web app.

----

## Learning Objectives

By the end of this chapter, you should be able to:

- Explain how to scaffold a CLI app.

- Apply approaches for handling flags and positional arguments.

- Implement colors, prompts and terminal-based form controls.

---

## 1 - Creating a Command Line Tool (1)

In this first section we are going to build-out a simple command line tool that makes a POST request to the /orders/{ID} endpoint that we implemented in the last section of Chapter 3.

First we will need to make a new folder in a project root, which we will call my-cli. We can create it in the project root with the following command:

`$ mkdir my-cli`

Our CLI tool is going to be created as an independent package, so let's change directories into the my-cli folder and initialize a Node.js package:

`cd my-cli
npm init -y`

The npm init -y command will automatically generate a package which should look similar to the following:

```JavaScript
{
  "name": "my-cli",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

The my-cli/package.json file can have a bin field added to it. This can then be used by the npm tool to create an executable file (whether it's a symlink with executable permissions on unix-based systems or a cmd file on Windows) that points to the path specified by the bin field. Let's modify the my-cli/package.json file to the following:

{
  "name": "my-cli",
  "version": "1.0.0",
  "description": "",
  "bin": "./bin/cmd.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

The bin field is pointing to ./bin/cmd.js. We will be creating a ./bin/cmd.js file in the my-cli folder shortly.



---

## 2 - Creating a Command Line Tool (2)

While we are modifying the my-cli/package.json file, we will make one more change as well. Since we'll use the ESM format to create our command line tool, we need to opt-in to the ESM format. Do this by simply adding a type field to the my-cli/package.json file, set to the value: module. Let's update my-cli/package.json to the following:


```JavaScript
{
  "name": "my-cli",
  "version": "1.0.0",
  "description": "",
  "bin": "./cmd.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" &&  exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

We are going to use the NPM "got" module, which offers a developer-friendly API for making HTTP requests. See got - npm for more details.

Ensuring that the my-cli folder is our current working directory, let's install got with the following command:

`$ npm install got`

This will install got and will automatically modify the my-cli/package.json file to look similar to the following:

```JavaScript
{
  "name": "my-cli",
  "version": "1.0.0",
  "description": "",
  "bin": "./bin/cmd.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "got": "^12.6.0"
  }
}
```

Now we are ready to create the cmd.js file.

---

## 3 - Creating a Command Line Tool (3)

Let's create my-cli/bin/cmd.js with the following contents: `#!/usr/bin/env node`

Let’s talk about this line before we add more to my-cli/bin/cmd.js. This first line is a unix and unix-like system (e.g. Linux, MacOS) directive known as the ”shebang” or the “hashbang” (as per the two leading characters of its syntax, where "bang" is a synonym for exclamation point). When a non-binary file has executable permissions and is run from the command line, the hashbang is checked so that the Operating System knows what interpreter to execute the text of the file with. The command we instruct the OS to use is /usr/bin/env node. The path to env is typical across unix and unix-like systems. Passing the node as an argument to /usr/bin/env results in the full path to wherever node is installed being output. This full path to the node binary then becomes what the OS uses to execute the text. On Windows systems, npm wraps the file referenced from the bin field of my-cli/package.json in a .cmd file.

Now let's append the following to the my-cli/bin/cmd.js file: `import got from 'got'`

Because we have opted into ESM modules using the type field of the my-cli/package.json, we are using the ESM syntax to import the got library. This provides us with the got library, which we will use later to make a request to our mock service.

Now let's add a third line to our my-cli/bin/cmd.js file: `const API = "http://localhost:3000";`

This line sets up an API constant which references the default address of our local web service. This could theoretically be adapted in the future to a production URL. 

Now we will create a usage function by adding the following to my-cli/bin/cmd.js file:

```JavaScript
const usage = (msg = 'Back office for My App') => {
  console.log(\n${msg}\n);
  console.log("Usage: cmd <ID> <AMOUNT>");
};
```

This logs out some simple usage information about our CLI tool. We'll use this to output instructions in the event of bad input.

---

## 4 -  Creating a Command Line Tool (4)

As we can see from the usage function, we're planning for our CLI to accept a product ID and an amount, as positional arguments. We can access the arguments that a Node.js process is executed with, using the argv property of the global process object. Let's add the following to my-cli/bin/cmd.js:

```JavaScript
// Get the arguments from the command line
const argv = process.argv.slice(2);
// If there are no arguments, show the usage and exit
if (argv.length < 2) {
  usage();
  process.exit(1);
}

// Deconstruct the arguments into variables
const [argID, argAmount] = argv;

// Check if the Amount is a number
const amount = parseInt(argAmount);
// If the amount is not a number, show the usage and exit
if (isNaN(amount)) {
  usage("Error: <AMOUNT> must be a number");
  process.exit(1);
}
```

The process.argv property holds an array of strings. The first element in the process.argv array contains the full path to the currently executing node binary. The second element in the process.argv array contains the full path to the file that has been executed with node (in this case the cmd.js file). Neither of these are important to us, so we use process.argv.slice(2) to create a new array (argv) that has the first two elements of the process.argv array chopped off.

Our CLI tool expects two arguments — the product ID and the amount of orders. So if there are less than two elements in the argv array, that is an input error. We call the usage function with no arguments (which means it outputs the default msg in the usage function), and then exit with a code of 1 (any non-zero code is a non-successful exit).

If both positional arguments are provided, we use array destructure to assign the first element of argv to the id constant and the second element to the amt constant.

Since all arguments that come from the command line are strings, we convert the amt string to a number and assign it to the amount constant. Amounts must be whole numbers, which we verify using Number.isInteger. This will also return false if a non-numerical string has been passed to Number (it will be NaN, which is not an integer). If amount is not a valid integer we call the usage function — this time with a custom error message, and exit the process with a code of 1.

Now for the actual meat of what we want our CLI to do: make a POST request to the /orders/{ID} route of our mock service. Let's finish up the my-cli/bin/cmd.js file by adding the following to it:

```JavaScript
// Update the order with the given ID
try {
  // Use GOT to make a POST request to the API
  await got.post(${API}/orders/${argID}, {
    json: { amount },
  });
  // Log the result to the console
  console.log(Order ${argID} updated with amount ${amount});
} catch (err) {
  // If there is an error, log it to the console and exit
  console.log(err.message);
  process.exit(1);
}
```


---

## 5 - Creating a Command Line Tool (5)

Using a try-catch block, we pass a string to got.post that points to our mock service's /orders/{ID} endpoint, where {ID} is the first positional argument supplied to the command line tool (assigned to the id constant). The second parameter of got.post is an options argument. We set the json property to an object containing an amount property set to the value of the amount constant. This is all got needs in order to know that the request should be a JSON request, and therefore sets the appropriate Content-Type HTTP header.

The got.post method returns a promise, which we await. Usually the await keyword can only be used inside async functions (and async generator functions). However the ESM format supports the Top-Level Await syntax. So the await keyword can be used outside any functions when using the ESM format (which we opted into by setting the type field of my-cli/package.json).

Note that Top-Level Await syntax is supported from Node 14.3.0. Execution will pause until the promise return from got.post resolves or rejects. The promise will resolve in the case of a successful request. It rejects in the case of a request responding with a 4xx or 5xx status code, or in case of any other errors, such as a network error. An awaited promise in a try block will fall through to the catch block if the awaited promise is rejected. So in the event of any error making the request, the catch block will log out whatever the error message might be, and then exit the process with a code of 1 to indicate it was not successful. If the request does not have any issues, our CLI tool will not output anything, but will naturally exit with an exit code of 0, indicating success.

The entirety of my-cli/bin/cmd.js should look as follows:

```JavaScript
#!/usr/bin/env node
import { got } from "got";

const API = "http://localhost:3000";

// Log the usage of the command to the console
const usage = (msg = "Back office for My App") => {
  console.log(\n${msg}\n);
  console.log("Usage: cmd <ID> <AMOUNT>");
};

// Get the arguments from the command line
const argv = process.argv.slice(2);
// If there are no arguments, show the usage and exit
if (argv.length < 2) {
  usage();
  process.exit(1);
}

// Deconstruct the arguments into variables
const [argID, argAmount] = argv;

// Check if the Amount is a number
const amount = parseInt(argAmount);
// If the amount is not a number, show the usage and exit
if (isNaN(amount)) {
  usage("Error: <AMOUNT> must be a number");
  process.exit(1);
}

// Update the order with the given ID
try {
  // Use GOT to make a POST request to the API
  await got.post(${API}/orders/${argID}, {
    json: { amount },
  });
  // Log the result to the console
  console.log(Order ${argID} updated with amount ${amount});
} catch (err) {
  // If there is an error, log it to the console and exit
  console.log(err.message);
  process.exit(1);
}
```


To complete the step of creating a node module executable file, we have to set the file permissions so the file is an executable. This can be done using the `chmod` command in the following way: ``$ chmod u+x bin/cmd.js``

---
