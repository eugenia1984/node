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

## 3 - 

---

## 4 - 

---

## 5 - 

---
