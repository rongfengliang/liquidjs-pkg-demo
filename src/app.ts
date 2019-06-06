import Liquid from 'liquidjs'
import path from "path"
const engine = new Liquid({
    root: path.resolve(__dirname, './'), 
    extname: '.liquid'
});

const users = [
    {
        name:"dalong",
        age:33
    },
    {
        name:"www",
        age:2
    }
]
engine
    .renderFile("hello", {name: 'alice',users:users})   // will read and render `views/hello.liquid`
    .then(console.log)  // outputs "Alice"