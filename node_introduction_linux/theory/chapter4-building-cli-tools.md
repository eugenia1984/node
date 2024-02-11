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

---

## 6 - Creating a Command Line Tool (6)

We could try the tool out by directly executing the my-cli/bin/cmd.js file with node. However, for the full CLI experience we want to run a named executable. In our case the name of the executable will be my-cli as per the my-cli/package.json name. The my-cli/package.json bin field can be configured with an object, the keys of which determine command names, while the values point to corresponding files to execute. This allows us to define multiple commands for a package and/or use a command that is different to the package name.

The npm tool can set up our named execute in various ways. This particular tool is one that a user would probably install globally, so it's available to our system (at least under our user account). Another example of a globally installed CLI tool is the serve command, which was added to our system when we installed the serve package with npm install -g serve, similar to the first section of the Chapter 1 of this course.

Other CLI tools are primarily intended for use within a Node or frontend project, typically through the scripts field of that projects package.json file. An example of this is the fastify command used in the dev and start scripts in mock-srv/package.json. In both cases the bin field of a package.json is all npm needs to provide the glue for making this work.

We want to be able to run our tool from anywhere, but we will also be developing our tool further in the following sections. When developing a CLI tool it is often useful to use the npm link command.

Let's run the following command from the my-cli folder: `$ npm link`

npm link is a two step process. The first step is to create a symlink from the application and the second is  to register our application in the root project directory. Here we enter: `$ npm link my-cli`

This command is like npm install<module> , where npm sets up the relevant command name to be used from any directory in the terminal. It links from the my-cli node_modules folder to a given packages project folder. This means any changes we make to my-cli/bin/cmd.js in the future will be immediately reflected the next time we run the my-cli command. If you find that changes do not reflect within our project, you may have to repeat this step.

Let's try this out. First we need to start the mock service we built in prior chapters and serve the web app. In one terminal from the project route, let's run the following command: `serve -p 5050 static`

In another terminal, with the mock-srv folder as the current working directory, let's execute the following command: ``$ npm run static``

In another terminal, with the mock-srv folder as the current working directory, let's execute the following command: ``$ npm run dev``

Let's also navigate to http://localhost:5050 and select the Electronics category. The current order count for the two products in this category should be 3 and 7, respectively.

In a third terminal window, we can run the following: ``$ my-cli``

To complete the step of creating a node module executable file, we have to set the file permissions so the file is an executable. This can be done using the `chmod` command in the following way: ``$ chmod u+x bin/cmd.js``

---

## 7 -  Creating a Command Line Tool (7)

In the same terminal window let's run: ``my-cli A2 35``

If we observe the web app as we execute this command, we should see the order count for the Leaf Blower product jump from 7 to 42. 


We have written a command line tool that can make POST requests to our mock service using a fairly straightforward command-line interface. In the following sections we will build upon the functionality of our CLI tool.

---
---


## 8 - Parsing Command-Line Flags (1)

Thus far, our my-cli tool supports two positional arguments. The first argument is an ID and the second is an amount. In this section we are going to add support for command-line flags. Command-line flags refer to an argument preceded by either one or two dashes. For example, --amount or -n. One dash precedes -n because it is a single letter.

The process.argv array is created by splitting the command into individual parts by using spaces as delimiters, thereby eliminating the spaces and separating the command into distinct elements. For example, the command my-cli A1 --amount=1 would mean that our current argv array in my-cli/bin/cmd.js holds an array with two elements: ['A1', '--amount=1']. Whereas the command my-cli A1 --amount 1 would create an argv array with three elements ['A1', '--amount', '1'].

Currently, we depend on the position of an argument, where the product ID is the first element of our argv array and the amount of the second element. Once a flag is introduced, this straightforward reliance on position becomes untenable. We should be able to support my-cli --amount 1 A1 as well as my-cli A1 --amount 1, as well as my-cli --amount=1 A1. In those three cases, the ID will be the third, first, and second element in our argv array.

What we need is a command line arguments parser. There are many ecosystem options, but we are going to use one of the simplest: commander.

