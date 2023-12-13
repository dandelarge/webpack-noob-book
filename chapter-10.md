# WEBPACK

## The webpack project (cowsay webapp)

### What did we do so far?
- We created a Static server that serves from a `public` folder
    - We have a base index.html
- We made a scaffolding for the build step.
    - we can bundle our ./src folder into a ./public/bundle.js file

### What do we need to do still?
- We need to add transpilation so we can use react
- btw we need react
- we haven't done any optimizations on the production code yet. (no minimization, etc...)

## Scaffolding webpack

### installing
this installs webpack
```
cd [project_name]
npm i -D webpack webpack-cli
```

### configuring
in the root of the project we create the file
```
touch webpack.config.js
```

and then we add the `./src/index.js` file as the entry file and 
`./public/bundle.js` as the output file

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}
```

And then we add the build script to our `package.json`.

```
//... the rest of package.json
"scripts": {
    //... other scripts
    "build": "webpack --config webpack.config.js"
  },
//... more package.json  
```

now we can run the command `npm run build`!

MAGIC!
