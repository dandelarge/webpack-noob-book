# The Bundling book
Th,is document is intended to be a compilation of knowledge for developers that want to understand how bundlers work.

Contributions are always welcome.

## History lesson: The web before and after complex front-ends

This section is an intro. It gives context and explains the need for all the techniques we (JS Developers) have developed (or copied) along the years.

### Chapter 1: When the Web Pages were simple

### Chapter 2: The raise of Dynamic Websites

### Chapter 3: NodeJS becomes "a thing"

### Chapter 4: Javascript is out of control

##### 4.1 The Scope problem

##### 4.2 Bigger Teams, Bigger codebases

## Frontend building techniques: Concatenation and bundling

First we explore the techniques in an abstract way. Then we go into specifics with commertial tooling

### Chapter 5: Clever ways we fixed the scope problems in JS

#### 5.1 The Module Pattern

#### 5.2 CommonJS

### Chapter 6: The build step

### Chapter 7: Concatenation

### Chapter 8: Another tasks related to the building step

#### 8.1 Transpilation

#### 8.2 Minimization

#### 8.3 CDN optimization

### Chapter 9: The raise and fall of Task runners

#### 9.1 The build step and the need for linting

#### 9.2 What if we put all together in one single pipeline?

#### 9.3 Grunt & Gulp

#### 9.4 The concept of bundling is born

### Chapter 10: Bundling

#### 10.1 Everything goes in a single place

#### 10.2 Webpack

## EcmaScript Modules vs CommonJS vs UMD vs AMD

What's the difference between require and import? Why do we have more than one way to do modules?

### Chapter 11: The EcmaScript 6.0 Standard, AKA JS2015, AKA ES6

### Chapter 12: The adoption of ES6

### Chapter 13: Bundling ESM Modules

## Webpack Basics: entry, output & module

Finally, webpack action. We revisit the bundling technique from chapter 10 and apply it to real life with webpack.

### Chapter 14: The entry file & output

### Chapter 15: The Module configuration

## Loaders and Plugins

We stablished before: Modern Frontends are more than a bunch of js files meshed together in an HTML page. We have images, and css preprocesors, and maybe pdf's, or who-knows-what-else. How do we deal with these?

### Chapter 16: Test patterns & Loaders

### Chapter 17: Webpack plugins

### Chapter 18: Bundling for backend vs bundling for frontend

### Chapter 19: Improvements over the original recepe and new patterns

#### 19.1 Transpilation (again)

#### 19.2 Minification (again)

#### 19.3 Chunking

#### 19.4 Image optimization

#### 19.5 Tree Shaking

#### 19.6 Code Splitting

#### 19.7 What does this mean for the Task runners?

## Developer Experience (DX) becomes important

As we have to deal with more complex apps, the development process became more tedious. So we came up with a bunch of interesting solutions to make things snappier.

### Chapter 20: Development Servers

#### 20.1 development vs production

#### 20.2 Automating the build step

#### 20.3 Nodemon

#### 20.4 webpack-dev-server

#### 20.5 Hot Module Reloading

### Chapter 21: Isotropic Apps. AKA SSR

#### 21.1 Building an Isotropic App the old way (Muse)

##### 21.1.1 Developement servers

##### 21.1.2 Production Build

#### 21.2 The new ways with Fullstack frameworks

## Webpack alternatives: Vite, ESBuild, Rollup, Turbopack, Bun, etc...

Once we figured out how to bundle the javascript and make the development process nicer, we can start optimizing. And picking newer tools.

### Chapter 22: Modern Javascript Building Tools

#### 22.1 Frontend Build Tooling: Vite

#### 22.2 Full environment and runtime: Bun

### Chapter 23: Modern Bundlers: Turbopack, ESBuild & Rollout