For further information on this particular project please visit  [https://github.com/tj/commander.js/](https://github.com/tj/commander.js/)

---

## 9 -  Parsing Command-Line Flags (2)

Let's install commander with the following command, executed with the my-cli as the current working directory: ``$ npm install commander``

At the top of my-cli/bin/cmd.js we can import commander like so:

`
#!/usr/bin/env node
import { got } from "got";
import {Command} from "commander";
// Create a new Command Program
const program = new Command();
`

We are instructing commander to create a new Command program. Commander is well maintained and prevalent in the industry. It provides a set of stable API’s that allows for easy creation of command line applications. To create a new program we apply a new Command instance to the program. It accepts the chaining of additional methods and parses the command line arguments for us, allowing us to reduce the overall amount of code we create.

First we will create our program by entering the following:

`
// Create a new Program
program
  .name("my-cli") // Set the name of the program
  .description("Back office for My App") // Set the description
  .version("1.0.0"); // Set the version
// Parse the arguments from process.argv
program.parse();
`


Now when we go to interact with my-cli application in the terminal, by entering: ``$ my-cli --help``

If we were to enter: ``$ my-cli -V | --version``

We should see our version number 1.0.0 reflected in the terminal. Commander gives us these features ‘out of the box’ per se. Next we will create a command for our program that allows us to update the values to our mock-srv backend.


---

## 10 - Parsing Command-Line Flags (3)

To begin with, we will simplify the usage function to reflect the changes we are about to make. We are concerned with the lines from where we declare the API constant to the line where we declare our program. It should look as follows:

```JavaScript
const API = "http://localhost:3000";

// Log the usage of the command to the console
const usage = (msg = "Back office for My App") => {
  console.log(\n${msg}\n);
};
// Create a new Program
```

All we have done here is drastically reduce the log output for the usage function. We are going to support two command line arguments for ID and AMOUNT. Arguments are values that can be entered in the console without the use of command line flags.

Now it’s time to create our update command for our program. First we need to refactor our business logic from earlier. Since Commander will be parsing the command line arguments for us, we can remove our own argsv processing logic. Next we take the amount validation logic, along with our try-catch block, and scope them together. We should have something that looks like the following:

```JavaScript
// Update the order with the given ID
async function updateItem(id,amount) {
  usage(Updating order ${id} with amount ${amount})
  try {
    if (isNaN(+amount)) {
      usage("Error: <AMOUNT> must be a number");
      process.exit(1);
    }
    // Use GOT to make a POST request to the API
    await got.post(${API}/orders/${id}, {
      json: { amount: +amount },
    });
    // Log the result to the console
    usage(Order ${id} updated with amount ${amount});
  } catch (err) {
    // If there is an error, log it to the console and exit
    console.error(err.message);
    process.exit(1);
  }
}
```


Now we can create our update command for the program:

```JavaScript
// Create a command for adding a new order
program
  // Set the command name
  .command("update")
  // Set the argument ID to be required
  .argument("<ID>", "Order ID")
  // Set the argument AMOUNT to be required
  .argument("<AMOUNT>", "Order Amount")
  // Set the action to be executed when the command is run
  .action(async (id,amount) => await updateItem(id,amount));

  // Parse the arguments from process.argv
  program.parse();
```

Let's walk through this part of the code. First, we are chaining the program method properties together so that there is a sequential step of actions that we can prescribe to the program. The first thing we set is the .command(“update”). This allows us to pass through a keyword to our terminal so we can provide specific behavior when we use the update keyword in the terminal. Next we are instructing the program to accept two command line arguments, <ID> and <AMOUNT> as required fields; optional fields are denoted using [OPTIONAL]. To complete the program, we attach an action, which accepts a callback function. In this case, we are invoking our refactored updateItem().



---

## 11 - Parsing Command-Line Flags (4)

Now we can begin to test our application in our terminal: ``$ my-cli update A2 12``

![image](https://github.com/eugenia1984/node/assets/72580574/bc649e29-8ccc-4e76-8e72-f07d5fdf03d7)

Amazing work so far!  Now try entering the following command into the terminal: ``$ my-cli update --help``

You should see Commander produce the following output:

 ![image](https://github.com/eugenia1984/node/assets/72580574/13c5845e-7200-4a7b-966f-019469ae476a)


The entirety of my-cli/bin/cmd.js should look as follows:

```JavaScript
#!/usr/bin/env node
import { got } from "got";
import { Command } from "commander";
// Create a new Command Program
const program = new Command();
const API = "http://localhost:3000";

// Log the usage of the command to the console
const usage = (msg = "Back office for My App") => {
  console.log(\n${msg}\n);
};
// Update the order with the given ID
async function updateItem(id, amount) {
  usage(Updating order ${id} with amount ${amount});
  try {
    if (isNaN(+amount)) {
      usage("Error: <AMOUNT> must be a number");
      process.exit(1);
    }
    // Use GOT to make a POST request to the API
    await got.post(${API}/orders/${id}, {
      json: { amount: +amount },
    });
    // Log the result to the console
    usage(Order ${id} updated with amount ${amount});
  } catch (err) {
    // If there is an error, log it to the console and exit
    console.error(err.message);
    process.exit(1);
  }
}

// Create a new Program
program
  .name("my-cli") // Set the name of the program
  .description("Back office for My App") // Set the description
  .version("1.0.0"); // Set the version

// Create a command for adding a new order
program
  // Set the command name
  .command("update")
  // Set the argument ID to be required
  .argument("<ID>", "Order ID")
  // Set the argument AMOUNT to be required
  .argument("<AMOUNT>", "Order Amount")
  // Set the action to be executed when the command is run
  .action(async (id, amount) => await updateItem(id, amount));

// Parse the arguments from process.argv
program.parse();
```


---

## 12 -  Parsing Command-Line Flags (5)

Now let's see this in action. First, we need to start the web service we built in prior chapters and also serve the web app. In one terminal from the project route let's run the following command: ``$ npm run static``

In another terminal, with the mock-srv folder as the current working directory, let's execute the following command: ``$ npm run dev``

Let's also navigate to http://localhost:5050 and select the Electronics category. The current order count for the two products in this category should be 3 and 7, respectively.

In a third terminal window, we can run the following: ``$ my-cli``

This should output the help text like so:

![image](https://github.com/eugenia1984/node/assets/72580574/4b0a6d5d-7b8b-4f7a-9b37-056d0224e7f0)

In the same terminal window let's run: ``$ my-cli update A1 5``

You should now see these changes reflected within our web application.

Let's try another command: ``$ my-cli update A2 15``

This should cause the orders for the Leaf Blower to become 22. We can see this reflected within our main web application on http://localhost:5050 .

In the next section we are going to make our CLI multi-functional by introducing sub-commands.

---

## 13 - Implementing Sub-Commands (1)


So far we have implemented a single command to our CLI program. This only takes in two required fields <ID> and <AMOUNT> but we can do a lot more with commander. By doing so, we are going to be gradually increasing the complexity of our application.  We will be adding more “commands” with their own bespoke arguments and  options or --flags to our program, thus defining more complicated commands and their associated functionality. So far our CLI can add an order via the POST /orders/{ID} route of our web service. We are going to expand the scope of our functions to add products to their respective categories, list categories, and to list product IDs in a category, while keeping the order adding functionality. Just like with our update sub-command, we will be using this ergonomic approach to extend our CLI further.

First, we create a new module my-cli/src/utils.js to contain our “business logic”, or behaviors we want to have scoped to be their own functions.By scoping the business logic to its own functions, you can isolate and manage the behaviors independently, making each behavior easier to understand, test, and modify. We will then import these into our main my-cli/bin/cmd.js to use with our program.

So far we have implemented a single command to our CLI program. This only takes in two required fields <ID> and <AMOUNT> but we can do a lot more with commander. By doing so, we are going to be gradually increasing the complexity of our application.  We will be adding more “commands” with their own bespoke arguments and  options or --flags to our program, thus defining more complicated commands and their associated functionality. So far our CLI can add an order via the POST /orders/{ID} route of our web service. We are going to expand the scope of our functions to add products to their respective categories, list categories, and to list product IDs in a category, while keeping the order adding functionality. Just like with our update sub-command, we will be using this ergonomic approach to extend our CLI further.

First, we create a new module my-cli/src/utils.js to contain our “business logic”, or behaviors we want to have scoped to be their own functions. By scoping the business logic to its own functions, you can isolate and manage the behaviors independently, making each behavior easier to understand, test, and modify. We will then import these into our main my-cli/bin/cmd.js to use with our program.

First, let's move the update() into the my-cli/src/utils.js to make it our first function for our module. 

```JavaScript
// Import GOT to make HTTP requests
import { got } from "got";
// Set the API URL
const API = "http://localhost:3000";
// Set the categories
const categories = ["confectionery", "electronics"];

// Update the order with the given ID
export async function update(id, amount) {
  console.log(Updating order ${id} with amount ${amount});
  try {
    if (isNaN(+amount)) {
      log("Error: <AMOUNT> must be a number");
      process.exit(1);
    }
    // Use GOT to make a POST request to the API
    await got.post(${API}/orders/${id}, {
      json: { amount: +amount },
    });
    // Log the result to the console
    console.log(Order ${id} updated with amount ${amount});
  } catch (err) {
    // If there is an error, log it to the console and exit
    console.log(err.message);
    process.exit(1);
  }
}
```

We import it into our file my-cli/bin/cmd.js in the following manner:

```JavaSCript
#!/usr/bin/env node
import { got } from "got";
import { Command } from "commander";
import { update } from "../src/utils.js";
```

---

## 14 - Implementing Sub-Commands (2)

We will be following much of the same pattern, where we will create our functionality first in our my-cli/src/utils.js , then its complementary program.command() within our my-cli/bin/cmd.js. Therefore, the following section should be pretty familiar by the end of this exercise. 

First we will be adding a couple of ancillary methods that we will be using continuously throughout our codebase. These are log(message) and its counterpart error(message) methods, which are simple abstractions over the console.


```JavaScript
// Log the usage of the command to the console export const log = (msg) => {
  console.log(\n${msg}\n);
};
// Log the error to the console
export const error = (msg) => {
  console.error(\n${msg}\n);
};
// Update the order with the given ID
```

These methods will be predominately called within our functions, with the exception of them being used elsewhere when we are creating our Terminal User Interfaces.

The next function we will implement is the add() method, which adds a new product to our web server.


```JavaScript
// Add a new order
export async function add(...args) {
  // Destructure the arguments
  let [category, id, name, amount, info] = args;
  log(Adding item ${id} with amount ${amount});
  try {
    if (isNaN(+amount)) {
      error(Error: <AMOUNT> must be a number);
      process.exit(1);
    }
    // Use GOT to make a POST request to the API
    await got.post(${API}/${category}, {
      json: {
        id,
        name,
        rrp: +amount,
        info: info.join(" "),
      },
    });
    // Log the result to the console
    log(Item "${id}:${name}" has been added to the ${category} category);
  } catch (err) {
    // If there is an error, log it to the console and exit
    error(err.message);
    process.exit(1);
  }
}
```

First, we are passing through all the arguments ...args that would be provided to the function. This allows us to destructure and extract the values that we need, to allow us to provide the additional functionality that we require. We then use the newly created log() method to output to the console, which is a statement that informs us that the function is indeed executing.

Next, we need to make a small validation check on some of the inputs, in particular, the type coercion between amount as a string and amount as an integer. We achieve this by checking to first see if the amount is indeed a number. If so, we coerce the type of the amount to be an integer by using the '+' before the amount . Should it fail its coercion to an integer, we shall surface an error() along with exiting the application safely.


---

## 15 -  Implementing Sub-Commands (3)

Now let's write our corresponding command for this newly created functionality.

```JavaScript
// Create a command for listing categories by IDs
program
  // Set the command name
  .command("add")
  // Set the command description
  .description("Add Product by ID to a Category")
  // Set the category to be required
  .argument("<CATEGORY>", "Product Category")
  // Set the argument ID to be required
  .argument("<ID>", "Product ID")
  // Set the argument NAME to be required
  .argument("<NAME>", "Product Name")
  // Set the argument AMOUNT to be required
  .argument("<AMOUNT>", "Product RRP")
  // Set the argument INFO to be optional
  .argument("[INFO...]", "Product Info")
  // Set the action to be executed when the command is run
  .action(
    async (category, id, name, amount, info) =>
      await add(category, id, name, amount, info)
  );
```

Because we need to send out a lot more information to the web server when we create a new product, we can normally enter this via our web application. However in the terminal, we will need to create additional arguments to accommodate the functions requirements. As a result we create the <CATEGORY> <ID> <NAME> <AMOUNT> as required command line arguments that are needed to process the function. However, [INFO…] is optional; it is also variadic – meaning it can accept more than one parameter. This allows us to send through strings to our backend to provide a long-form product description. Should a long-form description be supplied, we would include that in the got.post(${API}/${category}) request to our web server API. We can test this by entering: ``$ my-cli add electronics A3 Laptop 599 "Best mid-priced laptop money can buy"``

This should output the following:



![image](https://github.com/eugenia1984/node/assets/72580574/b660ec37-7151-4fae-994a-32f3020282a1)


---

## 16 -Implementing Sub-Commands (4)

Now let's write the listCategories() function:

```JavaScript
// List the categories
export function listCategories() {
  log("Listing categories");
  try {
    // Loop through the categories and log them to the console
    for (const cat of categories) log(cat);
  } catch (err) {
    // If there is an error, log it to the console and exit
    error(err.message);
    process.exit(1);
  }
}
```

This is a very simple functionality, where we loop over the categories array and log each one out to the terminal. 

The last method we will be creating is its sibling function listCategoryItems(category). The purpose of this function is to list the Items within each category when the category is supplied to the method. It makes a GET request to our mock-srv pointing at the relevant category endpoint, then displays the output to the terminal. 

```JavaScript
// List the IDs for the given category
export async function listCategoryItems(category) {
  log(Listing IDs for category ${category});
  try {
    // Use GOT to make a GET request to the API
    const result = await got(${API}/${category}/).json();
    // Log the result to the console
    for (const item of result) {
      log(
        ${item.id}: ${item.name} - $${item.rrp}\nProduct Info:\t${item.info}
      );
    }
  } catch (err) {
    // If there is an error, log it to the console and exit
    console.log(err.message);
    process.exit(1);
  }
}


```

---

## 17 - Implementing Sub-Commands (5)

Finally, we hook these two methods to our program.

```JavaScript
// Create a command for listing categories
program
  // Set the command name
  .command("list")
  // Set the command description
  .description("List categories")
  // Set the category to be optional
  .argument("[CATEGORY]", "Category to list IDs for")
  // Set the option to list all categories
  .option("-a, --all", "List all categories")
  // Set the action to be executed when the command is run
  .action(async (args, opts) => {
    if (args && opts.all)
      throw new Error("Cannot specify both category and 'all'");
    if (opts.all || args === "all") {
      listCategories();
    } else if (args === "confectionery" || args === "electronics") {
      await listCategoryItems(args);
    } else {
      throw new Error("Invalid category specified");
    }
  });
```


Here as you can see, we have increased the complexity of our program somewhat. With our progam.command(“list”) we have an optional [CATEGORY] command line argument. We are also creating a program.option() that defines our two CLI flags as the first argument to the method. For both of our flags, we are also setting our short-hand expressions -a, for its long-handed declaration --all. The idea is that we can either provide the name of the individual category to be listed or we can list all the categories from our application by commanding the output via a flag. Lastly, we are defining our logic within the program.action() method.


```JavaScript
// Set the action to be executed when the command is run
.action(async (args, opts) => {
  if (args && opts.all)
    throw new Error("Cannot specify both category and 'all'");
  if (opts.all || args === "all") {
    listCategories();
  } else if (args === "confectionery" || args === "electronics") {
    await listCategoryItems(args);
  } else {
    throw new Error("Invalid category specified");
  }
});
```

Each action method accepts three command line arguments, an options object that has the key all passed in as a boolean, and the last argument is the Command object itself (for the vast majority of purposes we will not be needing this parameter). However if you were to just spread the parameters through you will have a more complex return type than anticipated, as it would combine all three arguments into an array of rest arguments. We then do a primary check to validate that both the [CATEGORY] argument and the complementary --all option have not been both specified. Because we only want one, not both inputs, we will exit quite abruptly by throwing a new Error().



---

## 18 - Implementing Sub-Commands (6)

Now we should be able to view all our commands through the initial program.help() screen. 

``$ my-cli --help``



![image](https://github.com/eugenia1984/node/assets/72580574/9f7fba17-0969-49d0-8cfa-3e74d23ae3de)

Now let’s test our new list command:

``$ my-cli list --all``


![image](https://github.com/eugenia1984/node/assets/72580574/7da527d4-6691-40ce-8b85-da03b1645f47)


This should be the same result as if we had entered: ``$ my-cli list -a || my-cli list all``

Next we will test our ability to list the items in a single category: ``$ my-cli list electronics`` 

Amazing work! Let's summarize what we have achieved so far. We have successfully created a terminal interface for our CLI application that displays helpful contextual information. It also parses the command-line arguments for us. We also have a very nice and declarative way of expressing our commands for our application. Now we can create and define specialized behavior based on the inputs to the application. Finally, we created a separate module to contain the utility functionality that the application will be using


---

## 19  -

```JavaScript

```

```JavaScript

```

```JavaScript

```

```JavaScript

```

---

## 20 -

---

## 21 - 

---
