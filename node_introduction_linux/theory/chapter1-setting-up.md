## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> How Not to Install Node

Node.js is often installed using an operating system's official or unofficial package manager, such as apt-get on Debian/Ubuntu, Brew on macOS, or Chocolatey on Windows. However, it is strongly advised against using this method to install Node.

Why? Well, there are a few reasons.

- First, **package managers tend to fall behind the frequent release cycles of Node.js**. This means that the versions available through package managers might not be up to date, potentially missing out on important features, bug fixes, and security patches.

- Second, **the placement of binary and configuration files and folders is not standardized across different OS package managers**. This lack of standardization **can lead to compatibility issues and confusion when working with Node.js and its related tools**.

- Another significant problem with installing Node.js via an OS package manager is **the need to use sudo (a command that grants root privileges) on non-Windows systems when installing global modules with Node's package manager, (npm)**. Granting root privileges to the installation process of third-party libraries is not an ideal setup for a developer's machine and is considered poor security practice.

-> An alternative option is to **install Node directly from the official Node.js website**. However, it's worth noting that on macOS and Linux, sudo is still required for installing global libraries.

Whether you are using Windows, macOS, or Linux, we will introduce a better way to install Node using a version manager in the following sections.

However, before moving on to the next sections, it is highly recommended to completely uninstall Node if it has been installed via an operating system package manager or directly from the website.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Installing Node.js using FNM

In this section, we will learn how to install Node.js on our system using a Node version manager called **fnm (Fast Node Manager)**.

This method is suitable for Windows, macOS, and Linux installations.

While more information about installing Node.js can be found from our system's native sources, we recommend using fnm for a streamlined installation process.

**fnm is a fast and simple Node.js version manager that allows us to manage multiple released Node.js versions**. It provides operations like installation, uninstallation, and automatic switching of Node versions based on the current directory. fnm supports cross-platform compatibility (macOS, Windows, Linux) and works with popular shells such as Bash, Zsh, Fish, PowerShell, and the Windows Command Line Prompt. It is designed for speed and offers compatibility with .node-version and .nvmrc files, making it an ideal choice for our needs.

For full details and documentation, refer to the **fnm GitHub repository**: [https://github.com/Schniz/fnm](https://github.com/Schniz/fnm).

To begin, we will install fnm and then use it to install Node. If you have curl installed, use the following command to install fnm using the install script:

`$ curl -fsSL https://fnm.vercel.app/install | bash`

If you do not have curl installed, you can manually download the script from the provided URL and execute it; or if you prefer a manual installation method or need more information, please visit the fnm repository page.

Additionally, you can find instructions for setting up auto-completions for the terminal you’re using in the fnm repository page.

After the installation, verify that fnm is working correctly by running the following command:

`$ fnm --version`

The expected output should be fnm 1.33.1. If this command fails on Linux, try restarting the terminal by closing and reopening it or the SSH session and then running the command again. For troubleshooting information, refer to the original repository.

If, upon restarting the terminal, you encounter a "Command 'fnm' not found" error, it is likely that the $PATH for the fnm executable was not properly set during the installation process. You can easily set it by entering the following command in the terminal:

`$ export PATH="$HOME/.local/share/fnm:$PATH"`

With the version manager successfully installed, let's proceed to install the specific Node version we'll be using for this course:

`$ fnm install --lts`

This command will install the latest LTS (Long-Term Support) version of Node.

Current LTS version of Node as of May 2023: Node v18.16.0 (x64)Current (LTS) version of Node as of May 2023

It is important to note that the exact numbers at the end of the version may vary, however it would still be suitable for this course. For example, you can install the latest available version of Node by supplying the following command to fnm:

`$ fnm install --latest`

To verify that Node is installed and check its version, use the following command:

`$ node -v`

Congratulations! You now have the proper setup on your macOS or Linux machine to proceed with the course.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> .nvmrc File

- To "pin" a specific Node.js version for your project, you need to create a .`nvmrc ` file in the root of your project directory. This file informs Node.js and the installed package manager on your system to utilize the specified Node version mentioned in the .nvmrc file.

Follow the directions below to create and use the .`nvmrc` file:

1. Open a text editor in the root of your project directory.

2. Create a new file and save it as `nvmrc` (including the leading dot).

3. In the `nvmrc` file, specify the Node version you want to use for your project. You can find the desired version by visiting the official Node.js website and looking for the Long-Term Stable (LTS) or the latest version. For example, you can simply write v18.16.0 in the `nvmrc` file.

4. Save the `nvmrc` file and close the text editor.

5. Once you have created the `nvmrc` file with the desired Node version, you can use the following command to install and set that specific Node version for your project:

`$ fnm use --version-file-strategy local`

This command will read the `nvmrc` file in your project directory and install the specified Node version, ensuring that it is used for your project.

6. Remember to always commit and share the `nvmrc` file with your project collaborators, so everyone is using the same Node version.

---

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/> Confirming Installation

To verify that Node is successfully installed on your machine and to check the installed version, you can use the following command in your terminal or command prompt: `$ node -v`

After running this command, you should see the version number of Node printed in the terminal.

For example, if Node v18.16.0 is installed, the output will be: `v18.16.0`

Congratulations! You now have the proper setup on your machine, and you are ready to proceed with the course.

---
