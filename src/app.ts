import Liquid from 'liquidjs'
import path from "path"
const engine = new Liquid({
    root: path.resolve(__dirname, './'), 
    extname: '.liquid'
});

engine
    .renderFile("hello", {name: 'alice'})   // will read and render `views/hello.liquid`
    .then(console.log)  // outputs "Alice"