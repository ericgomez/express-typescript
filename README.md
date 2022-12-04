# TypeScript with Node.js and Express

This template should help get you started developing with Vue 3 in Vite.

## Recommended init Setup

1. Use npm’s initializer command to create a package.json file:
    1) Run `npm init --yes` from VSCode's command palette
    2) Run `git init` from VSCode's command palette
    3) Run `npx gitignore node` from VSCode's command palette


## Type Support for `nodejs` Imports in TS

1. In your project directory, install the packages required to run a TypeScript project:
    1) Run `npm install --save-dev typescript ts-node nodemon` from VSCode's command palette
2. Now, to create a new TypeScript tools with the default configuration, run the following:
    1) Run `npx tsc --init` from VSCode's command palette

## Add dependencies production

```sh
npm install express mongoose pug express-validator dotenv
```

## Add dependencies development

```sh
npm install -D @types/express @types/node
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
