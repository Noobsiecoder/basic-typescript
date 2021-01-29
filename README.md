# 🔍 What is TypeScript?

- **TypeScript** is static scripting language that is a _superset_ of **JavaScript** programming Language.
- As the name suggests, it is strongly typed unlike **JavaScript**.
- **TypeScript** code is then compiled to **JavaScript** which produces much cleaner code.
- Hence the bugs that occur loosely can be rectified easily in **TypeScript** before compiling.
  <br>
- **Typescript** adds unique features like :
  1. _Static Typing_
  2. _Interfaces_
  3. _Classes_

# 📑 Difference between TypeScript and JavaScript

| TypeScript                                                      | JavaScript                                        |
| :-------------------------------------------------------------- | :------------------------------------------------ |
| It is an _Object oriented programming language_                 | It is a _scripting language_                      |
| It has static typing                                            | It doesn't have static typing                     |
| It uses types and interfaces to describe how data is being used | Doesn't support interfaces                        |
| It supports optional parameters for functions                   | Doesn't support optional parameters for functions |

<br>

# 🤔 Why use TypeScript?

- It makes it easier for teams to work on the same project, as the language allows for modification and produces readable code.
- If there are multiple developers working on one project, it prevents lots of wasted time on debugging.
- **TypeScript** uses **NPM**, which gives you access to millions of reliable libraries.
- It is easier to maintain and makes it easier to use **React**, **Angular**, and **Vue**. 
- **TypeScript** integrates well with these frameworks, particularly **React**, which has been described as a perfect fit with **TypeScript**.

# 🚀 Install TypeScript

- You can get access to **Typescript** either by installing TS Visual Studio Plugin or using _NPM_(Node Package Manager).

- After installing _NPM_, write the following command in terminal to install **TypeScript** :

```bash
npm install -g typescript
```

- To check what version you are using, run the following command line in a shell :

```bash
tsc -v
```

<br>

# 🔨 Compiling TypeScript Code

- **TypeScript** compiles your `<file_name>.ts` to
  `<file_name>.js`, to compile run the following command :

```bash
tsc <file_name>.ts
```

- When using a text editor like [VSCode](https://code.visualstudio.com) or any other, always remember to create a `tsconfig.json` for better compilation.

- A simple `tsconfig.json` looks like this :

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true
  }
}
```

- Having the generated **JavaScript** file in the same folder at the **TypeScript** source will quickly get cluttered on larger projects. You can specify the output directory for the compiler with the `outDir` attribute. Such as :

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "build"
  }
}
```

- This will generate a **JavaScript** file inside `build` directory inside the _base directory_.

# 📕 Resources

- For more resource on **TypeScript** : -
  1. [TypeScript Tutorial on Educative.io](https://www.educative.io/blog/typescript-tutorial)
  2. [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)
  3. [Learn TypeScript in 5 minutes on FreeCodeCamp](https://www.freecodecamp.org/news/learn-typescript-in-5-minutes-13eda868daeb/)
