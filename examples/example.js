const mc = require('../src')

const mycon = new mc.Console()

let i = 0

setInterval(() => {
    mycon.log(`hello! ${++i}`)
}, 2000)