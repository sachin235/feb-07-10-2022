* FE applications is JavaScript
* JavaScript is __dynamically typed__ language

``` java
int i = 10;
String s = "Hello"; 
```

``` javascript
let i = 10;
let s = "Hello"; 
```

``` typescript
let i: number = 10;
let s: string = "Hello"; 
```

* You have to create functions and treat them as classes
* JS is Object Oriented
* Case sensitive


* ECMAScript is the parent that is the specification for all scripting languages
* ECMAScript -> ES6, ES7, ES2018 ... ES2021, esnext
* ES6 came up with features of OO

* TypeScript is a statically typed OO language
* Write code in TS and compile(or transpile) it to JS code

## Setting up TypeScript

* Latest version of TS is 4.x
* __sudo npm i -g typescript__
* __tsc --version__
* __tsc --watch  src/*.ts --outDir dist --target esnext__
* __tsc --init__ generates __tsconfig.json__