# Javascript Studies
Just some some initial Javascript studies

## ES6

Needs to install yarn and run some commands:
Some commands:
```
yarn init
```

### Pre-requistes to Module 01

For Module 01 we need to install some plugins using yarn:
```
yarn add @babel/cli
yarn add @babel/preset-env
yarn add @babel/core
yarn add @babel/plugin-proposal-object-rest-spread
```

To make Yarn watch for `.js` files and recreate the `bundle.js`, which is the "JS for old browsers", inside
the "module_01" directory:
```
yarn <mod_01/cha_01>
```

### Pre-requisites to Module 02

Install with yarn:
```
yarn add webpack webpack-cli -D
yarn add babel-loader -D
yarn add webpack-dev-server -D
```

Run `yarn dev` to use webpack to watch for several `.js` files and package them to a single `bundle.js`.

### Pre-requisites to Module 03

Install with yarn:
```
yarn add @babel/plugin-transform-async-to-generator -D
yarn add @babel/polyfill -D
```

### Pre-requisites to Module 04

Install with yarn:
```
yarn add axios
```

## NodeJS

To initialize, enter the dir and run:
```
npm init -y
```

Install some dependecies:
```
npm install express
npm install mongoose
npm install mongoose-paginate
npm install require-dir
npm install cors
```

Express is a micro framework to deal with routes and views.
To run the server:

```
node server.js
```

Install nodemon (`npm install -D nodemon`, `-D` is to install it as dev dependencie), so changes are auto
loaded. Create a new script in `package.json` and run the scrip with `npm run dev`.
