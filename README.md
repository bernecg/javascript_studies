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
