# Multi-Console

---

multi-console is a module for clustering console outputs

## installation

```sh
npm i multi-console
npm i -g multi-console
```

## usage

you must install this package by both global, and normal.

then you can create a new Console object with `new mc.Console()` and use it like native `console.log()` function, like the [example code](#example).

but if you want to print the output, you have to execute the `mc` global command at the place you want.

then, everything has automatically will be worked.

## example

```js
import * as mc from "../index"

const mycon = new mc.Console()

let i = 0

setInterval(() => {
    mycon.log(`hello! ${++i}`)
}, 2000)
```

## contribute

are you want to contribute to this repository?

please read [CONTRIBUTING.md](./CONTRIBUTING.md)!
